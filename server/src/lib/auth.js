import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import mongoose from "mongoose";
import { getAllowedOrigins } from "../config/origins.js";

let authInstance;

export function getAuth() {
  if (!authInstance) {
    const db = mongoose.connection.getClient().db();
    const { BETTER_AUTH_SECRET, BETTER_AUTH_URL } = process.env;

    authInstance = betterAuth({
      database: mongodbAdapter(db),
      emailAndPassword: {
        enabled: true,
        // No public registration — the single admin is created once via
        // server/src/seed/seedAdmin.js using Better Auth's own server API.
        disableSignUp: true,
      },
      secret: BETTER_AUTH_SECRET,
      baseURL: BETTER_AUTH_URL,
      trustedOrigins: getAllowedOrigins(),
      rateLimit: {
        enabled: true,
        window: 60,
        max: 20,
      },
      advanced: {
        // Better Auth auto-adds Secure when baseURL is https://, but we
        // pin it explicitly so prod behavior doesn't depend on inference.
        useSecureCookies: (BETTER_AUTH_URL || "").startsWith("https://"),
      },
    });
  }
  return authInstance;
}
