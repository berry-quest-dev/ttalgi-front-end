import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
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
          find: "@ui",
          replacement: path.resolve(__dirname, "../../../packages/ui/src"),
        },
      ],
    };
    return config;
  },
};
export default config;
