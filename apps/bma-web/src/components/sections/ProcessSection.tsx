"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "List Building",
    subtitle: "Precision targeting at scale",
    description:
      "We identify your exact ICP using firmographic, technographic, and behavioral signals. Our AI-assisted sourcing pulls from 40+ data providers to build lists with >95% deliverability and verified contact data. No vanity metrics. Just accounts that match, and the right people inside them.",
    highlights: ["ICP framework definition", "Multi-source data fusion", "Technographic overlay", "Intent signal scoring"],
    color: "blue",
  },
  {
    number: "02",
    title: "Data Enrichment",
    subtitle: "Depth that reveals real opportunity",
    description:
      "Raw lists become intelligence. We layer in funding velocity, hiring signals, recent tech purchases, regulatory filings, executive tenure, and 200+ other enrichment fields. This is what lets reps show up to cold calls knowing more than the prospect expects.",
    highlights: ["200+ enrichment fields", "Real-time signal monitoring", "AI-powered summaries", "CRM push automation"],
    color: "cyan",
  },
  {
    number: "03",
    title: "Sequencing",
    subtitle: "Outbound that converts",
    description:
      "Personalized, multi-channel sequences built to the rhythm of your buyers. We write, test, and iterate each sequence variant. Our clients consistently achieve 2-4x industry average reply rates by leading with insight, not pitch.",
    highlights: ["Multi-channel orchestration", "AI personalization at scale", "A/B testing frameworks", "Reply rate optimization"],
    color: "purple",
  },
];

const colorMap = {
  blue: {
    bg: "bg-accent-blue/10",
    border: "border-accent-blue/20",
    text: "text-blue-300",
    dot: "bg-accent-blue",
    num: "text-accent-blue",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-300",
    dot: "bg-cyan-400",
    num: "text-cyan-400",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-300",
    dot: "bg-purple-400",
    num: "text-purple-400",
  },
};

export function ProcessSection() {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel className="justify-center">The BMA Method</SectionLabel>
          <h2 className="text-display-md font-bold text-white mb-4">
            The 3-step revenue loop
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every engagement runs through our proven loop. Build the right list,
            enrich it deeply, then sequence with surgical precision.
          </p>
        </div>

        {/* Loop connector */}
        <div className="relative">
          {/* Line connecting steps */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const colors = colorMap[step.color as keyof typeof colorMap];
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative p-8 rounded-2xl bg-surface-card card-border"
                >
                  {/* Loop arrow (between cards) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-navy-800 border border-white/[0.08] rounded-full items-center justify-center">
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                  {/* Final loop back */}
                  {i === steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-accent-blue/20 border border-accent-blue/30 rounded-full items-center justify-center">
                      <svg className="w-4 h-4 text-accent-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                  )}

                  {/* Number */}
                  <div className={`text-5xl font-bold ${colors.num} opacity-30 mb-4 leading-none`}>
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-xl mb-1">{step.title}</h3>
                  <p className={`text-sm font-medium ${colors.text} mb-4`}>{step.subtitle}</p>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {step.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2.5 text-sm text-slate-300">
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.dot} flex-shrink-0`} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
