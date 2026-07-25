import { useState } from "react";
import { Button } from "@/components/Button";

const emptyForm = {
  title: "",
  description: "",
  tags: "",
  techStack: "",
  category: "",
  link: "",
  github: "",
  featured: false,
};

function toFormState(project) {
  if (!project) return emptyForm;
  return {
    title: project.title || "",
    description: project.description || "",
    tags: (project.tags || []).join(", "),
    techStack: (project.techStack || []).join(", "),
    category: project.category || "",
    link: project.link || "",
    github: project.github || "",
    featured: !!project.featured,
  };
}

const inputClasses =
  "w-full px-4 py-2 bg-secondary border border-border text-foreground font-mono focus:border-primary focus:ring-2 focus:ring-[rgba(212,160,48,.15)] outline-none transition-all";

const labelClasses = "block font-mono text-xs uppercase tracking-[.15em] text-muted-foreground mb-2";

export const ProjectForm = ({ project, onSubmit, onCancel, submitting }) => {
  const [form, setForm] = useState(() => toFormState(project));

  const update = (field) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...form,
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      techStack: form.techStack
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-sm p-6 space-y-4">
      <h2 className="font-serif text-lg text-foreground">{project ? "Edit project" : "New project"}</h2>

      <div>
        <label className={labelClasses}>Title</label>
        <input required value={form.title} onChange={update("title")} className={inputClasses} />
      </div>

      <div>
        <label className={labelClasses}>Description</label>
        <textarea
          required
          rows={3}
          value={form.description}
          onChange={update("description")}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClasses}>Live link</label>
          <input value={form.link} onChange={update("link")} className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses}>GitHub link</label>
          <input value={form.github} onChange={update("github")} className={inputClasses} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClasses}>Category</label>
          <input value={form.category} onChange={update("category")} className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses}>Tags (comma separated)</label>
          <input value={form.tags} onChange={update("tags")} className={inputClasses} />
        </div>
      </div>

      <div>
        <label className={labelClasses}>Tech stack (comma separated)</label>
        <input value={form.techStack} onChange={update("techStack")} className={inputClasses} />
      </div>

      <label className="flex items-center gap-2 font-mono text-xs uppercase tracking-[.1em] text-muted-foreground">
        <input type="checkbox" checked={form.featured} onChange={update("featured")} />
        Featured
      </label>

      <div className="flex gap-3 pt-2">
        <Button type="submit" size="sm" disabled={submitting}>
          {submitting ? "Saving..." : project ? "Save changes" : "Create project"}
        </Button>
        {onCancel && (
          <Button type="button" size="sm" variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
};
