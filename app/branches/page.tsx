import { CollectionCardGrid } from "@/components/marketing/CollectionCardGrid";
import { PageHero } from "@/components/marketing/PageHero";
import { nichePages } from "@/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Branches",
  description:
    "Basisoverzicht voor niche- en branchepagina’s binnen dezelfde schaalbare agency-site.",
  path: "/branches",
});

export default function BranchesPage() {
  return (
    <>
      <PageHero
        description="Branchepagina’s helpen om bezwaren, taalgebruik en bewijsvoering per doelgroep te specificeren. Deze setup maakt dat schaalbaar zonder aparte page builders."
        eyebrow="Branches"
        primaryHref="/contact"
        primaryLabel="Bespreek nichepagina’s"
        secondaryHref="/diensten/webdesign"
        secondaryLabel="Bekijk webdesign"
        title="Nichepagina’s voor branches met eigen taal en overtuigingskracht"
      />
      <section className="pb-24">
        <CollectionCardGrid
          items={nichePages.map((item) => ({
            href: `/branches/${item.slug}`,
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
