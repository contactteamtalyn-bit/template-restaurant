'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Animation fade-in au scroll
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="a-propos" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          {/* Colonne texte */}
          <div>
            {/* Badge */}
            <span className="inline-block text-terracotta text-sm font-sans tracking-widest uppercase mb-4">
              Notre histoire
            </span>

            <h2 className="font-serif text-4xl md:text-5xl text-brown-dark leading-tight mb-6">
              Notre Maison
            </h2>

            <div className="w-12 h-0.5 bg-terracotta mb-8" />

            <p className="text-brown-medium font-sans text-lg leading-relaxed mb-6">
              Niché au cœur de Pantin, à deux pas du canal de l&apos;Ourcq, La Maison
              est bien plus qu&apos;un restaurant — c&apos;est un lieu de vie où l&apos;on se
              sent chez soi dès le premier pas franchi.
            </p>

            <p className="text-brown-medium font-sans leading-relaxed mb-6">
              Récemment rénové avec soin, notre espace allie la chaleur d&apos;un bistrot
              de quartier à une élégance discrète. Ici, les recettes sont transmises
              avec passion, les produits soigneusement sélectionnés, et chaque assiette
              raconte une histoire.
            </p>

            <p className="text-brown-medium font-sans leading-relaxed">
              Des habitués du quartier aux grimpeurs de la salle Arkose voisine, en
              passant par les travailleurs du coin — tout le monde trouve sa place
              à La Maison.
            </p>

            {/* Note Google */}
            <div className="mt-10 inline-flex items-center gap-3 bg-white border border-border-warm rounded-xl px-5 py-3 shadow-sm">
              <span className="text-2xl">⭐</span>
              <div>
                <p className="font-serif text-xl text-brown-dark font-semibold">4,9 / 5</p>
                <p className="text-brown-medium text-xs font-sans">Note Google Maps</p>
              </div>
            </div>
          </div>

          {/* Colonne valeurs */}
          <div className="space-y-8">
            {[
              {
                number: '01',
                title: 'Cuisine Maison',
                desc: 'Tout est préparé sur place, avec des produits frais sélectionnés chaque matin.',
              },
              {
                number: '02',
                title: 'Accueil Familial',
                desc: 'Un patron souriant, une équipe aux petits soins — ici on vous connaît par votre prénom.',
              },
              {
                number: '03',
                title: 'Prix Accessibles',
                desc: 'La qualité ne doit pas être un luxe. Formule déjeuner à 15€, généreuse et savoureuse.',
              },
            ].map((item) => (
              <div key={item.number} className="flex gap-6 group">
                <span className="font-serif text-3xl text-border-warm font-bold shrink-0 group-hover:text-terracotta transition-colors duration-300">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-brown-dark mb-1">{item.title}</h3>
                  <p className="text-brown-medium font-sans text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
