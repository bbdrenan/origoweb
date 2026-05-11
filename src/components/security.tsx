'use client';

import { Lock, Shield, CheckCircle } from 'lucide-react';

const securityFeatures = [
  {
    icon: '🔐',
    title: 'Criptografia End-to-End',
    description: 'Seus dados são criptografados com AES-256, o padrão militar',
  },
  {
    icon: '🛡️',
    title: 'Conformidade LGPD',
    description: 'Totalmente em conformidade com a Lei Geral de Proteção de Dados',
  },
  {
    icon: '🌍',
    title: 'Conformidade GDPR',
    description: 'Atende aos requisitos europeus de proteção de dados',
  },
  {
    icon: '✅',
    title: 'Certificação ISO 27001',
    description: 'Certificação internacional de segurança da informação',
  },
  {
    icon: '💾',
    title: 'Backup Automático',
    description: 'Seus dados são salvos automaticamente a cada hora',
  },
  {
    icon: '🔄',
    title: 'Recuperação de Desastres',
    description: 'Plano de recuperação em caso de falhas críticas',
  },
];

const certifications = [
  { name: 'LGPD', icon: '🇧🇷' },
  { name: 'GDPR', icon: '🇪🇺' },
  { name: 'ISO 27001', icon: '✓' },
  { name: 'SOC 2', icon: '🔒' },
];

export function Security() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Segurança e Conformidade
          </h2>
          <p className="text-xl text-slate-600">
            Seus dados estão protegidos com os mais altos padrões de segurança
          </p>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 text-center border border-blue-200"
            >
              <div className="text-4xl mb-3">{cert.icon}</div>
              <div className="font-semibold text-slate-900">{cert.name}</div>
            </div>
          ))}
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-50 rounded-lg p-8 border border-slate-200"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Security Info */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-12 text-white mb-16">
          <h3 className="text-2xl font-bold mb-8">Como Protegemos Seus Dados</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Lock size={24} />
                <h4 className="text-lg font-semibold">Criptografia</h4>
              </div>
              <p className="text-blue-100">
                Todos os dados em trânsito e em repouso são criptografados com
                AES-256
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield size={24} />
                <h4 className="text-lg font-semibold">Autenticação</h4>
              </div>
              <p className="text-blue-100">
                Autenticação de dois fatores (2FA) disponível para todas as
                contas
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle size={24} />
                <h4 className="text-lg font-semibold">Conformidade</h4>
              </div>
              <p className="text-blue-100">
                Auditoria regular e conformidade com LGPD, GDPR e ISO 27001
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Política de Privacidade
          </h3>
          <p className="text-slate-600 mb-4">
            Nós levamos a privacidade dos seus dados muito a sério. Aqui está
            como protegemos suas informações:
          </p>
          <ul className="space-y-3 text-slate-600">
            <li className="flex gap-3">
              <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
              <span>
                Nunca compartilhamos seus dados com terceiros sem consentimento
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
              <span>
                Você pode solicitar a exclusão de seus dados a qualquer momento
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
              <span>
                Realizamos auditorias de segurança regularmente
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
              <span>
                Seus dados estão sempre sob seu controle
              </span>
            </li>
          </ul>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold mt-6 inline-block">
            Ler Política de Privacidade Completa →
          </a>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            Seus dados estão seguros com OrigoERP
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Começar Grátis Agora
          </button>
        </div>
      </div>
    </section>
  );
}
