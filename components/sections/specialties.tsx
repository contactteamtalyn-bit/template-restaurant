'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { UtensilsCrossed, Beef, Receipt } from 'lucide-react'

const specialties = [
  {
    icon: UtensilsCrossed,
    title: 'Couscous du Vendredi',
    description:
      'Notre plat signature, préparé chaque vendredi selon la recette maison. Une semoule généreuse, des légumes fondants et une harissa faite maison — un rendez-vous que nos habitués ne manquent pour rien au monde.',
    tag: 'Plat Signature',
  },
  {
    icon: Beef,
    title: 'Viandes d\'Exception',
    description:
      'Steaks, entrecôtes et pièces du boucher soigneusement sélectionnées. Cuites à la perfection selon vos désirs, accompagnées de sauces maison et de garnitures de saison.',
    tag: 'Bestseller',
  },
  {
    icon: Receipt,
    title: 'Formule Midi à 15€',
    description:
      'Entrée + plat ou plat + dessert — une pause déjeuner complète et généreuse pour recharger les batteries. Renouvelée chaque semaine pour ne jamais vous lasser.',
    tag: 'Tous les jours',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export default function Specialties() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="specialites" className="py-24 md:py-32 bg-brown-dark">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="inline-block text-terracotta text-sm font-sans tracking-widest uppercase mb-4">
            Ce qui nous rend uniques
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-amber-50 leading-tight">
            Nos Spécialités
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mt-6" />
        </div>

        {/* Grille 3 colonnes */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {specialties.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-terracotta/40 transition-all duration-500"
              >
                {/* Badge tag */}
                <span className="absolute top-6 right-6 text-xs font-sans text-terracotta border border-terracotta/40 rounded-full px-3 py-1">
                  {item.tag}
                </span>

                {/* Icône */}
                <div className="w-14 h-14 rounded-xl bg-terracotta/10 border border-terracotta/20 flex items-center justify-center mb-6 group-hover:bg-terracotta/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-terracotta" strokeWidth={1.5} />
                </div>

                {/* Contenu */}
                <h3 className="font-serif text-2xl text-amber-50 mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/60 font-sans text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
