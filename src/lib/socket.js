import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_API_URL || window.location.origin;

// role: "admin" authenticates the socket against the session cookie server-side
// and joins the admin room; anything else is treated as an anonymous visitor.
export function createSocket(role) {
  return io(SOCKET_URL, {
    withCredentials: role === "admin",
    query: { role },
  });
}
