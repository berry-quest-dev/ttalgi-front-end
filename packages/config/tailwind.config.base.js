import path from "path";
const { baseColors, semanticColors } = require("../designSystem/colors");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    path.join(__dirname, "../../apps/**/src/**/*.{js,ts,jsx,tsx}"),
    path.join(__dirname, "../../packages/ui/src/**/*.{ts,tsx,mdx}"),
    path.join(__dirname, "../../packages/designSystem/**/*.{ts,tsx,mdx}"),
  ],
  theme: {
    extend: {
      fontSize: {
        "body-12-b": ["12px", { lineHeight: "130%", letterSpacing: "-0.03em", fontWeight: "700" }],
        "body-14-r": ["14px", { lineHeight: "130%", letterSpacing: "-0.03em", fontWeight: "400" }],
        "body-15-m": ["15px", { lineHeight: "130%", letterSpacing: "-0.03em", fontWeight: "500" }],
        "body-16-m": ["16px", { lineHeight: "130%", letterSpacing: "-0.03em", fontWeight: "500" }],
        "title-16-sb": [
          "16px",
          { lineHeight: "130%", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "title-18-r": ["18px", { lineHeight: "130%", letterSpacing: "-0.03em", fontWeight: "400" }],
        "title-18-sb": [
          "18px",
          { lineHeight: "130%", letterSpacing: "-0.03em", fontWeight: "600" },
        ],
        "headline-20-b": [
          "20px",
          { lineHeight: "130%", letterSpacing: "0.03em", fontWeight: "700" },
        ],
      },

      colors: {
        ...baseColors,
        ...semanticColors,
      },
    },
  },

  safelist: [
    {
      pattern: /^text-(default|title|muted|on)$/,
    },
    {
      pattern: /^text-(headline|title|body)-\d{2}-[brmsb]+$/,
    },
  ],

  plugins: [],
};

export default config;
