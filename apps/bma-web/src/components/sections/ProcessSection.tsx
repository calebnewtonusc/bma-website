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
  },
];

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

        {/* Timeline steps */}
        <div className="divide-y divide-gray-100">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-16"
            >
              {/* Large display number */}
              <div className="lg:col-span-2 flex items-start">
                <span className="text-[6rem] font-extrabold text-gray-100 leading-none font-display select-none">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <div className="lg:col-span-3 flex flex-col justify-center">
                <h3 className="font-display font-bold text-navy-900 text-2xl tracking-tight mb-2">
                  {step.title}
                </h3>
                <div className="w-8 h-0.5 bg-blue-700 rounded" />
              </div>

              {/* Description + highlights */}
              <div className="lg:col-span-7">
                <p className="text-gray-500 leading-relaxed mb-6">{step.description}</p>
                <div className="flex flex-wrap gap-2">
                  {step.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
