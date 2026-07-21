import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";
import { StatCard } from "@/components/admin/StatCard";

export const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    apiGet("/api/dashboard/stats")
      .then(setStats)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {error && <p className="text-sm text-red-500">{error}</p>}

      {stats && (
        <div className="grid sm:grid-cols-3 gap-4">
          <StatCard label="Projects" value={stats.projects} />
          <StatCard label="Messages" value={stats.messages.total} />
          <StatCard label="Unread messages" value={stats.messages.unread} />
        </div>
      )}
    </div>
  );
};
