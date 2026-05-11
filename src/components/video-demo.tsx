'use client';

import { Play } from 'lucide-react';
import { useState } from 'react';

export function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Veja o OrigoERP em Ação
          </h2>
          <p className="text-xl text-slate-600">
            Conheça todas as funcionalidades em menos de 3 minutos
          </p>
        </div>

        {/* Video Container */}
        <div className="relative w-full bg-slate-900 rounded-lg overflow-hidden shadow-xl">
          {/* Thumbnail */}
          <div className="relative w-full pt-[56.25%]">
            {!isPlaying ? (
              <>
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                  {/* Play Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-white rounded-full opacity-20 group-hover:opacity-30 transition-opacity scale-150" />
                    <Play
                      size={60}
                      className="text-white fill-white relative z-10"
                    />
                  </button>
                </div>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="text-white">
                    <div className="text-2xl font-bold mb-2">
                      OrigoERP - Gestão Inteligente
                    </div>
                    <div className="text-sm opacity-90">
                      Duração: 2:45 minutos
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* Embedded Video */
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="OrigoERP Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>

        {/* Transcription */}
        <div className="mt-12 bg-slate-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Transcrição do Vídeo
          </h3>
          <div className="text-slate-700 space-y-4">
            <p>
              <strong>00:00 - Introdução:</strong> Bem-vindo ao OrigoERP, a
              solução completa de gestão para MEI e pequenas empresas.
            </p>
            <p>
              <strong>00:15 - Dashboard:</strong> Aqui você vê um resumo
              completo do seu negócio em tempo real. Faturamento, lucro,
              margem e todos os indicadores importantes.
            </p>
            <p>
              <strong>00:45 - Vendas:</strong> Registre vendas em segundos.
              Selecione o cliente, os produtos, e pronto! Tudo sincronizado
              entre mobile e web.
            </p>
            <p>
              <strong>01:15 - Estoque:</strong> Controle total do seu estoque.
              Receba alertas quando o estoque ficar baixo e nunca mais fique
              sem produtos.
            </p>
            <p>
              <strong>01:45 - Financeiro:</strong> Veja seu fluxo de caixa,
              receitas, despesas e lucro em tempo real. Tome decisões baseadas
              em dados.
            </p>
            <p>
              <strong>02:15 - IA:</strong> Nosso modo Consultor com IA analisa
              seu negócio e dá recomendações para aumentar vendas e reduzir
              custos.
            </p>
            <p>
              <strong>02:45 - Conclusão:</strong> Comece grátis agora e veja
              como o OrigoERP pode transformar seu negócio!
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Começar Grátis Agora
          </button>
        </div>
      </div>
    </section>
  );
}
