

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
        index="06"
        eyebrow="Education"
        title={
          <>
            Continuous{" "}
            <span className="editorial-serif italic text-accent">learning</span>
          </>
        }
        description="Formal and self-directed — everything that shapes how I build software."
      />

      <div className="mt-10 border-t border-hairline">
        {education.map((entry, i) => (
          <Reveal key={entry.title} delay={i * 0.06}>
            <div className="grid grid-cols-[5.5rem_1fr] items-baseline gap-x-5 border-b border-hairline py-6 transition-colors duration-300 hover:bg-panel/60 sm:grid-cols-[12rem_1fr] sm:gap-x-8">
              <span className="eyebrow pt-1 text-muted">{entry.period}</span>
              <div>
                <h3 className="text-base font-medium tracking-tight text-ink sm:text-lg">
                  {entry.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-muted">
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