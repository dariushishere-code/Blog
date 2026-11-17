/**
 * Minimal className combiner — joins truthy values with a space.
 * Drop-in replacement for `clsx`/`tailwind-merge` (no extra dependencies).
 */
export function cn(...classes: Array<string | undefined | null | false>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Reusable attributes for links that intentionally open in a new tab.
 * Keeps the external-link behavior explicit and consistent across the portfolio.
 */
export function externalLinkProps(label?: string) {
  return {
    target: "_blank" as const,
    rel: "noopener noreferrer" as const,
    ...(label ? { "aria-label": `${label} (opens in a new tab)` } : {}),
  };
}