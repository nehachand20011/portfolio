import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Light is the default. Dark is applied only if the user chose it before.
const themeInit = `try{var d=localStorage.getItem('theme')==='dark';document.documentElement.classList.toggle('dark',d)}catch(e){}`;
const description =
  "Portfolio of Neha Chand, a software engineer specializing in .NET, Angular, and secure fintech web applications.";

export const metadata: Metadata = {
  title: "Neha Chand",
  description,
  keywords: [
    "Neha Chand",
    "Software Engineer",
    "Portfolio",
    "Angular",
    ".NET",
    "C#",
    "Fintech",
    "Full Stack",
  ],
  authors: [{ name: "Neha Chand", url: "https://nehachand.com.np" }],
  creator: "Neha Chand",
  openGraph: {
    title: "Neha Chand – Software Engineer",
    description,
    url: "https://nehachand.com.np",
    siteName: "Neha Chand Portfolio",
    images: [
      {
        url: "https://nehachand.com.np/og-image.png",
        width: 1200,
        height: 630,
        alt: "Neha Chand Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neha Chand – Software Engineer",
    description,
    creator: "@nehachand",
    images: ["https://nehachand.com.np/og-image.png"],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://nehachand.com.np"),
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body
        className={`${jakarta.variable} font-sans antialiased bg-white dark:bg-[#070b16]`}
      >
        {children}
      </body>
    </html>
  );
}