import { useRef } from "react";
import { works } from "@/lib/content";
import { externalLinkProps } from "@/lib/utils";
import SectionHeading from "./section-heading";
import { ArrowRight } from "./icons";

function ProjectPreview({
  variant,
}: {
  variant: "tower" | "ledger" | "market" | "terminal";
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 560 340"
      className="h-full w-full"
    >
      <rect width="560" height="340" fill="#0c0c12" />
      <rect x="26" y="24" width="508" height="292" fill="#12121a" stroke="#2c2c36" />
      <path d="M26 62h508" stroke="#2c2c36" />
      <circle cx="46" cy="43" r="4" fill="#4a4a56" />
      <circle cx="60" cy="43" r="4" fill="#4a4a56" />
      <circle cx="74" cy="43" r="4" fill="#4a4a56" />
      {variant === "ledger" ? (
        <g>
          <path d="M50 88h82v202H50z" fill="#1a1a22" />
          <path d="M70 108h42M70 128h30M70 166h42M70 186h34M70 224h42M70 244h25" stroke="#6e6a64" strokeWidth="5" />
          <path d="M154 90h344" stroke="#2c2c36" />
          <path d="M154 115h186M154 139h130M154 163h210M154 187h154" stroke="#6e6a64" strokeWidth="6" />
          <path d="M154 238h44v42h-44zm58-20h44v62h-44zm58-36h44v98h-44zm58 15h44v83h-44zm58-48h44v131h-44zm58 28h44v103h-44z" fill="#ff4d5a" opacity=".82" />
          <path d="M154 291h344" stroke="#2c2c36" />
        </g>
      ) : null}
      {variant === "market" ? (
        <g>
          <path d="M50 88h100v202H50z" fill="#1a1a22" />
          <path d="M68 108h64M68 128h48M68 156h64M68 176h40M68 204h64M68 224h50" stroke="#6e6a64" strokeWidth="5" />
          <rect x="172" y="88" width="312" height="112" fill="#1e1e28" />
          <circle cx="403" cy="136" r="35" fill="#ff4d5a" opacity=".84" />
          <path d="M193 172 273 111l55 43 41-29 85 47" fill="none" stroke="#8e8a84" strokeWidth="3" />
          <path d="M172 222h184v68H172z" fill="#1a1a22" />
          <path d="M372 222h112v68H372z" fill="#1a1a22" />
          <path d="M190 240h94M190 258h72M390 240h72M390 258h49" stroke="#6e6a64" strokeWidth="6" />
        </g>
      ) : null}
      {variant === "terminal" ? (
        <g>
          <path d="M50 88h100v202H50z" fill="#1a1a22" />
          <path d="M67 108h64M67 129h49M67 160h64M67 181h42M67 212h64M67 233h52M67 264h64" stroke="#6e6a64" strokeWidth="5" />
          <path d="M174 100h178M174 121h262M194 145h232M194 166h186M174 190h239M194 212h205M194 234h252M174 256h167M194 278h211" stroke="#8e8a84" strokeWidth="5" />
          <path d="M174 100h31M194 145h38M194 212h31M174 256h45" stroke="#ff4d5a" strokeWidth="5" />
        </g>
      ) : null}
      {variant === "tower" ? (
        <g>
          <path d="M50 88h100v202H50z" fill="#1a1a22" />
          <path d="M68 108h64M68 130h45M68 162h64M68 184h53M68 216h64M68 238h42" stroke="#6e6a64" strokeWidth="5" />
          <rect x="172" y="88" width="312" height="116" fill="#1e1e28" />
          <path d="M172 204h312" stroke="#2c2c36" />
          <circle cx="258" cy="145" r="37" fill="#ff4d5a" opacity=".8" />
          <circle cx="258" cy="133" r="13" fill="#f4f0e8" />
          <path d="M234 171c3-17 13-25 24-25s21 8 24 25" fill="#f4f0e8" />
          <path d="M184 226h102M184 247h76M184 269h126" stroke="#6e6a64" strokeWidth="6" />
          <rect x="328" y="220" width="156" height="70" fill="#1a1a22" />
          <path d="M345 240h119M345 260h88" stroke="#6e6a64" strokeWidth="6" />
        </g>
      ) : null}
    </svg>
  );
}

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
        index="02"
        eyebrow="Selected Work"
        title={
          <>
            Selected <span className="editorial-serif italic text-accent">work</span>
          </>
        }
        description="A selection of interfaces and digital products, shaped with care from the first line to the final detail."
      />

      <div className="mt-10 flex items-end justify-between gap-6">
        <p className="text-[13px] text-muted">
          <span className="font-mono text-lg text-ink">{String(works.length).padStart(2, "0")}</span>
          <span className="ml-3">projects · scroll or use the arrows</span>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => scrollTrack(-1)}
            aria-label="Scroll projects left"
            className="flex h-10 w-10 items-center justify-center border border-hairline text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-[#07070c]"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollTrack(1)}
            aria-label="Scroll projects right"
            className="flex h-10 w-10 items-center justify-center border border-hairline text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-[#07070c]"
          >
            →
          </button>
        </div>
      </div>

      {/* Horizontal scroll rail — cards start slightly right of the section edge */}
      <div
        ref={trackRef}
        className="no-scrollbar mt-7 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 pl-1 pr-5 sm:gap-7"
      >
        {works.map((work, i) => (
          <article
            key={work.title}
            className="group w-[84vw] shrink-0 snap-start sm:w-[380px] lg:w-[min(39vw,460px)]"
          >
            <a
              href={work.url}
              {...externalLinkProps(`${work.title} project`)}
              className="block"
              aria-label={`${work.title} — open project`}
            >
              <div className="relative aspect-[1.65] w-full overflow-hidden border border-hairline bg-panel transition-transform duration-300 group-hover:-translate-y-1">
                <ProjectPreview
                  variant={work.artwork ?? (i % 3 === 0 ? "tower" : i % 3 === 1 ? "terminal" : "market")}
                />
                <span className="eyebrow absolute left-3 top-3 bg-paper/85 px-2 py-1 text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="eyebrow absolute bottom-3 right-3 bg-paper/85 px-2 py-1 text-ink">
                  {work.category}
                </span>
              </div>
            </a>

            <div className="mt-3">
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <h3 className="truncate text-[16px] font-medium tracking-tight text-ink sm:text-lg">
                  {work.title}
                </h3>
                <span className="eyebrow shrink-0 text-muted">
                  {work.year}
                </span>
              </div>
              <p className="mt-1.5 line-clamp-2 text-[13px] leading-6 text-muted">
                {work.description}
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-hairline px-2 py-1 text-[10px] tracking-wide text-muted transition-colors group-hover:border-accent/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink underline-offset-4 transition-colors group-hover:text-accent">
                View project
                <ArrowRight className="h-3.5 w-3.5 text-accent transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}