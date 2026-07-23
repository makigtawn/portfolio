import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { authClient, useSession } from "@/lib/authClient";

const navItems = [
  { to: "/admin", code: "CH·00", label: "Overview", end: true },
  { to: "/admin/projects", code: "CH·01", label: "Broadcasts" },
  { to: "/admin/messages", code: "CH·02", label: "Open Channel" },
  { to: "/admin/content", code: "CH·03", label: "Content" },
];

const linkClasses = ({ isActive }) =>
  `flex items-center gap-2 px-4 py-2 border-l-2 font-mono text-xs tracking-[.1em] uppercase transition-colors ${
    isActive
      ? "border-primary text-primary"
      : "border-transparent text-muted-foreground hover:text-foreground"
  }`;

export const AdminLayout = () => {
  const { data: session } = useSession();
  const navigate = useNavigate();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row font-mono bg-background text-foreground">
      <svg className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-[0.35]">
        <filter id="admin-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#admin-noise)" opacity="0.04" />
      </svg>

      {/* Mobile top bar — hidden on desktop, sidebar below takes over there */}
      <div className="relative z-10 md:hidden bg-card border-b border-border flex items-center justify-between p-4">
        <a href="/" className="font-serif text-lg text-primary tracking-wide">
          MEKLIT<span className="text-primary">.</span>
        </a>
        <button
          onClick={() => setMobileNavOpen((prev) => !prev)}
          className="p-2 text-foreground"
          aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileNavOpen}>
          <FontAwesomeIcon icon={mobileNavOpen ? faXmark : faBars} className="h-5 w-5" />
        </button>
      </div>

      {mobileNavOpen && (
        <div className="relative z-10 md:hidden bg-card border-b border-border p-4 space-y-4">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMobileNavOpen(false)}
                className={linkClasses}>
                <span className="text-amber-dim">{item.code}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="pt-2 border-t border-border space-y-2">
            <div className="text-xs font-mono text-muted-foreground truncate">
              {session?.user?.email}
            </div>
            <button
              onClick={handleLogout}
              className="font-mono text-xs uppercase tracking-[.1em] text-muted-foreground hover:text-primary px-3 py-2 transition-colors">
              Log out
            </button>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="relative z-10 hidden md:flex md:w-64 md:min-h-screen bg-card border-r border-border p-6 flex-col justify-between">
        <div className="space-y-8 w-full">
          <a href="/" className="font-serif text-xl text-primary tracking-wide">
            MEKLIT
          </a>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={linkClasses}>
                <span className="text-amber-dim">{item.code}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-6 border-t border-border">
          <div className="text-xs font-mono text-muted-foreground truncate">
            {session?.user?.email}
          </div>
          <button
            onClick={handleLogout}
            className="font-mono text-xs uppercase tracking-[.1em] text-muted-foreground hover:text-primary px-0 py-2 transition-colors w-fit">
            Log out
          </button>
        </div>
      </aside>

      <main className="relative z-10 flex-1 p-6 md:p-10">
        <Outlet />
      </main>
    </div>
  );
};
