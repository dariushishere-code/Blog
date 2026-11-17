import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  depth: number;
  phase: number;
  size: number;
};

const INITIAL_STARS: Star[] = Array.from({ length: 92 }, (_, index) => ({
  x: ((index * 127.1) % 997) / 997,
  y: ((index * 311.7) % 991) / 991,
  depth: 0.35 + ((index * 17) % 65) / 100,
  phase: (index * 2.399) % (Math.PI * 2),
  size: index % 11 === 0 ? 2 : 1,
}));

function hash(x: number, y: number) {
  const value = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return value - Math.floor(value);
}

export default function HalftoneNebula() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({ x: -1, y: -1 });
  const starsRef = useRef<Star[]>(INITIAL_STARS);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let lastFrame = 0;
    let startTime = performance.now();

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      startTime = performance.now();
      draw(startTime);
    };

    const draw = (now: number) => {
      if (!width || !height) return;

      const time = reducedMotion ? 0 : (now - startTime) / 1000;
      const pointer = pointerRef.current;
      const pointerX = pointer.x * width;
      const pointerY = pointer.y * height;
      const parallaxX = pointer.x < 0 ? 0 : (pointer.x - 0.5) * 24;
      const parallaxY = pointer.y < 0 ? 0 : (pointer.y - 0.5) * 18;

      context.clearRect(0, 0, width, height);

      const atmosphere = context.createRadialGradient(
        width * 0.43 + parallaxX * 0.28,
        height * 0.48 + parallaxY * 0.28,
        0,
        width * 0.43,
        height * 0.48,
        Math.max(width, height) * 0.76
      );
      atmosphere.addColorStop(0, "rgba(105, 13, 30, 0.24)");
      atmosphere.addColorStop(0.52, "rgba(62, 9, 21, 0.13)");
      atmosphere.addColorStop(1, "rgba(7, 7, 10, 0)");
      context.fillStyle = atmosphere;
      context.fillRect(0, 0, width, height);

      const cell = Math.max(7, Math.min(10, width / 150));
      const columns = Math.ceil(width / cell);
      const rows = Math.ceil(height / cell);
      const planetX = width * 0.78 + parallaxX * 1.45;
      const planetY = height * 0.38 + parallaxY * 1.45;
      const planetRadius = Math.min(width * 0.21, height * 0.27, 210);

      for (let row = 0; row < rows; row += 1) {
        const y = (row + 0.5) * cell;
        const ny = y / height;
        for (let column = 0; column < columns; column += 1) {
          const x = (column + 0.5) * cell;
          const nx = x / width;

          const plumeA =
            Math.exp(-(((nx - 0.27) / 0.3) ** 2 + ((ny - 0.42) / 0.25) ** 2) * 2.2);
          const plumeB =
            Math.exp(-(((nx - 0.61) / 0.27) ** 2 + ((ny - 0.67) / 0.19) ** 2) * 2.5);
          const turbulence =
            Math.sin(nx * 18 + time * 0.34 + Math.sin(ny * 14)) *
              Math.cos(ny * 13 - time * 0.2) *
              0.12 +
            (hash(column, row) - 0.5) * 0.17;
          const pointerGlow =
            pointer.x < 0
              ? 0
              : Math.exp(
                  -(((x - pointerX) / (width * 0.22)) ** 2 +
                    ((y - pointerY) / (height * 0.26)) ** 2) *
                    2
                ) * 0.32;
          const nebula = Math.max(
            0,
            Math.min(1, (plumeA * 0.68 + plumeB * 0.45 + turbulence + pointerGlow) * 1.2)
          );
          const dx = (x - planetX) / planetRadius;
          const dy = (y - planetY) / planetRadius;
          const planet = dx * dx + dy * dy < 1;
          const planetShade = planet ? Math.max(0, 1 - (dx * 0.58 + dy * 0.35 + 0.5)) : 0;
          const intensity = Math.max(nebula, planetShade * 0.88);

          if (intensity < 0.12) continue;

          const pulse = reducedMotion ? 0 : Math.sin(time * 1.1 + column * 0.14 + row * 0.09) * 0.035;
          const radius = cell * (0.075 + Math.min(0.29, intensity * 0.26 + pulse));
          const alpha = Math.min(0.72, 0.1 + intensity * 0.52);
          context.fillStyle = planet
            ? `rgba(235, ${Math.round(30 + planetShade * 22)}, ${Math.round(55 + planetShade * 20)}, ${alpha})`
            : `rgba(227, ${Math.round(30 + intensity * 15)}, ${Math.round(47 + intensity * 16)}, ${alpha})`;
          context.beginPath();
          context.arc(x, y, radius, 0, Math.PI * 2);
          context.fill();
        }
      }

      for (const star of starsRef.current) {
        const depth = 0.35 + star.depth;
        const x =
          (((star.x * width + parallaxX * depth) % width) + width) % width;
        const y =
          (((star.y * height + parallaxY * depth) % height) + height) % height;
        const flicker = reducedMotion
          ? 0.72
          : 0.48 + (Math.sin(time * 1.8 + star.phase) + 1) * 0.24;
        const size = star.size * (0.7 + star.depth * 0.55);
        context.fillStyle = `rgba(255, ${Math.round(207 + flicker * 42)}, ${Math.round(201 + flicker * 48)}, ${flicker})`;
        context.fillRect(Math.round(x), Math.round(y), size, size);
        if (star.size > 1 && flicker > 0.78) {
          context.fillRect(Math.round(x - size), Math.round(y + size / 2), size * 3, 1);
          context.fillRect(Math.round(x + size / 2), Math.round(y - size), 1, size * 3);
        }
      }
    };

    const animate = (now: number) => {
      if (document.hidden) {
        frame = window.requestAnimationFrame(animate);
        return;
      }
      if (now - lastFrame >= 1000 / 24) {
        draw(now);
        lastFrame = now;
      }
      if (!reducedMotion) frame = window.requestAnimationFrame(animate);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerRef.current = {
        x: event.clientX / Math.max(1, width),
        y: event.clientY / Math.max(1, height),
      };
      if (reducedMotion) draw(performance.now());
    };

    const onPointerLeave = () => {
      pointerRef.current = { x: -1, y: -1 };
      if (reducedMotion) draw(performance.now());
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (
        target instanceof Element &&
        target.closest("a, button, input, textarea, select, [role='button']")
      ) {
        return;
      }

      starsRef.current = [
        ...starsRef.current.slice(-35),
        {
          x: event.clientX / Math.max(1, width),
          y: event.clientY / Math.max(1, height),
          depth: 1,
          phase: 0,
          size: 2,
        },
      ];
      if (reducedMotion) draw(performance.now());
    };

    const scene = canvas.parentElement;
    resize();
    window.addEventListener("resize", resize);
    scene?.addEventListener("pointermove", onPointerMove);
    scene?.addEventListener("pointerleave", onPointerLeave);
    scene?.addEventListener("click", onClick);
    if (!reducedMotion) frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      scene?.removeEventListener("pointermove", onPointerMove);
      scene?.removeEventListener("pointerleave", onPointerLeave);
      scene?.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="halftone-nebula" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
