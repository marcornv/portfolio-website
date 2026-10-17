// Prefixes internal links with the site's base path, so links keep working
// if the site is ever served from a sub-folder (see `base` in astro.config.mjs).
export function withBase(href: string): string {
  if (/^(https?:|mailto:)/.test(href)) return href;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${href.startsWith("/") ? href : `/${href}`}`;
}
