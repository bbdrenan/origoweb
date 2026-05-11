# Guia de Testes: Sincronização Mobile ↔ Web

## 📋 Checklist de Testes

### 1. Autenticação Compartilhada
- [ ] Fazer login no web e verificar se o token é salvo
- [ ] Fazer login no mobile e verificar se o token é salvo
- [ ] Verificar se ambos usam o mesmo token
- [ ] Fazer logout no web e verificar se o mobile continua autenticado
- [ ] Fazer logout no mobile e verificar se o web continua autenticado

### 2. Sincronização de Vendas
- [ ] Criar venda no web e verificar se aparece no mobile (5s)
- [ ] Criar venda no mobile e verificar se aparece no web (5s)
- [ ] Editar venda no web e verificar se atualiza no mobile
- [ ] Editar venda no mobile e verificar se atualiza no web
- [ ] Deletar venda no web e verificar se desaparece no mobile
- [ ] Deletar venda no mobile e verificar se desaparece no web

### 3. Sincronização de Estoque
- [ ] Adicionar produto no web e verificar no mobile
- [ ] Adicionar produto no mobile e verificar no web
- [ ] Atualizar quantidade no web e verificar no mobile
- [ ] Atualizar quantidade no mobile e verificar no web
- [ ] Verificar se alertas de baixo estoque sincronizam

### 4. Sincronização de Financeiro
- [ ] Adicionar despesa no web e verificar no mobile
- [ ] Adicionar despesa no mobile e verificar no web
- [ ] Verificar se totais (Faturamento, Custos, Lucro) sincronizam
- [ ] Verificar se Ponto de Equilíbrio atualiza em tempo real

### 5. Indicador de Sincronização
- [ ] Verificar se o SyncIndicator mostra "Sincronizando..." durante sincronização
- [ ] Verificar se mostra "Sincronizado" após sucesso
- [ ] Verificar se mostra "Erro" em caso de falha
- [ ] Verificar se timestamp atualiza a cada sincronização

### 6. Modo Offline
- [ ] Desligar internet no web e tentar criar venda
- [ ] Verificar se dados são salvos localmente
- [ ] Ligar internet novamente
- [ ] Verificar se dados sincronizam automaticamente
- [ ] Repetir para mobile

### 7. Performance
- [ ] Medir tempo de sincronização com 10 vendas
- [ ] Medir tempo de sincronização com 100 vendas
- [ ] Medir tempo de sincronização com 1000 vendas
- [ ] Verificar se UI fica responsiva durante sincronização

### 8. Conflitos de Dados
- [ ] Editar mesma venda simultaneamente no web e mobile
- [ ] Verificar qual versão prevalece
- [ ] Verificar se há notificação de conflito
- [ ] Verificar se dados não são perdidos

## 🧪 Testes Manuais

### Teste 1: Sincronização Básica
1. Abra o web em `http://localhost:3000/dashboard`
2. Abra o mobile no Expo Go
3. Crie uma venda no web
4. Aguarde 5 segundos
5. Verifique se a venda aparece no mobile

### Teste 2: Atualização em Tempo Real
1. Abra o web e mobile lado a lado
2. Crie uma venda no web
3. Observe se aparece no mobile em tempo real
4. Edite a venda no mobile
5. Observe se atualiza no web em tempo real

### Teste 3: Modo Offline
1. Abra o web
2. Desabilite internet (DevTools → Network → Offline)
3. Crie uma venda
4. Habilite internet novamente
5. Verifique se a venda sincroniza automaticamente

## 📊 Métricas de Sucesso

| Métrica | Alvo | Status |
|---------|------|--------|
| Tempo de sincronização | < 2s | ⏳ |
| Taxa de sucesso | 99% | ⏳ |
| Conflitos resolvidos | 100% | ⏳ |
| Dados perdidos | 0 | ⏳ |
| UI responsiva | Sempre | ⏳ |

## 🐛 Troubleshooting

### Sincronização não funciona
- [ ] Verificar se ambos estão autenticados
- [ ] Verificar se há conexão de internet
- [ ] Verificar console para erros
- [ ] Reiniciar aplicação

### Dados desincronizados
- [ ] Fazer logout e login novamente
- [ ] Limpar cache do navegador
- [ ] Limpar dados do app mobile
- [ ] Verificar timestamp da última sincronização

### Performance lenta
- [ ] Verificar número de registros
- [ ] Otimizar queries do banco de dados
- [ ] Implementar paginação
- [ ] Usar índices no banco de dados

## ✅ Checklist Final

- [ ] Todos os testes passaram
- [ ] Nenhum dado foi perdido
- [ ] UI permaneceu responsiva
- [ ] Sincronização funcionou em tempo real
- [ ] Modo offline funcionou
- [ ] Conflitos foram resolvidos
- [ ] Performance atendeu aos requisitos
