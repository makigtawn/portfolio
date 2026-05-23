import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faLock,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const highlights = [
  {
    icon: faCode,
    title: "Fast Frontends",
    description:
      "Building responsive, modern interfaces with React and Next.js.",
  },
  {
    icon: faDatabase,
    title: "Secure Backends",
    description:
      "Managing databases with MongoDB Atlas and Supabase to keep data safe.",
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
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <span className="text-secondary-foreground text-xs font-semibold tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-secondary-foreground">
              Writing clean code to build
              <span className="font-serif italic font-normal text-foreground">
                {" "}
                reliable web apps.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-base">
              <p>
                I am a software engineer specializing in the{" "}
                <strong>MERN stack</strong> and <strong>Next.js</strong>. I
                focus on building full-stack applications that load fast, handle
                data smoothly, and look great.
              </p>
              <p>
                I enjoy connecting user-friendly React frontends with secure
                backends using tools like MongoDB Atlas and Supabase. Security
                and database optimization are always my top priorities.
              </p>
              
            </div>

            <div className="glass rounded-xl p-5 glow-border">
              <p className="text-base font-medium italic text-foreground">
                "My goal is simple: solve your business headaches with reliable
                code and zero stress."
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
      </div>
    </section>
  );
};
