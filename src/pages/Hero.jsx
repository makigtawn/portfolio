import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { TerminalDemo } from "../components/Terminal";

function Hero() {
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
              className="text-xl text-brand-mutedLight dark:text-brand-mutedDark">
              $ whoami
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Meklit Girmaw
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-brand-mutedLight dark:text-brand-mutedDark">
              Frontend Developer
              <motion.span
                animate={blinkAnimation}
                className="inline-block ml-1 font-bold">
                _
              </motion.span>
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-xs md:text-sm leading-relaxed text-brand-mutedLight dark:text-brand-mutedDark max-w-sm">
              I build clean, thoughtful interfaces with a focus on detail,
              strict type structural restraint, and minimal footprint.
            </motion.p>

            <motion.div
              variants={itemVariants}
              // className="pt-4 flex flex-wrap gap-3">
              className="flex items-center gap-6">
              {/* <button className="text-xs bg-brand-fgLight text-brand-bgLight dark:bg-brand-fgDark dark:text-brand-bgDark px-5 py-3 rounded border border-brand-fgLight dark:border-brand-fgDark font-bold hover:opacity-80 transition-opacity cursor-pointer">
                View work
              </button>
              <button className="text-xs bg-transparent text-brand-fgLight dark:text-brand-fgDark px-5 py-3 rounded border border-brand-lineLight dark:border-brand-lineDark font-bold hover:bg-brand-panelLight dark:hover:bg-brand-panelDark transition-colors cursor-pointer">
                Get in touch
              </button> */}

              <a
                href="#contact"
                className="px-6 py-3 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors">
                Get in touch
              </a>
              <a
                href="#"
                className="relative inline-block hover:text-zinc-500 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-zinc-500 after:transition-transform after:duration-300 hover:after:scale-x-100">
                View Resume
              </a>
            </motion.div>
          </div>

          {/* Right Column  */}

          {/* <div className="relative hidden md:block">
            <div className="relative max-w-xs lg:max-w-sm mx-auto">
              <div className="relative bg-white p-1 rounded-3xl shadow-sm">
                <img
                  src="/profile-photo.png"
                  alt="Meklit Girmaw"
                  className="w-full max-h-[52vh] aspect-[4/5] object-cover rounded-2xl grayscale-[60%] transition-all "
                />
              </div>
            </div>
          </div> */}
          {/* code panel */}
          {/* <motion.div variants={itemVariants} className="w-full">
            <div className="border border-brand-lineLight dark:border-brand-lineDark rounded-lg overflow-hidden bg-brand-panelLight dark:bg-brand-panelDark">
              <div className="px-3 py-2 flex gap-1.5 border-b border-brand-lineLight dark:border-brand-lineDark">
                <span className="w-2 h-2 rounded-full border border-brand-lineLight dark:border-brand-lineDark"></span>
                <span className="w-2 h-2 rounded-full border border-brand-lineLight dark:border-brand-lineDark"></span>
                <span className="w-2 h-2 rounded-full border border-brand-lineLight dark:border-brand-lineDark"></span>
              </div>

              <div className="p-5 text-xs md:text-sm space-y-2 leading-relaxed">
                <p>
                  <span className="font-bold text-brand-mutedLight dark:text-brand-mutedDark">
                    const
                  </span>{" "}
                  status ={" "}
                  <span className="italic opacity-80">"available"</span>;
                </p>
                <motion.p
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    delay: 0.8,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="inline-block">
                  // let's build something beautiful
                  <motion.span
                    animate={blinkAnimation}
                    className="inline-block ml-0.5 font-bold ">
                    _
                  </motion.span>
                </motion.p>
              </div>
            </div>
          </motion.div> */}
<TerminalDemo />
        </div>
      </div>
    </motion.main>
  );
}

export default Hero;
