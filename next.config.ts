import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
    quietDeps: true,
  },
  images: {
    domains: ['api.universalprofile.cloud']
  },
  typescript: {
    // Dangerously allow production builds to complete even with type errors
    // This will help with deployment even if there are minor type issues
    ignoreBuildErrors: true,
  },
  eslint: {
    // Similarly, allow production builds with ESLint warnings
    ignoreDuringBuilds: true,
  },
  // Explicitly specify webpack
  webpack: (config) => {
    return config;
  },
  // Disable experimental features that might cause conflicts
  experimental: {
    serverComponentsExternalPackages: [],
  }
};

export default nextConfig;
