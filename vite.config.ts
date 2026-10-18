// Vite+ toolchain config (lint/format only). Astro does not read this file;
// its Vite settings live in astro.config.mjs.
import { defineConfig } from "vite-plus";

const ignorePatterns = [
  "dist/**",
  ".astro/**",
  ".wrangler/**",
  ".claude/**",
  ".fallow/**",
];

export default defineConfig({
  lint: { ignorePatterns },
  fmt: { ignorePatterns, printWidth: 80 },
});
