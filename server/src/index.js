import "dotenv/config";
import { createServer } from "http";
import { connectDB } from "./config/db.js";
import { getAllowedOrigins } from "./config/origins.js";
import { createApp } from "./app.js";
import { initSocket } from "./socket/index.js";

const { PORT = 5000, MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  console.error("Missing MONGODB_URI in server/.env");
  process.exit(1);
}



connectDB(MONGODB_URI)
  .then(() => {
    const app = createApp();
    const server = createServer(app);
    initSocket(server, getAllowedOrigins());

    server.listen(PORT, () => {
      console.log(`[server] listening on http://localhost:${PORT}`);
      console.log(`[server] allowed origins: ${getAllowedOrigins().join(", ")}`);
    });
  })
  .catch((err) => {
    console.error("[mongo] failed to connect:", err.message);
    process.exit(1);
  });
