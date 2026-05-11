#!/bin/bash
mkdir -p out

# Copiar arquivos
cp public/index.html out/index.html
cp public/logo.png out/logo.png

# Criar arquivo routes-manifest.json para satisfazer Vercel
cat > out/routes-manifest.json << 'MANIFEST'
{
  "version": 5,
  "pages404": true,
  "basePath": "",
  "redirects": [],
  "rewrites": [],
  "headers": [],
  "dataRoutes": []
}
MANIFEST

echo "Build complete"
