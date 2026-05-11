'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Inicializar Google Analytics
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
    
    if (!GA_ID) return;

    // Carregar script do Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}', {
        page_path: window.location.pathname,
      });
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  // Rastrear mudanças de página
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_search: searchParams.toString(),
      });
    }
  }, [pathname, searchParams]);

  // Rastrear eventos customizados
  useEffect(() => {
    // Rastrear cliques em CTAs
    const trackCTA = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.textContent && window.gtag) {
        window.gtag('event', 'cta_click', {
          cta_text: target.textContent,
          cta_location: target.closest('[data-cta-section]')?.getAttribute('data-cta-section'),
        });
      }
    };

    // Rastrear visualizações de seções
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && window.gtag) {
          const sectionName = entry.target.getAttribute('data-section');
          if (sectionName) {
            window.gtag('event', 'section_view', {
              section_name: sectionName,
            });
          }
        }
      });
    });

    document.querySelectorAll('[data-section]').forEach((el) => {
      observer.observe(el);
    });

    // Adicionar listeners para CTAs
    document.querySelectorAll('[data-cta]').forEach((el) => {
      el.addEventListener('click', trackCTA);
    });

    return () => {
      observer.disconnect();
      document.querySelectorAll('[data-cta]').forEach((el) => {
        el.removeEventListener('click', trackCTA);
      });
    };
  }, []);

  return null;
}

// Função helper para rastrear eventos customizados
export function trackEvent(eventName: string, eventData?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventData);
  }
}

// Função helper para rastrear conversões
export function trackConversion(conversionId: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      conversion_id: conversionId,
      value: value,
    });
  }
}
