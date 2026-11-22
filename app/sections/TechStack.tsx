import { techStack } from "../data/portfolio";

const TechStack = () => {
  return (
    <section className="px-3 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1280px] rounded-2xl border border-indigo-100 bg-white px-1 py-3 shadow-[0_12px_35px_-18px_rgba(99,102,241,0.35)] sm:px-2 sm:py-5 dark:border-white/10 dark:bg-slate-900/60">
        <div className="grid grid-cols-8">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className="relative flex flex-col items-center justify-start gap-1 px-0.5 text-center sm:gap-2.5 sm:px-2"
            >
              {index > 0 && (
                <span className="absolute left-0 top-1/2 h-6 w-px -translate-y-1/2 bg-slate-200 sm:h-12 dark:bg-white/10" />
              )}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="h-5 w-5 object-contain sm:h-10 sm:w-10"
              />
              <span className="text-[7px] font-medium leading-tight text-slate-700 sm:text-[13px] dark:text-slate-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;