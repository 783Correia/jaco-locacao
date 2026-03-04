'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

/* ═══════════════════════════════════════
   DATA
   ═══════════════════════════════════════ */

const WA = "https://wa.me/554899250605?text=";
const WA_DEFAULT = WA + "Olá!%20Preciso%20de%20um%20orçamento%20para%20locação%20de%20máquinas%20pesadas.";

const HERO_MACHINES = [
    { name: "CAT 320", type: "Escavadeira", weight: "20t", image: "/frota/cat-320.jpg" },
    { name: "XCMG XE150BR", type: "Escavadeira", weight: "15t", image: "/frota/xe150br.jpg" },
    { name: "CAT 313D2L", type: "Escavadeira", weight: "13t", image: "/frota/cat-313d2l.jpg" },
    { name: "Escavadeira 8t", type: "Escavadeira", weight: "8t", image: "/frota/escavadeira-8t.jpg" },
    { name: "Bobcat S-650", type: "Mini Carregadeira", weight: "650kg", image: "/frota/bobcat-s650.jpg" },
    { name: "Manitou 1650R", type: "Mini Carregadeira", weight: "1650kg", image: "/frota/manitou-1650r.jpg" },
    { name: "Telescópico 12,8m", type: "Manipulador", weight: "3.5t", image: "/frota/manipulador-12m.jpg" },
];

interface Model {
    name: string;
    fullName: string;
    weight: string;
    application: string;
    category: string;
    image: string;
    specs: {
        label: string;
        value: string;
    }[];
}

