import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import { ContactError, sendPortfolioEmail } from "./lib/send-email.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        reject(new ContactError("Invalid request body.", 400));
      }
    });
    req.on("error", reject);
  });
}

function contactApiDevPlugin(mode) {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    name: "contact-api-dev",
    configureServer(server) {
      server.middlewares.use("/api/contact", async (req, res, next) => {
        if (req.method !== "POST") {
          return next();
        }

        res.setHeader("Content-Type", "application/json");

        try {
          const payload = await readRequestBody(req);
          await sendPortfolioEmail(payload, {
            gmailUser: env.GMAIL_USER,
            gmailPass: env.GMAIL_APP_PASSWORD,
            recipientEmail: env.CONTACT_TO_EMAIL,
          });
          res.statusCode = 200;
          res.end(JSON.stringify({ success: true }));
        } catch (error) {
          const status = error instanceof ContactError ? error.status : 500;
          const message =
            error instanceof ContactError
              ? error.message
              : "Could not send your message.";
          res.statusCode = status;
          res.end(JSON.stringify({ error: message }));
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), contactApiDevPlugin(mode)],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
