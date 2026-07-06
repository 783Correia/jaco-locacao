'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Image from '@tiptap/extension-image'
import { useEffect, useRef, useState } from 'react'
import { FiImage } from 'react-icons/fi'

interface RichEditorProps {
  initialHtml?: string
  onChange: (html: string) => void
}

export default function RichEditor({ initialHtml, onChange }: RichEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
        code: false,
        codeBlock: false,
      }),
      Placeholder.configure({
        placeholder: 'Cole o conteúdo do Google Docs aqui, ou comece a escrever...',
      }),
      Image.configure({
        inline: false,
        allowBase64: false,
        HTMLAttributes: {
          class: 'tiptap-img',
        },
      }),
    ],
    content: initialHtml || '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'focus:outline-none min-h-[320px] text-gray-300 leading-relaxed',
      },
    },
    immediatelyRender: false,
  })

  useEffect(() => {
    if (editor && initialHtml !== undefined) {
      const current = editor.getHTML()
      if (current !== initialHtml) {
        editor.commands.setContent(initialHtml || '')
      }
    }
  }, [initialHtml]) // eslint-disable-line react-hooks/exhaustive-deps

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file || !editor) return
    setUploading(true)
    const fd = new FormData()
    fd.append('file', file)
    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
    const data = await res.json()
    if (res.ok && data.url) {
      editor.chain().focus().setImage({ src: data.url, alt: file.name.replace(/\.[^.]+$/, '') }).run()
    }
    setUploading(false)
    e.target.value = ''
  }

  const btn = (active: boolean) =>
    `px-3 py-1.5 rounded-lg text-sm font-bold transition-colors ${
      active ? 'bg-lime-400 text-gray-950' : 'text-gray-400 hover:text-white hover:bg-gray-700'
    }`

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 focus-within:ring-2 focus-within:ring-lime-400">
      {/* Toolbar */}
      <div className="flex items-center gap-1 px-3 py-2 border-b border-gray-700 flex-wrap">
        <button type="button" onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} className={btn(!!editor?.isActive('heading', { level: 2 }))}>
          H2
        </button>
        <button type="button" onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()} className={btn(!!editor?.isActive('heading', { level: 3 }))}>
          H3
        </button>
        <div className="w-px h-5 bg-gray-700 mx-1" />
        <button type="button" onClick={() => editor?.chain().focus().toggleBold().run()} className={`${btn(!!editor?.isActive('bold'))} font-bold`}>
          B
        </button>
        <button type="button" onClick={() => editor?.chain().focus().toggleItalic().run()} className={`${btn(!!editor?.isActive('italic'))} italic`}>
          I
        </button>
        <div className="w-px h-5 bg-gray-700 mx-1" />
        <button type="button" onClick={() => editor?.chain().focus().toggleBulletList().run()} className={btn(!!editor?.isActive('bulletList'))}>
          • Lista
        </button>
        <button type="button" onClick={() => editor?.chain().focus().toggleOrderedList().run()} className={btn(!!editor?.isActive('orderedList'))}>
          1. Lista
        </button>
        <div className="w-px h-5 bg-gray-700 mx-1" />

        {/* Botão de imagem */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            uploading
              ? 'text-lime-400 bg-lime-400/10'
              : 'text-gray-400 hover:text-white hover:bg-gray-700'
          }`}
        >
          <FiImage className="text-base" />
          {uploading ? 'Enviando...' : 'Imagem'}
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={handleImageUpload}
        />

        <div className="w-px h-5 bg-gray-700 mx-1" />
        <button
          type="button"
          onClick={() => editor?.commands.clearContent()}
          className="px-3 py-1.5 rounded-lg text-xs text-gray-600 hover:text-red-400 hover:bg-gray-700 transition-colors"
        >
          Limpar
        </button>
      </div>

      {/* Editor */}
      <div className="p-4">
        <style>{`
          .tiptap h2 { color: #fff; font-size: 1.25rem; font-weight: 700; margin: 1.25rem 0 0.5rem; }
          .tiptap h3 { color: #e5e7eb; font-size: 1.05rem; font-weight: 600; margin: 1rem 0 0.4rem; }
          .tiptap p { margin: 0.4rem 0; }
          .tiptap strong { color: #fff; font-weight: 700; }
          .tiptap ul { list-style: disc; padding-left: 1.4rem; margin: 0.5rem 0; }
          .tiptap ol { list-style: decimal; padding-left: 1.4rem; margin: 0.5rem 0; }
          .tiptap li { margin: 0.2rem 0; }
          .tiptap p.is-editor-empty:first-child::before { content: attr(data-placeholder); color: #4b5563; pointer-events: none; float: left; height: 0; }
          .tiptap .tiptap-img { max-width: 100%; border-radius: 0.75rem; margin: 1rem 0; display: block; }
          .tiptap .tiptap-img.ProseMirror-selectednode { outline: 2px solid #a3e635; }
        `}</style>
        <EditorContent editor={editor} className="tiptap" />
      </div>
    </div>
  )
}
