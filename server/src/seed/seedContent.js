import { SiteContent } from "../models/SiteContent.js";

const skillKeys = [
  "react",
  "next",
  "typescript",
  "node",
  "python",
  "go",
  "postgres",
  "docker",
  "java",
  "cpp",
  "javascript",
  "html5",
  "css3",
  "redux",
  "graphql",
  "sass",
  "vite",
  "framerMotion",
  "aws",
  "firebase",
];

const skillNames = [
  "React",
  "Next.js",
  "Typescript",
  "Node.js",
  "Python",
  "Go",
  "Postgres",
  "Docker",
  "Java",
  "C++",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Redux",
  "GraphQL",
  "Sass",
  "Vite",
  "Framer Motion",
  "AWS",
  "Firebase",
];

const content = {
  hero: {
    greeting: "$ whoami",
    name: "Meklit Girmaw",
    title: "Frontend Developer",
    tagline:
      "I build clean, thoughtful interfaces with a focus on detail, strict type structural restraint, and minimal footprint.",
    resumeUrl: "",
  },
  about: {
    heading: "Building modern web apps\nwith clean architecture.",
    bodyText:
      "I'm a Full Stack Developer who enjoys building simple, useful, and user-friendly web applications. I like working with teams, solving real problems, and learning new technologies. My goal is to create products that help people while growing my skills and building a successful career.",
  },
  skills: skillNames.map((name, i) => ({ name, iconKey: skillKeys[i] })),
};

export async function seedContent() {
  const existing = await SiteContent.countDocuments();
  if (existing > 0) {
    console.log("[seed:content] site content already exists, skipping");
    return;
  }

  await SiteContent.create(content);
  console.log("[seed:content] inserted site content");
}
