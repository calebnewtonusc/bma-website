"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";

const founders = [
  {
    name: "Sagar Tiwari",
    role: "Founder & Chairman",
    focus: "GTM Architecture",
    bio: "Sagar built and scaled outbound engines at top B2B companies from Series A through pre-IPO. Led GTM strategy at Clay and McKinsey & Company. At BMA, he leads GTM architecture for enterprise and PE clients and is the architect of the BMA enrichment methodology and structured playbook framework.",
    specialties: ["Outbound sequence design", "ICP definition frameworks", "Multi-stakeholder selling", "Clay workflow architecture"],
    initial: "S",
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "Kevin Cong",
    role: "Founding GTM Strategist",
    focus: "Campaign Strategy",
    bio: "Kevin is a specialist in multi-channel outbound strategy and Clay-powered campaign architecture. He drives campaign activation, A/B testing frameworks, and steady-state experimentation for BMA clients across enterprise and growth-stage companies.",
    specialties: ["Multi-channel campaign design", "Clay-powered activation", "Sequence copywriting", "Conversion optimization"],
    initial: "K",
    color: "from-blue-700 to-navy-800",
  },
  {
    name: "Karthik Devarakonda",
    role: "Founding GTM Engineer",
    focus: "Systems Engineering",
    bio: "Karthik built the data infrastructure that powers BMA's autonomous prospecting engines. Previously led data engineering teams through 10x growth phases with hands-on experience across every major enrichment tool and API in the GTM stack.",
    specialties: ["API integration & data fusion", "CRM data modeling", "Enrichment tool evaluation", "Autonomous agent deployment"],
    initial: "K",
    color: "from-navy-700 to-navy-900",
  },
];

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
];

export function AboutPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-light-grid bg-grid-md opacity-100" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 70% 30%, rgba(29,78,216,0.05), transparent)",
          }}
        />
        <div className="relative max-w-content mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-700" />
              <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">Our Story</span>
            </div>
            <h1 className="font-display text-display-xl font-extrabold text-navy-900 tracking-tight mb-6">
              Built by operators.
              <br />
              <span className="gradient-text-blue">Deployed for scale.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
              Blue Modern Advisory is a GTM Strategy &amp; Engineering firm that transforms how
              companies leverage data and large language models to convert ideal prospects and
              drive revenue growth. Led by GTM Experts from Clay and McKinsey &amp; Company.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We are Blue Modern Advisory, a GTM Strategy &amp; Engineering firm that transforms
              how companies leverage data and large language models to convert ideal prospects and
              drive revenue growth.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We build autonomous prospecting engines that streamline list building, data enrichment,
              and sequencing workflows to intelligently scale enterprise revenue operations.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today BMA serves enterprise B2B companies, PE firms, healthcare tech companies, and
              vertical SaaS platforms. Our work spans list building and enrichment through full GTM
              architecture and agent deployment. The Togari platform extends our healthcare
              capabilities into a dedicated intelligence product.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-700" />
              <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">The Team</span>
            </div>
            <h2 className="font-display text-display-md font-extrabold text-navy-900 tracking-tight">
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
                className="p-8 rounded-2xl bg-white border border-gray-200 shadow-card hover:shadow-card-hover transition-all duration-200"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${founder.color} flex items-center justify-center mb-6`}>
                  <span className="text-white font-bold text-2xl">{founder.initial}</span>
                </div>
                <div className="mb-1">
                  <span className="font-display font-bold text-navy-900 text-xl">{founder.name}</span>
                </div>
                <div className="text-blue-700 text-sm font-semibold mb-0.5">{founder.role}</div>
                <div className="text-gray-400 text-xs mb-5">{founder.focus}</div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{founder.bio}</p>
                <h4 className="text-navy-900 text-xs font-semibold uppercase tracking-wider mb-3">Specialties</h4>
                <ul className="space-y-2">
                  {founder.specialties.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-700 flex-shrink-0" />
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-700" />
              <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">How We Work</span>
            </div>
            <h2 className="font-display text-display-md font-extrabold text-navy-900 tracking-tight">
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
                className="flex gap-5 p-7 rounded-xl bg-white border border-gray-200 shadow-card"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-700 text-xs font-bold">{v.number}</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-900 text-base mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
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
