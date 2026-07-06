import { notFound } from 'next/navigation'
import { supabaseAdmin } from '@/lib/supabase-admin'
import BlogPostContent from '@/app/blog/[slug]/content'
import Link from 'next/link'
import { FiArrowLeft, FiEdit2, FiEye } from 'react-icons/fi'

export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function PreviewPage({ params }: Props) {
  const { slug } = await params

  const { data: post } = await supabaseAdmin
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single()

  if (!post) notFound()

  const { data: related } = await supabaseAdmin
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .neq('id', post.id)
    .limit(3)

  return (
    <>
      {/* Barra de preview */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-amber-400 text-gray-950 px-4 py-2.5 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <FiEye className="text-lg shrink-0" />
          <div>
            <span className="font-bold text-sm">MODO PREVIEW</span>
            <span className="text-xs ml-2 opacity-70">
              {post.published ? 'Post publicado' : 'Rascunho — não visível ao público'}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={`/seoblog/posts/${post.id}/edit`}
            className="flex items-center gap-1.5 bg-gray-950/15 hover:bg-gray-950/25 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
          >
            <FiEdit2 className="text-sm" />
            Editar post
          </Link>
          <Link
            href="/seoblog/posts"
            className="flex items-center gap-1.5 bg-gray-950/15 hover:bg-gray-950/25 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
          >
            <FiArrowLeft className="text-sm" />
            Voltar
          </Link>
        </div>
      </div>

      {/* Offset para a barra fixa não cobrir o conteúdo */}
      <div className="pt-11">
        <BlogPostContent post={post} related={related ?? []} />
      </div>
    </>
  )
}
