"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import {
    FaArrowLeft,
    FaCheckCircle,
    FaHardHat,
    FaTractor,
    FaTruckMoving,
    FaWrench,
    FaCog,
    FaChevronDown,
    FaWhatsapp,
    FaCrosshairs,
    FaShieldAlt,
    FaBolt,
} from "react-icons/fa";
import Link from "next/link";
import { getWhatsAppLink } from "@/utils/whatsapp";

// ── Category Mappings ──
const categoryColors: Record<string, string> = {
    Retroescavadeiras: "text-orange-500 border-orange-500/20 bg-orange-500/10",
    Escavadeiras: "text-yellow-500 border-yellow-500/20 bg-yellow-500/10",
    "Pás Carregadeiras": "text-green-500 border-green-500/20 bg-green-500/10",
    Plataformas: "text-sky-500 border-sky-500/20 bg-sky-500/10",
    Rolos: "text-zinc-400 border-zinc-500/20 bg-zinc-500/10",
};

const categoryIcons: Record<string, React.ElementType> = {
    Retroescavadeiras: FaTractor,
    Escavadeiras: FaTruckMoving,
    "Pás Carregadeiras": FaWrench,
    Plataformas: FaHardHat,
    Rolos: FaCog,
};

const benefitIcons = [FaBolt, FaCrosshairs, FaShieldAlt];

