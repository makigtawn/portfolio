import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiPost } from "@/lib/api";
import { ProjectForm } from "@/components/admin/ProjectForm";

export const AdminProjectNew = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (form) => {
    setSubmitting(true);
    setError("");
    try {
      await apiPost("/api/projects", form);
      navigate("/admin/projects", { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center gap-4">
        <span className="font-mono text-[11px] text-primary border border-amber-dim px-2 py-0.5 rounded-sm tracking-[.2em]">
          CH·01
        </span>
        <h1 className="font-serif text-2xl text-foreground tracking-wide">New broadcast</h1>
      </div>
      {error && <p className="text-sm text-danger">{error}</p>}
      <ProjectForm
        submitting={submitting}
        onCancel={() => navigate("/admin/projects")}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
