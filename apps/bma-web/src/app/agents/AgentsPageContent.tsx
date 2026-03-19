"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import Link from "next/link";

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
    color: "blue",
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
    color: "cyan",
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
    color: "purple",
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
    color: "amber",
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
    color: "green",
  },
];

const colorConfig = {
  blue: { badge: "blue" as const, bg: "bg-accent-blue/10", border: "border-accent-blue/20", text: "text-blue-300", dot: "bg-accent-blue" },
  cyan: { badge: "default" as const, bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-300", dot: "bg-cyan-400" },
  purple: { badge: "purple" as const, bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-300", dot: "bg-purple-400" },
  amber: { badge: "amber" as const, bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-300", dot: "bg-amber-400" },
  green: { badge: "green" as const, bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-300", dot: "bg-emerald-400" },
};

export function AgentsPageContent() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const active = agents.find((a) => a.id === selectedAgent);
  const colors = active ? colorConfig[active.color as keyof typeof colorConfig] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-0 left-1/3 w-[700px] h-[400px] bg-accent-blue/6 blur-[120px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel className="justify-center">AI Agents & Engines</SectionLabel>
            <h1 className="text-display-xl font-bold text-white mb-6">
              Purpose-built for GTM.
              <br />
              <span className="gradient-text">Running while you sleep.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Each BMA agent is trained on our proprietary GTM playbooks and deployed
              to run autonomously within your revenue stack. Real work. Real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agent Gallery */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 text-sm mb-8">Click any agent to expand details</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, i) => {
              const c = colorConfig[agent.color as keyof typeof colorConfig];
              return (
                <motion.button
                  key={agent.id}
                  onClick={() => setSelectedAgent(selectedAgent === agent.id ? null : agent.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`text-left p-7 rounded-xl bg-surface-card border transition-all duration-300 ${
                    selectedAgent === agent.id
                      ? `border-white/25 bg-white/[0.04]`
                      : "border-white/[0.08] hover:border-white/[0.15]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant={c.badge}>{agent.category}</Badge>
                    <span className={`text-xs font-medium ${agent.status === "Production" ? "text-emerald-400" : "text-cyan-400"}`}>
                      {agent.status}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-1">{agent.name}</h3>
                  <p className={`text-sm font-medium ${c.text} mb-3`}>{agent.tagline}</p>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{agent.description}</p>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal / Detail panel */}
      <AnimatePresence>
        {active && colors && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="py-8 bg-navy-950"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`rounded-2xl border ${colors.border} ${colors.bg.replace("10", "5")} p-10`}>
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <Badge variant={colors.badge} className="mb-3">{active.category}</Badge>
                    <h2 className="text-3xl font-bold text-white mb-1">{active.name}</h2>
                    <p className={`text-lg font-medium ${colors.text}`}>{active.tagline}</p>
                  </div>
                  <button
                    onClick={() => setSelectedAgent(null)}
                    className="text-slate-500 hover:text-white transition-colors p-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <p className="text-slate-300 text-base leading-relaxed mb-6">{active.description}</p>
                    <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Capabilities</h4>
                    <ul className="space-y-3">
                      {active.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-3 text-sm text-slate-300">
                          <div className={`w-1.5 h-1.5 rounded-full ${colors.dot} mt-1.5 flex-shrink-0`} />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Performance Metrics</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {Object.entries(active.metrics).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                          <span className="text-slate-400 text-sm capitalize">{key.replace(/_/g, " ")}</span>
                          <span className={`font-bold ${colors.text}`}>{value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Link
                        href="/contact"
                        className="block text-center w-full px-6 py-3 bg-accent-blue hover:bg-accent-blue-light text-white font-semibold rounded-lg transition-all text-sm"
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
  );
}
