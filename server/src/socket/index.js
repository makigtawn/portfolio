import { Server } from "socket.io";
import { fromNodeHeaders } from "better-auth/node";
import { getAuth } from "../lib/auth.js";
import { PageView } from "../models/PageView.js";

// In-memory count of currently-connected public-site visitors. Resets on
// server restart, which is fine — this is a live "who's here now" gauge,
// not a persisted metric (persisted pageviews live in Mongo instead).
let visitorCount = 0;

export function initSocket(httpServer, allowedOrigins) {
  const io = new Server(httpServer, {
    cors: {
      origin(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
        callback(new Error(`Origin ${origin} not allowed by CORS`));
      },
      credentials: true,
    },
  });

  io.on("connection", async (socket) => {
    const isAdmin = socket.handshake.query.role === "admin";

    if (isAdmin) {
      const session = await getAuth()
        .api.getSession({ headers: fromNodeHeaders(socket.handshake.headers) })
        .catch(() => null);

      if (!session || session.user.email !== process.env.ADMIN_EMAIL) {
        socket.disconnect(true);
        return;
      }

      socket.join("admin");
      socket.emit("visitor-count", visitorCount);
      return;
    }

    visitorCount += 1;
    io.to("admin").emit("visitor-count", visitorCount);

    socket.on("pageview", async (payload) => {
      const path = payload?.path;
      if (typeof path !== "string" || !path) return;

      const device = ["mobile", "tablet", "desktop"].includes(payload.device)
        ? payload.device
        : "desktop";

      const doc = await PageView.create({
        path: path.slice(0, 200),
        referrer: typeof payload.referrer === "string" ? payload.referrer.slice(0, 500) : "",
        device,
      });

      io.to("admin").emit("pageview", {
        path: doc.path,
        referrer: doc.referrer,
        device: doc.device,
        createdAt: doc.createdAt,
      });
    });

    socket.on("disconnect", () => {
      visitorCount = Math.max(0, visitorCount - 1);
      io.to("admin").emit("visitor-count", visitorCount);
    });
  });

  return io;
}
