# Guia de Setup: Firebase para OrigoERP

## 📋 Pré-requisitos

- Conta Google
- Projeto Firebase criado
- Firebase CLI instalado

## 🚀 Passo 1: Criar Projeto Firebase

### 1.1 Acessar Firebase Console
1. Acesse https://console.firebase.google.com
2. Clique em "Criar projeto"
3. Nome: `origoeRP`
4. Aceite os termos
5. Clique em "Continuar"

### 1.2 Configurar Projeto
1. Desabilite Google Analytics (opcional)
2. Clique em "Criar projeto"
3. Aguarde 1-2 minutos

## 🔐 Passo 2: Configurar Autenticação

### 2.1 Habilitar Email/Senha
1. No Firebase Console, vá para **Authentication**
2. Clique em **Sign-in method**
3. Ative **Email/Password**
4. Clique em **Save**

### 2.2 Habilitar Google Sign-In (Opcional)
1. Em **Sign-in method**, ative **Google**
2. Selecione seu email de suporte
3. Clique em **Save**

## 📊 Passo 3: Configurar Realtime Database

### 3.1 Criar Database
1. No Firebase Console, vá para **Realtime Database**
2. Clique em **Criar banco de dados**
3. Localização: `southamerica-east1` (São Paulo)
4. Modo de segurança: **Modo de teste** (por enquanto)
5. Clique em **Ativar**

### 3.2 Importar Regras de Segurança
1. Clique na aba **Regras**
2. Copie o conteúdo de `FIREBASE_RULES.json`
3. Cole nas regras
4. Clique em **Publicar**

## 🔑 Passo 4: Obter Credenciais

### 4.1 Criar Aplicação Web
1. No Firebase Console, clique no ícone de engrenagem
2. Vá para **Configurações do projeto**
3. Clique em **Seus apps**
4. Clique em **Adicionar app** → **Web**
5. Nome: `OrigoWeb`
6. Clique em **Registrar app**

### 4.2 Copiar Credenciais
```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "origoeRP.firebaseapp.com",
  databaseURL: "https://origoeRP-default-rtdb.southamerica-east1.firebasedatabase.app",
  projectId: "origoeRP",
  storageBucket: "origoeRP.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};
```

## 🔧 Passo 5: Configurar Variáveis de Ambiente

### 5.1 Criar `.env.local`
```bash
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=origoeRP.firebaseapp.com
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://origoeRP-default-rtdb.southamerica-east1.firebasedatabase.app
NEXT_PUBLIC_FIREBASE_PROJECT_ID=origoeRP
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=origoeRP.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123def456
```

### 5.2 Criar `.env.production`
```bash
# Mesmas variáveis acima
```

## 📦 Passo 6: Instalar Dependências

```bash
cd origoweb
npm install firebase
```

## 🧪 Passo 7: Testar Conexão

### 7.1 Criar Teste Simples
```typescript
import { auth, database } from '@/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';

// Teste de autenticação
const testAuth = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      'test@example.com',
      'password123'
    );
    console.log('✅ Autenticação funcionando');
  } catch (error) {
    console.error('❌ Erro de autenticação:', error);
  }
};

// Teste de banco de dados
const testDatabase = async (uid: string) => {
  try {
    await set(ref(database, `users/${uid}/test`), {
      message: 'Hello Firebase!',
      timestamp: new Date().toISOString(),
    });
    console.log('✅ Banco de dados funcionando');
  } catch (error) {
    console.error('❌ Erro de banco de dados:', error);
  }
};
```

### 7.2 Executar Testes
```bash
npm run dev
# Abra http://localhost:3000
# Verifique console para mensagens de sucesso
```

## 🔄 Passo 8: Sincronizar com OrigoERP Mobile

### 8.1 Usar Mesmas Credenciais
1. No OrigoERP Mobile, adicione as mesmas credenciais do Firebase
2. Ambos usarão o mesmo banco de dados
3. Dados sincronizarão automaticamente

### 8.2 Testar Sincronização
1. Crie uma venda no web
2. Verifique se aparece no mobile (5-10 segundos)
3. Crie uma venda no mobile
4. Verifique se aparece no web

## 📊 Estrutura do Banco de Dados

```
users/
  {uid}/
    profile/
      name: string
      email: string
      businessName: string
      avatar: string
    sales/
      {saleId}/
        date: string
        product: string
        quantity: number
        price: number
        total: number
        status: string
    products/
      {productId}/
        name: string
        sku: string
        quantity: number
        price: number
        cost: number
        margin: number
    expenses/
      {expenseId}/
        date: string
        category: string
        amount: number
        description: string
    costs/
      {costId}/
        date: string
        category: string
        amount: number
    settings/
      theme: string
      currency: string
      language: string
    backups/
      {backupId}/
        date: string
        data: object
```

## 🆘 Troubleshooting

### Erro: "Permission denied"
- Verifique as regras de segurança
- Certifique-se de que está autenticado
- Verifique se o UID está correto

### Erro: "Database not found"
- Verifique se o database foi criado
- Verifique a URL do database
- Verifique se está na região correta

### Erro: "Auth/invalid-api-key"
- Verifique as credenciais no `.env.local`
- Regenere as credenciais se necessário
- Verifique se a chave é para web (não mobile)

## ✅ Checklist Final

- [ ] Projeto Firebase criado
- [ ] Autenticação configurada
- [ ] Realtime Database criado
- [ ] Regras de segurança publicadas
- [ ] Credenciais copiadas
- [ ] Variáveis de ambiente configuradas
- [ ] Dependências instaladas
- [ ] Testes passaram
- [ ] Sincronização funcionando

## 📞 Suporte

- Documentação Firebase: https://firebase.google.com/docs
- Console Firebase: https://console.firebase.google.com
- Comunidade: https://stackoverflow.com/questions/tagged/firebase
