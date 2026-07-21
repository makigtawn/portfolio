import { useState } from "react";
import { Button } from "@/components/Button";
import { ICONS_BY_KEY } from "@/components/skillIcons";

const inputClasses =
  "w-full px-3 py-2 bg-surface border border-border focus:border-black focus:ring-1 focus:ring-black outline-none transition-all";

const iconKeys = Object.keys(ICONS_BY_KEY);

export const SkillsContentForm = ({ skills, onSubmit, submitting }) => {
  const [rows, setRows] = useState(skills);

  const updateRow = (i, field) => (e) => {
    const value = e.target.value;
    setRows((prev) => prev.map((r, idx) => (idx === i ? { ...r, [field]: value } : r)));
  };

  const removeRow = (i) => setRows((prev) => prev.filter((_, idx) => idx !== i));
  const addRow = () => setRows((prev) => [...prev, { name: "", iconKey: iconKeys[0] }]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(rows);
      }}
      className="glass p-6 space-y-4">
      <h2 className="text-lg font-semibold">Skills</h2>

      <div className="space-y-2">
        {rows.map((row, i) => (
          <div key={i} className="flex gap-2 items-center">
            <input
              value={row.name}
              onChange={updateRow(i, "name")}
              placeholder="Skill name"
              className={inputClasses}
            />
            <select
              value={row.iconKey}
              onChange={updateRow(i, "iconKey")}
              className={inputClasses}>
              {iconKeys.map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
            <Button type="button" size="sm" variant="destructive" onClick={() => removeRow(i)}>
              Remove
            </Button>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <Button type="button" size="sm" variant="ghost" onClick={addRow}>
          Add skill
        </Button>
        <Button type="submit" size="sm" disabled={submitting}>
          {submitting ? "Saving..." : "Save skills"}
        </Button>
      </div>
    </form>
  );
};
