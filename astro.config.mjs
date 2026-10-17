// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // The GitHub Pages address.
  site: "https://marcornv.github.io",

  // The repository is named "portfolio-website", so GitHub Pages serves the site
  // from that sub-folder. If the repository is renamed to "marcornv.github.io",
  // remove this line.
  base: "/portfolio-website",
});
