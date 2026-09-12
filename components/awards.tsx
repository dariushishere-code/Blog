"use client";

import { awards } from "@/lib/content";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

export default function Awards() {
  return (
    <section id="awards" className="scroll-mt-10 pt-24 lg:pt-32">
      <SectionHeading
        index="05"
        eyebrow="Awards"
        title={
          <>
            Recognition
          </>
        }
        description="A handful of acknowledgements from the design community along the way."
      />

      <div className="mt-10 border-t border-hairline">
        {awards.map((award, i) => (
          <Reveal key={`${award.year}-${award.title}`} delay={i * 0.05}>
            <div className="grid grid-cols-[56px_1fr] items-baseline gap-x-6 border-b border-hairline py-7 transition-colors duration-300 hover:bg-black/[0.02] sm:grid-cols-[64px_1fr_auto]">
              <span className="eyebrow text-neutral-400">{award.year}</span>
              <h3 className="text-base font-medium tracking-tight text-ink sm:text-lg">
                {award.title}
              </h3>
              <span className="font-serif col-start-2 text-neutral-400 sm:col-start-3 sm:italic">
                {award.project}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}