"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTASection } from "@/components/sections/CTASection";

const founders = [
  {
    name: "Sagar",
    role: "Co-Founder & GTM Lead",
    focus: "GTM Architecture",
    bio: "Sagar spent a decade building and scaling outbound engines at B2B companies from Series A through pre-IPO. He was the first sales hire at two companies that achieved $100M ARR, and personally built the sequences and enrichment systems that drove both of those outcomes. At BMA, he leads GTM architecture for enterprise and PE clients and is the architect of the BMA enrichment methodology.",
    specialties: ["Outbound sequence design", "ICP definition frameworks", "Multi-stakeholder selling", "Sequence copywriting"],
    color: "blue",
  },
  {
    name: "Kevin",
    role: "Co-Founder & Data Lead",
    focus: "Data Engineering",
    bio: "Kevin built data infrastructure at fintech scale-ups, designing the pipelines that power real-time enrichment and signal detection. He led data engineering teams through 10x growth phases and has hands-on experience with every major enrichment tool and API. At BMA, Kevin runs our data layer, the proprietary enrichment pipelines that make our lists different from everything else in the market.",
    specialties: ["Clay workflow architecture", "API integration & data fusion", "Enrichment tool evaluation", "CRM data modeling"],
    color: "cyan",
  },
  {
    name: "Karthik",
    role: "Co-Founder & Healthcare Lead",
    focus: "Healthcare Markets",
    bio: "Karthik has spent 8 years in healthcare market intelligence, building relationships across provider networks, health systems, and medtech distribution channels. He co-created the Togari platform and has led market entry projects for 15+ healthcare companies ranging from digital health startups to Fortune 500 medtech divisions. His depth in healthcare buyer behavior is unmatched in the GTM advisory space.",
    specialties: ["Provider network mapping", "Healthcare sales motions", "Clinical champion programs", "Health system navigation"],
    color: "green",
  },
];

const values = [
  {
    title: "Practitioners first",
    description: "Every recommendation we make is something we have personally built and operated at scale. No theoretical frameworks that we haven't stress-tested in production.",
  },
  {
    title: "Depth over breadth",
    description: "We take on a limited number of clients at any time. This is intentional. The work requires real depth, not a scaled advisory factory.",
  },
  {
    title: "Data-honest",
    description: "We show you what the data says, even when it conflicts with what you want to hear. Bad GTM decisions made on incomplete data are the most expensive mistakes in B2B.",
  },
  {
    title: "Owned outcomes",
    description: "We structure our engagements around measurable outcomes. If the pipeline isn't growing, we're not doing our job.",
  },
];

export function AboutPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-accent-blue/5 blur-[100px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <SectionLabel>Our Story</SectionLabel>
            <h1 className="text-display-xl font-bold text-white mb-6">
              Built by operators.
              <br />
              <span className="gradient-text">Deployed for scale.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Blue Modern Advisory started with a simple observation: the best go-to-market systems
              we had ever seen were built by operators with a data-first obsession, not by consultants
              with slide decks. We built BMA to be that kind of partner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              We founded BMA after watching the same problem play out repeatedly across companies of every stage:
              intelligent teams, strong products, and broken go-to-market. Not because the people weren&apos;t talented,
              but because they were operating without the data infrastructure that turns effort into pipeline.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              The firms that won consistently had one thing in common: they treated their GTM systems as engineering
              problems. Every account was a data object. Every sequence was a testable hypothesis. Every process
              was documented, measured, and improved. This is what we build.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Today BMA serves enterprise B2B companies, PE firms, healthcare tech companies, and vertical SaaS
              platforms. Our work spans list building and enrichment through full GTM architecture and agent deployment.
              The Togari platform extends our healthcare capabilities into a dedicated intelligence product.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel className="justify-center">The Team</SectionLabel>
            <h2 className="text-display-md font-bold text-white">The founders</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-xl bg-surface-card card-border"
              >
                {/* Avatar */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue/30 to-navy-700 flex items-center justify-center mb-5 border border-accent-blue/20">
                  <span className="text-white font-bold text-2xl">{founder.name[0]}</span>
                </div>
                <div className="mb-1">
                  <span className="text-white font-bold text-xl">{founder.name}</span>
                </div>
                <div className="text-accent-blue-light text-sm font-medium mb-1">{founder.role}</div>
                <div className="text-slate-500 text-xs mb-5">{founder.focus}</div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{founder.bio}</p>
                <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Specialties</h4>
                <ul className="space-y-1.5">
                  {founder.specialties.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className="w-1 h-1 rounded-full bg-accent-blue flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel className="justify-center">How We Work</SectionLabel>
            <h2 className="text-display-md font-bold text-white">Our operating principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5 p-7 rounded-xl bg-surface-card card-border"
              >
                <div className="w-8 h-8 rounded-full bg-accent-blue/15 border border-accent-blue/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent-blue-light text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-2">{v.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
