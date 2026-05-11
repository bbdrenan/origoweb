'use client';

import { Check, X } from 'lucide-react';

const features = [
  { name: 'Dashboard em Tempo Real', origoerp: true, omie: true, nuvem: true, bluesoft: false },
  { name: 'Modo Offline', origoerp: true, omie: false, nuvem: false, bluesoft: false },
  { name: 'IA Integrada', origoerp: true, omie: false, nuvem: false, bluesoft: false },
  { name: 'Sincronização Mobile/Web', origoerp: true, omie: true, nuvem: false, bluesoft: false },
  { name: 'Controle de Estoque', origoerp: true, omie: true, nuvem: true, bluesoft: true },
  { name: 'Gestão de Vendas', origoerp: true, omie: true, nuvem: true, bluesoft: true },
  { name: 'Relatórios Financeiros', origoerp: true, omie: true, nuvem: true, bluesoft: true },
  { name: 'Integração NF-e', origoerp: true, omie: true, nuvem: true, bluesoft: true },
  { name: 'Suporte em Português', origoerp: true, omie: true, nuvem: true, bluesoft: false },
  { name: 'Preço Acessível', origoerp: true, omie: false, nuvem: false, bluesoft: false },
];

const pricing = [
  { name: 'OrigoERP', price: 'R$ 49', period: '/mês' },
  { name: 'Omie', price: 'R$ 199', period: '/mês' },
  { name: 'Nuvem Fiscal', price: 'R$ 150', period: '/mês' },
  { name: 'Bluesoft', price: 'Sob consulta', period: '' },
];

export function Comparison() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Por Que Escolher OrigoERP?
          </h2>
          <p className="text-xl text-slate-600">
            Compare com as principais soluções do mercado
          </p>
        </div>

        {/* Pricing Comparison */}
        <div className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Comparação de Preços
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {pricing.map((plan) => (
              <div key={plan.name} className="text-center">
                <div className="font-semibold text-slate-900 mb-2">
                  {plan.name}
                </div>
                <div className="text-3xl font-bold text-blue-600">
                  {plan.price}
                </div>
                <div className="text-sm text-slate-600">{plan.period}</div>
                {plan.name === 'OrigoERP' && (
                  <div className="mt-4 inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Melhor Custo-Benefício
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features Comparison Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 border-b">
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">
                    Funcionalidade
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-blue-600">
                    OrigoERP
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-600">
                    Omie
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-600">
                    Nuvem Fiscal
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-600">
                    Bluesoft
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, idx) => (
                  <tr
                    key={feature.name}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                  >
                    <td className="px-6 py-4 font-medium text-slate-900">
                      {feature.name}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.origoerp ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-600 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.omie ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-600 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.nuvem ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-600 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.bluesoft ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-600 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            Economize até 75% em comparação com outras soluções
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Começar Grátis Agora
          </button>
        </div>
      </div>
    </section>
  );
}
