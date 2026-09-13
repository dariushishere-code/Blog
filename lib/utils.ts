/**
 * Minimal className combiner — joins truthy values with a space.
 * Drop-in replacement for `clsx`/`tailwind-merge` (no extra dependencies).
 */
export function cn(...classes: Array<string | undefined | null | false>): string {
  return classes.filter(Boolean).join(" ");
}