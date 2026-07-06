"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { FaWhatsapp, FaArrowRight, FaArrowLeft } from "react-icons/fa"

const destaques = [
  {
    name: "Escavadeira Cat 320",
    brand: "Caterpillar",
    description: "Escavadeira robusta da classe de 20 toneladas. Alta capacidade de carga, escavação profunda e força de desagregação ideal para infraestrutura pesada.",
    image: "/frota/cat-320.jpg",
    badge: "Alta Performance",
    slug: "cat-320",
  },
  {
    name: "Plataforma Articulada Diesel 16m",
    brand: "Genie",
    description: "Segurança superior para trabalhos em altura. Excelente envelope de trabalho e operação silenciosa. O equipamento ideal para manutenções industriais e prediais.",
    image: "/frota/plataforma-articulada-diesel-16m.jpg",
    badge: "Trabalho Seguro",
    slug: "plataforma-articulada-diesel-16m",
  },
  {
    name: "Mini Escavadeira 3.5t",
    brand: "Yanmar",
    description: "Compacta e poderosa. Ideal para espaços confinados, paisagismo e obras urbanas. Alta precisão de movimento e fácil transporte entre canteiros.",
    image: "/frota/mini-escavadeira-3.5t.jpg",
    badge: "Compacta",
    slug: "mini-escavadeira-3-5t",
  },
  {
    name: "Rolo Compactador 1.5t",
    brand: "Dynapac",
    description: "Compactação eficiente de solos e asfalto com tecnologia de amortecimento otimizada. Rendimento impecável para grandes áreas e obras rodoviárias.",
    image: "/frota/rolo-compactador-1.5t.jpg",
    badge: "Eficiência",
    slug: "rolo-compactador-1-5t",
  },
]

export default function ProdutosDestaqueSection() {
  const [active, setActive] = useState(0)
  const next = useCallback(() => setActive((a) => (a + 1) % destaques.length), [])
  const prev = () => setActive((a) => (a - 1 + destaques.length) % destaques.length)

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next])

  const current = destaques[active]

  return (
    <section className="bg-white section-padding overflow-hidden">
      <div className="container-main">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3 relative">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden aspect-[16/10] md:aspect-[4/3]"
            >
              <Image src={current.image} alt={current.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 60vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
              <div className="absolute top-4 left-4 md:top-6 md:left-6">
                <span className="text-white/30 text-[4rem] md:text-[6rem] font-extrabold leading-none tracking-tighter">
                  {String(active + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="absolute top-4 right-4 md:top-6 md:right-6">
                <span className="bg-lime text-forest text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-full">{current.badge}</span>
              </div>
            </motion.div>

            <div className="absolute -bottom-5 right-8 flex gap-3">
              <button onClick={prev} aria-label="Equipamento anterior" className="w-12 h-12 bg-white rounded-full shadow-float flex items-center justify-center text-dark hover:bg-lime hover:text-forest transition-all duration-300 hover:scale-105">
                <FaArrowLeft size={14} aria-hidden />
              </button>
              <button onClick={next} aria-label="Próximo equipamento" className="w-12 h-12 bg-lime rounded-full shadow-glow-lime flex items-center justify-center text-forest hover:bg-lime-dark transition-all duration-300 hover:scale-105">
                <FaArrowRight size={14} aria-hidden />
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-dark bg-primary/10 px-4 py-1.5 rounded-full mb-6">Destaques</span>
            <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{current.brand}</p>
              <h3 className="text-heading text-dark mt-1">{current.name}</h3>
              <p className="text-gray-500 mt-4 leading-relaxed">{current.description}</p>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-8">
              <a
                href={`https://wa.me/554899250605?text=Olá! Tenho interesse na locação da máquina ${current.name} (${current.brand}). Gostaria de saber disponibilidade e valores.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime text-center whitespace-nowrap"
              >
                <FaWhatsapp className="text-lg" />
                Pedir Orçamento
              </a>
            </div>

            <div className="flex gap-0 mt-8">
              {destaques.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} aria-label={`Ver equipamento ${i + 1}`} aria-current={active === i} className="py-2.5 px-2 flex items-center">
                  <span className={`h-1.5 rounded-full transition-all duration-500 ${active === i ? "bg-primary w-10" : "bg-gray-200 w-3"}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
