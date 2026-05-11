'use client';

import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Como Aumentar Vendas em 30 Dias',
    excerpt:
      'Descubra as 5 estratégias mais eficazes para aumentar suas vendas rapidamente',
    author: 'Maria Silva',
    date: '15 de Maio de 2026',
    readTime: '5 min',
    category: 'Vendas',
    image: '📈',
  },
  {
    id: 2,
    title: 'Guia Completo de Gestão de Estoque',
    excerpt:
      'Tudo que você precisa saber para controlar seu estoque e evitar perdas',
    author: 'João Santos',
    date: '12 de Maio de 2026',
    readTime: '8 min',
    category: 'Estoque',
    image: '📦',
  },
  {
    id: 3,
    title: '5 Erros que MEI Cometem na Gestão Financeira',
    excerpt:
      'Aprenda quais são os erros mais comuns e como evitá-los para aumentar seu lucro',
    author: 'Ana Costa',
    date: '10 de Maio de 2026',
    readTime: '6 min',
    category: 'Financeiro',
    image: '💰',
  },
  {
    id: 4,
    title: 'Como Calcular o Preço de Venda Corretamente',
    excerpt:
      'Saiba como precificar seus produtos para maximizar lucro e competitividade',
    author: 'Carlos Oliveira',
    date: '8 de Maio de 2026',
    readTime: '7 min',
    category: 'Precificação',
    image: '🏷️',
  },
  {
    id: 5,
    title: 'Dicas de Fluxo de Caixa para Pequenas Empresas',
    excerpt:
      'Controle seu fluxo de caixa e evite crises financeiras no seu negócio',
    author: 'Beatriz Lima',
    date: '5 de Maio de 2026',
    readTime: '6 min',
    category: 'Fluxo de Caixa',
    image: '💳',
  },
  {
    id: 6,
    title: 'Tecnologia para Alavancar Seu Negócio',
    excerpt:
      'Conheça as melhores ferramentas para automatizar sua gestão e economizar tempo',
    author: 'Pedro Alves',
    date: '1 de Maio de 2026',
    readTime: '9 min',
    category: 'Tecnologia',
    image: '⚙️',
  },
];

export function Blog() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Blog OrigoERP
          </h2>
          <p className="text-xl text-slate-600">
            Dicas, estratégias e insights para fazer seu negócio crescer
          </p>
        </div>

        {/* Featured Post */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg overflow-hidden shadow-lg mb-16 text-white">
          <div className="p-12">
            <div className="text-5xl mb-4">📈</div>
            <h3 className="text-3xl font-bold mb-4">
              Como Aumentar Vendas em 30 Dias
            </h3>
            <p className="text-blue-100 mb-6">
              Descubra as 5 estratégias mais eficazes para aumentar suas vendas
              rapidamente e começar a ver resultados em poucas semanas.
            </p>
            <div className="flex items-center gap-6 mb-6 pb-6 border-b border-blue-400">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Maria Silva</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>15 de Maio de 2026</span>
              </div>
              <div>5 min de leitura</div>
            </div>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2">
              Ler Artigo <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-slate-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              {/* Image */}
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 h-40 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                {post.image}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {post.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 mb-4 text-sm">{post.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-slate-500 border-t pt-4">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div>{post.readTime}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg p-12 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Receba Dicas Exclusivas
          </h3>
          <p className="text-slate-600 mb-6">
            Inscreva-se na nossa newsletter e receba as melhores dicas de
            gestão empresarial direto no seu email
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Inscrever
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">
            Comece a implementar essas estratégias no seu negócio hoje
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Começar Grátis Agora
          </button>
        </div>
      </div>
    </section>
  );
}
