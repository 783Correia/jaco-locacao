"use client";

import { getWhatsAppLink } from "@/utils/whatsapp";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import {
  FaHandshake,
  FaAward,
  FaMapMarkedAlt,
  FaWhatsapp,
  FaArrowRight,
  FaArrowLeft,
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaWrench,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import Image from "next/image";

/* ═══════════════════════════════════════════════
   HERO — Rutivo Style (Wide/Clean/Centered)
   ═══════════════════════════════════════════════ */
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
];
const carouselBrands = [...heroBrands, ...heroBrands];

function Hero() {
  return (
    <section
      className="relative min-h-[85vh] md:min-h-[92vh] flex flex-col justify-center overflow-hidden bg-forest"
    >
      {/* Background with video */}
      <div className="absolute inset-0 z-0 bg-forest-dark">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-video.mp4"
        />
        {/* Subtle overlay to guarantee text readability without hiding the video */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/60 via-black/30 to-forest-dark/80" />
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>

      {/* Decorative Orbs — hidden on mobile for performance */}
      <div className="hidden md:block absolute top-20 left-20 w-96 h-96 bg-lime/20 rounded-full blur-[100px] z-10 opacity-60" />
      <div className="hidden md:block absolute bottom-20 right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] z-10 opacity-50" />

      <div className="container-main relative z-20 text-center pt-24 md:pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5"
          >
            <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white">Força e Confiabilidade para a Sua Obra</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-[clamp(1.6rem,5vw,3.8rem)] font-bold text-white leading-[1.1] tracking-tight mb-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="block"
            >
              Locação de Plataformas Elevatórias e
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-lime inline-block relative"
            >
              Máquinas Pesadas em SC.
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute w-full h-2 -bottom-0.5 left-0 text-lime"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                />
              </motion.svg>
            </motion.span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-xs md:text-base text-white/80 max-w-lg mx-auto leading-relaxed mb-6 font-normal px-2"
          >
            Especialistas em locação de plataformas elevatórias (articuladas e tesoura) e linha amarela para o estado de Santa Catarina, com foco ágil em Itajaí, Balneário Camboriú e região.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href={getWhatsAppLink("Olá! Gostaria de falar com um especialista sobre locação de máquinas.")}
              target="_blank"
              className="group bg-lime text-forest border border-lime px-5 py-3 rounded-full font-bold text-sm md:text-base transition-all hover:scale-105 hover:bg-lime/90 flex items-center gap-2 shadow-xl shadow-lime/20 z-20 relative"
            >
              <FaWhatsapp className="text-xl" />
              Nos chame agora
            </a>
            <Link
              href="/frota"
              className="px-5 py-3 rounded-full font-bold text-sm md:text-base text-white border border-white/20 hover:bg-white/10 transition-all z-20 relative"
            >
              Ver Nossa Frota
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Light Indicator — desktop only */}
      <div className="absolute left-10 top-[55%] bottom-20 z-30 hidden lg:flex flex-col items-center gap-3">
        <div className="w-[2px] h-full bg-white/10 relative overflow-hidden rounded-full">
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-12 bg-lime animate-scroll-light rounded-full shadow-[0_0_8px_2px_rgba(180,209,46,0.6)]" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-medium mt-1 [writing-mode:vertical-rl] rotate-180">scroll</span>
      </div>

    </section >
  );
}

