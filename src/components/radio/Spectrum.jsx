import { useEffect, useRef, useState } from "react";

const skills = [
  { label: "Frontend", pct: 92 },
  { label: "Backend", pct: 88 },
  { label: "Databases", pct: 80 },
  { label: "DevOps", pct: 72 },
  { label: "UI / UX", pct: 78 },
  { label: "APIs", pct: 90 },
  { label: "Testing", pct: 65 },
];

export const Spectrum = () => {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="spectrum"
      ref={sectionRef}
      className="max-w-4xl mx-auto px-8 py-24 relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-[11px] lg:text-[12px] text-amber-radio border border-amber-dim px-2 py-0.5 rounded-sm tracking-[.2em]">
          CH·02
        </span>
        <h2 className="font-serif text-2xl lg:text-3xl text-text-radio tracking-wide">
          Signal Spectrum
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border-radio to-transparent" />
      </div>

      {skills.map((skill, i) => (
        <div
          key={skill.label}
          className="grid grid-cols-[100px_1fr_36px] sm:grid-cols-[130px_1fr_36px] items-center gap-4 mb-5">
          <span className="font-mono text-[11px] lg:text-[12px] tracking-[.08em] text-text-dim uppercase">
            {skill.label}
          </span>
          <div className="h-1.5 bg-bg-radio-3 border border-border-radio rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-dim to-amber-radio transition-all duration-700 ease-out"
              style={{
                width: animated ? `${skill.pct}%` : "0%",
                transitionDelay: `${i * 100}ms`,
              }}
            />
          </div>
          <span className="font-mono text-[10px] lg:text-[11px] text-amber-radio text-right">
            {skill.pct}%
          </span>
        </div>
      ))}
    </section>
  );
};
