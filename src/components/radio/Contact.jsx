export const Contact = () => {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-8 py-24 relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-xs text-amber-radio border border-amber-dim px-2 py-0.5 rounded-sm tracking-[.2em]">
          CH·05
        </span>
        <h2 className="font-serif text-2xl lg:text-3xl text-text-radio tracking-wide">Open Channel</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border-radio to-transparent" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border-radio border border-border-radio rounded-sm overflow-hidden">
        <div className="bg-bg-radio-2 p-6 flex flex-col gap-1.5">
          <span className="font-mono text-xs tracking-[.18em] uppercase text-amber-dim">
            Transmission
          </span>
          <span className="font-serif text-lg lg:text-xl text-text-radio">
            <a
              href="mailto:meklitgirmaw@gmail.com"
              className="text-amber-radio hover:text-amber-glow transition-colors">
              hello@meklit.dev
            </a>
          </span>
        </div>

       
<div className="bg-bg-radio-2 p-6 flex flex-col gap-1.5">
  <span className="font-mono text-xs tracking-[.18em] uppercase text-amber-dim">
    LinkedIn
  </span>
  <span className="font-serif text-lg lg:text-xl text-text-radio">
    <a
      href="https://linkedin.com/in/makigtawn"
      className="text-amber-radio hover:text-amber-glow transition-colors">
      linkedin.com/makigtawn
    </a>
  </span>
</div>
        <div className="bg-bg-radio-2 p-6 flex flex-col gap-1.5">
          <span className="font-mono text-xs tracking-[.18em] uppercase text-amber-dim">
            Signal Range
          </span>
          <span className="font-serif text-lg lg:text-xl text-text-radio">
            <span className="font-mono text-sm lg:text-base text-text-dim">Remote · Worldwide</span>
          </span>
        </div>

        <div className="bg-bg-radio-2 p-6 flex flex-col gap-1.5">
          <span className="font-mono text-xs tracking-[.18em] uppercase text-amber-dim">
            Status
          </span>
          <span className="font-serif text-lg lg:text-xl text-text-radio flex items-center gap-2">
            <span className="w-2 h-2 bg-signal-green rounded-full animate-blink inline-block" />
            <span className="text-base lg:text-lg">Open to opportunities</span>
          </span>
        </div>
      </div>
    </section>
  );
};
