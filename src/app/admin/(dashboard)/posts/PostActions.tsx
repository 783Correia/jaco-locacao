'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { deletePost, togglePublish } from './actions'
import { BlogPost } from '@/types/blog'

export default function PostActions({ post }: { post: BlogPost }) {
  const router = useRouter()

  async function handleDelete() {
    if (!confirm(`Deletar "${post.title}"?`)) return
    await deletePost(post.id)
    router.refresh()
  }

  async function handleToggle() {
    await togglePublish(post.id, !post.published)
    router.refresh()
  }

  return (
    <div className="flex items-center gap-2 shrink-0">
      <button
        onClick={handleToggle}
        className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
          post.published
            ? 'bg-gray-800 text-gray-400 hover:text-white'
            : 'bg-lime-400/10 text-lime-400 hover:bg-lime-400/20'
        }`}
      >
        {post.published ? 'Despublicar' : 'Publicar'}
      </button>
      <Link
        href={`/admin/posts/${post.id}/edit`}
        className="bg-gray-800 text-gray-400 hover:text-white text-xs px-3 py-1.5 rounded-lg transition-colors"
      >
        Editar
      </Link>
      <button
        onClick={handleDelete}
        className="bg-red-500/10 text-red-400 hover:bg-red-500/20 text-xs px-3 py-1.5 rounded-lg transition-colors"
      >
        Deletar
      </button>
    </div>
  )
}
