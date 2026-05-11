'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { ChevronRight } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao fazer login');
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
            <p className="text-gray-600">Faça login para continuar gerenciando seu negócio</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-800 text-sm font-medium">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003D82] focus:border-transparent transition"
                placeholder="seu@email.com"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003D82] focus:border-transparent transition"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-700">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                Lembrar-me
              </label>
              <a href="#" className="text-[#003D82] hover:underline font-medium">
                Esqueceu a senha?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-[#003D82] to-[#0369A1] text-white font-bold rounded-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-500 text-sm">ou</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Não tem conta?{' '}
              <Link href="/signup" className="text-[#003D82] hover:underline font-semibold">
                Criar conta
              </Link>
            </p>
          </div>

          {/* Demo Account */}
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Teste grátis:</strong> Use qualquer email para criar uma conta
            </p>
            <p className="text-xs text-gray-600">
              Sem cartão de crédito necessário • 30 dias de garantia
            </p>
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
