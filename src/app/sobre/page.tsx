import type { Metadata } from "next";
import SobreContent from "./content";

export const metadata: Metadata = {
  title: "Sobre a Jaco Locação | Referência Nacional em Máquinas Pesadas",
  description:
    "Conheça a história e a missão da Jaco Locação. Oferecendo as melhores máquinas pesadas para aluguel e um suporte técnico exemplar para o sucesso das suas obras.",
  keywords:
    "sobre jaco locacao, história jaco locacao, locadora maquinas pesadas, SP",
};

export default function Page() {
  return <SobreContent />;
}
