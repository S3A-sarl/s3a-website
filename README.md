# S3A — Site Web

Site vitrine commercial de la société **S3A**, à développer en Next.js et à déployer sur Vercel.

---

## 1. Informations sur l'entreprise

### Identité

- **Dénomination sociale** : Adduction – Aménagement – Assainissement
- **Forme juridique** : SARL d'associé unique (SARL AU)
- **Acronyme commercial** : **S3A**
- **Année de création** : **2005**
- **Pays** : Maroc

### Signature de marque

> **ADDUCTION – AMENAGEMENT – ASSAINISSEMENT**
>
> Chaudronnerie · Tuyauterie · Charpente · Pièces Mécano-Soudées
>
> **Fabrication et Montage**

### Identité visuelle (extraite de la plaquette)

- Logo : monogramme **S3A** dans un cercle, avec un chevron/toiture stylisé au-dessus.
- Palette dominante : **rouge** (fond principal du logo, ~`#D9423C`), **gris anthracite**, **blanc**, **noir**.
- Style général : industriel, sobre, photos de chantier plein cadre.

### Coordonnées

| Type | Valeur |
|---|---|
| Adresse | Lot n°56 A, Zone Industrielle, Bir Rami, **Kénitra** (Maroc) |
| Téléphone | **05 37 36 30 41** |
| Fax | 05 37 36 32 48 |
| Email | **s3a-sarl@hotmail.fr** |

### Présentation

