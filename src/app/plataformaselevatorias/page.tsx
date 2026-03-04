'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const WA = "https://wa.me/554899250605?text=";
const WA_DEFAULT = WA + "Olá!%20Preciso%20de%20um%20orçamento%20para%20locação%20de%20plataforma%20elevatória.";

const HERO_MACHINES = [
    { name: "Tesoura 8m", type: "Plataforma Tesoura", height: "8m", image: "/frota/plataforma-tesoura-8m.jpg" },
    { name: "Articulada 12m", type: "Articulada Elétrica", height: "12m", image: "/frota/plataforma-articulada-eletrica-12m.jpg" },
    { name: "Articulada Diesel 16m", type: "Articulada Diesel", height: "16m", image: "/frota/plataforma-articulada-diesel-16m.jpg" },
    { name: "Tesoura 10m", type: "Plataforma Tesoura", height: "10m", image: "/frota/plataforma-tesoura-10m.jpg" },
    { name: "Telescópica 28m", type: "Telescópica Diesel", height: "28m", image: "/frota/plataforma-telescopica-diesel-28m.png" },
    { name: "Articulada 20m", type: "Articulada Diesel 4x4", height: "20m", image: "/frota/plataforma-articulada-diesel-20m.jpg" },
    { name: "Tesoura 14m TT", type: "Tesoura Todo Terreno", height: "14m", image: "/frota/plataforma-tesoura-14m-todo-terreno.jpg" },
];

interface Model { name: string; fullName: string; height: string; capacity: string; application: string; category: string; image: string; }

const MODELS: Model[] = [
    { name: "Tesoura 6,6m", fullName: "Plataforma Tesoura Elétrica 6,6m Compacta", height: "6,6m", capacity: "230kg", application: "Ambientes internos", category: "tesoura", image: "/frota/plataforma-tesoura-6.6m-compacta.jpg" },
    { name: "Tesoura 8m", fullName: "Plataforma Tesoura Elétrica 8m", height: "8m", capacity: "350kg", application: "Manutenção predial", category: "tesoura", image: "/frota/plataforma-tesoura-8m.jpg" },
    { name: "Tesoura 10m Comp.", fullName: "Plataforma Tesoura Elétrica 10m Compacta", height: "10m", capacity: "230kg", application: "Áreas internas", category: "tesoura", image: "/frota/plataforma-tesoura-10m-compacta.jpg" },
    { name: "Tesoura 10m", fullName: "Plataforma Tesoura Elétrica 10m", height: "10m", capacity: "450kg", application: "Uso geral", category: "tesoura", image: "/frota/plataforma-tesoura-10m.jpg" },
    { name: "Tesoura 12m", fullName: "Plataforma Tesoura Elétrica 12m", height: "12m", capacity: "450kg", application: "Instalações industriais", category: "tesoura", image: "/frota/plataforma-tesoura-12m.jpg" },
    { name: "Tesoura 14m", fullName: "Plataforma Tesoura Elétrica 14m", height: "14m", capacity: "450kg", application: "Alto alcance interno", category: "tesoura", image: "/frota/plataforma-tesoura-14m.jpg" },
    { name: "Tesoura 14m TT", fullName: "Plataforma Tesoura 14m Todo Terreno", height: "14m", capacity: "700kg", application: "Uso externo", category: "tesoura", image: "/frota/plataforma-tesoura-14m-todo-terreno.jpg" },
    { name: "Articulada Diesel 12m", fullName: "Plataforma Articulada Diesel 12,5m", height: "12,5m", capacity: "230kg", application: "Ambientes externos", category: "articulada", image: "/frota/plataforma-articulada-diesel-12m.jpg" },
    { name: "Articulada Diesel 16m", fullName: "Plataforma Articulada Diesel 4x4 16m", height: "16m", capacity: "230kg", application: "Terrenos irregulares", category: "articulada", image: "/frota/plataforma-articulada-diesel-16m.jpg" },
    { name: "Articulada Diesel 20m", fullName: "Plataforma Articulada Diesel 4x4 20m", height: "20m", capacity: "230kg", application: "Construção e montagem", category: "articulada", image: "/frota/plataforma-articulada-diesel-20m.jpg" },
    { name: "Articulada Elétrica 12m", fullName: "Plataforma Articulada Elétrica 12m", height: "12m", capacity: "230kg", application: "Ambientes internos", category: "articulada", image: "/frota/plataforma-articulada-eletrica-12m.jpg" },
    { name: "Articulada Elétrica 15m", fullName: "Plataforma Articulada Elétrica 15m", height: "15m", capacity: "230kg", application: "Galpões e shoppings", category: "articulada", image: "/frota/plataforma-articulada-eletrica-15m.jpg" },
    { name: "Articulada Elétrica 17m", fullName: "Plataforma Articulada Elétrica 17m", height: "17m", capacity: "230kg", application: "Operação limpa", category: "articulada", image: "/frota/plataforma-articulada-eletrica-17m.jpg" },
    { name: "Telescópica 28m", fullName: "Plataforma Telescópica Diesel 28m", height: "28m", capacity: "230kg", application: "Torres e fachadas", category: "articulada", image: "/frota/plataforma-telescopica-diesel-28m.png" },
];

