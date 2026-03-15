import { CollectionCardGrid } from "@/components/marketing/CollectionCardGrid";
import { PageHero } from "@/components/marketing/PageHero";
import { locationPages } from "@/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Locaties",
  description:
    "Basisoverzicht voor lokale landingspagina’s per stad of regio binnen dezelfde agency-architectuur.",
  path: "/locaties",
});

export default function LocatiesPage() {
  return (
    <>
      <PageHero
        description="Lokale landingspagina’s zijn vaak een van de snelste manieren om SEO-breedte op te bouwen. Daarom is hier direct een collectie-gedreven basis voor opgezet."
        eyebrow="Locaties"
        primaryHref="/contact"
        primaryLabel="Bespreek lokale SEO"
        secondaryHref="/diensten/seo"
        secondaryLabel="Bekijk SEO-dienst"
        title="Schaalbare lokale pagina’s zonder dunne, rommelige templates"
      />
      <section className="pb-24">
        <CollectionCardGrid
          items={locationPages.map((item) => ({
            href: `/locaties/${item.slug}`,
            eyebrow: item.eyebrow,
            title: item.title,
            description: item.description,
            badges: item.relatedServices,
          }))}
        />
      </section>
    </>
  );
}
