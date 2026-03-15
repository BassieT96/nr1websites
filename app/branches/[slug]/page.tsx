import type { Metadata } from "next";

import { CollectionLandingDetailPage } from "@/components/marketing/CollectionLandingDetailPage";
import { getNichePageBySlug, nichePages } from "@/content";
import { createMetadata } from "@/lib/metadata";

type BranchPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return nichePages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: BranchPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getNichePageBySlug(slug);

  return createMetadata({
    title: page?.seoTitle ?? "Branchepagina",
    description: page?.seoDescription ?? "Niche landingspagina",
    path: `/branches/${slug}`,
  });
}

export default async function BranchPage({ params }: BranchPageProps) {
  const { slug } = await params;
  return (
    <CollectionLandingDetailPage
      collectionHref="/branches"
      collectionLabel="Branches"
      item={getNichePageBySlug(slug)}
      path={`/branches/${slug}`}
    />
  );
}
