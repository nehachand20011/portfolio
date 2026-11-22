"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { experience, profile } from "../data/portfolio";

const cardClass =
  "rounded-2xl border border-indigo-100 bg-white shadow-[0_12px_35px_-18px_rgba(99,102,241,0.35)] dark:border-white/10 dark:bg-slate-900/60 dark:shadow-none";

export default function AboutExperience() {
  return (
    <section className="px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1280px] gap-5 lg:grid-cols-[1.5fr_1fr]">
        {/* About Me */}
        <div id="about" className={`${cardClass} scroll-mt-24`}>
          <div className="grid gap-5 p-4 sm:grid-cols-[10rem_1fr] sm:p-5 lg:grid-cols-[12rem_1fr]">
            <div className="workspace-fade relative min-h-[8rem] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
              <Image
                src={profile.workspaceImage}
                alt="Workspace"
                fill
                sizes="(max-width: 640px) 100vw, 240px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-[28px]">
                About Me
              </h2>
              <span className="mt-1 h-[3px] w-10 rounded-full bg-gradient-to-r from-violet-600 to-blue-500" />
              <p className="mt-3 text-[15px] leading-6 text-slate-700 dark:text-slate-400">
                {profile.about}
              </p>
              <a
                href="#experience"
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-blue-500 px-5 py-2 text-[13px] font-semibold text-slate-800 transition hover:bg-blue-50 dark:text-slate-200 dark:hover:bg-blue-500/10"
              >
                Learn More
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div id="experience" className={`${cardClass} scroll-mt-24 p-5 sm:p-6`}>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-[28px]">
            Experience
          </h2>

          <div className="relative mt-4 pl-7">
            <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-violet-500 to-blue-500" />

            {experience.map((job) => (
              <div key={job.role} className="relative pb-5 last:pb-0">
                <span className="absolute -left-7 top-1 h-[15px] w-[15px] rounded-full bg-gradient-to-br from-violet-600 to-blue-500 ring-4 ring-indigo-100 dark:ring-indigo-500/20" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm leading-5 text-slate-700 dark:text-slate-400">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}