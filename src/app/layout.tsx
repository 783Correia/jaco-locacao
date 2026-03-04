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


export const metadata: Metadata = {
  title: {
    default: "Locação de Plataforma Elevatória em SC e Itajaí | Jaco Locação",
    template: "%s | Jaco Locação",
  },
  description:
    `Aluguel de plataformas elevatórias articuladas e tesouras em Santa Catarina. Frota nova, entrega rápida em Itajaí e região. Solicite um orçamento rápido!`,
  keywords:
    "locação de plataforma elevatória em itajaí, aluguel de plataforma elevatória em santa catarina, locação de plataforma articulada, locação de máquinas pesadas, escavadeira hidráulica, Jaco locação",
  metadataBase: new URL("https://jacolocacao.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Jaco Locação",
    title: "Jaco Locação | Força e Confiabilidade para sua Obra",
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
  name: "Jaco Locação",
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
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K9G8W3CJ');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Z3CDLTLXVP" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-Z3CDLTLXVP');
            `,
          }}
        />
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K9G8W3CJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
