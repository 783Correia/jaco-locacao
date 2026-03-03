"use client";

import { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProdutosContent() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "Todos",
    "Plataformas Articuladas",
    "Plataformas Tesoura",
    "Escavadeiras",
    "Mini Escavadeiras",
    "Retroescavadeiras",
    "Pás Carregadeiras",
    "Mini Carregadeiras",
    "Manipuladores",
    "Rolos Compactadores",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "Todos" || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden text-center md:text-left bg-gradient-to-br from-primary-dark to-forest">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

        <div className="container-main relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-white/70 font-bold tracking-wider text-xs uppercase mb-2 block">
                Catálogo Digital
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Catálogo de Frota
              </h1>
            </div>
            <p className="text-white/70 max-w-md text-right md:text-left text-sm md:text-base hidden md:block border-l border-white/20 pl-6">
              A força e produtividade que sua obra exige com equipamentos modernos e confiáveis.
            </p>
          </div>
        </div>
      </section>

      <section className="flex-grow py-12 relative z-10 bg-gray-50">
        <div className="container-main">

          {/* Mobile: horizontal search + category pills */}
          <div className="lg:hidden mb-8 space-y-4">
            <div className="relative flex items-center bg-white border border-gray-200 rounded-xl overflow-hidden focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all shadow-sm">
              <FaSearch className="ml-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar equipamento..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent text-gray-900 placeholder-gray-400 px-3 py-3 focus:outline-none text-sm"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 -mx-2 px-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border ${activeCategory === cat
                    ? "bg-primary text-white border-primary shadow-md"
                    : "text-gray-600 border-gray-200 bg-white hover:border-primary hover:text-primary"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Desktop Sidebar — hidden on mobile */}
            <aside className="hidden lg:block lg:col-span-1 space-y-8">
              <div className="sticky top-24">
                {/* Search */}
                <div className="relative mb-8">
                  <div className="relative flex items-center bg-white border border-gray-200 rounded-xl overflow-hidden focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all shadow-sm">
                    <FaSearch className="ml-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Buscar..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-transparent text-gray-900 placeholder-gray-400 px-3 py-3 focus:outline-none text-sm"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="text-gray-900 font-bold text-lg mb-4 flex items-center gap-2">
                    <FaFilter className="text-primary text-sm" /> Categorias
                  </h3>
                  <div className="flex flex-col gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${activeCategory === cat
                          ? "bg-primary text-white font-bold shadow-md"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                          }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex justify-between items-end border-b border-gray-200 pb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {activeCategory === "Todos" ? "Todos os Produtos" : activeCategory}
                </h2>
                <span className="text-gray-400 text-sm">
                  {filteredProducts.length} resultado(s)
                </span>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div key={product.id}>
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-32 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <FaSearch className="text-gray-300 text-2xl" />
                  </div>
                  <h3 className="text-gray-900 text-lg font-bold mb-2">Sem resultados</h3>
                  <p className="text-gray-400 mb-6 max-w-xs text-center">
                    Não encontramos produtos para esta busca.
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory("Todos");
                      setSearchTerm("");
                    }}
                    className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-all text-sm font-bold"
                  >
                    Limpar Filtros
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
