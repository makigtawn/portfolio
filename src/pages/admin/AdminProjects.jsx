import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiGet, apiPut, apiDelete } from "@/lib/api";
import { ProjectForm } from "@/components/admin/ProjectForm";
import { ProjectTable } from "@/components/admin/ProjectTable";
import { Button } from "@/components/Button";

export const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const load = () => {
    apiGet("/api/projects")
      .then((data) => setProjects(data.projects))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const handleSubmit = async (form) => {
    setSubmitting(true);
    setError("");
    try {
      await apiPut(`/api/projects/${editing._id}`, form);
      setEditing(null);
      load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (project) => {
    if (!confirm(`Delete "${project.title}"? This cannot be undone.`)) return;
    try {
      await apiDelete(`/api/projects/${project._id}`);
      load();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] text-primary border border-amber-dim px-2 py-0.5 rounded-sm tracking-[.2em]">
            CH·01
          </span>
          <h1 className="font-serif text-2xl text-foreground tracking-wide">Broadcasts</h1>
        </div>
        {!editing && (
          <Button size="sm" to="/admin/projects/new">
            New project
          </Button>
        )}
      </div>

      {error && <p className="text-sm text-danger">{error}</p>}

      {editing && (
        <ProjectForm
          key={editing._id}
          project={editing}
          submitting={submitting}
          onCancel={() => setEditing(null)}
          onSubmit={handleSubmit}
        />
      )}

      {loading ? (
        <p className="font-mono text-[12px] text-muted-foreground">Loading...</p>
      ) : (
        <ProjectTable projects={projects} onEdit={setEditing} onDelete={handleDelete} />
      )}
    </div>
  );
};
