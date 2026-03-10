"use client";

import { memo } from "react";
import { Product } from "@/data/products";
import Image from "next/image";

interface ProductCardProps {
    product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    const isRealPhoto = product.image.includes("/real/");

    return (
        <div
            className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm flex flex-col h-full w-full"
        >
            {/* Image */}
            <div className={`relative aspect-[4/3] w-full flex items-center justify-center border-b border-gray-100 ${isRealPhoto ? 'bg-gray-100' : 'bg-white p-4'}`}>
                <Image
                    src={product.image}
                    alt={`Locação de ${product.name} em Santa Catarina`}
                    fill
                    className={`${isRealPhoto ? 'object-cover' : 'object-contain p-4'} group-hover:scale-105 transition-transform duration-500`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {product.brand === "Diversos" ? product.category : product.brand}
                </span>
                <h3 className="text-base font-bold text-gray-900 mt-1 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                </h3>

                <p className="text-gray-500 text-xs leading-relaxed mt-2 mb-4 flex-grow">
                    {product.description}
                </p>

                {/* Footer and Specs */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3">
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                        {product.category}
                    </span>

                    {/* Display Extracted Specs */}
                    {product.cardSpecs && (
                        <div className="flex flex-col gap-2 mt-2">
                            {/* Regular Specs in a Grid */}
                            <div className="grid grid-cols-2 gap-2">
                                {Object.entries(product.cardSpecs)
                                    .filter(([key]) => key !== "Dimensões")
                                    .map(([key, value]) => (
                                        <div key={key} className="flex flex-col bg-gray-50 p-2 rounded-md border border-gray-100">
                                            <span className="text-[9px] text-gray-400 font-semibold uppercase">{key}</span>
                                            <span className="text-xs text-gray-800 font-bold mt-0.5">{value}</span>
                                        </div>
                                    ))}
                            </div>

                            {/* Dimensions Expanded Box */}
                            {product.cardSpecs["Dimensões"] && product.cardSpecs["Dimensões"] !== "n/a" && product.cardSpecs["Dimensões"] !== "-" && (
                                <div className="flex flex-col bg-gray-50 p-3 rounded-md border border-gray-100 mt-1">
                                    <span className="text-[9px] text-gray-400 font-semibold uppercase text-center mb-2">Dimensões (m)</span>
                                    <div className="flex justify-between items-center text-center">
                                        {/* Parse format: 0,81x1,40x1,88m */}
                                        {product.cardSpecs["Dimensões"].replace("m", "").split("x").map((val, idx) => {
                                            const labels = ["Largura", "Comp.", "Altura"];
                                            return (
                                                <div key={idx} className="flex flex-col flex-1">
                                                    <span className="text-[8px] text-gray-400 uppercase">{labels[idx]}</span>
                                                    <span className="text-xs text-gray-800 font-bold">{val}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}

                            {product.cardSpecs["Dimensões"] && (product.cardSpecs["Dimensões"] === "n/a" || product.cardSpecs["Dimensões"] === "-") && (
                                <div className="flex flex-col bg-gray-50 p-2 rounded-md border border-gray-100 mt-1 text-center">
                                    <span className="text-[9px] text-gray-400 font-semibold uppercase">Dimensões</span>
                                    <span className="text-xs text-gray-800 font-bold mt-0.5">Sob Consulta</span>
                                </div>
                            )}
                        </div>
                    )}

                    {/* WhatsApp Button */}
                    <a
                        href={`https://wa.me/554899250605?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20máquina%20${encodeURIComponent(product.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 w-full bg-[#25D366] hover:bg-[#1ebd5c] text-white flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-sm"
                    >
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        Orçar Pelo WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}

export default memo(ProductCard, (prev, next) => prev.product.id === next.product.id);
