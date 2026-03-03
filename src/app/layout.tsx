import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScroll from "@/components/SmoothScroll";
import Script from "next/script";
import { headers } from "next/headers";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const anosAtuacao = new Date().getFullYear() - 2010;

export const metadata: Metadata = {
  title: {
    default: "Jacó Locação | Locação de Máquinas Pesadas e Equipamentos",
    template: "%s | Jacó Locação",
  },
  description:
    `Força e Confiabilidade para a sua obra. Há ${anosAtuacao} anos oferecendo locação de retroescavadeiras, escavadeiras, pás carregadeiras e plataformas elevatórias.`,
  keywords:
    "locação de máquinas pesadas, retroescavadeira, escavadeira hidráulica, plataformas elevatórias, bobcat, locação de equipamentos para construção, Jacó locação",
  metadataBase: new URL("https://jacolocacao.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Jacó Locação",
    title: "Jacó Locação | Força e Confiabilidade para sua Obra",
    description:
      `Locação de máquinas pesadas de alto desempenho com suporte ágil e frota atualizada.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jacó Locação",
  image: "https://jacolocacao.com.br/logos/LOGO%20JACÓ%20LOCAÇÃO.png",
  url: "https://jacolocacao.com.br",
  telephone: "+55-11-90000-0000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Endereço da Empresa",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "00000-000",
    addressCountry: "BR",
  },
  priceRange: "$$$",
};

// LP routes that should NOT show the main site header/footer
const LP_ROUTES = ["/maquinario", "/plataformaselevatorias"];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-next-pathname") || headersList.get("x-invoke-path") || "";
  const isLP = LP_ROUTES.some(route => pathname.startsWith(route));

  return (
    <html lang="pt-BR">
      <head>
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <SmoothScroll>
          {!isLP && <Header />}
          <main>{children}</main>
          {!isLP && <Footer />}
          {!isLP && <WhatsAppButton />}
        </SmoothScroll>
      </body>
    </html>
  );
}
