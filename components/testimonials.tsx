"use client";

import { testimonials } from "@/lib/content";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-10 pt-24 lg:pt-32">
      <SectionHeading
        index="06"
        eyebrow="Testimonials"
        title={
          <>
            Kind <span className="font-serif italic font-normal">words</span>
          </>
        }
      />

      <div className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <Reveal key={testimonial.name} delay={i * 0.08}>
            <figure className="flex h-full flex-col border-t border-ink pt-7">
              <blockquote className="flex-1 text-[15px] leading-relaxed text-neutral-600">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-7">
                <p className="text-sm font-medium text-ink">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-xs text-neutral-400">
                  {testimonial.role}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}