const MODELS: Model[] = [
    { name: "CAT 320", fullName: "Escavadeira Caterpillar 320", weight: "20t", application: "Escavações de grande porte", category: "escavadeira", image: "/frota/cat-320.jpg", specs: [{ label: "Prof. de Escavação", value: "6,7m (aprox.)" }, { label: "Dimensões (LxCxA)", value: "3,18 x 9,53 x 3,13m" }] },
    { name: "XCMG XE150BR", fullName: "Escavadeira XCMG XE150BR", weight: "15t", application: "Escavações médias", category: "escavadeira", image: "/frota/xe150br.jpg", specs: [{ label: "Prof. de Escavação", value: "5,54m" }, { label: "Dimensões (LxCxA)", value: "2,59 x 7,82 x 2,87m" }] },
    { name: "CAT 313D2L", fullName: "Escavadeira Caterpillar 313D2L", weight: "13t", application: "Versatilidade em obras", category: "escavadeira", image: "/frota/cat-313d2l.jpg", specs: [{ label: "Prof. de Escavação", value: "5,55m" }, { label: "Dimensões (LxCxA)", value: "2,59 x 7,62 x 2,83m" }] },
    { name: "Escavadeira 8t", fullName: "Escavadeira 8 Toneladas", weight: "8t", application: "Obras compactas", category: "escavadeira", image: "/frota/escavadeira-8t.jpg", specs: [{ label: "Prof. de Escavação", value: "4,40m" }, { label: "Dimensões (LxCxA)", value: "2,27 x 6,46 x 2,68m" }] },
    { name: "Mini Escav. 1t", fullName: "Mini Escavadeira 1 Tonelada", weight: "1t", application: "Espaços ultra confinados", category: "mini-escavadeira", image: "/frota/mini-escavadeira-1t.jpg", specs: [{ label: "Prof. de Escavação", value: "1,82m" }, { label: "Dimensões (LxCxA)", value: "0,71 x 2,75 x 2,00m" }] },
    { name: "Mini Escav. 2t", fullName: "Mini Escavadeira 2 Toneladas", weight: "2t", application: "Obras residenciais", category: "mini-escavadeira", image: "/frota/mini-escavadeira-2t.jpg", specs: [{ label: "Prof. de Escavação", value: "2,20m" }, { label: "Dimensões (LxCxA)", value: "0,95 x 3,45 x 2,30m" }] },
    { name: "Mini Escav. 2,7t", fullName: "Mini Escavadeira 2,7 Toneladas", weight: "2,7t", application: "Escavações leves", category: "mini-escavadeira", image: "/frota/mini-escavadeira-2.7t.jpg", specs: [{ label: "Prof. de Escavação", value: "2,54m" }, { label: "Dimensões (LxCxA)", value: "1,50 x 4,10 x 2,53m" }] },
    { name: "Mini Escav. 3t", fullName: "Mini Escavadeira 3 Toneladas", weight: "3t", application: "Obras e terraplanagem", category: "mini-escavadeira", image: "/frota/mini-escavadeira-3t.jpg", specs: [{ label: "Prof. de Escavação", value: "2,97m" }, { label: "Dimensões (LxCxA)", value: "1,55 x 4,47 x 2,50m" }] },
    { name: "Mini Escav. 3,5t", fullName: "Mini Escavadeira 3,5 Toneladas", weight: "3,5t", application: "Fundações e valas", category: "mini-escavadeira", image: "/frota/mini-escavadeira-3.5t.jpg", specs: [{ label: "Prof. de Escavação", value: "3,41m" }, { label: "Dimensões (LxCxA)", value: "1,75 x 4,82 x 2,42m" }] },
    { name: "Mini Escav. 5,5t", fullName: "Mini Escavadeira 5,5 Toneladas", weight: "5,5t", application: "Obras de médio porte", category: "mini-escavadeira", image: "/frota/mini-escavadeira-5.5t.jpg", specs: [{ label: "Prof. de Escavação", value: "3,60m" }, { label: "Dimensões (LxCxA)", value: "1,96 x 5,55 x 2,53m" }] },
    { name: "Bobcat S-650", fullName: "Mini Carregadeira Bobcat S-650", weight: "4.550kg", application: "Carregamento e remoção", category: "mini-carregadeira", image: "/frota/bobcat-s650.jpg", specs: [{ label: "Capacidade Carga", value: "1.791 kg" }, { label: "Dimensões (LxCxA)", value: "1,88 x 3,47 x 2,65m" }] },
    { name: "Manitou 1650R", fullName: "Mini Carregadeira Manitou 1650R", weight: "2.796kg", application: "Carregamento pesado", category: "mini-carregadeira", image: "/frota/manitou-1650r.jpg", specs: [{ label: "Capacidade Carga", value: "748 kg" }, { label: "Dimensões (LxCxA)", value: "1,55 x 3,10 x 1,95m" }] },
    { name: "Telescópico 12,8m", fullName: "Manipulador Telescópico 12,8m", weight: "11.500kg", application: "Movimentação em altura", category: "manipulador", image: "/frota/manipulador-12m.jpg", specs: [{ label: "Altura de Trabalho", value: "12,8m" }, { label: "Cap./Dimensões", value: "3.800kg / 2,52x5,64x2,52m" }] },
    { name: "Telescópico 17m", fullName: "Manipulador Telescópico 17m", weight: "12.400kg", application: "Grandes alturas", category: "manipulador", image: "/frota/manipulador-17m.jpg", specs: [{ label: "Altura de Trabalho", value: "17m" }, { label: "Cap./Dimensões", value: "4.500kg / 2,59x6,06x2,54m" }] },
    { name: "Rolo 1,5t Liso", fullName: "Rolo Compactador 1,5 Ton Liso", weight: "2.796kg", application: "Compactação de solo", category: "rolo", image: "/frota/rolo-compactador-1.5t.jpg", specs: [{ label: "Força de Compac.", value: "1.500 kg" }, { label: "Dimensões (LxCxA)", value: "0,98 x 2,13 x 2,33m" }] },
];

const TABS = [
    { label: 'Todas', value: 'all' },
    { label: 'Escavadeira', value: 'escavadeira' },
    { label: 'Mini Escavadeira', value: 'mini-escavadeira' },
    { label: 'Mini Carregadeira', value: 'mini-carregadeira' },
    { label: 'Manipulador', value: 'manipulador' },
    { label: 'Rolo', value: 'rolo' },
];

const STEPS = [
    { num: '01', title: 'Solicite um Orçamento', desc: 'Entre em contato pelo WhatsApp ou telefone e informe o equipamento e o prazo.', icon: '📋' },
    { num: '02', title: 'Receba a Proposta', desc: 'Nossa equipe analisa a necessidade e envia um orçamento personalizado.', icon: '💰' },
    { num: '03', title: 'Entrega no Local', desc: 'Transportamos a máquina até o local da obra com pontualidade.', icon: '🚛' },
    { num: '04', title: 'Suporte Completo', desc: 'Assistência técnica durante todo o período de locação.', icon: '🔧' },
];

