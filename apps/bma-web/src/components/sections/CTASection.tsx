"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-28 bg-navy-900 relative overflow-hidden">
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(29,78,216,0.2), transparent)",
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-content mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">
              Free 15-Minute Call
            </span>
          </div>

          <h2 className="font-display text-display-lg font-extrabold text-white tracking-tight mb-5">
            Ready to build a revenue
            <br />
            engine that actually works?
          </h2>

          <p className="text-white/60 text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re entering a new market, rebuilding outbound, or deploying
            AI at scale, we&apos;ll build the system with you.
          </p>

          {/* Proof point */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No commitment required
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Recommended by 150+ MBB &amp; M7 MBAs
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Results-oriented engagement
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-200 text-base shadow-cta-blue"
            >
              Book a Free 15-Min Call
            </Link>
            <Link
              href="/gtm"
              className="px-8 py-4 bg-white/[0.08] hover:bg-white/[0.12] text-white font-semibold rounded-xl border border-white/[0.12] transition-all duration-200 text-base"
            >
              Explore GTM Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
