"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CTASection } from "@/components/sections/CTASection"

const founders = [
  {
    name: "Sagar Tiwari",
    role: "Founder & Chairman",
    focus: "GTM Architecture",
    bio: "Sagar built and scaled outbound engines at top B2B companies from Series A through pre-IPO. Led GTM strategy at Clay and McKinsey & Company. At BMA, he leads GTM architecture for enterprise and PE clients and is the architect of the BMA enrichment methodology and structured playbook framework.",
    specialties: ["Outbound sequence design", "ICP definition frameworks", "Multi-stakeholder selling", "Clay workflow architecture"],
    initial: "S",
  },
  {
    name: "Kevin Cong",
    role: "Founding GTM Strategist",
    focus: "Campaign Strategy",
    bio: "Kevin is a specialist in multi-channel outbound strategy and Clay-powered campaign architecture. He drives campaign activation, A/B testing frameworks, and steady-state experimentation for BMA clients across enterprise and growth-stage companies.",
    specialties: ["Multi-channel campaign design", "Clay-powered activation", "Sequence copywriting", "Conversion optimization"],
    initial: "K",
  },
  {
    name: "Karthik Devarakonda",
    role: "Founding GTM Engineer",
    focus: "Systems Engineering",
    bio: "Karthik built the data infrastructure that powers BMA's autonomous prospecting engines. Previously led data engineering teams through 10x growth phases with hands-on experience across every major enrichment tool and API in the GTM stack.",
    specialties: ["API integration & data fusion", "CRM data modeling", "Enrichment tool evaluation", "Autonomous agent deployment"],
    initial: "K",
  },
]

const values = [
  {
    number: "01",
    title: "Practitioners first",
    description: "Every recommendation we make is something we have personally built and operated at scale. No theoretical frameworks that we haven't stress-tested in production.",
  },
  {
    number: "02",
    title: "Depth over breadth",
    description: "We take on a limited number of clients at any time. This is intentional. The work requires real depth, not a scaled advisory factory.",
  },
  {
    number: "03",
    title: "Data-honest",
    description: "We show you what the data says, even when it conflicts with what you want to hear. Bad GTM decisions made on incomplete data are the most expensive mistakes in B2B.",
  },
  {
    number: "04",
    title: "Owned outcomes",
    description: "We structure our engagements around measurable outcomes. If the pipeline isn't growing, we're not doing our job.",
  },
]

export function AboutPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">Our Story</p>
            <h1 className="text-display font-bold text-navy tracking-[-0.025em] mb-6">
              Built by operators.
              <br />
              <span className="gradient-text">Deployed for scale.</span>
            </h1>
            <p className="text-lead text-muted leading-relaxed max-w-2xl">
              Blue Modern Advisory is a GTM Strategy &amp; Engineering firm that transforms how
              companies leverage data and large language models to convert ideal prospects and
              drive revenue growth. Led by GTM Experts from Clay and McKinsey &amp; Company.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-off-white section-divider">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-muted text-[17px] leading-relaxed mb-6">
              We started BMA because we kept seeing the same problem: B2B companies had good products
              and weak pipelines. Not because their market was wrong, but because their data was
              incomplete, their sequences were generic, and their tooling was built for a world
              before AI.
            </p>
            <p className="text-muted text-[17px] leading-relaxed mb-6">
              We set out to build the kind of GTM infrastructure that was previously only accessible
              to companies with 10-person RevOps teams. Autonomous enrichment, Clay-native workflows,
              AI-powered sequencing, and analytics that tell you what is actually working.
            </p>
            <p className="text-muted text-[17px] leading-relaxed">
              Today BMA serves enterprise B2B companies, PE firms, healthcare tech companies, and
              vertical SaaS platforms. The Togari platform extends our healthcare capabilities into
              a dedicated intelligence product for provider network mapping and clinical champion
              identification.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white section-divider">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">The Team</p>
            <h2 className="text-display font-bold text-navy tracking-[-0.025em]">
              The founders
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-2xl">{founder.initial}</span>
                </div>
                <div className="mb-1">
                  <span className="font-bold text-navy text-xl">{founder.name}</span>
                </div>
                <div className="text-blue-600 text-sm font-semibold mb-0.5">{founder.role}</div>
                <div className="text-muted text-xs mb-5">{founder.focus}</div>
                <p className="text-muted text-sm leading-relaxed mb-6">{founder.bio}</p>
                <h4 className="text-navy text-xs font-semibold uppercase tracking-wider mb-3">Specialties</h4>
                <ul className="space-y-2">
                  {founder.specialties.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
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
      <section className="py-24 bg-off-white section-divider">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">How We Work</p>
            <h2 className="text-display font-bold text-navy tracking-[-0.025em]">
              Our operating principles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5 p-7 rounded-xl bg-white border border-gray-200 hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-pale border border-blue-mid flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-700 text-xs font-bold">{v.number}</span>
                </div>
                <div>
                  <h3 className="font-bold text-navy text-base mb-2">{v.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
