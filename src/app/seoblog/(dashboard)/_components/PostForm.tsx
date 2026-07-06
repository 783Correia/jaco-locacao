'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { BlogPost } from '@/types/blog'
import { createPost, updatePost } from '../posts/actions'

const RichEditor = dynamic(() => import('@/components/RichEditor'), { ssr: false })

type Section = { heading: string; body: string }

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function calcReadTime(html: string, excerptText: string): string {
  const text = html.replace(/<[^>]+>/g, ' ') + ' ' + excerptText
  const words = text.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  return `${minutes} min`
}

function sectionsToHtml(sections: Section[]): string {
  return sections
    .map(s => {
      // If body already contains HTML tags, use as-is; otherwise convert plain text
      const body = s.body.includes('<')
        ? s.body
        : s.body.split('\n\n').filter(Boolean).map(p => `<p>${p}</p>`).join('')
      return s.heading ? `<h2>${s.heading}</h2>${body}` : body
    })
    .join('')
}

function htmlToSections(html: string): Section[] {
  if (typeof window === 'undefined') return [{ heading: '', body: '' }]
  const doc = new DOMParser().parseFromString(html, 'text/html')
  const children = Array.from(doc.body.children)

  const sections: Section[] = []
  let currentHeading = ''
  let currentParts: string[] = []

  const flush = () => {
    if (currentHeading || currentParts.length > 0) {
      sections.push({ heading: currentHeading, body: currentParts.join('\n') })
    }
    currentHeading = ''
    currentParts = []
  }

  for (const child of children) {
    const tag = child.tagName
    if (tag === 'H2' || tag === 'H1') {
      flush()
      currentHeading = child.textContent?.trim() || ''
    } else {
      // Preserve full HTML so images and formatting survive
      const outerHtml = child.outerHTML?.trim()
      if (outerHtml) currentParts.push(outerHtml)
    }
  }
  flush()

  return sections.length ? sections : [{ heading: '', body: '' }]
}

