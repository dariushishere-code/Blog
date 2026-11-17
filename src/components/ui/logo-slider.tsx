import { useState, type CSSProperties, type ReactNode } from "react";

type LogoSliderProps = {
  logos: ReactNode[];
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  label?: string;
};

export function LogoSlider({
  logos,
  speed = 38,
  direction = "left",
  pauseOnHover = false,
  className = "",
  label = "Scrolling items",
}: LogoSliderProps) {
  const [paused, setPaused] = useState(false);

  if (logos.length === 0) return null;

  return (
    <div
      className={`logo-slider ${className}`}
      data-paused={paused}
      data-pause-on-hover={pauseOnHover}
    >
      <div
        role="region"
        aria-label={label}
        className="relative"
        style={{ "--logo-slider-duration": `${speed}s` } as CSSProperties}
      >
        <ul className="logo-slider__track" data-direction={direction}>
          {[false, true].map((isDuplicate) => (
            <li
              key={isDuplicate ? "duplicate" : "original"}
              className="logo-slider__group"
              aria-hidden={isDuplicate || undefined}
            >
              {logos.map((logo, index) => (
                <span key={index} className="shrink-0">
                  {logo}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end px-4 py-2 sm:px-6">
        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((isPaused) => !isPaused)}
          className="eyebrow text-muted transition-colors hover:text-ink focus-visible:text-ink"
        >
          {paused ? "Resume slider" : "Pause slider"}
        </button>
      </div>
    </div>
  );
}
