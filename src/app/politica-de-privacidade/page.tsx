import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Jaco Locação coleta, usa e protege seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).",
  alternates: {
    canonical: "https://www.jacolocadora.com.br/politica-de-privacidade",
  },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    title: "1. Quem somos",
    body: [
      "A Jaco Locação, localizada na BR-101, km 213, Palhoça/SC, é responsável pelo tratamento dos dados pessoais coletados neste site (www.jacolocadora.com.br), atuando como controladora nos termos da Lei Geral de Proteção de Dados — LGPD (Lei nº 13.709/2018).",
    ],
  },
  {
    title: "2. Quais dados coletamos",
    body: [
      "Dados fornecidos por você: ao preencher o formulário de contato, coletamos nome, telefone/WhatsApp, e-mail, cidade e informações sobre a sua obra ou equipamento de interesse. Esses dados são usados exclusivamente para responder à sua solicitação de orçamento ou contato.",
      "Dados de navegação: utilizamos Google Analytics e Google Tag Manager, que coletam dados de uso do site (páginas visitadas, tempo de navegação, tipo de dispositivo, região aproximada) por meio de cookies, de forma agregada e pseudonimizada.",
    ],
  },
  {
    title: "3. Como usamos seus dados",
    body: [
      "Os dados do formulário de contato são transmitidos diretamente ao nosso WhatsApp comercial para atendimento — não são armazenados em banco de dados próprio deste site.",
      "Os dados de navegação são usados para entender como o site é utilizado e melhorar a experiência, o conteúdo e as campanhas da Jaco Locação.",
      "Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing.",
    ],
  },
  {
    title: "4. Compartilhamento com operadores",
    body: [
      "Para funcionar, este site utiliza serviços de terceiros que podem processar dados em nosso nome: Google (Analytics e Tag Manager, para métricas de uso), Meta/WhatsApp (para atendimento via mensagem) e Vercel (hospedagem do site, com servidores que podem estar localizados fora do Brasil). Cada um desses operadores possui suas próprias políticas de privacidade e mecanismos de conformidade para transferência internacional de dados.",
    ],
  },
  {
    title: "5. Cookies",
    body: [
      "Cookies são pequenos arquivos armazenados no seu navegador. Usamos cookies de análise (Google Analytics) para medir audiência. Você pode desativar os cookies nas configurações do seu navegador a qualquer momento — o site continuará funcionando normalmente.",
    ],
  },
  {
    title: "6. Retenção e segurança",
    body: [
      "As conversas iniciadas via WhatsApp seguem a retenção padrão do atendimento comercial e podem ser excluídas mediante solicitação. Os dados de análise seguem os prazos de retenção configurados no Google Analytics (até 14 meses).",
      "Adotamos medidas técnicas de segurança no site, incluindo criptografia HTTPS em todas as páginas e cabeçalhos de proteção contra ataques comuns.",
    ],
  },
  {
    title: "7. Seus direitos (art. 18 da LGPD)",
    body: [
      "Você pode, a qualquer momento, solicitar: confirmação de tratamento dos seus dados; acesso aos dados; correção de dados incompletos ou desatualizados; anonimização, bloqueio ou eliminação de dados desnecessários; portabilidade; e revogação do consentimento.",
      "Para exercer qualquer um desses direitos, entre em contato pelo e-mail contato@jacolocadora.com.br ou pelo WhatsApp (48) 99925-0605. Responderemos no prazo previsto em lei.",
    ],
  },
  {
    title: "8. Alterações desta política",
    body: [
      "Esta política pode ser atualizada para refletir mudanças no site ou na legislação. A versão mais recente estará sempre disponível nesta página, com a data de atualização abaixo.",
    ],
  },
];

export default function PoliticaDePrivacidade() {
  return (
    <main className="font-sans antialiased text-dark">
      {/* Hero */}
      <section className="relative bg-forest pt-32 pb-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-lime rounded-full translate-y-1/2 translate-x-1/3 blur-3xl" />
        </div>
        <div className="container-main relative text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4">
            LGPD
          </span>
          <h1 className="text-display-sm text-white">Política de Privacidade</h1>
          <p className="text-white/60 text-lg mt-4 max-w-xl mx-auto">
            Como coletamos, usamos e protegemos seus dados pessoais.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="bg-gray-50 section-padding">
        <div className="container-main">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-card">
            {SECTIONS.map((section) => (
              <div key={section.title} className="mb-10 last:mb-0">
                <h2 className="text-xl font-extrabold text-dark tracking-tight mb-4">
                  {section.title}
                </h2>
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-gray-500 text-[15px] leading-relaxed mb-3 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-gray-400 text-sm">
                Última atualização: 3 de julho de 2026.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Dúvidas sobre esta política?{" "}
                <Link href="/contato" className="text-primary font-semibold hover:underline">
                  Fale conosco
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
