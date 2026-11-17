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
      <div className="flex items-center gap-4 border-t border-hairline pt-4">
        <span className="eyebrow text-accent">{index}</span>
        <div className="h-px flex-1 bg-hairline" />
        <span className="eyebrow text-muted">{index} / 08</span>
      </div>
      <p className="eyebrow mt-6 text-muted">{eyebrow}</p>
      <h2 className="display-type mt-3 text-[clamp(2rem,4.7vw,4.2rem)] leading-[1.05] tracking-[-0.035em] text-ink">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}