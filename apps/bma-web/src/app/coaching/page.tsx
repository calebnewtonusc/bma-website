import type { Metadata } from "next";
import { CoachingPageContent } from "./CoachingPageContent";

export const metadata: Metadata = {
  title: "Coaching & Education",
  description:
    "GTM coaching programs for founders, sales leaders, and RevOps teams. Build the institutional GTM capability to scale.",
};

export default function CoachingPage() {
  return <CoachingPageContent />;
}
