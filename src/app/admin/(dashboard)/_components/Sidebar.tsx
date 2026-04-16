'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FiFileText, FiPlusCircle, FiExternalLink, FiLogOut } from 'react-icons/fi'

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  const links = [
    { href: '/admin/posts', label: 'Posts', icon: FiFileText },
    { href: '/admin/posts/new', label: 'Novo Post', icon: FiPlusCircle },
  ]

  return (
    <aside className="w-56 bg-gray-900 border-r border-gray-800 flex flex-col shrink-0">
      <div className="px-5 py-6 border-b border-gray-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
            <span className="text-lime-400 font-black text-sm">J</span>
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-tight">Jaco Blog</p>
            <p className="text-gray-500 text-xs">Admin</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || (href !== '/admin/posts/new' && pathname.startsWith(href) && pathname !== '/admin/posts/new')
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                active
                  ? 'bg-lime-400/10 text-lime-400'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Icon className="text-base shrink-0" />
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="px-3 py-4 border-t border-gray-800 space-y-1">
        <a
          href="https://jacolocadora.com.br/blog"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
        >
          <FiExternalLink className="text-base shrink-0" />
          Ver Site
        </a>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-400 hover:text-red-400 hover:bg-red-400/5 transition-colors"
        >
          <FiLogOut className="text-base shrink-0" />
          Sair
        </button>
      </div>
    </aside>
  )
}
