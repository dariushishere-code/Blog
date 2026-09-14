

import { experience } from "@/lib/content";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-10 pt-24 lg:pt-32">
      <SectionHeading
        index="04"
        eyebrow="Experience"
        title={
          <>
            My <span className="font-serif italic font-normal">journey</span>
          </>
        }
      />

      <div className="mt-10 border-t border-hairline">
        {experience.map((entry, i) => (
          <Reveal key={entry.role} delay={i * 0.07}>
            <div className="relative flex flex-col gap-2 border-b border-hairline py-8 sm:flex-row sm:gap-12 lg:py-9">
              <span className="eyebrow w-44 shrink-0 pt-1 text-neutral-400">
                {entry.period}
              </span>
              <div>
                <h3 className="text-xl font-medium tracking-tight text-ink">
                  {entry.role}
                </h3>
                <p className="mt-1 text-sm text-neutral-400">{entry.org}</p>
                {entry.points ? (
                  <ul className="mt-4 max-w-xl space-y-2.5">
                    {entry.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-neutral-400"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400"
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