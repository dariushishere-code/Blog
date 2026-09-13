import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import DotPattern from "@/components/ui/dot-pattern";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alirezaebrahimi.tech"),
  title: "Alireza Ebrahimi — Front-End Developer & Photographer",
  description:
    "Alireza Ebrahimi — front-end developer & photographer building sharp, accessible interfaces that last forever. React, Next.js, WebGL, bug hunting and a 50mm lens.",
  keywords: [
    "Alireza Ebrahimi",
    "Front-End Developer",
    "Photographer",
    "React",
    "Next.js",
    "TypeScript",
    "WebGL",
    "Three.js",
    "Design Systems",
    "Bug Fixing",
    "Portfolio",
  ],
  openGraph: {
    title: "Alireza Ebrahimi — Front-End Developer & Photographer",
    description:
      "Building sharp interfaces that stay forever sharp — plus photography, bug hunting and deliberate space.",
    type: "website",
    url: "https://alirezaebrahimi.tech",
    siteName: "Alireza Ebrahimi",
    images: [
      {
        url: "/profile.jpg",
        width: 912,
        height: 1136,
        alt: "Alireza Ebrahimi — portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alireza Ebrahimi — Front-End Developer & Photographer",
    description: "Sharp, accessible interfaces that stay sharp forever.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
      <body className="relative">
        {/* Whole-page background: subtle dotted grid fading out from the top */}
        <DotPattern
          cx={1}
          cy={1}
          cr={1}
          className="fixed inset-0 -z-20 text-white/5 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,white,transparent)]"
        />
        {children}
      </body>
    </html>
  );
}