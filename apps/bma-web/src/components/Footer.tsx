import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "GTM Strategy", href: "/gtm" },
    { label: "Togari Health", href: "/togari" },
    { label: "AI Agents", href: "/agents" },
    { label: "Coaching", href: "/coaching" },
  ],
  Resources: [
    { label: "Content Hub", href: "/content" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About BMA", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Industries: [
    { label: "Private Equity", href: "/gtm#private-equity" },
    { label: "Healthcare", href: "/togari" },
    { label: "Vertical SaaS", href: "/gtm#vertical-saas" },
    { label: "Enterprise B2B", href: "/gtm#enterprise" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-accent-blue rounded-lg rotate-12" />
                <div className="absolute inset-0 bg-navy-900 rounded-lg flex items-center justify-center">
                  <span className="text-accent-blue-light font-bold">B</span>
                </div>
              </div>
              <div>
                <span className="text-white font-semibold">Blue Modern Advisory</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Precision go-to-market engineering for companies that compete at the frontier.
              From list building to AI-powered sequencing, we wire your revenue engine.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/blue-modern-advisory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:team@bluemodernadviosry.com"
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white text-sm font-semibold mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Blue Modern Advisory. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
