import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faLock,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Vercel",
  "Tailwind CSS",
  "Figma",
  "Git",
  "GitHub Actions",
  "communication",
  "team work",
  "project management",
  "product management",
];

const highlights = [
  {
    icon: faCode,
    title: "Fast Frontends",
    description:
      "Building responsive, modern interfaces with React and Tailwind CSS.",
  },
  {
    icon: faDatabase,
    title: "Secure Backends",
    description:
      "Managing robust databases to keep your application data safe.",
  },
  {
    icon: faLock,
    title: "Protected Data",
    description: "Implementing secure login systems and robust user routing.",
  },
  {
    icon: faComments,
    title: "Clear Communication",
    description:
      "No confusing tech jargon. Just honest updates and reliable work.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden  ">
      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-6 w-full py-10 ">
          <h1 className="text-foreground text-center pl-10 text-3xl font-semibold tracking-wider uppercase">
            About Me
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 md: gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6 ">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight text-foreground">
              Building modern web apps
              <br /> with clean architecture.
            </h2>
            <div className="space-y-4 text-muted-foreground ">
              <p className="text-align ">
                I am a full-stack software engineer who loves turning complex
                problems into smooth digital experiences. My growth journey is
                fueled by a hands-on approach: constantly building, evolving my
                stack, and refining my workflow to create applications that load
                fast and scale effortlessly.
              </p>
              <p>
                Specializing in modern JavaScript ecosystems like React,
                Next.js, and Supabase, I bridge the gap between pixel-perfect
                frontends and secure, optimized backends. For me, software
                development isn't just about writing code—it's about continuous
                learning and engineering reliable solutions.
              </p>
            </div>

            <div className="glass rounded-xl p-5 glow-border">
              <p className="text-base font-medium italic text-foreground">
                "My goal is simple: solve real-world problems with robust code,
                clear communication, and zero stress."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-5 rounded-xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="h-5 w-5 text-primary"
                  />
                </div>
                <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Skills Section */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 w-full">
          <p className="text-sm text-muted-foreground mb-3 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-5 py-3">
                  <span className="text-base md:text-lg font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};







// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCode,
//   faDatabase,
//   faLock,
//   faComments,
// } from "@fortawesome/free-solid-svg-icons";

// const skills = [
//   "React",
//   "Next.js",
//   "TypeScript",
//   "Node.js",
//   "PostgreSQL",
//   "MongoDB",
//   "Vercel",
//   "Tailwind CSS",
//   "Figma",
//   "Git",
//   "GitHub Actions",
//   "communication",
//   "team work",
//   "project management",
//   "product management",
// ];

// const highlights = [
//   {
//     icon: faCode,
//     title: "Fast Frontends",
//     description:
//       "Building responsive, modern interfaces with React and Next.js.",
//   },
//   {
//     icon: faDatabase,
//     title: "Secure Backends",
//     description:
//       "Managing databases with MongoDB Atlas and Supabase to keep data safe.",
//   },
//   {
//     icon: faLock,
//     title: "Protected Data",
//     description: "Implementing secure login systems and robust user routing.",
//   },
//   {
//     icon: faComments,
//     title: "Clear Communication",
//     description:
//       "No confusing tech jargon. Just honest updates and reliable work.",
//   },
// ];

// export const About = () => {
//   return (
//     <section id="about" className="py-24 relative overflow-hidden">
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Column */}
//           <div className="space-y-6">
//             <div>
//               <span className="text-secondary-foreground text-xs font-semibold tracking-wider uppercase">
//                 About Me
//               </span>
//             </div>

//             <h2 className="text-3xl md:text-4xl font-bold leading-tight text-secondary-foreground">
//               Writing clean code to build
//               <span className="font-serif italic font-normal text-foreground">
//                 {" "}
//                 reliable web apps.
//               </span>
//             </h2>

//             <div className="space-y-4 text-muted-foreground text-base">
//               <p>
//                 I am a software engineer specializing in the{" "}
//                 <strong>MERN stack</strong> and <strong>Next.js</strong>. I
//                 focus on building full-stack applications that load fast, handle
//                 data smoothly, and look great.
//               </p>
//               <p>
//                 I enjoy connecting user-friendly React frontends with secure
//                 backends using tools like MongoDB Atlas and Supabase. Security
//                 and database optimization are always my top priorities.
//               </p>
//             </div>

//             <div className="glass rounded-xl p-5 glow-border">
//               <p className="text-base font-medium italic text-foreground">
//                 "My goal is simple: solve your business headaches with reliable
//                 code and zero stress."
//               </p>
//             </div>
//           </div>

//           {/* Right Column - Highlights */}
//           <div className="grid sm:grid-cols-2 gap-4">
//             {highlights.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="glass p-5 rounded-xl animate-fade-in"
//                 style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
//                 <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
//                   <FontAwesomeIcon
//                     icon={item.icon}
//                     className="h-5 w-5 text-primary"
//                   />
//                 </div>
//                 <h3 className="text-base font-semibold mb-1">{item.title}</h3>
//                 <p className="text-xs text-muted-foreground leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Skills Section */}
//           <div className="mt-10 md:mt-12 animate-fade-in animation-delay-600">
//             <p className="text-sm text-muted-foreground mb-3 text-center">
//               Technologies I work with
//             </p>
//             <div className="relative overflow-hidden">
//               <div
//                 className="absolute left-0 top-0 bottom-0 w-32
//              bg-gradient-to-r from-background to-transparent z-10"
//               />
//               <div
//                 className="absolute right-0 top-0 bottom-0 w-32
//              bg-gradient-to-l from-background to-transparent z-10"
//               />
//               <div className="flex animate-marquee">
//                 {[...skills, ...skills].map((skill, idx) => (
//                   <div key={idx} className="flex-shrink-0 px-5 py-3">
//                     <span className="text-base md:text-lg font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
//                       {skill}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
