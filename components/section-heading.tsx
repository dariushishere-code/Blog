import type { ReactNode } from "react";
import Reveal from "./reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <div className="flex items-center gap-5">
        <span className="eyebrow text-neutral-400">{index}</span>
        <div className="h-px flex-1 bg-hairline" />
      </div>
      <p className="eyebrow mt-7 text-ink">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-neutral-500">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}