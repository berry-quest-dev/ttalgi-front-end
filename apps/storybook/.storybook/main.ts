import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../../../packages/designSystem/**/*.stories.@(js|jsx|ts|tsx)",
    "../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../../web/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../../admin/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  viteFinal: (config) => {
    config.resolve = {
      ...(config.resolve || {}),
      alias: [
        {
          find: "@packages/ui",
          replacement: path.resolve(__dirname, "../../../packages/ui/src"),
        },
        {
          find: "@packages/styles",
          replacement: path.resolve(__dirname, "../../../packages/styles"),
        },
      ],
    };
    return config;
  },
};
export default config;