> La dénomination sociale de la société est **Adduction – Aménagement – Assainissement (S3A SARL d'associé unique)**.
>
> S3A a été créée en **2005** et a développé son activité dans la fabrication de pièces de chaudronnées et des travaux de tôlerie.
>
> Ses champs d'actions sont le bâtiment et l'industrie. Ses fabrications sont pour la plupart réalisées à partir de plans fournis par ses clients. De par son personnel qualifié et son parc de machines récentes, la société S3A offre simultanément des moyens et un savoir-faire en **cisaillage, pliage, poinçonnage, cintrage et soudage**.

### Activités & services

La société exerce directement, en participation ou pour un tiers, au Maroc et à l'étranger, dans les 8 domaines suivants :

1. **Structures métalliques** — charpente, passerelles, bâtiments industriels.
2. **Tuyauterie gros diamètre** — collecteurs, pièces spéciales gros diamètre.
3. **Pièces spéciales et conduite** — cônes de réduction, coudes, tés, stabilisateurs, colliers de prise en charge, éléments en esse, crépines, manchettes.
4. **Raccord** — Joint Gebault, Joint de Démontage A.B, brides pleines, adaptateurs à bride, brides plates à souder.
5. **Pièce de regard** — échelons, capots anti-vandale col de cygne, caillebotis, capot bombé, échelles.
6. **Pose et raccordement de conduite** — travaux de pose sur chantiers (adduction d'eau, assainissement).
7. **Pièces spéciales en inox** — fenêtres, portes, escaliers, garde-corps sur mesure.
8. **Panneaux / Balisage** — balisage de chantier, panneaux de chantier.

### Savoir-faire technique

- **Procédés** : cisaillage, pliage, poinçonnage, cintrage, soudage.
- **Matériaux** : acier, fonte, inox.
- **Fabrications** réalisées à partir de plans clients (travail à la commande).
- Personnel qualifié et parc de machines récent.

### Clients & marchés cibles

- Cible B2B : **bâtiment** et **industrie**.
- Interventions au Maroc et à l'étranger.
- Secteurs typiques : adduction d'eau potable, assainissement, travaux publics, industrie.

### Sources

Toutes ces informations sont extraites du dossier [Archives/](Archives/) :
- [Dossier de présentation s3a.pdf](Archives/Dossier%20de%20pr%C3%A9sentation%20s3a.pdf)
- 4 pages JPG de la plaquette commerciale (couverture, présentation, pages services).

---

## 2. Plan du site web

### Objectifs

1. Donner une **présence web professionnelle** à S3A (absente aujourd'hui).
2. **Vitrine B2B** : présenter l'entreprise, ses 8 activités et ses réalisations.
3. **Générer des demandes** : devis entrants + candidatures spontanées via email (SMTP interne du client).
4. **SEO local Maroc** : se positionner sur les requêtes « chaudronnerie Kénitra », « tuyauterie gros diamètre Maroc », etc.

### Stack technique

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- `next/image` pour l'optimisation images, `next/font` pour les polices
- **nodemailer** branché sur le SMTP interne de S3A pour les formulaires
- **Zod** pour la validation des payloads API
- Déploiement **Vercel** (preview sur chaque PR, prod sur `main`)
- Langue : **français** uniquement

### Arborescence

| Route | Contenu |
|---|---|
| `/` | Accueil — hero, pitch, aperçu des 8 activités, dernières réalisations, CTA contact |
| `/a-propos` | Histoire (création 2005), savoir-faire, parc machines, valeurs |
| `/services` | Index des 8 activités |
| `/services/[slug]` | Une page par activité (8 pages statiques) avec descriptif, photos et produits |
| `/realisations` | Galerie filtrable par catégorie avec lightbox |
| `/contact` | Coordonnées complètes, carte Google Maps, formulaire de devis |
| `/recrutement` | Valeurs RH, offres éventuelles, formulaire de candidature avec upload CV |

Les 8 pages service correspondent à :

1. `/services/structures-metalliques`
2. `/services/tuyauterie-gros-diametre`
3. `/services/pieces-speciales-et-conduite`
4. `/services/raccord`
5. `/services/piece-de-regard`
6. `/services/pose-et-raccordement-de-conduite`
7. `/services/pieces-speciales-inox`
8. `/services/panneaux-balisage`

### Structure du dépôt prévue

```
s3a-website/
├── app/
│   ├── layout.tsx                 # Header + Footer globaux, metadata racine
│   ├── page.tsx                   # Accueil
│   ├── a-propos/page.tsx
│   ├── services/
│   │   ├── page.tsx               # Index
│   │   └── [slug]/page.tsx        # generateStaticParams depuis lib/services
│   ├── realisations/page.tsx
│   ├── contact/page.tsx
│   ├── recrutement/page.tsx
│   ├── api/
│   │   ├── contact/route.ts       # POST → SMTP
│   │   └── recrutement/route.ts   # POST multipart + CV PDF → SMTP
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── globals.css
│   └── favicon.ico
├── components/
│   ├── Header.tsx                 # Navigation responsive
│   ├── Footer.tsx                 # Coordonnées et liens
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── ServicesGrid.tsx
│   ├── Gallery.tsx                # Galerie + lightbox
│   ├── ContactForm.tsx            # Client component
│   ├── RecrutementForm.tsx        # Client component avec <input type="file">
│   └── JsonLd.tsx
├── lib/
│   ├── services.ts                # Données des 8 activités
│   ├── realisations.ts            # Données des réalisations
│   ├── siteConfig.ts              # NAP, horaires, réseaux
│   └── mailer.ts                  # Client nodemailer (SMTP env vars)
├── public/
│   ├── logo-s3a.svg
│   └── images/
│       ├── services/
│       └── realisations/
├── next.config.ts
├── tsconfig.json
├── package.json
├── .env.example
└── README.md
```

### Design & identité

- Palette tirée de la plaquette : **rouge S3A** (~`#D9423C`), **gris anthracite**, blanc, noir.
- Typographie : **Inter** ou **Manrope** (sans-serif industrielle), via `next/font`.
- Style : sobre, industriel, photos plein cadre, bords nets, peu d'animations.
- Responsive mobile-first.
- Accessibilité WCAG AA (contraste, focus visible, `alt` descriptif, navigation clavier).

### Formulaires (SMTP interne)

- `lib/mailer.ts` expose `sendMail({ to, subject, html, attachments })` via nodemailer.
- Variables d'environnement requises :
  - `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`
  - `CONTACT_TO` (par défaut `s3a-sarl@hotmail.fr`)
  - `CONTACT_FROM` (expéditeur autorisé par le SMTP)
- `/api/contact` : validation Zod (`nom`, `societe`, `email`, `tel`, `service`, `message`) → email HTML formaté.
- `/api/recrutement` : `FormData` multipart, CV PDF ≤ 5 Mo → email avec pièce jointe.
- Anti-spam : honeypot + rate-limit simple par IP.
- Runtime Node.js sur les routes `/api/*` (nodemailer n'est pas compatible Edge).

### SEO

- `metadata` typé par page (title unique, description 140–160 car).
- `sitemap.ts` et `robots.ts` générés dynamiquement depuis `lib/services`.
- JSON-LD `LocalBusiness` + `Service` + `BreadcrumbList` injecté dans le layout.
- URLs FR slugifiées sans accents (`/services/tuyauterie-gros-diametre`).
- Images OG 1200×630 (une par défaut + une par service si temps).
- Cohérence NAP (Nom/Adresse/Téléphone) site + Google Business Profile à créer.
- Objectif Lighthouse : **Performance ≥ 90 · SEO ≥ 95 · Accessibilité ≥ 95**.

### Déploiement Vercel

- Repo GitHub connecté → preview deploys sur chaque PR, prod sur `main`.
- Variables d'environnement **Production** à renseigner dans le dashboard Vercel.
- Domaine personnalisé à fournir par S3A (ex. `s3a.ma`) avec DNS configuré.
- HTTPS forcé, redirection `www` → apex (ou inverse) configurée.

### Étapes d'implémentation

1. **Init projet** : `create-next-app` (TS, App Router, Tailwind, ESLint).
2. **Assets** : extraire et optimiser le logo et les photos depuis `Archives/`.
3. **Données** : créer `lib/services.ts` et `lib/realisations.ts`.
4. **Layout global** : Header, Footer, typographies, thème.
5. **Pages statiques** : Accueil, À propos, Services (index + slug), Réalisations.
6. **Formulaires** : `lib/mailer.ts`, routes API, composants clients avec feedback UI.
7. **SEO** : metadata, sitemap, robots, JSON-LD.
8. **Vercel** : push GitHub, connexion projet, env vars, déploiement preview puis prod.

### Points à confirmer avec S3A

- Nom de domaine final.
- Photos haute définition (les scans de plaquette sont limités pour le web).
- Contenu exact de la page Recrutement (postes ouverts ou uniquement spontanée).
- Mentions légales et conformité **loi 09-08** (protection des données personnelles au Maroc).
