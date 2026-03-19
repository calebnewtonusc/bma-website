import type { Metadata } from "next";
import { GTMPageContent } from "./GTMPageContent";

export const metadata: Metadata = {
  title: "GTM Strategy & Engineering",
  description:
    "Full-stack go-to-market engineering for enterprise B2B. ICP definition, territory mapping, data enrichment, and AI-powered outbound sequencing.",
};

export default function GTMPage() {
  return <GTMPageContent />;
}
