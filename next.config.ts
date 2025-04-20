import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    domains: ["robohash.org"],
  },
};

export default nextConfig;
