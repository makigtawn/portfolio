import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";
import { createSocket } from "@/lib/socket";

// Hourly buckets for the chart, seeded from REST history then extended
// live as "pageview" events arrive over the socket.
export function useAnalytics() {
  const [buckets, setBuckets] = useState([]);
  const [visitorCount, setVisitorCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    apiGet("/api/analytics/pageviews?hours=24")
      .then((data) => setBuckets(data.buckets))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));

    const socket = createSocket("admin");

    socket.on("visitor-count", setVisitorCount);

    socket.on("pageview", ({ createdAt }) => {
      const hour = new Date(createdAt);
      hour.setMinutes(0, 0, 0);
      const hourIso = hour.toISOString();

      setBuckets((prev) => {
        const existing = prev.find((b) => b.time === hourIso);
        if (existing) {
          return prev.map((b) => (b.time === hourIso ? { ...b, count: b.count + 1 } : b));
        }
        return [...prev, { time: hourIso, count: 1 }];
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return { buckets, visitorCount, loading, error };
}
