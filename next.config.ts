import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable ESLint during builds; lint issues won't block builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
