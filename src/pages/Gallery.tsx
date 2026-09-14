import { Link } from "react-router";
import { gallery, profile } from "@/lib/content";

export default function Gallery() {
  return (
    <main className="min-h-screen px-5 py-10 sm:px-8 lg:px-14 lg:py-16 xl:px-20">
      <header className="max-w-3xl">
        <nav>
          <Link
            to="/"
            className="eyebrow text-neutral-400 transition-colors hover:text-ink"
          >
            ← Back to portfolio
          </Link>
        </nav>
        <h1 className="mt-10 text-4xl font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl">
          Photo <span className="font-serif italic font-normal">archive</span>
        </h1>
        <p className="eyebrow mt-4 text-neutral-500">{gallery.length} frames</p>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-neutral-400">
          A personal photo archive by {profile.name} — frames from the years,
          in slow orbit. Photography is part of how I see sharp interfaces.
        </p>
      </header>

      <div className="mt-14 columns-1 gap-5 sm:columns-2 md:gap-6 lg:columns-3 xl:columns-4">
        {gallery.map((image) => (
          <figure
            key={`${image.alt}-${image.src}`}
            className="mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-hairline bg-neutral-800/60 md:mb-6"
          >
            <img
              src={image.src}
              alt={image.alt}
              width={700}
              height={1000}
              loading="lazy"
              className="h-auto w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
          </figure>
        ))}
      </div>
    </main>
  );
}