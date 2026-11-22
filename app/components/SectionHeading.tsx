"use client";

interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-[28px]">
        {title}
      </h2>
      <span className="mt-1 h-[3px] w-10 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 mx-auto" />
    </div>
  );
}
