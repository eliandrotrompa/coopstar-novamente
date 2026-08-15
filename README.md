# Coopstar Express

One-page site refatorado para Next.js 15 + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide React.

## Stack

- **Framework:** Next.js 15 (App Router, SSR/SSG)
- **Linguagem:** TypeScript (strict)
- **Estilização:** Tailwind CSS v4 (design tokens com as cores da marca)
- **Animações:** Framer Motion (scroll reveal, transições de menu e FAQ)
- **Ícones:** Lucide React
- **Formulário:** Web3Forms (envio direto pelo cliente)

## Estrutura

```
src/
├── app/               # layout, página, sitemap, robots, icon
├── components/
│   ├── layout/        # Header, Footer, Logo, FloatingCall
│   ├── motion/        # Reveal, Stagger (animações reutilizáveis)
│   ├── sections/      # Hero, Sobre, Diferenciais, Serviços, Processo, FAQ, Contato, Localização
│   └── ui/            # Button, Container, SectionHeading
├── hooks/             # useActiveSection (scroll spy do menu)
└── lib/               # site.ts (dados da marca), content.ts (conteúdo das seções)
```

## Rodando localmente

```bash
npm install
npm run dev        # http://localhost:3000
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e defina a URL pública do site:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

O formulário de contato envia direto para o Web3Forms. A `access_key` fica no componente `src/components/sections/Contato.tsx`.

## Qualidade

```bash
npm run lint        # ESLint
npm run typecheck   # TypeScript (tsc --noEmit)
npm run build       # Build de produção
```

## Notas

- O site antigo (XHTML/jQuery/PHP) foi preservado na pasta `old/`.
- Imagens otimizadas em `public/imagens/` (hero, sobre, serviços e frota).
- Deploy sugerido: Vercel (integração nativa com Next.js).
