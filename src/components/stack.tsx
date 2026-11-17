

import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { stack } from "@/lib/content";
import { LogoSlider } from "./ui/logo-slider";

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-10 pt-24 lg:pt-32">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <SectionHeading
          index="04"
          eyebrow="Stack & languages"
          title={
            <>
              What I <span className="editorial-serif italic text-accent">work with</span>
            </>
          }
        />
        <p className="eyebrow mb-1 text-muted">A few of my everyday tools</p>
      </div>

      <Reveal className="mt-8">
        <LogoSlider
          logos={stack.map((technology) => (
            <span key={technology} className="logo-slider-wordmark">
              {technology}
            </span>
          ))}
          speed={38}
          pauseOnHover
          className="-mx-5 w-[calc(100%+2.5rem)] sm:mx-0 sm:w-full"
          label="Technologies I work with"
        />
      </Reveal>
    </section>
  );
}