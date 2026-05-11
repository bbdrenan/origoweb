import Link from 'next/link';
import { ChevronRight, Check, TrendingUp, BarChart3, Lock, Zap, Users, Headphones } from 'lucide-react';

export const metadata = {
  title: 'OrigoERP - Gestão Inteligente para Seu Negócio',
  description: 'Controle vendas, estoque e financeiro em um único lugar. Simples, rápido e eficiente.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663598926595/vGCnYfGcCfLTaGHB.png" 
                alt="OrigoERP" 
                className="w-8 h-8" 
              />
              <span className="font-bold text-lg text-white">OrigoERP</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-300 hover:text-white transition">Funcionalidades</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition">Preços</a>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/login" className="text-slate-300 hover:text-white transition font-medium">
                Login
              </Link>
              <Link 
                href="/register" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition font-medium"
              >
                Começar Grátis
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Gestão Inteligente para Seu Negócio
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Controle vendas, estoque e financeiro em um único lugar. Simples, rápido e eficiente.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105 flex items-center justify-center gap-2">
                  Começar Grátis <ChevronRight size={20} />
                </Link>
                <button className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-800/50 transition">
                  Ver Demo
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 border-2 border-slate-950" />
                  ))}
                </div>
                <p className="text-slate-400">
                  <span className="text-white font-semibold">1000+</span> empresas confiam no OrigoERP
                </p>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl blur-3xl" />
              <div className="relative h-full flex items-center justify-center">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663598926595/vGCnYfGcCfLTaGHB.png" 
                  alt="OrigoERP" 
                  className="w-64 h-64 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Funcionalidades Poderosas</h2>
            <p className="text-xl text-slate-300">Tudo que você precisa para gerenciar seu negócio com eficiência</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Vendas em Tempo Real',
                description: 'Acompanhe todas as suas vendas com relatórios detalhados e análises profundas'
              },
              {
                icon: BarChart3,
                title: 'Análise Financeira',
                description: 'Entenda sua lucratividade, margem de lucro e fluxo de caixa em tempo real'
              },
              {
                icon: Lock,
                title: 'Segurança Garantida',
                description: 'Seus dados protegidos com criptografia de ponta e backups automáticos'
              },
              {
                icon: Zap,
                title: 'Rápido e Fácil',
                description: 'Interface intuitiva que qualquer um consegue usar sem treinamento'
              },
              {
                icon: Users,
                title: 'Múltiplos Usuários',
                description: 'Convide sua equipe e trabalhe em conjunto com permissões personalizadas'
              },
              {
                icon: Headphones,
                title: 'Suporte 24/7',
                description: 'Estamos sempre aqui para ajudar você com qualquer dúvida ou problema'
              }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500/50 transition group hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Planos Simples e Transparentes</h2>
            <p className="text-xl text-slate-300">Escolha o plano perfeito para seu negócio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              {
                name: 'Gratuito',
                price: 'R$ 0',
                period: '/mês',
                features: ['Até 100 vendas/mês', 'Relatórios básicos', 'Suporte por email', '1 usuário'],
                cta: 'Começar Grátis',
                highlighted: false
              },
              {
                name: 'Premium',
                price: 'R$ 99',
                period: '/mês',
                features: ['Vendas ilimitadas', 'Relatórios avançados', 'Suporte prioritário', 'Até 5 usuários', 'API access', 'Integrações'],
                cta: 'Assinar Agora',
                highlighted: true
              }
            ].map((plan, i) => (
              <div
                key={i}
                className={`p-8 rounded-xl border transition ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <Check size={16} className="text-white" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/50'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border-y border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-white">Pronto para Crescer?</h2>
          <p className="text-xl text-slate-300">
            Junte-se a milhares de empresários que já confiam no OrigoERP para gerenciar seus negócios
          </p>
          <Link href="/register" className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105">
            Começar Agora - É Grátis
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663598926595/vGCnYfGcCfLTaGHB.png" 
                  alt="OrigoERP" 
                  className="w-8 h-8"
                />
                <span className="font-bold text-white">OrigoERP</span>
              </div>
              <p className="text-slate-400 text-sm">Gestão inteligente para seu negócio</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#features" className="hover:text-white transition">Funcionalidades</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Preços</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
                <li><a href="#" className="hover:text-white transition">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Termos</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2026 OrigoERP. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
