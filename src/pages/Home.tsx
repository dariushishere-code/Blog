import Sidebar from "@/components/sidebar";
import Works from "@/components/works";
import Services from "@/components/services";
import Stack from "@/components/stack";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Faq from "@/components/faq";
import Contact from "@/components/contact";
import About from "@/components/about";
import WildHuntFooter from "@/components/ui/wild-hunt-footer";
import { profile, socials } from "@/lib/content";

const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "Selected work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "Experience", href: "#experience" },
    ],
  },
  {
    title: "Practice",
    links: [
      { label: "A little about me", href: "#about" },
      { label: "Education", href: "#education" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Elsewhere",
    links: socials.map((social) => ({ label: social.label, href: social.href })),
  },
  {
    title: "Contact",
    links: [
      { label: profile.email, href: `mailto:${profile.email}` },
      { label: "Résumé (PDF)", href: profile.resumeUrl },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Sidebar />
      <main id="main" className="section-shell min-w-0 pb-16">
        <About />
        <Works />
        <Services />
        <Stack />
        <Experience />
        <Education />
        <Faq />
        <Contact />
      </main>
      <WildHuntFooter
        wordmark="ALIREZA"
        tagline={profile.tagline}
        sideNote={`${profile.title} · ${profile.location}`}
        columns={footerColumns}
        legal={`© 2026 ${profile.name}`}
        colophon="Painting: Peter Nicolai Arbo, Åsgårdsreien (The Wild Hunt of Odin), 1872. Public domain. The blackletter is drawn in cells."
        fontFamily='"Inter", "Helvetica Neue", Arial, sans-serif'
        monoFamily='"DM Mono", ui-monospace, Menlo, Consolas, monospace'
      />
    </div>
  );
}
