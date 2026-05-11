# Guia de SEO: OrigoERP Web

## 🔍 SEO On-Page

### 1. Meta Tags

```typescript
// app/layout.tsx
export const metadata = {
  title: 'OrigoERP - Gestão de Vendas, Estoque e Financeiro',
  description: 'Plataforma completa de ERP para pequenas e médias empresas. Gerencie vendas, estoque, financeiro e notas fiscais em tempo real.',
  keywords: 'ERP, gestão, vendas, estoque, financeiro, NF-e, contabilidade',
  authors: [{ name: 'OrigoERP' }],
  creator: 'OrigoERP',
  publisher: 'OrigoERP',
  formatDetection: {
    email: false,
    telephone: false,
  },
};

export const openGraph = {
  type: 'website',
  url: 'https://www.origoerp.com.br',
  title: 'OrigoERP - Gestão Completa de Negócios',
  description: 'Plataforma de ERP para PMEs com sincronização mobile e web',
  images: [
    {
      url: 'https://www.origoerp.com.br/og-image.png',
      width: 1200,
      height: 630,
    },
  ],
};

export const twitter = {
  card: 'summary_large_image',
  title: 'OrigoERP - Gestão Completa de Negócios',
  description: 'Plataforma de ERP para PMEs',
  images: ['https://www.origoerp.com.br/twitter-image.png'],
};
```

### 2. Structured Data (Schema.org)

```typescript
// components/schema.tsx
export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'OrigoERP',
          url: 'https://www.origoerp.com.br',
          logo: 'https://www.origoerp.com.br/logo.png',
          description: 'Plataforma de ERP para pequenas e médias empresas',
          sameAs: [
            'https://www.facebook.com/origoerp',
            'https://www.instagram.com/origoerp',
            'https://www.linkedin.com/company/origoerp',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            telephone: '+55-11-9999-9999',
            email: 'support@origoerp.com.br',
          },
        }),
      }}
    />
  );
}

export function SoftwareApplicationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'OrigoERP',
          description: 'Plataforma de ERP para gestão de negócios',
          url: 'https://www.origoerp.com.br',
          applicationCategory: 'BusinessApplication',
          offers: {
            '@type': 'Offer',
            price: '99',
            priceCurrency: 'BRL',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '250',
          },
        }),
      }}
    />
  );
}
```

### 3. Sitemap

```xml
<!-- public/sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.origoerp.com.br</loc>
    <lastmod>2026-05-11</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.origoerp.com.br/dashboard</loc>
    <lastmod>2026-05-11</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.origoerp.com.br/vendas</loc>
    <lastmod>2026-05-11</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.origoerp.com.br/estoque</loc>
    <lastmod>2026-05-11</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.origoerp.com.br/financeiro</loc>
    <lastmod>2026-05-11</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 4. Robots.txt

```text
<!-- public/robots.txt -->
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api
Disallow: /*.json$
Crawl-delay: 1

Sitemap: https://www.origoerp.com.br/sitemap.xml
```

## 🔗 SEO Off-Page

### 1. Link Building

- Submeter em diretórios de software (Capterra, G2, Trustpilot)
- Criar conteúdo linkável (guias, estudos de caso)
- Parcerias com blogs de negócios
- Mencionar em redes sociais

### 2. Social Media

```typescript
// Compartilhamento em redes sociais
const shareURL = (platform: 'facebook' | 'twitter' | 'linkedin') => {
  const baseURL = 'https://www.origoerp.com.br';
  const title = 'OrigoERP - Gestão Completa de Negócios';
  
  const urls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${baseURL}`,
    twitter: `https://twitter.com/intent/tweet?url=${baseURL}&text=${title}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${baseURL}`,
  };
  
  return urls[platform];
};
```

## 📱 Mobile SEO

### 1. Responsive Design

```typescript
// ✅ Mobile-first approach
<meta name="viewport" content="width=device-width, initial-scale=1" />

// ✅ Tailwind breakpoints
<div className="text-base md:text-lg lg:text-xl">
  Responsive text
</div>
```

### 2. Mobile Performance

- LCP < 2.5s em mobile
- FID < 100ms
- CLS < 0.1
- Tap targets > 48px

## 🧪 Ferramentas de SEO

```bash
# Google Search Console
# https://search.google.com/search-console

# Google PageSpeed Insights
# https://pagespeed.web.dev

# SEMrush
# https://www.semrush.com

# Ahrefs
# https://ahrefs.com

# Lighthouse
npm run build
npx lighthouse https://www.origoerp.com.br --view
```

## ✅ Checklist de SEO

- [ ] Meta tags configuradas
- [ ] Schema.org implementado
- [ ] Sitemap criado
- [ ] Robots.txt configurado
- [ ] Mobile responsivo
- [ ] Core Web Vitals otimizados
- [ ] Links internos estruturados
- [ ] Imagens otimizadas
- [ ] Conteúdo único e relevante
- [ ] Google Search Console configurado
- [ ] Analytics implementado
- [ ] Social media links

## 📊 Métricas de SEO

| Métrica | Alvo | Status |
|---------|------|--------|
| Posição média | Top 3 | ⏳ |
| CTR | > 5% | ⏳ |
| Impressões | > 1000/mês | ⏳ |
| Backlinks | > 50 | ⏳ |
| Domain Authority | > 30 | ⏳ |
