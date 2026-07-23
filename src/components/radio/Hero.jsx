import { useEffect, useState } from "react";
import { useSiteContent } from "@/hooks/useSiteContent";
import { VUMeter } from "./VUMeter";

const ticks = [88, 92, 96, 100, 104, 108];

const fallback = {
  name: "MEKLIT",
  title: "Shortwave Broadcast · Fullstack Developer",
  tagline: "Transmitting code from the unknown · Est. 2019",
};

export const Hero = () => {
  const { content } = useSiteContent();
  const hero = content?.hero?.name ? content.hero : fallback;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const freq = (96.4 + Math.min(scrollY / window.innerHeight, 1) * 13.8).toFixed(1);

  return (
    <section className="min-h-screen pt-11 flex flex-col items-center justify-center text-center px-8 relative z-10">
      <div className="mb-10">
        <VUMeter />
      </div>

      <p className="font-mono text-[11px] lg:text-[13px] tracking-[.3em] text-text-dim uppercase mb-5">
        {hero.title}
      </p>

      <h1
        className="font-serif text-[clamp(4rem,12vw,9rem)] text-amber-radio leading-none mb-3 tracking-[.05em]"
        style={{ textShadow: "0 0 60px rgba(212,160,48,.15)" }}>
        {hero.name}
      </h1>

      <p className="font-mono text-[clamp(11px,1.8vw,16px)] text-text-dim tracking-[.12em] mb-12">
        {hero.tagline}
      </p>

      <div className="w-[320px] h-[80px] relative mb-6">
        <div className="absolute left-0 right-0 top-1/2 bg-gradient-to-r from-transparent via-amber-radio to-transparent h-px" />

        <div className="absolute inset-0 flex justify-between items-center">
          {ticks.map((tick) => (
            <div key={tick} className="flex flex-col items-center">
              <div className={`w-px bg-amber-dim ${tick === 96 ? "h-5 bg-amber-radio" : "h-3"}`} />
              <span className="font-mono text-[9px] text-text-dim mt-1">{tick}</span>
            </div>
          ))}
        </div>

        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-2 h-2 bg-amber-glow rounded-full shadow-[0_0_8px_#f0c060]" />
          <div className="w-0.5 h-10 bg-amber-glow rounded shadow-[0_0_6px_#d4a030]" />
        </div>
      </div>

      <p
        className="font-mono text-[22px] lg:text-[26px] text-amber-glow tracking-[.1em] mb-10"
        style={{ textShadow: "0 0 20px rgba(240,192,96,.4)" }}>
        {freq} MHz
      </p>

      <a
        href="#broadcasts"
        className="animate-bounce-slow font-mono text-[10px] lg:text-[11px] tracking-[.2em] text-text-dim uppercase flex items-center gap-2">
        ▼ Tune in below
      </a>
    </section>
  );
};
