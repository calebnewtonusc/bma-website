export interface CaseStudy {
  slug: string;
  industry: string;
  title: string;
  summary: string;
  outcomes: string[];
  client: string;
  timeline: string;
  services: string[];
  challenge: string;
  approach: string[];
  results: { metric: string; value: string; description: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "private-equity-fund",
    industry: "Private Equity",
    title: "How a $2.4B PE Fund Built a Proprietary Deal Flow Engine",
    summary:
      "A middle-market private equity firm with $2.4B AUM came to BMA with a fundamental challenge: their business development team was relying on banker relationships and conferences for deal flow, missing the 70% of founder-owned businesses that never hire an advisor. We architected a full-stack prospecting and enrichment system that transformed how they source and reach acquisition targets.",
    outcomes: ["+3.2x deal sourcing velocity", "60% faster outreach cycle", "94% data accuracy"],
    client: "Middle-market PE Fund ($2.4B AUM)",
    timeline: "90-day build, ongoing operation",
    services: ["List Building", "Data Enrichment", "Outbound Sequencing", "RevOps Architecture"],
    challenge:
      "The firm's deal flow was 90% inbound via bankers, making them late to every competitive process. Their existing CRM had 40,000 company records but less than 30% had current ownership or contact information. The BD team of 3 was spending 60% of their time on manual research instead of relationship building.",
    approach: [
      "Built a proprietary ICP model for founder-owned businesses in target verticals using 15 firmographic and technographic criteria",
      "Deployed automated enrichment to refresh all 40,000 CRM records with verified ownership, leadership contacts, and business signals",
      "Created a deal signal monitoring system tracking 180+ trigger events across 12,000 target companies",
      "Designed and deployed a multi-touch outreach sequence for cold founder outreach with PE-specific personalization",
      "Built a Clay workflow that auto-enriches new company additions and routes to the right BD partner based on vertical focus",
    ],
    results: [
      { metric: "Deal Flow Velocity", value: "+3.2x", description: "Qualified deal conversations per BD partner per month" },
      { metric: "Research Time Saved", value: "60%", description: "BD team time redirected from research to relationship management" },
      { metric: "Data Accuracy", value: "94%", description: "Verified contact and ownership accuracy across enriched records" },
    ],
  },
  {
    slug: "vertical-saas-tam",
    industry: "Vertical SaaS",
    title: "Unlocking a $1.2B TAM for a Construction Tech Platform",
    summary:
      "A construction management SaaS platform had been targeting large general contractors for 3 years but had only scratched the surface of their real market. BMA redefined their total addressable market by layering permit data, contractor licensing, and technology adoption signals, revealing a 2.4x larger addressable market of specialty and mid-market contractors they'd been ignoring.",
    outcomes: ["+2.4x addressable market", "38% increase in pipeline", "$4.2M ARR impact"],
    client: "Construction Technology SaaS (Series B)",
    timeline: "60-day TAM project + 90-day GTM build",
    services: ["TAM Analysis", "ICP Refinement", "Data Enrichment", "Vertical Sequencing"],
    challenge:
      "The company's ICP was defined as \"general contractors over $100M revenue\" but only 2,000 such companies exist nationally. Penetration in this segment was already at 12%, and growth was slowing. The team suspected the real opportunity was in specialty contractors and mid-market GCs but had no data model to prove it.",
    approach: [
      "Built a permit-data driven model of contractor activity using building permit records from all 50 states to identify 340,000 active contractors by activity level",
      "Layered contractor licensing data to verify active companies and map geographic market presence",
      "Applied technographic signals to identify which contractors were already using adjacent software",
      "Ran win/loss analysis on existing customer data to find hidden ICP patterns",
      "Rebuilt their segment model into 6 distinct buyer personas with differentiated sequencing",
    ],
    results: [
      { metric: "TAM Expansion", value: "+2.4x", description: "From 2,000 enterprise GCs to 74,000 qualified prospects" },
      { metric: "Pipeline Growth", value: "+38%", description: "Quarter-over-quarter increase in qualified pipeline" },
      { metric: "ARR Impact", value: "$4.2M", description: "New ARR from expanded segment in first 6 months" },
      { metric: "Win Rate (New Segment)", value: "24%", description: "Specialty contractor segment win rate vs 18% in enterprise" },
    ],
  },
  {
    slug: "health-network-intel",
    industry: "Healthcare",
    title: "Mapping 400+ Health Networks for a Medtech Expansion",
    summary:
      "A surgical device company with a cleared product needed to enter 6 new metro markets simultaneously. Their field team had no market intelligence, no mapped provider networks, and no prioritized accounts. We deployed the Togari platform to deliver complete market intelligence for all 6 markets in under 2 weeks.",
    outcomes: ["11-week market entry", "400+ networks mapped", "4 pilots closed in 60 days"],
    client: "Surgical Device Company (FDA-cleared)",
    timeline: "2-week intelligence build, 11-week market entry",
    services: ["Togari Health Platform", "Provider Network Mapping", "Champion Identification", "Territory Design"],
    challenge:
      "The company needed to build relationships with surgical directors and OR managers across 400+ health facilities in 6 markets, but had no existing relationships and no intelligence on who the right targets were. Their 4-person field team was expected to cover 1,500+ facilities.",
    approach: [
      "Deployed Togari to map all surgical facilities across all 6 target metro markets",
      "Identified surgical directors, OR managers, and department chiefs at each facility with verified contact information",
      "Built referral network graphs to identify which physicians drove device adoption at each major health system",
      "Scored all 1,500+ facilities by likelihood to adopt based on facility type, volume, existing technology, and clinical champion influence",
      "Designed territory maps that concentrated each rep's focus on the top 80 facilities by conversion probability",
    ],
    results: [
      { metric: "Market Entry Timeline", value: "11 weeks", description: "vs. 9-month industry average for 6-market expansion" },
      { metric: "Networks Mapped", value: "400+", description: "Health networks and IDNs with full contact intelligence" },
      { metric: "Pilots Closed", value: "4", description: "Pilot agreements signed within 60 days of field launch" },
      { metric: "Champion Response Rate", value: "31%", description: "Cold outreach reply rate from identified clinical champions" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
