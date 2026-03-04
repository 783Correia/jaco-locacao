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
    description: string;
    application: string;
    category: string;
    image: string;
    cardSpecs: Record<string, string>;
}

const MODELS: Model[] = [
    { name: "CAT 320", fullName: "Escavadeira Caterpillar 320", description: "Escavadeira robusta da classe de 20 toneladas. Alta capacidade de carga, escavação profunda e força de desagregação ideal para infraestrutura pesada.", application: "Escavações de grande porte", category: "escavadeira", image: "/frota/cat-320.jpg", cardSpecs: { "Profundidade": "6,72m", "Caçamba": "1,19m³", "Peso": "22500kg", "Dimensões": "3,18x9,53x3,13m" } },
    { name: "XCMG XE150BR", fullName: "Escavadeira XCMG XE150BR", description: "Escavadeira de 15 toneladas fabricada no Brasil, com excelente custo-benefício e peças de reposição acessíveis.", application: "Escavações médias", category: "escavadeira", image: "/frota/xe150br.jpg", cardSpecs: { "Profundidade": "5,54m", "Dimensões": "2,59x7,82x2,87m", "Peso": "14500kg" } },
    { name: "CAT 313D2L", fullName: "Escavadeira Caterpillar 313D2L", description: "Escavadeira de 13 toneladas com excelente desempenho em escavação, abertura de valas e manuseio de materiais.", application: "Versatilidade em obras", category: "escavadeira", image: "/frota/cat-313d2l.jpg", cardSpecs: { "Profundidade": "5,55m", "Dimensões": "2,59x7,62x2,83m", "Peso": "13900kg" } },
    { name: "Escavadeira 8t", fullName: "Escavadeira 8 Toneladas Yanmar VIO80", description: "Escavadeira compacta de 8 toneladas, ideal para obras urbanas e espaços reduzidos com alta produtividade.", application: "Obras compactas", category: "escavadeira", image: "/frota/escavadeira-8t.jpg", cardSpecs: { "Profundidade": "4,40m", "Dimensões": "2,27x6,46x2,68m", "Peso": "8285kg" } },
    { name: "Mini Escav. 1t", fullName: "Mini Escavadeira 1 Tonelada", description: "A menor da categoria, perfeita para trabalhos em espaços internos, jardins e áreas confinadas.", application: "Espaços ultra confinados", category: "mini-escavadeira", image: "/frota/mini-escavadeira-1t.jpg", cardSpecs: { "Profundidade": "1,82m", "Dimensões": "0,71x2,75x2,00m", "Peso": "1150kg" } },
    { name: "Mini Escav. 2t", fullName: "Mini Escavadeira 2 Toneladas", description: "Compacta e ágil, ideal para escavação leve em áreas urbanas, paisagismo e pequenas fundações.", application: "Obras residenciais", category: "mini-escavadeira", image: "/frota/mini-escavadeira-2t.jpg", cardSpecs: { "Profundidade": "2,20m", "Dimensões": "0,95x3,45x2,30m", "Peso": "1740kg" } },
    { name: "Mini Escav. 2,7t", fullName: "Mini Escavadeira 2,7 Toneladas", description: "Equilíbrio entre compacidade e força, excelente para saneamento, drenagem e obras residenciais.", application: "Escavações leves", category: "mini-escavadeira", image: "/frota/mini-escavadeira-2.7t.jpg", cardSpecs: { "Profundidade": "2,54m", "Dimensões": "1,50x4,10x2,53m", "Peso": "2735kg" } },
    { name: "Mini Escav. 3t", fullName: "Mini Escavadeira 3 Toneladas", description: "Versátil e potente para seu tamanho, perfeita para instalações hidráulicas e elétricas subterrâneas.", application: "Obras e terraplanagem", category: "mini-escavadeira", image: "/frota/mini-escavadeira-3t.jpg", cardSpecs: { "Profundidade": "2,97m", "Dimensões": "1,55x4,47x2,50m", "Peso": "3415kg" } },
    { name: "Mini Escav. 3,5t", fullName: "Mini Escavadeira 3,5 Toneladas", description: "Força de escavação superior em formato compacto, ideal para obras civis e terraplanagem leve.", application: "Fundações e valas", category: "mini-escavadeira", image: "/frota/mini-escavadeira-3.5t.jpg", cardSpecs: { "Profundidade": "3,41m", "Dimensões": "1,75x4,82x2,42m", "Peso": "3398kg" } },
    { name: "Mini Escav. 5,5t", fullName: "Mini Escavadeira 5,5 Toneladas", description: "A maior da linha mini, com capacidade próxima de uma escavadeira convencional e acesso a espaços restritos.", application: "Obras de médio porte", category: "mini-escavadeira", image: "/frota/mini-escavadeira-5.5t.jpg", cardSpecs: { "Profundidade": "3,60m", "Dimensões": "1,96x5,55x2,53m", "Peso": "4840kg" } },
    { name: "Bobcat S-650", fullName: "Mini Carregadeira Bobcat S-650", description: "Cabinada, com excelente capacidade de carga e versatilidade para movimentação de materiais em canteiros de obra.", application: "Carregamento e remoção", category: "mini-carregadeira", image: "/frota/bobcat-s650.jpg", cardSpecs: { "Capacidade": "1791kg", "Dimensões": "1,88x3,47x2,65m", "Peso": "4550kg" } },
    { name: "Manitou 1650R", fullName: "Mini Carregadeira Manitou 1650R", description: "Cabinada, robusta e ergonômica, projetada para alta produtividade em operações de carga e descarga.", application: "Carregamento pesado", category: "mini-carregadeira", image: "/frota/manitou-1650r.jpg", cardSpecs: { "Capacidade": "748kg", "Dimensões": "1,55x3,10x1,95m", "Peso": "2796kg" } },
    { name: "Telescópico 12,8m", fullName: "Manipulador Telescópico 12,8m", description: "Alcance de 12,8 metros para movimentação de cargas em altura. Ideal para construção civil e logística de canteiro.", application: "Movimentação em altura", category: "manipulador", image: "/frota/manipulador-12m.jpg", cardSpecs: { "Altura Trab.": "12,8m", "Capacidade": "3800kg", "Dimensões": "2,52x5,64x2,52m", "Peso": "11500kg" } },
    { name: "Telescópico 17m", fullName: "Manipulador Telescópico 17m", description: "Alcance de 17 metros para operações em grandes alturas. Perfeito para obras de grande porte e montagens industriais.", application: "Grandes alturas", category: "manipulador", image: "/frota/manipulador-17m.jpg", cardSpecs: { "Altura Trab.": "17m", "Capacidade": "4500kg", "Dimensões": "2,59x6,06x2,54m", "Peso": "12400kg" } },
    { name: "Rolo 1,5t Liso", fullName: "Rolo Compactador 1,5 Ton Liso", description: "Rolo compactador liso de 1,5 tonelada para compactação de solos em valas, calçadas e áreas de acesso restrito.", application: "Compactação de solo", category: "rolo", image: "/frota/rolo-compactador-1.5t.jpg", cardSpecs: { "Dimensões": "0,98x2,13x2,33m", "Peso": "1500kg" } },
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
        <motion.div layout initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.35 }}
            className="group rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm flex flex-col h-full">

            {/* Edge-to-edge Image Container */}
            <div className="relative aspect-[4/3] w-full bg-white flex items-center justify-center p-4 border-b border-gray-100">
                <Image
                    src={m.image}
                    alt={m.fullName}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
                />
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    {m.category.replace(/-/g, ' ')}
                </span>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">{m.fullName}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mt-2 mb-4 flex-grow">{m.description}</p>

                {/* Specs Grid */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-2">
                        {Object.entries(m.cardSpecs)
                            .filter(([key]) => key !== 'Dimensões')
                            .map(([key, value]) => (
                                <div key={key} className="flex flex-col bg-gray-50 p-2 rounded-md border border-gray-100">
                                    <span className="text-[9px] text-gray-400 font-semibold uppercase">{key}</span>
                                    <span className="text-xs text-gray-800 font-bold mt-0.5">{value}</span>
                                </div>
                            ))}
                    </div>

                    {/* Dimensions */}
                    {m.cardSpecs['Dimensões'] && m.cardSpecs['Dimensões'] !== 'n/a' && (
                        <div className="flex flex-col bg-gray-50 p-3 rounded-md border border-gray-100 mt-1">
                            <span className="text-[9px] text-gray-400 font-semibold uppercase text-center mb-2">Dimensões (m)</span>
                            <div className="flex justify-between items-center text-center">
                                {m.cardSpecs['Dimensões'].replace('m', '').split('x').map((val, idx) => {
                                    const labels = ['Largura', 'Comp.', 'Altura'];
                                    return (
                                        <div key={idx} className="flex flex-col flex-1">
                                            <span className="text-[8px] text-gray-400 uppercase">{labels[idx]}</span>
                                            <span className="text-xs text-gray-800 font-bold">{val}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* WhatsApp Button */}
                    <a href={`${WA}Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20${encodeURIComponent(m.fullName)}`} target="_blank" rel="noopener noreferrer"
                        className="mt-3 w-full bg-[#25D366] hover:bg-[#1ebd5c] text-white flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-sm">
                        <WaIcon size={18} /> Orçar Pelo WhatsApp
                    </a>
                </div>
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
                        <a href="https://www.instagram.com/jacolocacao?igsh=MWZ5ZGxkNHRnc2w4dg==" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
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
