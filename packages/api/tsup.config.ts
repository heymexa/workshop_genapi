import { defineConfig } from "tsup";

export default defineConfig((options) => ({
    entry: ["src/index.ts"],
    outDir: "dist",
    format: ["esm"],
    dts: true,
    minify: !options.watch,
    splitting: true,
    treeshake: true,
    external: ["@tanstack/react-query"],
}));