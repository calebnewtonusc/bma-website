import type { Metadata } from "next";
import { AgentsPageContent } from "./AgentsPageContent";

export const metadata: Metadata = {
  title: "AI Agents & Engines",
  description:
    "Purpose-built AI agents for go-to-market. Prospecting, enrichment, sequencing, and pipeline management agents that operate at scale.",
};

export default function AgentsPage() {
  return <AgentsPageContent />;
}
