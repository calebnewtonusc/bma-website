import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "GTM Strategy", href: "/gtm" },
    { label: "Togari Health", href: "/togari" },
    { label: "AI Agents", href: "/agents" },
    { label: "Coaching", href: "/coaching" },
  ],
  Company: [
    { label: "About BMA", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Content Hub", href: "/content" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-1 mb-5">
              <span className="font-display font-bold text-lg text-white tracking-tight">
                Blue Modern
              </span>
              <span className="font-display font-semibold text-lg text-blue-400 tracking-tight ml-1">
                Advisory
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              A GTM Strategy &amp; Engineering firm that transforms how companies leverage data
              and large language models to convert ideal prospects and drive revenue growth.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/blue-modern-advisory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:contact@bluemodernadvisory.com"
                className="text-white/40 hover:text-white transition-colors"
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
              <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5 opacity-50">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.08]">
          <p className="text-white/40 text-sm">
            &copy; 2026 Blue Modern AI LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
