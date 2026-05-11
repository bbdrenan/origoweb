'use client';

import { useState } from 'react';
import { SyncIndicator } from '@/components/SyncIndicator';

interface Product {
  id: string;
  name: string;
  sku: string;
  quantity: number;
  minQuantity: number;
  price: number;
  cost: number;
  margin: number;
}

export default function EstoquePage() {
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'Produto A',
      sku: 'SKU001',
      quantity: 50,
      minQuantity: 10,
      price: 100,
      cost: 40,
      margin: 60,
    },
    {
      id: '2',
      name: 'Produto B',
      sku: 'SKU002',
      quantity: 5,
      minQuantity: 20,
      price: 150,
      cost: 80,
      margin: 70,
    },
    {
      id: '3',
      name: 'Produto C',
      sku: 'SKU003',
      quantity: 100,
      minQuantity: 30,
      price: 75,
      cost: 30,
      margin: 45,
    },
  ]);

  const getLowStockColor = (quantity: number, minQuantity: number) => {
    if (quantity < minQuantity) return 'bg-red-100 text-red-800';
    if (quantity < minQuantity * 1.5) return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
  };

  const totalValue = products.reduce((acc, p) => acc + (p.quantity * p.cost), 0);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Estoque</h1>
            <SyncIndicator />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <p className="text-sm text-muted mb-1">Total de Produtos</p>
            <p className="text-3xl font-bold text-foreground">{products.length}</p>
          </div>
          <div className="card">
            <p className="text-sm text-muted mb-1">Valor Total do Estoque</p>
            <p className="text-3xl font-bold text-foreground">R$ {totalValue.toFixed(2)}</p>
          </div>
          <div className="card">
            <p className="text-sm text-muted mb-1">Produtos com Baixo Estoque</p>
            <p className="text-3xl font-bold text-red-600">
              {products.filter(p => p.quantity < p.minQuantity).length}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mb-6">
          <button className="btn-primary">+ Novo Produto</button>
        </div>

        {/* Products Table */}
        <div className="card">
          <h2 className="text-lg font-semibold text-foreground mb-4">Produtos</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Produto</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">SKU</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Quantidade</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Preço</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Custo</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Margem</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-border hover:bg-surface transition">
                    <td className="py-3 px-4 text-foreground font-semibold">{product.name}</td>
                    <td className="py-3 px-4 text-foreground text-sm">{product.sku}</td>
                    <td className="py-3 px-4 text-foreground">{product.quantity}</td>
                    <td className="py-3 px-4 text-foreground">R$ {product.price.toFixed(2)}</td>
                    <td className="py-3 px-4 text-foreground">R$ {product.cost.toFixed(2)}</td>
                    <td className="py-3 px-4 text-foreground font-semibold">{product.margin}%</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLowStockColor(product.quantity, product.minQuantity)}`}>
                        {product.quantity < product.minQuantity ? 'Baixo' : product.quantity < product.minQuantity * 1.5 ? 'Atenção' : 'OK'}
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
