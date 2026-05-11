# Guia de Acessibilidade: WCAG 2.1 AA

## ♿ Princípios WCAG

1. **Perceptível**: Informação acessível a todos os sentidos
2. **Operável**: Navegação via teclado
3. **Compreensível**: Linguagem clara e previsível
4. **Robusto**: Compatível com tecnologias assistivas

## 🎨 Implementações

### 1. Contraste de Cores

```typescript
// ✅ Contraste mínimo 4.5:1 para texto normal
// ✅ Contraste mínimo 3:1 para texto grande

// Verificar contraste
// https://webaim.org/resources/contrastchecker/

// Tailwind com cores acessíveis
<div className="bg-white text-gray-900"> {/* 21:1 */}
  <button className="bg-blue-600 text-white"> {/* 8.59:1 */}
    Acessível
  </button>
</div>
```

### 2. Navegação por Teclado

```typescript
// ✅ Todos os elementos interativos acessíveis
<button
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
  tabIndex={0}
>
  Clique ou pressione Enter
</button>

// ✅ Focus visível
<style>{`
  button:focus-visible {
    outline: 3px solid #0066cc;
    outline-offset: 2px;
  }
`}</style>
```

### 3. ARIA Labels

```typescript
// ✅ Descrever elementos
<button aria-label="Fechar menu">
  <X size={24} />
</button>

// ✅ Indicar estado
<button aria-pressed={isActive}>
  Toggle
</button>

// ✅ Descrever regiões
<nav aria-label="Navegação principal">
  {/* ... */}
</nav>

// ✅ Live regions
<div aria-live="polite" aria-atomic="true">
  {message}
</div>
```

### 4. Texto Alternativo

```typescript
// ✅ Descrever imagens
<img
  src="/logo.png"
  alt="Logo OrigoERP - Gestão de negócios"
  width={200}
  height={200}
/>

// ❌ Evitar
<img src="/logo.png" alt="logo" />
<img src="/logo.png" alt="image" />
```

### 5. Estrutura Semântica

```typescript
// ✅ Usar elementos semânticos
<header>
  <nav aria-label="Principal">
    {/* ... */}
  </nav>
</header>

<main>
  <article>
    <h1>Título do artigo</h1>
    <p>Conteúdo...</p>
  </article>
</main>

<footer>
  <p>&copy; 2026 OrigoERP</p>
</footer>

// ❌ Evitar
<div id="header">
  <div id="nav">
    {/* ... */}
  </div>
</div>
```

### 6. Formulários Acessíveis

```typescript
// ✅ Labels associados
<label htmlFor="email">Email:</label>
<input
  id="email"
  type="email"
  required
  aria-required="true"
  aria-describedby="email-help"
/>
<span id="email-help">Formato: nome@example.com</span>

// ✅ Validação acessível
<input
  type="email"
  aria-invalid={hasError}
  aria-describedby={hasError ? 'email-error' : undefined}
/>
{hasError && <span id="email-error">Email inválido</span>}
```

### 7. Listas e Tabelas

```typescript
// ✅ Listas semânticas
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

// ✅ Tabelas com headers
<table>
  <thead>
    <tr>
      <th scope="col">Produto</th>
      <th scope="col">Preço</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Produto A</td>
      <td>R$ 100</td>
    </tr>
  </tbody>
</table>
```

### 8. Animações e Movimento

```typescript
// ✅ Respeitar preferência de movimento reduzido
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

<div
  className={prefersReducedMotion ? '' : 'animate-fade'}
>
  Conteúdo
</div>

// CSS
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 9. Modo Escuro

```typescript
// ✅ Suportar preferência do sistema
const prefersDarkMode = window.matchMedia(
  '(prefers-color-scheme: dark)'
).matches;

// Tailwind dark mode
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Conteúdo
</div>
```

### 10. Leitor de Tela

```typescript
// ✅ Descrever conteúdo dinâmico
<div role="status" aria-live="polite">
  {isLoading ? 'Carregando...' : 'Pronto'}
</div>

// ✅ Pular conteúdo repetitivo
<a href="#main-content" className="sr-only">
  Pular para conteúdo principal
</a>

// CSS para sr-only
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

## 🧪 Ferramentas de Teste

```bash
# axe DevTools
# https://www.deque.com/axe/devtools/

# WAVE
# https://wave.webaim.org/

# Lighthouse
npm run build
npx lighthouse https://www.origoerp.com.br --view

# Screen Reader (NVDA)
# https://www.nvaccess.org/

# Keyboard Navigation
# Tab, Shift+Tab, Enter, Space, Arrow Keys
```

## ✅ Checklist de Acessibilidade

- [ ] Contraste de cores 4.5:1
- [ ] Navegação por teclado completa
- [ ] ARIA labels apropriados
- [ ] Texto alternativo em imagens
- [ ] Estrutura semântica correta
- [ ] Formulários acessíveis
- [ ] Tabelas com headers
- [ ] Respeitar prefers-reduced-motion
- [ ] Modo escuro suportado
- [ ] Compatível com leitores de tela
- [ ] Sem erros axe DevTools
- [ ] Testado com teclado
- [ ] Testado com leitor de tela

## 📊 Conformidade WCAG 2.1

| Nível | Requisitos | Status |
|-------|-----------|--------|
| A | Básico | ✅ |
| AA | Recomendado | ✅ |
| AAA | Avançado | ⏳ |

## 📞 Suporte

- WCAG Docs: https://www.w3.org/WAI/WCAG21/quickref/
- WebAIM: https://webaim.org/
- MDN Accessibility: https://developer.mozilla.org/en-US/docs/Web/Accessibility
