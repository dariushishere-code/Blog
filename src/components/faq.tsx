

import { useState } from "react";
import { faqs } from "@/lib/content";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-10 pt-24 lg:pt-32">
      <SectionHeading
        index="07"
        eyebrow="FAQ"
        title={
          <>
            Good <span className="editorial-serif italic text-accent">questions</span>
          </>
        }
        description="Six quick answers to the things people usually ask me — work, bugs, photography and what “sharp and forever” actually means."
      />

      <div className="mt-10 border-t border-hairline">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={faq.q} delay={i * 0.05}>
              <div className="border-b border-hairline">
                <button
                  type="button"
                  id={`faq-trigger-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors duration-300 hover:text-accent"
                >
                  <span className="text-base font-medium tracking-tight text-ink sm:text-lg">
                    {faq.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 shrink-0 items-center justify-center border border-hairline text-lg text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-45 border-accent text-accent" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  hidden={!isOpen}
                >
                  <p className="max-w-2xl pb-6 pr-10 text-[14px] leading-7 text-muted">
                    {faq.a}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}