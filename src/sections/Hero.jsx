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
  RedditIcon,
  TelegramIcon,
  XIcon,
} from "@/components/BrandIcons";

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
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              ...dot,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-24 pb-14 md:pt-28 md:pb-16 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-5 md:space-y-6">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full glass text-xs sm:text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • React Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Meklit Girmaw a software engineer specializing in
                React, Next.js, and JavaScript. I build scalable, performant web
                applications that users love.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 animate-fade-in animation-delay-300">
              <Button size="default" href="#contact">
                Contact Me
                <FontAwesomeIcon icon={faArrowRight} className="h-5 w-5" />
              </Button>
              <AnimatedBorderButton className="px-6 py-3 text-base">
                <FontAwesomeIcon icon={faDownload} className="h-5 w-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-in animation-delay-400">
              <span className="w-full text-sm text-muted-foreground sm:w-auto">
                Follow me:
              </span>
              {[
                { icon: GitHubIcon, href: "https://github.com/makigtawn", label: "GitHub" },
                { icon: LinkedInIcon, href: "https://linkedin.com/in/makigtawn", label: "LinkedIn" },
                { icon: XIcon, href: "https://x.com/makigtawn", label: "X" },
                { icon: TelegramIcon, href: "https://t.me/makigtawn", label: "Telegram" },
                { icon: RedditIcon, href: "https://www.reddit.com/user/makigtawn", label: "Reddit" },
                { icon: LeetCodeIcon, href: "https://leetcode.com/u/makigtawn/", label: "LeetCode" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300 hidden md:block">
            {/* Profile Image */}
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

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-2 lg:-right-4 glass rounded-xl px-3 py-2 lg:px-4 lg:py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-2 lg:-left-4 glass rounded-xl px-3 py-2 lg:px-4 lg:py-3 animate-float animation-delay-500">
                  <div className="text-xl lg:text-2xl font-bold text-primary">over a year</div>
                  <div className="text-xs text-muted-foreground">
                     Experience
                  </div>
                </div>
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
