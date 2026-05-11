'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { KPICard } from '@/components/KPICard';

export default function DashboardPage() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">OrigoERP</h1>
              <p className="text-blue-100">{user.businessName}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-blue-100">{user.email}</p>
              </div>
              <button className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition">
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Faturamento"
            value="R$ 12.500,00"
            change={15}
            trend="up"
            icon={
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <KPICard
            title="Lucro"
            value="R$ 3.750,00"
            change={8}
            trend="up"
            icon={
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8L5.257 19.393A2 2 0 005 18.07V5a2 2 0 012-2h10a2 2 0 012 2z" />
              </svg>
            }
          />
          <KPICard
            title="Ticket Médio"
            value="R$ 625,00"
            change={-5}
            trend="down"
            icon={
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
          />
          <KPICard
            title="Margem"
            value="30%"
            change={2}
            trend="up"
            icon={
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <h2 className="text-lg font-semibold text-foreground mb-4">Ações Rápidas</h2>
            <div className="space-y-2">
              <button className="w-full btn-primary text-left">+ Nova Venda</button>
              <button className="w-full btn-secondary text-left">+ Novo Produto</button>
              <button className="w-full btn-secondary text-left">Ver Relatórios</button>
            </div>
          </div>

          <div className="card">
            <h2 className="text-lg font-semibold text-foreground mb-4">Status</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted">Sincronização</span>
                <span className="text-green-600 font-semibold">✓ Sincronizado</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted">Última atualização</span>
                <span className="text-foreground">Há 2 minutos</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted">Versão</span>
                <span className="text-foreground">1.0.0 Web</span>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder for Charts */}
        <div className="card">
          <h2 className="text-lg font-semibold text-foreground mb-4">Vendas por Período</h2>
          <div className="h-64 bg-surface rounded-lg flex items-center justify-center">
            <p className="text-muted">Gráfico em desenvolvimento</p>
          </div>
        </div>
      </div>
    </main>
  );
}
