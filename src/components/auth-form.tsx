'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface AuthFormProps {
  mode: 'login' | 'signup';
  onSuccess?: () => void;
}

export function AuthForm({ mode, onSuccess }: AuthFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validação básica
      if (!formData.email || !formData.password) {
        throw new Error('Email e senha são obrigatórios');
      }

      if (mode === 'signup') {
        if (formData.password !== formData.confirmPassword) {
          throw new Error('As senhas não correspondem');
        }
        if (!formData.companyName) {
          throw new Error('Nome da empresa é obrigatório');
        }
      }

      // Chamar API de autenticação
      const endpoint = mode === 'login' ? '/api/auth/login' : '/api/auth/signup';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Erro na autenticação');
      }

      const data = await response.json();
      
      // Salvar token
      localStorage.setItem('authToken', data.token);
      
      onSuccess?.();
      
      // Redirecionar para dashboard
      router.push('/dashboard');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erro desconhecido';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {mode === 'login' ? 'Fazer Login' : 'Criar Conta'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'signup' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nome da Empresa
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Sua Empresa Ltda"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Senha
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {mode === 'signup' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirmar Senha
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-red-800 text-sm">✗ {error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition"
        >
          {loading ? 'Carregando...' : (mode === 'login' ? 'Entrar' : 'Criar Conta')}
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-4">
        {mode === 'login' ? (
          <>
            Não tem conta? <a href="/signup" className="text-blue-600 hover:underline">Criar conta</a>
          </>
        ) : (
          <>
            Já tem conta? <a href="/login" className="text-blue-600 hover:underline">Fazer login</a>
          </>
        )}
      </p>
    </div>
  );
}
