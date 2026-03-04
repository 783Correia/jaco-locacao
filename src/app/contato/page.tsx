import type { Metadata } from "next";
import ContatoContent from "./content";

export const metadata: Metadata = {
  title: "Contato | Jaco Locação — Fale Conosco",
  description:
    "Entre em contato com a Jaco Locação. WhatsApp, formulário de contato e localização. Atendimento para construtoras em todo o Brasil.",
  keywords:
    "contato jaco locacao, WhatsApp jaco locacao, locacao plataformas contato, SC",
};

export default function Page() {
  return <ContatoContent />;
}
