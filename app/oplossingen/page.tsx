import { CollectionCardGrid } from "@/components/marketing/CollectionCardGrid";
import { PageHero } from "@/components/marketing/PageHero";
import { solutionPages } from "@/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Oplossingen",
  description:
    "Commerciële landingspagina’s voor specifieke website-intenties zoals conversie en SEO-first websitebouw.",
  path: "/oplossingen",
});

export default function OplossingenPage() {
  return (
    <>
      <PageHero
        description="Deze hub groepeert commerciële zoekintenties die te specifiek zijn voor de brede servicepagina’s, maar te waardevol om niet apart te targeten."
        eyebrow="Oplossingen"
        primaryHref="/contact"
        primaryLabel="Bespreek de juiste insteek"
        secondaryHref="/websites"
        secondaryLabel="Bekijk websites"
        title="Landingspagina’s voor concrete commerciële websitevragen"
      />
      <section className="pb-24">
        <CollectionCardGrid
          items={solutionPages.map((item) => ({
            href: `/oplossingen/${item.slug}`,
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
