'use client';

import { TrendingUp, Clock, Zap, BarChart3 } from 'lucide-react';

const useCases = [
  {
    id: 1,
    title: 'Loja de Roupas Silva',
    category: 'Varejo',
    icon: '👗',
    description: 'Aumentou vendas em 40% com melhor controle de estoque',
    metrics: [
      { label: 'Aumento de Vendas', value: '+40%' },
      { label: 'Redução de Estoque Parado', value: '-35%' },
      { label: 'Tempo Economizado', value: '15h/semana' },
    ],
    result:
      'Com OrigoERP, Maria conseguiu sincronizar suas vendas entre loja física e online, evitando sobrevenda e aumentando a satisfação dos clientes.',
  },
  {
    id: 2,
    title: 'Consultoria ABC',
    category: 'Serviços',
    icon: '💼',
    description: 'Economizou 20 horas por semana com automação',
    metrics: [
      { label: 'Tempo Economizado', value: '20h/semana' },
      { label: 'Aumento de Produtividade', value: '+50%' },
      { label: 'Redução de Erros', value: '-95%' },
    ],
    result:
      'João automatizou toda a gestão financeira e de projetos, podendo focar no crescimento do negócio em vez de tarefas administrativas.',
  },
  {
    id: 3,
    title: 'Serviços XYZ',
    category: 'Prestação de Serviços',
    icon: '🔧',
    description: 'Trabalha offline e sincroniza automaticamente',
    metrics: [
      { label: 'Disponibilidade', value: '100%' },
      { label: 'Tempo de Sincronização', value: '<1 min' },
      { label: 'Satisfação do Cliente', value: '+85%' },
    ],
    result:
      'Ana pode trabalhar em qualquer lugar, mesmo sem internet, e todos os dados sincronizam automaticamente quando volta a conectar.',
  },
  {
    id: 4,
    title: 'E-commerce Premium',
    category: 'E-commerce',
    icon: '🛒',
    description: 'Integração perfeita entre web e mobile',
    metrics: [
      { label: 'Conversão de Vendas', value: '+35%' },
      { label: 'Tempo de Processamento', value: '-60%' },
      { label: 'Satisfação', value: '4.9/5' },
    ],
    result:
      'Carlos conseguiu gerenciar toda sua operação de e-commerce de forma integrada, aumentando vendas e reduzindo custos operacionais.',
  },
];

export function UseCases() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Histórias de Sucesso
          </h2>
          <p className="text-xl text-slate-600">
            Veja como empresas como a sua estão crescendo com OrigoERP
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase) => (
            <div
              key={useCase.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{useCase.title}</h3>
                <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                  {useCase.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-slate-600 mb-6">{useCase.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b">
                  {useCase.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {metric.value}
                      </div>
                      <div className="text-xs text-slate-600 mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Result */}
                <p className="text-slate-700 italic">"{useCase.result}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Summary */}
        <div className="bg-white rounded-lg shadow-md p-12 mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Benefícios Comprovados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-semibold text-slate-900 mb-2">
                Aumento de Vendas
              </h4>
              <p className="text-slate-600">Média de +35% nos primeiros 3 meses</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-slate-900 mb-2">
                Economia de Tempo
              </h4>
              <p className="text-slate-600">Média de 15-20h economizadas por semana</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h4 className="font-semibold text-slate-900 mb-2">
                Maior Eficiência
              </h4>
              <p className="text-slate-600">Redução de 95% em erros operacionais</p>
            </div>
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold text-slate-900 mb-2">
                Melhor Decisão
              </h4>
              <p className="text-slate-600">Dados em tempo real para decisões melhores</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-600 mb-6">
            Sua história de sucesso pode começar hoje
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Começar Grátis Agora
          </button>
        </div>
      </div>
    </section>
  );
}
