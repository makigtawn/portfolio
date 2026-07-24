import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";
import { StatCard } from "@/components/admin/StatCard";
import { AnalyticsChart } from "@/components/admin/AnalyticsChart";
import { useAnalytics } from "@/hooks/useAnalytics";

export const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const analytics = useAnalytics();

  useEffect(() => {
    apiGet("/api/dashboard/stats")
      .then(setStats)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs text-primary border border-amber-dim px-2 py-0.5 rounded-sm tracking-[.2em]">
          CH·00
        </span>
        <h1 className="font-serif text-2xl text-foreground tracking-wide">
          Overview
        </h1>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
      </div>

      {loading && (
        <p className="font-mono text-xs text-muted-foreground">
          Loading...
        </p>
      )}
      {error && <p className="text-sm text-danger">{error}</p>}

      {stats && (
        <div className="grid sm:grid-cols-4 gap-4">
          <StatCard label="Projects" value={stats.projects} />
          <StatCard label="Messages" value={stats.messages.total} />
          <StatCard label="Unread messages" value={stats.messages.unread} />
          <div className="bg-card border border-border rounded-sm p-6">
            <p className="font-serif text-2xl text-signal-green flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-signal-green animate-blink" />
              {analytics.visitorCount}
            </p>
            <p className="font-mono text-xs uppercase tracking-[.15em] text-muted-foreground mt-1">
              Visitors online
            </p>
          </div>
        </div>
      )}

      {analytics.error && <p className="text-sm text-danger">{analytics.error}</p>}
      {!analytics.loading && <AnalyticsChart buckets={analytics.buckets} />}
    </div>
  );
};
