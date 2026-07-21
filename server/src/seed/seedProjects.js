import { Project } from "../models/Project.js";

const projects = [
  {
    title: "Strata",
    description: "strata is AI powered fast candidate screening platform for employers",
    image: "/projects/project.png",
    tags: ["React", "Javascript", "postgres", "supabase", "JWT", "Tailwindcss"],
    link: "https://strata-hire.vercel.app",
    github: "https://github.com/makigtawn/strata",
    featured: true,
  },
  {
    title: "bahirdar university",
    description:
      "Simple and Interactive version of my university website, which the main is scattered and hard to communicate with.",
    image: "/projects/project3.png",
    tags: ["HTML5", "CSS", "Javascript"],
    link: "https://bahirdaruniversity.vercel.app",
    github: "https://github.com/makigtawn/bahirdaruniversity",
  },
  {
    title: "Qandil",
    description: "AI-based personalized learning platform",
    image: "/projects/project1.png",
    tags: ["React", "Typescript", "NodeJS", "Mongodb"],
    link: "https://qandil-ai.vercel.app/",
    github: "https://github.com/makigtawn/Qandil-ai",
  },
  {
    title: "Clinic patient queue management system",
    description:
      "a project which was given for data structure and algorithm assignment in my software engineering department instructor .",
    image: "/projects/project2.png",
    tags: ["html", "css", "javascript", "c++"],
    link: "",
    github: "https://github.com/makigtawn/clinic-patient-queue-management-system",
  },
];

export async function seedProjects() {
  const existing = await Project.countDocuments();
  if (existing > 0) {
    console.log("[seed:projects] projects already exist, skipping");
    return;
  }

  await Project.insertMany(projects);
  console.log(`[seed:projects] inserted ${projects.length} projects`);
}
