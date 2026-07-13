import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillSection from "../components/SkillSection";

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
                I'm a Full Stack Developer who enjoys building simple, useful,
                and user-friendly web applications. I like working with teams,
                solving real problems, and learning new technologies. My goal is
                to create products that help people while growing my skills and
                building a successful career.
              </p>
            </div>
          </div>

          {/* Right Column  */}

          <div className="relative hidden md:block">
            <div className="relative max-w-xs lg:max-w-sm mx-auto">
              <div className="relative bg-white p-1 rounded-3xl shadow-sm">
                <img
                  src="/profile-photo.png"
                  alt="Meklit Girmaw"
                  className="w-full max-h-[52vh] aspect-[4/5] object-cover rounded-2xl grayscale-[60%] transition-all "
                />
              </div>
            </div>
          </div>
        </div>
        <SkillSection />
      </div>
    </section>
  );
};
