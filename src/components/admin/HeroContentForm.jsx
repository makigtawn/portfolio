import { useState } from "react";
import { Button } from "@/components/Button";

const inputClasses =
  "w-full px-4 py-2 bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all";

export const HeroContentForm = ({ hero, onSubmit, submitting }) => {
  const [form, setForm] = useState(hero);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="glass p-6 space-y-4">
      <h2 className="text-lg font-semibold">Hero</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Greeting</label>
          <input value={form.greeting} onChange={update("greeting")} className={inputClasses} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input value={form.name} onChange={update("name")} className={inputClasses} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <input value={form.title} onChange={update("title")} className={inputClasses} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Resume URL</label>
          <input value={form.resumeUrl} onChange={update("resumeUrl")} className={inputClasses} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Tagline</label>
        <textarea
          rows={3}
          value={form.tagline}
          onChange={update("tagline")}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <Button type="submit" size="sm" disabled={submitting}>
        {submitting ? "Saving..." : "Save hero"}
      </Button>
    </form>
  );
};
