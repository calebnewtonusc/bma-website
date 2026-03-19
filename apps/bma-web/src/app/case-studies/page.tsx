import type { Metadata } from "next"
import Link from "next/link"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real results from BMA engagements across private equity, healthcare, and vertical SaaS.",
}

const caseStudies = [
  {
    slug: "private-equity-fund",
    industry: "Private Equity",
    title: "How a $2.4B PE Fund Built a Proprietary Deal Flow Engine",
    summary:
      "Architected a full-stack prospecting and enrichment system for a middle-market PE firm, enabling their business development team to identify and reach founder-owned businesses 60% faster.",
    outcomes: ["+3.2x deal sourcing velocity", "60% faster outreach cycle", "94% data accuracy"],
  },
  {
    slug: "vertical-saas-tam",
    industry: "Vertical SaaS",
    title: "Unlocking a $1.2B TAM for a Construction Tech Platform",
    summary:
      "Redefined total addressable market for a construction management SaaS by layering permit data, contractor licensing, and technology adoption signals into a full ICP model.",
    outcomes: ["+2.4x addressable market", "38% increase in pipeline", "$4.2M ARR impact"],
  },
  {
    slug: "health-network-intel",
    industry: "Healthcare",
    title: "Mapping 400+ Health Networks for a Medtech Expansion",
    summary:
      "Deployed the Togari platform to build comprehensive provider network intelligence for a surgical device company entering six new metro markets.",
    outcomes: ["11-week market entry", "400+ networks mapped", "4 pilots closed in 60 days"],
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">Case Studies</p>
          <h1 className="text-display font-bold text-navy tracking-[-0.025em] mb-4">Results, not promises</h1>
          <p className="text-lead text-muted max-w-xl mx-auto">
            Real engagements. Real data. Real pipeline.
          </p>
        </div>
      </section>

      <section className="py-16 bg-off-white section-divider">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group flex flex-col p-8 rounded-xl bg-white border border-gray-200 hover:shadow-card-hover transition-shadow duration-300"
              >
                <span className="text-[12px] font-medium text-blue-700 bg-blue-pale border border-blue-mid px-2.5 py-1 rounded-full mb-4 self-start">
                  {cs.industry}
                </span>
                <h2 className="text-navy font-semibold text-lg leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                  {cs.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{cs.summary}</p>
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  {cs.outcomes.map((o) => (
                    <div key={o} className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-ink">{o}</span>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
