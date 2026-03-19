"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CTASection } from "@/components/sections/CTASection"

type ContentType = "All" | "Playbook" | "Analysis" | "Teardown" | "Framework"
type Industry = "All" | "Finance" | "Healthcare" | "SaaS" | "General"

const contentItems = [
  {
    type: "Playbook" as ContentType,
    industry: "Finance" as Industry,
    title: "The PE Portfolio GTM Playbook: From Day 1 to Revenue",
    description: "How middle-market PE firms build GTM infrastructure for new portfolio companies in under 90 days. Includes ICP templates, tool stack recommendations, and first 30 days outreach guide.",
    readTime: "18 min",
    date: "January 2026",
    featured: true,
  },
  {
    type: "Analysis" as ContentType,
    industry: "Healthcare" as Industry,
    title: "The State of Health System GTM in 2026",
    description: "How consolidation trends, staffing shifts, and AI adoption are changing the healthcare buyer landscape. Essential reading for any medtech or health services team.",
    readTime: "12 min",
    date: "February 2026",
    featured: false,
  },
  {
    type: "Teardown" as ContentType,
    industry: "SaaS" as Industry,
    title: "Sequence Teardown: 4 Cold Emails with 40%+ Reply Rates",
    description: "We break down four real cold email sequences (anonymized) that achieved outlier reply rates. What they have in common, what made them work, and how to replicate the pattern.",
    readTime: "10 min",
    date: "January 2026",
    featured: false,
  },
  {
    type: "Framework" as ContentType,
    industry: "General" as Industry,
    title: "The BMA Enrichment Hierarchy: Which Data Matters Most",
    description: "Not all enrichment fields are equal. We rank 50 commonly available data points by their impact on reply rates, meeting bookings, and deal conversion.",
    readTime: "8 min",
    date: "December 2025",
    featured: false,
  },
  {
    type: "Playbook" as ContentType,
    industry: "SaaS" as Industry,
    title: "Land-and-Expand Sequencing for Vertical SaaS",
    description: "A complete sequencing playbook for vertical SaaS companies pursuing expansion within accounts. Multi-stakeholder outreach, timing frameworks, and personalization at scale.",
    readTime: "15 min",
    date: "February 2026",
    featured: false,
  },
  {
    type: "Analysis" as ContentType,
    industry: "General" as Industry,
    title: "AI Agents in GTM: What Actually Works in 2026",
    description: "A clear-eyed evaluation of AI tools for sales and marketing teams. What the vendors won't tell you, what we've tested, and what we'd actually deploy.",
    readTime: "14 min",
    date: "March 2026",
    featured: false,
  },
  {
    type: "Framework" as ContentType,
    industry: "Finance" as Industry,
    title: "Deal Flow Intelligence: Building a Proprietary PE Sourcing Engine",
    description: "How private equity firms can use technology and process to surface off-market opportunities before they hit banker processes. The BMA sourcing framework.",
    readTime: "20 min",
    date: "November 2025",
    featured: false,
  },
  {
    type: "Teardown" as ContentType,
    industry: "Healthcare" as Industry,
    title: "How Togari Found 40 Clinical Champions in 2 Weeks",
    description: "A behind-the-scenes look at how we used the Togari platform to identify and prioritize clinical champions for a medtech client's 6-market expansion.",
    readTime: "9 min",
    date: "January 2026",
    featured: false,
  },
]

const typeOptions: ContentType[] = ["All", "Playbook", "Analysis", "Teardown", "Framework"]
const industryOptions: Industry[] = ["All", "Finance", "Healthcare", "SaaS", "General"]

export function ContentPageContent() {
  const [selectedType, setSelectedType] = useState<ContentType>("All")
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>("All")

  const filtered = contentItems.filter((item) => {
    const typeMatch = selectedType === "All" || item.type === selectedType
    const industryMatch = selectedIndustry === "All" || item.industry === selectedIndustry
    return typeMatch && industryMatch
  })

  const featured = filtered.filter((i) => i.featured)[0] ?? filtered[0]
  const rest = filtered.filter((i) => i !== featured)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">Content Hub</p>
            <h1 className="text-display font-bold text-navy tracking-[-0.025em] mb-4">
              GTM intelligence worth reading
            </h1>
            <p className="text-lead text-muted max-w-xl mx-auto">
              Playbooks, analysis, and teardowns from practitioners in the field.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-off-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex gap-2 flex-wrap">
              <span className="text-muted text-sm mr-1 self-center">Type:</span>
              {typeOptions.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    selectedType === t
                      ? "bg-blue-600 text-white"
                      : "bg-white text-muted hover:text-ink border border-gray-200"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="text-muted text-sm mr-1 self-center">Industry:</span>
              {industryOptions.map((i) => (
                <button
                  key={i}
                  onClick={() => setSelectedIndustry(i)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    selectedIndustry === i
                      ? "bg-blue-600 text-white"
                      : "bg-white text-muted hover:text-ink border border-gray-200"
                  }`}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content list */}
      <section className="py-16 bg-white section-divider">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10 p-8 rounded-2xl bg-blue-pale border border-blue-mid"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[12px] font-medium text-blue-700 bg-white border border-blue-mid px-2.5 py-1 rounded-full">
                  {featured.type}
                </span>
                <span className="text-[12px] font-medium text-muted bg-white border border-gray-200 px-2.5 py-1 rounded-full">
                  {featured.industry}
                </span>
                <span className="text-xs text-muted ml-auto">{featured.date} · {featured.readTime} read</span>
              </div>
              <h2 className="text-title font-bold text-navy tracking-tight mb-3">{featured.title}</h2>
              <p className="text-muted leading-relaxed mb-5">{featured.description}</p>
              <span className="inline-flex items-center gap-2 text-[13px] font-medium text-muted bg-white border border-gray-200 px-3 py-1.5 rounded-lg">
                Full article coming soon
              </span>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group p-6 rounded-xl bg-white border border-gray-200 hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[12px] font-medium text-blue-700 bg-blue-pale border border-blue-mid px-2.5 py-1 rounded-full">
                    {item.type}
                  </span>
                  <span className="text-xs text-muted ml-auto">{item.readTime} read</span>
                </div>
                <h3 className="text-navy font-semibold text-base mb-2 leading-snug group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed line-clamp-3">{item.description}</p>
                <div className="mt-4 text-xs text-muted">{item.date}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
