"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() =>
      setIsDark(document.documentElement.classList.contains("dark"))
    );
    return () => cancelAnimationFrame(frame);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={`flex h-8 w-8 items-center justify-center rounded-full border shadow-sm transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 lg:h-10 lg:w-10 ${
        isDark
          ? "border-white/10 bg-white/5 text-violet-300"
          : "border-slate-200 bg-white text-amber-500"
      }`}
    >
      {isDark ? <Moon size={17} /> : <Sun size={17} />}
    </button>
  );
};

export default ThemeSwitch;