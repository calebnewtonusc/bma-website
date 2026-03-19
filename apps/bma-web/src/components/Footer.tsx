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
          <p className="text-[15px] leading-relaxed text-white/50 max-w-xs">
            GTM Strategy & Engineering for enterprise and growth companies.
            Led by operators from Clay and McKinsey & Company.
          </p>
        </div>
        {Object.entries(nav).map(([section, links]) => (
          <div key={section}>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">{section}</p>
            <ul className="space-y-3">
              {links.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[15px] text-white/50 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-6">
          <p className="text-[13px] text-white/40">© 2026 Blue Modern Advisory (Blue Modern AI LLC)</p>
        </div>
      </div>
    </footer>
  )
}
