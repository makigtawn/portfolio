import { useSiteContent } from "@/hooks/useSiteContent";

const FALLBACK_LOGS = [
  {
    time: "00:00:01",
    text: "Station initialized. MEKLIT is a fullstack developer between frontend precision and backend depth.",
  },
  {
    time: "00:00:04",
    text: "Began transmitting in 2019. Started with static. Got clearer every year.",
  },
  {
    time: "00:00:09",
    text: "Works best in hard problems — systems needing rebuilding, products needing to ship, codebases people are afraid to touch.",
  },
  {
    time: "00:00:14",
    text: "Believes good code is invisible — it just works, quietly, like a signal always there.",
  },
  {
    time: "00:00:21",
    text: "Currently open to new transmissions. If your project needs a signal, tune in.",
  },
];

export const TransmissionLog = () => {
  const { content } = useSiteContent();
  const logs = content?.about?.logs?.length ? content.about.logs : FALLBACK_LOGS;

  return (
    <section id="log" className="max-w-4xl mx-auto px-8 py-24 relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-[11px] text-amber-radio border border-amber-dim px-2 py-0.5 rounded-sm tracking-[.2em]">
          CH·03
        </span>
        <h2 className="font-serif text-2xl text-text-radio tracking-wide">About the Station</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border-radio to-transparent" />
      </div>

      <div className="bg-bg-radio-2 border border-border-radio rounded-sm p-8 relative">
        <span className="absolute -top-[9px] left-6 bg-bg-radio-2 px-2 font-mono text-[9px] tracking-[.18em] text-amber-radio">
          TRANSMISSION LOG
        </span>

        {logs.map((log, i) => (
          <div
            key={i}
            className={`flex gap-4 text-[13px] leading-relaxed ${i === logs.length - 1 ? "" : "mb-4"}`}>
            <span className="font-mono text-[10px] text-amber-dim tracking-[.06em] min-w-[70px] pt-0.5">
              {log.time}
            </span>
            <span className="text-text-dim">{log.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
