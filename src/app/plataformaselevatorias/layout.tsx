import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Locação de Plataformas Elevatórias em SC | Jaco Locação',
    description: 'Alugue plataformas tesoura, articulada e telescópica de 6 a 28 metros em Santa Catarina. Frota própria, orçamento em minutos.',
    openGraph: {
        title: 'Locação de Plataformas Elevatórias em SC | Jaco Locação',
        description: 'Plataformas elevatórias de 6 a 28 metros. Frota própria e entrega rápida em SC.',
    },
};

export default function PlataformasLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
