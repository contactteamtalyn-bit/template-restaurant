import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

// Polices Google Fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

// Métadonnées SEO complètes
export const metadata: Metadata = {
  title: 'La Maison — Restaurant Français à Pantin',
  description:
    'Restaurant familial au cœur de Pantin. Cuisine française traditionnelle, couscous du vendredi, formule déjeuner à 15€. Récemment rénové, accueil chaleureux. Note Google : 4,9/5.',
  keywords: [
    'restaurant pantin',
    'restaurant français pantin',
    'couscous pantin',
    'brasserie pantin',
    'formule déjeuner pantin',
    'la maison pantin',
    'restaurant 93500',
  ],
  authors: [{ name: 'La Maison' }],
  creator: 'La Maison',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://lamaison-pantin.fr',
    siteName: 'La Maison',
    title: 'La Maison — Restaurant Français à Pantin',
    description:
      'Cuisine maison, ambiance familiale. Formule midi 15€, couscous du vendredi. 61 Rue Cartier Bresson, Pantin.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1280&auto=format&fit=crop',
        width: 1280,
        height: 720,
        alt: 'La Maison Restaurant Pantin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Maison — Restaurant Français à Pantin',
    description:
      'Cuisine maison, ambiance familiale. Formule midi 15€, couscous du vendredi.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Données structurées Schema.org pour référencement local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: 'La Maison',
              description:
                'Restaurant français traditionnel, cuisine maison, ambiance familiale.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '61 Rue Cartier Bresson',
                addressLocality: 'Pantin',
                postalCode: '93500',
                addressCountry: 'FR',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '200',
              },
              priceRange: '€€',
              servesCuisine: 'Française',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
                  opens: '07:00',
                  closes: '21:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Wednesday',
                  opens: '07:00',
                  closes: '17:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '08:00',
                  closes: '00:00',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-cream text-brown-dark">{children}</body>
    </html>
  )
}
