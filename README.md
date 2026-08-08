# Coopstar Express

One-page site refatorado para Next.js 15 + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide React.

## Stack

- **Framework:** Next.js 15 (App Router, SSR/SSG)
- **Linguagem:** TypeScript (strict)
- **Estilização:** Tailwind CSS v4 (design tokens com as cores da marca)
- **Animações:** Framer Motion (scroll reveal, transições de menu e FAQ)
- **Ícones:** Lucide React
- **Formulário:** API Route + Nodemailer (SMTP)

## Estrutura

```
src/
├── app/               # layout, páginas, API, sitemap, robots, icon
│   └── api/contato/   # envio do formulário (POST)
├── components/
│   ├── layout/        # Header, Footer, Logo, FloatingCall
│   ├── motion/        # Reveal, Stagger (animações reutilizáveis)
│   ├── sections/      # Hero, Sobre, Diferenciais, Serviços, Processo, FAQ, Contato, Localização
│   └── ui/            # Button, Container, SectionHeading
├── hooks/             # useActiveSection (scroll spy do menu)
└── lib/               # site.ts, content.ts, mail.ts
```

## Rodando localmente

```bash
npm install
npm run dev        # http://localhost:3000
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e configure o SMTP da hospedagem:

```
SMTP_HOST=smtp.coopstarexpress.com.br
SMTP_PORT=587
SMTP_USER=contato@coopstarexpress.com.br
SMTP_PASS=********
MAIL_TO=contato@coopstarexpress.com.br
MAIL_TO_ALT=coopstar_express@hotmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> Sem `SMTP_HOST` configurado, o endpoint `/api/contato` simula o envio (pensado para desenvolvimento local).

## Qualidade

```bash
npm run lint        # ESLint
npm run typecheck   # TypeScript (tsc --noEmit)
npm run build       # Build de produção
```

## Notas

- O site antigo (XHTML/jQuery/PHP) foi preservado na pasta `old/`.
- Imagens originais em `public/imagens/` (hero, sobre e serviços).
- Deploy sugerido: Vercel (integração nativa com Next.js).
