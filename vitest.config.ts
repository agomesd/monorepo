/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./packages/utils/src/setupTests",
    ...(process.env.CI && { minThreads: 4, maxThreads: 4 }),
  },
});
