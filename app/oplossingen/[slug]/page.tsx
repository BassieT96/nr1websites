import type { Metadata } from "next";

import { CollectionLandingDetailPage } from "@/components/marketing/CollectionLandingDetailPage";
import { getSolutionPageBySlug, solutionPages } from "@/content";
import { createMetadata } from "@/lib/metadata";

type SolutionPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return solutionPages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSolutionPageBySlug(slug);

  return createMetadata({
    title: page?.seoTitle ?? "Oplossingspagina",
    description: page?.seoDescription ?? "Commerciële oplossingspagina",
    path: `/oplossingen/${slug}`,
  });
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;

  return (
    <CollectionLandingDetailPage
      collectionHref="/oplossingen"
      collectionLabel="Oplossingen"
      item={getSolutionPageBySlug(slug)}
      path={`/oplossingen/${slug}`}
    />
  );
}