/* ═══════════════════════════════════════════════
   STATS BAR — Between Hero and Soluções
   ═══════════════════════════════════════════════ */
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
              { target: 1000, suffix: "+", label: "Obras Atendidas" },
            ].map((stat, index) => (
              <div key={index} className="flex-1 text-center md:text-left md:border-r last:border-0 border-gray-200 md:pr-8 last:pr-0">
                <div className="text-xl md:text-2xl font-extrabold text-primary mb-0.5">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={1800 + index * 400} />
                </div>
                <div className="text-[10px] md:text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}

            {/* Brand Carousel — desktop (inside stats bar) */}
            <div className="hidden md:flex flex-[1.5] md:w-80 overflow-hidden relative group h-20 items-center">
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
              <div className="flex animate-infinite-scroll w-max hover:[animation-play-state:paused] items-center">
                {carouselBrands.map((brand, index) => (
                  <div key={`${brand.name}-${index}`} className="flex items-center justify-center mx-8 shrink-0 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                    <Image src={brand.src} alt={brand.name} width={120} height={50} unoptimized className="h-10 w-auto object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Brand Carousel — mobile only (below stats) */}
          <div className="md:hidden mt-4 pt-4 border-t border-gray-100 overflow-hidden relative h-12">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            <div className="flex animate-infinite-scroll w-max items-center">
              {carouselBrands.map((brand, index) => (
                <div key={`mob-${brand.name}-${index}`} className="flex items-center justify-center mx-5 shrink-0 opacity-50 grayscale">
                  <Image src={brand.src} alt={brand.name} width={80} height={32} unoptimized className="h-7 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ... Rest of the file (Solucoes, ProdutosDestaque, Diferenciais, etc.)
// Note: Removed the "Stats" function entirely as requested to avoid duplication.

/* ═══════════════════════════════════════════════
   SOLUÇÕES — Carrossel infinito com fotos reais
   ═══════════════════════════════════════════════ */
function SolucaoCard({ sol }: { sol: { title: string; subtitle: string; href: string; image?: string; video?: string } }) {
  return (
    <Link href={sol.href} className="block h-full group">
      <div className="absolute inset-0">
        {sol.video ? (
          <video
            src={sol.video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <Image
            src={sol.image || ""}
            alt={`Locação de ${sol.title} em Santa Catarina`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="340px"
            unoptimized
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight drop-shadow-lg">
          {sol.title}
        </h3>
        <p className="text-sm mt-1 text-white/80 drop-shadow">
          {sol.subtitle}
        </p>
      </div>
    </Link>
  );
}

function Solucoes() {
  const cards = [
    {
      title: "Escavadeiras",
      subtitle: "8 a 21 toneladas",
      href: "/frota",
      video: "/frota/escavadeiras-video.mp4",
    },
    {
      title: "Mini Escavadeiras",
      subtitle: "1 a 5,5 toneladas",
      href: "/frota",
      image: "/frota/mini-escavadeira-5.5t.jpg",
    },
    {
      title: "Mini Carregadeiras",
      subtitle: "Bobcat e Manitou",
      href: "/frota",
      image: "/frota/bobcat-s650.jpg",
    },
    {
      title: "Manipuladores",
      subtitle: "12 a 17 metros",
      href: "/frota",
      image: "/frota/manipulador-17m.jpg",
    },
    {
      title: "Plataformas Articuladas",
      subtitle: "Diesel e Elétricas",
      href: "/frota",
      image: "/frota/plataforma-articulada-diesel-20m.jpg",
    },
    {
      title: "Plataformas Tesoura",
      subtitle: "Veja em ação",
      href: "/frota",
      video: "/frota/plataforma-tesoura-video.mp4",
    },
    {
      title: "Rolos Compactadores",
      subtitle: "Veja em ação",
      href: "/frota",
      video: "/frota/rolo-compactador-video.mp4",
    },
  ];

  // Duplicate for seamless loop
  const allCards = [...cards, ...cards];

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

      {/* ── Carousel container ── */}
      <div
        className="relative overflow-x-auto group/carousel cursor-grab active:cursor-grabbing scrollbar-hide pl-4 md:pl-0"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* Scrolling track */}
        <div className="flex w-max animate-solucoes-scroll group-hover/carousel:[animation-play-state:paused] items-stretch py-2">
          {allCards.map((sol, i) => (
            <div
              key={`${sol.title}-${i}`}
              className="relative overflow-hidden cursor-pointer shrink-0 w-[240px] md:w-[340px] h-[320px] md:h-[420px] mx-2 hover:scale-[1.02] transition-transform duration-300 rounded-[20px]"
            >
              <SolucaoCard sol={sol} />
            </div>
          ))}
        </div>
      </div>

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-12"
        >
          <Link href="/frota" className="btn-lime">
            Explorar Catálogo de Frota
            <FaArrowRight className="text-xs" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   PRODUTOS DESTAQUE — Locked
   ═══════════════════════════════════════════════ */
function ProdutosDestaque() {
  const [active, setActive] = useState(0);
  const destaques = [

    {
      name: "Escavadeira Cat 320",
      brand: "Caterpillar",
      description:
        "Escavadeira robusta da classe de 20 toneladas. Alta capacidade de carga, escavação profunda e força de desagregação ideal para infraestrutura pesada.",
      image: "/frota/cat-320.jpg",
      badge: "Alta Performance",
      slug: "cat-320",
    },
    {
      name: "Plataforma Articulada Diesel 16m",
      brand: "Genie",
      description:
        "Segurança superior para trabalhos em altura. Excelente envelope de trabalho e operação silenciosa. O equipamento ideal para manutenções industriais e prediais.",
      image: "/frota/plataforma-articulada-diesel-16m.jpg",
      badge: "Trabalho Seguro",
      slug: "plataforma-articulada-diesel-16m",
    },
    {
      name: "Mini Escavadeira 3.5t",
      brand: "Yanmar",
      description:
        "Compacta e poderosa. Ideal para espaços confinados, paisagismo e obras urbanas. Alta precisão de movimento e fácil transporte entre canteiros.",
      image: "/frota/mini-escavadeira-3.5t.jpg",
      badge: "Compacta",
      slug: "mini-escavadeira-3-5t",
    },
    {
      name: "Rolo Compactador 1.5t",
      brand: "Dynapac",
      description:
        "Compactação eficiente de solos e asfalto com tecnologia de amortecimento otimizada. Rendimento impecável para grandes áreas e obras rodoviárias.",
      image: "/frota/rolo-compactador-1.5t.jpg",
      video: "/frota/rolo-compactador-video.mp4",
      badge: "Eficiência",
      slug: "rolo-compactador-1-5t",
    },
  ];

  const next = useCallback(
    () => setActive((a) => (a + 1) % destaques.length),
    [destaques.length]
  );
  const prev = () =>
    setActive((a) => (a - 1 + destaques.length) % destaques.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const current = destaques[active];

  return (
    <section className="bg-white section-padding overflow-hidden">
      <div className="container-main">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Image — 60% (3 cols) */}
          <div className="lg:col-span-3 relative">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden aspect-[16/10] md:aspect-[4/3]"
            >
              {current.video ? (
                <video
                  src={current.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  unoptimized
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

              <div className="absolute top-4 left-4 md:top-6 md:left-6">
                <span className="text-white/30 text-[4rem] md:text-[6rem] font-extrabold leading-none tracking-tighter">
                  {String(active + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="absolute top-4 right-4 md:top-6 md:right-6">
                <span className="bg-lime text-forest text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                  {current.badge}
                </span>
              </div>
            </motion.div>

            <div className="absolute -bottom-5 right-8 flex gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 bg-white rounded-full shadow-float flex items-center justify-center text-dark hover:bg-lime hover:text-forest transition-all duration-300 hover:scale-105"
              >
                <FaArrowLeft size={14} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 bg-lime rounded-full shadow-glow-lime flex items-center justify-center text-forest hover:bg-lime-dark transition-all duration-300 hover:scale-105"
              >
                <FaArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Content — 40% (2 cols) */}
          <div className="lg:col-span-2">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6">
              Destaques
            </span>

            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                {current.brand}
              </p>
              <h3 className="text-heading text-dark mt-1">{current.name}</h3>
              <p className="text-gray-500 mt-4 leading-relaxed">
                {current.description}
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-8">
              {current.slug && (
                <Link href={`/frota/${current.slug}`} className="btn-outline text-center whitespace-nowrap">
                  Ver Mais Detalhes
                </Link>
              )}
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

            <div className="flex gap-2 mt-8">
              {destaques.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${active === i ? "bg-primary w-10" : "bg-gray-200 w-3"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   DIFERENCIAIS — Locked
   ═══════════════════════════════════════════════ */
function Diferenciais() {
  const items = [
    {
      icon: FaHandshake,
      title: "Consultoria de Frota",
      description: "Ajudamos você a dimensionar os equipamentos certos para o seu tamanho de obra, sem desperdícios.",
    },
    {
      icon: FaAward,
      title: "Marcas Oficiais",
      description: "Frota composta pelas líderes mundiais de mercado: Caterpillar, JCB, Case, Bobcat e Hyundai.",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Entrega Ágil",
      description: "Logística otimizada para entregar o maquinário no seu canteiro com o menor tempo possível.",
    },
    {
      icon: FaWrench,
      title: "Suporte e Manutenção",
      description: "Equipe de mecânicos dedicados e preventivas em dia para garantir que sua obra não pare um segundo.",
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-gray-50">
      <div className="container-main relative">
        <SectionHeading
          tag="Por que a Jaco Locação"
          title="Diferenciais para Aluguel de Plataformas e Máquinas"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-7 text-center group"
            >
              <motion.div
                className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-400"
              >
                <item.icon size={22} />
              </motion.div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   MISSÃO VISÃO VALORES — Locked
   ═══════════════════════════════════════════════ */
function MissaoVisaoValores() {
  const valores = [
    { title: "Agilidade no atendimento", desc: "Resolvemos rápido porque entendemos que obra parada é prejuízo." },
    { title: "Compromisso e pontualidade", desc: "Cumprimos prazos com seriedade e responsabilidade em cada entrega." },
    { title: "Confiabilidade operacional", desc: "Equipamentos prontos, revisados e com suporte técnico sempre que necessário." },
    { title: "Segurança em primeiro lugar", desc: "Protegemos pessoas, operações e patrimônio em todas as etapas." },
    { title: "Respeito às pessoas", desc: "Valorizamos quem constrói junto: nossos colaboradores, clientes e parceiros." },
    { title: "Aderência às normas técnicas", desc: "Atuamos dentro dos padrões exigidos, com responsabilidade e excelência." },
    { title: "Simplicidade com eficiência", desc: "Processos objetivos, comunicação clara e foco em resultado." }
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
                Institucional
              </span>
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold text-gray-900 tracking-tight leading-tight pt-2">
                Por que alugar sua máquina ou plataforma com a Jaco Locação?
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-10 space-y-8"
            >
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Missão</h3>
                <p className="text-gray-500 leading-relaxed md:text-justify max-w-lg">
                  Atuar como parceiro estratégico na locação de equipamentos, entregando soluções com performance e confiança para os setores da construção, indústria e infraestrutura.
                </p>
              </div>
              <div className="border-l-4 border-gray-200 pl-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Visão</h3>
                <p className="text-gray-500 leading-relaxed md:text-justify max-w-lg">
                  Ser a primeira escolha em locação de equipamentos na nossa região, reconhecida pela agilidade e confiabilidade.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gray-50 rounded-3xl border border-gray-100 p-10"
          >
            <h3 className="font-bold text-gray-900 text-lg mb-8">Nossos Valores</h3>
            <div className="space-y-3">
              {valores.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-extrabold text-sm shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900">{v.title}</span>
                    <span className="text-sm text-gray-500 mt-1">{v.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   DEPOIMENTOS — Locked
   ═══════════════════════════════════════════════ */
function Depoimentos() {
  const [active, setActive] = useState(0);
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
  ];

  const next = () => setActive((a) => (a + 1) % depoimentos.length);
  const prev = () =>
    setActive((a) => (a - 1 + depoimentos.length) % depoimentos.length);

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
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed italic">
                &quot;{depoimentos[active].text}&quot;
              </p>
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
                  <p className="text-gray-400 text-sm">{depoimentos[active].role}</p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xs" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all hover:scale-105"
            >
              <FaChevronLeft size={12} />
            </button>
            <div className="flex gap-2">
              {depoimentos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${active === i ? "bg-primary w-8" : "bg-gray-300 w-2"
                    }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all hover:scale-105"
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="font-sans antialiased text-dark">
      <Hero />
      <Solucoes />
      <ProdutosDestaque />
      <Diferenciais />
      <MissaoVisaoValores />
      <Depoimentos />
      {/* ═══ Instagram Section ═══ */}
      <section className="bg-[#fafaf9] py-20 md:py-28 relative overflow-hidden">
        {/* Subtle background blurs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-[10%] w-[400px] h-[400px] bg-lime/[0.06] rounded-full blur-[120px] -translate-y-1/2" />
          <div className="absolute top-1/2 right-[10%] w-[350px] h-[350px] bg-forest/[0.04] rounded-full blur-[120px] -translate-y-1/2" />
        </div>

        <div className="container-main relative">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-10">

            {/* Left Video Card */}
            <div className="hidden md:flex flex-col gap-4 w-60 shrink-0">
              <div className="relative group">
                <div className="absolute -inset-3 bg-lime/15 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="aspect-[9/16] rounded-[2rem] overflow-hidden relative shadow-xl ring-1 ring-black/[0.04]">
                  <video
                    src="/subfooter-esquerdo.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Center Content */}
            <div className="flex-1 text-center relative z-10 max-w-xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-forest/[0.06] rounded-full px-5 py-2 mb-8">
                <div className="w-1.5 h-1.5 bg-lime rounded-full" />
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-forest/70">35 anos de história · Palhoça, Santa Catarina</span>
              </div>

              <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] leading-[1.05] font-bold text-dark tracking-tight">
                Nos siga no<br />
                <span className="text-forest">Instagram.</span>
              </h2>

              <p className="text-gray-500 mt-6 max-w-md mx-auto leading-relaxed text-sm md:text-base">
                Acompanhe nosso dia a dia, novidades da frota e as obras que atendemos pelo Brasil.
              </p>

              <a
                href="https://www.instagram.com/jacolocacao?igsh=MWZ5ZGxkNHRnc2w4dg=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-10 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:scale-[1.02] hover:shadow-xl transition-all duration-300 shadow-md"
              >
                <FaInstagram className="text-lg" />
                @jacolocacao
              </a>

              {/* Mobile videos — shown only on mobile */}
              <div className="flex md:hidden gap-4 mt-10">
                <div className="flex-1 aspect-[9/16] rounded-2xl overflow-hidden shadow-lg">
                  <video src="/subfooter-esquerdo.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 aspect-[9/16] rounded-2xl overflow-hidden shadow-lg">
                  <video src="/subfooter-direito.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Right Video Card */}
            <div className="hidden md:flex flex-col gap-4 w-64 shrink-0">
              <div className="relative group">
                <div className="absolute -inset-3 bg-forest/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="aspect-[9/16] rounded-[2rem] overflow-hidden relative shadow-xl ring-1 ring-black/[0.04]">
                  <video
                    src="/subfooter-direito.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </section>
    </main>
  );
}
