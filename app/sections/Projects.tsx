"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { projects, type Project } from "../data/portfolio";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <section id="projects" className="scroll-mt-20 px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1280px]">
        <SectionHeading title="Featured Projects" />

          <div className="flex flex-wrap justify-center gap-5 [&>article]:w-full md:[&>article]:w-[calc(50%-0.625rem)] lg:[&>article]:w-[calc(33.333%-0.84rem)]">          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex h-full flex-col rounded-2xl border border-indigo-100 bg-white p-3 shadow-[0_12px_35px_-16px_rgba(99,102,241,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-16px_rgba(99,102,241,0.5)] dark:border-white/10 dark:bg-slate-900/60"
            >
              <div className="relative aspect-[16/6] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-1 flex-col px-2 pb-1 pt-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-1 flex-1 text-[15px] leading-5 text-slate-700 dark:text-slate-400">
                  {project.description}
                </p>

                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-400 via-violet-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-500/25 transition-all hover:shadow-lg hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
                >
                  View Details
                  <ArrowRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Details modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <button
            type="button"
            aria-label="Close details"
            onClick={() => setSelected(null)}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-indigo-100 bg-white p-5 shadow-2xl dark:border-white/10 dark:bg-[#0a0f1e] sm:p-6">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 max-h-[400px] md:max-h-[480px]">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {selected.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {selected.description}
                </p>
                <span className="mt-3 inline-block rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
                  {selected.users}
                </span>

                <h4 className="mt-5 text-sm font-bold text-slate-900 dark:text-white">
                  Key Features &amp; Implementation
                </h4>
                <ul className="mt-3 space-y-2">
                  {selected.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-violet-600 to-blue-500" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
