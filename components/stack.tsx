"use client";

import { stack } from "@/lib/content";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-10 pt-24 lg:pt-32">
      <SectionHeading
        index="03"
        eyebrow="Stack"
        title={
          <>
            Tools I <span className="font-serif italic font-normal">use</span>
          </>
        }
      />

      <div className="mt-10 flex flex-wrap gap-3">
        {stack.map((tool, i) => (
          <Reveal key={tool} delay={i * 0.05}>
            <span className="inline-flex items-center rounded-full border border-hairline px-5 py-2.5 text-sm text-neutral-600 transition-colors duration-300 hover:border-ink hover:text-ink">
              {tool}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}