"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";

const caseStudies = [
  {
    slug: "private-equity-fund",
    industry: "Private Equity",
    title: "How a $2.4B PE Fund Built a Proprietary Deal Flow Engine",
    summary:
      "Architected a full-stack prospecting and enrichment system for a middle-market PE firm, enabling their business development team to identify and reach founder-owned businesses 60% faster than traditional methods.",
    outcomes: ["+3.2x deal sourcing velocity", "60% faster outreach cycle", "94% data accuracy"],
    variant: "blue" as const,
  },
  {
    slug: "vertical-saas-tam",
    industry: "Vertical SaaS",
    title: "Unlocking a $1.2B TAM for a Construction Tech Platform",
    summary:
      "Redefined total addressable market for a construction management SaaS by layering permit data, contractor licensing, and technology adoption signals into a full ICP model that revealed 2.4x more addressable accounts.",
    outcomes: ["+2.4x addressable market", "38% increase in pipeline", "$4.2M ARR impact"],
    variant: "default" as const,
  },
  {
    slug: "health-network-intel",
    industry: "Healthcare",
    title: "Mapping 400+ Health Networks for a Medtech Expansion",
    summary:
      "Deployed the Togari platform to build comprehensive provider network intelligence for a surgical device company entering six new metro markets, collapsing a 9-month market entry timeline to 11 weeks.",
    outcomes: ["11-week market entry", "400+ networks mapped", "4 pilots closed in 60 days"],
    variant: "default" as const,
  },
];

export function CaseStudyHighlights() {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <SectionLabel>Case Studies</SectionLabel>
            <h2 className="text-display-md font-bold text-white">
              Results, not promises
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors"
          >
            View all case studies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group flex flex-col h-full p-7 rounded-xl bg-surface-card card-border hover:border-white/[0.15] hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="mb-4">
                  <Badge variant={cs.variant}>{cs.industry}</Badge>
                </div>
                <h3 className="text-white font-semibold text-base leading-snug mb-3 group-hover:text-blue-100 transition-colors">
                  {cs.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {cs.summary}
                </p>
                <div className="space-y-2 pt-4 border-t border-white/[0.06]">
                  {cs.outcomes.map((o) => (
                    <div key={o} className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300">{o}</span>
                    </div>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
