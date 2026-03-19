"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const industries = [
  {
    name: "Private Equity & Finance",
    description:
      "Portfolio company GTM support, deal sourcing infrastructure, and LP relationship intelligence. We help PE firms and their portfolio companies build the data and outbound systems that compress time-to-revenue.",
    metrics: [{ label: "Avg. deal cycle reduction", value: "34%" }, { label: "Portfolio coverage rate", value: "91%" }],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: "/gtm#private-equity",
  },
  {
    name: "Healthcare & Life Sciences",
    description:
      "Provider network mapping, payor intelligence, and clinical champion identification through the Togari platform. Built for medtech, health services, and digital health companies navigating complex buying committees.",
    metrics: [{ label: "Provider data coverage", value: "1.2M+" }, { label: "Avg. sales cycle lift", value: "28%" }],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    href: "/togari",
  },
  {
    name: "Vertical SaaS",
    description:
      "Market penetration strategies for software companies with defined verticals. TAM analysis, competitive displacement intelligence, and multi-stakeholder sequencing for land-and-expand plays.",
    metrics: [{ label: "Avg. TAM expansion", value: "2.4x" }, { label: "Churn reduction (enriched accounts)", value: "22%" }],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    href: "/gtm#vertical-saas",
  },
]

export function IndustriesSection() {
  return (
    <section className="py-24 bg-off-white section-divider">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="lg:w-1/3">
            <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">Industries</p>
            <h2 className="text-display font-bold text-navy tracking-[-0.025em] mb-4">
              Sector expertise that matters
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              We don&apos;t believe in generic GTM. Every sector has distinct buyer
              behaviors, data sources, and sequencing patterns. Our industry depth
              is what separates us.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors"
            >
              Discuss your industry
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="lg:w-2/3 space-y-5">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={industry.href}
                  className="group flex gap-6 p-6 rounded-xl bg-white border border-gray-200 hover:shadow-card-hover transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-pale border border-blue-mid flex items-center justify-center text-blue-600 flex-shrink-0">
                    {industry.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-navy font-semibold text-base mb-2 group-hover:text-blue-600 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {industry.description}
                    </p>
                    <div className="flex gap-6">
                      {industry.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="text-navy font-bold text-lg">{m.value}</div>
                          <div className="text-muted text-xs">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="self-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
