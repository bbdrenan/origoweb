'use client';

import { useState } from 'react';

interface StripePaymentProps {
  planId: 'free' | 'premium';
  planName: string;
  price: number;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export function StripePayment({ planId, planName, price, onSuccess, onError }: StripePaymentProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvc: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validação básica
      if (!formData.cardNumber || !formData.expiryDate || !formData.cvc) {
        throw new Error('Preencha todos os campos do cartão');
      }

      // Simular envio para backend
      const response = await fetch('/api/stripe/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId,
          planName,
          price,
          cardNumber: formData.cardNumber,
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao processar pagamento');
      }

      setSuccess(true);
      onSuccess?.();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erro desconhecido';
      setError(message);
      onError?.(message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-green-800 font-semibold">✓ Pagamento realizado com sucesso!</p>
        <p className="text-green-700 text-sm mt-2">
          Seu plano {planName} foi ativado. Você receberá um email de confirmação em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Número do Cartão
        </label>
        <input
          type="text"
          placeholder="1234 5678 9012 3456"
          value={formData.cardNumber}
          onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Data de Validade
          </label>
          <input
            type="text"
            placeholder="MM/YY"
            value={formData.expiryDate}
            onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            CVC
          </label>
          <input
            type="text"
            placeholder="123"
            value={formData.cvc}
            onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-red-800 text-sm">✗ {error}</p>
        </div>
      )}

      <div className="bg-gray-50 rounded-lg p-4">
        <p className="text-sm text-gray-600">
          Você será cobrado <span className="font-bold">R$ {price}/mês</span> pelo plano <span className="font-bold">{planName}</span>
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition"
      >
        {loading ? 'Processando...' : `Assinar ${planName}`}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Seu pagamento é seguro. Nenhuma informação de cartão é armazenada em nossos servidores.
      </p>
    </form>
  );
}
