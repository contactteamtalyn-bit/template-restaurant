export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brown-dark text-white/60 font-sans">
      {/* Bande terracotta */}
      <div className="h-1 bg-terracotta w-full" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo / Nom */}
          <div>
            <h2 className="font-serif text-3xl text-amber-50 mb-3">La Maison</h2>
            <p className="text-sm leading-relaxed">
              Restaurant français traditionnel.<br />
              Cuisine maison, accueil familial.
            </p>
            <div className="mt-5 flex items-center gap-1.5">
              <span className="text-yellow-400 text-sm">★★★★★</span>
              <span className="text-sm ml-1">4,9 / 5 sur Google</span>
            </div>
          </div>

          {/* Horaires résumés */}
          <div>
            <h3 className="text-amber-50 font-semibold text-sm tracking-widest uppercase mb-4">
              Horaires
            </h3>
            <ul className="space-y-1.5 text-sm">
              <li className="flex justify-between gap-4">
                <span>Lun – Mar – Jeu – Ven</span>
                <span className="text-white/80">7h – 21h</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Mercredi</span>
                <span className="text-white/80">7h – 17h</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Samedi</span>
                <span className="text-white/80">8h – 00h</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="font-semibold text-white/40">Dimanche</span>
                <span className="font-semibold text-white/40">Fermé</span>
              </li>
            </ul>
          </div>

          {/* Adresse & Contact */}
          <div>
            <h3 className="text-amber-50 font-semibold text-sm tracking-widest uppercase mb-4">
              Nous trouver
            </h3>
            <address className="not-italic text-sm space-y-2">
              <p>61 Rue Cartier Bresson</p>
              <p>93500 Pantin</p>
              <p className="pt-1">01 XX XX XX XX</p>
            </address>
            <a
              href="https://maps.google.com/?q=61+Rue+Cartier+Bresson+Pantin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-terracotta text-sm hover:text-amber-200 transition-colors duration-200"
            >
              Voir sur Google Maps →
            </a>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>© {currentYear} La Maison — Tous droits réservés</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
