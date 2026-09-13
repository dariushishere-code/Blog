import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "dev.alirezaebrahimi.tech",
      },
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/user-attachments/**",
      },
    ],
  },
};

export default nextConfig;