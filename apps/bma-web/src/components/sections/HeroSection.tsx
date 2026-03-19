"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const phrases = ["Strategy & Engineering", "Pipeline Intelligence", "Agentic Infrastructure"]

export function HeroSection() {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIdx(i => (i + 1) % phrases.length), 2500)
    return () => clearInterval(t)
  }, [paused])

  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-sm font-medium text-muted mb-10"
        >
          Trusted by operators from{" "}
          <span className="text-ink font-semibold">McKinsey, Bain, Clay, and top M7 programs</span>
        </motion.p>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <h1 className="text-hero font-bold text-navy leading-[1.05] tracking-[-0.035em] mb-0">
            Go-To-Market with your
            <br />
            product, service, or capital
            <br />
            through{" "}
            <span className="sr-only">{phrases[idx]}.</span>
          </h1>
          {/* Visually animated — purely decorative, hidden from screen readers */}
          <div
            className="overflow-hidden"
            aria-hidden="true"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-hero font-bold leading-[1.05] tracking-[-0.035em] gradient-text block">
                  {phrases[idx]}.
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Sub + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[15px] rounded-xl transition-colors shadow-cta"
          >
            Book a Free Call
            <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/case-studies"
            className="text-[15px] font-semibold text-navy hover:text-blue-600 transition-colors"
          >
            See client results &rarr;
          </Link>
        </motion.div>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 pt-10 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "150+", label: "MBB & M7 client recommendations" },
            { value: "300%", label: "Avg pipeline growth, client reported" },
            { value: "3",    label: "Industry verticals served" },
          ].map(m => (
            <div key={m.label}>
              <p className="font-mono text-2xl font-bold text-navy mb-1">{m.value}</p>
              <p className="text-[13px] text-muted leading-snug">{m.label}</p>
            </div>
          ))}
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-pale border border-blue-mid rounded-full text-[13px] font-semibold text-blue-700 mb-1">
              Clay
            </span>
            <p className="text-[13px] text-muted leading-snug">Certified infrastructure partner</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
