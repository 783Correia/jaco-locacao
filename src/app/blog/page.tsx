"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaCalendarAlt, FaClock } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPage() {
  return (
    <main className="font-sans antialiased text-dark">
      {/* Hero */}
      <section className="bg-forest pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-[15%] w-[400px] h-[400px] bg-lime/10 rounded-full blur-[120px] -translate-y-1/2" />
          <div className="absolute top-1/2 right-[10%] w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />
        </div>
        <div className="container-main relative text-center">
          <SectionHeading
            tag="Blog"
            title="Nosso Blog"
            description="Artigos, dicas e novidades sobre equipamentos, segurança e o mundo da construção."
            light
          />
        </div>
      </section>

      {/* Grid de Posts */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  {/* Imagem */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-dark-light mb-5">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        unoptimized
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/20 text-6xl font-extrabold">
                          {String(post.id).padStart(2, "0")}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-primary/60" />
                      {new Date(post.date).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaClock className="text-primary/60" />
                      {post.readTime} de leitura
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mt-2 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-primary font-bold text-sm mt-4 group-hover:gap-3 transition-all duration-300">
                    Ler mais
                    <FaArrowRight className="text-xs" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
