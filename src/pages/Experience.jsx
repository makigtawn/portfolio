const experiences = [
  {
    period: "2019 — present",
    role: "Full-stack Developer",
    company: "StartUp Labs",
    description:
      "Contributed to the development of a SaaS platform from MVP to production. Collaborated with designers to implement pixel-perfect UI components.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    current: true,
  },
  {
    period: "2018 — 2019",
    role: "Freelance Developer",
    company: "Self-Employed",
    description:
      "Delivered custom web solutions for small businesses and startups. Built 15+ websites and applications, handling everything from design to deployment.",
    technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
    current: false,
  },
  {
    period: "2018 — 2019",
    role: "Project manager",
    company: "Qandil-ai",
    description:
      "responsible for leading a team to complete the project within a set timeframe.",
    technologies: [
      "Planning",
      "Organization",
      "Communication",
      "Problem Solving",
      "Delivery",
      "Time Management",
      "Adaptability",
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-10 relative overflow-hidden">
      <h2 className="text-4xl text-center py-15 md:text-5xl font-bold mt-4 mb-6">
        Experience
      </h2>

      <div className="container mx-auto px-6 relative z-10">
        this is experience section
      </div>
    </section>
  );
};
