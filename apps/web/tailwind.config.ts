import baseConfig from "../../packages/config/tailwind.config.base.js";

export default {
  ...baseConfig,
  content: ["./src/**/*.{js,ts,jsx,tsx}", "../../packages/ui/src/**/*.{js,ts,jsx,tsx}"],
};
