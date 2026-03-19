"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { label: "GTM Strategy",  href: "/gtm" },
  { label: "Agents",        href: "/agents" },
  { label: "Togari",        href: "/togari" },
  { label: "Coaching",      href: "/coaching" },
  { label: "Case Studies",  href: "/case-studies" },
  { label: "About",         href: "/about" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-nav" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[60px]">

        {/* Wordmark */}
        <Link href="/" className="font-semibold text-[15px] text-navy tracking-tight">
          Blue Modern<span className="text-blue-600"> Advisory</span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/")
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3.5 py-2 rounded-lg text-[14px] font-medium transition-colors ${
                  active ? "text-blue-600 bg-blue-pale" : "text-muted hover:text-ink hover:bg-off-white"
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-4 py-2 text-[14px] font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-muted hover:text-ink transition-colors"
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? (
            <svg className="w-5 h-5" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-1">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="block px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-off-white rounded-lg transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 mt-3">
            <Link href="/contact" className="block text-center py-2.5 text-[15px] font-semibold text-white bg-blue-600 rounded-lg">
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
