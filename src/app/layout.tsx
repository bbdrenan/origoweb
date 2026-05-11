import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OrigoERP - Gestão Inteligente para Seu Negócio',
  description: 'Controle vendas, estoque e financeiro em um único lugar. Simples, rápido e eficiente.',
  icons: {
    icon: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663598926595/vGCnYfGcCfLTaGHB.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#003D82" />
      </head>
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
