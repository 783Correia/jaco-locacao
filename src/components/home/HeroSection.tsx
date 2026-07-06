"use client"

import { getWhatsAppLink } from "@/utils/whatsapp"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"

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

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false)
  useEffect(() => { if (window.innerWidth >= 768) setShowVideo(true) }, [])

  return (
    <section className="relative min-h-[85vh] md:min-h-[92vh] flex flex-col justify-center overflow-hidden bg-forest">
      <div className="absolute inset-0 z-0 bg-forest-dark">
        <Image
          src="/excavator-hero.png"
          alt="Jaco Locação — Locação de máquinas pesadas em Santa Catarina"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {showVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="/hero-video.mp4"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/95 via-black/75 to-forest-dark/100" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="hidden md:block absolute top-20 left-20 w-96 h-96 bg-lime/20 rounded-full blur-[100px] z-10 opacity-60" />
      <div className="hidden md:block absolute bottom-20 right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] z-10 opacity-50" />

      <div className="container-main relative z-20 text-center pt-24 md:pt-20">
        <div className="w-full max-w-6xl mx-auto px-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5"
          >
            <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white">Força e Confiabilidade para a Sua Obra</span>
          </motion.div>

          {/* LCP: o H1 e o parágrafo nunca podem nascer com opacity 0 —
              texto visível no primeiro paint, sem esperar hidratação */}
          <h1 className="text-[clamp(1.8rem,4vw,3.8rem)] font-extrabold text-white leading-[1.3] tracking-normal mb-6 drop-shadow-2xl py-2 w-full mx-auto">
            <span className="block">
              Locação de <span className="text-lime">Plataformas Elevatórias</span>
            </span>
            <span className="block text-lime">
              Máquinas para Terraplanagem
            </span>
            <span className="block">
              <span className="text-lime">e Construção</span> em SC.
            </span>
          </h1>

          <p className="text-sm md:text-lg text-white/90 max-w-4xl mx-auto leading-relaxed mb-8 font-medium px-2 drop-shadow-md">
            Especialistas em locação de plataformas elevatórias (articuladas e tesouras) e linha amarela para o estado de Santa Catarina, com foco ágil em Itajaí, Balneário Camboriú e região.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href={getWhatsAppLink("Olá! Gostaria de falar com um especialista sobre locação de máquinas.")}
              target="_blank"
              className="group bg-[#25D366] text-white border border-[#25D366] px-5 py-2.5 rounded-full font-bold text-sm md:text-base transition-all hover:scale-105 hover:bg-[#1ebd5c] hover:border-[#1ebd5c] flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 z-20 relative w-fit"
            >
              <FaWhatsapp className="text-xl" />
              Nos chame agora
            </a>
            <Link href="/frota" className="px-5 py-3 rounded-full font-bold text-sm md:text-base text-white border border-white/20 hover:bg-white/10 transition-all z-20 relative">
              Ver Nossa Frota
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Brand carousel — mobile only */}
      <div className="md:hidden mt-6 mb-4 overflow-hidden relative z-20 h-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-infinite-scroll w-max items-center">
          {carouselBrands.map((brand, index) => (
            <div key={`mob-hero-${brand.name}-${index}`} className="flex items-center justify-center mx-5 shrink-0 opacity-60">
              <Image src={brand.src} alt={brand.name} width={70} height={28} className="h-6 w-auto object-contain brightness-200" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-10 top-[55%] bottom-20 z-30 hidden lg:flex flex-col items-center gap-3">
        <div className="w-[2px] h-full bg-white/10 relative overflow-hidden rounded-full">
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-12 bg-lime animate-scroll-light rounded-full shadow-[0_0_8px_2px_rgba(180,209,46,0.6)]" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-medium mt-1 [writing-mode:vertical-rl] rotate-180">scroll</span>
      </div>
    </section>
  )
}
