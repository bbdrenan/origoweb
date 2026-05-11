'use client';

import { CheckCircle, Shield } from 'lucide-react';

export function Guarantee() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold mb-4">
            ✓ Garantia de 30 Dias
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Comece com Confiança
          </h2>
          <p className="text-xl text-slate-600">
            Se não gostar, devolvemos 100% do seu dinheiro
          </p>
        </div>

        {/* Main Guarantee Card */}
        <div className="bg-white rounded-lg shadow-lg p-12 mb-16 border-2 border-green-200">
          <div className="flex items-start gap-6 mb-8">
            <Shield className="w-16 h-16 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Garantia de Satisfação de 30 Dias
              </h3>
              <p className="text-slate-600">
                Teste o OrigoERP completamente grátis por 30 dias. Se não
                gostar, cancelamos sua assinatura e devolvemos 100% do seu
                dinheiro. Sem perguntas, sem complicações.
              </p>
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-slate-50 rounded-lg p-8">
            <h4 className="font-semibold text-slate-900 mb-4">
              Sua Garantia Inclui:
            </h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700">
                  Acesso completo a todas as funcionalidades
                </span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700">
                  Suporte técnico 24/7 em português
                </span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700">
                  Treinamento gratuito para sua equipe
                </span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700">
                  Migração de dados de outros sistemas
                </span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700">
                  Reembolso total se não estiver satisfeito
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-lg shadow-md p-12 mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Como Funciona
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Comece Grátis</h4>
              <p className="text-slate-600">
                Crie sua conta e comece a usar todas as funcionalidades
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Teste por 30 Dias
              </h4>
              <p className="text-slate-600">
                Experimente todas as funcionalidades sem risco
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Reembolso Garantido
              </h4>
              <p className="text-slate-600">
                Se não gostar, cancelamos e devolvemos seu dinheiro
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-lg shadow-md p-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Perguntas Frequentes
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Preciso fornecer cartão de crédito para começar?
              </h4>
              <p className="text-slate-600">
                Não! Os primeiros 30 dias são completamente grátis. Você só
                precisa fornecer seu cartão se quiser continuar após o período
                de teste.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Como faço para cancelar?
              </h4>
              <p className="text-slate-600">
                Você pode cancelar a qualquer momento com um clique. Não há
                contrato de longo prazo ou taxas de cancelamento.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Quanto tempo leva para receber o reembolso?
              </h4>
              <p className="text-slate-600">
                O reembolso é processado em até 5 dias úteis após o cancelamento.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Meus dados serão deletados se eu cancelar?
              </h4>
              <p className="text-slate-600">
                Você pode fazer download de todos os seus dados antes de
                cancelar. Nós deletamos automaticamente após 30 dias.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Há alguma condição para a garantia?
              </h4>
              <p className="text-slate-600">
                Não! A garantia é incondicional. Se não estiver satisfeito por
                qualquer motivo, devolvemos seu dinheiro.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6 text-lg">
            Não há risco. Comece grátis agora e veja a diferença.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
            Começar Grátis por 30 Dias
          </button>
          <p className="text-sm text-slate-600 mt-4">
            Sem cartão de crédito necessário
          </p>
        </div>
      </div>
    </section>
  );
}
