import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost', port: '5000' },
      { protocol: 'http', hostname: '127.0.0.1', port: '5000' },
      { protocol: 'https', hostname: 'api.evoclabs.com' },
      { protocol: 'https', hostname: '*.r2.cloudflarestorage.com' },
      { protocol: 'https', hostname: '*.r2.dev' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'd2z53scj8veve3.cloudfront.net' },
      { protocol: 'https', hostname: 'd1311wbk6unapo.cloudfront.net' },
      { protocol: 'https', hostname: 'media3.giphy.com' }
    ],
  },
};

export default nextConfig;
