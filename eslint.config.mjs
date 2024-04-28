import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import stylistic from '@stylistic/eslint-plugin'
import js from "@eslint/js";

export default createConfigForNuxt({
  ...js.configs.recommended,
  plugins: {
    '@stylistic': stylistic
  },
  rules: {
    '@stylistic/indent': ['error', 2],
    semi: "error",
    "prefer-const": "error"
  }
})