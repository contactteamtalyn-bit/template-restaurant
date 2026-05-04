'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

// Images Unsplash — restaurants et plats français
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1280&auto=format&fit=crop',
    alt: 'Entrecôte grillée maison',
    span: 'col-span-1 row-span-2', // grande image gauche
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
    alt: 'Plats généreux La Maison',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop',
    alt: 'Salle du restaurant',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop',
    alt: 'Assiette du chef',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop',
    alt: 'Vins et ambiance bistrot',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1280&auto=format&fit=crop',
    alt: 'Intérieur chaleureux La Maison',
    span: 'col-span-2 row-span-1', // grande image en bas
  },
]

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="galerie" className="py-24 md:py-32 bg-[#F0EBE3]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="inline-block text-terracotta text-sm font-sans tracking-widest uppercase mb-4">
            L&apos;atmosphère
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-brown-dark leading-tight">
            La Maison en images
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mt-6" />
        </div>

        {/* Grille galerie */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-3 md:gap-4 h-[600px] md:h-[700px]"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className={`relative overflow-hidden rounded-xl group ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Overlay au hover */}
              <div className="absolute inset-0 bg-brown-dark/0 group-hover:bg-brown-dark/30 transition-colors duration-500" />
              {/* Légende au hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-amber-50 font-sans text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
