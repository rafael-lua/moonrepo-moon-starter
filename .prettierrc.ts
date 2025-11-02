import type { Config } from "prettier"

const config: Config = {
  // Basic formatting options
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: false,
  quoteProps: "as-needed",

  // JSX specific options
  jsxSingleQuote: false,

  // Trailing commas
  trailingComma: "es5",

  // Bracket spacing
  bracketSpacing: true,
  bracketSameLine: false,

  // Arrow function parentheses
  arrowParens: "avoid",

  // End of line
  endOfLine: "lf",

  // Embedded language formatting
  embeddedLanguageFormatting: "auto",

  plugins: ["@prettier/plugin-oxc"],
}

export default config
