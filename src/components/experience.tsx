

import { experience } from "@/lib/content";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-10 pt-24 lg:pt-32">
      <SectionHeading
        index="05"
        eyebrow="Experience"
        title={
          <>
            My <span className="editorial-serif italic text-accent">journey</span>
          </>
        }
      />

      <div className="mt-10 border-t border-hairline">
        {experience.map((entry, i) => (
          <Reveal key={entry.role} delay={i * 0.07}>
            <div className="relative grid gap-3 border-b border-hairline py-7 sm:grid-cols-[12rem_1fr] sm:gap-8 lg:py-9">
              <span className="eyebrow pt-1 text-muted">
                {entry.period}
              </span>
              <div>
                <h3 className="text-lg font-medium tracking-tight text-ink sm:text-xl">
                  {entry.role}
                </h3>
                <p className="mt-1 text-sm text-muted">{entry.org}</p>
                {entry.points ? (
                  <ul className="mt-4 max-w-2xl space-y-2">
                    {entry.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-[14px] leading-6 text-muted"
                      >
                        <span
                          className="mt-[0.7rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}