import type { Metadata } from "next";

import { CaseStudyDetailPage } from "@/components/marketing/CaseStudyDetailPage";
import { caseStudies } from "@/content";
import { createMetadata } from "@/lib/metadata";

type CasePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    return createMetadata({
      title: "Case niet gevonden",
      description: "Deze case bestaat niet.",
      path: `/cases/${slug}`,
    });
  }

  return createMetadata({
    title: `${caseStudy.client} case`,
    description: caseStudy.summary,
    path: `/cases/${caseStudy.slug}`,
  });
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  return <CaseStudyDetailPage slug={slug} />;
}
