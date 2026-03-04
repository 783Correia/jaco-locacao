import type { Metadata } from "next";
import ProdutosContent from "./content";

export const metadata: Metadata = {
  title: "Nossa Frota de Máquinas Pesadas | Jaco Locação",
  description:
    "Catálogo completo de escavadeiras hidráulicas, plataformas elevatórias e rolos compactadores para locação. Marcas como Bobcat, Case e Cat.",
  keywords:
    "locação de máquinas, jaco locacao, escavadeira hidráulica, plataformas elevatórias, rolo compactador",
  openGraph: {
    title: "Catálogo de Frota | Jaco Locação",
    description:
      "A melhor e mais moderna frota de máquinas pesadas para locação. Bobcat, Case, Caterpillar e muito mais.",
  },
};

export default function Page() {
  return <ProdutosContent />;
}
