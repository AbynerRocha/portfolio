import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "10.0.2.2",
      },
      {
        protocol: "https",
        hostname: "abynerrocha.vercel.app",
      }
    ],
  },
};

export default nextConfig;
