"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Data Diagnostic",
    description:
      "BMA conducts an initial data diagnostic of your data architecture, AI systems, and operating model. We synthesize findings into a structured GTM playbook and operational toolkit.",
    highlights: [
      "Data architecture review",
      "AI systems assessment",
      "Operating model analysis",
      "Structured GTM playbook",
    ],
    color: "blue",
  },
  {
    number: "02",
    title: "System Design & Deployment",
    description:
      "BMA designs and deploys a scalable system for AI-powered prospecting: automated CRM ingestion, lead generation to opportunity, data enrichment workflows, real-time lead detection, and routing into CRM with ownership, tagging, and deduplication.",
    highlights: [
      "CRM ingestion automation",
      "Data enrichment workflows",
      "Real-time lead detection",
      "Ownership & dedup routing",
    ],
    color: "indigo",
  },
  {
    number: "03",
    title: "Campaign Activation",
    description:
      "BMA activates inbound and outbound campaigns across every pipeline stage using Clay-powered infrastructure, a structured playbook, and steady-state experimentation. High-volume outreach without sacrificing targeting precision.",
    highlights: [
      "Clay-powered infrastructure",
      "Inbound & outbound activation",
      "Steady-state experimentation",
      "Precision at volume",
    ],
    color: "violet",
  },
];

const colorConfig = {
  blue: {
    badge: "bg-blue-700 text-white",
    icon: "text-blue-700 bg-blue-50 border-blue-100",
    dot: "bg-blue-700",
    label: "text-blue-700",
    border: "border-blue-200",
  },
  indigo: {
    badge: "bg-blue-800 text-white",
    icon: "text-blue-800 bg-blue-50 border-blue-100",
    dot: "bg-blue-800",
    label: "text-blue-800",
    border: "border-blue-200",
  },
  violet: {
    badge: "bg-navy-900 text-white",
    icon: "text-navy-900 bg-gray-100 border-gray-200",
    dot: "bg-navy-900",
    label: "text-navy-900",
    border: "border-gray-200",
  },
};

export function ProcessSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-700" />
            <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">
              The BMA Process
            </span>
          </div>
          <h2 className="font-display text-display-md font-extrabold text-navy-900 tracking-tight mb-4 text-balance">
            How we build your revenue engine
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Three structured phases from diagnostic to activation.
            Every engagement is built on this foundation.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const colors = colorConfig[step.color as keyof typeof colorConfig];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className={`relative p-8 bg-white rounded-2xl border ${colors.border} shadow-card hover:shadow-card-hover transition-all duration-200`}
              >
                {/* Connector line on desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-12 w-8 h-px bg-gray-200 z-10" />
                )}

                {/* Number badge */}
                <div className={`inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-bold mb-6 ${colors.badge}`}>
                  {step.number}
                </div>

                <h3 className="font-display font-bold text-navy-900 text-xl mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="space-y-2.5">
                  {step.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-3 text-sm text-gray-700">
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
                      {h}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
