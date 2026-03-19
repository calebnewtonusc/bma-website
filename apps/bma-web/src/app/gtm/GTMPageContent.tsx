"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CTASection } from "@/components/sections/CTASection"

const offerings = [
  {
    id: "private-equity",
    title: "Private Equity",
    subtitle: "Portfolio growth acceleration",
    description:
      "PE firms and their portfolio companies face unique GTM challenges: compressed timelines, limited sales infrastructure, and the need to prove revenue velocity quickly. We build the systems that get new portfolio companies to market fast.",
    deliverables: [
      "Deal flow sourcing engine for BD teams",
      "Portfolio company GTM audits and playbooks",
      "ICP/TAM analysis for new market entries",
      "CRM architecture and data hygiene",
      "Outbound sequence libraries by vertical",
    ],
    badge: "PE",
  },
  {
    id: "vertical-saas",
    title: "Vertical SaaS",
    subtitle: "Land and expand at scale",
    description:
      "Vertical SaaS companies have narrow ICPs and complex multi-stakeholder buying processes. We build the intelligence layer that reveals exactly who to target, when, and with what message to win in your specific market.",
    deliverables: [
      "ICP refinement and negative persona modeling",
      "Competitive displacement sequencing",
      "Technographic signal monitoring",
      "Land-and-expand account prioritization",
      "Churn risk enrichment overlays",
    ],
    badge: "SaaS",
  },
  {
    id: "enterprise",
    title: "Enterprise B2B",
    subtitle: "Complex sales, simplified",
    description:
      "Enterprise sales cycles are long, buying committees are wide, and personalization requirements are high. We build enrichment and sequencing systems that make your reps look like they've done years of research on every account.",
    deliverables: [
      "Multi-threaded buying committee mapping",
      "Executive contact research and intelligence",
      "Account-based marketing data infrastructure",
      "Intent signal integration and scoring",
      "Pipeline velocity optimization playbooks",
    ],
    badge: "Enterprise",
  },
]

const deliveryModel = [
  {
    phase: "Discovery",
    weeks: "Week 1-2",
    description: "Deep dive on your ICP, current state analysis, competitive landscape, and data audit. Nothing is assumed — everything is verified.",
  },
  {
    phase: "Architecture",
    weeks: "Week 2-4",
    description: "Design the full GTM system: data sources, enrichment stack, sequence structure, tooling, and team workflow. You approve before we build.",
  },
  {
    phase: "Build & Test",
    weeks: "Week 4-8",
    description: "We build the lists, run enrichment, write sequences, and validate deliverability before a single email goes out.",
  },
  {
    phase: "Launch & Optimize",
    weeks: "Ongoing",
    description: "Live monitoring of reply rates, sequence optimization, account expansion, and monthly strategy reviews with your team.",
  },
]

export function GTMPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">GTM Strategy & Engineering</p>
            <h1 className="text-display font-bold text-navy tracking-[-0.025em] mb-6">
              The full revenue stack,
              <br />
              <span className="gradient-text">engineered to close.</span>
            </h1>
            <p className="text-lead text-muted leading-relaxed mb-8 max-w-2xl">
              Most GTM consultants hand you a deck. We hand you a working system: live lists,
              enriched accounts, tested sequences, and the analytics to prove it is working.
              No theory. Just pipeline.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-[15px]"
              >
                Start a GTM Engagement
              </Link>
              <Link
                href="/case-studies"
                className="px-6 py-3.5 bg-white hover:bg-off-white text-navy font-semibold rounded-xl border border-gray-200 hover:border-gray-300 transition-colors text-[15px]"
              >
                See the Results
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry offerings */}
      <section className="py-24 bg-off-white section-divider">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">By Industry</p>
            <h2 className="text-display font-bold text-navy tracking-[-0.025em]">
              Sector-specific GTM playbooks
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {offerings.map((offering, i) => (
              <motion.div
                key={offering.id}
                id={offering.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-card-hover transition-shadow duration-300"
              >
                <span className="inline-flex items-center px-2.5 py-1 bg-blue-pale text-blue-700 text-xs font-semibold rounded-full border border-blue-mid mb-5">
                  {offering.badge}
                </span>
                <h3 className="font-bold text-navy text-xl mb-1">{offering.title}</h3>
                <p className="text-blue-600 text-sm font-semibold mb-4">{offering.subtitle}</p>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {offering.description}
                </p>
                <h4 className="text-navy text-xs font-semibold uppercase tracking-wider mb-3">Deliverables</h4>
                <ul className="space-y-2">
                  {offering.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery model */}
      <section className="py-24 bg-white section-divider">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">Delivery Model</p>
            <h2 className="text-display font-bold text-navy tracking-[-0.025em]">
              How an engagement works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryModel.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-card-hover transition-shadow duration-300 relative"
              >
                <div className="text-5xl font-bold text-blue-50 mb-3 font-mono tracking-tight select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-xs font-semibold text-blue-600 mb-1 uppercase tracking-wider">
                  {phase.weeks}
                </div>
                <h3 className="font-bold text-navy text-lg mb-3">{phase.phase}</h3>
                <p className="text-muted text-sm leading-relaxed">{phase.description}</p>
                {i < deliveryModel.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-white border border-gray-200 rounded-full items-center justify-center">
                    <svg className="w-3 h-3 text-muted" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
