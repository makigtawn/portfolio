import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";

const fallback = {
  greeting: "$ whoami",
  name: "Meklit Girmaw",
  title: "Full-stack Developer",
  tagline:
    "I build clean, thoughtful interfaces with a focus on detail, strict type structural restraint, and minimal footprint.",
  resumeUrl: "",
};

function Hero() {
  const { content } = useSiteContent();
  const hero = content?.hero?.name ? content.hero : fallback;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const blinkAnimation = {
    opacity: [1, 0, 1],
    transition: { duration: 1, repeat: Infinity, ease: "steps(2, start)" },
  };

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto lg:px-15 lg:pt-6 px-6 pt-24 pb-14 md:pt-28 md:pb-16 relative z-10">
        <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-3 lg:gap-2 items-center">
          {/* Left Column */}

          <div className="flex flex-col space-y-4">
            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-3xl text-brand-mutedLight dark:text-brand-mutedDark">
              {hero.greeting}
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-xl lg:text-3xl font-extrabold tracking-tight">
              {hero.name}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm lg:text-3xl md:text-base text-brand-mutedLight dark:text-brand-mutedDark">
              {hero.title}
              <motion.span
                animate={blinkAnimation}
                className="inline-block ml-1 font-bold">
                _
              </motion.span>
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-xs lg:text-lg md:text-sm leading-relaxed text-brand-mutedLight dark:text-brand-mutedDark max-w-sm">
              {hero.tagline}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 lg:p-5">
              <a
                href={hero.resumeUrl || "#"}
                className="px-6 py-3 border-2 border-black bg-black text-white dark:text-black dark:bg-white hover:bg-white hover:text-black transition-colors">

                View Resume
              </a>
              <Link
                to="/contact"
                className="relative inline-block hover:text-zinc-500 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-zinc-500 after:transition-transform after:duration-300 hover:after:scale-x-100">

                Get in touch
              </Link>
              
            </motion.div>
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
      </div>
    </motion.main>
  );
}

export default Hero;
