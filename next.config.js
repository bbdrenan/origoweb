/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  staticPageGenerationTimeout: 300,
};

module.exports = nextConfig;
