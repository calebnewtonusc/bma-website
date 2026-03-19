import { HeroSection } from "@/components/sections/HeroSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <ProcessSection />
      <TestimonialsSection />
      <FounderStrip />
      <CTASection />
    </>
  );
}
