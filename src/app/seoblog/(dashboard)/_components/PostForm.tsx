'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { BlogPost } from '@/types/blog'
import { createPost, updatePost } from '../posts/actions'

type Section = { heading: string; body: string }

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function parseGoogleDocs(raw: string): { title: string; sections: Section[] } {
  const lines = raw.split('\n')

  const titleIdx = lines.findIndex(l => l.trim().length > 0)
  if (titleIdx === -1) return { title: '', sections: [{ heading: '', body: '' }] }

  const title = lines[titleIdx].replace(/^##\s*/, '').trim()
  const bodyLines = lines.slice(titleIdx + 1)

  const sections: Section[] = []
  let currentHeading = ''
  let currentParas: string[] = []
  let currentPara = ''

  const flushPara = () => {
    if (currentPara.trim()) { currentParas.push(currentPara.trim()); currentPara = '' }
  }
  const flushSection = () => {
    flushPara()
    if (currentHeading || currentParas.length > 0) {
      sections.push({ heading: currentHeading, body: currentParas.join('\n\n') })
    }
    currentHeading = ''; currentParas = []; currentPara = ''
  }

  for (let i = 0; i < bodyLines.length; i++) {
    const line = bodyLines[i].trim()
    const next = bodyLines[i + 1]?.trim() ?? ''

    if (!line) { flushPara(); continue }

    const isMarkdown = line.startsWith('## ')
    const isHeuristic =
      line.length < 80 &&
      !line.match(/[.!?,;:]$/) &&
      line.split(' ').length <= 12 &&
      (next === '' || next.startsWith('## '))

    if (isMarkdown || isHeuristic) {
      flushSection()
      currentHeading = isMarkdown ? line.slice(3).trim() : line
    } else {
      currentPara += (currentPara ? ' ' : '') + line
    }
  }

  flushSection()

  return { title, sections: sections.length ? sections : [{ heading: '', body: '' }] }
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
  const [focusKeyword, setFocusKeyword] = useState(post?.focus_keyword ?? '')
  const [metaTitle, setMetaTitle] = useState(post?.meta_title ?? '')
  const [metaDescription, setMetaDescription] = useState(post?.meta_description ?? '')
  const [sections, setSections] = useState<Section[]>(
    post?.content?.length ? post.content : [{ heading: '', body: '' }]
  )
  const [slugManual, setSlugManual] = useState(isEditing)
  const [metaTitleManual, setMetaTitleManual] = useState(isEditing && !!post?.meta_title)
  const [metaDescManual, setMetaDescManual] = useState(isEditing && !!post?.meta_description)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [uploading, setUploading] = useState(false)
  const [showImport, setShowImport] = useState(false)
  const [importText, setImportText] = useState('')

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

  function handleImport() {
    const parsed = parseGoogleDocs(importText)
    if (parsed.title) { setTitle(parsed.title); setSlugManual(false) }
    setSections(parsed.sections)
    setImportText('')
    setShowImport(false)
  }

  function addSection() {
    setSections(prev => [...prev, { heading: '', body: '' }])
  }

  function removeSection(i: number) {
    setSections(prev => prev.filter((_, idx) => idx !== i))
  }

  function updateSection(i: number, field: 'heading' | 'body', value: string) {
    setSections(prev => prev.map((s, idx) => (idx === i ? { ...s, [field]: value } : s)))
  }

  async function handleSubmit(published: boolean) {
    if (!title.trim()) { setError('O título é obrigatório'); return }
    if (!slug.trim()) { setError('O slug é obrigatório'); return }

    setLoading(true)
    setError('')

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
      if (isEditing) {
        await updatePost(post.id, data)
      } else {
        await createPost(data)
      }
      router.push('/seoblog/posts')
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
            <label className="text-gray-400 text-sm mb-1.5 block">Tempo de Leitura</label>
            <input
              value={readTime}
              onChange={e => setReadTime(e.target.value)}
              placeholder="5 min"
              className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-lime-400"
            />
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

      {/* Importar do Google Docs */}
      <section className="bg-gray-900 rounded-2xl p-6 space-y-4 border border-gray-800">
        <button
          type="button"
          onClick={() => setShowImport(prev => !prev)}
          className="flex items-center gap-2 w-full text-left group"
        >
          <span className="text-base font-bold text-white">Importar do Google Docs</span>
          <span className="ml-auto text-xs text-gray-500 group-hover:text-lime-400 transition-colors">
            {showImport ? '▲ fechar' : '▼ abrir'}
          </span>
        </button>

        {showImport && (
          <div className="space-y-3">
            <p className="text-gray-500 text-xs leading-relaxed">
              Abra o Google Docs, pressione <kbd className="bg-gray-800 text-gray-300 px-1.5 py-0.5 rounded text-[11px]">Ctrl+A</kbd> depois <kbd className="bg-gray-800 text-gray-300 px-1.5 py-0.5 rounded text-[11px]">Ctrl+C</kbd> e cole aqui.
              A <strong className="text-gray-300">primeira linha</strong> vira o título. Linhas curtas sem pontuação no final viram títulos de seção (H2).
              Escreva <code className="bg-gray-800 text-lime-400 px-1 rounded">## Minha seção</code> no Docs para garantir.
            </p>
            <textarea
              value={importText}
              onChange={e => setImportText(e.target.value)}
              placeholder="Cole o conteúdo do Google Docs aqui..."
              rows={12}
              className="w-full bg-gray-800 text-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-lime-400 resize-y font-mono leading-relaxed"
            />
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleImport}
                disabled={!importText.trim()}
                className="bg-lime-400 hover:bg-lime-300 text-gray-950 font-bold px-6 py-3 rounded-xl transition-colors disabled:opacity-40 text-sm"
              >
                Importar conteúdo
              </button>
              <button
                type="button"
                onClick={() => { setImportText(''); setShowImport(false) }}
                className="text-gray-500 hover:text-gray-300 text-sm px-4 py-3 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Conteúdo */}
      <section className="bg-gray-900 rounded-2xl p-6 space-y-4 border border-gray-800">
        <div className="flex items-center justify-between">
          <h2 className="text-white font-bold">Conteúdo do Post</h2>
          <span className="text-gray-500 text-sm">{sections.length} seção(ões)</span>
        </div>
        <p className="text-gray-600 text-xs -mt-2">
          Cada seção vira um H2. Separe parágrafos com uma linha em branco.
        </p>

        {sections.map((section, i) => (
          <div key={i} className="bg-gray-800 rounded-xl p-4 space-y-3 border border-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-lime-400 text-xs font-bold bg-lime-400/10 px-2 py-0.5 rounded">
                H2 — Seção {i + 1}
              </span>
              {sections.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeSection(i)}
                  className="ml-auto text-gray-600 hover:text-red-400 text-xs transition-colors"
                >
                  Remover seção
                </button>
              )}
            </div>
            <input
              value={section.heading}
              onChange={e => updateSection(i, 'heading', e.target.value)}
              placeholder="Título da seção (H2)"
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-lime-400"
            />
            <textarea
              value={section.body}
              onChange={e => updateSection(i, 'body', e.target.value)}
              placeholder="Conteúdo da seção. Use linha em branco para separar parágrafos."
              rows={8}
              className="w-full bg-gray-700 text-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-lime-400 resize-y leading-relaxed"
            />
          </div>
        ))}

        <button
          type="button"
          onClick={addSection}
          className="w-full border-2 border-dashed border-gray-700 hover:border-lime-400/50 text-gray-500 hover:text-lime-400 rounded-xl py-4 text-sm font-medium transition-colors"
        >
          + Adicionar Seção
        </button>
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
