import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/marketing/ServiceDetailPage";
import { services } from "@/content";
import { createMetadata } from "@/lib/metadata";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return createMetadata({
      title: "Dienst niet gevonden",
      description: "Deze dienst bestaat niet.",
      path: `/diensten/${slug}`,
    });
  }

  return createMetadata({
    title: service.title,
    description: service.description,
    path: `/diensten/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  return <ServiceDetailPage slug={slug} />;
}
