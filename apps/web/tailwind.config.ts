import baseConfig from "../../packages/config/tailwind.config.base.ts";

export default {
  ...baseConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
};