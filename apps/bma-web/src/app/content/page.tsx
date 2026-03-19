import type { Metadata } from "next";
import { ContentPageContent } from "./ContentPageContent";

export const metadata: Metadata = {
  title: "Content Hub",
  description:
    "Research-backed GTM content: playbooks, industry analysis, sequencing teardowns, and tools for B2B revenue teams.",
};

export default function ContentPage() {
  return <ContentPageContent />;
}
