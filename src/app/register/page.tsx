'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { ChevronRight } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const { register, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    businessName: '',
  });
  const [error, setError] = useState('');
  const [step, setStep] = useState(1); // 1 = personal, 2 = business

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }

    setError('');

    try {
      await register(
        formData.email,
        formData.password,
        formData.name,
        formData.businessName
      );
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao criar conta');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#003D82] to-[#0369A1] flex items-center justify-center p-4">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663598926595/vGCnYfGcCfLTaGHB.png" alt="OrigoERP" className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-[#003D82] mb-2">OrigoERP</h1>
            <p className="text-gray-600">
              {step === 1 ? 'Crie sua conta' : 'Informações do seu negócio'}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8 flex gap-2">
            <div className={`flex-1 h-1 rounded-full transition ${step >= 1 ? 'bg-[#003D82]' : 'bg-gray-200'}`} />
            <div className={`flex-1 h-1 rounded-full transition ${step >= 2 ? 'bg-[#003D82]' : 'bg-gray-200'}`} />
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-800 text-sm font-medium">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003D82] focus:border-transparent transition"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003D82] focus:border-transparent transition"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Senha
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003D82] focus:border-transparent transition"
                    placeholder="••••••••"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Mínimo 8 caracteres com letras e números
                  </p>
                </div>
              </>
            )}

            {/* Step 2: Business Info */}
            {step === 2 && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome do Negócio
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003D82] focus:border-transparent transition"
                    placeholder="Seu negócio"
                    required
                  />
                </div>

                {/* Terms & Conditions */}
                <label className="flex items-start gap-3 text-sm text-gray-700">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 mt-1" required />
                  <span>
                    Concordo com os{' '}
                    <a href="#" className="text-[#003D82] hover:underline font-medium">
                      Termos de Serviço
                    </a>{' '}
                    e{' '}
                    <a href="#" className="text-[#003D82] hover:underline font-medium">
                      Política de Privacidade
                    </a>
                  </span>
                </label>
              </>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-[#003D82] to-[#0369A1] text-white font-bold rounded-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Processando...' : step === 1 ? 'Próximo' : 'Criar Conta'}
            </button>

            {/* Back Button (Step 2) */}
            {step === 2 && (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition"
              >
                Voltar
              </button>
            )}
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-500 text-sm">ou</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-gray-600">
              Já tem conta?{' '}
              <Link href="/login" className="text-[#003D82] hover:underline font-semibold">
                Fazer login
              </Link>
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
            <p className="text-sm text-gray-700 mb-2 font-semibold">✨ Incluso no plano gratuito:</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>✓ Dashboard completo</li>
              <li>✓ Até 100 vendas/mês</li>
              <li>✓ Suporte por email</li>
            </ul>
          </div>
        </div>

        {/* Footer Link */}
        <div className="text-center mt-6">
          <Link href="/" className="inline-flex items-center gap-2 text-white hover:text-blue-100 transition">
            <ChevronRight size={16} className="rotate-180" />
            Voltar para home
          </Link>
        </div>
      </div>
    </main>
  );
}
