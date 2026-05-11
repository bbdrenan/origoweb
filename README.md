# OrigoERP Web

Versão web do OrigoERP sincronizada com o app mobile, permitindo que usuários gerenciem suas vendas, estoque e financeiro tanto no computador quanto no celular com sincronização em tempo real.

## 🎯 Funcionalidades

### Dashboard
- KPIs em tempo real (Faturamento, Lucro, Ticket Médio, Margem)
- Indicador de sincronização
- Ações rápidas
- Status do sistema

### Vendas
- Histórico de vendas
- Resumo de vendas
- Ticket médio
- Filtros e busca
- Sincronização automática

### Estoque
- Gestão de produtos
- Controle de quantidade
- Alertas de baixo estoque
- Valor total do estoque
- Margem de lucro por produto

### Financeiro
- KPIs financeiros
- Análise de Ponto de Equilíbrio
- Gestão de despesas
- Fluxo de caixa
- Relatórios

### Autenticação
- Login com email/senha
- Registro de novo usuário
- Persistência de sessão
- Logout

### Sincronização
- Sincronização automática a cada 5 segundos
- Sincronização ao retornar ao foco da aba
- Indicador visual de status
- Tratamento de erros

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
cd origoweb
npm install
```

### Desenvolvimento
```bash
npm run dev
```

Acesse `http://localhost:3000`

### Build
```bash
npm run build
npm run start
```

## 📁 Estrutura do Projeto

```
origoweb/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout raiz
│   │   ├── page.tsx            # Página inicial
│   │   ├── globals.css         # Estilos globais
│   │   ├── login/
│   │   ├── register/
│   │   ├── dashboard/
│   │   ├── vendas/
│   │   ├── estoque/
│   │   └── financeiro/
│   ├── components/
│   │   ├── KPICard.tsx
│   │   └── SyncIndicator.tsx
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   └── useRealtimeSync.ts
│   ├── types/
│   │   └── auth.ts
│   └── lib/
├── public/
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
└── postcss.config.js
```

## 🔐 Autenticação

A autenticação é compartilhada entre web e mobile usando JWT tokens armazenados em localStorage.

### Login
```typescript
const { login } = useAuth();
await login('email@example.com', 'password');
```

### Logout
```typescript
const { logout } = useAuth();
await logout();
```

## 🔄 Sincronização

A sincronização é automática e acontece a cada 5 segundos, ao retornar ao foco da aba, ou manualmente.

### Usar Sincronização
```typescript
const { isSyncing, syncStatus, data, performSync } = useRealtimeSync({
  onSync: (data) => console.log('Sincronizado:', data),
  onError: (error) => console.error('Erro:', error),
  pollInterval: 5000,
});
```

## 🎨 Temas

O projeto suporta temas claro e escuro usando CSS variables.

### Cores Disponíveis
- `background`: Cor de fundo
- `foreground`: Cor de texto principal
- `primary`: Cor primária (azul)
- `surface`: Cor de superfícies (cards)
- `muted`: Cor de texto secundário
- `border`: Cor de bordas
- `success`: Cor de sucesso (verde)
- `warning`: Cor de aviso (amarelo)
- `error`: Cor de erro (vermelho)

## 📊 Componentes

### KPICard
Exibe um KPI com título, valor, mudança percentual e ícone.

```tsx
<KPICard
  title="Faturamento"
  value="R$ 12.500,00"
  change={15}
  trend="up"
  icon={<Icon />}
/>
```

### SyncIndicator
Exibe o status de sincronização em tempo real.

```tsx
<SyncIndicator />
```

## 🧪 Testes

Consulte `GUIA_TESTES_SINCRONIZACAO.md` para testes completos.

## 🚀 Deploy

Consulte `GUIA_DEPLOY_VERCEL.md` para instruções de deploy no Vercel.

## 📚 Documentação

- [Guia de Testes](./GUIA_TESTES_SINCRONIZACAO.md)
- [Guia de Deploy](./GUIA_DEPLOY_VERCEL.md)

## 🤝 Contribuindo

1. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
2. Faça commit: `git commit -m "Add nova funcionalidade"`
3. Faça push: `git push origin feature/nova-funcionalidade`
4. Abra um Pull Request

## 📄 Licença

MIT

## 📞 Suporte

Para suporte, abra uma issue no GitHub ou entre em contato em support@origoerp.com.br

## 🎉 Créditos

Desenvolvido com ❤️ usando Next.js, TypeScript, Tailwind CSS e Zustand.
