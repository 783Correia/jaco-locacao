"use client";

import { motion } from "framer-motion";
import { FaBullseye, FaHandshake, FaCommentDots, FaShieldAlt, FaLeaf, FaChartLine, FaTrophy } from "react-icons/fa";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function SobreContent() {
  return (
    <div className="bg-white">

      {/* ═══════════════════════════════════════
           HERO — Dark, impactful header
           ═══════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 md:pb-28 bg-gradient-to-br from-forest-dark via-forest to-primary-dark overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        {/* Glow */}
        <div className="hidden md:block absolute top-10 right-10 w-96 h-96 bg-lime/20 rounded-full blur-[120px]" />

        <div className="container-main relative z-10 text-center">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 text-[10px] font-bold uppercase tracking-widest text-white/80">
              <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
              Sobre a Jaco Locação
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Força e tradição no<br className="hidden sm:block" />
              <span className="text-lime">mercado de locação</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
              Com grande tradição no mercado de locação de máquinas pesadas, a Jaco Locação é garantia de agilidade, segurança e profissionalismo para sua empresa.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 max-w-4xl mx-auto"
          >
            {[
              { number: "15+", label: "Marcas Parceiras" },
              { number: "1000+", label: "Obras Atendidas" },
              { number: "100%", label: "Equipamentos Revisados" },
              { number: "24h", label: "Suporte Técnico" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/[0.07] backdrop-blur-lg border border-white/[0.12] rounded-2xl p-4 md:p-6">
                <div className="text-2xl md:text-3xl font-extrabold text-lime">{stat.number}</div>
                <div className="text-white/40 text-[10px] md:text-xs font-medium uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           QUEM SOMOS
           ═══════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text */}
            <motion.div {...fadeUp}>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6">
                Quem Somos
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Soluções completas em <span className="text-primary">locação de máquinas</span> pesadas
              </h2>
              <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>
                  A Jaco Locação chegou para resolver os problemas de sua empresa. Com grande tradição no mercado de locação de máquinas e serviços, a Jaco Locação é garantia de agilidade e segurança para sua empresa.
                </p>
                <p>
                  Sejam nos serviços de locação de máquinas ou na prestação de serviços de mão de obra, a Jaco Locação conta com infraestrutura e tecnologia necessárias para atingir máxima precisão e garantir a eficiência operacional.
                </p>
                <p className="font-medium text-gray-800">
                  Se sua empresa procura o melhor desempenho com maior rentabilidade, ela precisa dos serviços da Jaco Locação.
                </p>
              </div>
            </motion.div>

            {/* Right: Value Props */}
            <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: FaShieldAlt, title: "Segurança", desc: "Equipamentos revisados e dentro das normas regulamentadoras" },
                  { icon: FaChartLine, title: "Produtividade", desc: "Máquinas modernas que maximizam o rendimento da sua obra" },
                  { icon: FaLeaf, title: "Meio Ambiente", desc: "Compromisso com práticas sustentáveis em todas as operações" },
                  { icon: FaTrophy, title: "Excelência", desc: "Profissionalismo que garante satisfação e confiança" },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-5 md:p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary">
                      <item.icon className="text-lg" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           MISSÃO E COMPROMISSO
           ═══════════════════════════════════════ */}
      <section className="bg-gray-50 section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <motion.div {...fadeUp}>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
                Institucional
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Missão &amp; Compromisso
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Missão */}
            <motion.div {...fadeUp} className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <FaBullseye className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Nossa Missão</h3>
                  <div className="w-12 h-1 bg-primary rounded-full mt-1" />
                </div>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed md:text-justify">
                &ldquo;Atingir êxitos duradouros em nossos negócios e empreendimentos, assegurando a máxima eficiência no uso dos recursos e a satisfação de nossos clientes, funcionários e a sociedade onde desenvolvemos nossas atividades. A conscientização de todo pessoal próprio e contratado sobre a prevenção de riscos, as operações de acordo com o ambiente, sistema de qualidade e os cuidados e remediação do meio ambiente.&rdquo;
              </p>
            </motion.div>

            {/* Compromisso */}
            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <FaHandshake className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Compromisso</h3>
                  <div className="w-12 h-1 bg-primary rounded-full mt-1" />
                </div>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed md:text-justify">
                Oferecer serviço imediato às necessidades de nossos clientes, colaborando desde o início de seu planejamento de investimentos. Prestar serviços ao cliente com qualidade, segurança e preservando o meio ambiente.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           MENSAGEM DA DIREÇÃO
           ═══════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden">
        {/* Subtle bg accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
                Mensagem da Direção
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Uma palavra da nossa liderança
              </h2>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="bg-gradient-to-br from-forest-dark to-forest rounded-3xl p-8 md:p-14 relative overflow-hidden">
              {/* Pattern */}
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

              <FaCommentDots className="text-white/10 text-5xl md:text-7xl absolute top-6 right-6" />

              <div className="relative space-y-5 text-white/80 text-sm md:text-base leading-relaxed md:leading-loose">
                <p>
                  &ldquo;Uma atitude de constante monitoramento e antecipação das necessidades do mercado, de andamento e suporte confiável nos projetos de nossos clientes, de constante melhoramento em nossos padrões de produtividade, qualidade, saúde, segurança e proteção do meio ambiente têm possibilitado um crescimento constante e sustentado de nossa atividade.&rdquo;
                </p>
                <p>
                  &ldquo;O alcançado até hoje, constitui somente uma base de apoio para a constante procura de melhoramento e crescimento de nossa Organização. A consolidação de nossos negócios, com vínculos de longo prazo com nossos clientes e a participação em novos mercados constitui um objetivo que estamos atingindo com decisão e convicção.&rdquo;
                </p>
                <p>
                  &ldquo;Acreditamos nas possibilidades de desenvolvimento sustentável da Região e de nossa Organização. Temos confiança na criatividade, entusiasmo e compromisso das pessoas que a integram, que continuarão refletindo-se em benefício de nossos clientes, nossas famílias e da comunidade.&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-lime flex items-center justify-center text-forest font-extrabold text-lg">J</div>
                <div>
                  <p className="text-white font-bold text-sm">Direção Executiva</p>
                  <p className="text-white/40 text-xs">Jaco Locação de Máquinas</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           CTA — Call to Action
           ═══════════════════════════════════════ */}
      <section className="bg-gray-50 section-padding">
        <div className="container-main text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pronto para sua próxima obra?
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-8 text-sm md:text-base">
              Entre em contato com nossos especialistas e descubra como a Jaco Locação pode impulsionar a produtividade do seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contato" className="btn-lime">
                Fale com um Especialista
              </Link>
              <Link href="/frota" className="btn-outline">
                Ver Nossa Frota
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
