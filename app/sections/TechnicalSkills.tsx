"use client";

import { Database, Monitor, Server, Wrench } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { skillCards } from "../data/portfolio";

const icons = {
  frontend: Monitor,
  backend: Server,
  database: Database,
  tools: Wrench,
};

const tileStyles = [
  "bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300",
  "bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300",
  "bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300",
  "bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300",
];

export default function TechnicalSkills() {
  return (
    <section
      id="technical-skills"
      className="scroll-mt-20 px-5 py-8 sm:px-8 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <SectionHeading title="Technical Skills" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCards.map((card, index) => {
            const Icon = icons[card.icon];
            return (
              <div
                key={card.title}
                className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-white px-5 pb-7 pt-5 text-center shadow-[0_10px_30px_-14px_rgba(99,102,241,0.3)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_-14px_rgba(99,102,241,0.4)] dark:border-white/10 dark:bg-slate-900/60"
              >
                <div
                  className={`mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl ${tileStyles[index % tileStyles.length]}`}
                >
                  <Icon size={30} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="mx-auto mt-1.5 max-w-[17rem] text-sm leading-5 text-slate-700 dark:text-slate-400">
                  {card.items.join(", ")}
                </p>
                <span className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-violet-600 to-blue-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
