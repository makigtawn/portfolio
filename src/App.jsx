import { Navbar } from "../src/layout/Navbar";
import { Hero } from "../src/pages/Hero";
import { About } from "../src/pages/About";
import { Projects } from "../src/pages/Projects";
import { Experience } from "../src/pages/Experience";
import { Testimonials } from "../src/pages/Testimonials";
import { Contact } from "../src/pages/Contact";
import { Footer } from "@/layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
