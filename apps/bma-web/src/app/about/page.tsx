import type { Metadata } from "next";
import { AboutPageContent } from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Blue Modern Advisory",
  description: "The BMA story: operators who built the systems we now deploy for clients. Meet Sagar, Kevin, and Karthik.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
