"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "GTM Strategy & Engineering",
    description:
      "We architect go-to-market systems from the ground up. ICP definition, territory mapping, signal-based prioritization, and full-stack outbound orchestration for B2B companies entering or scaling in competitive markets.",
    link: "/gtm",
    tag: "Core Service",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "Data Enrichment & Intelligence",
    description:
      "Proprietary enrichment pipelines that go beyond basic firmographics. Technology stack inference, funding signals, headcount velocity, hiring patterns, and regulatory footprint analysis to build accounts worth targeting.",
    link: "/gtm#enrichment",
    tag: "Data Layer",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "AI Agents & Automation",
    description:
      "Purpose-built AI agents that operate autonomously across your revenue stack. From prospecting agents that find and qualify leads to sequencing agents that personalize at scale without sacrificing authenticity.",
    link: "/agents",
    tag: "Emerging",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Togari Health Platform",
    description:
      "Healthcare-specific market intelligence. Togari maps the full provider and payor landscape, enabling medtech and health services companies to identify the right clinical champions and penetrate new markets faster.",
    link: "/togari",
    tag: "Platform",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.75 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Coaching & Education",
    description:
      "Hands-on GTM coaching for founders, sales leaders, and operators. We transfer the same playbooks we use for enterprise clients to your team, building institutional capability that scales with you.",
    link: "/coaching",
    tag: "Advisory",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    title: "Content & Thought Leadership",
    description:
      "We produce research-backed GTM content that builds pipeline and brand simultaneously. Industry analysis, playbook guides, and sequencing teardowns that your prospects actually want to read.",
    link: "/content",
    tag: "Content",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="py-24 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel className="justify-center">What We Do</SectionLabel>
          <h2 className="text-display-md font-bold text-white mb-4">
            Full-stack revenue engineering
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From market mapping to closed-won, we build and operate the systems
            that turn qualified accounts into revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-7 rounded-xl bg-surface-card card-border hover:border-white/[0.15] transition-all duration-300 hover:bg-white/[0.03]"
            >
              {/* Tag */}
              <span className="absolute top-5 right-5 text-xs text-slate-500 font-medium">
                {service.tag}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue-light mb-5 group-hover:bg-accent-blue/15 transition-colors">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-blue-100 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>

              {/* Arrow */}
              <div className="mt-5 flex items-center gap-1 text-accent-blue-light text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
