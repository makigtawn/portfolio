import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

export const PublicLayout = () => {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-brand-bgLight text-brand-fgLight dark:bg-brand-bgDark dark:text-brand-fgDark font-mono select-none">
      <div className="max-w-7xl mx-auto lg:p-14 md:p-8">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
