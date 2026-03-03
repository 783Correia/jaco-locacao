"use client";

import { memo } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Product } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
    product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    return (
        <div
            className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm flex flex-col h-full w-full"
        >
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {product.brand}
                </span>
                <h3 className="text-base font-bold text-gray-900 mt-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                    {product.name}
                </h3>

                <p className="text-gray-500 text-xs leading-relaxed mt-2 mb-4 flex-grow line-clamp-2">
                    {product.description}
                </p>

                {/* Footer and Specs */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3">
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                        {product.category}
                    </span>

                    {/* Display Extracted Specs */}
                    {product.cardSpecs && (
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            {Object.entries(product.cardSpecs).map(([key, value]) => (
                                <div key={key} className="flex flex-col bg-gray-50 p-2 rounded-md border border-gray-100">
                                    <span className="text-[9px] text-gray-400 font-semibold uppercase">{key}</span>
                                    <span className="text-xs text-gray-800 font-bold mt-0.5">{value}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default memo(ProductCard, (prev, next) => prev.product.id === next.product.id);
