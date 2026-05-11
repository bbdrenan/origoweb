'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

interface StripePaymentProps {
  planId: 'free' | 'premium';
  planName: string;
  price: number;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

function PaymentForm({ planId, planName, price, onSuccess, onError }: StripePaymentProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setError('Stripe não carregou corretamente');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Criar token do cartão
      const { token } = await stripe.createToken(elements.getElement(CardElement)!);

      if (!token) {
        throw new Error('Erro ao processar cartão');
      }

      // Enviar para backend para criar subscription
      const response = await fetch('/api/stripe/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: token.id,
          planId,
          planName,
          price,
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
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
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
        disabled={!stripe || loading}
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition"
      >
        {loading ? 'Processando...' : `Assinar ${planName}`}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Seu pagamento é seguro e processado por Stripe. Nenhuma informação de cartão é armazenada em nossos servidores.
      </p>
    </form>
  );
}

export function StripePayment(props: StripePaymentProps) {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm {...props} />
    </Elements>
  );
}
