"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent-blue/8 via-transparent to-transparent" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display-lg font-bold text-white mb-5">
            Ready to build a real
            <br />
            <span className="gradient-text">revenue engine?</span>
          </h2>
          <p className="text-slate-400 text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re entering a new market, rebuilding outbound, or deploying
            AI at scale, we&apos;ll build the system with you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent-blue hover:bg-accent-blue-light text-white font-semibold rounded-xl transition-all duration-200 text-base shadow-glow-sm hover:shadow-glow-blue"
            >
              Start a Conversation
            </Link>
            <Link
              href="/gtm"
              className="px-8 py-4 bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold rounded-xl border border-white/[0.1] transition-all duration-200 text-base"
            >
              Explore GTM Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
