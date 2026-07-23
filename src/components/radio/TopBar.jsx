const navLinks = [
  { href: "#broadcasts", label: "Broadcasts" },
  { href: "#spectrum", label: "Spectrum" },
  { href: "#log", label: "About" },
  { href: "#github", label: "Activity" },
  { href: "#contact", label: "Contact" },
];

export const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-11 lg:h-15 bg-bg-radio-2 border-b border-border-radio z-50 flex flex-row px-8 items-center">
      <div className="flex items-center">
        <span className="animate-blink w-2 h-2 rounded-full bg-signal-red inline-block" />
        <span className="font-mono text-amber-radio text-[13px] lg:text-[14px] tracking-[.15em] ml-2">
          MEKLIT
        </span>
      </div>

      <span className="hidden md:block font-mono text-text-dim text-[11px] lg:text-[12px] tracking-[.1em] mx-10">
        96.4 MHz · EST. 2019 · SHORTWAVE BROADCAST
      </span>

      <div className="hidden md:flex gap-6 ml-auto">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-mono text-[11px] lg:text-[12px] tracking-[.1em] text-text-dim uppercase hover:text-amber-radio transition-colors">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
