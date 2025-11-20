import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Why Us', href: '#about' },
  { label: 'Plans', href: '#pricing' },
  { label: 'Equipment', href: '#equipment' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-black/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-500 to-amber-500 shadow-[0_0_30px_rgba(255,80,80,0.4)]" />
          <span className="text-white font-extrabold tracking-wide text-lg">AnandaNiketan GYM</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#pricing" className="ml-2 inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-amber-500 text-white font-semibold px-4 py-2 rounded-xl shadow hover:opacity-90 transition">Join Now</a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur">
          <div className="px-6 py-4 grid gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-white/90 py-2">
                {item.label}
              </a>
            ))}
            <a href="#pricing" onClick={() => setOpen(false)} className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-amber-500 text-white font-semibold px-4 py-2 rounded-xl">Join Now</a>
          </div>
        </div>
      )}
    </header>
  )
}
