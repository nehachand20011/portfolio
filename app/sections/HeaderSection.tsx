"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeSwitch from "../components/ThemeSwitch";
import { DownloadIcon } from "../components/Icons";
import { navItems, profile } from "../data/portfolio";

const HeaderSection = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((s): s is HTMLElement => Boolean(s));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.1, 0.4, 0.8] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const renderLinks = (variant: "desktop" | "mobile", onNavigate?: () => void) =>
    navItems.map((item) => {
      const id = item.href.slice(1);
      const isActive = activeSection === id;
      const base =
        "relative font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400";

      const styles =
        variant === "desktop"
          ? `${base} flex h-full items-center px-1 text-[13px] ${
              isActive
                ? "text-indigo-600 dark:text-indigo-300"
                : "text-slate-800 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-white"
            }`
          : `${base} block rounded-md px-2.5 py-1.5 text-xs ${
              isActive
                ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300"
                : "text-slate-700 hover:text-indigo-600 dark:text-slate-300"
            }`;

      return (
        <a
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          aria-current={isActive ? "page" : undefined}
          className={styles}
        >
          {item.label}
          {variant === "desktop" && isActive && (
            <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600" />
          )}
        </a>
      );
    });

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[#070b16]/90">
      <div className="mx-auto flex h-12 w-full max-w-[1280px] items-center justify-between gap-3 px-4 sm:px-8 lg:h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <Image
            src="/projects/nehalogo1.png"
            alt="Neha Chand logo"
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
          />
          <span className="text-[13px] font-bold text-slate-900 dark:text-white lg:text-[15px]">
            {profile.name}
          </span>
        </a>

        {/* Nav + theme (sangai, dahine tira) */}
        <div className="flex items-center gap-2 self-stretch lg:gap-8">
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 self-stretch lg:flex"
          >
            {renderLinks("desktop")}
          </nav>

          <div className="flex items-center gap-2 lg:gap-3">
            <ThemeSwitch />
            {/* <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-2.5 text-[13px] font-semibold text-white shadow-md shadow-violet-500/25 transition-all hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex"
            >
              <DownloadIcon size={16} />
              Download CV
            </a>
 */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 lg:hidden"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 overflow-hidden transition-[visibility] lg:hidden ${
          menuOpen ? "visible" : "invisible delay-300"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-slate-950/50 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[52%] max-w-[11.5rem] flex-col border-l border-slate-200 bg-white p-3 shadow-2xl transition-transform duration-300 dark:border-white/10 dark:bg-[#0a0f1e] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Image
                src="/projects/nehalogo1.png"
                alt="Neha Chand logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <p className="text-[11px] font-bold leading-tight text-slate-900 dark:text-white">
                {profile.name}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
              className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 text-slate-500 dark:border-white/10 dark:text-slate-300"
            >
              <X size={14} />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="space-y-0.5">
            {renderLinks("mobile", () => setMenuOpen(false))}
          </nav>

          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-auto inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-3 py-2 text-[11px] font-semibold text-white shadow-lg"
          >
            <DownloadIcon size={13} />
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;