// ── Accordion Component ──
function SpecAccordion({
    title,
    specs,
    defaultOpen = false,
}: {
    title: string;
    specs: { label: string; value: string }[];
    defaultOpen?: boolean;
}) {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div className="border border-white/10 rounded-2xl overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/[0.03] transition-colors"
            >
                <span className="font-bold text-white text-sm uppercase tracking-wider">
                    {title}
                </span>
                <FaChevronDown
                    className={`text-white/40 text-xs transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>
            <motion.div
                initial={false}
                animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <div className="px-6 pb-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                        {specs.map((spec) => (
                            <div
                                key={spec.label}
                                className="flex justify-between items-baseline py-2 border-b border-white/[0.06] last:border-0"
                            >
                                <span className="text-white/50 text-sm">{spec.label}</span>
                                <span className="text-white font-semibold text-sm text-right ml-4">
                                    {spec.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

// ── Main Content ──
export default function ProdutoContent({ produto }: { produto: Product }) {
    const whatsappMessage = `Olá! Gostaria de solicitar um orçamento para locação: ${produto.name} (${produto.brand}).`;
    const whatsappLink = getWhatsAppLink(whatsappMessage);

    const Icon = categoryIcons[produto.category] || FaTractor;
    const colorClass =
        categoryColors[produto.category] || "text-lime border-lime/20 bg-lime/10";

    // Quick specs for hero section
    const quickSpecs = [
        produto.specs?.motor?.find((s) => s.label.includes("Potência")),
        produto.specs?.capacidades?.find((s) => s.label.includes("Peso")),
        produto.specs?.capacidades?.find(
            (s) =>
                s.label.includes("Prof.") ||
                s.label.includes("Altura de Trabalho") ||
                s.label.includes("Capacidade da Caçamba") ||
                s.label.includes("Largura do Tambor")
        ),
    ].filter(Boolean);

    return (
        <>
            {/* ═══════════════════════════════════════
                 HERO — Product Header
                 ═══════════════════════════════════════ */}
            <section className="bg-forest pt-28 pb-12 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-lime/[0.02] rounded-full blur-[150px] pointer-events-none" />

                <div className="container-main relative z-10">
                    {/* Back link */}
                    <Link
                        href="/frota"
                        className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-6 text-sm group"
                    >
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform text-xs" />
                        Voltar para a Frota
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/[0.08] group"
                        >
                            <img
                                src={produto.image}
                                alt={produto.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                            {/* Category badge */}
                            <div className="absolute top-5 left-5 z-10">
                                <span
                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider border backdrop-blur-md ${colorClass}`}
                                >
                                    <Icon className="text-xs" />
                                    {produto.category}
                                </span>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <span className="text-lime text-xs font-bold tracking-[0.2em] uppercase">
                                {produto.brand}
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-white leading-tight mt-2 mb-4">
                                {produto.name}
                            </h1>
                            <p className="text-white/50 leading-relaxed mb-8 max-w-lg">
                                {produto.description}
                            </p>

                            {/* Quick Specs */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                {quickSpecs.map(
                                    (spec) =>
                                        spec && (
                                            <div
                                                key={spec.label}
                                                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-4 text-center"
                                            >
                                                <div className="text-lg font-extrabold text-lime">
                                                    {spec.value}
                                                </div>
                                                <div className="text-[10px] text-white/40 uppercase tracking-wider mt-1 font-medium">
                                                    {spec.label}
                                                </div>
                                            </div>
                                        )
                                )}
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-lime flex-1 text-center justify-center flex items-center gap-2"
                                >
                                    <FaWhatsapp className="text-lg" />
                                    Solicitar Orçamento
                                </a>
                                <Link
                                    href="/contato"
                                    className="flex-1 text-center border border-white/20 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white/10 transition-all"
                                >
                                    Falar com Consultor
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 OVERVIEW — Visão Geral
                 ═══════════════════════════════════════ */}
            <section className="bg-forest-dark section-padding">
                <div className="container-main">
                    <div className="max-w-3xl">
                        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-6">
                            Visão Geral
                        </span>
                        <p className="text-white/70 text-lg leading-relaxed mb-10">
                            {produto.overview}
                        </p>

                        {/* Highlights */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {produto.highlights?.map((h) => (
                                <div key={h} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-lime mt-1 shrink-0 text-sm" />
                                    <span className="text-white/80 text-sm">{h}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 BENEFITS — Vantagens
                 ═══════════════════════════════════════ */}
            <section className="bg-forest section-padding">
                <div className="container-main">
                    <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4">
                        Vantagens
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
                        Por que locar a {produto.name}?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {produto.benefits?.map((benefit, i) => {
                            const BenefitIcon = benefitIcons[i % benefitIcons.length];
                            return (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card p-7 group hover:border-lime/30 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-lime/10 flex items-center justify-center mb-5 group-hover:bg-lime group-hover:text-forest text-lime transition-all duration-300">
                                        <BenefitIcon size={20} />
                                    </div>
                                    <h3 className="font-bold text-white text-lg mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-white/50 text-sm leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 SPECS — Especificações Técnicas
                 ═══════════════════════════════════════ */}
            <section className="bg-forest-dark section-padding">
                <div className="container-main">
                    <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4">
                        Dados Técnicos
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
                        Especificações Técnicas
                    </h2>

                    <div className="max-w-3xl space-y-3">
                        <SpecAccordion
                            title="Motor"
                            specs={produto.specs?.motor || []}
                            defaultOpen={true}
                        />
                        <SpecAccordion
                            title="Capacidades e Pesos"
                            specs={produto.specs?.capacidades || []}
                        />
                        <SpecAccordion
                            title="Dimensões"
                            specs={produto.specs?.dimensoes || []}
                        />
                        <SpecAccordion
                            title="Sistema Hidráulico"
                            specs={produto.specs?.hidraulica || []}
                        />
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 APPLICATIONS — Aplicações
                 ═══════════════════════════════════════ */}
            <section className="bg-forest section-padding">
                <div className="container-main">
                    <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4">
                        Aplicações
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
                        Ideal para
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {produto.applications?.map((app) => (
                            <div
                                key={app}
                                className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-2xl px-5 py-4 hover:bg-white/[0.08] hover:border-lime/20 transition-all duration-300"
                            >
                                <FaCheckCircle className="text-lime shrink-0 text-sm" />
                                <span className="text-white/80 text-sm font-medium">{app}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 CTA — Final Call to Action
                 ═══════════════════════════════════════ */}
            <section className="bg-gradient-to-r from-primary-dark via-primary to-lime-dark section-padding">
                <div className="container-main text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Pronto para colocar a {produto.name} na sua obra?
                    </h2>
                    <p className="text-white/70 mb-8 max-w-lg mx-auto">
                        Solicite um orçamento sem compromisso. Nossa equipe retorna em
                        minutos pelo WhatsApp.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-forest px-8 py-4 rounded-full font-bold text-base hover:scale-105 transition-all shadow-xl inline-flex items-center gap-2 justify-center"
                        >
                            <FaWhatsapp className="text-xl" />
                            Solicitar Orçamento Agora
                        </a>
                        <Link
                            href="/frota"
                            className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/10 transition-all inline-flex items-center gap-2 justify-center"
                        >
                            Ver Outras Máquinas
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
