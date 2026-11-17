

import { services } from "@/lib/content";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { ArrowUpRight } from "./icons";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-10 pt-24 lg:pt-32">
      <SectionHeading
        index="03"
        eyebrow="Services"
        title={
          <>
            What I <span className="editorial-serif italic text-accent">do</span>
          </>
        }
      />

      <div className="mt-10 border-t border-hairline">
        {services.map((service, i) => (
          <Reveal key={service.n} delay={i * 0.06}>
            <div className="group grid gap-4 border-b border-hairline py-7 transition-colors duration-300 hover:bg-panel/60 sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:gap-7 lg:py-9">
              <span className="eyebrow pt-1 text-accent">{service.n}</span>

              <div className="min-w-0">
                <h3 className="text-lg font-medium tracking-tight text-ink transition-colors group-hover:text-accent sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-2xl text-[14px] leading-7 text-muted">
                  {service.desc}
                </p>
              </div>

              <div className="flex items-center justify-between gap-6 sm:flex-col sm:items-end sm:gap-3">
                <span className="eyebrow text-muted">
                  {service.tags.join("  ·  ")}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}