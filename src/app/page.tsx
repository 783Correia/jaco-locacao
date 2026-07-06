import { getWhatsAppLink } from "@/utils/whatsapp"
import { FaHandshake, FaAward, FaMapMarkedAlt, FaWrench, FaWhatsapp, FaInstagram, FaTag, FaExternalLinkAlt } from "react-icons/fa"
import LazyVideo from "@/components/LazyVideo"
import SectionHeading from "@/components/SectionHeading"

import HeroSection from "@/components/home/HeroSection"
import SolucoesSection from "@/components/home/SolucoesSection"
import ProdutosDestaqueSection from "@/components/home/ProdutosDestaqueSection"
import BlogSection from "@/components/home/BlogSection"
import DepoimentosSection from "@/components/home/DepoimentosSection"

/* ─────────────────────────────────────────────────
   DIFERENCIAIS — Server component (zero JS)
───────────────────────────────────────────────── */
const diferenciais = [
  { icon: FaHandshake, title: "Consultoria de Frota", description: "Ajudamos você a dimensionar os equipamentos certos para o seu tamanho de obra, sem desperdícios." },
  { icon: FaAward, title: "Marcas Oficiais", description: "Frota composta pelas líderes mundiais de mercado: JLG, Genie, Haulotte, Manitou, Skyjack, Hangcha, Bobcat, Yanmar, Caterpillar, Skytrack e JCB." },
  { icon: FaMapMarkedAlt, title: "Entrega Ágil", description: "Logística otimizada para entregar o maquinário no seu canteiro com o menor tempo possível." },
  { icon: FaWrench, title: "Suporte e Manutenção", description: "Equipe de mecânicos dedicados e preventivas em dia para garantir que sua obra não pare um segundo." },
]

function DiferenciaisSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-gray-50">
      <div className="container-main relative">
        <SectionHeading tag="Por que a Jaco Locação" title="Diferenciais para Aluguel de Plataformas e Máquinas" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {diferenciais.map((item) => (
            <div key={item.title} className="bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-7 text-center group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <item.icon size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 tracking-tight">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────
   MÁQUINAS À VENDA — Server component (zero JS)
───────────────────────────────────────────────── */
function MaquinasAVendaSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-forest">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-[15%] w-[400px] h-[400px] bg-lime/10 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-[10%] w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />
      </div>
      <div className="container-main relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime/10 border border-lime/20 mb-6">
            <FaTag className="text-lime text-xs" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime">Oportunidade</span>
          </span>
          <h2 className="text-[clamp(1.6rem,3.5vw,3rem)] font-extrabold text-white tracking-tight leading-tight">
            Máquinas <span className="text-lime">à Venda</span>
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            Além da locação, temos máquinas e equipamentos disponíveis para compra. Confira nosso estoque atualizado com condições especiais.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.emestoque.com.br/jacolocacao/estoque?ordenar=destaques"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-lime text-forest font-bold px-8 py-4 rounded-full text-sm md:text-base transition-all hover:scale-105 hover:shadow-glow-lime flex items-center gap-3 uppercase tracking-wider"
            >
              Ver Estoque Disponível
              <FaExternalLinkAlt className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={getWhatsAppLink("Olá! Vi que vocês têm máquinas à venda e gostaria de saber mais.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-white/20 text-white font-bold px-8 py-4 rounded-full text-sm md:text-base transition-all hover:scale-105 hover:bg-white/10 flex items-center gap-3"
            >
              <FaWhatsapp className="text-lg text-[#25D366]" />
              Falar com Vendas
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────
   MISSÃO VISÃO VALORES — Server component (zero JS)
───────────────────────────────────────────────── */
const valores = [
  { title: "Agilidade no atendimento", desc: "Resolvemos rápido porque entendemos que obra parada é prejuízo." },
  { title: "Compromisso e pontualidade", desc: "Cumprimos prazos com seriedade e responsabilidade em cada entrega." },
  { title: "Confiabilidade operacional", desc: "Equipamentos prontos, revisados e com suporte técnico sempre que necessário." },
  { title: "Segurança em primeiro lugar", desc: "Protegemos pessoas, operações e patrimônio em todas as etapas." },
  { title: "Respeito às pessoas", desc: "Valorizamos quem constrói junto: nossos colaboradores, clientes e parceiros." },
  { title: "Aderência às normas técnicas", desc: "Atuamos dentro dos padrões exigidos, com responsabilidade e excelência." },
  { title: "Simplicidade com eficiência", desc: "Processos objetivos, comunicação clara e foco em resultado." },
]

function MissaoVisaoValoresSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-dark bg-primary/10 px-4 py-1.5 rounded-full mb-4">Institucional</span>
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold text-gray-900 tracking-tight leading-tight pt-2">
              Por que alugar sua máquina ou plataforma com a Jaco Locação?
            </h2>
            <div className="mt-10 space-y-8">
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
            </div>
          </div>
          <div className="bg-gray-50 rounded-3xl border border-gray-100 p-10">
            <h3 className="font-bold text-gray-900 text-lg mb-8">Nossos Valores</h3>
            <div className="space-y-3">
              {valores.map((v, i) => (
                <div key={v.title} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary-dark font-extrabold text-sm shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900">{v.title}</span>
                    <span className="text-sm text-gray-500 mt-1">{v.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────
   INSTAGRAM — Server component, LazyVideo client boundary
───────────────────────────────────────────────── */
function InstagramSection() {
  return (
    <section className="bg-[#fafaf9] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-[10%] w-[400px] h-[400px] bg-lime/[0.06] rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-[10%] w-[350px] h-[350px] bg-forest/[0.04] rounded-full blur-[120px] -translate-y-1/2" />
      </div>
      <div className="container-main relative">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-10">
          {/* Left Video Card — desktop only */}
          <div className="hidden md:flex flex-col gap-4 w-60 shrink-0">
            <div className="relative group">
              <div className="absolute -inset-3 bg-lime/15 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="aspect-[9/16] rounded-[2rem] overflow-hidden relative shadow-xl ring-1 ring-black/[0.04]">
                <LazyVideo src="/subfooter-esquerdo.mp4" autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="flex-1 text-center relative z-10 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-forest/[0.06] rounded-full px-5 py-2 mb-8">
              <div className="w-1.5 h-1.5 bg-lime rounded-full" />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-forest/70">31 anos de história · Palhoça, Santa Catarina</span>
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
          </div>

          {/* Right Video Card — desktop only */}
          <div className="hidden md:flex flex-col gap-4 w-64 shrink-0">
            <div className="relative group">
              <div className="absolute -inset-3 bg-forest/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="aspect-[9/16] rounded-[2rem] overflow-hidden relative shadow-xl ring-1 ring-black/[0.04]">
                <LazyVideo src="/subfooter-direito.mp4" autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  )
}

/* ─────────────────────────────────────────────────
   PAGE — Server Component
───────────────────────────────────────────────── */
const heroVideoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Jaco Locação — máquinas pesadas e plataformas elevatórias em operação",
  description:
    "Vídeo institucional da Jaco Locação mostrando a frota de escavadeiras, plataformas elevatórias e máquinas pesadas disponíveis para locação em Santa Catarina.",
  contentUrl: "https://www.jacolocadora.com.br/hero-video.mp4",
  thumbnailUrl: "https://www.jacolocadora.com.br/logos/logo-jaco.png",
  uploadDate: "2026-05-01",
  inLanguage: "pt-BR",
  publisher: {
    "@type": "Organization",
    name: "Jaco Locação",
    url: "https://www.jacolocadora.com.br",
  },
};

export default function Home() {
  return (
    <main className="font-sans antialiased text-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heroVideoSchema) }}
      />
      <HeroSection />
      <SolucoesSection />
      <ProdutosDestaqueSection />
      <DiferenciaisSection />
      <MaquinasAVendaSection />
      <MissaoVisaoValoresSection />
      <BlogSection />
      <DepoimentosSection />
      <InstagramSection />
    </main>
  )
}
