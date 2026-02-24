export interface ProductSpec {
    label: string;
    value: string;
}

export interface ProductBenefit {
    title: string;
    description: string;
}

export interface Product {
    id: string;
    name: string;
    brand: string;
    category: string;
    description: string;
    image: string;
    slug: string;
    overview?: string;
    highlights?: string[];
    benefits?: ProductBenefit[];
    specs?: {
        motor?: ProductSpec[];
        dimensoes?: ProductSpec[];
        capacidades?: ProductSpec[];
        hidraulica?: ProductSpec[];
    };
    applications?: string[];
}

export const products: Product[] = [
    // ═══════════════════════════════════════
    //  ESCAVADEIRAS
    // ═══════════════════════════════════════
    {
        id: "esc-cat-320",
        name: "Escavadeira Cat 320",
        brand: "Caterpillar",
        category: "Escavadeiras",
        description: "Escavadeira robusta da classe de 20 toneladas. Alta capacidade de carga, escavação profunda e força de desagregação ideal para infraestrutura pesada.",
        image: "/frota/cat-320.jpg",
        slug: "cat-320",
        overview: "A Escavadeira Cat 320 é a escolha ideal para locação em obras de grande porte que exigem força bruta e precisão. Desenvolvida para encarar condições severas, este equipamento proporciona alto rendimento diário em movimentos de terra, mineração, demolição e abertura de valas profundas.",
        highlights: [
            "Peso operacional na faixa de 22.500 kg",
            "Profundidade máxima de escavação de 6,72 metros",
            "Alcance máximo ao nível do solo de 9,86 metros",
            "Força de escavação excepcional"
        ],
        benefits: [
            {
                title: "Alta Capacidade de Produção",
                description: "Caçamba de grande volume (1,19 m³) aliada a ciclos hidráulicos rápidos, garantindo o transporte e escavação de grandes volumes de material em menos tempo."
            },
            {
                title: "Robustez para Terrenos Severos",
                description: "Material rodante reforçado e estrutura super-resistente que suportam as demandas mais extremas de canteiros irregulares e pedreiras."
            },
            {
                title: "Alcance e Profundidade",
                description: "Permite escavações profundas para fundações e valas de grande porte, além de longo alcance para carga e descarga de caminhões."
            }
        ],
        specs: {
            motor: [
                { label: "Modelo", value: "Cat C4.4 ACERT" },
                { label: "Potência Líquida", value: "159 HP (119 kW)" },
            ],
            hidraulica: [
                { label: "Vazão Máxima do Sistema", value: "429 L/min" },
                { label: "Pressão Máxima - Equipamento", value: "35.000 kPa" }
            ],
            dimensoes: [
                { label: "Peso Operacional", value: "22.500 kg" },
                { label: "Profundidade Máxima de Escavação", value: "6.720 mm" },
                { label: "Alcance Máximo no Nível do Solo", value: "9.860 mm" },
                { label: "Altura Máxima de Corte", value: "9.450 mm" },
                { label: "Altura Máxima de Carga", value: "6.490 mm" }
            ],
            capacidades: [
                { label: "Capacidade da Caçamba", value: "1,19 m³" },
                { label: "Tanque de Combustível", value: "345 L" }
            ]
        },
        applications: [
            "Terraplanagem e movimentação massiva de terra",
            "Abertura de valas para saneamento e infraestrutura",
            "Demolição mecanizada pesada",
            "Mineração e pedreiras",
            "Carregamento de caminhões basculantes de alta capacidade"
        ]
    },
    {
        id: "esc-cat-313d2l",
        name: "Escavadeira Cat 313D2L",
        brand: "Caterpillar",
        category: "Escavadeiras",
        description: "Escavadeira de 13 toneladas com excelente desempenho em escavação, abertura de valas e manuseio de materiais.",
        image: "/frota/cat-313d2l.jpg",
        slug: "cat-313d2l",
    },
    {
        id: "esc-8t",
        name: "Escavadeira 8 Toneladas",
        brand: "XCMG",
        category: "Escavadeiras",
        description: "Escavadeira compacta de 8 toneladas, ideal para obras urbanas e espaços reduzidos com alta produtividade.",
        image: "/frota/escavadeira-8t.jpg",
        slug: "escavadeira-8t",
    },
    {
        id: "esc-xe150br",
        name: "Escavadeira XCMG XE150BR",
        brand: "XCMG",
        category: "Escavadeiras",
        description: "Escavadeira de 15 toneladas fabricada no Brasil, com excelente custo-benefício e peças de reposição acessíveis.",
        image: "/frota/xe150br.jpg",
        slug: "xe150br",
    },

    // ═══════════════════════════════════════
    //  MINI ESCAVADEIRAS
    // ═══════════════════════════════════════
    {
        id: "mini-esc-1t",
        name: "Mini Escavadeira 1 Tonelada",
        brand: "Diversos",
        category: "Mini Escavadeiras",
        description: "A menor da categoria, perfeita para trabalhos em espaços internos, jardins e áreas confinadas.",
        image: "/frota/mini-escavadeira-1t.jpg",
        slug: "mini-escavadeira-1t",
    },
    {
        id: "mini-esc-2t",
        name: "Mini Escavadeira 2 Toneladas",
        brand: "Diversos",
        category: "Mini Escavadeiras",
        description: "Compacta e ágil, ideal para escavação leve em áreas urbanas, paisagismo e pequenas fundações.",
        image: "/frota/mini-escavadeira-2t.jpg",
        slug: "mini-escavadeira-2t",
    },
    {
        id: "mini-esc-2.7t",
        name: "Mini Escavadeira 2,7 Toneladas",
        brand: "Diversos",
        category: "Mini Escavadeiras",
        description: "Equilíbrio entre compacidade e força, excelente para saneamento, drenagem e obras residenciais.",
        image: "/frota/mini-escavadeira-2.7t.jpg",
        slug: "mini-escavadeira-2-7t",
    },
    {
        id: "mini-esc-3t",
        name: "Mini Escavadeira 3 Toneladas",
        brand: "Diversos",
        category: "Mini Escavadeiras",
        description: "Versátil e potente para seu tamanho, perfeita para instalações hidráulicas e elétricas subterrâneas.",
        image: "/frota/mini-escavadeira-3t.jpg",
        slug: "mini-escavadeira-3t",
    },
    {
        id: "mini-esc-3.5t",
        name: "Mini Escavadeira 3,5 Toneladas",
        brand: "Diversos",
        category: "Mini Escavadeiras",
        description: "Força de escavação superior em formato compacto, ideal para obras civis e terraplanagem leve.",
        image: "/frota/mini-escavadeira-3.5t.jpg",
        slug: "mini-escavadeira-3-5t",
    },
    {
        id: "mini-esc-5.5t",
        name: "Mini Escavadeira 5,5 Toneladas",
        brand: "Diversos",
        category: "Mini Escavadeiras",
        description: "A maior da linha mini, com capacidade próxima de uma escavadeira convencional e acesso a espaços restritos.",
        image: "/frota/mini-escavadeira-5.5t.jpg",
        slug: "mini-escavadeira-5-5t",
    },

    // ═══════════════════════════════════════
    //  RETROESCAVADEIRAS E PÁS CARREGADEIRAS
    // ═══════════════════════════════════════
    {
        id: "retro-case-580n",
        name: "Retroescavadeira Case 580N",
        brand: "CASE",
        category: "Retroescavadeiras",
        description: "Equipamento versátil líder de mercado, proporcionando ciclos rápidos de carregamento e elevação.",
        image: "/frota/retroescavadeira-case-580n.jpg",
        slug: "retroescavadeira-case-580n",
    },
    {
        id: "pa-hyundai-hl757",
        name: "Pá Carregadeira Hyundai HL757",
        brand: "Hyundai",
        category: "Pás Carregadeiras",
        description: "Força e agilidade em um único equipamento. Motor potente para os terrenos mais desafiadores.",
        image: "/frota/pa-carregadeira-hyundai-hl757.jpg",
        slug: "pa-carregadeira-hyundai-hl757",
    },

    // ═══════════════════════════════════════
    //  MINI CARREGADEIRAS
    // ═══════════════════════════════════════
    {
        id: "mini-carr-bobcat-s650",
        name: "Mini Carregadeira Bobcat S-650",
        brand: "Bobcat",
        category: "Mini Carregadeiras",
        description: "Cabinada, com excelente capacidade de carga e versatilidade para movimentação de materiais em canteiros de obra.",
        image: "/frota/bobcat-s650.jpg",
        slug: "bobcat-s650",
    },
    {
        id: "mini-carr-manitou-1650r",
        name: "Mini Carregadeira Manitou 1650R",
        brand: "Manitou",
        category: "Mini Carregadeiras",
        description: "Cabinada, robusta e ergonômica, projetada para alta produtividade em operações de carga e descarga.",
        image: "/frota/manitou-1650r.jpg",
        slug: "manitou-1650r",
    },

    // ═══════════════════════════════════════
    //  MANIPULADORES TELESCÓPICOS
    // ═══════════════════════════════════════
    {
        id: "manip-12m",
        name: "Manipulador Telescópico 12,8m",
        brand: "Diversos",
        category: "Manipuladores",
        description: "Alcance de 12,8 metros para movimentação de cargas em altura. Ideal para construção civil e logística de canteiro.",
        image: "/frota/manipulador-12m.jpg",
        slug: "manipulador-12m",
    },
    {
        id: "manip-17m",
        name: "Manipulador Telescópico 17m",
        brand: "Diversos",
        category: "Manipuladores",
        description: "Alcance de 17 metros para operações em grandes alturas. Perfeito para obras de grande porte e montagens industriais.",
        image: "/frota/manipulador-17m.jpg",
        slug: "manipulador-17m",
    },

    // ═══════════════════════════════════════
    //  PLATAFORMAS ARTICULADAS E TELESCÓPICAS
    // ═══════════════════════════════════════
    {
        id: "plat-art-diesel-12m",
        name: "Plataforma Articulada Diesel 12,5m",
        brand: "Diversos",
        category: "Plataformas Articuladas",
        description: "Plataforma elevatória articulada a diesel com 12,50 metros de altura de trabalho para ambientes externos.",
        image: "/frota/plataforma-articulada-diesel-12m.jpg",
        slug: "plataforma-articulada-diesel-12m",
    },
    {
        id: "plat-art-diesel-16m",
        name: "Plataforma Articulada Diesel 4x4 16m",
        brand: "Diversos",
        category: "Plataformas Articuladas",
        description: "Tração 4x4 com 16 metros de alcance para terrenos irregulares e trabalhos pesados em altura.",
        image: "/frota/plataforma-articulada-diesel-16m.jpg",
        slug: "plataforma-articulada-diesel-16m",
    },
    {
        id: "plat-art-diesel-20m",
        name: "Plataforma Articulada Diesel 4x4 20m",
        brand: "Diversos",
        category: "Plataformas Articuladas",
        description: "Alto alcance de 20 metros com tração 4x4. Ideal para manutenção industrial, construção e montagem.",
        image: "/frota/plataforma-articulada-diesel-20m.jpg",
        slug: "plataforma-articulada-diesel-20m",
    },
    {
        id: "plat-art-eletrica-12m",
        name: "Plataforma Articulada Elétrica 12m",
        brand: "Diversos",
        category: "Plataformas Articuladas",
        description: "Operação silenciosa e zero emissão para ambientes internos, com 12 metros de altura de trabalho.",
        image: "/frota/plataforma-articulada-eletrica-12m.jpg",
        slug: "plataforma-articulada-eletrica-12m",
    },
    {
        id: "plat-art-eletrica-15m",
        name: "Plataforma Articulada Elétrica 15m",
        brand: "Diversos",
        category: "Plataformas Articuladas",
        description: "Alcance de 15 metros com motor elétrico. Perfeita para galpões, shoppings e áreas com restrição de ruído.",
        image: "/frota/plataforma-articulada-eletrica-15m.jpg",
        slug: "plataforma-articulada-eletrica-15m",
    },
    {
        id: "plat-art-eletrica-17m",
        name: "Plataforma Articulada Elétrica 17m",
        brand: "Diversos",
        category: "Plataformas Articuladas",
        description: "A maior articulada elétrica da frota com 17 metros de alcance, combinando potência e operação limpa.",
        image: "/frota/plataforma-articulada-eletrica-17m.jpg",
        slug: "plataforma-articulada-eletrica-17m",
    },
    {
        id: "plat-teles-diesel-28m",
        name: "Plataforma Telescópica Diesel 28m",
        brand: "Diversos",
        category: "Plataformas Articuladas",
        description: "Maior alcance da frota com 28 metros. Para trabalhos em grande altura: torres, fachadas e estruturas elevadas.",
        image: "/frota/plataforma-telescopica-diesel-28m.png",
        slug: "plataforma-telescopica-diesel-28m",
    },

    // ═══════════════════════════════════════
    //  PLATAFORMAS TESOURA
    // ═══════════════════════════════════════
    {
        id: "plat-tes-6.6m",
        name: "Plataforma Tesoura Elétrica 6,6m Compacta",
        brand: "Diversos",
        category: "Plataformas Tesoura",
        description: "Ultra compacta para trabalhos internos com 6,6 metros de altura. Passa por portas e corredores estreitos.",
        image: "/frota/plataforma-tesoura-6.6m-compacta.jpg",
        slug: "plataforma-tesoura-6-6m",
    },
    {
        id: "plat-tes-8m",
        name: "Plataforma Tesoura Elétrica 8m",
        brand: "Diversos",
        category: "Plataformas Tesoura",
        description: "Plataforma tesoura com 8 metros de altura de trabalho. Ideal para manutenção predial e instalações elétricas.",
        image: "/frota/plataforma-tesoura-8m.jpg",
        slug: "plataforma-tesoura-8m",
    },
    {
        id: "plat-tes-10m-compacta",
        name: "Plataforma Tesoura Elétrica 10m Compacta",
        brand: "Diversos",
        category: "Plataformas Tesoura",
        description: "Versão compacta com 10 metros de alcance, perfeita para áreas internas com espaço limitado.",
        image: "/frota/plataforma-tesoura-10m-compacta.jpg",
        slug: "plataforma-tesoura-10m-compacta",
    },
    {
        id: "plat-tes-10m",
        name: "Plataforma Tesoura Elétrica 10m",
        brand: "Diversos",
        category: "Plataformas Tesoura",
        description: "Plataforma padrão com 10 metros de altura, capacidade generosa de carga na plataforma de trabalho.",
        image: "/frota/plataforma-tesoura-10m.jpg",
        slug: "plataforma-tesoura-10m",
    },
    {
        id: "plat-tes-12m",
        name: "Plataforma Tesoura Elétrica 12m",
        brand: "Diversos",
        category: "Plataformas Tesoura",
        description: "Alcance de 12 metros com plataforma espaçosa. Excelente para instalações industriais e pintura de fachadas.",
        image: "/frota/plataforma-tesoura-12m.jpg",
        slug: "plataforma-tesoura-12m",
    },
    {
        id: "plat-tes-14m",
        name: "Plataforma Tesoura Elétrica 14m",
        brand: "Diversos",
        category: "Plataformas Tesoura",
        description: "Plataforma tesoura com 14 metros de altura para trabalhos internos que exigem maior alcance vertical.",
        image: "/frota/plataforma-tesoura-14m.jpg",
        slug: "plataforma-tesoura-14m",
    },
    {
        id: "plat-tes-14m-terreno",
        name: "Plataforma Tesoura 14m Todo Terreno",
        brand: "Diversos",
        category: "Plataformas Tesoura",
        description: "Tesoura todo terreno com 14 metros de alcance, projetada para uso externo em pisos irregulares e canteiros.",
        image: "/frota/plataforma-tesoura-14m-todo-terreno.jpg",
        slug: "plataforma-tesoura-14m-todo-terreno",
    },

    // ═══════════════════════════════════════
    //  ROLO COMPACTADOR
    // ═══════════════════════════════════════
    {
        id: "rolo-1.5t",
        name: "Rolo Compactador 1,5 Ton Liso",
        brand: "Diversos",
        category: "Rolos Compactadores",
        description: "Rolo compactador liso de 1,5 tonelada para compactação de solos em valas, calçadas e áreas de acesso restrito.",
        image: "/frota/rolo-compactador-1.5t.jpg",
        slug: "rolo-compactador-1-5t",
    },
];
