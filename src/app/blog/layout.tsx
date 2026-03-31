import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Jaco Locação",
  description:
    "Artigos, dicas e novidades sobre locação de plataformas elevatórias, máquinas pesadas, segurança em obras e equipamentos para construção civil em Santa Catarina.",
  keywords:
    "blog locação de máquinas, plataforma elevatória, equipamentos para obras, segurança em obras, Jaco Locação",
  alternates: {
    canonical: "https://jacolocacao.com.br/blog",
  },
  openGraph: {
    title: "Blog | Jaco Locação",
    description:
      "Artigos, dicas e novidades sobre locação de plataformas elevatórias e máquinas pesadas em SC.",
    url: "https://jacolocacao.com.br/blog",
    siteName: "Jaco Locação",
    locale: "pt_BR",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
