import { SiteContent } from "../models/SiteContent.js";

const content = {
  hero: {
    greeting: "$ whoami",
    name: "MEKLIT",
    title: "Shortwave Broadcast · Fullstack Developer",
    tagline: "Transmitting code from the unknown · Est. 2022",
    resumeUrl: "",
  },
  about: {
    heading: "Building modern web apps\nwith clean architecture.",
    bodyText:
      "I'm a Full Stack Developer who enjoys building simple, useful, and user-friendly web applications. I like working with teams, solving real problems, and learning new technologies. My goal is to create products that help people while growing my skills and building a successful career.",
    logs: [
      {
        time: "00:00:01",
        text: "Station initialized. MEKLIT is a fullstack developer between frontend precision and backend depth.",
      },
      {
        time: "00:00:04",
        text: "Began transmitting in 2022. Started with static. Got clearer every year.",
      },
      {
        time: "00:00:09",
        text: "Works best in hard problems — systems needing rebuilding, products needing to ship, codebases people are afraid to touch.",
      },
      {
        time: "00:00:14",
        text: "Believes good code is invisible — it just works, quietly, like a signal always there.",
      },
      {
        time: "00:00:21",
        text: "Currently open to new transmissions. If your project needs a signal, tune in.",
      },
    ],
  },
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
