import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import mongoose from "mongoose";
import { getAllowedOrigins } from "../config/origins.js";

let authInstance;

export function getAuth() {
  if (!authInstance) {
    const db = mongoose.connection.getClient().db();
    const {
      BETTER_AUTH_SECRET,
      BETTER_AUTH_URL,
      ADMIN_EMAIL,
      GITHUB_CLIENT_ID,
      GITHUB_CLIENT_SECRET,
    } = process.env;

    const hasGithubOAuth = Boolean(GITHUB_CLIENT_ID && GITHUB_CLIENT_SECRET);
    const isProduction = (BETTER_AUTH_URL || "").startsWith("https://");

    authInstance = betterAuth({
      database: mongodbAdapter(db),
      emailAndPassword: {
        enabled: true,
        // No public registration — the single admin is created once via
        // server/src/seed/seedAdmin.js using Better Auth's own server API.
        disableSignUp: true,
      },
      // Optional: "Sign in with GitHub" on the admin login page. Only active
      // when GITHUB_CLIENT_ID/SECRET are set (see server/.env.example).
      ...(hasGithubOAuth && {
        socialProviders: {
          github: {
            clientId: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
          },
        },
      }),
      // Social sign-in normally auto-creates an account for any authenticated
      // provider user — that would reopen the "no public registration" hole
      // through a different door. Block account creation for anyone whose
      // email isn't the configured admin, regardless of sign-in method.
      databaseHooks: {
        user: {
          create: {
            before: async (user) => {
              if (user.email !== ADMIN_EMAIL) {
                return false;
              }
            },
          },
        },
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
        useSecureCookies: isProduction,
        // In production the frontend and backend are on different domains
        // (e.g. two separate Render services) — that's cross-site from the
        // browser's perspective, and a SameSite=Lax cookie (the safe default
        // for same-origin local dev, where Vite proxies /api/* so everything
        // looks same-origin) is never sent on cross-site fetches. Without
        // this, sign-in would appear to succeed but every subsequent request
        // would look logged-out.
        ...(isProduction && {
          defaultCookieAttributes: {
            sameSite: "none",
            secure: true,
          },
        }),
      },
    });
  }
  return authInstance;
}
