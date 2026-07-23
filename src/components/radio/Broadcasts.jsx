import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

const SIGNAL_ICON = { STRONG: "▲", MODERATE: "◈", DISTANT: "▽" };

function deriveMeta(project, idx, total) {
  const span = total > 1 ? total - 1 : 1;
  const mhz = 88.1 + (idx / span) * (110.2 - 88.1);
  const signal = project.featured ? "STRONG" : idx % 2 === 0 ? "MODERATE" : "DISTANT";
  const status = project.featured ? "live" : project.link ? "aired" : "archived";
  const year = project.createdAt ? new Date(project.createdAt).getFullYear() : new Date().getFullYear();
  return { freq: `${mhz.toFixed(1)} MHz`, signal, status, year };
}

export const Broadcasts = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiGet("/api/projects")
      .then((data) => setProjects(data.projects || []))
      .catch(() => setProjects([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="broadcasts" className="max-w-4xl mx-auto px-8 py-24 relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-xs text-amber-radio border border-amber-dim px-2 py-0.5 rounded-sm tracking-[.2em]">
          CH·01
        </span>
        <h2 className="font-serif text-2xl lg:text-3xl text-text-radio tracking-wide">Broadcasts</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border-radio to-transparent" />
      </div>

      {loading && (
        <p className="font-mono text-xs text-text-dim">Scanning frequencies...</p>
      )}

      {!loading && projects.length === 0 && (
        <p className="font-mono text-xs text-text-dim">No signal detected.</p>
      )}

      <div className="divide-y divide-border-radio border-t border-border-radio">
        {projects.map((project, idx) => {
          const meta = deriveMeta(project, idx, projects.length);
          return (
            <a
              key={project._id}
              href={project.link || project.github || "#"}
              target={project.link || project.github ? "_blank" : undefined}
              rel="noreferrer"
              className="group grid grid-cols-[70px_1fr] sm:grid-cols-[90px_1fr_auto] gap-6 py-7 relative cursor-pointer">
              <div className="absolute left-[-2rem] top-0 bottom-0 w-0.5 bg-amber-radio opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              <div>
                <p className="font-mono text-sm text-amber-radio tracking-[.06em]">{meta.freq}</p>
                <p className="font-mono text-xs text-text-dim mt-1 tracking-[.08em]">
                  {SIGNAL_ICON[meta.signal]} {meta.signal}
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl lg:text-2xl text-text-radio mb-1.5">{project.title}</h3>
                <p className="text-sm lg:text-base text-text-dim leading-relaxed max-w-lg">
                  {project.description}
                </p>
                {!!project.tags?.length && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs tracking-[.1em] uppercase text-amber-dim border border-border-radio bg-bg-radio-2 px-1.5 py-0.5 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="hidden sm:flex flex-col items-end gap-1.5 pt-0.5">
                <span
                  className={`font-mono text-xs tracking-[.12em] uppercase px-2 py-0.5 rounded-sm border ${
                    meta.status === "live"
                      ? "text-signal-green border-signal-green bg-[rgba(64,128,48,.08)]"
                      : "text-text-dim border-border-radio"
                  }`}>
                  {meta.status}
                </span>
                <span className="font-mono text-xs text-text-dim">{meta.year}</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
