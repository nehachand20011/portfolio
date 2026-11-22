"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { profile } from "../data/portfolio";

type Social = {
  label: string;
  href: string;
  path?: string;
  icon?: ReactNode;
};

const socials: Social[] = [
  {
    label: "GitHub",
    href: profile.github,
    path: "M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z",
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
  },
  {
    label: "X (Twitter)",
    href: profile.twitter,
    icon: <FaXTwitter className="h-6 w-6" />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b1230] px-5 py-9 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
        <div className="flex items-center gap-3">
          <Image
            src="/projects/nehalogo1.png"
            alt="Neha Chand logo"
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
          />
          <div>
            <p className="text-base font-bold">{profile.name}</p>
            <p className="text-xs text-slate-300">{profile.role}</p>
          </div>
        </div>

        <p className="text-sm text-slate-200">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-white transition hover:scale-110 hover:text-violet-300"
              >
                {social.icon ?? (
                  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
                    <path d={social.path} />
                  </svg>
                )}
              </a>
            ))}
          </div>

          <span className="hidden h-9 w-px bg-white/20 sm:block" />

          <p className="inline-flex items-center gap-1.5 text-xs text-slate-200">
            Built with
            <Heart size={13} className="fill-red-500 text-red-500" />
            using Angular &amp; .NET
          </p>
        </div>
      </div>
    </footer>
  );
}