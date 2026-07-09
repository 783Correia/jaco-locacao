'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight, FaCalendarAlt, FaClock } from 'react-icons/fa'
import { BlogPost } from '@/types/blog'
import { formatDateShort } from '@/utils/format-date'

export default function PostsGrid({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <p className="text-center text-gray-400 py-20">Nenhum post publicado ainda.</p>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, i) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          className="group"
        >
          <Link href={`/blog/${post.slug}`} className="block">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-dark-light mb-5">
              {post.image_url ? (
                <Image
                  src={post.image_url}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
              <span className="flex items-center gap-1.5">
                <FaCalendarAlt className="text-primary/60" />
                {formatDateShort(post.date, true)}
              </span>
              <span className="flex items-center gap-1.5">
                <FaClock className="text-primary/60" />
                {post.read_time} de leitura
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
  )
}
