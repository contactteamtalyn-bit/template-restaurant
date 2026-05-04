# La Maison — Site Restaurant Pantin

Site web one-page pour le restaurant **La Maison**, 61 Rue Cartier Bresson, Pantin (93500).

## Stack technique

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations scroll)
- **Lucide React** (icônes)
- **Google Fonts** (Playfair Display + Inter)

## Lancement en développement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Déploiement sur Vercel

### Méthode 1 — Interface Vercel (recommandée)

1. Pousser ce dossier sur GitHub
2. Aller sur [vercel.com](https://vercel.com) → **New Project**
3. Importer le repository GitHub
4. Cliquer **Deploy** — Vercel détecte automatiquement Next.js

### Méthode 2 — CLI Vercel

```bash
npm i -g vercel
vercel
```

## Structure du projet

```
la-maison/
├── app/
│   ├── globals.css       # Styles globaux + variables CSS
│   ├── layout.tsx        # Layout racine + métadonnées SEO
│   └── page.tsx          # Page principale (assemblage des sections)
├── components/
│   ├── blocks/
│   │   └── scroll-expansion-hero.tsx  # Hero avec expansion au scroll
│   └── sections/
│       ├── about.tsx          # Section "Notre Maison"
│       ├── specialties.tsx    # Grille 3 spécialités
│       ├── menu.tsx           # Carte du restaurant
│       ├── gallery.tsx        # Galerie photos
│       ├── hours-contact.tsx  # Horaires + Google Maps
│       └── footer.tsx         # Pied de page
├── lib/
│   └── utils.ts          # Utilitaire cn() pour Tailwind
├── next.config.ts        # Config Next.js (images Unsplash)
├── tailwind.config.ts    # Thème personnalisé (couleurs terracotta)
└── tsconfig.json
```

## Personnalisation

### Modifier les informations du restaurant

Les données sont directement dans chaque composant section.  
Chercher les commentaires `// ...` pour repérer les zones à modifier.

### Changer les couleurs

Dans `tailwind.config.ts` → section `theme.extend.colors` :
- `terracotta` : couleur accent (#A33B1F)
- `brown-dark` : texte principal (#2B1810)
- `cream` : fond clair (#FAF7F2)

### Remplacer les images

Dans `app/page.tsx` → props `mediaSrc` et `bgImageSrc` du Hero  
Dans `components/sections/gallery.tsx` → tableau `galleryImages`

## SEO

- Métadonnées complètes (title, description, OG tags, Twitter Card)
- Données structurées Schema.org (Restaurant)
- Google Fonts optimisées via `next/font`
- Images optimisées via `next/image`

## Notes

- Pas de système de réservation fonctionnel (CTA placeholder)
- Pas de Google Analytics (RGPD)
- Le numéro de téléphone est à renseigner dans `hours-contact.tsx` et `footer.tsx`
