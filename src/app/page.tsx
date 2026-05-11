'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Check, Star, TrendingUp, BarChart3, Lock, Zap, Users } from 'lucide-react';
import { Testimonials } from '@/components/testimonials';
import { VideoDemo } from '@/components/video-demo';
import { Comparison } from '@/components/comparison';
import { Security } from '@/components/security';
import { UseCases } from '@/components/use-cases';
import { Guarantee } from '@/components/guarantee';
import { Blog } from '@/components/blog';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#003D82] to-[#0369A1] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="font-bold text-lg text-gray-900">OrigoERP</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Funcionalidades</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition">Depoimentos</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Preços</a>
              <a href="#blog" className="text-gray-600 hover:text-gray-900 transition">Blog</a>
              <Link href="/onboarding" className="px-6 py-2 bg-[#003D82] text-white rounded-lg hover:bg-[#002856] transition font-medium">
                Começar
              </Link>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
              <a href="#features" className="block py-2 text-gray-600 hover:text-gray-900">Funcionalidades</a>
              <a href="#testimonials" className="block py-2 text-gray-600 hover:text-gray-900">Depoimentos</a>
              <a href="#pricing" className="block py-2 text-gray-600 hover:text-gray-900">Preços</a>
              <a href="#blog" className="block py-2 text-gray-600 hover:text-gray-900">Blog</a>
              <Link href="/onboarding" className="block mt-4 px-4 py-2 bg-[#003D82] text-white rounded-lg text-center font-medium">
                Começar
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003D82]/5 via-transparent to-[#0369A1]/5 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-6">
                <span className="w-2 h-2 bg-[#003D82] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-[#003D82]">Novo: Modo Consultor com IA</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Gerencie seu negócio em <span className="bg-gradient-to-r from-[#003D82] to-[#0369A1] bg-clip-text text-transparent">segundos</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                OrigoERP é a solução completa para MEI e pequenas empresas. Vendas, estoque, financeiro e IA integrados em um único lugar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/onboarding" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#003D82] to-[#0369A1] text-white rounded-lg hover:shadow-lg transition font-semibold group">
                  Começar Grátis
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </Link>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg hover:border-gray-400 transition font-semibold">
                  Ver Demo
                </button>
              </div>

              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-gray-900">10k+</div>
                  <p className="text-sm text-gray-600">Usuários ativos</p>
                </div>
                <div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D97706] text-[#D97706]" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">4.9/5 avaliações</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#003D82]/10 to-[#0369A1]/10 rounded-2xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] rounded-2xl p-8 border border-gray-200">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Faturamento</span>
                      <TrendingUp className="w-4 h-4 text-[#059669]" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">R$ 12.450</div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-[#003D82] to-[#0369A1]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tudo que você precisa</h2>
            <p className="text-xl text-gray-600">Funcionalidades completas para gerenciar seu negócio</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: 'Dashboard em Tempo Real', desc: 'Visualize todos os dados do seu negócio em um só lugar' },
              { icon: TrendingUp, title: 'Análise Inteligente', desc: 'IA que recomenda ações para aumentar suas vendas' },
              { icon: Lock, title: 'Segurança Total', desc: 'Seus dados protegidos com criptografia de ponta a ponta' },
              { icon: Zap, title: 'Modo Offline', desc: 'Continue trabalhando mesmo sem conexão com internet' },
              { icon: Users, title: 'Integração Completa', desc: 'WhatsApp, Telegram, Slack e Google Sheets integrados' },
              { icon: Check, title: 'Suporte 24/7', desc: 'Equipe pronta para ajudar quando você precisar' },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#003D82] transition hover:shadow-lg">
                <feature.icon className="w-12 h-12 text-[#003D82] mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo - Melhoria 2 */}
      <VideoDemo />

      {/* Testimonials - Melhoria 1 */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Use Cases - Melhoria 5 */}
      <UseCases />

      {/* Comparison - Melhoria 3 */}
      <section id="pricing">
        <Comparison />
      </section>

      {/* Security - Melhoria 4 */}
      <Security />

      {/* Guarantee - Melhoria 8 */}
      <Guarantee />

      {/* Blog - Melhoria 6 */}
      <section id="blog">
        <Blog />
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#003D82] to-[#0369A1] rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Pronto para Transformar Seu Negócio?</h2>
            <p className="text-xl mb-8 text-blue-100">Comece grátis hoje e veja como OrigoERP pode aumentar suas vendas</p>
            <Link href="/onboarding" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#003D82] rounded-lg hover:shadow-lg transition font-semibold">
              Começar Grátis Agora
              <ChevronRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-blue-100 mt-4">Sem cartão de crédito necessário • 30 dias de garantia • Cancelar a qualquer momento</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-white font-bold text-lg mb-4">OrigoERP</div>
              <p className="text-sm">Gestão inteligente para MEI e pequenas empresas</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white">Funcionalidades</a></li>
                <li><a href="#pricing" className="hover:text-white">Preços</a></li>
                <li><a href="#blog" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Sobre</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
                <li><a href="#" className="hover:text-white">Suporte</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Privacidade</a></li>
                <li><a href="#" className="hover:text-white">Termos</a></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>© 2026 OrigoERP. Todos os direitos reservados. Desenvolvido com ❤️ para MEI e pequenas empresas.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
