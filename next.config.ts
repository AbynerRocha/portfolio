import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', '10.0.2.2', 'abynerrocha.vercel.app'],
  },
};

export default nextConfig;
