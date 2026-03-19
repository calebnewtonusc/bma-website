"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
      <section className="relative pt-36 pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-light-grid bg-grid-md opacity-100" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(29,78,216,0.05), transparent)",
          }}
        />
        <div className="relative max-w-content mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-700" />
              <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">GTM Strategy & Engineering</span>
            </div>
            <h1 className="font-display text-display-xl font-extrabold text-navy-900 tracking-tight mb-6">
              The full revenue stack,
              <br />
              <span className="gradient-text-blue">engineered to close.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-8 max-w-2xl">
              Most GTM consultants hand you a deck. We hand you a working system: live lists,
              enriched accounts, tested sequences, and the analytics to prove it is working.
              No theory. Just pipeline.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-all shadow-cta-blue text-sm"
              >
                Start a GTM Engagement
              </Link>
              <Link
                href="/case-studies"
                className="px-7 py-3.5 bg-white hover:bg-gray-50 text-navy-900 font-semibold rounded-lg border border-gray-200 hover:border-gray-300 transition-all text-sm"
              >
                See the Results
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry offerings */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-700" />
              <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">By Industry</span>
            </div>
            <h2 className="font-display text-display-md font-extrabold text-navy-900 tracking-tight">
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
                className="p-8 rounded-2xl bg-white border border-gray-200 shadow-card hover:shadow-card-hover transition-all duration-200"
              >
                <span className="inline-flex items-center px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100 mb-5">
                  {offering.badge}
                </span>
                <h3 className="font-display font-bold text-navy-900 text-xl mb-1">{offering.title}</h3>
                <p className="text-blue-700 text-sm font-semibold mb-4">{offering.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 whitespace-pre-line">
                  {offering.description.replace(/&apos;/g, "'")}
                </p>
                <h4 className="text-navy-900 text-xs font-semibold uppercase tracking-wider mb-3">Deliverables</h4>
                <ul className="space-y-2">
                  {offering.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-1.5 flex-shrink-0" />
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
      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-700" />
              <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">Delivery Model</span>
            </div>
            <h2 className="font-display text-display-md font-extrabold text-navy-900 tracking-tight">
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
                className="p-6 rounded-xl bg-white border border-gray-200 shadow-card relative"
              >
                <div className="text-5xl font-bold text-blue-700/10 mb-3 font-display tracking-tight">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-xs font-semibold text-blue-700 mb-1 uppercase tracking-wider">
                  {phase.weeks}
                </div>
                <h3 className="font-display font-bold text-navy-900 text-lg mb-3">{phase.phase}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{phase.description}</p>
                {i < deliveryModel.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-white border border-gray-200 rounded-full items-center justify-center shadow-sm">
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
