import PostForm from '../../_components/PostForm'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export default function NewPostPage() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/seoblog/posts"
          className="text-gray-500 hover:text-white transition-colors"
        >
          <FiArrowLeft className="text-lg" />
        </Link>
        <h1 className="text-white text-xl font-bold">Novo Post</h1>
      </div>
      <PostForm />
    </div>
  )
}
