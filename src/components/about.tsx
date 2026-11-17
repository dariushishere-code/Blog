import { languages, profile } from "@/lib/content";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-10 mt-10 pt-16 lg:pt-20">
      <SectionHeading
        index="01"
        eyebrow="A little about me"
        title={
          <>
            Curious by nature.
            <br />
            <span className="editorial-serif italic text-accent">
              Thoughtful by design.
            </span>
          </>
        }
      />

      <Reveal className="mt-8 grid gap-8 border-b border-hairline pb-10 sm:pb-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
        <p className="max-w-3xl text-[15px] leading-7 text-muted sm:text-base">
          {profile.about}
        </p>
        <ul
          aria-label="Spoken languages"
          className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end"
        >
          {languages.map((language) => (
            <li
              key={language.name}
              className="border border-hairline px-3 py-1.5 text-[12px] text-muted"
            >
              <span className="font-medium text-ink">{language.name}</span>
              <span aria-hidden="true"> · </span>
              {language.level}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
