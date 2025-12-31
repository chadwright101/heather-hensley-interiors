import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [425, 800, 1280, 1600],
    minimumCacheTTL: 600,
    qualities: [60, 75],
  },
};

export default nextConfig;
