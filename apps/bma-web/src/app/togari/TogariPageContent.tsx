"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";

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
];

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
];

export function TogariPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-2 mb-6">
                <Badge variant="blue">Healthcare Platform</Badge>
                <Badge variant="green">by BMA</Badge>
              </div>
              <h1 className="text-display-xl font-bold text-white mb-6">
                Togari Health
                <br />
                <span className="text-cyan-400">Intelligence Platform</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                The only market intelligence platform purpose-built for healthcare
                go-to-market. Map the full provider landscape, identify clinical
                champions, and navigate payor complexity at scale.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact?type=togari"
                  className="px-7 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-all text-sm"
                >
                  Request a Demo
                </Link>
                <Link
                  href="#capabilities"
                  className="px-7 py-3.5 bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold rounded-lg border border-white/[0.1] transition-all text-sm"
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
              className="relative"
            >
              <div className="rounded-2xl border border-cyan-500/20 bg-navy-900/80 p-8">
                <div className="text-center mb-6">
                  <span className="text-white font-semibold">Togari Platform Overview</span>
                </div>
                {/* Three layers */}
                <div className="space-y-3">
                  {[
                    { label: "Data Layer", sub: "1.2M providers • 8K health systems • 400+ payors", color: "cyan" },
                    { label: "Intelligence Layer", sub: "Relationship mapping • Influence scoring • Signal monitoring", color: "blue" },
                    { label: "Action Layer", sub: "Territory plans • Champion lists • Sequence triggers", color: "purple" },
                  ].map((layer) => (
                    <div
                      key={layer.label}
                      className="p-4 rounded-xl border"
                      style={{
                        backgroundColor: layer.color === "cyan" ? "rgba(6,182,212,0.08)" : layer.color === "purple" ? "rgba(168,85,247,0.08)" : "rgba(37,99,235,0.08)",
                        borderColor: layer.color === "cyan" ? "rgba(6,182,212,0.2)" : layer.color === "purple" ? "rgba(168,85,247,0.2)" : "rgba(37,99,235,0.2)",
                      }}
                    >
                      <div className="text-white font-semibold text-sm mb-1">{layer.label}</div>
                      <div className="text-slate-400 text-xs">{layer.sub}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {[
                    { n: "1.2M+", l: "Providers" },
                    { n: "97%", l: "Accuracy" },
                    { n: "Real-time", l: "Updates" },
                  ].map((s) => (
                    <div key={s.l} className="py-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                      <div className="text-cyan-400 font-bold">{s.n}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel className="justify-center">Platform Capabilities</SectionLabel>
            <h2 className="text-display-md font-bold text-white">
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
                className="p-7 rounded-xl bg-surface-card card-border"
              >
                <div className="text-3xl mb-4">{cap.icon}</div>
                <h3 className="text-white font-semibold text-base mb-3">{cap.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel className="justify-center">Customer Stories</SectionLabel>
            <h2 className="text-display-md font-bold text-white">Togari in practice</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 rounded-xl bg-surface-card card-border"
              >
                <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">{uc.company}</div>
                <div className="mb-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1.5">Challenge</div>
                  <p className="text-slate-300 text-sm leading-relaxed">{uc.challenge}</p>
                </div>
                <div>
                  <div className="text-xs text-emerald-400 uppercase tracking-wider mb-1.5">Outcome</div>
                  <p className="text-slate-300 text-sm leading-relaxed">{uc.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
