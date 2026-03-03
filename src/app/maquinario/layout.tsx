import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Locação de Máquinas Pesadas em SC | Jacó Locação',
    description: 'Alugue escavadeiras, mini escavadeiras, manipuladores telescópicos e mais em Santa Catarina. Frota própria, orçamento em minutos, entrega na sua obra.',
    keywords: 'máquinas pesadas, locação, aluguel, escavadeira, mini escavadeira, manipulador telescópico, mini carregadeira, rolo compactador, Santa Catarina, SC',
    openGraph: {
        title: 'Locação de Máquinas Pesadas em SC | Jacó Locação',
        description: 'Frota própria de escavadeiras, mini escavadeiras e mais. Orçamento em minutos.',
        type: 'website',
    },
};

export default function MaquinarioLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
