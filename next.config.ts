import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [425, 800, 1280, 1600],
    minimumCacheTTL: 600,
  },
};

export default nextConfig;
