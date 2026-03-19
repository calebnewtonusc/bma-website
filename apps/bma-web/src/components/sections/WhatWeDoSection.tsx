"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "GTM Strategy",
    description:
      "We diagnose your data architecture, AI systems, and operating model to build a structured GTM playbook and operational toolkit tailored to your pipeline goals.",
    tags: ["ICP Frameworks", "Playbook Design", "Ops Modeling"],
    href: "/gtm",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "AI-Powered Prospecting",
    description:
      "Scalable systems for CRM ingestion, lead generation to opportunity, data enrichment workflows, real-time lead detection, and routing with ownership, tagging, and deduplication.",
    tags: ["Clay Infrastructure", "CRM Automation", "Lead Routing"],
    href: "/agents",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Campaign Activation",
    description:
      "Clay-powered inbound and outbound campaigns across every pipeline stage. Structured playbook, steady-state experimentation, and high-volume outreach without sacrificing targeting precision.",
    tags: ["Multi-Channel", "Sequencing", "A/B Testing"],
    href: "/gtm",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Togari Health Intelligence",
    description:
      "A dedicated intelligence platform for healthcare go-to-market, mapping provider networks, health systems, and medtech distribution channels with depth that generic databases cannot match.",
    tags: ["Healthcare", "Provider Mapping", "HCP Data"],
    href: "/togari",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "GTM Coaching",
    description:
      "Hands-on coaching for sales leaders, founders, and GTM teams. Frameworks from Clay and McKinsey translated into repeatable systems your team can own and operate independently.",
    tags: ["Sales Enablement", "Founder Coaching", "Team Training"],
    href: "/coaching",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Autonomous Agents",
    description:
      "Custom AI agents built on modern LLM infrastructure. From deal sourcing automation to candidate filtering pipelines, we build and deploy agents that eliminate manual bottlenecks at scale.",
    tags: ["LLM Agents", "Automation", "CRM Sync"],
    href: "/agents",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-700" />
            <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">
              What We Do
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="font-display text-display-md font-extrabold text-navy-900 tracking-tight max-w-xl">
              Everything you need to build a revenue engine
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-sm lg:text-right">
              We are Blue Modern Advisory, a GTM Strategy &amp; Engineering firm that
              transforms how companies leverage data and large language models.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group block p-7 bg-white rounded-xl border border-gray-200 hover:border-blue-200 shadow-card hover:shadow-card-hover transition-all duration-200 card-lift cursor-pointer"
            >
              <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 mb-5 group-hover:bg-blue-700 group-hover:text-white group-hover:border-blue-700 transition-all duration-200">
                {service.icon}
              </div>
              <h3 className="font-display font-bold text-navy-900 text-lg mb-2.5 tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-gray-100 text-gray-500 text-[11px] font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
