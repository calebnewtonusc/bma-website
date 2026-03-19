import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real results from BMA engagements across private equity, healthcare, and vertical SaaS.",
};

const caseStudies = [
  {
    slug: "private-equity-fund",
    industry: "Private Equity",
    title: "How a $2.4B PE Fund Built a Proprietary Deal Flow Engine",
    summary:
      "Architected a full-stack prospecting and enrichment system for a middle-market PE firm, enabling their business development team to identify and reach founder-owned businesses 60% faster.",
    outcomes: ["+3.2x deal sourcing velocity", "60% faster outreach cycle", "94% data accuracy"],
    badgeVariant: "blue" as const,
  },
  {
    slug: "vertical-saas-tam",
    industry: "Vertical SaaS",
    title: "Unlocking a $1.2B TAM for a Construction Tech Platform",
    summary:
      "Redefined total addressable market for a construction management SaaS by layering permit data, contractor licensing, and technology adoption signals into a full ICP model.",
    outcomes: ["+2.4x addressable market", "38% increase in pipeline", "$4.2M ARR impact"],
    badgeVariant: "default" as const,
  },
  {
    slug: "health-network-intel",
    industry: "Healthcare",
    title: "Mapping 400+ Health Networks for a Medtech Expansion",
    summary:
      "Deployed the Togari platform to build comprehensive provider network intelligence for a surgical device company entering six new metro markets.",
    outcomes: ["11-week market entry", "400+ networks mapped", "4 pilots closed in 60 days"],
    badgeVariant: "green" as const,
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel className="justify-center">Case Studies</SectionLabel>
          <h1 className="text-display-xl font-bold text-white mb-4">Results, not promises</h1>
          <p className="text-slate-400 text-xl max-w-xl mx-auto">
            Real engagements. Real data. Real pipeline.
          </p>
        </div>
      </section>

      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group flex flex-col p-8 rounded-xl bg-surface-card card-border hover:border-white/[0.2] hover:bg-white/[0.02] transition-all duration-300"
              >
                <Badge variant={cs.badgeVariant} className="mb-4 self-start">{cs.industry}</Badge>
                <h2 className="text-white font-semibold text-lg leading-snug mb-3 group-hover:text-blue-100 transition-colors">
                  {cs.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{cs.summary}</p>
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
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
