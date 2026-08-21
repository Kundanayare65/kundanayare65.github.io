import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Highlights from "./sections/Highlights";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Footer from "./sections/Footer";

export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Projects />
        <div className="mx-auto grid max-w-[1180px] gap-12 px-5 pb-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
          <Skills />
          <Experience />
        </div>
        <About />
      </main>
      <Footer />
      {showTop && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-50 grid h-11 w-11 place-items-center rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-1 hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-100"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </div>
  );
}