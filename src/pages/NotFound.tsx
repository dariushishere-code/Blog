import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-5 text-center">
      <p className="eyebrow text-neutral-400">404</p>
      <h1 className="max-w-xl text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl">
        This page went{" "}
        <span className="font-serif italic font-normal">missing</span>
      </h1>
      <Link
        to="/"
        className="text-sm font-medium text-neutral-400 underline-offset-4 transition-colors hover:text-ink hover:underline"
      >
        ← Back to the portfolio
      </Link>
    </main>
  );
}