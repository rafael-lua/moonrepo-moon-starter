import { defineConfig } from "vitest/config"
import tsconfigPaths from "vite-tsconfig-paths"

const coverageReporters = ["lcovonly", "json-summary"]

const isCi = process.env.CI === "true"
if (!isCi) {
  coverageReporters.push("html")
}

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    retry: isCi ? 2 : 0,
    environment: "node",
    reporters: ["verbose"],
    env: {
      STAGE: "test",
    },
    setupFiles: [
      // './test/setup.ts',
    ],
    include: [
      "./modules/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}",
      "./packages/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}",
    ],
    coverage: {
      exclude: [
        "**/*.d.ts",
        "**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}",
        "**/__mocks__/**.*",
      ],
      provider: "v8",
      reporter: coverageReporters,
    },
    restoreMocks: true,
    clearMocks: true,
    mockReset: true,
  },
})
