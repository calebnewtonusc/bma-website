"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

type FormType = "enterprise" | "togari" | "coaching";

const formTabs: { id: FormType; label: string; description: string }[] = [
  { id: "enterprise", label: "GTM / Enterprise", description: "List building, enrichment, sequencing, or full GTM architecture" },
  { id: "togari", label: "Togari Health", description: "Healthcare market intelligence and provider network mapping" },
  { id: "coaching", label: "Coaching", description: "Founder GTM Track, Sales Leader Intensive, or RevOps Practitioner" },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
  program?: string;
  stage?: string;
}

export function ContactPageContent() {
  const [activeTab, setActiveTab] = useState<FormType>("enterprise");
  const [formData, setFormData] = useState<FormData>({
    name: "", email: "", company: "", role: "", message: "", program: "", stage: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: activeTab }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email us directly at team@bluemodernadviosry.com");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <SectionLabel>Contact</SectionLabel>
              <h1 className="text-display-lg font-bold text-white mb-5">
                Start a conversation
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                Every engagement starts with a 30-minute call. No pitch deck, no pressure.
                Just a real conversation about where you are and what you need.
              </p>

              <div className="space-y-4 mb-12">
                {[
                  { label: "Email", value: "team@bluemodernadviosry.com", icon: "✉" },
                  { label: "Response time", value: "Within 24 hours", icon: "⏱" },
                  { label: "First call", value: "30 minutes, no obligation", icon: "📞" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-lg">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs uppercase tracking-wider">{item.label}</div>
                      <div className="text-white text-sm font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Offices */}
              <div className="p-6 rounded-xl bg-surface-card card-border">
                <h3 className="text-white font-semibold text-sm mb-3">Our Clients Are Everywhere</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We work with clients across the US and internationally. All engagements
                  are conducted remotely, with optional on-site strategy sessions for
                  enterprise clients.
                </p>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="p-8 rounded-2xl bg-surface-card card-border">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center mx-auto mb-5">
                      <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">Message received</h3>
                    <p className="text-slate-400 text-sm">We&apos;ll be in touch within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    {/* Tabs */}
                    <div className="flex gap-1 mb-8 p-1 bg-white/[0.04] rounded-xl border border-white/[0.06]">
                      {formTabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex-1 py-2.5 px-2 rounded-lg text-xs font-semibold transition-all ${
                            activeTab === tab.id
                              ? "bg-accent-blue text-white shadow-glow-sm"
                              : "text-slate-400 hover:text-white"
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                    <p className="text-slate-500 text-xs mb-6">
                      {formTabs.find((t) => t.id === activeTab)?.description}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-400 mb-1.5">Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3 py-2.5 bg-white/[0.04] border border-white/[0.1] rounded-lg text-white text-sm placeholder-slate-600 focus:outline-none focus:border-accent-blue/50 transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-400 mb-1.5">Work Email *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-3 py-2.5 bg-white/[0.04] border border-white/[0.1] rounded-lg text-white text-sm placeholder-slate-600 focus:outline-none focus:border-accent-blue/50 transition-colors"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-400 mb-1.5">Company *</label>
                          <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-3 py-2.5 bg-white/[0.04] border border-white/[0.1] rounded-lg text-white text-sm placeholder-slate-600 focus:outline-none focus:border-accent-blue/50 transition-colors"
                            placeholder="Company name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-400 mb-1.5">Role *</label>
                          <input
                            type="text"
                            required
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            className="w-full px-3 py-2.5 bg-white/[0.04] border border-white/[0.1] rounded-lg text-white text-sm placeholder-slate-600 focus:outline-none focus:border-accent-blue/50 transition-colors"
                            placeholder="Your title"
                          />
                        </div>
                      </div>

                      {activeTab === "coaching" && (
                        <div>
                          <label className="block text-xs font-medium text-slate-400 mb-1.5">Stage</label>
                          <select
                            value={formData.stage}
                            onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                            className="w-full px-3 py-2.5 bg-white/[0.04] border border-white/[0.1] rounded-lg text-white text-sm focus:outline-none focus:border-accent-blue/50 transition-colors"
                          >
                            <option value="" className="bg-navy-900">Select company stage</option>
                            <option value="Pre-seed/Seed" className="bg-navy-900">Pre-seed / Seed</option>
                            <option value="Series A" className="bg-navy-900">Series A</option>
                            <option value="Series B+" className="bg-navy-900">Series B+</option>
                            <option value="Growth" className="bg-navy-900">Growth / Late Stage</option>
                          </select>
                        </div>
                      )}

                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1.5">Tell us about your challenge *</label>
                        <textarea
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={4}
                          className="w-full px-3 py-2.5 bg-white/[0.04] border border-white/[0.1] rounded-lg text-white text-sm placeholder-slate-600 focus:outline-none focus:border-accent-blue/50 transition-colors resize-none"
                          placeholder="What are you working on? What's the biggest GTM challenge you're facing?"
                        />
                      </div>

                      {error && (
                        <p className="text-red-400 text-xs">{error}</p>
                      )}

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-3.5 bg-accent-blue hover:bg-accent-blue-light text-white font-semibold rounded-lg transition-all text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? "Sending..." : "Send Message"}
                      </button>

                      <p className="text-slate-600 text-xs text-center">
                        We respond to all inquiries within 24 hours.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
