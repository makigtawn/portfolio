import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { authClient, useSession } from "@/lib/authClient";

const navItems = [
  { to: "/admin", label: "Dashboard", end: true },
  { to: "/admin/projects", label: "Projects" },
  { to: "/admin/messages", label: "Messages" },
  { to: "/admin/content", label: "Content" },
];

const linkClasses = ({ isActive }) =>
  `block px-4 py-2 rounded-lg text-sm transition-colors ${
    isActive
      ? "bg-primary text-primary-foreground"
      : "text-muted-foreground hover:text-foreground hover:bg-surface"
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
    <div className="min-h-screen flex flex-col md:flex-row font-mono">
      {/* Mobile top bar — hidden on desktop, sidebar below takes over there */}
      <div className="md:hidden glass-strong flex items-center justify-between p-4">
        <a href="/" className="text-xl font-bold tracking-tight">
          MG<span className="text-primary">.</span>
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
        <div className="md:hidden glass-strong p-4 space-y-4">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMobileNavOpen(false)}
                className={linkClasses}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="pt-2 border-t border-border space-y-2">
            <div className="text-xs text-muted-foreground truncate">{session?.user?.email}</div>
            <button
              onClick={handleLogout}
              className="text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-surface transition-colors">
              Log out
            </button>
          </div>
        </div>
      )}

      {/* Desktop sidebar — unchanged */}
      <aside className="hidden md:flex md:w-64 md:min-h-screen glass-strong p-6 flex-col justify-between">
        <div className="space-y-6 w-full">
          <a href="/" className="text-xl font-bold tracking-tight">
            MG<span className="text-primary">.</span>
          </a>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={linkClasses}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-6">
          <div className="text-xs text-muted-foreground truncate">{session?.user?.email}</div>
          <button
            onClick={handleLogout}
            className="text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-surface transition-colors w-fit">
            Log out
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-10">
        <Outlet />
      </main>
    </div>
  );
};
