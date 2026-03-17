import dynamic from "next/dynamic";

import { StructuredData } from "@/components/seo/StructuredData";
import { PageHero } from "@/components/marketing/PageHero";
import { getPageSpecByPath } from "@/content";
import { createMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/seo/absolute-url";
import { getBreadcrumbJsonLd, getPageJsonLd } from "@/lib/seo/json-ld";

const PortfolioSection = dynamic(
  () => import("@/components/marketing/PortfolioSection").then((m) => m.PortfolioSection),
  { loading: () => <div className="deferred-section" /> }
);
const TestimonialsSection = dynamic(
  () => import("@/components/marketing/TestimonialsSection").then((m) => m.TestimonialsSection),
  { loading: () => <div className="deferred-section" /> }
);
const ContactSection = dynamic(
  () => import("@/components/marketing/ContactSection").then((m) => m.ContactSection),
  { loading: () => <div className="deferred-section" /> }
);

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
    <div className="theme-dark">
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
          "Deze structuur is geschikt voor een compacte cases-pagina vandaag, maar kan later probleemloos groeien naar individuele case studies, filterbare sectoren en uitgebreide resultatenpagina's."
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
    </div>
  );
}
