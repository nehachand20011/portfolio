"use client";

import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { education, profile } from "../data/portfolio";

export default function BottomSection() {
  return (
    <section className="px-5 pb-14 pt-8 sm:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1280px] gap-8 lg:grid-cols-[0.8fr_1.3fr_1.4fr] lg:gap-0 lg:divide-x lg:divide-slate-200 dark:lg:divide-white/10">
        {/* Education */}
        <div id="education" className="flex scroll-mt-24 gap-3 lg:pr-8">
          <GraduationCap
            size={36}
            className="mt-0.5 shrink-0 text-violet-600 dark:text-violet-400"
          />
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Education
            </h2>
            <p className="mt-3 text-base font-bold text-slate-900 dark:text-white">
              {education[0].title}
            </p>
            <p className="mt-0.5 text-base text-slate-700 dark:text-slate-400">
              {education[0].institution}
            </p>
          </div>
        </div>

        {/* Contact info */}
        <div id="contact" className="flex scroll-mt-24 gap-3 lg:px-8">
          <Mail
            size={32}
            className="mt-0.5 shrink-0 text-violet-600 dark:text-violet-400"
          />
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Contact
            </h2>
            <p className="mt-1 text-xs text-slate-700 dark:text-slate-400">
              Let&apos;s connect! Feel free to reach out for collaborations or
              opportunities.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-800 dark:text-slate-200">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 transition hover:text-violet-600"
              >
                <Mail size={18} className="text-blue-600" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 transition hover:text-violet-600"
              >
                <Phone size={18} className="text-blue-600" />
                {profile.phone}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin size={18} className="text-blue-600" />
                {profile.location}
              </span>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="lg:pl-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
