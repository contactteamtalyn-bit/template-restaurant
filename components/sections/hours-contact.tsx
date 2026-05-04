'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Clock, Phone } from 'lucide-react'

// Horaires du restaurant
const hours = [
  { day: 'Lundi', time: '7h – 21h', open: true },
  { day: 'Mardi', time: '7h – 21h', open: true },
  { day: 'Mercredi', time: '7h – 17h', open: true },
  { day: 'Jeudi', time: '7h – 21h', open: true },
  { day: 'Vendredi', time: '7h – 21h', open: true, special: '🍲 Couscous' },
  { day: 'Samedi', time: '8h – 00h', open: true },
  { day: 'Dimanche', time: 'Fermé', open: false },
]

export default function HoursContact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="inline-block text-terracotta text-sm font-sans tracking-widest uppercase mb-4">
            Venez nous rendre visite
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-brown-dark leading-tight">
            Horaires & Contact
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mt-6" />
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >
          {/* Colonne gauche : Horaires + Infos */}
          <div>
            {/* Horaires */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-terracotta" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-brown-dark">Nos horaires</h3>
              </div>

              <div className="space-y-2">
                {hours.map(({ day, time, open, special }) => (
                  <div
                    key={day}
                    className={`flex justify-between items-center py-3 px-4 rounded-lg transition-colors ${
                      !open
                        ? 'bg-white/50 opacity-50'
                        : special
                        ? 'bg-terracotta/5 border border-terracotta/20'
                        : 'bg-white border border-border-warm'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-sans text-sm font-semibold ${
                          !open ? 'text-brown-medium' : 'text-brown-dark'
                        }`}
                      >
                        {day}
                      </span>
                      {special && (
                        <span className="text-xs font-sans text-terracotta">{special}</span>
                      )}
                    </div>
                    <span
                      className={`font-sans text-sm ${
                        !open ? 'font-bold text-brown-dark' : 'text-brown-medium'
                      }`}
                    >
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Adresse */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-terracotta" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-brown-dark">Adresse</h3>
              </div>
              <p className="font-sans text-brown-medium leading-relaxed pl-8">
                61 Rue Cartier Bresson<br />
                93500 Pantin<br />
                <span className="text-sm mt-1 block">À 5 min de la salle Arkose Pantin</span>
              </p>
            </div>

            {/* Téléphone (placeholder) */}
            <div className="flex items-center gap-3 pl-0">
              <Phone className="w-5 h-5 text-terracotta ml-0" strokeWidth={1.5} />
              <span className="font-sans text-brown-medium">01 XX XX XX XX</span>
            </div>

            {/* CTA Réservation */}
            <a
              href="#"
              className="mt-10 inline-flex items-center gap-2 bg-terracotta text-amber-50 font-sans font-medium px-8 py-4 rounded-full hover:bg-brown-dark transition-colors duration-300 text-sm tracking-wide"
            >
              Réserver une table
            </a>
            <p className="text-brown-medium font-sans text-xs mt-2">
              Réservations par téléphone uniquement
            </p>
          </div>

          {/* Colonne droite : Google Maps embed */}
          <div className="rounded-2xl overflow-hidden border border-border-warm shadow-lg h-[450px]">
            <iframe
              src="https://maps.google.com/maps?q=61+Rue+Cartier+Bresson,+93500+Pantin&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="La Maison - 61 Rue Cartier Bresson, Pantin"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
