import { Button } from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronDown,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import {
  GitHubIcon,
  LeetCodeIcon,
  LinkedInIcon,
  TelegramIcon,
  XIcon,
} from "@/components/BrandIcons";
import SocialLinks from "../components/SocialLinks";
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

const floatingDots = Array.from({ length: 30 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  animation: `slow-drift ${15 + ((i * 7) % 20)}s ease-in-out infinite`,
  animationDelay: `${(i * 11) % 5}s`,
}));

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingDots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60 bg-primary"
            style={dot}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-24 pb-14 md:pt-28 md:pb-16 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-8 font-mono">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Meklit
                <br />
                Girmaw <br />
              </h1>

              <p className="max-w-md text-lg leading-relaxed text-zinc-600">
                I'm Meklit Girmaw. I write code that actually works for founders
                and teams who need clear, fast, and reliable React applications.
                No fluff, just logic.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors">
                Get in touch
              </a>
              <a
                href="/cv.pdf"
                className="relative inline-block hover:text-zinc-500 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-zinc-500 after:transition-transform after:duration-300 hover:after:scale-x-100">
                View Resume
              </a>
            </div>
            <SocialLinks />
          </div>
          {/* Right Column  */}
          <div className="relative animate-fade-in animation-delay-300 hidden md:block">
            <div className="relative max-w-xs lg:max-w-sm mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.png"
                  alt="Meklit Girmaw"
                  className="w-full max-h-[52vh] aspect-[4/5] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-10 md:mt-12 animate-fade-in animation-delay-600">
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

      <div
        className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="h-6 w-6 animate-bounce"
          />
        </a>
      </div>
    </section>
  );
};
