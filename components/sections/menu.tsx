'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Carte du restaurant
const menuSections = [
  {
    category: 'Entrées',
    items: [
      { name: 'Soupe à l\'oignon gratinée', desc: 'Bouillon maison, croûton, fromage gratiné', price: '8€' },
      { name: 'Salade de chèvre chaud', desc: 'Mesclun, noix, miel de thym, pain grillé', price: '10€' },
      { name: 'Terrine de campagne', desc: 'Cornichons, pain de campagne maison', price: '9€' },
      { name: 'Œufs mayo tradition', desc: 'Recette maison, ciboulette fraîche', price: '6€' },
    ],
  },
  {
    category: 'Plats',
    items: [
      { name: 'Couscous royal', desc: 'Semoule, légumes du marché, merguez, harissa', price: '18€', signature: true },
      { name: 'Entrecôte grillée', desc: '250g, sauce au choix, frites maison', price: '24€' },
      { name: 'Poulet rôti du dimanche', desc: 'Jus de cuisson, pommes de terre grenailles', price: '17€' },
      { name: 'Blanquette de veau', desc: 'Riz pilaf, champignons de Paris, crème fraîche', price: '19€' },
      { name: 'Steak-frites', desc: 'Rumsteck 180g, frites maison, salade verte', price: '16€' },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Tarte Tatin', desc: 'Pommes caramélisées, crème fraîche épaisse', price: '7€' },
      { name: 'Crème brûlée maison', desc: 'Vanille de Madagascar, caramel croquant', price: '7€' },
      { name: 'Moelleux au chocolat', desc: 'Cœur fondant, boule de glace vanille', price: '8€' },
      { name: 'Île flottante', desc: 'Meringue légère, crème anglaise, caramel', price: '6€' },
    ],
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Menu() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="menu" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="inline-block text-terracotta text-sm font-sans tracking-widest uppercase mb-4">
            Saisonnière & maison
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-brown-dark leading-tight">
            Notre Carte
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mt-6 mb-4" />
          <p className="text-brown-medium font-sans max-w-md mx-auto">
            Une carte courte, renouvelée selon les saisons et les arrivages du marché.
          </p>
        </div>

        {/* Sections du menu */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {menuSections.map((section, sectionIndex) => (
            <motion.div
              key={section.category}
              variants={fadeInUp}
              custom={sectionIndex}
            >
              {/* Titre de section */}
              <div className="flex items-center gap-4 mb-8">
                <h3 className="font-serif text-2xl md:text-3xl text-brown-dark">
                  {section.category}
                </h3>
                <div className="flex-1 h-px bg-border-warm" />
              </div>

              {/* Liste des plats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className={`flex justify-between items-start p-5 rounded-xl border transition-all duration-300 hover:shadow-md ${
                      item.signature
                        ? 'bg-terracotta/5 border-terracotta/30'
                        : 'bg-white border-border-warm hover:border-terracotta/20'
                    }`}
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-lg text-brown-dark leading-tight">
                          {item.name}
                        </h4>
                        {item.signature && (
                          <span className="text-xs font-sans text-terracotta border border-terracotta/40 rounded-full px-2 py-0.5 shrink-0">
                            Signature
                          </span>
                        )}
                      </div>
                      <p className="text-brown-medium font-sans text-sm mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <span className="font-serif text-lg text-terracotta font-semibold shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Carte complète */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-terracotta text-amber-50 font-sans font-medium px-8 py-4 rounded-full hover:bg-brown-dark transition-colors duration-300 text-sm tracking-wide"
          >
            Voir la carte complète
          </a>
          <p className="text-brown-medium font-sans text-xs mt-3">
            Carte disponible sur place — nous contacter pour plus d&apos;informations
          </p>
        </div>
      </div>
    </section>
  )
}
