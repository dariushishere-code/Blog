"use client";

import Image from "next/image";
import { works } from "@/lib/content";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

export default function Works() {
  return (
    <section id="work" className="scroll-mt-10">
      <SectionHeading
        index="01"
        eyebrow="Selected Work"
        title={
          <>
            Selected <span className="font-serif italic font-normal">works</span>
          </>
        }
        description="A curated selection of recent projects across branding, web design and visual identity."
      />

      <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:gap-6 xl:columns-3">
        {works.map((work, i) => (
          <Reveal
            key={work.title}
            delay={(i % 3) * 0.07}
            className="mb-5 break-inside-avoid lg:mb-6"
          >
            <article className="group">
              <div
                className={`relative w-full overflow-hidden bg-neutral-100 ${work.aspect}`}
              >
                <Image
                  src={work.src}
                  alt={work.alt}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-medium tracking-tight text-ink">
                  {work.title}
                </h3>
                <p className="eyebrow shrink-0 text-neutral-400">
                  {work.category}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}