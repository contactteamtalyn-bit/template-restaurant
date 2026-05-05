import Image from 'next/image'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import About from '@/components/sections/about'
import Specialties from '@/components/sections/specialties'
import Menu from '@/components/sections/menu'
import Gallery from '@/components/sections/gallery'
import HoursContact from '@/components/sections/hours-contact'
import Footer from '@/components/sections/footer'

export default function Home() {
    return (
          <main className="bg-cream">
                <section className="relative bg-cream">
                        <ContainerScroll
                                    titleComponent={
                                                  <div className="flex flex-col items-center">
                                                                <span className="text-terracotta text-sm font-sans tracking-[0.3em] uppercase mb-4">
                                                                                Restaurant · Pantin
                                                                </span>span>
                                                                <h1 className="text-5xl md:text-8xl font-serif font-bold text-brown-dark leading-[1.05]">
                                                                                Bienvenue à <br />
                                                                                <span className="text-6xl md:text-[8rem] font-bold mt-2 inline-block bg-gradient-to-br from-terracotta to-brown-dark bg-clip-text text-transparent">
                                                                                                  La Maison
                                                                                </span>span>
                                                                </h1>h1>
                                                                <p className="mt-6 text-brown-medium font-sans text-base md:text-lg max-w-md">
                                                                                Cuisine française traditionnelle, ambiance familiale. Récemment rénové, accueil chaleureux.
                                                                </p>p>
                                                  </div>div>
                          }
                                >
                                  <Image
                                                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop"
                                                alt="La Maison — Restaurant Français à Pantin"
                                                width={1600}
                                                height={900}
                                                className="mx-auto rounded-2xl object-cover h-full w-full object-center"
                                                priority
                                              />
                        </ContainerScroll>ContainerScroll>
                
                        <nav className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex justify-center gap-6 md:gap-10 flex-wrap text-sm font-sans tracking-wide bg-white/70 backdrop-blur-md border border-border-warm rounded-full px-6 py-3">
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
                                                    className="text-brown-dark hover:text-terracotta transition-colors duration-200"
                                                  >
                                      {link.label}
                                    </a>a>
                                  ))}
                        </nav>nav>
                </section>section>
          
                <About />
                <Specialties />
                <Menu />
                <Gallery />
                <HoursContact />
                <Footer />
          </main>main>
        )
}
</main>
