import { useState } from "react";
import { Button } from "@/components/Button";

const inputClasses =
  "w-full px-4 py-2 bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all";

export const AboutContentForm = ({ about, onSubmit, submitting }) => {
  const [form, setForm] = useState(about);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="glass p-6 space-y-4">
      <h2 className="text-lg font-semibold">About</h2>

      <div>
        <label className="block text-sm font-medium mb-2">
          Heading (use a new line for a line break)
        </label>
        <textarea
          rows={2}
          value={form.heading}
          onChange={update("heading")}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Body text</label>
        <textarea
          rows={5}
          value={form.bodyText}
          onChange={update("bodyText")}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <Button type="submit" size="sm" disabled={submitting}>
        {submitting ? "Saving..." : "Save about"}
      </Button>
    </form>
  );
};
