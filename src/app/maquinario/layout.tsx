import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Locação de Máquinas Pesadas em SC | Jaco Locação',
    description: 'Alugue escavadeiras, mini escavadeiras, manipuladores telescópicos e mais em Santa Catarina. Frota própria, orçamento em minutos.',
    openGraph: {
        title: 'Locação de Máquinas Pesadas em SC | Jaco Locação',
        description: 'Frota própria de escavadeiras, mini escavadeiras e mais. Orçamento em minutos.',
    },
};

export default function MaquinarioLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
