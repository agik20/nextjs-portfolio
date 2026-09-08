import nextPlugin from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default tseslint.config(
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "eslint.config.mjs",
      "next-env.d.ts",
    ],
  },
  {
    ...reactPlugin.configs.flat["react-refresh"],
    ...reactPlugin.configs.flat.recommended,
    settings: { react: { version: "19.0" } },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    plugins: {
      "@next/next": nextPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/no-unknown-property": ["error", { ignore: ["attach", "args", "transparent"] }],
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    extends: [...tseslint.configs.recommended],
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  }
);
