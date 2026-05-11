/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
    // Ignorar erros de TypeScript em build
    ignoreBuildErrors: false,
  },
  // Aumentar timeout para build estático
  staticPageGenerationTimeout: 300,
  // Configurar tratamento de erros
  onError: (err) => {
    console.log('Build error:', err);
  },
  // Desabilitar pré-renderização de páginas especiais
  experimental: {
    optimizePackageImports: ['lucide-react'],
    // Tentar desabilitar pré-renderização problemática
    isrMemoryCacheSize: 0,
  },
};

module.exports = nextConfig;
