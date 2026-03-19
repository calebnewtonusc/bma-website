import type { Metadata } from "next";
import { ContactPageContent } from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Blue Modern Advisory. Enterprise GTM, Togari Health, or Coaching.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
