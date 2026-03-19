"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";

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
      "Enterprise sales cycles are long, buying committees are wide, and personalization requirements are high. We build enrichment and sequencing systems that make your reps look like they&apos;ve done years of research on every account.",
    deliverables: [
      "Multi-threaded buying committee mapping",
      "Executive contact research and intelligence",
      "Account-based marketing data infrastructure",
      "Intent signal integration and scoring",
      "Pipeline velocity optimization playbooks",
    ],
    badge: "Enterprise",
  },
];

const deliveryModel = [
  {
    phase: "Discovery",
    weeks: "Week 1-2",
    description: "Deep dive on your ICP, current state analysis, competitive landscape, and data audit. We leave no assumptions on the table.",
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
];

export function GTMPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-accent-blue/6 blur-[100px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <SectionLabel>GTM Strategy & Engineering</SectionLabel>
            <h1 className="text-display-xl font-bold text-white mb-6">
              The full revenue stack,
              <br />
              <span className="gradient-text">engineered to close.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Most GTM consultants hand you a deck. We hand you a working system: live lists,
              enriched accounts, tested sequences, and the analytics to prove it&apos;s working.
              No theory. Just pipeline.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-accent-blue hover:bg-accent-blue-light text-white font-semibold rounded-lg transition-all text-sm"
              >
                Start a GTM Engagement
              </Link>
              <Link
                href="/case-studies"
                className="px-7 py-3.5 bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold rounded-lg border border-white/[0.1] transition-all text-sm"
              >
                See the Results
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry offerings */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel className="justify-center">By Industry</SectionLabel>
            <h2 className="text-display-md font-bold text-white">
              Sector-specific GTM playbooks
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offerings.map((offering, i) => (
              <motion.div
                key={offering.id}
                id={offering.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-xl bg-surface-card card-border"
              >
                <Badge variant="blue" className="mb-4">{offering.badge}</Badge>
                <h3 className="text-white font-bold text-xl mb-1">{offering.title}</h3>
                <p className="text-accent-blue-light text-sm font-medium mb-4">{offering.subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {offering.description}
                </p>
                <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Deliverables</h4>
                <ul className="space-y-2">
                  {offering.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 flex-shrink-0" />
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
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel className="justify-center">Delivery Model</SectionLabel>
            <h2 className="text-display-md font-bold text-white">
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
                className="p-6 rounded-xl bg-surface-card card-border relative"
              >
                <div className="text-4xl font-bold text-accent-blue/20 mb-3">{String(i + 1).padStart(2, "0")}</div>
                <div className="text-xs font-medium text-accent-blue-light mb-1 uppercase tracking-wider">{phase.weeks}</div>
                <h3 className="text-white font-semibold text-lg mb-3">{phase.phase}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{phase.description}</p>
                {i < deliveryModel.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  );
}
