import path from "path";
import type { NextConfig } from "next";
import withTM from "next-transpile-modules";

const withTranspile = withTM(["@packages/ui"]);

const baseConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@packages/ui": path.resolve(__dirname, "../../packages/ui/src"),
      "@packages/api": path.resolve(__dirname, "../../packages/api"),
      "@packages/utils": path.resolve(__dirname, "../../packages/utils"),
    };

    return config;
  },
};

export default withTranspile(baseConfig);