const TABS = [
    { label: 'Todas', value: 'all' },
    { label: 'Tesoura', value: 'tesoura' },
    { label: 'Articulada', value: 'articulada' },
];

const STEPS = [
    { num: '01', title: 'Solicite um Orçamento', desc: 'Entre em contato pelo WhatsApp ou telefone e informe o modelo e o prazo desejado.', icon: '📋' },
    { num: '02', title: 'Receba a Proposta', desc: 'Nossa equipe analisa a necessidade e envia um orçamento personalizado.', icon: '💰' },
    { num: '03', title: 'Entrega no Local', desc: 'Transportamos a plataforma até o local da obra com pontualidade.', icon: '🚛' },
    { num: '04', title: 'Suporte Completo', desc: 'Assistência técnica durante todo o período de locação.', icon: '🔧' },
];

const TESTIMONIALS = [
    { text: "Alugamos plataformas tesoura para manutenção do nosso galpão. Entrega pontual e equipamento impecável.", author: "Roberto M.", company: "Indústria · Joinville" },
    { text: "A articulada elétrica foi perfeita pra pintura interna do shopping. Zero emissão e baixo ruído.", author: "Patrícia V.", company: "Administradora · Florianópolis" },
    { text: "Precisávamos da telescópica de 28m pra manutenção da torre. Atendimento rápido, máquina de qualidade.", author: "Carlos F.", company: "Telecomunicações · Blumenau" },
    { text: "Trabalhamos com a Jaco há mais de 5 anos. Sempre plataformas bem cuidadas e atendimento rápido.", author: "André P.", company: "Construtora · Criciúma" },
    { text: "A tesoura todo terreno resolveu nosso problema em obra com piso irregular. Excelente máquina.", author: "Marcos L.", company: "Construtora · Itajaí" },
    { text: "Orçamento rápido pelo WhatsApp, entrega pontual e plataforma impecável. Parceiro fixo.", author: "Fernanda R.", company: "Engenharia · Chapecó" },
];

const Stars = () => (
    <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        ))}
    </div>
);

const WaIcon = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z" /></svg>
);

