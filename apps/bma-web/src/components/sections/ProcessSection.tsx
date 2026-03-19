"use client"
import { motion } from "framer-motion"

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
]

export function ProcessSection() {
  return (
    <section className="py-28 bg-white section-divider">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-5">The BMA Process</p>
          <h2 className="text-display font-bold text-navy tracking-[-0.025em] mb-4">
            How we build your revenue engine
          </h2>
          <p className="text-muted text-lead max-w-2xl mx-auto leading-relaxed">
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
                <span className="text-[6rem] font-bold text-gray-100 leading-none font-mono select-none" aria-hidden="true">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <div className="lg:col-span-3 flex flex-col justify-center">
                <h3 className="font-bold text-navy text-2xl tracking-tight mb-2">
                  {step.title}
                </h3>
                <div className="w-8 h-0.5 bg-blue-600 rounded" aria-hidden="true" />
              </div>

              {/* Description + highlights */}
              <div className="lg:col-span-7">
                <p className="text-muted leading-relaxed mb-6">{step.description}</p>
                <div className="flex flex-wrap gap-2">
                  {step.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1.5 bg-blue-pale border border-blue-mid text-blue-700 text-xs font-medium rounded-full"
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
  )
}
