import { useRef } from "react";
import { works } from "@/lib/content";
import SectionHeading from "./section-heading";
import { ArrowRight } from "./icons";

export default function Works() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollTrack = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.8;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

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
        description="A curated selection of real projects — front-end builds, full-stack apps, creative sites and design systems. Scroll sideways or use the arrows."
      />

      <div className="mt-10 flex items-end justify-between gap-6">
        <p className="text-sm text-neutral-400">
          {works.length} projects — drag, scroll or use the arrows
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => scrollTrack(-1)}
            aria-label="Scroll projects left"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollTrack(1)}
            aria-label="Scroll projects right"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
          >
            →
          </button>
        </div>
      </div>

      {/* Horizontal scroll rail — cards start slightly right of the section edge */}
      <div
        ref={trackRef}
        className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pl-1 pr-5 sm:pl-5 lg:pl-8 xl:pl-10"
      >
        {works.map((work, i) => (
          <article
            key={work.title}
            className="group w-[72vw] shrink-0 snap-start sm:w-[280px] lg:w-[320px]"
          >
            <a
              href={work.url}
              target="_blank"
              rel="noreferrer"
              className="block"
              aria-label={`${work.title} — open project`}
            >
              {/* Uniform 16/9 image box — object-cover keeps every card identical */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-hairline bg-panel">
                <img
                  src={work.src}
                  alt={work.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.06]"
                />
                {/* Hover overlay for impact */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* Index number */}
                <span className="absolute right-3 top-3 font-serif text-2xl font-normal italic text-white/70 drop-shadow">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </a>

            <div className="mt-3">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="truncate text-base font-medium tracking-tight text-ink">
                  {work.title}
                </h3>
                <span className="eyebrow shrink-0 text-neutral-500">
                  {work.year}
                </span>
              </div>
              <p className="mt-1.5 line-clamp-2 text-[13px] leading-snug text-neutral-400">
                {work.description}
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-hairline px-2.5 py-0.5 text-[10px] tracking-wide text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink underline-offset-4 transition-colors hover:underline">
                View project
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}