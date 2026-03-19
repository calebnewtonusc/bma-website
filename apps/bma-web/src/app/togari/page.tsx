import type { Metadata } from "next";
import { TogariPageContent } from "./TogariPageContent";

export const metadata: Metadata = {
  title: "Togari Health Intelligence Platform",
  description:
    "Healthcare-specific market intelligence. Togari maps 1.2M+ providers, health systems, and payors for medtech and health services go-to-market.",
};

export default function TogariPage() {
  return <TogariPageContent />;
}
