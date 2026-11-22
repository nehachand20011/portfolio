"use client";

import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import AboutExperience from "./sections/AboutExperience";
import BottomSection from "./sections/BottomSection";
import Footer from "./sections/Footer";
import HeaderSection from "./sections/HeaderSection";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import TechnicalSkills from "./sections/TechnicalSkills";

const Portfolio = () => {
  const [toastTheme, setToastTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = document.documentElement;
    const sync = () =>
      setToastTheme(root.classList.contains("dark") ? "dark" : "light");
    sync();

    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme={toastTheme}
      />

      <div className="bg-page min-h-screen w-full overflow-x-clip text-slate-900 transition-colors duration-300 dark:text-slate-100">
        <HeaderSection />
        <main className="overflow-x-clip">
          <Hero />
          <TechStack />
          <AboutExperience />
          <TechnicalSkills />
          <Projects />
          <BottomSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;