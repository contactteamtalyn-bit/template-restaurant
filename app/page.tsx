import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero'
import About from '@/components/sections/about'
import Specialties from '@/components/sections/specialties'
import Menu from '@/components/sections/menu'
import Gallery from '@/components/sections/gallery'
import HoursContact from '@/components/sections/hours-contact'
import Footer from '@/components/sections/footer'

// Page principale — La Maison Restaurant Pantin
export default function Home() {
  return (
    <main>
      {/* ===== HERO — Scroll expansion ===== */}
      <ScrollExpandMedia
        mediaType="image"
        // Photo de couscous / plat signature en médaillon central
        mediaSrc="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1280&auto=format&fit=crop"
        // Photo d'intérieur de restaurant chaleureux en fond
        bgImageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1920&auto=format&fit=crop"
        title="La Maison"
        date="Restaurant · Pantin"
        scrollToExpand="Faites défiler pour découvrir"
        textBlend={true}
      >
        {/* Navigation flottante visible après l'expansion du Hero */}
        <nav className="w-full flex justify-center gap-6 md:gap-10 py-8 flex-wrap text-sm font-sans tracking-wide">
          {[
            { href: '#a-propos', label: 'Notre histoire' },
            { href: '#specialites', label: 'Spécialités' },
            { href: '#menu', label: 'La carte' },
            { href: '#galerie', label: 'Galerie' },
            { href: '#contact', label: 'Contact' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white border-b border-transparent hover:border-white/40 pb-0.5 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </ScrollExpandMedia>

      {/* ===== À PROPOS ===== */}
      <About />

      {/* ===== SPÉCIALITÉS ===== */}
      <Specialties />

      {/* ===== MENU ===== */}
      <Menu />

      {/* ===== GALERIE ===== */}
      <Gallery />

      {/* ===== HORAIRES & CONTACT ===== */}
      <HoursContact />

      {/* ===== FOOTER ===== */}
      <Footer />
    </main>
  )
}
