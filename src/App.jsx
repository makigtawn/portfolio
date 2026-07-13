import Hero from "./pages/Hero";
import { Navbar } from "../src/layout/Navbar";
import { About } from "../src/pages/About";
import { Projects } from "../src/pages/Projects";
import { Contact } from "../src/pages/Contact";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-brand-bgLight text-brand-fgLight dark:bg-brand-bgDark dark:text-brand-fgDark font-mono select-none">
      <div className="max-w-7xl mx-auto lg:p-14 md:p-8">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
