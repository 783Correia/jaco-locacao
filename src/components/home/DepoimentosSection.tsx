"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import SectionHeading from "@/components/SectionHeading"

const depoimentos = [
  {
    name: "Carlos Mendes",
    role: "Engenheiro — Construtora Alfa",
    text: "A Jaco Locação sempre nos atendeu com agilidade e máquinas impecáveis. A consultoria deles faz toda a diferença para dimensionarmos corretamente as obras.",
  },
  {
    name: "Ana Paula Silva",
    role: "Gerente de Engenharia — Via Rápida",
    text: "Trabalhamos com a Jaco Locação há mais de 5 anos. A confiança na qualidade da frota e no rápido atendimento técnico é o que nos mantém parceiros.",
  },
  {
    name: "Roberto Ferreira",
    role: "Encarregado de Obras — Beta Construções",
    text: "As escavadeiras e equipamentos em perfeito estado transformaram nossa produtividade. O suporte deles é excepcional.",
  },
]

export default function DepoimentosSection() {
  const [active, setActive] = useState(0)
  const next = () => setActive((a) => (a + 1) % depoimentos.length)
  const prev = () => setActive((a) => (a - 1 + depoimentos.length) % depoimentos.length)

  return (
    <section className="section-padding relative overflow-hidden bg-gray-50">
      <div className="container-main">
        <SectionHeading tag="Depoimentos de Parceiros" title="Quem constrói com a Jaco recomenda" />

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-10 md:p-14 relative overflow-hidden">
            <FaQuoteLeft className="text-primary/10 text-6xl absolute top-6 left-6" />
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed italic">&quot;{depoimentos[active].text}&quot;</p>
              <div className="mt-8 flex items-center gap-4">
                <motion.div
                  key={`avatar-${active}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-extrabold"
                >
                  {depoimentos[active].name[0]}
                </motion.div>
                <div>
                  <p className="font-bold text-gray-900">{depoimentos[active].name}</p>
                  <p className="text-gray-500 text-sm">{depoimentos[active].role}</p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-400 text-xs" />)}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} aria-label="Depoimento anterior" className="w-11 h-11 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all hover:scale-105">
              <FaChevronLeft size={12} aria-hidden />
            </button>
            <div className="flex gap-2">
              {depoimentos.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} aria-label={`Ver depoimento ${i + 1}`} aria-current={active === i} className={`h-1.5 rounded-full transition-all duration-500 ${active === i ? "bg-primary w-8" : "bg-gray-300 w-2"}`} />
              ))}
            </div>
            <button onClick={next} aria-label="Próximo depoimento" className="w-11 h-11 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all hover:scale-105">
              <FaChevronRight size={12} aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
