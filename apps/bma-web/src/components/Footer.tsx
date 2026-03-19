import Link from "next/link"

const nav = {
  Services: [
    { label: "GTM Strategy",  href: "/gtm" },
    { label: "AI Agents",     href: "/agents" },
    { label: "Togari Health", href: "/togari" },
    { label: "Coaching",      href: "/coaching" },
  ],
  Company: [
    { label: "About",         href: "/about" },
    { label: "Case Studies",  href: "/case-studies" },
    { label: "Content Hub",   href: "/content" },
    { label: "Contact",       href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <p className="font-semibold text-white text-[15px] mb-4">
            Blue Modern<span className="text-blue-400"> Advisory</span>
          </p>
          <p className="text-[15px] leading-relaxed text-white/50 max-w-xs mb-6">
            GTM Strategy & Engineering for enterprise and growth companies.
            Led by operators from Clay and McKinsey & Company.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/company/blue-modern-advisory"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/40 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:contact@bluemodernadvisory.com"
              aria-label="Email"
              className="text-white/40 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
        {Object.entries(nav).map(([section, links]) => (
          <div key={section}>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">{section}</p>
            <nav aria-label={`${section} links`}>
              <ul className="space-y-3">
                {links.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[15px] text-white/65 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-6">
          <p className="text-[13px] text-white/50">© 2026 Blue Modern Advisory (Blue Modern AI LLC)</p>
        </div>
      </div>
    </footer>
  )
}
