import { StructuredData } from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/marketing/ContactSection";
import { PageHero } from "@/components/marketing/PageHero";
import { PortfolioSection } from "@/components/marketing/PortfolioSection";
import { TestimonialsSection } from "@/components/marketing/TestimonialsSection";
import { getPageSpecByPath } from "@/content";
import { createMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/seo/absolute-url";
import { getBreadcrumbJsonLd, getPageJsonLd } from "@/lib/seo/json-ld";

const pageSpec = getPageSpecByPath("/cases");

export const metadata = createMetadata({
  title: pageSpec?.title ?? "Cases",
  description:
    pageSpec?.description ??
    "Voorbeeldcases en resultaten voor bedrijven die zoeken naar een moderne, conversiegerichte website.",
  path: "/cases",
});

export default function CasesPage() {
  return (
    <>
      {pageSpec ? (
        <>
          <StructuredData
            data={getPageJsonLd({
              description: pageSpec.description,
              name: pageSpec.title,
              path: pageSpec.path,
              type: "CollectionPage",
            })}
          />
          <StructuredData
            data={getBreadcrumbJsonLd([
              { name: "Home", url: absoluteUrl("/") },
              { name: pageSpec.title, url: absoluteUrl(pageSpec.path) },
            ])}
          />
        </>
      ) : null}
      <PageHero
        description={
          pageSpec?.mainMessage ??
          "Deze structuur is geschikt voor een compacte cases-pagina vandaag, maar kan later probleemloos groeien naar individuele case studies, filterbare sectoren en uitgebreide resultatenpagina’s."
        }
        eyebrow="Cases"
        primaryHref="/contact"
        primaryLabel={pageSpec?.primaryCta.label ?? "Plan een projectgesprek"}
        secondaryHref={pageSpec?.secondaryCta.href ?? "/diensten"}
        secondaryLabel={pageSpec?.secondaryCta.label ?? "Bekijk diensten"}
        title="Laat resultaat het verkoopwerk alvast doen"
      />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection withHeading={false} />
    </>
  );
}
