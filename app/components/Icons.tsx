type IconProps = { size?: number; className?: string };

const base = (size: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  className,
  "aria-hidden": true as const,
});

export const DownloadIcon = ({ size = 18, className }: IconProps) => (
  <svg
    {...base(size, className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3v11m0 0-4-4m4 4 4-4M4 15v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4" />
  </svg>
);

export const FolderIcon = ({ size = 18, className }: IconProps) => (
  <svg {...base(size, className)} fill="currentColor">
    <path d="M3 6a2 2 0 0 1 2-2h4.2a2 2 0 0 1 1.5.7L12 6h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z" />
  </svg>
);

export const SendIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size, className)} fill="currentColor">
    <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

export const MailIcon = ({ size = 18, className }: IconProps) => (
  <svg {...base(size, className)} fill="currentColor">
    <path d="M3 5h18a1 1 0 0 1 1 1v.5l-10 6.25L2 6.5V6a1 1 0 0 1 1-1Zm19 3.35V18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8.35l10 6.25 10-6.25Z" />
  </svg>
);

export const PhoneIcon = ({ size = 18, className }: IconProps) => (
  <svg {...base(size, className)} fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

export const PinIcon = ({ size = 18, className }: IconProps) => (
  <svg {...base(size, className)} fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
  </svg>
);

export const CapIcon = ({ size = 18, className }: IconProps) => (
  <svg {...base(size, className)} fill="currentColor">
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z" />
  </svg>
);