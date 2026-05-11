import { ChevronRight, Check, TrendingUp, BarChart3, Lock, Zap, Users } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663598926595/vGCnYfGcCfLTaGHB.png" alt="OrigoERP" className="w-8 h-8" />
              <span className="font-bold text-lg text-gray-900">OrigoERP</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Funcionalidades</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Preços</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition">FAQ</a>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/login" className="text-gray-600 hover:text-gray-900 transition">Fazer Login</Link>
              <Link href="/register" className="bg-[#003D82] text-white px-4 py-2 rounded-lg hover:bg-[#002855] transition">Criar Conta</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003D82] to-[#0369A1] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Gestão Inteligente para Seu Negócio
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Controle vendas, estoque e financeiro em um único lugar. Simples, rápido e eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="bg-white text-[#003D82] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2">
                Começar Grátis <ChevronRight size={20} />
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition">
                Ver Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Funcionalidades Principais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: 'Vendas em Tempo Real', desc: 'Acompanhe todas as suas vendas com relatórios detalhados' },
              { icon: BarChart3, title: 'Análise Financeira', desc: 'Entenda sua lucratividade e margem de lucro' },
              { icon: Lock, title: 'Segurança Garantida', desc: 'Seus dados protegidos com criptografia de ponta' },
              { icon: Zap, title: 'Rápido e Fácil', desc: 'Interface intuitiva que qualquer um consegue usar' },
              { icon: Users, title: 'Múltiplos Usuários', desc: 'Convide sua equipe e trabalhe em conjunto' },
              { icon: Check, title: 'Suporte 24/7', desc: 'Estamos sempre aqui para ajudar você' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <feature.icon className="w-12 h-12 text-[#003D82] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Planos Simples e Transparentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              {
                name: 'Gratuito',
                price: 'R$ 0',
                features: ['Até 100 vendas/mês', 'Relatórios básicos', 'Suporte por email'],
                cta: 'Começar Grátis',
              },
              {
                name: 'Premium',
                price: 'R$ 99',
                features: ['Vendas ilimitadas', 'Relatórios avançados', 'Suporte prioritário', 'API access'],
                cta: 'Assinar Agora',
                highlight: true,
              },
            ].map((plan, idx) => (
              <div key={idx} className={`p-8 rounded-lg ${plan.highlight ? 'bg-[#003D82] text-white shadow-lg' : 'bg-gray-50 border-2 border-gray-200'}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-lg">/mês</span></p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition ${plan.highlight ? 'bg-white text-[#003D82] hover:bg-gray-100' : 'bg-[#003D82] text-white hover:bg-[#002855]'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#003D82] to-[#0369A1] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Crescer?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a milhares de empresários que já confiam no OrigoERP
          </p>
          <Link href="/register" className="inline-block bg-white text-[#003D82] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
            Começar Agora - É Grátis
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663598926595/vGCnYfGcCfLTaGHB.png" alt="OrigoERP" className="w-8 h-8" />
                <span className="text-white font-bold text-lg">OrigoERP</span>
              </div>
              <p className="text-sm">Gestão inteligente para MEI e pequenas empresas</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white">Funcionalidades</a></li>
                <li><a href="#pricing" className="hover:text-white">Preços</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Sobre</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Privacidade</a></li>
                <li><a href="#" className="hover:text-white">Termos</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>&copy; 2026 OrigoERP. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
