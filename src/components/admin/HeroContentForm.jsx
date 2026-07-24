// import { useState } from "react";
// import { Button } from "@/components/Button";

// const inputClasses =
//   "w-full px-4 py-2 bg-secondary border border-border text-foreground font-mono focus:border-primary focus:ring-2 focus:ring-[rgba(212,160,48,.15)] outline-none transition-all";

// const labelClasses = "block font-mono text-xs uppercase tracking-[.15em] text-muted-foreground mb-2";

// export const HeroContentForm = ({ hero, onSubmit, submitting }) => {
//   const [form, setForm] = useState(hero);

//   const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         onSubmit(form);
//       }}
//       className="bg-card border border-border rounded-sm p-6 pt-8 space-y-4 relative">
//       <span className="absolute -top-[9px] left-6 bg-card px-2 font-mono text-xs tracking-[.18em] text-primary">
//         HERO
//       </span>

//       <div>
//         <label className={labelClasses}>Station name</label>
//         <input value={form.name} onChange={update("name")} className={inputClasses} />
//       </div>

//       <div>
//         <label className={labelClasses}>Eyebrow line</label>
//         <input value={form.title} onChange={update("title")} className={inputClasses} />
//       </div>

//       <div>
//         <label className={labelClasses}>Tagline</label>
//         <textarea
//           rows={2}
//           value={form.tagline}
//           onChange={update("tagline")}
//           className={`${inputClasses} resize-none`}
//         />
//       </div>

//       <Button type="submit" size="sm" disabled={submitting}>
//         {submitting ? "Saving..." : "Save hero"}
//       </Button>
//     </form>
//   );
// };


import { useState } from "react";
import { Button } from "@/components/Button";

const inputClasses =
  "w-full px-4 py-2 bg-secondary border border-border text-foreground font-mono focus:border-primary focus:ring-2 focus:ring-[rgba(212,160,48,.15)] outline-none transition-all";

const labelClasses = "block font-mono text-xs uppercase tracking-[.15em] text-muted-foreground mb-2";

export const HeroContentForm = ({ hero, onSubmit, submitting }) => {
  const [form, setForm] = useState(hero);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="bg-card border border-border rounded-sm p-6 pt-8 space-y-4 relative">
      <span className="absolute -top-[9px] left-6 bg-card px-2 font-mono text-xs tracking-[.18em] text-primary">
        HERO
      </span>

      <div>
        <label className={labelClasses}>Station name</label>
        <input value={form.name} onChange={update("name")} className={inputClasses} />
      </div>

      <div>
        <label className={labelClasses}>Eyebrow line</label>
        <input value={form.title} onChange={update("title")} className={inputClasses} />
      </div>

      <div>
        <label className={labelClasses}>Tagline</label>
        <textarea
          value={form.tagline}
          onChange={update("tagline")}
          ref={(el) => { if (el) { el.style.height = "auto"; el.style.height = el.scrollHeight + "px"; } }}
          onInput={(e) => { e.target.style.height = "auto"; e.target.style.height = e.target.scrollHeight + "px"; }}
          className={`${inputClasses} resize-none overflow-hidden`}
        />
      </div>

      <Button type="submit" size="sm" disabled={submitting}>
        {submitting ? "Saving..." : "Save hero"}
      </Button>
    </form>
  );
};