export default function PlataformasLP() {
    const [active, setActive] = useState('all');
    const filtered = active === 'all' ? MODELS : MODELS.filter(m => m.category === active);

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white font-sans antialiased overflow-x-hidden">

            {/* ── HERO ── */}
            <section className="relative w-full overflow-hidden bg-[#0a0a0a]">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(44,158,75,0.15), transparent 65%)' }} />

                <div className="relative z-10 pt-20 pb-12 text-center max-w-4xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-8 border border-primary/30 bg-primary/10">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Plataformas Elevatórias</span>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
                        Alugue plataformas<br />elevatórias <span className="text-primary">em SC.</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed text-gray-400">
                        Tesoura, articulada e telescópica. De 6 a 28 metros de altura. Entrega rápida em todo o estado de Santa Catarina.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
                        <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white text-lg bg-primary transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(44,158,75,0.35)]">
                            <WaIcon size={20} /> Solicitar orçamento
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12H19M19 12L12 5M19 12L12 19" /></svg>
                        </a>
                    </motion.div>
                </div>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="relative z-10 pb-16">
                    <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-20 pointer-events-none" style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }} />
                    <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-20 pointer-events-none" style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }} />

                    <div className="flex gap-5 px-8 sm:px-16 overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
                        {HERO_MACHINES.map((m) => (
                            <a key={m.name} href={`${WA}Olá!%20Tenho%20interesse%20na%20${encodeURIComponent(m.name)}.`} target="_blank" rel="noopener noreferrer"
                                className="flex-shrink-0 w-[240px] sm:w-[260px] rounded-3xl overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/10">
                                <div className="relative h-[200px] sm:h-[220px] overflow-hidden bg-white">
                                    <Image src={m.image} alt={`Locação de ${m.name} em Santa Catarina`} fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-110" sizes="260px" />
                                </div>
                                <div className="px-5 py-4 bg-white/[0.06]">
                                    <h3 className="text-base font-bold text-white mb-1">{m.name}</h3>
                                    <p className="text-xs text-gray-400 mb-3">{m.type}</p>
                                    <div className="text-lg font-extrabold text-primary">{m.height}</div>
                                    <div className="text-[10px] uppercase tracking-wider text-gray-400">Altura</div>
                                </div>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ── COMO FUNCIONA ── */}
            <section className="py-16 lg:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-5 py-2 rounded-full mb-6 bg-primary/10 border border-primary/20">
                        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary-dark">Processo Simples</span>
                    </motion.div>
                    <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">Como funciona a locação</motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {STEPS.map((s, i) => (
                            <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: i * 0.06 }}
                                className="rounded-3xl p-7 bg-white border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="text-4xl mb-5">{s.icon}</div>
                                <div className="text-xs font-bold mb-2 uppercase tracking-wider text-primary">{s.num}</div>
                                <h3 className="text-lg font-bold mb-2 text-gray-900">{s.title}</h3>
                                <p className="text-sm leading-relaxed text-gray-500">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5 }} className="mt-10">
                        <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-primary hover:scale-[1.03] hover:shadow-lg transition-all duration-300">
                            <WaIcon /> Solicitar orçamento agora
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ── FROTA ── */}
            <section className="py-16 lg:py-20 bg-gray-50" id="frota-plataformas">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-5 py-2 rounded-full mb-6 bg-primary/10 border border-primary/20">
                        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary-dark">Plataformas Elevatórias</span>
                    </motion.div>
                    <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Plataformas para<br />todo tipo de trabalho</motion.h2>
                    <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }}
                        className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">De 6,6m a 28m de altura. Tesoura, articulada e telescópica.</motion.p>

                    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5 }}
                        className="flex flex-wrap justify-center gap-3 mb-10">
                        {TABS.map(tab => (
                            <button key={tab.value} onClick={() => setActive(tab.value)}
                                className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-[1.03] ${active === tab.value ? 'bg-primary text-white border border-primary shadow-[0_4px_16px_rgba(44,158,75,0.3)]' : 'bg-white text-gray-500 border border-gray-200'}`}>
                                {tab.label}
                            </button>
                        ))}
                    </motion.div>

                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 text-left">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((m) => (
                                <motion.div key={m.name} layout initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.35 }}
                                    className="group rounded-3xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="relative h-52 overflow-hidden bg-white">
                                        <Image src={m.image} alt={`Locação de ${m.fullName} em Santa Catarina`} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-700" sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw" />
                                        <div className="absolute top-3 right-3 px-3 py-1.5 text-white text-xs font-bold rounded-lg bg-primary shadow-lg">{m.height}</div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-base font-bold text-gray-900 mb-1.5">{m.fullName}</h3>
                                        <span className="inline-block px-3 py-1 text-[10px] font-semibold rounded-full mb-4 capitalize text-primary-dark bg-primary/10">{m.category} · {m.application}</span>
                                        <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
                                            <span>📏 {m.height}</span>
                                            <span>⚖️ {m.capacity}</span>
                                        </div>
                                        <a href={`${WA}Olá!%20Tenho%20interesse%20na%20${encodeURIComponent(m.fullName)}.`} target="_blank" rel="noopener noreferrer"
                                            className="block py-3 text-center text-sm font-semibold text-white rounded-full bg-primary hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                                            <span className="flex items-center justify-center gap-2"><WaIcon size={14} /> Pedir Orçamento</span>
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* ── DEPOIMENTOS ── */}
            <section className="py-16 lg:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-5 py-2 rounded-full mb-6 bg-primary/10 border border-primary/20">
                        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary-dark">Depoimentos</span>
                    </motion.div>
                    <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">Quem trabalha com a Jaco<br />recomenda</motion.h2>

                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5 text-left">
                        {TESTIMONIALS.map((t, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="break-inside-avoid rounded-2xl p-6 bg-white border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                                <Stars />
                                <p className="text-sm leading-relaxed mb-5 text-gray-800">{t.text}</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white bg-primary flex-shrink-0">{t.author.charAt(0)}</div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                                        <p className="text-xs text-gray-500">{t.company}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA + FOOTER ── */}
            <section className="py-12 lg:py-16 bg-gray-50 border-t-[3px] border-primary">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary flex-shrink-0"><WaIcon size={24} /></div>
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Solicite seu orçamento</h3>
                            <p className="text-sm text-gray-500">Resposta rápida pelo WhatsApp. Atendemos todo o estado de SC.</p>
                        </div>
                    </div>
                    <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white text-sm bg-primary hover:scale-[1.03] hover:shadow-lg transition-all duration-300 flex-shrink-0">
                        Falar no WhatsApp
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12H19M19 12L12 5M19 12L12 19" /></svg>
                    </a>
                </div>
            </section>

            <footer className="py-6 bg-[#0a0a0a]">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Image src="https://jaco-locacao.vercel.app/logos/LOGO%20JAC%C3%93%20LOCA%C3%87%C3%83O.png" alt="Jaco Locação" width={120} height={36} className="h-7 w-auto opacity-70" />
                    <div className="flex items-center gap-5">
                        <a href="https://www.instagram.com/jacolocadora/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </a>
                        <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><WaIcon size={20} /></a>
                        <a href="tel:+5548999250605" className="text-white/40 hover:text-white transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </a>
                    </div>
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
                        Voltar ao topo <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
                    </button>
                </div>
            </footer>

            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <WaIcon size={28} />
            </a>
        </main>
    );
}
