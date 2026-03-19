import { HeroSection } from "@/components/sections/HeroSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CaseStudyHighlights } from "@/components/sections/CaseStudyHighlights";
import { TogariPreview } from "@/components/sections/TogariPreview";
import { CoachingPreview } from "@/components/sections/CoachingPreview";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <ProcessSection />
      <IndustriesSection />
      <CaseStudyHighlights />
      <TogariPreview />
      <CoachingPreview />
      <FounderStrip />
      <CTASection />
    </>
  );
}
