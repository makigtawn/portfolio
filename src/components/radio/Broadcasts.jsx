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

// Last synced with https://portfolio-backend-2366.onrender.com/api/projects
// Order matches the backend's sort: { order: 1, createdAt: -1 }
// Only used when both the backend AND projects.php are unreachable.
const DEFAULT_PROJECTS = [
  {
    _id: "6a64730db99e53cbd6b589b2",
    title: "DevBrain",
    description: "AI-powered \"second brain\" for developers - save code snippets, errors, and notes, then find them later with natural-language semantic search instead of grepping through old projects.",
    image: "",
    tags: ["Next.js", "tRPC", "Prisma", "Supabase", "Gemini", "chrome extension"],
    link: "",
    github: "https://github.com/makigtawn/devbrain",
    featured: false,
    createdAt: "2026-07-25T08:25:49.065Z"
  },
  {
    _id: "6a5e1f1b23c53d3fa1b303fa",
    title: "Clinic patient queue management system",
    description: "a project which was given for data structure and algorithm assignment in my software engineering department instructor .",
    image: "",
    tags: ["html", "css", "javascript", "c++", "Cmake", "C"],
    link: "",
    github: "https://github.com/makigtawn/clinic-patient-queue-management-system",
    featured: false,
    createdAt: "2026-07-20T13:14:03.585Z"
  },
  {
    _id: "6a5e1f1b23c53d3fa1b303f8",
    title: "Bahirdar university",
    description: "Simple and Interactive version of my university website, which the main is scattered and hard to communicate with.",
    image: "/projects/project3.png",
    tags: ["HTML5", "CSS", "Javascript"],
    link: "https://bahirdaruniversity.vercel.app",
    github: "https://github.com/makigtawn/bahirdaruniversity",
    featured: false,
    createdAt: "2026-07-20T13:14:03.585Z"
  },
  {
    _id: "6a5e1f1b23c53d3fa1b303f9",
    title: "Qandil",
    description: "AI-based personalized learning platform",
    image: "",
    tags: ["React", "Typescript", "NodeJS", "Mongodb"],
    link: "https://qandil-ai.vercel.app/",
    github: "https://github.com/makigtawn/Qandil-ai",
    featured: true,
    createdAt: "2026-07-20T13:14:03.585Z"
  },
  {
    _id: "6a5e1f1b23c53d3fa1b303f7",
    title: "Strata",
    description: "strata is AI powered fast candidate screening platform for employers",
    image: "",
    tags: ["React", "Javascript", "postgres", "supabase", "JWT", "Tailwindcss"],
    link: "https://strata-hire.vercel.app",
    github: "https://github.com/makigtawn/strata",
    featured: true,
    createdAt: "2026-07-20T13:14:03.584Z"
  }
];

export const Broadcasts = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // On meklit.pro.et (PHP server): try PHP first, fall back to Render.
    // Everywhere else (e.g. Render static site): try Render first, fall back to PHP.
    const isPhpHost = window.location.hostname === "meklit.pro.et";

    const tryPhpFirst = () =>
      apiGet("/api/projects.php")
        .then((data) => {
          if (data?.projects?.length > 0) {
            setProjects(data.projects);
          } else {
            return apiGet("/api/projects").then((d) =>
              setProjects(d?.projects?.length > 0 ? d.projects : DEFAULT_PROJECTS)
            );
          }
        })
        .catch(() =>
          apiGet("/api/projects")
            .then((data) => setProjects(data?.projects?.length > 0 ? data.projects : DEFAULT_PROJECTS))
            .catch(() => setProjects(DEFAULT_PROJECTS))
        )
        .finally(() => setLoading(false));

    const tryRenderFirst = () =>
      apiGet("/api/projects")
        .then((data) => {
          if (data?.projects?.length > 0) {
            setProjects(data.projects);
          } else {
            return apiGet("/api/projects.php").then((d) =>
              setProjects(d?.projects?.length > 0 ? d.projects : DEFAULT_PROJECTS)
            );
          }
        })
        .catch(() =>
          apiGet("/api/projects.php")
            .then((data) => setProjects(data?.projects?.length > 0 ? data.projects : DEFAULT_PROJECTS))
            .catch(() => setProjects(DEFAULT_PROJECTS))
        )
        .finally(() => setLoading(false));

    if (isPhpHost) {
      tryPhpFirst();
    } else {
      tryRenderFirst();
    }
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
