import { useSiteContent } from "@/hooks/useSiteContent";
import { ICONS_BY_KEY } from "./skillIcons";

const FALLBACK_SKILLS = [
  { name: "React", iconKey: "react" },
  { name: "Next.js", iconKey: "next" },
  { name: "Typescript", iconKey: "typescript" },
  { name: "Node.js", iconKey: "node" },
  { name: "Python", iconKey: "python" },
  { name: "Go", iconKey: "go" },
  { name: "Postgres", iconKey: "postgres" },
  { name: "Docker", iconKey: "docker" },
  { name: "Java", iconKey: "java" },
  { name: "C++", iconKey: "cpp" },
  { name: "JavaScript", iconKey: "javascript" },
  { name: "HTML5", iconKey: "html5" },
  { name: "CSS3", iconKey: "css3" },
  { name: "Redux", iconKey: "redux" },
  { name: "GraphQL", iconKey: "graphql" },
  { name: "Sass", iconKey: "sass" },
  { name: "Vite", iconKey: "vite" },
  { name: "Framer Motion", iconKey: "framerMotion" },
  { name: "AWS", iconKey: "aws" },
  { name: "Firebase", iconKey: "firebase" },
];

export default function SkillSection() {
  const { content } = useSiteContent();
  const skills = content?.skills?.length ? content.skills : FALLBACK_SKILLS;

  return (
    <div className="bg-page-bg p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-5">Skills</h2>
      <div className="flex flex-wrap gap-3 max-w-2xl">
        {skills.map(({ name, iconKey }) => {
          const Icon = ICONS_BY_KEY[iconKey];
          return (
            <span
              key={name}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-shadow hover:shadow-md">
              {Icon && <Icon />}
              {name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
