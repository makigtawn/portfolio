import { createAuthClient } from "better-auth/react";

// In dev there's no VITE_API_URL — requests go to the same origin as the
// page (localhost:5173) and Vite's dev proxy forwards /api/* to Express,
// which keeps the session cookie same-origin from the browser's perspective.
const BASE_URL = import.meta.env.VITE_API_URL || window.location.origin;

export const authClient = createAuthClient({
  baseURL: BASE_URL,
});

export const { useSession, signIn, signOut } = authClient;
