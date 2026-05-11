import Link from 'next/link';
import { ChevronRight, Check, TrendingUp, BarChart3, Lock, Zap, Users } from 'lucide-react';

export const metadata = {
  title: 'OrigoERP - Gestão Inteligente para Seu Negócio',
  description: 'Controle vendas, estoque e financeiro em um único lugar. Simples, rápido e eficiente.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663598926595/vGCnYfGcCfLTaGHB.png" 
                alt="OrigoERP" 
                className="w-8 h-8" 
              />
              <span className="font-bold text-lg text-gray-900">OrigoERP</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Funcionalidades</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Preços</a>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/login" className="text-gray-600 hover:text-gray-900 transition font-medium">
                Fazer Login
              </Link>
              <Link 
                href="/register" 
                className="bg-[#003D82] text-white px-4 py-2 rounded-lg hover:bg-[#002855] transition font-medium"
              >
                Criar Conta
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003D82] to-[#0369A1] text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Gestão Inteligente para Seu Negócio
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Controle vendas, estoque e financeiro em um único lugar. Simples, rápido e eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/register" 
                className="bg-white text-[#003D82] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2 group"
              >
                Começar Grátis 
                <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition">
                Ver Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Funcionalidades Principais</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tudo que você precisa para gerenciar seu negócio com eficiência
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: TrendingUp, 
                title: 'Vendas em Tempo Real', 
                desc: 'Acompanhe todas as suas vendas com relatórios detalhados e análises profundas' 
              },
              { 
                icon: BarChart3, 
                title: 'Análise Financeira', 
                desc: 'Entenda sua lucratividade, margem de lucro e fluxo de caixa em tempo real' 
              },
              { 
                icon: Lock, 
                title: 'Segurança Garantida', 
                desc: 'Seus dados protegidos com criptografia de ponta e backups automáticos' 
              },
              { 
                icon: Zap, 
                title: 'Rápido e Fácil', 
                desc: 'Interface intuitiva que qualquer um consegue usar sem treinamento' 
              },
              { 
                icon: Users, 
                title: 'Múltiplos Usuários', 
                desc: 'Convide sua equipe e trabalhe em conjunto com permissões personalizadas' 
              },
              { 
                icon: Check, 
                title: 'Suporte 24/7', 
                desc: 'Estamos sempre aqui para ajudar você com qualquer dúvida ou problema' 
              },
            ].map((feature, idx) => (
              <div 
                key={`feature-${idx}`}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              >
                <feature.icon className="w-12 h-12 text-[#003D82] mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Planos Simples e Transparentes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha o plano perfeito para seu negócio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: 'Gratuito',
                price: 'R$ 0',
                period: '/mês',
                features: [
                  'Até 100 vendas/mês',
                  'Relatórios básicos',
                  'Suporte por email',
                  '1 usuário',
                ],
                cta: 'Começar Grátis',
                highlight: false,
              },
              {
                name: 'Premium',
                price: 'R$ 99',
                period: '/mês',
                features: [
                  'Vendas ilimitadas',
                  'Relatórios avançados',
                  'Suporte prioritário',
                  'Até 5 usuários',
                  'API access',
                  'Integrações',
                ],
                cta: 'Assinar Agora',
                highlight: true,
              },
            ].map((plan, idx) => (
              <div 
                key={`plan-${idx}`}
                className={`p-8 md:p-12 rounded-2xl transition-all ${
                  plan.highlight 
                    ? 'bg-[#003D82] text-white shadow-2xl scale-105' 
                    : 'bg-gray-50 border-2 border-gray-200 hover:border-[#003D82]'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={plan.highlight ? 'text-blue-100' : 'text-gray-600'}>{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={`feature-${i}`} className="flex items-center gap-3">
                      <Check size={20} className="flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.highlight 
                      ? 'bg-white text-[#003D82] hover:bg-gray-100' 
                      : 'bg-[#003D82] text-white hover:bg-[#002855]'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#003D82] to-[#0369A1] text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para Crescer?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de empresários que já confiam no OrigoERP para gerenciar seus negócios
          </p>
          <Link 
            href="/register" 
            className="inline-block bg-white text-[#003D82] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Começar Agora - É Grátis
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663598926595/vGCnYfGcCfLTaGHB.png" 
                  alt="OrigoERP" 
                  className="w-8 h-8" 
                />
                <span className="text-white font-bold text-lg">OrigoERP</span>
              </div>
              <p className="text-sm text-slate-500">
                Gestão inteligente para MEI e pequenas empresas
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition">Funcionalidades</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Preços</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Termos</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-500">
            <p>&copy; 2026 OrigoERP. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
