# Jaco Locação — Guia de Transferência Técnica (Handoff)

*Entrega: julho/2026 · Desenvolvido por Yuri Correia (Studio Brave)*

## Estado entregue (medido em 09/07/2026 — PageSpeed Insights)

| Métrica | Celular | Computador |
|---|---|---|
| Desempenho | **97** | **99** |
| Acessibilidade | **100** | **100** |
| Práticas recomendadas | **100** | **100** |
| SEO | **100** | **100** |

Auditoria técnica (squirrelscan, 230+ critérios): 75/100 — era 56/100 em junho/2026.

---

## Stack

- **Next.js 14 (App Router)** + Tailwind CSS — código em `src/`
- **Supabase** — banco do blog (tabela `blog_posts`) + storage de imagens
- **Vercel** — hospedagem, deploy e cron do blog
- **Cloudflare** — só DNS (conta da própria Jaco), registros em "DNS only" (nuvem cinza)

## Rodar localmente

```bash
npm install
# criar .env.local com as variáveis abaixo
npm run dev
```

Variáveis de ambiente (valores entregues por canal seguro, nunca por chat aberto):

| Variável | Função |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL do projeto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Chave pública (protegida por RLS) |
| `SUPABASE_SERVICE_ROLE_KEY` | Chave admin — usada pelo painel e pelo cron |
| `ADMIN_PASSWORD` / `ADMIN_SECRET` | Login do painel `/seoblog` |
| `CRON_SECRET` | Autoriza o cron de publicação (ver abaixo) |

## Banco de dados — como assumir (sem depender de ninguém)

O blog roda em Postgres (Supabase). A migração é autônoma:

1. Criem um projeto novo (gratuito) em supabase.com na conta de vocês
2. Abram o **SQL Editor** → colem o conteúdo de **`migracao-banco.sql`**
   (na raiz deste repositório) → **Run**. Isso cria a tabela, as regras de
   segurança e importa **todos os 25 posts** (publicados + os agendados do cron)
3. Criem o bucket de imagens: **Storage → New bucket** → nome `blog-images` →
   marcar **Public**. (As imagens já existentes estão em `public/blog-images/`
   e `public/frota/` deste repo — nada a migrar; o bucket é só pros uploads futuros)
4. Peguem as chaves do projeto de vocês (Settings → API): `URL`, `anon key` e
   `service_role key` → usar nas variáveis da Vercel (tabela abaixo)

> As chaves do Supabase nas envs da Vercel devem ser **as do projeto de vocês**,
> não as antigas. `ADMIN_PASSWORD`/`ADMIN_SECRET` podem ser o que vocês definirem.

## Blog — painel administrativo

- Painel em **`/seoblog`** (senha de administrador já entregue).
- Criar/editar posts: título, slug, resumo, conteúdo (aceita HTML), categoria,
  palavra-chave, meta title/description, imagem de capa (upload).
- Os posts usam ISR com cache de 5 minutos — **alterações levam até 5 min para
  aparecer no ar**. Não é bug.

## ⚠️ Publicação automática (cron) — LER ANTES DE MEXER

Existe uma esteira de publicação automática (`/api/cron/publish-scheduled` +
`vercel.json`) que roda todo dia às 12:00 UTC (9h de Brasília) e publica os
rascunhos do plano editorial na data agendada. **Posts restantes e datas:**

| Data | Post |
|---|---|
| 17/07 | plataforma-articulada-eletrica-ou-diesel |
| 21/07 | alcance-horizontal-plataforma-articulada |
| 24/07 | plataforma-articulada-manutencao-fachadas |
| 28/07 | plataforma-articulada-manutencao-industrial |
| 31/07 | plataforma-tesoura-eletrica-onde-usar |
| 04/08 | plataforma-tesoura-ou-andaime |
| 07/08 | plataforma-elevatoria-para-galpoes-industriais |
| 11/08 | locacao-plataforma-elevatoria-florianopolis |

- O cron só publica **esses slugs** (lista fixa no código) — rascunhos novos
  criados no painel nunca são publicados automaticamente.
- Para o cron funcionar no novo projeto Vercel, defina a env `CRON_SECRET`
  (qualquer string longa aleatória). Sem ela, o cron não roda — nesse caso,
  publique manualmente pelo toggle do painel nas datas acima.
- Depois de 11/08 a rota fica inerte (pode remover ou reaproveitar).

## Deploy na Vercel (novo dono)

1. Importar este repositório na conta Vercel de vocês (Add New → Project)
2. Configurar as variáveis de ambiente da tabela acima (Production)
3. Adicionar os domínios `jacolocadora.com.br` e `www.jacolocadora.com.br`
4. A Vercel vai indicar os valores de DNS — atualizar no Cloudflare:
   - `@` → registro A (o valor atual `76.76.21.21` normalmente é mantido)
   - `www` → CNAME com o valor **específico** que a Vercel mostrar pro projeto novo
5. **Manter os registros com a nuvem CINZA ("DNS only")** — ver aviso abaixo

## ⚠️ O que NÃO fazer (histórico de incidentes reais)

- **Não ligar o proxy laranja do Cloudflare** nos registros do site. Já causou:
  queda total do site (erro 1000, 09/07), erros de hidratação do React
  (Email Obfuscation reescrevendo o HTML) e bloqueio de ferramentas de medição.
- **Não adicionar gtag.js/GA4 manual no código** — o GA4 (G-Z3CDLTLXVP) já é
  carregado pelo GTM (GTM-K9G8W3CJ). Duplicar = pageviews contados em dobro
  (já aconteceu; corrigido em julho).
- **Não remover o componente `DelayedGTM`** (`src/components/DelayedGTM.tsx`):
  ele carrega o GTM na primeira interação do usuário — é o que sustenta o 97
  de performance mobile. O rastreamento continua completo.
- **Não formatar datas com `new Date('YYYY-MM-DD')`** — no fuso do Brasil isso
  exibe o dia anterior e quebra a hidratação. Usar `src/utils/format-date.ts`.
- **Não afrouxar os headers de CSP** (`next.config.mjs`) sem testar o console —
  eles já estão calibrados para liberar Google Ads/GTM e bloquear o resto.

## Pendências conhecidas (não são bugs)

- **DKIM do Google Workspace** (e-mail do domínio raiz) não configurado —
  ativar em admin.google.com → Apps → Gmail → Autenticar e-mail, e criar o TXT
  no Cloudflare. Depois de 2-4 semanas, subir o DMARC de `p=none` para `p=quarantine`.
- **Newsletter do rodapé não está conectada** a nenhum serviço — conectar ou remover.
- **Posts antigos do blog** (anteriores a julho/2026) têm conteúdo curto — vale
  reescrever com +300 palavras cada.

## Estrutura de rotas

```
/                        home
/frota                   frota completa
/plataformaselevatorias  página pilar de plataformas
/maquinario              máquinas pesadas
/sobre · /contato        institucionais
/blog · /blog/[slug]     blog (Supabase)
/seoblog                 painel admin do blog
/politica-de-privacidade LGPD
/api/cron/...            publicação automática
```
