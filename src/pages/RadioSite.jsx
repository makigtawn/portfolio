import { TopBar } from "@/components/radio/TopBar";
import { Hero } from "@/components/radio/Hero";
import { WaveformDivider } from "@/components/radio/WaveformDivider";
import { Broadcasts } from "@/components/radio/Broadcasts";
import { Spectrum } from "@/components/radio/Spectrum";
import { TransmissionLog } from "@/components/radio/TransmissionLog";
import { SignalActivity } from "@/components/radio/SignalActivity";
import { Contact } from "@/components/radio/Contact";
import { Footer } from "@/components/radio/Footer";

export const RadioSite = () => {
  return (
    <div className="relative bg-bg-radio min-h-screen text-text-radio font-sans">
      <svg className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-[0.35]">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" opacity="0.04" />
      </svg>

      <TopBar />

      <main className="relative z-10">
        <Hero />
        <WaveformDivider />
        <Broadcasts />
        <WaveformDivider />
        <Spectrum />
        <WaveformDivider />
        <TransmissionLog />
        <WaveformDivider />
        <SignalActivity />
        <WaveformDivider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};
