"use client";

import { education } from "@/lib/content";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-10 pt-24 lg:pt-32"
    >
      <SectionHeading
        index="05"
        eyebrow="Education"
        title={
          <>
            Continuous{" "}
            <span className="font-serif italic font-normal">learning</span>
          </>
        }
        description="Formal and self-directed — everything that shapes how I build software."
      />

      <div className="mt-10 border-t border-hairline">
        {education.map((entry, i) => (
          <Reveal key={entry.title} delay={i * 0.06}>
            <div className="grid grid-cols-[56px_1fr] items-baseline gap-x-6 border-b border-hairline py-7 transition-colors duration-300 hover:bg-white/[0.03] sm:grid-cols-[120px_1fr]">
              <span className="eyebrow pt-1 text-neutral-400">{entry.period}</span>
              <div>
                <h3 className="text-base font-medium tracking-tight text-ink sm:text-lg">
                  {entry.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">
                  {entry.detail}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}