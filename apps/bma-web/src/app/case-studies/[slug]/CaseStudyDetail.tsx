"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";

export function CaseStudyDetail({ cs }: { cs: CaseStudy }) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-slate-500 hover:text-white text-sm mb-8 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Case Studies
            </Link>
            <Badge variant="blue" className="mb-5">{cs.industry}</Badge>
            <h1 className="text-display-lg font-bold text-white mb-6">{cs.title}</h1>
            <div className="flex flex-wrap gap-6 text-sm text-slate-400 mb-8">
              <span><span className="text-slate-500">Client:</span> {cs.client}</span>
              <span><span className="text-slate-500">Timeline:</span> {cs.timeline}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {cs.services.map((s) => (
                <span key={s} className="px-3 py-1 bg-white/[0.05] border border-white/[0.08] rounded-lg text-xs text-slate-300 font-medium">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results strip */}
      <section className="bg-accent-blue/5 border-y border-accent-blue/15 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cs.results.map((r) => (
              <div key={r.metric} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{r.value}</div>
                <div className="text-accent-blue-light text-xs font-semibold uppercase tracking-wider mb-1">{r.metric}</div>
                <div className="text-slate-500 text-xs">{r.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Overview</h2>
                <p className="text-slate-300 leading-relaxed">{cs.summary}</p>
              </div>

              {/* Challenge */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4">The Challenge</h2>
                <p className="text-slate-300 leading-relaxed">{cs.challenge}</p>
              </div>

              {/* Approach */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4">The BMA Approach</h2>
                <ul className="space-y-3">
                  {cs.approach.map((step, i) => (
                    <li key={i} className="flex gap-4 text-slate-300">
                      <span className="text-accent-blue font-bold text-sm mt-0.5 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-sm leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-surface-card card-border">
                <h3 className="text-white font-semibold text-sm mb-4">Engagement Details</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-slate-500 text-xs uppercase tracking-wider mb-1">Industry</dt>
                    <dd className="text-slate-200 text-sm">{cs.industry}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 text-xs uppercase tracking-wider mb-1">Client</dt>
                    <dd className="text-slate-200 text-sm">{cs.client}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 text-xs uppercase tracking-wider mb-1">Timeline</dt>
                    <dd className="text-slate-200 text-sm">{cs.timeline}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 text-xs uppercase tracking-wider mb-1">Services</dt>
                    <dd className="space-y-1 mt-1">
                      {cs.services.map((s) => (
                        <span key={s} className="block text-sm text-slate-300">{s}</span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="p-6 rounded-xl bg-accent-blue/5 border border-accent-blue/20">
                <h3 className="text-white font-semibold text-sm mb-3">Want similar results?</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  Every engagement starts with a 30-minute discovery call. No pressure, no pitch deck.
                </p>
                <Link
                  href="/contact"
                  className="block text-center w-full px-4 py-2.5 bg-accent-blue hover:bg-accent-blue-light text-white font-semibold rounded-lg transition-all text-sm"
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
  );
}
