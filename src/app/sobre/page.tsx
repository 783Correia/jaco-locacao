import type { Metadata } from "next";
import SobreContent from "./content";

export const metadata: Metadata = {
  title: { absolute: "Sobre a Jaco Locação | Máquinas Pesadas em SC" },
  description:
    "Conheça a história e a missão da Jaco Locação. Oferecendo as melhores máquinas pesadas para aluguel e um suporte técnico exemplar para o sucesso das suas obras.",
  keywords:
    "sobre jaco locacao, história jaco locacao, locadora maquinas pesadas, SC",
};

export default function Page() {
  return (
    <main className="font-sans antialiased text-dark">
      <SobreContent />
    </main>
  );
}
