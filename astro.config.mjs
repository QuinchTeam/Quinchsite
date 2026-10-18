// @ts-check

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.quinchy.dev",
  output: "static",
  integrations: [sitemap()],
  // Fetch pages on link hover so client-side navigation swaps instantly.
  prefetch: { prefetchAll: true },
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    // Modern target so esbuild stops emitting legacy transforms/polyfills.
    build: { target: "es2022" },
    plugins: [tailwindcss()],
  },
});
