# Guia de Deploy: OrigoWeb no Vercel

## 📋 Pré-requisitos

- Conta Vercel (https://vercel.com)
- Projeto Next.js pronto
- Git configurado
- Domínio `.com.br` (opcional)

## 🚀 Passo 1: Preparar o Projeto

### 1.1 Verificar Build Local
```bash
cd /home/ubuntu/origoweb
npm run build
npm run start
```

Acesse `http://localhost:3000` e verifique se tudo funciona.

### 1.2 Criar Arquivo `.env.local`
```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.origoerp.com.br
NEXT_PUBLIC_APP_NAME=OrigoERP Web
NODE_ENV=production
```

### 1.3 Criar `.gitignore`
```
node_modules/
.next/
.env.local
.env.*.local
dist/
build/
*.log
```

## 📦 Passo 2: Fazer Push para GitHub

### 2.1 Inicializar Git
```bash
cd /home/ubuntu/origoweb
git init
git add .
git commit -m "Initial commit: OrigoWeb setup"
```

### 2.2 Criar Repositório no GitHub
1. Acesse https://github.com/new
2. Nome: `origoweb`
3. Descrição: "OrigoERP Web - Versão web sincronizada com mobile"
4. Público ou Privado (sua escolha)
5. Clique em "Create repository"

### 2.3 Fazer Push
```bash
git remote add origin https://github.com/seu-usuario/origoweb.git
git branch -M main
git push -u origin main
```

## 🌐 Passo 3: Deploy no Vercel

### 3.1 Conectar Vercel com GitHub
1. Acesse https://vercel.com/dashboard
2. Clique em "New Project"
3. Selecione "Import Git Repository"
4. Autorize Vercel a acessar seu GitHub
5. Selecione o repositório `origoweb`

### 3.2 Configurar Projeto
1. **Project Name**: `origoweb`
2. **Framework Preset**: Next.js
3. **Root Directory**: `./`
4. **Build Command**: `npm run build`
5. **Output Directory**: `.next`
6. **Install Command**: `npm install`

### 3.3 Variáveis de Ambiente
Adicione as variáveis:
```
NEXT_PUBLIC_API_URL=https://api.origoerp.com.br
NEXT_PUBLIC_APP_NAME=OrigoERP Web
```

### 3.4 Deploy
Clique em "Deploy" e aguarde (2-5 minutos)

## 🎯 Passo 4: Configurar Domínio (Opcional)

### 4.1 Apontar Domínio para Vercel
1. No Vercel, vá para **Settings → Domains**
2. Adicione seu domínio: `www.origoerp.com.br`
3. Copie os nameservers do Vercel
4. No Registro.br, configure os nameservers

### 4.2 Configurar SSL
1. Vercel configura SSL automaticamente
2. Aguarde 24-48 horas para propagação DNS
3. Verifique em https://www.origoerp.com.br

## ✅ Passo 5: Verificar Deploy

### 5.1 Testes Básicos
- [ ] Página carrega sem erros
- [ ] Login funciona
- [ ] Dashboard exibe dados
- [ ] Sincronização funciona
- [ ] Modo escuro funciona
- [ ] Responsivo em mobile

### 5.2 Performance
```bash
# Verificar performance
curl -I https://origoweb.vercel.app
```

Métricas esperadas:
- Time to First Byte (TTFB): < 200ms
- First Contentful Paint (FCP): < 1s
- Largest Contentful Paint (LCP): < 2.5s

### 5.3 Monitoramento
1. Acesse https://vercel.com/dashboard
2. Vá para seu projeto
3. Monitore: Analytics, Logs, Deployments

## 🔄 Passo 6: Configurar CI/CD

### 6.1 Deploy Automático
Vercel faz deploy automático a cada push em `main`:
1. Faça commit e push
2. Vercel detecta mudanças
3. Build automático
4. Deploy automático

### 6.2 Preview Deployments
Para cada Pull Request, Vercel cria uma preview URL:
1. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
2. Faça push: `git push origin feature/nova-funcionalidade`
3. Crie Pull Request no GitHub
4. Vercel cria preview URL automaticamente

## 📊 Passo 7: Monitoramento em Produção

### 7.1 Logs
```bash
# Ver logs em tempo real
vercel logs --follow
```

### 7.2 Alertas
Configure alertas para:
- [ ] Erros de build
- [ ] Erros de runtime
- [ ] Performance degradada
- [ ] Downtime

### 7.3 Analytics
Verifique regularmente:
- [ ] Número de requisições
- [ ] Tempo de resposta
- [ ] Taxa de erro
- [ ] Uso de banda

## 🆘 Troubleshooting

### Build falha
```bash
# Verificar logs
vercel logs --follow

# Limpar cache
vercel env pull
npm install
npm run build
```

### Domínio não funciona
- [ ] Verificar nameservers no Registro.br
- [ ] Aguardar propagação DNS (24-48h)
- [ ] Testar com `nslookup www.origoerp.com.br`

### Performance lenta
- [ ] Verificar tamanho do bundle
- [ ] Otimizar imagens
- [ ] Implementar lazy loading
- [ ] Usar CDN

## ✨ Checklist Final

- [ ] Projeto buildado localmente
- [ ] Código no GitHub
- [ ] Vercel conectado
- [ ] Deploy bem-sucedido
- [ ] Domínio configurado (opcional)
- [ ] SSL ativo
- [ ] Testes passaram
- [ ] Monitoramento ativo
- [ ] CI/CD funcionando

## 📞 Suporte

- Documentação Vercel: https://vercel.com/docs
- Status Page: https://www.vercelstatus.com
- Comunidade: https://github.com/vercel/next.js/discussions
