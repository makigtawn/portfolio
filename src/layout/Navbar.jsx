import { Link, NavLink } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const linkClasses = ({ isActive }) =>
  `px-4 py-2 text-sm rounded-full hover:bg-surface ${
    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
  }`;

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight hover:text-primary">
          MG<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink to={link.to} key={link.to} className={linkClasses}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* CTA + theme */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faXmark : faBars}
            className="h-6 w-6"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-border">
              <span className="text-sm text-muted-foreground">Appearance</span>
              <ThemeToggle />
            </div>
            {navLinks.map((link) => (
              <NavLink
                to={link.to}
                key={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2">
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
