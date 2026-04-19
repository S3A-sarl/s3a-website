# CLAUDE.md

Contexte pour les futures sessions Claude Code sur ce dépôt.

## Projet

Site vitrine commercial de **S3A** (Adduction – Aménagement – Assainissement, SARL AU), société marocaine de chaudronnerie / tuyauterie / charpente métallique créée en 2005 à Kénitra. Objectif : présence web B2B, déployée sur **Vercel**, pour générer des demandes de devis et des candidatures.

- Langue : **français uniquement**.
- Cible : clients B2B (bâtiment, industrie) au Maroc et à l'étranger.
- Email de destination des formulaires : `s3a-sa@hotmail.fr`.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (configuration par `@theme` dans [app/globals.css](app/globals.css), pas de fichier de config JS)
- **nodemailer** sur le **SMTP interne** du client (pas Resend / SendGrid)
- **Zod** pour la validation des payloads API
- Déploiement **Vercel** (preview sur chaque PR, prod sur `main`)
- Repo GitHub : `S3A-sarl/s3a-website`

## Arborescence

```
app/
  layout.tsx             # Header + Footer globaux, metadata racine, JSON-LD Organization
  page.tsx               # Accueil
  a-propos/page.tsx
  services/
    page.tsx             # Index des 8 activités
    [slug]/page.tsx      # SSG via generateStaticParams (8 pages)
  realisations/page.tsx  # Galerie filtrable
  contact/page.tsx       # Coordonnées + carte + formulaire
  recrutement/page.tsx   # Formulaire + upload CV PDF
  api/
    contact/route.ts     # POST JSON → SMTP
    recrutement/route.ts # POST multipart (CV ≤ 5 Mo PDF) → SMTP
  sitemap.ts             # Dynamique depuis lib/services
  robots.ts
  not-found.tsx
components/
  Header.tsx, Footer.tsx, Logo.tsx, PageHeader.tsx,
  Gallery.tsx, ContactForm.tsx, RecrutementForm.tsx, JsonLd.tsx
lib/
  siteConfig.ts          # Source unique pour NAP, nav, URL
  services.ts            # Data des 8 activités (slug, titre, description, points, produits)
  realisations.ts        # Data de la galerie + catégories
  mailer.ts              # Transporter nodemailer + helper sendMail + escapeHtml
  rateLimit.ts           # 5 requêtes / 10 min / IP, en mémoire
```

`Archives/` (plaquette PDF + 4 JPG sources) est **ignoré par Git** : source interne utilisée pour extraire le contenu.

## Conventions

- Toutes les données éditoriales passent par `lib/` — ne pas dupliquer dans les pages. Ajouter un service = éditer [lib/services.ts](lib/services.ts), le sitemap, la navigation et les pages détail s'adaptent automatiquement.
- Palette CSS via variables Tailwind v4 : `--color-s3a-red` (#d9423c), `--color-s3a-red-dark`, `--color-s3a-anthracite`, `--color-s3a-grey`, `--color-s3a-sand`. Utiliser les classes `bg-s3a-red`, `text-s3a-anthracite`, etc.
- Typographie : **Manrope** via `next/font/google`, chargée dans [app/layout.tsx](app/layout.tsx).
- Toute nouvelle page doit :
  - exporter un `metadata` typé avec `title`, `description`, `alternates.canonical`,
  - afficher un `<BreadcrumbJsonLd>` en fin de page,
  - inclure `<PageHeader>` pour cohérence visuelle.
- Les routes `/api/*` sont en `runtime = "nodejs"` (nodemailer incompatible Edge).
- Anti-spam sur les formulaires : champ honeypot `website` (hidden) + `rateLimit(key)` par IP.

## Variables d'environnement

Toutes définies dans [.env.example](.env.example) :

```
SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS
CONTACT_TO=s3a-sa@hotmail.fr
CONTACT_FROM="S3A Site <noreply@s3a.ma>"
NEXT_PUBLIC_SITE_URL=https://s3a.ma
```

En dev local : copier en `.env.local`. En prod : renseigner dans le dashboard Vercel.

## Commandes

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build + génération 20 pages statiques
npm run lint
```

## État actuel

Premier shot commité (`129c1ec`) et poussé sur `origin/main`. Le site build sans erreur (20 pages statiques, 2 routes API dynamiques). Toutes les pages répondent 200 en dev.

**Non encore fait** :
- Photos réelles dans `public/images/services/` et `public/images/realisations/` — les emplacements sont référencés dans `lib/services.ts` et `lib/realisations.ts`, mais le rendu actuel affiche un dégradé placeholder (voir `<Gallery>` et `HomePage`).
- Connexion du repo à Vercel + variables d'env en prod.
- Choix et configuration du domaine (`s3a.ma` à confirmer).
- Mentions légales / conformité loi marocaine 09-08.
- Contenu éditorial long pour `/a-propos` et les pages services (actuellement suffisant pour un v1 mais à étoffer).

## Plan initial

Plan complet approuvé archivé ici : [/Users/mac123/.claude/plans/je-souhaite-faire-un-effervescent-pixel.md](/Users/mac123/.claude/plans/je-souhaite-faire-un-effervescent-pixel.md).
