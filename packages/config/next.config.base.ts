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


// import withTM from "next-transpile-modules";

// const nextConfig = withTM(["@packages/ui"])({
//   reactStrictMode: true,
//   webpack: (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       react: require.resolve("react"),
//       "react-dom": require.resolve("react-dom"),
//       "react/jsx-runtime": require.resolve("react/jsx-runtime"),
//       "react/jsx-dev-runtime": require.resolve("react/jsx-dev-runtime"),
//       react: path.resolve(__dirname, "../../node_modules/react"),
//       "react-dom": path.resolve(__dirname, "../../node_modules/react-dom"),
//       "react/jsx-runtime": path.resolve(__dirname, "../../node_modules/react/jsx-runtime"),
//       "react/jsx-dev-runtime": path.resolve(__dirname, "../../node_modules/react/jsx-dev-runtime"),
//     };
//     return config;
//   },
// });

// export default nextConfig;