export default function PostForm({ post }: { post?: BlogPost }) {
  const router = useRouter()
  const isEditing = !!post

  const [title, setTitle] = useState(post?.title ?? '')
  const [slug, setSlug] = useState(post?.slug ?? '')
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? '')
  const [category, setCategory] = useState(post?.category ?? 'Equipamentos')
  const [imageUrl, setImageUrl] = useState(post?.image_url ?? '')
  const [date, setDate] = useState(post?.date ?? new Date().toISOString().split('T')[0])
  const [readTime, setReadTime] = useState(post?.read_time ?? '5 min')
  const [readTimeManual, setReadTimeManual] = useState(isEditing && !!post?.read_time)
  const [focusKeyword, setFocusKeyword] = useState(post?.focus_keyword ?? '')
  const [metaTitle, setMetaTitle] = useState(post?.meta_title ?? '')
  const [metaDescription, setMetaDescription] = useState(post?.meta_description ?? '')
  const [contentHtml, setContentHtml] = useState(
    post?.content?.length ? sectionsToHtml(post.content) : ''
  )
  const [slugManual, setSlugManual] = useState(isEditing)
  const [metaTitleManual, setMetaTitleManual] = useState(isEditing && !!post?.meta_title)
  const [metaDescManual, setMetaDescManual] = useState(isEditing && !!post?.meta_description)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [uploading, setUploading] = useState(false)

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    setError('')
    const fd = new FormData()
    fd.append('file', file)
    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
    const data = await res.json()
    if (!res.ok) {
      setError(data.error || 'Erro no upload')
    } else {
      setImageUrl(data.url)
    }
    setUploading(false)
    e.target.value = ''
  }

  useEffect(() => {
    if (!slugManual) setSlug(generateSlug(title))
  }, [title, slugManual])

  useEffect(() => {
    if (!metaTitleManual) setMetaTitle(title)
  }, [title, metaTitleManual])

  useEffect(() => {
    if (!metaDescManual) setMetaDescription(excerpt.slice(0, 160))
  }, [excerpt, metaDescManual])

  useEffect(() => {
    if (!readTimeManual) setReadTime(calcReadTime(contentHtml, excerpt))
  }, [contentHtml, excerpt, readTimeManual])

  async function handleSubmit(published: boolean, preview = false) {
    if (!title.trim()) { setError('O título é obrigatório'); return }
    if (!slug.trim()) { setError('O slug é obrigatório'); return }

    setLoading(true)
    setError('')

    const sections = htmlToSections(contentHtml)

    const data = {
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim(),
      category,
      image_url: imageUrl.trim(),
      date,
      read_time: readTime.trim(),
      focus_keyword: focusKeyword.trim(),
      meta_title: (metaTitle || title).trim(),
      meta_description: (metaDescription || excerpt.slice(0, 160)).trim(),
      published,
      content: sections.filter(s => s.heading.trim() || s.body.trim()),
    }

    try {
      let savedSlug: string
      if (isEditing) {
        const result = await updatePost(post.id, data)
        savedSlug = result.slug
      } else {
        const result = await createPost(data)
        savedSlug = result.slug
      }
      if (preview) {
        window.open(`/seoblog/preview/${savedSlug}`, '_blank')
        setLoading(false)
      } else {
        router.push('/seoblog/posts')
      }
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Erro ao salvar')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 text-sm">
          {error}
        </div>
      )}

      {/* Informações Principais */}
      <section className="bg-gray-900 rounded-2xl p-6 space-y-4 border border-gray-800">
        <h2 className="text-white font-bold">Informações Principais</h2>

        <div>
          <label className="text-gray-400 text-sm mb-1.5 block">Título do Post *</label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Ex: Como escolher o equipamento ideal para sua obra"
            className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 text-lg font-medium outline-none focus:ring-2 focus:ring-lime-400 placeholder-gray-600"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-400 text-sm mb-1.5 block">Slug (URL) *</label>
            <input
              value={slug}
              onChange={e => { setSlug(e.target.value); setSlugManual(true) }}
              placeholder="como-escolher-equipamento"
              className="w-full bg-gray-800 text-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-lime-400 font-mono"
            />
            <p className="text-gray-600 text-xs mt-1">/blog/{slug || '...'}</p>
          </div>
          <div>
            <label className="text-gray-400 text-sm mb-1.5 block">Categoria</label>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-lime-400"
            >
              {['Equipamentos', 'Dicas', 'Segurança', 'Manutenção', 'Outros'].map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-400 text-sm mb-1.5 block">Data de Publicação</label>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-lime-400"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-gray-400 text-sm">Tempo de Leitura</label>
              {!readTimeManual && (
                <span className="text-xs text-lime-400/70 font-medium">automático</span>
              )}
            </div>
            <input
              value={readTime}
              onChange={e => { setReadTime(e.target.value); setReadTimeManual(true) }}
              onFocus={() => setReadTimeManual(true)}
              placeholder="5 min"
              className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-lime-400"
            />
            {readTimeManual && (
              <button
                type="button"
                onClick={() => { setReadTimeManual(false); setReadTime(calcReadTime(contentHtml, excerpt)) }}
                className="text-xs text-gray-500 hover:text-lime-400 mt-1 transition-colors"
              >
                ↺ voltar para automático
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Imagem de Capa */}
      <section className="bg-gray-900 rounded-2xl p-6 space-y-4 border border-gray-800">
        <h2 className="text-white font-bold">Imagem de Capa</h2>
        <p className="text-gray-600 text-xs -mt-2">JPG, PNG ou WebP · máx. 5MB · recomendado 1920×1080px</p>

        {imageUrl ? (
          <div className="relative aspect-[21/9] rounded-xl overflow-hidden bg-gray-800 group">
            <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
            <button
              type="button"
              onClick={() => setImageUrl('')}
              className="absolute top-2 right-2 bg-black/60 hover:bg-red-500 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
            >
              Remover
            </button>
          </div>
        ) : (
          <label className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl py-10 cursor-pointer transition-colors ${uploading ? 'border-lime-400/50 bg-lime-400/5' : 'border-gray-700 hover:border-lime-400/50 hover:bg-gray-800/50'}`}>
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              onChange={handleImageUpload}
              disabled={uploading}
            />
            {uploading ? (
              <p className="text-lime-400 text-sm font-medium">Enviando...</p>
            ) : (
              <>
                <p className="text-gray-400 text-sm font-medium">Clique para fazer upload</p>
                <p className="text-gray-600 text-xs mt-1">ou arraste a imagem aqui</p>
              </>
            )}
          </label>
        )}
      </section>

      {/* SEO */}
      <section className="bg-gray-900 rounded-2xl p-6 space-y-4 border border-gray-800">
        <h2 className="text-white font-bold">SEO</h2>

        <div>
          <label className="text-gray-400 text-sm mb-1.5 block">Keyword Foco</label>
          <input
            value={focusKeyword}
            onChange={e => setFocusKeyword(e.target.value)}
            placeholder="Ex: aluguel plataforma elevatória SC"
            className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-lime-400"
          />
        </div>

        <div>
          <div className="flex justify-between mb-1.5">
            <label className="text-gray-400 text-sm">Meta Título</label>
            <span className={`text-xs ${metaTitle.length > 60 ? 'text-red-400' : 'text-gray-500'}`}>
              {metaTitle.length}/60
            </span>
          </div>
          <input
            value={metaTitle}
            onChange={e => { setMetaTitle(e.target.value); setMetaTitleManual(true) }}
            placeholder="Título que aparece no Google"
            className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-lime-400"
          />
        </div>

        <div>
          <div className="flex justify-between mb-1.5">
            <label className="text-gray-400 text-sm">Meta Descrição</label>
            <span className={`text-xs ${metaDescription.length > 160 ? 'text-red-400' : 'text-gray-500'}`}>
              {metaDescription.length}/160
            </span>
          </div>
          <textarea
            value={metaDescription}
            onChange={e => { setMetaDescription(e.target.value); setMetaDescManual(true) }}
            placeholder="Descrição que aparece no Google (máx. 160 caracteres)"
            rows={3}
            className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-lime-400 resize-none"
          />
        </div>
      </section>

      {/* Resumo */}
      <section className="bg-gray-900 rounded-2xl p-6 space-y-4 border border-gray-800">
        <h2 className="text-white font-bold">Resumo do Post</h2>
        <textarea
          value={excerpt}
          onChange={e => setExcerpt(e.target.value)}
          placeholder="Resumo que aparece na listagem e no início do post..."
          rows={4}
          className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-lime-400 resize-none"
        />
      </section>

      {/* Conteúdo */}
      <section className="bg-gray-900 rounded-2xl p-6 space-y-4 border border-gray-800">
        <div>
          <h2 className="text-white font-bold">Conteúdo do Post</h2>
          <p className="text-gray-500 text-xs mt-1">
            Cole direto do Google Docs — os títulos H2 e formatação são preservados automaticamente.
            Use o botão <strong className="text-gray-400">H2</strong> na toolbar para marcar seções.
          </p>
        </div>
        <RichEditor initialHtml={contentHtml} onChange={setContentHtml} />
      </section>

      {/* Ações */}
      <section className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => handleSubmit(false)}
            disabled={loading}
            className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 rounded-xl transition-colors disabled:opacity-50 text-sm"
          >
            Salvar Rascunho
          </button>
          <button
            type="button"
            onClick={() => handleSubmit(false, true)}
            disabled={loading}
            className="flex-1 border border-gray-700 hover:border-amber-400 text-amber-400 font-bold py-4 rounded-xl transition-colors disabled:opacity-50 text-sm"
          >
            Pré-visualizar
          </button>
          <button
            type="button"
            onClick={() => handleSubmit(true)}
            disabled={loading}
            className="flex-1 bg-lime-400 hover:bg-lime-300 text-gray-950 font-bold py-4 rounded-xl transition-colors disabled:opacity-50 text-sm"
          >
            {isEditing ? 'Atualizar e Publicar' : 'Publicar Post'}
          </button>
        </div>
        {loading && (
          <p className="text-gray-500 text-sm text-center mt-3">Salvando...</p>
        )}
      </section>
    </div>
  )
}
