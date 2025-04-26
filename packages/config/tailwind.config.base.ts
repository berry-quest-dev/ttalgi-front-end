import path from "path";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    path.join(__dirname, "../../apps/**/src/**/*.{js,ts,jsx,tsx}"),
    path.join(__dirname, "../../packages/ui/src/**/*.{ts,tsx,mdx}"),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
