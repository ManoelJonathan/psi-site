# Ciclo de Mudanças - Refatoração FSD & Melhorias

Este arquivo acompanha o progresso das melhorias estruturais e técnicas no projeto `psi-site`.

## 📋 Plano de Ação

### 1. Arquitetura FSD & Organização de Pastas
- [x] Mover modelos e dados de `widgets` para `entities/psychologist` (FSD Compliance)
- [x] Simplificar estrutura da `Home Page` (remover aninhamento `home/home`)
- [x] Atualizar `widgets/index.ts` para exportar todos os componentes da camada

### 2. Abstração de Lógica (Shared)
- [x] Criar `ScrollRevealDirective` em `shared/ui` para animações de entrada
- [x] Refatorar `HeroComponent` para usar a nova diretiva
- [x] Refatorar `AboutComponent` para usar a nova diretiva

### 3. Ajustes de Estilo & Qualidade
- [x] Validar consistência de cores Tailwind no `tailwind.config.js`
- [x] Limpar códigos comentados ou redundantes (se houver)

---

## 📋 Plano de Ação - Fase 2 (Próximos Passos)

### 4. Features & Desacoplamento
- [ ] Criar Feature `book-session` para centralizar lógica de contato (WhatsApp/Links)
- [ ] Mover configuração de contato para um arquivo central de `site-config`

### 5. Performance & Acessibilidade
- [ ] Implementar `NgOptimizedImage` nas imagens principais
- [ ] Revisar `aria-labels` e `alt` tags para acessibilidade

---

## 🚀 Progresso de Execução

- **Branch:** `refactor/fsd-and-improvements`
- **Status Atual:** ✅ Refatoração Concluída com Sucesso!
