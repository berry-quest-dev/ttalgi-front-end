/** @type {import('next').NextConfig} */
const nextConfig = {
  appDir: true,
  transpilePackages: ["@packages/styles", "@packages/ui", "@packages/image"],
  experimental: {
    externalDir: true,
  },
  images: {
    domains: ["localhost"],
  },
};

export default nextConfig;
