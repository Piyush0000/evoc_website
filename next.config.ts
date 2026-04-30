import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/evoc-labss' : '',
  assetPrefix: isProd ? '/evoc-labss/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'd2z53scj8veve3.cloudfront.net' },
      { protocol: 'https', hostname: 'd1311wbk6unapo.cloudfront.net' },
      { protocol: 'https', hostname: 'media3.giphy.com' }
    ],
  },
};

export default nextConfig;
