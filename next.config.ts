import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'd2z53scj8veve3.cloudfront.net' },
      { protocol: 'https', hostname: 'd1311wbk6unapo.cloudfront.net' },
      { protocol: 'https', hostname: 'media3.giphy.com' }
    ],
  },
};

export default nextConfig;
