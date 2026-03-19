"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-28 bg-navy relative overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(29,78,216,0.2), transparent)",
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.04,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">
              Free 30-Minute Call
            </span>
          </div>

          <h2 className="text-display font-bold text-white tracking-[-0.025em] mb-5">
            Ready to build a revenue engine that actually works?
          </h2>

          <p className="text-lead text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re entering a new market, rebuilding outbound, or deploying
            AI at scale, we&apos;ll build the system with you.
          </p>

          {/* Proof points */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No commitment required
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Recommended by 150+ MBB &amp; M7 MBAs
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Results-oriented engagement
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-off-white text-navy font-semibold rounded-xl transition-colors text-[15px] shadow-cta"
            >
              Book a Free Call
              <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/gtm"
              className="px-7 py-3.5 bg-white/[0.08] hover:bg-white/[0.12] text-white font-semibold rounded-xl border border-white/[0.12] transition-colors text-[15px]"
            >
              Explore GTM Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
