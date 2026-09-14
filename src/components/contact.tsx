

import { profile, socials } from "@/lib/content";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { ArrowUpRight } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-10 pb-4 pt-24 lg:pt-32">
      <SectionHeading
        index="08"
        eyebrow="Contact"
        title={
          <>
            Reach <span className="font-serif italic font-normal">out</span>
          </>
        }
        description="Photography requests, bug-filled codebases, collaborations and full-time roles — all welcome."
      />

      <Reveal className="mt-10">
        <div className="rounded-3xl border border-hairline bg-white/[0.03] p-8 sm:p-12 lg:p-16">
          <h2 className="max-w-xl text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl">
            Let&apos;s build something{" "}
            <span className="font-serif italic font-normal">sharp</span>.
          </h2>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-neutral-400">
            {profile.status} — open to collaborations, remote full-time roles,
            code audits and thoughtful side projects.
          </p>

          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent(
              "Hello — via your portfolio"
            )}`}
            className="group mt-8 inline-flex max-w-full items-center gap-3 pb-2 text-xl font-medium tracking-tight text-ink sm:text-2xl"
          >
            <span className="truncate">{profile.email}</span>
            <ArrowUpRight className="h-6 w-6 shrink-0 text-neutral-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink" />
          </a>

          <p className="mt-1 text-sm text-neutral-400">{profile.location}</p>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="group mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-400 underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            Résumé (PDF)
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-neutral-400 underline-offset-4 transition-colors hover:text-ink hover:underline"
              >
                {social.label}{" "}
                <span className="text-neutral-500">{social.handle}</span> ↗
              </a>
            ))}
          </div>

          <p className="mt-14 text-xs text-neutral-500">
            © 2026 {profile.name} — {profile.title}. All rights reserved.
          </p>
        </div>
      </Reveal>
    </section>
  );
}