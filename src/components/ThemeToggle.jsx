import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/useTheme";

export function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/80 text-foreground transition-colors hover:border-primary/40 hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      title={isLight ? "Dark mode" : "Light mode"}
    >
      <FontAwesomeIcon
        icon={isLight ? faMoon : faSun}
        className="h-4 w-4"
      />
    </button>
  );
}
