import { useState } from "react";
import { Button } from "@/components/Button";
import { apiUpload } from "@/lib/api";

const emptyForm = {
  title: "",
  description: "",
  image: "",
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
    image: project.image || "",
    tags: (project.tags || []).join(", "),
    techStack: (project.techStack || []).join(", "),
    category: project.category || "",
    link: project.link || "",
    github: project.github || "",
    featured: !!project.featured,
  };
}

const inputClasses =
  "w-full px-4 py-2 bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all";

export const ProjectForm = ({ project, onSubmit, onCancel, submitting }) => {
  const [form, setForm] = useState(() => toFormState(project));
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const update = (field) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [field]: value }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setUploadError("");
    try {
      const { url } = await apiUpload("/api/uploads", file);
      setForm((f) => ({ ...f, image: url }));
    } catch (err) {
      setUploadError(err.message);
    } finally {
      setUploading(false);
    }
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
    <form onSubmit={handleSubmit} className="glass p-6 space-y-4">
      <h2 className="text-lg font-semibold">{project ? "Edit project" : "New project"}</h2>

      <div>
        <label className="block text-sm font-medium mb-2">Title</label>
        <input required value={form.title} onChange={update("title")} className={inputClasses} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Description</label>
        <textarea
          required
          rows={3}
          value={form.description}
          onChange={update("description")}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Image</label>
        <div className="flex items-center gap-3">
          <input
            value={form.image}
            onChange={update("image")}
            placeholder="Image URL, or upload below"
            className={inputClasses}
          />
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={uploading}
          className="mt-2 text-sm text-muted-foreground"
        />
        {uploading && <p className="text-xs text-muted-foreground mt-1">Uploading...</p>}
        {uploadError && <p className="text-xs text-red-500 mt-1">{uploadError}</p>}
        {form.image && (
          <img src={form.image} alt="Preview" className="mt-2 h-24 rounded-lg object-cover" />
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Live link</label>
          <input value={form.link} onChange={update("link")} className={inputClasses} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">GitHub link</label>
          <input value={form.github} onChange={update("github")} className={inputClasses} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <input value={form.category} onChange={update("category")} className={inputClasses} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Tags (comma separated)</label>
          <input value={form.tags} onChange={update("tags")} className={inputClasses} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Tech stack (comma separated)</label>
        <input value={form.techStack} onChange={update("techStack")} className={inputClasses} />
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={form.featured} onChange={update("featured")} />
        Featured
      </label>

      <div className="flex gap-3 pt-2">
        <Button type="submit" size="sm" disabled={submitting || uploading}>
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
