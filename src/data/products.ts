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
    cardSpecs?: Record<string, string>;
}

export const products: Product[] = [
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
        cardSpecs: {
            "Altura Trab.": "12,5m",
            "Capacidade": "227kg",
            "Dimensões": "1,85x5,66x2,06m",
            "Peso": "4990kg"
        },
    },
    {
        id: "plat-art-diesel-16m",
        name: "Plataforma Articulada Diesel 4x4 16m",
        brand: "Diversos",
        category: "Plataformas Articuladas",
        description: "Tração 4x4 com 16 metros de alcance para terrenos irregulares e trabalhos pesados em altura.",
        image: "/frota/plataforma-articulada-diesel-16m.jpg",
        slug: "plataforma-articulada-diesel-16m",
        cardSpecs: {
            "Altura Trab.": "16m",
            "Capacidade": "227kg",
            "Dimensões": "2,40x6,80x2,20m",
            "Peso": "7000kg"
        },
    },
    {
        id: "plat-art-diesel-20m",
        name: "Plataforma Articulada Diesel 4x4 20m",
        brand: "Diversos",
        category: "Plataformas Articuladas",
        description: "Alto alcance de 20 metros com tração 4x4. Ideal para manutenção industrial, construção e montagem.",
        image: "/frota/plataforma-articulada-diesel-20m.jpg",
        slug: "plataforma-articulada-diesel-20m",
        cardSpecs: {
            "Altura Trab.": "20m",
            "Capacidade": "227kg",
            "Dimensões": "2,44x8,83x2,54m",
            "Peso": "10500kg"
        },
    },
    {
        id: "plat-art-eletrica-12m",
        name: "Plataforma Articulada Elétrica 12m",
        brand: "Diversos",
        category: "Plataformas Articuladas",
        description: "Operação silenciosa e zero emissão para ambientes internos, com 12 metros de altura de trabalho.",
        image: "/frota/plataforma-articulada-eletrica-12m.jpg",
        slug: "plataforma-articulada-eletrica-12m",
        cardSpecs: {
            "Altura Trab.": "12m",
            "Capacidade": "200kg",
            "Dimensões": "1,50x4,17x1,98m",
            "Peso": "3671kg"
        },
    },
    {
        id: "plat-art-eletrica-15m",
        name: "Plataforma Articulada Elétrica 15m",
        brand: "Diversos",
        category: "Plataformas Articuladas",
        description: "Alcance de 15 metros com motor elétrico. Perfeita para galpões, shoppings e áreas com restrição de ruído.",
        image: "/frota/plataforma-articulada-eletrica-15m.jpg",
        slug: "plataforma-articulada-eletrica-15m",
        cardSpecs: {
            "Altura Trab.": "15m",
            "Capacidade": "227kg",
            "Dimensões": "1,50x6,65x2,10m",
            "Peso": "7000kg"
        },
    },
    {
        id: "plat-art-eletrica-17m",
        name: "Plataforma Articulada Elétrica 17m",
        brand: "Diversos",
        category: "Plataformas Articuladas",
        description: "A maior articulada elétrica da frota com 17 metros de alcance, combinando potência e operação limpa.",
        image: "/frota/plataforma-articulada-eletrica-17m.jpg",
        slug: "plataforma-articulada-eletrica-17m",
        cardSpecs: {
            "Altura Trab.": "17m",
            "Capacidade": "230kg",
            "Dimensões": "1,70x6,90x2,10m",
            "Peso": "7130kg"
        },
    },
    {
        id: "plat-teles-diesel-28m",
        name: "Plataforma Telescópica Diesel 28m",
        brand: "Diversos",
        category: "Plataformas Articuladas",
        description: "Maior alcance da frota com 28 metros. Para trabalhos em grande altura: torres, fachadas e estruturas elevadas.",
        image: "/frota/plataforma-telescopica-diesel-28m.png",
        slug: "plataforma-telescopica-diesel-28m",
        cardSpecs: {
            "Altura Trab.": "28m",
            "Capacidade": "227kg",
            "Dimensões": "2,49x12,19x3,05m",
            "Peso": "16732kg"
        },
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
        cardSpecs: {
            "Altura Trab.": "6,3m",
            "Capacidade": "227kg",
            "Dimensões": "0,81x1,40x1,88m",
            "Peso": "900kg"
        },
    },
    {
        id: "plat-tes-8m",
        name: "Plataforma Tesoura Elétrica 8m",
        brand: "Diversos",
        category: "Plataformas Tesoura",
        description: "Plataforma tesoura com 8 metros de altura de trabalho. Ideal para manutenção predial e instalações elétricas.",
        image: "/frota/plataforma-tesoura-8m.jpg",
        slug: "plataforma-tesoura-8m",
        cardSpecs: {
            "Altura Trab.": "8m",
            "Capacidade": "227kg",
            "Dimensões": "0,81x2,07x2,02m",
            "Peso": "1500kg"
        },
    },
    {
        id: "plat-tes-10m-compacta",
        name: "Plataforma Tesoura Elétrica 10m Compacta",
        brand: "Diversos",
        category: "Plataformas Tesoura",
        description: "Versão compacta com 10 metros de alcance, perfeita para áreas internas com espaço limitado.",
        image: "/frota/plataforma-tesoura-10m-compacta.jpg",
        slug: "plataforma-tesoura-10m-compacta",
        cardSpecs: {
            "Altura Trab.": "10m",
            "Capacidade": "250kg",
            "Dimensões": "0,81x2,32x2,15m",
            "Peso": "1850kg"
        },
    },
    {
        id: "plat-tes-10m",
        name: "Plataforma Tesoura Elétrica 10m",
        brand: "Diversos",
        category: "Plataformas Tesoura",
        description: "Plataforma padrão com 10 metros de altura, capacidade generosa de carga na plataforma de trabalho.",
        image: "/frota/plataforma-tesoura-10m.jpg",
        slug: "plataforma-tesoura-10m",
        cardSpecs: {
            "Altura Trab.": "10m",
            "Capacidade": "450kg",
            "Dimensões": "1,18x2,40x1,97m",
            "Peso": "2150kg"
        },
    },
    {
        id: "plat-tes-12m",
        name: "Plataforma Tesoura Elétrica 12m",
        brand: "Diversos",
        category: "Plataformas Tesoura",
        description: "Alcance de 12 metros com plataforma espaçosa. Excelente para instalações industriais e pintura de fachadas.",
        image: "/frota/plataforma-tesoura-12m.jpg",
        slug: "plataforma-tesoura-12m",
        cardSpecs: {
            "Altura Trab.": "12m",
            "Capacidade": "320kg",
            "Dimensões": "1,22x2,40x2,41m",
            "Peso": "2600kg"
        },
    },
    {
        id: "plat-tes-14m",
        name: "Plataforma Tesoura Elétrica 14m",
        brand: "Diversos",
        category: "Plataformas Tesoura",
        description: "Plataforma tesoura com 14 metros de altura para trabalhos internos que exigem maior alcance vertical.",
        image: "/frota/plataforma-tesoura-14m.jpg",
        slug: "plataforma-tesoura-14m",
        cardSpecs: {
            "Altura Trab.": "14m",
            "Capacidade": "320kg",
            "Dimensões": "1,14x2,71x2,53m",
            "Peso": "3500kg"
        },
    },
    {
        id: "plat-tes-14m-terreno",
        name: "Plataforma Tesoura 14m Todo Terreno",
        brand: "Diversos",
        category: "Plataformas Tesoura",
        description: "Tesoura todo terreno com 14 metros de alcance, projetada para uso externo em pisos irregulares e canteiros.",
        image: "/frota/plataforma-tesoura-14m-todo-terreno.jpg",
        slug: "plataforma-tesoura-14m-todo-terreno",
        cardSpecs: {
            "Altura Trab.": "14m",
            "Capacidade": "360kg",
            "Dimensões": "1,75x3,15x2,83m",
            "Peso": "4500kg"
        },
    },

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
        ],
        cardSpecs: {
            "Profundidade": "6,72m",
            "Dimensões": "n/a",
            "Peso": "22500kg"
        },
    },
    {
        id: "esc-cat-313d2l",
        name: "Escavadeira Cat 313D2L",
        brand: "Caterpillar",
        category: "Escavadeiras",
        description: "Escavadeira de 13 toneladas com excelente desempenho em escavação, abertura de valas e manuseio de materiais.",
        image: "/frota/cat-313d2l.jpg",
        slug: "cat-313d2l",
        cardSpecs: {
            "Profundidade": "5,55m",
            "Dimensões": "2,59x7,62x2,83m",
            "Peso": "13900kg"
        },
    },
    {
        id: "esc-8t",
        name: "Escavadeira 8 Toneladas",
        brand: "XCMG",
        category: "Escavadeiras",
        description: "Escavadeira compacta de 8 toneladas, ideal para obras urbanas e espaços reduzidos com alta produtividade.",
        image: "/frota/escavadeira-8t.jpg",
        slug: "escavadeira-8t",
        cardSpecs: {
            "Profundidade": "4,40m",
            "Dimensões": "2,27x6,46x2,68m",
            "Peso": "8285kg"
        },
    },
    {
        id: "esc-xe150br",
        name: "Escavadeira XCMG XE150BR",
        brand: "XCMG",
        category: "Escavadeiras",
        description: "Escavadeira de 15 toneladas fabricada no Brasil, com excelente custo-benefício e peças de reposição acessíveis.",
        image: "/frota/xe150br.jpg",
        slug: "xe150br",
        cardSpecs: {
            "Profundidade": "5,54m",
            "Dimensões": "2,59x7,82x2,87m",
            "Peso": "14500kg"
        },
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
        cardSpecs: {
            "Profundidade": "1,82m",
            "Dimensões": "0,71x2,75x2,00m",
            "Peso": "1150kg"
        },
    },
    {
        id: "mini-esc-2t",
        name: "Mini Escavadeira 2 Toneladas",
        brand: "Diversos",
        category: "Mini Escavadeiras",
        description: "Compacta e ágil, ideal para escavação leve em áreas urbanas, paisagismo e pequenas fundações.",
        image: "/frota/mini-escavadeira-2t.jpg",
        slug: "mini-escavadeira-2t",
        cardSpecs: {
            "Profundidade": "2,20m",
            "Dimensões": "0,95x3,45x2,30m",
            "Peso": "1740kg"
        },
    },
    {
        id: "mini-esc-2.7t",
        name: "Mini Escavadeira 2,7 Toneladas",
        brand: "Diversos",
        category: "Mini Escavadeiras",
        description: "Equilíbrio entre compacidade e força, excelente para saneamento, drenagem e obras residenciais.",
        image: "/frota/mini-escavadeira-2.7t.jpg",
        slug: "mini-escavadeira-2-7t",
        cardSpecs: {
            "Profundidade": "2,54m",
            "Dimensões": "1,50x4,10x2,53m",
            "Peso": "2735kg"
        },
    },
    {
        id: "mini-esc-3t",
        name: "Mini Escavadeira 3 Toneladas",
        brand: "Diversos",
        category: "Mini Escavadeiras",
        description: "Versátil e potente para seu tamanho, perfeita para instalações hidráulicas e elétricas subterrâneas.",
        image: "/frota/mini-escavadeira-3t.jpg",
        slug: "mini-escavadeira-3t",
        cardSpecs: {
            "Profundidade": "2,97m",
            "Dimensões": "1,55x4,47x2,50m",
            "Peso": "3415kg"
        },
    },
    {
        id: "mini-esc-3.5t",
        name: "Mini Escavadeira 3,5 Toneladas",
        brand: "Diversos",
        category: "Mini Escavadeiras",
        description: "Força de escavação superior em formato compacto, ideal para obras civis e terraplanagem leve.",
        image: "/frota/mini-escavadeira-3.5t.jpg",
        slug: "mini-escavadeira-3-5t",
        cardSpecs: {
            "Profundidade": "3,41m",
            "Dimensões": "1,75x4,82x2,42m",
            "Peso": "3398kg"
        },
    },
    {
        id: "mini-esc-5.5t",
        name: "Mini Escavadeira 5,5 Toneladas",
        brand: "Diversos",
        category: "Mini Escavadeiras",
        description: "A maior da linha mini, com capacidade próxima de uma escavadeira convencional e acesso a espaços restritos.",
        image: "/frota/mini-escavadeira-5.5t.jpg",
        slug: "mini-escavadeira-5-5t",
        cardSpecs: {
            "Profundidade": "3,60m",
            "Dimensões": "1,96x5,55x2,53m",
            "Peso": "4840kg"
        },
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
        cardSpecs: {
            "Capacidade": "1791kg",
            "Dimensões": "1,88x3,47x2,65m",
            "Peso": "4550kg"
        },
    },
    {
        id: "mini-carr-manitou-1650r",
        name: "Mini Carregadeira Manitou 1650R",
        brand: "Manitou",
        category: "Mini Carregadeiras",
        description: "Cabinada, robusta e ergonômica, projetada para alta produtividade em operações de carga e descarga.",
        image: "/frota/manitou-1650r.jpg",
        slug: "manitou-1650r",
        cardSpecs: {
            "Capacidade": "748kg",
            "Dimensões": "1,55x3,10x1,95m",
            "Peso": "2796kg"
        },
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
        cardSpecs: {
            "Altura Trab.": "12,8m",
            "Capacidade": "11500kg",
            "Dimensões": "2,52x5,64x2,52m",
            "Peso": "3800kg"
        },
    },
    {
        id: "manip-17m",
        name: "Manipulador Telescópico 17m",
        brand: "Diversos",
        category: "Manipuladores",
        description: "Alcance de 17 metros para operações em grandes alturas. Perfeito para obras de grande porte e montagens industriais.",
        image: "/frota/manipulador-17m.jpg",
        slug: "manipulador-17m",
        cardSpecs: {
            "Altura Trab.": "17m",
            "Capacidade": "12400kg",
            "Dimensões": "2,59x6,06x2,54m",
            "Peso": "4500kg"
        },
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
        cardSpecs: {
            "Capacidade": "1500kg",
            "Dimensões": "0,98x2,13x2,33m",
            "Peso": "2796kg"
        },
    },
];
