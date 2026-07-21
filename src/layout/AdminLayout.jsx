import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
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

  const handleLogout = async () => {
    await authClient.signOut();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <aside className="glass-strong md:w-64 md:min-h-screen p-6 flex md:flex-col justify-between">
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

        <div className="hidden md:flex flex-col gap-3 pt-6">
          <div className="text-xs text-muted-foreground truncate">{session?.user?.email}</div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={handleLogout}
              className="text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-surface transition-colors">
              Log out
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-10">
        <Outlet />
      </main>
    </div>
  );
};
