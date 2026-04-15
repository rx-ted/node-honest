import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    sourcemap: false,
    bundle: true,
    splitting: false,
    treeshake: true,
    external: ["reflect-metadata", "hono"]

});