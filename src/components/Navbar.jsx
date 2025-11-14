import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Product', href: '#product' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#docs' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-gray-900 to-gray-700" />
            <span className="text-lg font-bold tracking-tight">Cursor Clone</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#get-started" className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/90 transition-colors">
              Get Cursor
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-md border border-gray-200" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {item.label}
                </a>
              ))}
              <a href="#get-started" className="rounded-md px-3 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-black/90 text-center">
                Get Cursor
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
