import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import SkillSection from "../components/SkillSection";
import { useSiteContent } from "@/hooks/useSiteContent";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fallback = {
  heading: "Building modern web apps\nwith clean architecture.",
  bodyText:
    "I'm a Full Stack Developer who enjoys building simple, useful, and user-friendly web applications. I like working with teams, solving real problems, and learning new technologies. My goal is to create products that help people while growing my skills and building a successful career.",
};

export const About = () => {
  const { content } = useSiteContent();
  const about = content?.about?.bodyText ? content.about : fallback;
  const headingLines = about.heading.split("\n");

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
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 ">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight text-foreground">
              {headingLines.map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
            <div className="space-y-4 text-muted-foreground ">
              <p className="text-align ">{about.bodyText}</p>
            </div>
          </motion.div>

          {/* Right Column  */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15 }}>
            <SkillSection />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
