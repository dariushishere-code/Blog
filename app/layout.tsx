import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kima Davidson — Digital Designer",
  description:
    "I design digital experiences — from modern websites, visual identities and graphic design — focused on clarity, usability, and strong visual storytelling.",
  keywords: [
    "Kima Davidson",
    "Digital Designer",
    "Web Design",
    "Branding",
    "Graphic Design",
    "Portfolio",
  ],
  openGraph: {
    title: "Kima Davidson — Digital Designer",
    description:
      "I design digital experiences — websites, visual identities and graphic design — focused on clarity, usability and strong visual storytelling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  );
}