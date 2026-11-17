import { Link } from "react-router";

export default function NotFound() {
  return (
    <main id="main" className="section-shell flex min-h-screen flex-col items-start justify-center gap-5">
      <p className="eyebrow text-muted">404 · Page not found</p>
      <h1 className="max-w-3xl text-[clamp(3rem,8vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.07em] text-ink">
        This page went{" "}
        <span className="editorial-serif italic text-accent">missing.</span>
      </h1>
      <Link
        to="/"
        className="mt-3 inline-flex min-h-11 items-center gap-2 border border-hairline px-4 text-sm font-medium text-ink transition-colors hover:border-accent hover:bg-accent hover:text-[#07070c]"
      >
        ← Back to the portfolio
      </Link>
    </main>
  );
}