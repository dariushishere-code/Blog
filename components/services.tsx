"use client";

import { services } from "@/lib/content";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { ArrowUpRight } from "./icons";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-10 pt-24 lg:pt-32">
      <SectionHeading
        index="02"
        eyebrow="Services"
        title={
          <>
            What I <span className="font-serif italic font-normal">do</span>
          </>
        }
      />

      <div className="mt-10 border-t border-hairline">
        {services.map((service, i) => (
          <Reveal key={service.n} delay={i * 0.06}>
            <div className="group flex flex-col gap-4 border-b border-hairline py-10 sm:flex-row sm:items-center sm:gap-10 lg:py-12">
              <span className="eyebrow w-16 shrink-0 text-neutral-400">
                {service.n}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-neutral-400">
                  {service.desc}
                </p>
              </div>

              <div className="flex shrink-0 items-center justify-between gap-8 sm:flex-col sm:items-end sm:gap-0">
                <span className="font-serif text-[11px] italic text-neutral-400 sm:mb-4 sm:block">
                  {service.tags.join("  ·  ")}
                </span>
                <ArrowUpRight className="h-7 w-7 text-neutral-600 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}