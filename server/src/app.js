import express from "express";
import cors from "cors";
import helmet from "helmet";
import { toNodeHandler } from "better-auth/node";
import { getAllowedOrigins } from "./config/origins.js";
import { getAuth } from "./lib/auth.js";
import { notFoundHandler, errorHandler } from "./middleware/error.middleware.js";
import projectsRoutes from "./routes/projects.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import contentRoutes from "./routes/content.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import uploadsRoutes from "./routes/uploads.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";

// Builds the Express app. Assumes Mongoose is already connected (both the
// real bootstrap in index.js and tests in server/test/ call connectDB first).
export function createApp() {
  const allowedOrigins = getAllowedOrigins();
  const app = express();

  // Render (and most PaaS hosts) put the app behind a reverse proxy, so
  // req.ip is the proxy's address unless we trust the X-Forwarded-For header
  // it sets. Without this, per-IP rate limiting (Better Auth + express-rate-limit
  // on /api/contact) collapses into one shared bucket for all visitors.
  app.set("trust proxy", 1);

  app.use(helmet());
  app.use(
    cors({
      origin(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
        callback(new Error(`Origin ${origin} not allowed by CORS`));
      },
      credentials: true,
    }),
  );

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
  app.use("/api/analytics", analyticsRoutes);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
