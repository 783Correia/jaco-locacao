"use client";

import { motion } from "framer-motion";
import { FaUsers, FaBullseye, FaHandshake, FaCommentDots } from "react-icons/fa";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function SobreContent() {
  return (
    <div className="bg-white pt-32 pb-20">

      {/* ═══════════════════════════════════════
           QUEM SOMOS
           ═══════════════════════════════════════ */}
      <section className="relative section-padding pb-8">
        <div className="container-main max-w-4xl text-center">
          <motion.div {...fadeUp}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a3b2a] mb-6 tracking-tight">
              Quem Somos
            </h1>
            <div className="flex justify-center mb-8">
              <FaUsers className="text-[#1a3b2a] text-5xl opacity-90" />
            </div>
            <div className="inline-block relative mb-12">
              <span className="text-[#1a3b2a] font-medium tracking-widest uppercase text-sm px-4">
                - Conheça a nossa empresa -
              </span>
            </div>

            <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed font-medium max-w-3xl mx-auto text-left md:text-justify">
              <p>
                A Jaco Locação chegou para resolver os problemas de sua empresa. Com grande tradição no mercado de locação de máquinas e serviços a Jaco Locação é garantia de agilidade e segurança para sua empresa.
              </p>
              <p>
                Sejam nos serviços de locação de máquinas ou na prestação de serviços de mão de obra, a Jaco Locação conta com infra-estrutura e tecnologia necessárias para atingir máxima precisão e garantir a eficiência operacional. Isso é profissionalismo. E com esse perfil garantimos a satisfação e confiança de nossos clientes. Por isso, se sua empresa procura o melhor desempenho com maior rentabilidade, ela precisa dos serviços da Jaco Locação.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           MISSÃO E COMPROMISSO
           ═══════════════════════════════════════ */}
      <section className="bg-gray-50 section-padding my-12 rounded-3xl mx-4 md:mx-8 lg:mx-16 shadow-sm border border-gray-100">
        <div className="container-main max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">

            {/* Missão */}
            <motion.div {...fadeUp} className="text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#1a3b2a]/10 flex items-center justify-center shrink-0">
                  <FaBullseye className="text-[#1a3b2a] text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a3b2a] mb-2 tracking-tight">
                    - Nossa Missão -
                  </h2>
                </div>
              </div>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed md:text-justify italic font-medium">
                &ldquo;Atingir êxitos duradouros em nossos negócios e empreendimentos, assegurando a máxima eficiência no uso dos recursos e a satisfação de nossos clientes, funcionários e a sociedade onde desenvolvemos nossas atividades. A conscientização de todo pessoal próprio e contratado sobre a prevenção de riscos, as operações de acordo com o ambiente, sistema de qualidade e os cuidados e remediação do meio ambiente.&rdquo;
              </p>
            </motion.div>

            {/* Compromisso */}
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#1a3b2a]/10 flex items-center justify-center shrink-0">
                  <FaHandshake className="text-[#1a3b2a] text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a3b2a] mb-2 tracking-tight">
                    - Compromisso com os clientes -
                  </h2>
                </div>
              </div>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed md:text-justify font-medium">
                Oferecer serviço imediato às necessidades de nossos clientes, colaborando desde o início de seu planejamento de investimentos. Prestar serviços ao cliente com qualidade, segurança e preservando o meio ambiente.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           MENSAGEM DA DIREÇÃO
           ═══════════════════════════════════════ */}
      <section className="relative section-padding max-w-4xl mx-auto text-center px-6">
        <motion.div {...fadeUp}>
          <div className="flex justify-center mb-6">
            <FaCommentDots className="text-[#1a3b2a]/20 text-5xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3b2a] mb-10 tracking-tight">
            - Mensagem da direção da empresa -
          </h2>
          <div className="space-y-6 text-gray-600 text-base md:text-lg leading-loose italic md:text-justify font-medium">
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
        </motion.div>
      </section>

    </div>
  );
}