const TESTIMONIALS = [
    { text: "Precisávamos de uma escavadeira CAT para uma obra urgente e a Jaco entregou em menos de 48 horas.", author: "Rafael C.", company: "Construtora · Florianópolis" },
    { text: "Locamos mini escavadeiras para um loteamento inteiro. Preço justo e suporte técnico durante toda a obra.", author: "Marcelo T.", company: "Empreiteira · Joinville" },
    { text: "A variedade da frota impressiona. Desde 1 tonelada até a CAT 320. Tudo em um só fornecedor.", author: "Juliana S.", company: "Construtora · Itajaí" },
    { text: "Trabalhamos com a Jaco há mais de 5 anos. Sempre máquinas bem cuidadas e atendimento rápido.", author: "André P.", company: "Indústria · Criciúma" },
    { text: "O manipulador telescópico ajudou muito na obra. Entrega e retirada pontuais.", author: "Carla M.", company: "Construtora · Blumenau" },
    { text: "Orçamento rápido pelo WhatsApp, entrega pontual e máquina impecável. Parceiro fixo.", author: "Fernando L.", company: "Construtora · Chapecó" },
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

/* ═══════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════ */

const MachineCard = ({ m }: { m: Model }) => {
    return (
        <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            className="group rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden">

            {/* Edge-to-edge Image Container */}
            <div className="relative h-60 w-full overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                    src={m.image}
                    alt={m.fullName}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
                />
                {/* Top Badge (similar to 'Active') */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm shadow-sm rounded-full flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-xs font-semibold text-gray-800 tracking-wide capitalize">{m.category.replace(/-/g, ' ')}</span>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                {/* Header Row: Title & Subtitle */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex-1 pr-3">
                        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">{m.fullName}</h3>
                        <p className="text-sm font-medium text-gray-500">{m.application}</p>
                    </div>
                    {/* Following the professional UI 'Property Price' side */}
                    <div className="text-right flex-shrink-0">
                        <p className="text-[11px] font-semibold text-gray-400 mb-0.5">Peso Oper.</p>
                        <p className="text-xl font-bold text-[#45B2B4]">{m.weight}</p>
                    </div>
                </div>

                {/* Stats Box (similar to Token price / IRR) */}
                <div className="bg-gray-50/80 rounded-2xl p-4 flex justify-between items-center mb-5 mt-auto">
                    {m.specs.slice(0, 2).map((spec, index) => (
                        <div key={index} className="flex-1 text-center">
                            <p className="text-[11px] font-semibold text-gray-500 mb-1 leading-tight">{spec.label}</p>
                            <p className="text-xs font-bold text-[#45B2B4] leading-tight">{spec.value}</p>
                        </div>
                    ))}
                    {m.specs.length > 2 && m.specs.slice(2).map((spec, index) => (
                        <div key={index + 2} className="flex-1 text-center">
                            <p className="text-[11px] font-semibold text-gray-500 mb-1 leading-tight">{spec.label}</p>
                            <p className="text-xs font-bold text-[#45B2B4] leading-tight">{spec.value}</p>
                        </div>
                    ))}
                </div>

                {/* Call to Action - matching elegant minimal style but keeping green WA brand */}
                <a href={`${WA}Olá!%20Tenho%20interesse%20na%20${encodeURIComponent(m.fullName)}.`} target="_blank" rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 py-3.5 text-[14px] font-bold text-primary border border-primary/20 rounded-xl hover:bg-primary hover:text-white transition-colors duration-300">
                    <WaIcon size={18} /> Pedir Orçamento
                </a>
            </div>
        </motion.div>
    );
};

/* ═══════════════════════════════════════
   PAGE
   ═══════════════════════════════════════ */

export default function MaquinarioLP() {
    const [active, setActive] = useState('all');
    const filtered = active === 'all' ? MODELS : MODELS.filter(m => m.category === active);

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white font-sans antialiased overflow-x-hidden">

            {/* ── HERO ── */}
            <section className="relative w-full overflow-hidden bg-[#0a0a0a]">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(44,158,75,0.15), transparent 65%)' }} />

                <div className="relative z-10 pt-20 pb-12 text-center max-w-4xl mx-auto px-6">
                    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-8 border border-primary/30 bg-primary/10">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Locação de Máquinas Pesadas</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
                        Aluguel de máquinas<br />pesadas <span className="text-primary">em SC.</span>
                    </h1>

                    <p className="text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed text-gray-400">
                        Escavadeiras, mini escavadeiras, manipuladores e mais. Entrega rápida em todo o estado de Santa Catarina.
                    </p>

                    <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white text-lg bg-primary transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(44,158,75,0.35)]">
                        <WaIcon size={20} /> Solicitar orçamento
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12H19M19 12L12 5M19 12L12 19" /></svg>
                    </a>
                </div>

                <div className="relative z-10 pb-16">
                    <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-20 pointer-events-none" style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }} />
                    <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-20 pointer-events-none" style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }} />

                    <div className="flex gap-5 px-8 sm:px-16 overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
                        {HERO_MACHINES.map((m) => (
                            <a key={m.name} href={`${WA}Olá!%20Tenho%20interesse%20na%20${encodeURIComponent(m.name)}.`} target="_blank" rel="noopener noreferrer"
                                className="flex-shrink-0 w-[240px] sm:w-[260px] rounded-3xl overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/10">
                                <div className="relative h-[200px] sm:h-[220px] overflow-hidden bg-white">
                                    <Image src={m.image} alt={`Locação de ${m.name} em Santa Catarina`} fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" sizes="260px" />
                                </div>
                                <div className="px-5 py-4 bg-white/[0.06]">
                                    <h3 className="text-base font-bold text-white mb-1">{m.name}</h3>
                                    <p className="text-xs text-gray-400 mb-3">{m.type}</p>
                                    <div className="text-lg font-extrabold text-primary">{m.weight}</div>
                                    <div className="text-[10px] uppercase tracking-wider text-gray-400">Peso</div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── COMO FUNCIONA ── */}
            <section className="py-16 lg:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-5 py-2 rounded-full mb-6 bg-primary/10 border border-primary/20">
                        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary-dark">Processo Simples</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">Como funciona a locação</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {STEPS.map((s) => (
                            <div key={s.num} className="rounded-3xl p-7 bg-white border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="text-4xl mb-5">{s.icon}</div>
                                <div className="text-xs font-bold mb-2 uppercase tracking-wider text-primary">{s.num}</div>
                                <h3 className="text-lg font-bold mb-2 text-gray-900">{s.title}</h3>
                                <p className="text-sm leading-relaxed text-gray-500">{s.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10">
                        <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-primary hover:scale-[1.03] hover:shadow-lg transition-all duration-300">
                            <WaIcon /> Solicitar orçamento agora
                        </a>
                    </div>
                </div>
            </section>

            {/* ── FROTA ── */}
            <section className="py-16 lg:py-20 bg-gray-50" id="frota-maquinario">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-5 py-2 rounded-full mb-6 bg-primary/10 border border-primary/20">
                        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary-dark">Frota de Máquinas Pesadas</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Equipamentos de ponta para<br />todo tipo de obra</h2>
                    <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">Máquinas das melhores marcas com suporte técnico especializado.</p>

                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {TABS.map(tab => (
                            <button key={tab.value} onClick={() => setActive(tab.value)}
                                className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${active === tab.value ? 'bg-primary text-white border border-primary shadow-[0_4px_16px_rgba(44,158,75,0.3)]' : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-300'}`}>
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 text-left">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((m) => (
                                <MachineCard key={m.name} m={m} />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* ── DEPOIMENTOS ── */}
            <section className="py-16 lg:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-5 py-2 rounded-full mb-6 bg-primary/10 border border-primary/20">
                        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary-dark">Depoimentos</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">Quem constrói com a Jaco<br />recomenda</h2>

                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5 text-left">
                        {TESTIMONIALS.map((t, i) => (
                            <div key={i} className="break-inside-avoid rounded-2xl p-6 bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
                                <Stars />
                                <p className="text-sm leading-relaxed mb-5 text-gray-800">{t.text}</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white bg-primary flex-shrink-0">{t.author.charAt(0)}</div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                                        <p className="text-xs text-gray-500">{t.company}</p>
                                    </div>
                                </div>
                            </div>
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
                    <Image src="/logos/LOGO JACÓ LOCAÇÃO.png" alt="Jaco Locação" width={120} height={36} className="h-7 w-auto opacity-70" />
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

            {/* WhatsApp floating button */}
            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <WaIcon size={28} />
            </a>
        </main>
    );
}
