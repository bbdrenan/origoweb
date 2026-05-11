'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Check, Star, TrendingUp, BarChart3, Lock, Zap, Users } from 'lucide-react';

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
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Preços</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition">FAQ</a>
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
              <a href="#pricing" className="block py-2 text-gray-600 hover:text-gray-900">Preços</a>
              <a href="#faq" className="block py-2 text-gray-600 hover:text-gray-900">FAQ</a>
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Planos Simples e Transparentes</h2>
            <p className="text-xl text-gray-600">Escolha o plano ideal para seu negócio</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              {
                name: 'Gratuito',
                price: 'R$ 0',
                desc: 'Para começar',
                features: ['Dashboard básico', 'Até 100 produtos', 'Até 50 vendas/mês', 'Suporte por email'],
              },
              {
                name: 'Premium',
                price: 'R$ 49',
                desc: '/mês',
                features: ['Dashboard completo', 'Produtos ilimitados', 'Vendas ilimitadas', 'IA integrada', 'Integrações', 'Suporte prioritário'],
                highlight: true,
              },
            ].map((plan, i) => (
              <div key={i} className={`rounded-xl p-8 border-2 transition ${plan.highlight ? 'border-[#003D82] bg-gradient-to-br from-[#003D82]/5 to-[#0369A1]/5' : 'border-gray-200 bg-white'}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.desc}</p>
                <div className="text-4xl font-bold text-gray-900 mb-8">{plan.price}</div>
                <button className={`w-full py-3 rounded-lg font-semibold transition mb-8 ${plan.highlight ? 'bg-gradient-to-r from-[#003D82] to-[#0369A1] text-white hover:shadow-lg' : 'border-2 border-gray-300 text-gray-900 hover:border-gray-400'}`}>
                  Escolher Plano
                </button>
                <div className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#059669]" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">Tire suas dúvidas sobre o OrigoERP</p>
          </div>

          <div className="space-y-4">
            {[
              { q: 'Como começo a usar?', a: 'Basta se registrar gratuitamente e começar a adicionar seus produtos e vendas. Leva menos de 5 minutos!' },
              { q: 'Posso usar no celular?', a: 'Sim! OrigoERP funciona perfeitamente em iOS, Android e web. Sincroniza automaticamente entre dispositivos.' },
              { q: 'Meus dados estão seguros?', a: 'Seus dados são criptografados e armazenados em servidores seguros. Fazemos backup automático diário.' },
              { q: 'Posso cancelar a qualquer momento?', a: 'Sim, sem compromisso. Você pode cancelar sua assinatura a qualquer momento pelo painel de controle.' },
              { q: 'Qual é o suporte disponível?', a: 'Oferecemos suporte por email, WhatsApp e chat. Planos Premium têm prioridade de atendimento.' },
            ].map((item, i) => (
              <details key={i} className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer hover:border-[#003D82] transition group">
                <summary className="flex items-center justify-between font-semibold text-gray-900">
                  {item.q}
                  <ChevronRight className="w-5 h-5 group-open:rotate-90 transition" />
                </summary>
                <p className="text-gray-600 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#003D82] to-[#0369A1] rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Pronto para transformar seu negócio?</h2>
            <p className="text-lg opacity-90 mb-8">Comece grátis hoje e veja a diferença</p>
            <Link href="/onboarding" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#003D82] rounded-lg hover:bg-gray-100 transition font-semibold">
              Começar Agora
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#003D82] to-[#0369A1] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">O</span>
                </div>
                <span className="font-bold text-white">OrigoERP</span>
              </div>
              <p className="text-sm">Gestão inteligente para seu negócio</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition">Preços</a></li>
                <li><a href="#" className="hover:text-white transition">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Termos</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 OrigoERP. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
