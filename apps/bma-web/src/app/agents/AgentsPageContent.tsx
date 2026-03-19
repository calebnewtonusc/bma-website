"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CTASection } from "@/components/sections/CTASection"
import Link from "next/link"

const agents = [
  {
    id: "prospect-finder",
    name: "ProspectFinder",
    tagline: "Autonomous account discovery",
    category: "Prospecting",
    status: "Production",
    description:
      "ProspectFinder operates continuously across 40+ data sources to surface net-new accounts that match your ICP. It applies technographic filters, firmographic scoring, and buying signal detection to prioritize accounts by likelihood to convert.",
    capabilities: [
      "Real-time ICP matching against live firmographic data",
      "Technographic stack identification and scoring",
      "Job posting analysis for buying intent signals",
      "Funding event monitoring and trigger alerts",
      "Lookalike expansion from your best existing customers",
    ],
    metrics: { accuracy: "94%", daily_accounts: "500+", signal_types: "40+" },
  },
  {
    id: "enrichment-engine",
    name: "EnrichmentEngine",
    tagline: "200+ fields, zero manual work",
    category: "Enrichment",
    status: "Production",
    description:
      "Takes a list of company names or domains and returns fully enriched account profiles in minutes. Pulls from proprietary data sources, web scraping, public filings, and API integrations to build the most complete account intelligence available.",
    capabilities: [
      "200+ firmographic and technographic fields",
      "Executive contact discovery and validation",
      "LinkedIn activity and job change monitoring",
      "Technology stack mapping with confidence scores",
      "Revenue estimate modeling from signals",
    ],
    metrics: { fields: "200+", accuracy: "97%", speed: "< 2 min/account" },
  },
  {
    id: "sequence-writer",
    name: "SequenceWriter",
    tagline: "Human quality, agent speed",
    category: "Sequencing",
    status: "Production",
    description:
      "Generates personalized multi-channel sequences that read like they were written by a senior SDR with deep account knowledge. Trained on BMA's highest-performing sequences across industries, calibrated to your voice and value proposition.",
    capabilities: [
      "Multi-channel orchestration (email, LinkedIn, phone)",
      "Account-specific personalization from enriched data",
      "Industry and persona tone calibration",
      "A/B variant generation and statistical testing",
      "Reply-rate optimization through continuous learning",
    ],
    metrics: { avg_reply_rate: "4.2x industry avg", variants: "Unlimited", channels: "4" },
  },
  {
    id: "pipeline-monitor",
    name: "PipelineMonitor",
    tagline: "Never miss a signal",
    category: "Pipeline",
    status: "Production",
    description:
      "Continuously monitors your open pipeline for signals that predict deal movement. Job changes at champion accounts, competitor activity, funding events, news mentions, and technology changes trigger real-time alerts with recommended actions.",
    capabilities: [
      "Champion job change detection with alert routing",
      "Funding and M&A signal monitoring for open deals",
      "Competitive intelligence alerts at account level",
      "Stale pipeline identification and re-engagement",
      "Deal health scoring with predictive risk flags",
    ],
    metrics: { signals_monitored: "180+", avg_alert_time: "< 4 hours", pipeline_recovery: "18%" },
  },
  {
    id: "health-mapper",
    name: "HealthMapper",
    tagline: "Healthcare network intelligence",
    category: "Healthcare",
    status: "Togari Platform",
    description:
      "The intelligence engine behind Togari. HealthMapper builds and continuously updates provider network graphs, identifying relationship clusters, referral patterns, and influence hierarchies across healthcare organizations.",
    capabilities: [
      "Provider-to-organization affiliation mapping",
      "Referral pattern analysis and champion scoring",
      "Health system consolidation tracking",
      "Payor contract relationship inference",
      "Clinical committee membership identification",
    ],
    metrics: { providers: "1.2M+", update_freq: "Daily", accuracy: "97%" },
  },
]

export function AgentsPageContent() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null)
  const active = agents.find((a) => a.id === selectedAgent)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">AI Agents & Engines</p>
            <h1 className="text-display font-bold text-navy tracking-[-0.025em] mb-6">
              Purpose-built for GTM.
              <br />
              <span className="gradient-text">Running while you sleep.</span>
            </h1>
            <p className="text-lead text-muted max-w-2xl mx-auto leading-relaxed">
              Each BMA agent is trained on our proprietary GTM playbooks and deployed
              to run autonomously within your revenue stack. Real work. Real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agent Gallery */}
      <section className="py-16 bg-off-white section-divider">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <p className="text-center text-muted text-sm mb-8">Click any agent to expand details</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, i) => (
              <motion.button
                key={agent.id}
                onClick={() => setSelectedAgent(selectedAgent === agent.id ? null : agent.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`text-left p-7 rounded-xl bg-white border transition-shadow duration-300 ${
                  selectedAgent === agent.id
                    ? "border-blue-300 shadow-card-hover"
                    : "border-gray-200 hover:shadow-card-hover"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[12px] font-medium text-blue-700 bg-blue-pale border border-blue-mid px-2.5 py-1 rounded-full">
                    {agent.category}
                  </span>
                  <span className={`text-xs font-medium ${agent.status === "Production" ? "text-emerald-600" : "text-blue-600"}`}>
                    {agent.status}
                  </span>
                </div>
                <h3 className="text-navy font-bold text-xl mb-1">{agent.name}</h3>
                <p className="text-sm font-medium text-blue-600 mb-3">{agent.tagline}</p>
                <p className="text-muted text-sm leading-relaxed line-clamp-2">{agent.description}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Detail panel */}
      <AnimatePresence>
        {active && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-8 bg-white section-divider"
          >
            <div className="max-w-6xl mx-auto px-6 lg:px-10">
              <div className="rounded-2xl border border-blue-mid bg-blue-pale p-10">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <span className="text-[12px] font-medium text-blue-700 bg-white border border-blue-mid px-2.5 py-1 rounded-full mb-3 inline-block">
                      {active.category}
                    </span>
                    <h2 className="text-title font-bold text-navy mb-1">{active.name}</h2>
                    <p className="text-[15px] font-medium text-blue-600">{active.tagline}</p>
                  </div>
                  <button
                    onClick={() => setSelectedAgent(null)}
                    className="text-muted hover:text-ink transition-colors p-2"
                    aria-label="Close details"
                  >
                    <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <p className="text-ink text-base leading-relaxed mb-6">{active.description}</p>
                    <h4 className="text-navy font-semibold text-sm uppercase tracking-wider mb-4">Capabilities</h4>
                    <ul className="space-y-3">
                      {active.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-3 text-sm text-muted">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-navy font-semibold text-sm uppercase tracking-wider mb-4">Performance Metrics</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {Object.entries(active.metrics).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between p-4 rounded-xl bg-white border border-blue-mid">
                          <span className="text-muted text-sm">
                            {key.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
                          </span>
                          <span className="font-bold text-navy text-sm">{value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Link
                        href="/contact"
                        className="block text-center w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-sm"
                      >
                        Deploy {active.name}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <CTASection />
    </>
  )
}
