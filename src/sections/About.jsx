import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLightbulb,
  faRocket,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const highlights = [
  {
    icon: faCode,
    title: "Full-Stack Development",
    description:
      "Building end-to-end applications using MongoDB, Express, React, and Node.js.",
  },
  {
    icon: faRocket,
    title: "Scalable Backends",
    description:
      "Implementing secure authentication and efficient data handling with Supabase and Atlas.",
  },
  {
    icon: faUsers,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: faLightbulb,
    title: "Problem Solver",
    description:
      "Focusing on UX/UI to bridge the gap between complex code and user needs.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building My developer journey,
              <span className="font-serif italic font-normal text-foreground">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a developer focused on mastering the{" "}
                <strong>MERN stack</strong> (MongoDB, Express, React, Node.js).
                What started as a curiosity about the web has grown into a
                passion for building full-stack applications that solve
                real-world problems.
              </p>
              <p>
                Currently, I'm deep-diving into{" "}
                <strong>backend architecture</strong> and cloud-based services
                like MongoDB Atlas and Supabase. I enjoy the challenge of
                connecting a seamless React frontend with a robust, secure
                backend.
              </p>
              <p>
                My recent work includes developing a{" "}
                <strong>Job Finder platform</strong>, where I've implemented
                custom authentication systems and dynamic data routing to help
                users find their next opportunity.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I believe great software isn't just about code that works it's
                about creating tools that empower people and systems that are
                built to grow."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="h-6 w-6 text-primary"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
