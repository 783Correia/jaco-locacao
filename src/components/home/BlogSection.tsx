"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaCalendarAlt } from "react-icons/fa"
import { blogPosts } from "@/data/blog-posts"
import SectionHeading from "@/components/SectionHeading"

export default function BlogSection() {
  const [active, setActive] = useState(0)
  const posts = blogPosts
  const maxIndex = posts.length - 1

  const next = () => setActive((a) => Math.min(a + 1, maxIndex))
  const prev = () => setActive((a) => Math.max(a - 1, 0))

  return (
    <section className="section-padding relative overflow-hidden bg-gray-50">
      <div className="container-main">
        <SectionHeading
          tag="Blog"
          title="Fique por Dentro"
          description="Artigos, dicas e novidades sobre equipamentos e o mundo da construção."
        />

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${active * (100 / 3)}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
              {posts.map((post, i) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
                  >
                    <div className="relative aspect-[16/10] bg-dark-light">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          loading="lazy"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white/20 text-5xl font-extrabold">{String(post.id).padStart(2, "0")}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">{post.category}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1.5">
                          <FaCalendarAlt className="text-primary/60" />
                          {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight">{post.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mt-2 line-clamp-2">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-2 text-primary font-bold text-sm mt-4 group-hover:gap-3 transition-all duration-300">
                        Ler mais <FaArrowRight className="text-xs" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              disabled={active === 0}
              aria-label="Posts anteriores"
              className="w-11 h-11 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all hover:scale-105 disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-500 disabled:hover:border-gray-200 disabled:hover:scale-100"
            >
              <FaChevronLeft size={12} aria-hidden />
            </button>
            <div className="flex gap-0">
              {posts.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} aria-label={`Ver post ${i + 1}`} aria-current={active === i} className="py-2.5 px-2 flex items-center">
                  <span className={`h-1.5 rounded-full transition-all duration-500 ${active === i ? "bg-primary w-8" : "bg-gray-300 w-2"}`} />
                </button>
              ))}
            </div>
            <button
              onClick={next}
              disabled={active === maxIndex}
              aria-label="Próximos posts"
              className="w-11 h-11 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all hover:scale-105 disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-500 disabled:hover:border-gray-200 disabled:hover:scale-100"
            >
              <FaChevronRight size={12} aria-hidden />
            </button>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/blog" className="btn-outline">
            Ver todos os artigos <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  )
}
