import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OrigoERP Web',
  description: 'Gestão de vendas e financeiro para pequenos negócios',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
