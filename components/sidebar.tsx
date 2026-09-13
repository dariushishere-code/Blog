"use client";

import Image from "next/image";
import { languages, navLinks, profile, stats } from "@/lib/content";
import { ArrowRight, ArrowUpRight } from "./icons";
import { LiquidMetalButton } from "./ui/liquid-metal";

export default function Sidebar() {
  return (
    <aside
      id="top"
      className="no-scrollbar shrink-0 border-hairline lg:sticky lg:top-0 lg:h-screen lg:w-[430px] lg:overflow-y-auto lg:border-r xl:w-[470px]"
    >
      <div className="px-5 py-8 sm:px-8 lg:px-10 lg:py-14">
        {/* Anchor nav */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2 border-b border-hairline pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-neutral-400 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Profile */}
        <div className="mt-10 lg:mt-12">
          <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full border border-hairline shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
            <Image
              src="/profile.jpg"
              alt={`${profile.name} — portrait photo`}
              fill
              priority
              sizes="120px"
              className="object-cover"
            />
          </div>
          <h1 className="mt-7 text-[2.6rem] font-medium leading-[0.98] tracking-tight text-ink sm:text-6xl">
            {profile.name}
          </h1>
          <p className="eyebrow mt-4 text-neutral-500">{profile.title}</p>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-neutral-400">
            {profile.intro}
          </p>
        </div>

        {/* Availability */}
        <div className="mt-7 flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
          <span className="text-sm text-neutral-400">{profile.status}.</span>
        </div>

        {/* CTA */}
        <LiquidMetalButton
          href={`mailto:${profile.email}`}
          size="sm"
          className="mt-6"
          icon={<ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />}
          metalConfig={{ colorBack: "#35d17f", colorTint: "#86efac" }}
        >
          Get in touch
        </LiquidMetalButton>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="group mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-400 underline-offset-4 transition-colors hover:text-ink hover:underline"
        >
          Résumé (PDF)
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        {/* Languages */}
        <div className="mt-12">
          <p className="eyebrow text-neutral-500">Languages</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-3">
            {languages.map((language) => (
              <div key={language.name} className="whitespace-nowrap">
                <span className="text-[13px] font-semibold tracking-[0.18em] text-neutral-400">
                  {language.name.toUpperCase()}
                </span>
                <span className="ml-2 text-[11px] tracking-[0.18em] text-neutral-500">
                  {language.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* About */}
        <div className="mt-12">
          <h2 className="eyebrow text-ink">About</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-400">
            {profile.about}
          </p>
        </div>

        {/* Stats */}
        <dl className="mt-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-hairline">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`p-5 ${i % 2 === 0 ? "border-r border-hairline" : ""} ${
                i < 2 ? "border-b border-hairline" : ""
              }`}
            >
              <dt className="font-serif text-3xl italic text-ink">
                {stat.value}
              </dt>
              <dd className="mt-1.5 text-xs leading-snug text-neutral-500">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>

        {/* Footer */}
        <p className="mt-12 pb-2 text-xs text-neutral-500">
          © 2026 {profile.name} — {profile.title}
        </p>
      </div>
    </aside>
  );
}