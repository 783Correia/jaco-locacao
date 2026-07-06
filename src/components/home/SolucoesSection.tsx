"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import AnimatedCounter from "@/components/AnimatedCounter"
import SectionHeading from "@/components/SectionHeading"

const heroBrands = [
  { name: "Bobcat", src: "/logos/LOGO BOBCAT.jpg" },
  { name: "Case", src: "/logos/LOGO CASE.jpg" },
  { name: "CAT", src: "/logos/LOGO CAT.png" },
  { name: "Genie", src: "/logos/LOGO GENIE.jpg" },
  { name: "Hyundai", src: "/logos/LOGO HYUNDAI INDUSTRIA.jpg" },
  { name: "JCB", src: "/logos/LOGO JCB.jpg" },
  { name: "JLG", src: "/logos/LOGO JLG.jpg" },
  { name: "Dynapac", src: "/logos/dynapac.png" },
  { name: "Jumil", src: "/logos/jumil logo.png" },
  { name: "Logimatec", src: "/logos/logimatec.jpg" },
  { name: "Skyjack", src: "/logos/skyjack LOGO.jpg" },
]
const carouselBrands = [...heroBrands, ...heroBrands]

const cards = [
  { title: "Escavadeiras", subtitle: "8 a 21 toneladas", href: "/frota", image: "/frota/escavadeira-8t.jpg" },
  { title: "Mini Escavadeiras", subtitle: "1 a 5,5 toneladas", href: "/frota", image: "/frota/mini-escavadeira-5.5t.jpg" },
  { title: "Mini Carregadeiras", subtitle: "Bobcat e Manitou", href: "/frota", image: "/frota/bobcat-s650.jpg" },
  { title: "Manipuladores", subtitle: "12 a 17 metros", href: "/frota", image: "/frota/manipulador-17m.jpg" },
  { title: "Plataformas Articuladas", subtitle: "Diesel e Elétricas", href: "/frota", image: "/frota/plataforma-articulada-diesel-16m.jpg" },
  { title: "Plataformas Tesoura", subtitle: "6,6 a 14 metros", href: "/frota", image: "/frota/plataforma-tesoura-10m.jpg" },
  { title: "Rolos Compactadores", subtitle: "1,5 toneladas", href: "/frota", image: "/frota/rolo-compactador-1.5t.jpg" },
]

function SolucaoCard({ sol }: { sol: typeof cards[number] }) {
  return (
    <Link href={sol.href} className="block h-full group">
      <div className="absolute inset-0">
        <Image
          src={sol.image}
          alt={`Locação de ${sol.title} em Santa Catarina`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="340px"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight drop-shadow-lg">{sol.title}</h3>
        <p className="text-sm mt-1 text-white/80 drop-shadow">{sol.subtitle}</p>
      </div>
    </Link>
  )
}

function StatsBar() {
  return (
    <div className="relative z-40 -mt-20 md:-mt-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="container-main"
      >
        <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-2xl mx-auto max-w-5xl">
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 md:gap-8">
            {[
              { target: 15, suffix: "+", label: "Marcas Parceiras" },
              { target: 100, suffix: "%", label: "Equipamentos Revisados" },
              { target: 2000, suffix: "+", label: "Clientes" },
            ].map((stat, index) => (
              <div key={index} className="flex-1 text-center md:text-left md:border-r last:border-0 border-gray-200 md:pr-8 last:pr-0">
                <div className="text-xl md:text-2xl font-extrabold text-primary mb-0.5">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={1800 + index * 400} />
                </div>
                <div className="text-[10px] md:text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
            <div className="hidden md:flex flex-[2] md:w-96 overflow-hidden relative group h-20 items-center [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <div className="flex animate-infinite-scroll w-max hover:[animation-play-state:paused] items-center transform-gpu">
                {carouselBrands.map((brand, index) => (
                  <div key={`${brand.name}-${index}`} className="flex items-center justify-center mx-8 shrink-0 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                    <Image src={brand.src} alt={brand.name} width={120} height={50} className="h-10 w-auto object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:hidden mt-4 pt-4 border-t border-gray-100 overflow-hidden relative h-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex animate-infinite-scroll w-max items-center transform-gpu">
              {carouselBrands.map((brand, index) => (
                <div key={`mob-${brand.name}-${index}`} className="flex items-center justify-center mx-5 shrink-0 opacity-50 grayscale">
                  <Image src={brand.src} alt={brand.name} width={80} height={32} className="h-7 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function SolucoesSection() {
  return (
    <section className="pt-10 md:pt-14 pb-20 md:pb-28 relative bg-white">
      <StatsBar />
      <div className="container-main relative pt-10 md:pt-14">
        <SectionHeading
          tag="Nossa Frota Completa"
          title="Plataformas Elevatórias e Máquinas Pesadas em Itajaí e SC"
          description="Locação das melhores marcas de tesouras, articuladas e linha amarela mundial com entrega rápida para todo o estado."
        />
      </div>

      <div className="relative overflow-hidden group/carousel pl-4 md:pl-0 flex">
        <div className="flex w-max animate-solucoes-scroll group-hover/carousel:[animation-play-state:paused] items-stretch py-2">
          {cards.map((sol, i) => (
            <div key={`track1-${sol.title}-${i}`} className="relative overflow-hidden cursor-pointer shrink-0 w-[240px] md:w-[340px] h-[320px] md:h-[420px] mx-2 hover:scale-[1.02] transition-transform duration-300 rounded-[20px]">
              <SolucaoCard sol={sol} />
            </div>
          ))}
        </div>
        <div className="flex w-max animate-solucoes-scroll group-hover/carousel:[animation-play-state:paused] items-stretch py-2" aria-hidden="true">
          {cards.map((sol, i) => (
            <div key={`track2-${sol.title}-${i}`} className="relative overflow-hidden cursor-pointer shrink-0 w-[240px] md:w-[340px] h-[320px] md:h-[420px] mx-2 hover:scale-[1.02] transition-transform duration-300 rounded-[20px]">
              <SolucaoCard sol={sol} />
            </div>
          ))}
        </div>
      </div>

      <div className="container-main relative">
        <div className="text-center mt-12 flex justify-center w-full">
          <Link
            href="/frota"
            className="group bg-[#31a346] text-white px-8 py-3.5 rounded-full font-bold text-sm md:text-base transition-all hover:scale-105 hover:bg-[#258536] flex items-center justify-center gap-2 shadow-lg shadow-[#31a346]/20 uppercase tracking-widest"
          >
            Ver frota completa
            <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
