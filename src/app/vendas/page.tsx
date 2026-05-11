'use client';

import { useState } from 'react';
import { SyncIndicator } from '@/components/SyncIndicator';

interface Sale {
  id: string;
  date: string;
  product: string;
  quantity: number;
  price: number;
  total: number;
  status: 'completed' | 'pending' | 'cancelled';
}

export default function VendasPage() {
  const [sales] = useState<Sale[]>([
    {
      id: '1',
      date: '2026-05-11',
      product: 'Produto A',
      quantity: 2,
      price: 100,
      total: 200,
      status: 'completed',
    },
    {
      id: '2',
      date: '2026-05-11',
      product: 'Produto B',
      quantity: 1,
      price: 150,
      total: 150,
      status: 'completed',
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const totalVendas = sales.reduce((acc, sale) => acc + sale.total, 0);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Vendas</h1>
            <SyncIndicator />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <p className="text-sm text-muted mb-1">Total de Vendas</p>
            <p className="text-3xl font-bold text-foreground">R$ {totalVendas.toFixed(2)}</p>
          </div>
          <div className="card">
            <p className="text-sm text-muted mb-1">Número de Vendas</p>
            <p className="text-3xl font-bold text-foreground">{sales.length}</p>
          </div>
          <div className="card">
            <p className="text-sm text-muted mb-1">Ticket Médio</p>
            <p className="text-3xl font-bold text-foreground">R$ {(totalVendas / sales.length).toFixed(2)}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="mb-6">
          <button className="btn-primary">+ Nova Venda</button>
        </div>

        {/* Sales Table */}
        <div className="card">
          <h2 className="text-lg font-semibold text-foreground mb-4">Histórico de Vendas</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Data</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Produto</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Quantidade</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Preço</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Total</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {sales.map((sale) => (
                  <tr key={sale.id} className="border-b border-border hover:bg-surface transition">
                    <td className="py-3 px-4 text-foreground">{new Date(sale.date).toLocaleDateString('pt-BR')}</td>
                    <td className="py-3 px-4 text-foreground">{sale.product}</td>
                    <td className="py-3 px-4 text-foreground">{sale.quantity}</td>
                    <td className="py-3 px-4 text-foreground">R$ {sale.price.toFixed(2)}</td>
                    <td className="py-3 px-4 text-foreground font-semibold">R$ {sale.total.toFixed(2)}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(sale.status)}`}>
                        {sale.status === 'completed' ? 'Concluída' : sale.status === 'pending' ? 'Pendente' : 'Cancelada'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
