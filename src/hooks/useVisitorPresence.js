import { useEffect } from "react";
import { createSocket } from "@/lib/socket";

function detectDevice() {
  const ua = navigator.userAgent;
  if (/tablet|ipad/i.test(ua)) return "tablet";
  if (/mobi|android|iphone/i.test(ua)) return "mobile";
  return "desktop";
}

// Mount = a visitor is present on the public site: connects a socket for the
// live "online now" count and logs a single pageview. Unmount (navigating
// away or closing the tab) drops the connection and the count with it.
export function useVisitorPresence() {
  useEffect(() => {
    const socket = createSocket("visitor");
    socket.emit("pageview", {
      path: window.location.pathname,
      referrer: document.referrer || "",
      device: detectDevice(),
    });

    return () => {
      socket.disconnect();
    };
  }, []);
}
