import { useState } from "react";
import { Button } from "@/components/Button";

const inputClasses =
  "w-full px-4 py-2 bg-secondary border border-border text-foreground font-mono focus:border-primary focus:ring-2 focus:ring-[rgba(212,160,48,.15)] outline-none transition-all";

const labelClasses = "block font-mono text-xs uppercase tracking-[.15em] text-muted-foreground mb-2";

export const AboutContentForm = ({ about, onSubmit, submitting }) => {
  const [rows, setRows] = useState(about.logs?.length ? about.logs : [{ time: "", text: "" }]);

  const updateRow = (i, field) => (e) => {
    const value = e.target.value;
    setRows((prev) => prev.map((r, idx) => (idx === i ? { ...r, [field]: value } : r)));
  };

  const removeRow = (i) => setRows((prev) => prev.filter((_, idx) => idx !== i));
  const addRow = () => setRows((prev) => [...prev, { time: "", text: "" }]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ logs: rows });
      }}
      className="bg-card border border-border rounded-sm p-6 pt-8 space-y-4 relative">
      <span className="absolute -top-[9px] left-6 bg-card px-2 font-mono text-xs tracking-[.18em] text-primary">
        ABOUT · TRANSMISSION LOG
      </span>

      <div className="space-y-3">
        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-[90px_1fr_auto] gap-2 items-start">
            <div>
              <label className={labelClasses}>Time</label>
              <input
                value={row.time}
                onChange={updateRow(i, "time")}
                placeholder="00:00:01"
                className={inputClasses}
              />
            </div>
            <div>
              <label className={labelClasses}>Entry</label>
              <textarea
                rows={2}
                value={row.text}
                onChange={updateRow(i, "text")}
                className={`${inputClasses} resize-none`}
              />
            </div>
            <Button
              type="button"
              size="sm"
              variant="destructive"
              className="mt-6"
              onClick={() => removeRow(i)}>
              Remove
            </Button>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <Button type="button" size="sm" variant="ghost" onClick={addRow}>
          Add entry
        </Button>
        <Button type="submit" size="sm" disabled={submitting}>
          {submitting ? "Saving..." : "Save about"}
        </Button>
      </div>
    </form>
  );
};
