import { notFound } from 'next/navigation'
import { supabaseAdmin } from '@/lib/supabase-admin'
import PostForm from '../../../_components/PostForm'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

interface Props {
  params: Promise<{ id: string }>
}

export default async function EditPostPage({ params }: Props) {
  const { id } = await params
  const { data: post } = await supabaseAdmin
    .from('blog_posts')
    .select('*')
    .eq('id', id)
    .single()

  if (!post) notFound()

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/admin/posts"
          className="text-gray-500 hover:text-white transition-colors"
        >
          <FiArrowLeft className="text-lg" />
        </Link>
        <h1 className="text-white text-xl font-bold">Editar Post</h1>
      </div>
      <PostForm post={post} />
    </div>
  )
}
