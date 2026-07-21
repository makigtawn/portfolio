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
      <h1 className="text-2xl font-bold">New project</h1>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <ProjectForm
        submitting={submitting}
        onCancel={() => navigate("/admin/projects")}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
