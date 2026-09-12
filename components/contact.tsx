"use client";

import { profile, socials } from "@/lib/content";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { ArrowUpRight } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-10 pb-4 pt-24 lg:pt-32">
      <SectionHeading
        index="07"
        eyebrow="Contact"
        title={
          <>
            Reach <span className="font-serif italic font-normal">out</span>
          </>
        }
      />

      <Reveal className="mt-10">
        <div className="rounded-3xl border border-hairline bg-white/60 p-8 sm:p-12 lg:p-16">
          <h2 className="max-w-xl text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl">
            Let&apos;s create something{" "}
            <span className="font-serif italic font-normal">beautiful</span>{" "}
            together.
          </h2>

          <a
            href={`mailto:${profile.email}`}
            className="group mt-10 inline-flex max-w-full items-center gap-3 pb-2 text-xl font-medium tracking-tight text-ink sm:text-2xl"
          >
            <span className="truncate">{profile.email}</span>
            <ArrowUpRight className="h-6 w-6 shrink-0 text-neutral-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink" />
          </a>

          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-neutral-500 underline-offset-4 transition-colors hover:text-ink hover:underline"
              >
                {social.label} ↗
              </a>
            ))}
          </div>

          <p className="mt-14 text-xs text-neutral-400">
            © 2026 {profile.name} — {profile.title}. All rights reserved.
          </p>
        </div>
      </Reveal>
    </section>
  );
}