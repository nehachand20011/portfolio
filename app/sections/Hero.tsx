import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { DownloadIcon, FolderIcon } from "../components/Icons";
import { profile } from "../data/portfolio";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-3rem)] flex-col overflow-hidden px-5 sm:px-8 lg:min-h-[calc(100svh-4rem)] lg:px-10"
    >
      <div className="relative mx-auto grid w-full max-w-[1280px] flex-1 items-end gap-4 lg:grid-cols-2">
        {/* Text */}
        <div className="self-center pb-6 pt-12 lg:pb-16 lg:pt-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-200">
            Hello, I&apos;m Neha <span aria-hidden="true">👋</span>
          </span>

          <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight text-[#0f172a] dark:text-white sm:text-6xl lg:text-7xl xl:text-[84px]">
            Neha <span className="gradient-text">Chand</span>
          </h1>

          <p className="mt-3 text-lg font-bold text-slate-900 dark:text-slate-100 sm:text-xl xl:text-2xl">
            {profile.title}
          </p>

          <p className="mt-5 max-w-sm text-base leading-7 text-slate-700 dark:text-slate-400 xl:text-lg">
            {profile.heroIntroduction}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <FolderIcon size={19} />
              View My Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-800 transition-all hover:-translate-y-0.5 hover:border-violet-400 hover:text-violet-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-200"
            >
              <DownloadIcon size={18} />
              Download CV
            </a>
          </div>
        </div>

        {/* Portrait: plain background, no padding/frame */}
        <div className="relative mx-auto h-[380px] w-full max-w-xl self-end sm:h-[460px] lg:h-[min(560px,62svh)]">
          <Image
            src={profile.profileImage}
            alt="Neha Chand"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>

      {/* Scroll to explore */}
      <a
        href="#about"
        aria-label="Scroll to explore"
        className="relative z-20 mx-auto flex flex-col items-center gap-1 pb-4 pt-2 text-slate-500 transition-colors hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-300"
      >
        <ChevronDown size={26} className="animate-float-y" />
        <span className="text-xs font-medium sm:text-sm">Scroll to explore</span>
      </a>
    </section>
  );
};

export default Hero;