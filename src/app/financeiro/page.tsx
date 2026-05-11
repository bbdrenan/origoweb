'use client';

import { useState } from 'react';
import { SyncIndicator } from '@/components/SyncIndicator';

interface FinancialData {
  revenue: number;
  costs: number;
  profit: number;
  margin: number;
  breakeven: number;
  expenses: Array<{
    id: string;
    category: string;
    amount: number;
    date: string;
  }>;
}

export default function FinanceiroPage() {
  const [financial] = useState<FinancialData>({
    revenue: 12500,
    costs: 8750,
    profit: 3750,
    margin: 30,
    breakeven: 10000,
    expenses: [
      { id: '1', category: 'Aluguel', amount: 2000, date: '2026-05-01' },
      { id: '2', category: 'Salários', amount: 4000, date: '2026-05-01' },
      { id: '3', category: 'Fornecedores', amount: 2750, date: '2026-05-11' },
    ],
  });

  const revenuePercentage = (financial.revenue / financial.breakeven) * 100;

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Financeiro</h1>
            <SyncIndicator />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <p className="text-sm text-muted mb-1">Faturamento</p>
            <p className="text-2xl font-bold text-green-600">R$ {financial.revenue.toFixed(2)}</p>
          </div>
          <div className="card">
            <p className="text-sm text-muted mb-1">Custos</p>
            <p className="text-2xl font-bold text-red-600">R$ {financial.costs.toFixed(2)}</p>
          </div>
          <div className="card">
            <p className="text-sm text-muted mb-1">Lucro</p>
            <p className="text-2xl font-bold text-blue-600">R$ {financial.profit.toFixed(2)}</p>
          </div>
          <div className="card">
            <p className="text-sm text-muted mb-1">Margem</p>
            <p className="text-2xl font-bold text-purple-600">{financial.margin}%</p>
          </div>
        </div>

        {/* Breakeven Analysis */}
        <div className="card mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Ponto de Equilíbrio</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-foreground">Faturamento vs PE</span>
                <span className="text-sm font-semibold text-foreground">{revenuePercentage.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-surface rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${Math.min(revenuePercentage, 100)}%` }}
                />
              </div>
              <p className="text-sm text-muted mt-2">
                Você precisa de R$ {(financial.breakeven - financial.revenue).toFixed(2)} para atingir o ponto de equilíbrio
              </p>
            </div>
          </div>
        </div>

        {/* Expenses */}
        <div className="card">
          <h2 className="text-lg font-semibold text-foreground mb-4">Despesas</h2>
          <div className="space-y-3">
            {financial.expenses.map((expense) => (
              <div key={expense.id} className="flex items-center justify-between pb-3 border-b border-border last:border-b-0">
                <div>
                  <p className="font-semibold text-foreground">{expense.category}</p>
                  <p className="text-sm text-muted">{new Date(expense.date).toLocaleDateString('pt-BR')}</p>
                </div>
                <p className="text-lg font-bold text-red-600">-R$ {expense.amount.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
