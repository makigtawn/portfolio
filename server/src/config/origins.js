// CLIENT_ORIGIN accepts a comma-separated list so local dev survives Vite
// picking a different port (5173 -> 5174, etc.) without a manual env edit.
export function getAllowedOrigins() {
  const raw = process.env.CLIENT_ORIGIN || "http://localhost:5173";
  return raw.split(",").map((o) => o.trim()).filter(Boolean);
}
