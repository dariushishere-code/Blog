import { useState } from "react";
import { Link } from "react-router";
import { navLinks, profile, stats } from "@/lib/content";
import { externalLinkProps } from "@/lib/utils";
import EtchedAccretion from "./ui/etched-accretion";
import { ArrowRight, ArrowUpRight } from "./icons";

function NavigationLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const className =
    "text-[13px] text-muted transition-colors hover:text-accent";

  return href.startsWith("/") ? (
    <Link className={className} to={href} onClick={onClick}>
      {label}
    </Link>
  ) : (
    <a className={className} href={href} onClick={onClick}>
      {label}
    </a>
  );
}

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <EtchedAccretion
      height="auto"
      className="min-h-[100svh]"
      aria-label="Hero with a crimson accretion disk"
      params={{
        center: [0.78, 0.46],
        holeSize: 0.046,
        diskRadius: 1.15,
        grain: 0.72,
        vignette: 0.42,
        exposure: 1.05,
        clouds: 0.75,
      }}
    >
    <header id="top" className="section-shell relative z-10 pt-4 text-ink sm:pt-6">
      <nav aria-label="Main navigation" className="border-b border-white/15">
        <div className="flex min-h-16 items-center justify-between gap-6 pb-4">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3 text-ink"
            aria-label="Alireza Ebrahimi, home"
          >
            <span className="font-serif text-2xl tracking-[-0.06em]">AE.</span>
            <span className="hidden text-[13px] font-medium sm:block">
              {profile.name}
            </span>
          </Link>

          <div className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navLinks.map((link) => (
              <NavigationLink key={link.href} {...link} />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="hidden border border-white/70 px-4 py-2 text-[12px] font-medium text-ink transition-colors hover:bg-ink hover:text-paper sm:inline-flex"
            >
              Get in touch <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 border border-white/20 px-3 text-[12px] font-medium text-ink transition-colors hover:border-white/70 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? "Close" : "Menu"}
              <span aria-hidden="true">{menuOpen ? "−" : "+"}</span>
            </button>
          </div>
        </div>
        <div
          id="mobile-navigation"
          hidden={!menuOpen}
          className="grid grid-cols-2 gap-x-5 gap-y-4 border-t border-white/15 py-5 lg:hidden"
        >
          {navLinks.map((link) => (
            <NavigationLink
              key={link.href}
              {...link}
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </div>
      </nav>

      <section className="flex min-h-[min(760px,calc(100svh-80px))] flex-col items-center justify-center py-16 text-center sm:py-20 lg:py-24">
        <div className="w-full">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <p className="eyebrow text-muted">
              {profile.title} <span aria-hidden="true">·</span> {profile.location}
            </p>
            <span className="inline-flex items-center gap-2 text-[12px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {profile.status}
            </span>
          </div>
          <h1 className="hero-name text-ink" aria-label="Alireza Ebrahimi">
            <span className="hero-name-lines" aria-hidden="true">
              {["ALIREZA", "EBRAHIMI"].map((word) => (
                <span className="hero-name-line" key={word}>
                  {[...word].map((letter, index) => (
                    <span className="hero-name-letter" key={`${word}-${index}`}>
                      {letter}
                    </span>
                  ))}
                </span>
              ))}
            </span>
            <span className="hero-name-glitch hero-name-glitch-red" aria-hidden="true">
              {["ALIREZA", "EBRAHIMI"].map((word) => (
                <span className="hero-name-line" key={word}>
                  {[...word].map((letter, index) => (
                    <span className="hero-name-letter" key={`${word}-${index}`}>
                      {letter}
                    </span>
                  ))}
                </span>
              ))}
            </span>
            <span className="hero-name-glitch hero-name-glitch-cyan" aria-hidden="true">
              {["ALIREZA", "EBRAHIMI"].map((word) => (
                <span className="hero-name-line" key={word}>
                  {[...word].map((letter, index) => (
                    <span className="hero-name-letter" key={`${word}-${index}`}>
                      {letter}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed tracking-[-0.02em] text-ink sm:text-xl">
            {profile.tagline}
          </p>
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-7 text-muted">
            {profile.intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex min-h-12 items-center gap-4 bg-accent px-5 text-sm font-medium text-[#07070c] transition-colors hover:bg-ink hover:text-paper"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#work"
              className="group inline-flex min-h-12 items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              Explore selected work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <a
            href={profile.resumeUrl}
            {...externalLinkProps("Résumé PDF")}
            className="mt-5 inline-flex items-center gap-1 text-[12px] text-muted underline decoration-white/25 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            Résumé (PDF) <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </section>

      <div className="grid grid-cols-2 border-b border-white/15 py-5 sm:py-7">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`${index > 0 ? "border-l border-white/15 pl-4 sm:pl-7" : ""} pr-3`}
          >
            <p className="font-mono text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 max-w-[12rem] text-[11px] leading-snug text-muted sm:text-[13px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </header>
    </EtchedAccretion>
  );
}
