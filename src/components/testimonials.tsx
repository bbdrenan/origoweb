'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    company: 'Loja de Roupas Silva',
    role: 'Proprietária',
    image: '👩‍💼',
    text: 'OrigoERP aumentou minhas vendas em 40% em apenas 3 meses. A sincronização entre mobile e web é perfeita!',
    rating: 5,
  },
  {
    id: 2,
    name: 'João Santos',
    company: 'Consultoria ABC',
    role: 'Sócio',
    image: '👨‍💼',
    text: 'Economizei 20 horas por semana com a automação do OrigoERP. Agora tenho mais tempo para focar no negócio.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana Costa',
    company: 'Serviços XYZ',
    role: 'Gerente',
    image: '👩‍🔬',
    text: 'O modo offline é sensacional! Consigo trabalhar mesmo sem internet e sincroniza tudo automaticamente.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Carlos Oliveira',
    company: 'E-commerce Premium',
    role: 'Proprietário',
    image: '👨‍🏫',
    text: 'Melhor investimento que fiz para meu negócio. O suporte é excelente e a interface é muito intuitiva.',
    rating: 5,
  },
];

const stats = [
  { label: 'Clientes Ativos', value: '10k+' },
  { label: 'Transações', value: '1M+' },
  { label: 'Avaliação Média', value: '4.9/5' },
  { label: 'Taxa de Satisfação', value: '98%' },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-slate-600">
            Mais de 10 mil empresas confiam no OrigoERP
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8 border border-slate-200"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-700 mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <div className="font-semibold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-600">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">
            Junte-se a milhares de empresas que já aumentaram suas vendas
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Começar Grátis Agora
          </button>
        </div>
      </div>
    </section>
  );
}
