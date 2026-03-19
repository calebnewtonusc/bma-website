"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CTASection } from "@/components/sections/CTASection"

const capabilities = [
  {
    title: "Provider Network Mapping",
    description: "Map every physician, NP, PA, and allied health professional across 1.2M+ providers. Understand referral patterns, affiliations, and clinical relationships that define real influence.",
    icon: "🏥",
  },
  {
    title: "Health System Intelligence",
    description: "Track 8,000+ health systems and IDNs. Monitor consolidation activity, new facility openings, executive changes, and technology procurement signals.",
    icon: "🔍",
  },
  {
    title: "Payor & Formulary Analysis",
    description: "Navigate payor networks, formulary inclusion status, and contract structures. Know which payors your target physicians accept before your first conversation.",
    icon: "📋",
  },
  {
    title: "Clinical Champion Identification",
    description: "Identify the physicians and administrators who drive purchasing decisions. Our model scores each provider by influence, reach, and likelihood to champion new solutions.",
    icon: "⭐",
  },
  {
    title: "Regulatory Signal Monitoring",
    description: "Track FDA submissions, CMS compliance filings, accreditation changes, and quality metrics that signal need and urgency in your target accounts.",
    icon: "📊",
  },
  {
    title: "Market Entry Planning",
    description: "Full metro-market analysis: total addressable providers, competitive presence, payor mix, and recommended territory structures for field sales teams.",
    icon: "🗺️",
  },
]

const useCases = [
  {
    company: "Medtech Device Company",
    challenge: "Needed to enter 6 new metro markets in 90 days with a 4-person field team.",
    outcome: "Togari delivered territory maps, provider priority scores, and referral network diagrams for all 6 markets in 2 weeks. Team closed 4 pilot sites in 60 days.",
  },
  {
    company: "Digital Health Platform",
    challenge: "Building a clinical champion program but couldn't identify the right physicians to recruit.",
    outcome: "Togari's influence scoring model identified 340 high-impact clinicians across 12 states. 28% became active champions within the first quarter.",
  },
  {
    company: "Health Services Company",
    challenge: "Payor contracting was stalling market expansion due to poor network intelligence.",
    outcome: "Togari mapped the payor landscape in each target market, revealing under-contracted payors as the fastest entry points. Contracting timeline cut by 40%.",
  },
]

export function TogariPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-2 mb-6">
                <span className="text-[12px] font-medium text-blue-700 bg-blue-pale border border-blue-mid px-2.5 py-1 rounded-full">
                  Healthcare Intelligence Platform
                </span>
              </div>
              <h1 className="text-display font-bold text-navy tracking-[-0.025em] mb-6">
                Togari Health
                <br />
                <span className="text-blue-600">Intelligence Platform</span>
              </h1>
              <p className="text-lead text-muted leading-relaxed mb-8">
                The only market intelligence platform purpose-built for healthcare
                go-to-market. Map the full provider landscape, identify clinical
                champions, and navigate payor complexity at scale.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact?type=togari"
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-[15px]"
                >
                  Request a Demo
                </Link>
                <Link
                  href="#capabilities"
                  className="px-6 py-3.5 bg-white hover:bg-off-white text-navy font-semibold rounded-xl border border-gray-200 hover:border-gray-300 transition-colors text-[15px]"
                >
                  See Capabilities
                </Link>
              </div>
            </motion.div>

            {/* Platform diagram */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-2xl border border-gray-200 bg-off-white p-8">
                <div className="text-center mb-6">
                  <span className="text-navy font-semibold">Togari Platform Overview</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Data Layer", sub: "1.2M providers • 8K health systems • 400+ payors" },
                    { label: "Intelligence Layer", sub: "Relationship mapping • Influence scoring • Signal monitoring" },
                    { label: "Action Layer", sub: "Territory plans • Champion lists • Sequence triggers" },
                  ].map((layer) => (
                    <div
                      key={layer.label}
                      className="p-4 rounded-xl border border-blue-mid bg-blue-pale"
                    >
                      <div className="text-navy font-semibold text-sm mb-1">{layer.label}</div>
                      <div className="text-muted text-xs">{layer.sub}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {[
                    { n: "1.2M+", l: "Providers" },
                    { n: "97%", l: "Accuracy" },
                    { n: "Real-time", l: "Updates" },
                  ].map((s) => (
                    <div key={s.l} className="py-3 rounded-lg bg-white border border-gray-200">
                      <div className="text-blue-600 font-bold">{s.n}</div>
                      <div className="text-muted text-xs mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-24 bg-off-white section-divider scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">Platform Capabilities</p>
            <h2 className="text-display font-bold text-navy tracking-[-0.025em]">
              Everything healthcare GTM requires
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-7 rounded-xl bg-white border border-gray-200 hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="text-3xl mb-4">{cap.icon}</div>
                <h3 className="text-navy font-semibold text-base mb-3">{cap.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white section-divider">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">Customer Stories</p>
            <h2 className="text-display font-bold text-navy tracking-[-0.025em]">Togari in practice</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 rounded-xl bg-white border border-gray-200 hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">{uc.company}</div>
                <div className="mb-4">
                  <div className="text-xs text-muted uppercase tracking-wider mb-1.5">Challenge</div>
                  <p className="text-ink text-sm leading-relaxed">{uc.challenge}</p>
                </div>
                <div>
                  <div className="text-xs text-emerald-600 uppercase tracking-wider mb-1.5">Outcome</div>
                  <p className="text-ink text-sm leading-relaxed">{uc.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
