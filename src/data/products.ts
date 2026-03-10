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
    realImage?: string;
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
        realImage: "/frota/real/articulada-12-5m-diesel.jpeg",
        overview: "A Plataforma Articulada Diesel 12,5m é a solução ideal para trabalhos em altura em ambientes externos. Com motor diesel robusto e articulação precisa, permite acesso a pontos elevados mesmo sobre terrenos irregulares. Perfeita para manutenção industrial, construção civil e montagem de estruturas.",
        highlights: [
            "Altura de trabalho de 12,50 metros",
            "Alcance horizontal de 6,78 metros",
            "Capacidade de carga na cesta de 227 kg",
            "Motor diesel para uso externo intensivo"
        ],
        benefits: [
            { title: "Versatilidade em Terrenos", description: "Motor diesel com tração robusta permite operação em terrenos irregulares, canteiros de obra e áreas externas sem pavimentação." },
            { title: "Alcance Preciso", description: "Sistema articulado permite posicionar a cesta em ângulos variados, alcançando pontos de difícil acesso em fachadas e estruturas." },
            { title: "Produtividade em Altura", description: "Capacidade de 227 kg na cesta permite levar ferramentas e materiais, reduzindo o tempo de subida e descida." }
        ],
        specs: {
            dimensoes: [
                { label: "Altura de Trabalho", value: "12,50 m" },
                { label: "Alcance Horizontal", value: "6,78 m" },
                { label: "Largura", value: "1,85 m" },
                { label: "Comprimento", value: "5,66 m" },
                { label: "Altura de Transporte", value: "2,06 m" }
            ],
            capacidades: [
                { label: "Capacidade da Cesta", value: "227 kg" },
                { label: "Peso Operacional", value: "4.990 kg" }
            ]
        },
        applications: [
            "Manutenção de fachadas e estruturas externas",
            "Instalações elétricas e iluminação em altura",
            "Montagem de estruturas metálicas",
            "Poda de árvores e manutenção de áreas verdes",
            "Construção civil e obras de infraestrutura"
        ],
        cardSpecs: {
            "Altura Trab.": "12,5m",
            "Alc. Horiz.": "6,78m",
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
        realImage: "/frota/real/articulada-16m-diesel.jpeg",
        overview: "A Plataforma Articulada Diesel 4x4 16m combina alto alcance com tração integral, sendo a escolha certa para trabalhos em altura em terrenos acidentados. Com 16 metros de altura de trabalho e 9,1 metros de alcance horizontal, oferece acesso a pontos elevados com máxima estabilidade.",
        highlights: [
            "Altura de trabalho de 16 metros",
            "Alcance horizontal de 9,1 metros",
            "Tração 4x4 para terrenos irregulares",
            "Capacidade de carga de 227 kg na cesta"
        ],
        benefits: [
            { title: "Tração 4x4 Integral", description: "Sistema de tração nas quatro rodas permite deslocamento seguro em canteiros de obra, terrenos de terra e pisos irregulares." },
            { title: "Grande Alcance", description: "Com 16 metros de altura e 9,1 metros horizontais, acessa pontos elevados de difícil alcance em grandes estruturas." },
            { title: "Operação Segura", description: "Sistema de estabilização e controles proporcionais garantem movimentos suaves e seguros mesmo em grandes alturas." }
        ],
        specs: {
            dimensoes: [
                { label: "Altura de Trabalho", value: "16 m" },
                { label: "Alcance Horizontal", value: "9,1 m" },
                { label: "Largura", value: "2,40 m" },
                { label: "Comprimento", value: "6,80 m" },
                { label: "Altura de Transporte", value: "2,20 m" }
            ],
            capacidades: [
                { label: "Capacidade da Cesta", value: "227 kg" },
                { label: "Peso Operacional", value: "7.000 kg" }
            ]
        },
        applications: [
            "Manutenção industrial em grandes alturas",
            "Obras de infraestrutura em terrenos irregulares",
            "Montagem e desmontagem de estruturas metálicas",
            "Instalações elétricas e telecomunicações",
            "Manutenção de torres e postes"
        ],
        cardSpecs: {
            "Altura Trab.": "16m",
            "Alc. Horiz.": "9,1m",
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
        realImage: "/frota/real/articulada-20m-diesel.jpeg",
        overview: "A Plataforma Articulada Diesel 4x4 20m é a solução para trabalhos que exigem alcance extremo em ambientes externos. Com 20 metros de altura de trabalho e 12,2 metros de alcance horizontal, é perfeita para manutenção de grandes estruturas, fachadas de edifícios e instalações industriais de grande porte.",
        highlights: [
            "Altura de trabalho de 20 metros",
            "Alcance horizontal de 12,2 metros",
            "Tração 4x4 para máxima estabilidade",
            "Capacidade de carga de 227 kg"
        ],
        benefits: [
            { title: "Alcance Excepcional", description: "Com 20 metros de altura e 12,2 metros de alcance horizontal, acessa praticamente qualquer ponto em edificações e estruturas industriais." },
            { title: "Potência Diesel 4x4", description: "Motor diesel com tração integral garante mobilidade em qualquer terreno, mesmo em condições adversas de canteiro." },
            { title: "Produtividade Superior", description: "Elimina a necessidade de andaimes e reduz drasticamente o tempo de acesso a pontos elevados." }
        ],
        specs: {
            dimensoes: [
                { label: "Altura de Trabalho", value: "20 m" },
                { label: "Alcance Horizontal", value: "12,2 m" },
                { label: "Largura", value: "2,44 m" },
                { label: "Comprimento", value: "8,83 m" },
                { label: "Altura de Transporte", value: "2,54 m" }
            ],
            capacidades: [
                { label: "Capacidade da Cesta", value: "227 kg" },
                { label: "Peso Operacional", value: "10.500 kg" }
            ]
        },
        applications: [
            "Manutenção de fachadas de edifícios altos",
            "Instalações industriais de grande porte",
            "Montagem de estruturas metálicas elevadas",
            "Manutenção de torres de telecomunicações",
            "Pintura e revestimento de grandes superfícies"
        ],
        cardSpecs: {
            "Altura Trab.": "20m",
            "Alc. Horiz.": "12,2m",
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
        realImage: "/frota/real/articulada-12m-eletrica.jpeg",
        overview: "A Plataforma Articulada Elétrica 12m é ideal para trabalhos em altura em ambientes internos onde silêncio e zero emissão de gases são essenciais. Com motor elétrico de alto desempenho, opera em galpões, shoppings, hospitais e áreas com restrição de ruído e poluição.",
        highlights: [
            "Altura de trabalho de 12 metros",
            "Motor 100% elétrico — zero emissão",
            "Operação silenciosa para ambientes internos",
            "Capacidade de carga de 200 kg"
        ],
        benefits: [
            { title: "Zero Emissão", description: "Motor elétrico não emite gases, permitindo operação segura em ambientes fechados como galpões, shoppings e hospitais." },
            { title: "Operação Silenciosa", description: "Nível de ruído extremamente baixo, ideal para trabalhos em ambientes com ocupação simultânea." },
            { title: "Compacta e Ágil", description: "Dimensões reduzidas permitem acesso a corredores e áreas internas com espaço limitado." }
        ],
        specs: {
            dimensoes: [
                { label: "Altura de Trabalho", value: "12 m" },
                { label: "Alcance Horizontal", value: "4,57 m" },
                { label: "Largura", value: "1,50 m" },
                { label: "Comprimento", value: "4,17 m" },
                { label: "Altura de Transporte", value: "1,98 m" }
            ],
            capacidades: [
                { label: "Capacidade da Cesta", value: "200 kg" },
                { label: "Peso Operacional", value: "3.671 kg" }
            ],
            motor: [
                { label: "Tipo", value: "Elétrico (baterias)" },
                { label: "Emissão", value: "Zero" }
            ]
        },
        applications: [
            "Manutenção em galpões e centros de distribuição",
            "Instalações elétricas em ambientes internos",
            "Trabalhos em shoppings e hospitais",
            "Pintura e acabamento de interiores em altura",
            "Manutenção de sistemas de climatização"
        ],
        cardSpecs: {
            "Altura Trab.": "12m",
            "Alc. Horiz.": "4,57m",
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
        overview: "A Plataforma Articulada Elétrica 15m oferece um excelente equilíbrio entre alcance e operação limpa. Com 15 metros de altura e 8,65 metros de alcance horizontal, é a escolha ideal para grandes galpões industriais e centros logísticos que necessitam de trabalhos em altura sem emissão de poluentes.",
        highlights: [
            "Altura de trabalho de 15 metros",
            "Alcance horizontal de 8,65 metros",
            "Motor elétrico silencioso e limpo",
            "Capacidade de carga de 227 kg"
        ],
        benefits: [
            { title: "Grande Alcance Interno", description: "15 metros de altura permitem atingir coberturas de galpões industriais e centros de distribuição com facilidade." },
            { title: "Operação Limpa", description: "Motor elétrico garante zero emissão e baixo ruído, adequado para ambientes com ventilação limitada." },
            { title: "Alcance Horizontal Amplo", description: "Com 8,65 metros horizontais, alcança pontos afastados da base sem necessidade de reposicionamento constante." }
        ],
        specs: {
            dimensoes: [
                { label: "Altura de Trabalho", value: "15 m" },
                { label: "Alcance Horizontal", value: "8,65 m" },
                { label: "Largura", value: "1,50 m" },
                { label: "Comprimento", value: "6,65 m" },
                { label: "Altura de Transporte", value: "2,10 m" }
            ],
            capacidades: [
                { label: "Capacidade da Cesta", value: "227 kg" },
                { label: "Peso Operacional", value: "7.000 kg" }
            ],
            motor: [
                { label: "Tipo", value: "Elétrico (baterias)" },
                { label: "Emissão", value: "Zero" }
            ]
        },
        applications: [
            "Manutenção de coberturas em galpões industriais",
            "Instalações em centros de distribuição e logística",
            "Trabalhos em ambientes com restrição de emissões",
            "Manutenção de sistemas de iluminação industrial",
            "Inspeções técnicas em grandes estruturas internas"
        ],
        cardSpecs: {
            "Altura Trab.": "15m",
            "Alc. Horiz.": "8,65m",
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
        overview: "A Plataforma Articulada Elétrica 17m é a maior articulada elétrica da nossa frota, oferecendo 17 metros de altura de trabalho com operação 100% limpa. Ideal para grandes instalações industriais, centros comerciais e projetos que demandam alto alcance sem comprometer a qualidade do ar ambiente.",
        highlights: [
            "Maior articulada elétrica da frota — 17 metros",
            "Alcance horizontal de 9,43 metros",
            "Zero emissão e operação silenciosa",
            "Capacidade de carga de 230 kg"
        ],
        benefits: [
            { title: "Máximo Alcance Elétrico", description: "17 metros de altura com motor elétrico — o maior alcance da categoria na frota para operações internas." },
            { title: "Versatilidade", description: "Sistema articulado permite contornar obstáculos e alcançar pontos de difícil acesso em estruturas complexas." },
            { title: "Economia Operacional", description: "Custo de operação reduzido com motor elétrico e manutenção simplificada em comparação a modelos diesel." }
        ],
        specs: {
            dimensoes: [
                { label: "Altura de Trabalho", value: "17 m" },
                { label: "Alcance Horizontal", value: "9,43 m" },
                { label: "Largura", value: "1,70 m" },
                { label: "Comprimento", value: "6,90 m" },
                { label: "Altura de Transporte", value: "2,10 m" }
            ],
            capacidades: [
                { label: "Capacidade da Cesta", value: "230 kg" },
                { label: "Peso Operacional", value: "7.130 kg" }
            ],
            motor: [
                { label: "Tipo", value: "Elétrico (baterias)" },
                { label: "Emissão", value: "Zero" }
            ]
        },
        applications: [
            "Manutenção de grandes estruturas industriais internas",
            "Instalações em centros comerciais e aeroportos",
            "Montagem de sistemas de ventilação e climatização",
            "Trabalhos em pé-direito alto em galpões logísticos",
            "Manutenção de pontes rolantes e estruturas elevadas"
        ],
        cardSpecs: {
            "Altura Trab.": "17m",
            "Alc. Horiz.": "9,43m",
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
        overview: "A Plataforma Telescópica Diesel 28m é o equipamento de maior alcance da frota, atingindo impressionantes 28 metros de altura de trabalho. Com lança telescópica e motor diesel potente, é a solução definitiva para trabalhos em grandes alturas como torres de telecomunicações, fachadas de edifícios altos e estruturas industriais elevadas.",
        highlights: [
            "Maior alcance da frota — 28 metros de altura",
            "Alcance horizontal de 22,9 metros",
            "Lança telescópica para posicionamento preciso",
            "Motor diesel de alta potência"
        ],
        benefits: [
            { title: "Alcance Imbatível", description: "28 metros de altura e 22,9 metros horizontais permitem acesso a praticamente qualquer ponto em edifícios e estruturas." },
            { title: "Lança Telescópica", description: "Sistema telescópico permite extensão rápida e precisa, otimizando o tempo de posicionamento em comparação a sistemas articulados." },
            { title: "Robustez Diesel", description: "Motor diesel de alta potência garante operação contínua em jornadas intensivas de trabalho externo." }
        ],
        specs: {
            dimensoes: [
                { label: "Altura de Trabalho", value: "28 m" },
                { label: "Alcance Horizontal", value: "22,9 m" },
                { label: "Largura", value: "2,49 m" },
                { label: "Comprimento", value: "12,19 m" },
                { label: "Altura de Transporte", value: "3,05 m" }
            ],
            capacidades: [
                { label: "Capacidade da Cesta", value: "227 kg" },
                { label: "Peso Operacional", value: "16.732 kg" }
            ]
        },
        applications: [
            "Manutenção de torres de telecomunicações",
            "Trabalhos em fachadas de edifícios altos",
            "Montagem de estruturas metálicas em grande altura",
            "Inspeções em pontes e viadutos",
            "Instalações industriais de grande porte"
        ],
        cardSpecs: {
            "Altura Trab.": "28m",
            "Alc. Horiz.": "22,9m",
            "Capacidade": "227kg",
            "Dimensões": "2,49x12,19x3,05m",
            "Peso": "16732kg"
        },
    },

    // ═══════════════════════════════════════
    //  PLATAFORMAS TESOURA
    // ═══════════════════════════════════════
    {
        id: "plat-tes-6.3m",
        name: "Plataforma Tesoura Elétrica 6,3m Compacta",
        brand: "Diversos",
        category: "Plataformas Tesoura",
        description: "Ultra compacta para trabalhos internos com 6,3 metros de altura. Passa por portas e corredores estreitos.",
        image: "/frota/plataforma-tesoura-6.6m-compacta.jpg",
        slug: "plataforma-tesoura-6-3m",
        realImage: "/frota/real/tesoura-6-3m.jpeg",
        overview: "A Plataforma Tesoura Elétrica 6,3m Compacta é a menor e mais ágil da categoria, projetada para trabalhos em espaços confinados. Com apenas 0,81 metro de largura, passa facilmente por portas padrão e corredores estreitos, tornando-se indispensável para manutenção em escritórios, lojas e áreas de circulação.",
        highlights: [
            "Ultra compacta — apenas 0,81m de largura",
            "Altura de trabalho de 6,3 metros",
            "Peso de apenas 900 kg",
            "Passa por portas e corredores estreitos"
        ],
        benefits: [
            { title: "Ultra Compacta", description: "Com apenas 0,81m de largura e 1,40m de comprimento, acessa os menores espaços internos sem dificuldade." },
            { title: "Leveza", description: "Com 900 kg de peso, pode operar em pisos com menor capacidade de carga, incluindo pavimentos elevados." },
            { title: "Elétrica e Silenciosa", description: "Motor elétrico sem emissão e com baixo ruído para uso em ambientes ocupados." }
        ],
        specs: {
            dimensoes: [
                { label: "Altura de Trabalho", value: "6,3 m" },
                { label: "Alcance Horizontal", value: "0,6 m" },
                { label: "Largura", value: "0,81 m" },
                { label: "Comprimento", value: "1,40 m" },
                { label: "Altura de Transporte", value: "1,88 m" }
            ],
            capacidades: [
                { label: "Capacidade da Plataforma", value: "227 kg" },
                { label: "Peso Operacional", value: "900 kg" }
            ],
            motor: [
                { label: "Tipo", value: "Elétrico (baterias)" },
                { label: "Emissão", value: "Zero" }
            ]
        },
        applications: [
            "Manutenção de escritórios e áreas comerciais",
            "Instalações elétricas em ambientes internos",
            "Pintura e acabamento de interiores",
            "Manutenção de sistemas de ar-condicionado",
            "Trabalhos em corredores e áreas de acesso restrito"
        ],
        cardSpecs: {
            "Altura Trab.": "6,3m",
            "Alc. Horiz.": "0,6m",
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
        overview: "A Plataforma Tesoura Elétrica 8m oferece um excelente equilíbrio entre alcance e compacidade. Com 8 metros de altura de trabalho, é ideal para manutenção predial, instalações elétricas e acabamentos em altura em ambientes internos.",
        highlights: [
            "Altura de trabalho de 8 metros",
            "Largura compacta de 0,81 metro",
            "Capacidade de 227 kg na plataforma",
            "Operação elétrica silenciosa"
        ],
        benefits: [
            { title: "Alcance Intermediário", description: "8 metros de altura atendem a maioria das necessidades de manutenção predial e instalações em ambientes internos." },
            { title: "Compacidade Mantida", description: "Mesmo com maior alcance que a 6,3m, mantém a largura de 0,81m para acesso a espaços reduzidos." },
            { title: "Estabilidade", description: "Plataforma de trabalho estável e segura com proteções laterais e controles intuitivos." }
        ],
        specs: {
            dimensoes: [
                { label: "Altura de Trabalho", value: "8 m" },
                { label: "Alcance Horizontal", value: "0,7 m" },
                { label: "Largura", value: "0,81 m" },
                { label: "Comprimento", value: "2,07 m" },
                { label: "Altura de Transporte", value: "2,02 m" }
            ],
            capacidades: [
                { label: "Capacidade da Plataforma", value: "227 kg" },
                { label: "Peso Operacional", value: "1.500 kg" }
            ],
            motor: [
                { label: "Tipo", value: "Elétrico (baterias)" },
                { label: "Emissão", value: "Zero" }
            ]
        },
        applications: [
            "Manutenção predial e instalações elétricas",
            "Pintura de ambientes internos em altura",
            "Instalação de forros e divisórias",
            "Manutenção de sistemas de iluminação",
            "Trabalhos em depósitos e armazéns"
        ],
        cardSpecs: {
            "Altura Trab.": "8m",
            "Alc. Horiz.": "0,7m",
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
        realImage: "/frota/real/tesoura-10m-compacta.jpeg",
        overview: "A Plataforma Tesoura Elétrica 10m Compacta combina alcance de 10 metros com dimensões reduzidas, sendo perfeita para trabalhos em altura em áreas internas com espaço limitado. Sua largura de apenas 0,81 metro permite acesso a corredores e entre prateleiras de grandes depósitos.",
        highlights: [
            "10 metros de altura em formato compacto",
            "Apenas 0,81m de largura",
            "Capacidade de 250 kg na plataforma",
            "Ideal para espaços confinados com pé-direito alto"
        ],
        benefits: [
            { title: "Alto Alcance Compacto", description: "10 metros de altura mantendo a largura de 0,81m — máximo alcance para a menor largura da categoria." },
            { title: "Capacidade Generosa", description: "250 kg de capacidade permite levar ferramentas pesadas e materiais de trabalho à plataforma." },
            { title: "Flexibilidade", description: "Ideal tanto para manutenção rotineira quanto para projetos de instalação em locais de difícil acesso." }
        ],
        specs: {
            dimensoes: [
                { label: "Altura de Trabalho", value: "10 m" },
                { label: "Alcance Horizontal", value: "0,9 m" },
                { label: "Largura", value: "0,81 m" },
                { label: "Comprimento", value: "2,32 m" },
                { label: "Altura de Transporte", value: "2,15 m" }
            ],
            capacidades: [
                { label: "Capacidade da Plataforma", value: "250 kg" },
                { label: "Peso Operacional", value: "1.850 kg" }
            ],
            motor: [
                { label: "Tipo", value: "Elétrico (baterias)" },
                { label: "Emissão", value: "Zero" }
            ]
        },
        applications: [
            "Manutenção em depósitos e centros de distribuição",
            "Instalações em galpões com corredores estreitos",
            "Trabalhos em ambientes comerciais e de varejo",
            "Manutenção de sistemas de sprinklers e detectores",
            "Inspeções técnicas em ambientes industriais"
        ],
        cardSpecs: {
            "Altura Trab.": "10m",
            "Alc. Horiz.": "0,9m",
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
        overview: "A Plataforma Tesoura Elétrica 10m é a versão padrão com maior plataforma de trabalho e capacidade de carga de 450 kg. Ideal para equipes de dois operadores com ferramentas e materiais, oferece 10 metros de altura com uma área de trabalho espaçosa e segura.",
        highlights: [
            "10 metros de altura de trabalho",
            "Alta capacidade de 450 kg na plataforma",
            "Plataforma de trabalho espaçosa",
            "Alcance horizontal de 1,27 metro"
        ],
        benefits: [
            { title: "Capacidade de Carga Superior", description: "450 kg permitem que dois operadores trabalhem simultaneamente com todo o ferramental necessário." },
            { title: "Plataforma Espaçosa", description: "Área de trabalho ampla e confortável para movimentação segura dos operadores em altura." },
            { title: "Extensão Horizontal", description: "Deck extensível oferece 1,27m de alcance horizontal adicional para maior cobertura de trabalho." }
        ],
        specs: {
            dimensoes: [
                { label: "Altura de Trabalho", value: "10 m" },
                { label: "Alcance Horizontal", value: "1,27 m" },
                { label: "Largura", value: "1,18 m" },
                { label: "Comprimento", value: "2,40 m" },
                { label: "Altura de Transporte", value: "1,97 m" }
            ],
            capacidades: [
                { label: "Capacidade da Plataforma", value: "450 kg" },
                { label: "Peso Operacional", value: "2.150 kg" }
            ],
            motor: [
                { label: "Tipo", value: "Elétrico (baterias)" },
                { label: "Emissão", value: "Zero" }
            ]
        },
        applications: [
            "Trabalhos com equipes de dois operadores",
            "Instalações industriais com materiais pesados",
            "Manutenção de grandes superfícies em altura",
            "Montagem de sistemas de iluminação e climatização",
            "Acabamentos e pinturas em pé-direito alto"
        ],
        cardSpecs: {
            "Altura Trab.": "10m",
            "Alc. Horiz.": "1,27m",
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
        realImage: "/frota/real/tesoura-12m.jpeg",
        overview: "A Plataforma Tesoura Elétrica 12m é a escolha ideal para trabalhos em altura que exigem uma plataforma de trabalho ampla e estável. Com 12 metros de alcance, atende a instalações industriais, pintura e manutenção de grandes superfícies com conforto e segurança para os operadores.",
        highlights: [
            "12 metros de altura de trabalho",
            "Capacidade de 320 kg na plataforma",
            "Plataforma ampla e estável",
            "Motor elétrico zero emissão"
        ],
        benefits: [
            { title: "Alto Alcance em Tesoura", description: "12 metros de altura permitem atingir coberturas e estruturas elevadas em galpões industriais." },
            { title: "Estabilidade Superior", description: "Mecanismo de tesoura dupla garante estabilidade máxima mesmo na altura total de trabalho." },
            { title: "Capacidade Equilibrada", description: "320 kg de capacidade ideal para um operador com ferramentas pesadas ou dois operadores leves." }
        ],
        specs: {
            dimensoes: [
                { label: "Altura de Trabalho", value: "12 m" },
                { label: "Alcance Horizontal", value: "0,9 m" },
                { label: "Largura", value: "1,22 m" },
                { label: "Comprimento", value: "2,40 m" },
                { label: "Altura de Transporte", value: "2,41 m" }
            ],
            capacidades: [
                { label: "Capacidade da Plataforma", value: "320 kg" },
                { label: "Peso Operacional", value: "2.600 kg" }
            ],
            motor: [
                { label: "Tipo", value: "Elétrico (baterias)" },
                { label: "Emissão", value: "Zero" }
            ]
        },
        applications: [
            "Instalações industriais em altura",
            "Pintura de fachadas internas e externas",
            "Manutenção de coberturas e forros industriais",
            "Montagem de estruturas e sistemas suspensos",
            "Trabalhos em centros de convenções e eventos"
        ],
        cardSpecs: {
            "Altura Trab.": "12m",
            "Alc. Horiz.": "0,9m",
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
        overview: "A Plataforma Tesoura Elétrica 14m é a tesoura de maior alcance vertical da linha elétrica indoor. Com 14 metros de altura, atende grandes galpões industriais e centros logísticos que necessitam de intervenções em alturas significativas sem comprometer a operação interna.",
        highlights: [
            "14 metros de altura de trabalho",
            "Capacidade de 320 kg na plataforma",
            "Máximo alcance da linha tesoura indoor",
            "Motor elétrico silencioso"
        ],
        benefits: [
            { title: "Máximo Alcance Indoor", description: "14 metros de altura — o maior alcance vertical da linha tesoura elétrica para uso interno." },
            { title: "Segurança em Altura", description: "Sistema de tesoura robusto com múltiplas camadas de proteção e estabilizadores automáticos." },
            { title: "Operação Contínua", description: "Baterias de longa duração permitem jornadas completas de trabalho sem necessidade de recarga." }
        ],
        specs: {
            dimensoes: [
                { label: "Altura de Trabalho", value: "14 m" },
                { label: "Alcance Horizontal", value: "0,91 m" },
                { label: "Largura", value: "1,14 m" },
                { label: "Comprimento", value: "2,71 m" },
                { label: "Altura de Transporte", value: "2,53 m" }
            ],
            capacidades: [
                { label: "Capacidade da Plataforma", value: "320 kg" },
                { label: "Peso Operacional", value: "3.500 kg" }
            ],
            motor: [
                { label: "Tipo", value: "Elétrico (baterias)" },
                { label: "Emissão", value: "Zero" }
            ]
        },
        applications: [
            "Manutenção em grandes galpões industriais",
            "Instalações em centros logísticos e de distribuição",
            "Montagem de sistemas de sprinklers e detecção",
            "Manutenção de pontes rolantes e trilhos",
            "Trabalhos em instalações com pé-direito muito alto"
        ],
        cardSpecs: {
            "Altura Trab.": "14m",
            "Alc. Horiz.": "0,91m",
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
        overview: "A Plataforma Tesoura 14m Todo Terreno combina a estabilidade do sistema tesoura com a capacidade de operar em terrenos acidentados. Com 14 metros de altura e rodas todo terreno, é perfeita para canteiros de obra, instalações ao ar livre e ambientes onde plataformas convencionais não conseguem transitar.",
        highlights: [
            "14 metros de altura todo terreno",
            "Alta capacidade de 360 kg na plataforma",
            "Rodas e tração para pisos irregulares",
            "Projetada para uso externo intensivo"
        ],
        benefits: [
            { title: "Mobilidade Todo Terreno", description: "Rodas grandes e sistema de tração permitem deslocamento em terrenos de terra, cascalho e pisos irregulares." },
            { title: "Estabilidade Robusta", description: "Estabilizadores hidráulicos garantem nivelamento e segurança mesmo em superfícies inclinadas." },
            { title: "Capacidade Reforçada", description: "360 kg de capacidade suportam dois operadores com ferramentas para trabalhos pesados." }
        ],
        specs: {
            dimensoes: [
                { label: "Altura de Trabalho", value: "14 m" },
                { label: "Alcance Horizontal", value: "0,91 m" },
                { label: "Largura", value: "1,75 m" },
                { label: "Comprimento", value: "3,15 m" },
                { label: "Altura de Transporte", value: "2,83 m" }
            ],
            capacidades: [
                { label: "Capacidade da Plataforma", value: "360 kg" },
                { label: "Peso Operacional", value: "4.500 kg" }
            ]
        },
        applications: [
            "Canteiros de obra ao ar livre",
            "Instalações em terrenos sem pavimentação",
            "Manutenção de fachadas externas",
            "Trabalhos em áreas rurais e agroindustriais",
            "Montagem de estruturas em ambientes externos"
        ],
        cardSpecs: {
            "Altura Trab.": "14m",
            "Alc. Horiz.": "0,91m",
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
        overview: "A Escavadeira Cat 313D2L é uma máquina versátil da classe de 13 toneladas, ideal para obras de médio porte. Com excelente relação entre potência e consumo, oferece alta produtividade em escavação, abertura de valas e manuseio de materiais diversos.",
        highlights: [
            "Peso operacional de 13.900 kg",
            "Profundidade de escavação de 5,55 metros",
            "Excelente custo-benefício operacional",
            "Marca Caterpillar — referência em confiabilidade"
        ],
        benefits: [
            { title: "Versatilidade", description: "Porte médio permite atuação em diversas frentes de trabalho, desde escavação até manuseio de materiais e demolição leve." },
            { title: "Eficiência de Combustível", description: "Motor Cat otimizado garante menor consumo de diesel mantendo a potência necessária para operações intensivas." },
            { title: "Facilidade de Transporte", description: "Peso de 13.900 kg facilita o transporte entre canteiros com caminhões prancha convencionais." }
        ],
        specs: {
            dimensoes: [
                { label: "Peso Operacional", value: "13.900 kg" },
                { label: "Profundidade Máxima de Escavação", value: "5.550 mm" },
                { label: "Largura", value: "2,59 m" },
                { label: "Comprimento", value: "7,62 m" },
                { label: "Altura", value: "2,83 m" }
            ]
        },
        applications: [
            "Escavação de valas para saneamento e drenagem",
            "Obras de infraestrutura urbana",
            "Movimentação de terra em loteamentos",
            "Demolição leve e remoção de entulho",
            "Manuseio de materiais em canteiros"
        ],
        cardSpecs: {
            "Profundidade": "5,55m",
            "Dimensões": "2,59x7,62x2,83m",
            "Peso": "13900kg"
        },
    },
    {
        id: "esc-8t",
        name: "Escavadeira 8 Toneladas Yanmar VIO80",
        brand: "Yanmar",
        category: "Escavadeiras",
        description: "Escavadeira compacta de 8 toneladas, ideal para obras urbanas e espaços reduzidos com alta produtividade.",
        image: "/frota/escavadeira-8t.jpg",
        slug: "escavadeira-8t",
        overview: "A Escavadeira Yanmar VIO80 é uma máquina compacta de 8 toneladas com sistema de giro de lança offset, permitindo escavação paralela a paredes e muros. Ideal para obras urbanas onde o espaço é limitado mas a produtividade não pode ser comprometida.",
        highlights: [
            "Peso operacional de 8.285 kg",
            "Profundidade de escavação de 4,40 metros",
            "Sistema offset para escavação junto a paredes",
            "Dimensões compactas para obras urbanas"
        ],
        benefits: [
            { title: "Compacidade Urbana", description: "Dimensões reduzidas permitem operação em ruas estreitas, terrenos residenciais e áreas confinadas." },
            { title: "Giro Offset", description: "Lança offset permite escavação paralela a estruturas existentes, ideal para trabalhos em divisas e fundações." },
            { title: "Potência para o Porte", description: "Apesar das dimensões compactas, oferece potência de escavação próxima a máquinas maiores da categoria." }
        ],
        specs: {
            dimensoes: [
                { label: "Peso Operacional", value: "8.285 kg" },
                { label: "Profundidade Máxima de Escavação", value: "4.400 mm" },
                { label: "Largura", value: "2,27 m" },
                { label: "Comprimento", value: "6,46 m" },
                { label: "Altura", value: "2,68 m" }
            ]
        },
        applications: [
            "Obras urbanas em espaços confinados",
            "Escavação de fundações residenciais",
            "Abertura de valas junto a estruturas existentes",
            "Terraplenagem em terrenos pequenos",
            "Demolição seletiva em áreas urbanas"
        ],
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
        realImage: "/frota/real/escavadeira-15t-xcmg-xe150br.jpeg",
        overview: "A Escavadeira XCMG XE150BR é fabricada no Brasil e oferece excelente custo-benefício para obras de médio a grande porte. Com 14.500 kg de peso operacional e peças de reposição acessíveis no mercado nacional, é uma opção econômica sem abrir mão de desempenho e confiabilidade.",
        highlights: [
            "Peso operacional de 14.500 kg",
            "Profundidade de escavação de 5,54 metros",
            "Fabricação nacional — peças acessíveis",
            "Excelente custo-benefício operacional"
        ],
        benefits: [
            { title: "Fabricação Nacional", description: "Fabricada no Brasil com ampla rede de suporte técnico e peças de reposição disponíveis em todo o território nacional." },
            { title: "Custo-Benefício", description: "Desempenho comparável a máquinas importadas com custo operacional significativamente menor." },
            { title: "Força de Escavação", description: "15 toneladas de peso operacional com sistema hidráulico robusto para trabalhos exigentes." }
        ],
        specs: {
            dimensoes: [
                { label: "Peso Operacional", value: "14.500 kg" },
                { label: "Profundidade Máxima de Escavação", value: "5.540 mm" },
                { label: "Largura", value: "2,59 m" },
                { label: "Comprimento", value: "7,82 m" },
                { label: "Altura", value: "2,87 m" }
            ]
        },
        applications: [
            "Obras de infraestrutura e saneamento",
            "Terraplanagem e movimentação de terra",
            "Escavação de fundações comerciais e industriais",
            "Abertura de canais e valas profundas",
            "Carregamento de caminhões em mineração"
        ],
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
        realImage: "/frota/real/mini-escavadeira-1t.jpeg",
        overview: "A Mini Escavadeira 1 Tonelada é a menor e mais versátil da nossa linha, projetada para espaços onde máquinas convencionais simplesmente não entram. Com apenas 0,71 metro de largura, passa por portões, portas e corredores, sendo perfeita para paisagismo, instalações internas e trabalhos em jardins.",
        highlights: [
            "Apenas 0,71m de largura — passa por portas",
            "Profundidade de escavação de 1,82 metro",
            "Peso operacional de apenas 1.150 kg",
            "Ideal para espaços ultra confinados"
        ],
        benefits: [
            { title: "Acesso a Qualquer Lugar", description: "Com apenas 0,71m de largura, acessa jardins, quintais, porões e áreas internas onde nenhum outro equipamento chega." },
            { title: "Leveza Extrema", description: "1.150 kg de peso permitem operação sobre pisos frágeis e transporte em reboques leves." },
            { title: "Custo Acessível", description: "Locação econômica para pequenos trabalhos que antes exigiriam escavação manual demorada e cara." }
        ],
        specs: {
            dimensoes: [
                { label: "Peso Operacional", value: "1.150 kg" },
                { label: "Profundidade Máxima de Escavação", value: "1.820 mm" },
                { label: "Largura", value: "0,71 m" },
                { label: "Comprimento", value: "2,75 m" },
                { label: "Altura", value: "2,00 m" }
            ]
        },
        applications: [
            "Paisagismo e jardinagem",
            "Escavação em áreas internas e porões",
            "Instalação de tubulações em jardins",
            "Trabalhos em quintais residenciais",
            "Demolição leve em espaços confinados"
        ],
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
        realImage: "/frota/real/mini-escavadeira-2t.jpeg",
        overview: "A Mini Escavadeira 2 Toneladas oferece o equilíbrio ideal entre compacidade e força de escavação. Com 2,20 metros de profundidade de escavação, atende a maioria dos trabalhos de paisagismo, instalação de redes subterrâneas e pequenas fundações em áreas urbanas.",
        highlights: [
            "Profundidade de escavação de 2,20 metros",
            "Largura de 0,95 metro",
            "Peso operacional de 1.740 kg",
            "Perfeita para áreas urbanas"
        ],
        benefits: [
            { title: "Versatilidade Urbana", description: "Porte compacto permite trabalho em ruas, calçadas e terrenos residenciais sem interromper o trânsito." },
            { title: "Profundidade Adequada", description: "2,20 metros de profundidade atendem a instalação de redes de água, esgoto e drenagem residencial." },
            { title: "Fácil Transporte", description: "1.740 kg de peso permitem transporte em carretas leves e acesso a locais com restrição de peso." }
        ],
        specs: {
            dimensoes: [
                { label: "Peso Operacional", value: "1.740 kg" },
                { label: "Profundidade Máxima de Escavação", value: "2.200 mm" },
                { label: "Largura", value: "0,95 m" },
                { label: "Comprimento", value: "3,45 m" },
                { label: "Altura", value: "2,30 m" }
            ]
        },
        applications: [
            "Paisagismo e terraplenagem leve",
            "Instalação de redes de água e esgoto residencial",
            "Escavação de pequenas fundações",
            "Trabalhos em calçadas e áreas públicas",
            "Abertura de valas em loteamentos"
        ],
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
        overview: "A Mini Escavadeira 2,7 Toneladas é a máquina que equilibra dimensões compactas com força de escavação robusta. Com 2,54 metros de profundidade e peso operacional de 2.735 kg, é excelente para obras de saneamento, drenagem e construções residenciais.",
        highlights: [
            "Profundidade de escavação de 2,54 metros",
            "Peso operacional de 2.735 kg",
            "Equilíbrio ideal entre porte e força",
            "Excelente para saneamento e drenagem"
        ],
        benefits: [
            { title: "Força Equilibrada", description: "2,7 toneladas oferecem força de escavação significativa mantendo dimensões compactas para áreas urbanas." },
            { title: "Profundidade Profissional", description: "2,54 metros de profundidade atendem a redes de saneamento e drenagem padrão de obras civis." },
            { title: "Estabilidade", description: "Peso de 2.735 kg garante estabilidade durante operações de escavação sem necessidade de contrapesos adicionais." }
        ],
        specs: {
            dimensoes: [
                { label: "Peso Operacional", value: "2.735 kg" },
                { label: "Profundidade Máxima de Escavação", value: "2.540 mm" },
                { label: "Largura", value: "1,50 m" },
                { label: "Comprimento", value: "4,10 m" },
                { label: "Altura", value: "2,53 m" }
            ]
        },
        applications: [
            "Obras de saneamento básico",
            "Drenagem urbana e rural",
            "Construções residenciais",
            "Instalação de redes subterrâneas",
            "Terraplenagem em terrenos compactos"
        ],
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
        overview: "A Mini Escavadeira 3 Toneladas é versátil e potente, oferecendo quase 3 metros de profundidade de escavação em um formato compacto. Perfeita para instalações hidráulicas e elétricas subterrâneas, obras de saneamento e construção civil residencial e comercial.",
        highlights: [
            "Profundidade de escavação de 2,97 metros",
            "Peso operacional de 3.415 kg",
            "Potência superior para o porte compacto",
            "Ideal para instalações subterrâneas"
        ],
        benefits: [
            { title: "Profundidade Versátil", description: "Quase 3 metros de profundidade atendem a maioria das instalações subterrâneas residenciais e comerciais." },
            { title: "Potência Concentrada", description: "3 toneladas de peso garantem força hidráulica adequada para solos compactados e argilosos." },
            { title: "Mobilidade", description: "Dimensões compactas permitem trabalho em ruas estreitas e terrenos com acesso limitado." }
        ],
        specs: {
            dimensoes: [
                { label: "Peso Operacional", value: "3.415 kg" },
                { label: "Profundidade Máxima de Escavação", value: "2.970 mm" },
                { label: "Largura", value: "1,55 m" },
                { label: "Comprimento", value: "4,47 m" },
                { label: "Altura", value: "2,50 m" }
            ]
        },
        applications: [
            "Instalação de redes hidráulicas e elétricas",
            "Obras de saneamento em áreas urbanas",
            "Escavação de fundações comerciais",
            "Trabalhos em condomínios e loteamentos",
            "Abertura de valas para cabeamento"
        ],
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
        realImage: "/frota/real/mini-escavadeira-3-5t.jpeg",
        overview: "A Mini Escavadeira 3,5 Toneladas oferece força de escavação superior em formato compacto, sendo ideal para obras civis que demandam profundidade e potência sem as dimensões de uma escavadeira convencional. Com 3,41 metros de profundidade, atende a obras de porte médio.",
        highlights: [
            "Profundidade de escavação de 3,41 metros",
            "Peso operacional de 3.398 kg",
            "Força superior no segmento mini",
            "Compacta para acesso a áreas restritas"
        ],
        benefits: [
            { title: "Profundidade Profissional", description: "3,41 metros de profundidade atendem a obras de porte médio incluindo fundações e redes profundas." },
            { title: "Melhor Custo x Alcance", description: "Máxima profundidade na categoria mini, evitando a necessidade de alugar máquinas maiores e mais caras." },
            { title: "Compacidade Mantida", description: "Mesmo com maior profundidade, mantém dimensões compactas para operação em terrenos urbanos." }
        ],
        specs: {
            dimensoes: [
                { label: "Peso Operacional", value: "3.398 kg" },
                { label: "Profundidade Máxima de Escavação", value: "3.410 mm" },
                { label: "Largura", value: "1,75 m" },
                { label: "Comprimento", value: "4,82 m" },
                { label: "Altura", value: "2,42 m" }
            ]
        },
        applications: [
            "Obras civis de porte médio",
            "Terraplanagem leve em terrenos urbanos",
            "Escavação de fundações profundas",
            "Instalação de redes subterrâneas profundas",
            "Construção de piscinas e reservatórios"
        ],
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
        overview: "A Mini Escavadeira 5,5 Toneladas é a mais potente da linha mini, com capacidade de escavação próxima a escavadeiras convencionais. Com 3,60 metros de profundidade e peso operacional de 4.840 kg, é a escolha ideal quando você precisa de potência máxima com as vantagens de uma máquina compacta.",
        highlights: [
            "Maior da linha mini — 5,5 toneladas",
            "Profundidade de escavação de 3,60 metros",
            "Potência próxima a escavadeiras convencionais",
            "Compacta para acesso a áreas restritas"
        ],
        benefits: [
            { title: "Potência Máxima Mini", description: "5,5 toneladas oferecem força de escavação próxima a escavadeiras de 8 toneladas em formato significativamente menor." },
            { title: "Versatilidade Total", description: "Atende desde pequenas fundações até obras de infraestrutura de médio porte com eficiência." },
            { title: "Economia de Espaço", description: "Potência de escavadeira convencional com dimensões que permitem acesso a terrenos urbanos restritos." }
        ],
        specs: {
            dimensoes: [
                { label: "Peso Operacional", value: "4.840 kg" },
                { label: "Profundidade Máxima de Escavação", value: "3.600 mm" },
                { label: "Largura", value: "1,96 m" },
                { label: "Comprimento", value: "5,55 m" },
                { label: "Altura", value: "2,53 m" }
            ]
        },
        applications: [
            "Obras de infraestrutura de médio porte",
            "Escavação de fundações profundas",
            "Terraplanagem em terrenos compactados",
            "Demolição seletiva em áreas urbanas",
            "Movimentação de terra em loteamentos"
        ],
        cardSpecs: {
            "Profundidade": "3,60m",
            "Dimensões": "1,96x5,55x2,53m",
            "Peso": "4840kg"
        },
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
        overview: "A Mini Carregadeira Bobcat S-650 é referência em versatilidade e capacidade de carga no segmento. Cabinada e com sistema de acoplamento rápido para diversos implementos, é a máquina multifunção ideal para canteiros de obra, limpeza de terrenos e movimentação de materiais.",
        highlights: [
            "Capacidade de carga operacional de 1.791 kg",
            "Sistema de acoplamento rápido para implementos",
            "Cabine fechada com conforto operacional",
            "Marca Bobcat — líder mundial em compactas"
        ],
        benefits: [
            { title: "Alta Capacidade de Carga", description: "1.791 kg de capacidade operacional permitem movimentar grandes volumes de material com rapidez e eficiência." },
            { title: "Multifunção", description: "Acoplamento rápido aceita diversos implementos: caçamba, vassoura, garfo, perfuratriz e muitos outros." },
            { title: "Conforto e Produtividade", description: "Cabine fechada com controles ergonômicos reduz a fadiga do operador e aumenta a produtividade diária." }
        ],
        specs: {
            dimensoes: [
                { label: "Largura", value: "1,88 m" },
                { label: "Comprimento", value: "3,47 m" },
                { label: "Altura", value: "2,65 m" },
                { label: "Peso Operacional", value: "4.550 kg" }
            ],
            capacidades: [
                { label: "Capacidade Operacional", value: "1.791 kg" }
            ]
        },
        applications: [
            "Movimentação de materiais em canteiros",
            "Limpeza e nivelamento de terrenos",
            "Carga e descarga de materiais de construção",
            "Remoção de entulho e resíduos",
            "Trabalhos com implementos diversos"
        ],
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
        realImage: "/frota/real/mini-carregadeira-manitou-1650r.jpeg",
        overview: "A Mini Carregadeira Manitou 1650R combina robustez europeia com dimensões compactas. Cabinada e ergonômica, é projetada para operações intensivas de carga e descarga com conforto para o operador. Ideal para canteiros de obra e operações logísticas.",
        highlights: [
            "Capacidade de carga de 748 kg",
            "Design compacto para espaços restritos",
            "Cabine ergonômica com visibilidade 360°",
            "Marca Manitou — engenharia europeia"
        ],
        benefits: [
            { title: "Compacidade Superior", description: "Com apenas 1,55m de largura e 3,10m de comprimento, acessa os menores canteiros e áreas de estoque." },
            { title: "Ergonomia", description: "Cabine projetada para conforto operacional com controles intuitivos e excelente visibilidade." },
            { title: "Confiabilidade Europeia", description: "Engenharia Manitou garante durabilidade e desempenho consistente em operações intensivas." }
        ],
        specs: {
            dimensoes: [
                { label: "Largura", value: "1,55 m" },
                { label: "Comprimento", value: "3,10 m" },
                { label: "Altura", value: "1,95 m" },
                { label: "Peso Operacional", value: "2.796 kg" }
            ],
            capacidades: [
                { label: "Capacidade Operacional", value: "748 kg" }
            ]
        },
        applications: [
            "Operações de carga e descarga em canteiros",
            "Movimentação de materiais em espaços reduzidos",
            "Limpeza de terrenos e preparação de áreas",
            "Trabalhos em áreas de acesso restrito",
            "Operações logísticas em pátios e depósitos"
        ],
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
        image: "/frota/manipulador-17m.jpg",
        slug: "manipulador-12m",
        overview: "O Manipulador Telescópico 12,8m é a solução para movimentação de cargas pesadas em altura. Com 12,8 metros de alcance e capacidade de 3.800 kg, substitui guindastes em diversas operações, oferecendo maior mobilidade e versatilidade na construção civil e logística de canteiro.",
        highlights: [
            "Alcance de 12,8 metros de altura",
            "Capacidade de carga de 3.800 kg",
            "Substitui guindastes em operações pontuais",
            "Alta mobilidade em canteiro"
        ],
        benefits: [
            { title: "Versatilidade de Carga", description: "3.800 kg de capacidade permitem elevar pallets, vigas, estruturas metálicas e materiais pesados em geral." },
            { title: "Economia vs Guindaste", description: "Substitui guindastes em operações de elevação com custo operacional significativamente menor." },
            { title: "Mobilidade", description: "Tração 4x4 e sistema de direção permitem deslocamento rápido entre pontos do canteiro sem necessidade de guincho." }
        ],
        specs: {
            dimensoes: [
                { label: "Altura de Elevação", value: "12,8 m" },
                { label: "Largura", value: "2,52 m" },
                { label: "Comprimento", value: "5,64 m" },
                { label: "Altura de Transporte", value: "2,52 m" },
                { label: "Peso Operacional", value: "11.500 kg" }
            ],
            capacidades: [
                { label: "Capacidade Máxima", value: "3.800 kg" }
            ]
        },
        applications: [
            "Elevação de materiais em construção civil",
            "Movimentação de cargas pesadas em canteiros",
            "Logística de materiais em obra",
            "Montagem de estruturas pré-fabricadas",
            "Operações de carga e descarga em altura"
        ],
        cardSpecs: {
            "Altura Trab.": "12,8m",
            "Capacidade": "3800kg",
            "Dimensões": "2,52x5,64x2,52m",
            "Peso": "11500kg"
        },
    },
    {
        id: "manip-17m",
        name: "Manipulador Telescópico 17m",
        brand: "Diversos",
        category: "Manipuladores",
        description: "Alcance de 17 metros para operações em grandes alturas. Perfeito para obras de grande porte e montagens industriais.",
        image: "/frota/manipulador-12m.jpg",
        slug: "manipulador-17m",
        realImage: "/frota/real/manipulador-telescopico-17m.jpeg",
        overview: "O Manipulador Telescópico 17m é o equipamento de maior alcance da categoria na frota, atingindo 17 metros de elevação com capacidade de 4.500 kg. Ideal para obras de grande porte, montagens industriais e operações que exigem elevação de cargas pesadas a grandes alturas.",
        highlights: [
            "Alcance de 17 metros — maior da categoria",
            "Capacidade de carga de 4.500 kg",
            "Ideal para obras de grande porte",
            "Substitui guindastes com mais mobilidade"
        ],
        benefits: [
            { title: "Máximo Alcance", description: "17 metros de elevação permitem atender a edifícios de até 5 pavimentos e estruturas industriais elevadas." },
            { title: "Capacidade Pesada", description: "4.500 kg de capacidade para elevar estruturas metálicas, painéis de concreto e materiais de grande porte." },
            { title: "Operação Ágil", description: "Mobilidade e velocidade de operação superiores a guindastes convencionais, reduzindo tempo de obra." }
        ],
        specs: {
            dimensoes: [
                { label: "Altura de Elevação", value: "17 m" },
                { label: "Largura", value: "2,59 m" },
                { label: "Comprimento", value: "6,06 m" },
                { label: "Altura de Transporte", value: "2,54 m" },
                { label: "Peso Operacional", value: "12.400 kg" }
            ],
            capacidades: [
                { label: "Capacidade Máxima", value: "4.500 kg" }
            ]
        },
        applications: [
            "Obras de grande porte e edifícios",
            "Montagens industriais em altura",
            "Elevação de estruturas pré-fabricadas pesadas",
            "Logística de materiais em grandes canteiros",
            "Operações portuárias e de armazéns"
        ],
        cardSpecs: {
            "Altura Trab.": "17m",
            "Capacidade": "4500kg",
            "Dimensões": "2,59x6,06x2,54m",
            "Peso": "12400kg"
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
        realImage: "/frota/real/rolo-compactador-1-5t.jpeg",
        overview: "O Rolo Compactador 1,5 Ton Liso é a solução compacta para compactação de solos em valas, calçadas e áreas de acesso restrito. Com tambor liso vibratório, garante compactação uniforme e eficiente em solos granulares, bases e sub-bases de pavimentação.",
        highlights: [
            "Tambor liso vibratório para compactação uniforme",
            "Compacto para áreas de acesso restrito",
            "Peso operacional de 1.500 kg",
            "Ideal para valas e calçadas"
        ],
        benefits: [
            { title: "Compactação em Espaços Restritos", description: "Dimensões compactas permitem operar em valas, calçadas e áreas onde rolos maiores não acessam." },
            { title: "Vibração Eficiente", description: "Sistema vibratório garante compactação profunda e uniforme mesmo com o porte reduzido do equipamento." },
            { title: "Fácil Operação", description: "Controles intuitivos e manejo simples permitem operação produtiva mesmo por operadores menos experientes." }
        ],
        specs: {
            dimensoes: [
                { label: "Largura", value: "0,98 m" },
                { label: "Comprimento", value: "2,13 m" },
                { label: "Altura", value: "2,33 m" },
                { label: "Peso Operacional", value: "2.796 kg" }
            ],
            capacidades: [
                { label: "Peso Estático", value: "1.500 kg" }
            ]
        },
        applications: [
            "Compactação de solo em valas e trincheiras",
            "Preparação de base para calçadas e pisos",
            "Compactação de aterros em áreas restritas",
            "Obras de saneamento e drenagem",
            "Pavimentação de pequenas áreas e acessos"
        ],
        cardSpecs: {
            "Dimensões": "0,98x2,13x2,33m",
            "Peso": "2796kg",
            "Capacidade": "1500kg"
        },
    },
];
