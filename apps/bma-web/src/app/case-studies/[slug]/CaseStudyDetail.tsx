"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { CaseStudy } from "@/lib/case-studies"
import { CTASection } from "@/components/sections/CTASection"

export function CaseStudyDetail({ cs }: { cs: CaseStudy }) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-muted hover:text-ink text-sm mb-8 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Case Studies
            </Link>
            <span className="text-[12px] font-medium text-blue-700 bg-blue-pale border border-blue-mid px-2.5 py-1 rounded-full mb-5 inline-block">
              {cs.industry}
            </span>
            <h1 className="text-display font-bold text-navy tracking-[-0.025em] mb-6">{cs.title}</h1>
            <div className="flex flex-wrap gap-6 text-sm text-muted mb-8">
              <span><span className="text-ink font-medium">Client:</span> {cs.client}</span>
              <span><span className="text-ink font-medium">Timeline:</span> {cs.timeline}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {cs.services.map((s) => (
                <span key={s} className="px-3 py-1 bg-off-white border border-gray-200 rounded-lg text-xs text-muted font-medium">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results strip */}
      <section className="bg-blue-pale border-y border-blue-mid py-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cs.results.map((r) => (
              <div key={r.metric} className="text-center">
                <div className="text-3xl font-bold text-navy mb-1">{r.value}</div>
                <div className="text-blue-600 text-xs font-semibold uppercase tracking-wider mb-1">{r.metric}</div>
                <div className="text-muted text-xs">{r.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 bg-white section-divider">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-title font-bold text-navy mb-4">Overview</h2>
                <p className="text-muted leading-relaxed">{cs.summary}</p>
              </div>
              <div>
                <h2 className="text-title font-bold text-navy mb-4">The Challenge</h2>
                <p className="text-muted leading-relaxed">{cs.challenge}</p>
              </div>
              <div>
                <h2 className="text-title font-bold text-navy mb-4">The BMA Approach</h2>
                <ul className="space-y-3">
                  {cs.approach.map((step, i) => (
                    <li key={i} className="flex gap-4 text-muted">
                      <span className="text-blue-600 font-bold text-sm mt-0.5 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-sm leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-off-white border border-gray-200">
                <h3 className="text-navy font-semibold text-sm mb-4">Engagement Details</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-muted text-xs uppercase tracking-wider mb-1">Industry</dt>
                    <dd className="text-ink text-sm">{cs.industry}</dd>
                  </div>
                  <div>
                    <dt className="text-muted text-xs uppercase tracking-wider mb-1">Client</dt>
                    <dd className="text-ink text-sm">{cs.client}</dd>
                  </div>
                  <div>
                    <dt className="text-muted text-xs uppercase tracking-wider mb-1">Timeline</dt>
                    <dd className="text-ink text-sm">{cs.timeline}</dd>
                  </div>
                  <div>
                    <dt className="text-muted text-xs uppercase tracking-wider mb-1">Services</dt>
                    <dd className="space-y-1 mt-1">
                      {cs.services.map((s) => (
                        <span key={s} className="block text-sm text-ink">{s}</span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="p-6 rounded-xl bg-blue-pale border border-blue-mid">
                <h3 className="text-navy font-semibold text-sm mb-3">Want similar results?</h3>
                <p className="text-muted text-xs leading-relaxed mb-4">
                  Every engagement starts with a 30-minute discovery call. No pressure, no pitch deck.
                </p>
                <Link
                  href="/contact"
                  className="block text-center w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-sm"
                >
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
