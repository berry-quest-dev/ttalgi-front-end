/** @type {import('next').NextConfig} */
const nextConfig = {
  appDir: true,
  transpilePackages: [
    "@packages/styles",
    "@packages/ui",
    "@packages/icon",
    "@packages/image",
    "@packages/d-system",
  ],
  experimental: {
    externalDir: true,
  },
  images: {
    domains: ["localhost"],
  },
};

export default nextConfig;
