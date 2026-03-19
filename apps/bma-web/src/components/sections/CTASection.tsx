"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-32 bg-navy">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-display font-bold text-white tracking-[-0.025em] mb-6">
            Start with a free 30-minute call.
          </h2>
          <p className="text-lead text-white/50 mb-10 max-w-prose">
            Book a free 15-minute call. No commitment. We&apos;ll assess your current GTM setup
            and tell you exactly where the leverage is.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-navy font-semibold text-[15px] rounded-xl hover:bg-off-white transition-colors"
            >
              Book a Free Call
              <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="text-[14px] text-white/60">No commitment. No pitch deck.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
