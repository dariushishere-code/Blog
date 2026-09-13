"use client";

import { focus, languages, nowLine, toolbox } from "@/lib/content";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="scroll-mt-10 pt-24 lg:pt-32"
    >
      <SectionHeading
        index="06"
        eyebrow="Capabilities"
        title={
          <>
            Focus &{" "}
            <span className="font-serif italic font-normal">toolbox</span>
          </>
        }
        description={nowLine}
      />

      <div className="mt-12 grid gap-x-12 gap-y-12 border-t border-hairline pb-2 pt-10 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal className="min-w-0">
          <div>
            <h3 className="eyebrow text-ink">Focus areas</h3>
            <ul className="mt-5 space-y-3.5">
              {focus.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[15px] text-neutral-400"
                >
                  <span className="h-1 w-4 shrink-0 bg-ink" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="min-w-0">
          <div>
            <h3 className="eyebrow text-ink">Toolbox</h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {toolbox.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-hairline px-3.5 py-1.5 text-[13px] text-neutral-400 transition-colors duration-300 hover:border-ink hover:text-ink"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.16} className="min-w-0">
          <div>
            <h3 className="eyebrow text-ink">Languages</h3>
            <ul className="mt-5 space-y-3">
              {languages.map((language) => (
                <li
                  key={language.name}
                  className="flex items-baseline justify-between border-b border-hairline pb-3 text-[15px]"
                >
                  <span className="font-medium text-ink">{language.name}</span>
                  <span className="text-neutral-400">{language.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}