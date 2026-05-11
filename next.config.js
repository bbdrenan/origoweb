/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  // Aumentar timeout para build estático
  staticPageGenerationTimeout: 300,
};

module.exports = nextConfig;
