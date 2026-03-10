import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);
    if (!product) return { title: "Equipamento não encontrado" };

    const title = `${product.name} para Locação | Jaco Locação SC`;
    const description = product.overview
        ? product.overview.slice(0, 155) + "..."
        : `Aluguel de ${product.name} em Santa Catarina. ${product.description}`;

    return {
        title,
        description,
        keywords: `locação ${product.name}, aluguel ${product.name}, ${product.category} locação, ${product.name} Santa Catarina`,
        openGraph: {
            title,
            description,
            images: product.realImage ? [product.realImage] : [product.image],
            type: "website",
        },
    };
}

export default async function ProductPage({ params }: PageProps) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);
    if (!product) notFound();

    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    const specSections = [
        { key: "dimensoes" as const, title: "Dimensões", icon: "📐" },
        { key: "capacidades" as const, title: "Capacidades", icon: "⚡" },
        { key: "motor" as const, title: "Motor", icon: "🔧" },
        { key: "hidraulica" as const, title: "Hidráulica", icon: "💧" },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="pt-28 pb-12 bg-gradient-to-br from-primary-dark to-forest relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
                <div className="container-main relative z-10">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
                        <Link href="/" className="hover:text-white transition-colors">Início</Link>
                        <span>/</span>
                        <Link href="/frota" className="hover:text-white transition-colors">Frota</Link>
                        <span>/</span>
                        <span className="text-white/80">{product.name}</span>
                    </nav>

                    <div className="flex flex-col lg:flex-row items-start gap-8">
                        <div className="flex-1">
                            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-white/70 text-xs font-bold uppercase tracking-wider mb-3">
                                {product.category}
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                                {product.name}
                            </h1>
                            <p className="text-white/70 text-base md:text-lg max-w-2xl">
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Images + Quick Specs */}
            <section className="py-12 bg-gray-50">
                <div className="container-main">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Images */}
                        <div className="space-y-4">
                            {product.realImage && (
                                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm">
                                    <Image
                                        src={product.realImage}
                                        alt={`${product.name} - Foto real do equipamento`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        priority
                                        unoptimized
                                    />
                                    <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                        Foto Real
                                    </span>
                                </div>
                            )}
                            <div className={`relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm ${!product.realImage ? '' : 'hidden lg:block'}`}>
                                <Image
                                    src={product.image}
                                    alt={`${product.name} - Imagem de catálogo`}
                                    fill
                                    className="object-contain p-6"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority={!product.realImage}
                                    unoptimized
                                />
                                {product.realImage && (
                                    <span className="absolute top-3 left-3 bg-gray-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                        Catálogo
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Quick Specs + CTA */}
                        <div className="flex flex-col gap-6">
                            {/* Card Specs */}
                            {product.cardSpecs && (
                                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                                    <h2 className="text-lg font-bold text-gray-900 mb-4">Especificações Rápidas</h2>
                                    <div className="grid grid-cols-2 gap-3">
                                        {Object.entries(product.cardSpecs).map(([key, value]) => (
                                            <div key={key} className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                                <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">{key}</span>
                                                <p className="text-sm text-gray-900 font-bold mt-1">{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Highlights */}
                            {product.highlights && (
                                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                                    <h2 className="text-lg font-bold text-gray-900 mb-4">Destaques</h2>
                                    <ul className="space-y-3">
                                        {product.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</span>
                                                <span className="text-gray-700 text-sm">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* WhatsApp CTA */}
                            <a
                                href={`https://wa.me/554899250605?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20locação%20da%20${encodeURIComponent(product.name)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-[#25D366] hover:bg-[#1ebd5c] text-white flex items-center justify-center gap-3 py-4 rounded-2xl text-base font-bold transition-colors shadow-md hover:shadow-lg"
                            >
                                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                </svg>
                                Solicitar Orçamento via WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview */}
            {product.overview && (
                <section className="py-12 bg-white">
                    <div className="container-main">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Visão Geral</h2>
                        <p className="text-gray-600 leading-relaxed max-w-4xl">{product.overview}</p>
                    </div>
                </section>
            )}

            {/* Detailed Specs */}
            {product.specs && (
                <section className="py-12 bg-gray-50">
                    <div className="container-main">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Especificações Técnicas</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {specSections.map(({ key, title, icon }) => {
                                const specGroup = product.specs?.[key];
                                if (!specGroup || specGroup.length === 0) return null;
                                return (
                                    <div key={key} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                                        <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <span>{icon}</span> {title}
                                        </h3>
                                        <div className="space-y-3">
                                            {specGroup.map((spec, i) => (
                                                <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                                                    <span className="text-sm text-gray-500">{spec.label}</span>
                                                    <span className="text-sm text-gray-900 font-semibold">{spec.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Benefits */}
            {product.benefits && product.benefits.length > 0 && (
                <section className="py-12 bg-white">
                    <div className="container-main">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Benefícios</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {product.benefits.map((benefit, i) => (
                                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Applications */}
            {product.applications && product.applications.length > 0 && (
                <section className="py-12 bg-gray-50">
                    <div className="container-main">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Aplicações</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {product.applications.map((app, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100">
                                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{app}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-primary-dark to-forest">
                <div className="container-main text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Precisa da {product.name}?
                    </h2>
                    <p className="text-white/70 mb-8 max-w-xl mx-auto">
                        Entre em contato agora e receba um orçamento personalizado. Atendemos toda Santa Catarina com entrega e suporte técnico.
                    </p>
                    <a
                        href={`https://wa.me/554899250605?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20locação%20da%20${encodeURIComponent(product.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebd5c] text-white px-8 py-4 rounded-2xl text-base font-bold transition-colors shadow-lg hover:shadow-xl"
                    >
                        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        Solicitar Orçamento via WhatsApp
                    </a>
                </div>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="py-12 bg-white">
                    <div className="container-main">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Equipamentos Relacionados</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((related) => (
                                <Link
                                    key={related.id}
                                    href={`/frota/${related.slug}`}
                                    className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="relative aspect-[4/3] bg-white p-4">
                                        <Image
                                            src={related.realImage || related.image}
                                            alt={related.name}
                                            fill
                                            className={`${related.realImage ? 'object-cover' : 'object-contain p-4'} group-hover:scale-105 transition-transform duration-500`}
                                            sizes="(max-width: 768px) 100vw, 25vw"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">
                                            {related.name}
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{related.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
