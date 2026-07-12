import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { GitHubIcon } from "@/components/BrandIcons";
import { Button } from "../components/Button";
const projects = [
  // {
  //   title: "AI Writing Assistant",
  //   description:
  //     "An intelligent writing tool powered by Gemini, helping users create better content faster.",
  //   image: "/projects/project5.png",
  //   tags: ["React", "OpenAI", "Python", "FastAPI"],
  //   link: "#",
  //   github: "#",
  // },
  {
    title: "Strata",
    description:
      "strata is AI powered fast candidate screening platform for employers",
    image: "/projects/project.png",
    tags: ["React", "Javascript", "postgres", "supabase", "JWT", "Tailwindcss"],
    link: "https://strata-hire.vercel.app",
    github: "https://github.com/makigtawn/strata",
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
    title: "Qandil ",
    description: "AI-based personalized learning platform ",
    image: "/projects/project1.png",

    tags: ["React", "Typescript", "NodeJS", "Mongodb"],
    link: "https://qandil-ai.vercel.app/",
    github: "https://github.com/makigtawn/Qandil-ai",
  },
  {
    title: "Clinic patient queue management system ",
    description:
      " a project which was given for data structure and algorithm assignment in my software engineering department instructor .",
    image: "/projects/project2.png",
    tags: ["html", "css", "javascript", "c++"],
    link: "#",
    github:
      "https://github.com/makigtawn/clinic-patient-queue-management-system",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-primary">
            Projects
            <br /> that make an impact
          </h2>
          <p className="text-muted-foreground ">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links seen when hovered*/}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    aria-label={`View ${project.title}`}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="h-5 w-5"
                    />
                  </a>
                  <a
                    href={project.github}
                    aria-label={`View ${project.title} on GitHub`}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <GitHubIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
             
              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span className="max-w-3xl mb-16"
                      //              
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            className="p-3 border border-"
            href="https://github.com/makigtawn?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all projects on GitHub">
            View All Projects
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="h-5 w-5 mx-2"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};




// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
// // import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
// import { GitHubIcon } from "@/components/BrandIcons";
// const projects = [
//   {
//     title: "Qandil ",
//     description:
//       "AI-based personalized learning platform ",
//       image: "/projects/project1.png",

//       tags: ["React", "Typescript", "NodeJS","Mongodb"],
// link: "https://qandil-ai.vercel.app/",
//     github: "https://github.com/makigtawn/Qandil-ai",
//   },
//   {
//     title: "Clinic patient queue management system ",
//     description:
//       " a project which was given for data structure and algorithm assignment in my software engineering department instructor .",
//     image: "/projects/project2.png",
//     tags: ["html", "css", "javascript", "c++", ],
//     link: "#",
//     github: "https://github.com/makigtawn/clinic-patient-queue-management-system",
//   },
//   // {
//   //   title: "AI Writing Assistant",
//   //   description:
//   //     "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
//   //   image: "/projects/project3.png",
//   //   tags: ["React", "OpenAI", "Python", "FastAPI"],
//   //   link: "#",
//   //   github: "#",
//   // },
//   {
//     title: "spering",
//     description:
//       "spering is a job posting platform  for employers and job finder website for developers",
//     image: "/projects/project4.png",
//     tags: ["React", "Javascript", "supabase"],
//     link: "#",
//     github: "https://github.com/makigtawn/React-Jobs",
//   },
// ];

// export const Projects = () => {
//   return (
//     <section id="projects" className="py-32 relative overflow-hidden">
//       {/* Bg glows */}
//       <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mx-auto max-w-3xl mb-16">
//           <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
//             Featured Work
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
//             Projects that
//             <span className="font-serif italic font-normal text-foreground">
//               {" "}
//               make an impact.
//             </span>
//           </h2>
//           <p className="text-muted-foreground animate-fade-in animation-delay-200">
//             A selection of my recent work, from complex web applications to
//             innovative tools that solve real-world problems.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, idx) => (
//             <div
//               key={idx}
//               className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
//               style={{ animationDelay: `${(idx + 1) * 100}ms` }}
//             >
//               {/* Image */}
//               <div className="relative overflow-hidden aspect-video">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div
//                   className="absolute inset-0
//                 bg-gradient-to-t from-card via-card/50
//                  to-transparent opacity-60"
//                 />
//                 {/* Overlay Links seen when hovered*/}
//                 <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <a
//                     href={project.link}
//                     aria-label={`View ${project.title}`}
//                     className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
//                   >
//                     <FontAwesomeIcon
//                       icon={faArrowUpRightFromSquare}
//                       className="h-5 w-5"
//                     />
//                   </a>
//                   <a
//                     href={project.github}
//                     aria-label={`View ${project.title} on GitHub`}
//                     className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
//                   >
//                     <GitHubIcon className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>

//               {/* Content */}
//                <div className="p-6 space-y-4">
//                 <div className="flex items-start justify-between">
//                   <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
//                     {project.title}
//                   </h3>
//                   <FontAwesomeIcon
//                     icon={faArrowUpRightFromSquare}
//                     className="h-5 w-5
//                   text-muted-foreground group-hover:text-primary
//                    group-hover:translate-x-1
//                    group-hover:-translate-y-1 transition-all"
//                   />
//                 </div>
//                 <p className="text-muted-foreground text-sm">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, tagIdx) => (
//                     <span
//                       key={tagIdx}
//                       className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All CTA */}
//         <div className="text-center mt-12">
//           <AnimatedBorderButton
//             href="https://github.com/makigtawn?tab=repositories"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="View all projects on GitHub"
//           >
//             View All Projects
//             <FontAwesomeIcon
//               icon={faArrowUpRightFromSquare}
//               className="h-5 w-5"
//             />
//           </AnimatedBorderButton>
//         </div>
//       </div>
//     </section>
//   );
// };
