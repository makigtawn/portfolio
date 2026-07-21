import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { toNodeHandler } from "better-auth/node";
import { connectDB } from "./config/db.js";
import { getAllowedOrigins } from "./config/origins.js";
import { getAuth } from "./lib/auth.js";
import { notFoundHandler, errorHandler } from "./middleware/error.middleware.js";
import projectsRoutes from "./routes/projects.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import contentRoutes from "./routes/content.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import uploadsRoutes from "./routes/uploads.routes.js";

const { PORT = 5000, MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  console.error("Missing MONGODB_URI in server/.env");
  process.exit(1);
}

const allowedOrigins = getAllowedOrigins();

const app = express();

app.use(helmet());
app.use(
  cors({
    origin(origin, callback) {
      // Same-origin/non-browser requests (curl, server-to-server) send no Origin header.
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
    credentials: true,
  }),
);

connectDB(MONGODB_URI)
  .then(() => {
    // Better Auth handles its own body parsing, so it's mounted before express.json().
    app.all("/api/auth/*", toNodeHandler(getAuth()));

    app.use(express.json());

    app.get("/api/health", (req, res) => {
      res.json({ ok: true });
    });

    app.use("/api/projects", projectsRoutes);
    app.use("/api/contact", contactRoutes);
    app.use("/api/content", contentRoutes);
    app.use("/api/dashboard", dashboardRoutes);
    app.use("/api/uploads", uploadsRoutes);

    app.use(notFoundHandler);
    app.use(errorHandler);

    app.listen(PORT, () => {
      console.log(`[server] listening on http://localhost:${PORT}`);
      console.log(`[server] allowed origins: ${allowedOrigins.join(", ")}`);
    });
  })
  .catch((err) => {
    console.error("[mongo] failed to connect:", err.message);
    process.exit(1);
  });
