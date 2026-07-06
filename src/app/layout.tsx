import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import LayoutClient from "@/components/LayoutClient";
import Script from "next/script";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700", "800"],
});


export const metadata: Metadata = {
  title: {
    default: "Locação de Plataformas Elevatórias em SC | Jaco Locação",
    template: "%s | Jaco Locação",
  },
  description:
    `Aluguel de plataformas elevatórias articuladas e tesouras em Santa Catarina. Frota nova, entrega rápida em Itajaí e região. Solicite um orçamento rápido!`,
  keywords:
    "locação de plataforma elevatória em itajaí, aluguel de plataforma elevatória em santa catarina, locação de plataforma articulada, locação de máquinas pesadas, escavadeira hidráulica, Jaco locação",
  metadataBase: new URL("https://www.jacolocadora.com.br"),
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
  "@type": "EquipmentRental",
  name: "Jaco Locação",
  image: "https://www.jacolocadora.com.br/logos/LOGO%20JAC%C3%93%20LOCA%C3%87%C3%83O.png",
  url: "https://www.jacolocadora.com.br",
  telephone: "+55-48-99250605",
  email: "contato@jacolocadora.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "BR-101, km 213, s/n",
    addressLocality: "Palhoça",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.6459,
    longitude: -48.6697,
  },
  areaServed: [
    { "@type": "State", name: "Santa Catarina" },
    { "@type": "City", name: "Palhoça" },
    { "@type": "City", name: "Florianópolis" },
    { "@type": "City", name: "Itajaí" },
    { "@type": "City", name: "Balneário Camboriú" },
    { "@type": "City", name: "Joinville" },
    { "@type": "City", name: "Brusque" },
    { "@type": "City", name: "Navegantes" },
  ],
  sameAs: [
    "https://instagram.com/jacolocacao",
    "https://facebook.com/jacolocacao",
  ],
  priceRange: "$$",
  description: "Locação de plataformas elevatórias articuladas, tesouras e máquinas pesadas em Santa Catarina. Frota nova, entrega rápida, suporte técnico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager — lazyOnload: analytics fora do caminho crítico de renderização */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
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
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Z3CDLTLXVP" strategy="lazyOnload" />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
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
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
