import eslintPluginReact from "eslint-plugin-react";
import eslintPluginTailwind from "eslint-plugin-tailwindcss";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginTypeScript from "@typescript-eslint/eslint-plugin";

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
  eslintPluginTypeScript.configs.recommended,
  eslintPluginTailwind.configs.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": ["error", { endOfLine: "lf" }],
      "@typescript-eslint/no-unused-vars": ["warn"],
      "tailwindcss/no-custom-classname": "off",
    },
  },
];
