import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginTailwind from "eslint-plugin-tailwindcss";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintConfigTypeScript from "@typescript-eslint/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const isNextProject = process.env.PROJECT_TYPE === "next";

export default [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
  },

  eslintPluginReact.configs.recommended,
  eslintConfigPrettier,
  eslintConfigTypeScript,
  eslintPluginTailwind.configs.recommended,
  ...(isNextProject ? compat.extends("next/core-web-vitals", "next/typescript") : []),

  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": ["error", { endOfLine: "lf" }],
      "@typescript-eslint/no-unused-vars": ["warn"],
      "tailwindcss/no-custom-classname": "off",
    },
  },
];
