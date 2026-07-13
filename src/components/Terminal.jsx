import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "../components/magicui/terminal";

export function TerminalDemo() {
  return (
    <Terminal>
      <p className=" dark:text-zinc-100">
        <span className="font-bold text-brand-mutedLight dark:text-brand-mutedDark">
          const
        </span>{" "}
        status = <span className="italic opacity-80">"available"</span>;
      </p>
      <TypingAnimation delay={800} speed={50}>
        $ // let's build something beautiful
      </TypingAnimation>

    </Terminal>
  );
}
