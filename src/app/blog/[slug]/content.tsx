"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import { getWhatsAppLink } from "@/utils/whatsapp";
import { BlogPost } from "@/data/blog-posts";

export default function BlogPostContent({
  post,
  related,
}: {
  post: BlogPost;
  related: BlogPost[];
}) {
  return (
    <main className="font-sans antialiased text-dark">
      {/* Header do Artigo */}
      <section className="bg-forest pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-[15%] w-[400px] h-[400px] bg-lime/10 rounded-full blur-[120px] -translate-y-1/2" />
          <div className="absolute top-1/2 right-[10%] w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />
        </div>

        <div className="container-main relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-lime/10 text-lime text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
                {post.category}
              </span>

              <h1 className="text-display-sm text-white">{post.title}</h1>

              <div className="flex items-center justify-center gap-6 mt-6 text-white/50 text-sm">
                <span className="flex items-center gap-2">
                  <FaCalendarAlt className="text-lime/60" />
                  {new Date(post.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <FaClock className="text-lime/60" />
                  {post.readTime} de leitura
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Imagem Hero Placeholder */}
      <div className="container-main -mt-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[21/9] rounded-3xl overflow-hidden bg-dark-light relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/10 text-[8rem] font-extrabold leading-none">
                {String(post.id).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12"
            >
              {post.excerpt}
            </motion.p>

            {/* Seções */}
            {post.content.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.05, duration: 0.5 }}
                className="mb-10"
              >
                <h2 className="text-heading-sm text-gray-900 mb-4">
                  {section.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {section.body}
                </p>
              </motion.div>
            ))}

            {/* CTA WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 bg-forest rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-lime/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="relative">
                <h3 className="text-heading-sm text-white mb-3">
                  Precisa deste equipamento?
                </h3>
                <p className="text-white/60 max-w-lg mx-auto mb-8">
                  Fale com um especialista da Jaco Locação e receba um
                  orçamento sem compromisso para o equipamento ideal para a sua
                  obra.
                </p>
                <a
                  href={getWhatsAppLink(
                    `Olá! Li o artigo "${post.title}" e gostaria de saber mais sobre locação deste equipamento.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full text-sm hover:scale-105 hover:bg-[#1ebd5c] transition-all duration-300 shadow-lg shadow-[#25D366]/20 uppercase tracking-wider"
                >
                  <FaWhatsapp className="text-lg" />
                  Pedir Orçamento
                </a>
              </div>
            </motion.div>

            {/* Voltar ao Blog */}
            <div className="mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-medium transition-colors"
              >
                <FaArrowLeft className="text-xs" />
                Voltar ao Blog
              </Link>
            </div>
          </div>

          {/* Posts Relacionados */}
          {related.length > 0 && (
            <div className="max-w-4xl mx-auto mt-20 pt-16 border-t border-gray-100">
              <h3 className="text-heading-sm text-gray-900 mb-8">
                Artigos Relacionados
              </h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/blog/${r.slug}`}
                    className="group block"
                  >
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-dark-light mb-4 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/20 text-4xl font-extrabold">
                          {String(r.id).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="absolute top-2 left-2">
                        <span className="bg-primary text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                          {r.category}
                        </span>
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors duration-300 leading-tight">
                      {r.title}
                    </h4>
                    <span className="inline-flex items-center gap-1.5 text-primary font-bold text-xs mt-2 group-hover:gap-2.5 transition-all duration-300">
                      Ler mais
                      <FaArrowRight className="text-[10px]" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
