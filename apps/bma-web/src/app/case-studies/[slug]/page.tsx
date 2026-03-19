import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudy, caseStudies } from "@/lib/case-studies";
import { CaseStudyDetail } from "./CaseStudyDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.summary.slice(0, 155),
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();
  return <CaseStudyDetail cs={cs} />;
}
