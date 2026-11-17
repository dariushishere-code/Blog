

import { profile, socials } from "@/lib/content";
import { externalLinkProps } from "@/lib/utils";
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
            Reach <span className="editorial-serif italic text-accent">out</span>
          </>
        }
        description="Photography requests, bug-filled codebases, collaborations and full-time roles — all welcome."
      />

      <Reveal className="mt-10 border-y border-hairline py-8 sm:py-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h3 className="max-w-2xl text-2xl font-medium leading-tight tracking-[-0.045em] text-ink sm:text-4xl">
              Have a thoughtful project in mind?
            </h3>
            <p className="mt-3 max-w-lg text-[14px] leading-7 text-muted">
              {profile.status} — open to collaborations, remote full-time roles,
              code audits and thoughtful side projects.
            </p>
            <p className="mt-2 text-[13px] text-muted">{profile.location}</p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent(
                "Hello — via your portfolio"
              )}`}
              className="group inline-flex max-w-full items-center gap-3 text-base font-medium tracking-tight text-ink transition-colors hover:text-accent sm:text-lg"
            >
              <span className="break-all">{profile.email}</span>
              <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.resumeUrl}
              {...externalLinkProps("Résumé PDF")}
              className="inline-flex items-center gap-1.5 text-[13px] text-muted underline decoration-hairline underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              Résumé (PDF)
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-hairline pt-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              {...externalLinkProps(`${social.label} profile`)}
              className="text-[13px] text-muted transition-colors hover:text-accent"
            >
              {social.label}
              <span className="ml-1.5 text-ink">{social.handle}</span>
              <span className="ml-1" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}