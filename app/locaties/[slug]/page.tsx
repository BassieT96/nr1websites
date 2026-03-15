import type { Metadata } from "next";

import { CollectionLandingDetailPage } from "@/components/marketing/CollectionLandingDetailPage";
import { getLocationPageBySlug, locationPages } from "@/content";
import { createMetadata } from "@/lib/metadata";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return locationPages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLocationPageBySlug(slug);

  return createMetadata({
    title: page?.seoTitle ?? "Locatiepagina",
    description: page?.seoDescription ?? "Lokale landingspagina",
    path: `/locaties/${slug}`,
  });
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  return (
    <CollectionLandingDetailPage
      collectionHref="/locaties"
      collectionLabel="Locaties"
      item={getLocationPageBySlug(slug)}
      path={`/locaties/${slug}`}
    />
  );
}
