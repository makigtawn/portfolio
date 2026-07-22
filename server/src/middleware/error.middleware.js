import { ApiError } from "../utils/ApiError.js";

export function notFoundHandler(req, res) {
  res.status(404).json({ error: "Not found" });
}

// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  if (err.message?.startsWith("Origin ") && err.message?.endsWith("not allowed by CORS")) {
    return res.status(403).json({ error: "Origin not allowed" });
  }

  const status = err instanceof ApiError ? err.status : 500;
  const message = err instanceof ApiError ? err.message : "Internal server error";
  if (status === 500) {
    console.error(err);
  }
  res.status(status).json({ error: message });
}
