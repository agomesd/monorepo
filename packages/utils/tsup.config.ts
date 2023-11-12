import { defineConfig } from "tsup";

export default defineConfig({
  dts: true,
  entry: ["src/index.ts"],
  splitting: true,
  sourcemap: true,
  clean: true,
  minify: true,
  treeshake: true,
  outDir: "dist",
  format: ["esm", "cjs"],
});
