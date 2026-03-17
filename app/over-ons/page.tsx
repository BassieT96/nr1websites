import dynamic from "next/dynamic";

import { StructuredData } from "@/components/seo/StructuredData";
import { PageHero } from "@/components/marketing/PageHero";
import { getPageSpecByPath } from "@/content";
import { createMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/seo/absolute-url";
import { getBreadcrumbJsonLd, getPageJsonLd } from "@/lib/seo/json-ld";

const AboutSection = dynamic(
  () => import("@/components/marketing/AboutSection").then((m) => m.AboutSection),
  { loading: () => <div className="deferred-section" /> }
);
const ProcessSection = dynamic(
  () => import("@/components/marketing/ProcessSection").then((m) => m.ProcessSection),
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

const pageSpec = getPageSpecByPath("/over-ons");

export const metadata = createMetadata({
  title: pageSpec?.title ?? "Over ons",
  description:
    pageSpec?.description ??
    "Meer over de visie, werkwijze en samenwerking van nr1websites.nl.",
  path: "/over-ons",
});

export default function OverOnsPage() {
  return (
    <div className="theme-dark bg-background">
      {pageSpec ? (
        <>
          <StructuredData
            data={getPageJsonLd({
              description: pageSpec.description,
              name: pageSpec.title,
              path: pageSpec.path,
              type: "AboutPage",
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
          "Deze pagina geeft ruimte aan merkverhaal, werkwijze en geloofwaardigheid. Daarmee wordt de site persoonlijker zonder de premium, zakelijke uitstraling te verliezen."
        }
        eyebrow="Over ons"
        primaryHref="/contact"
        primaryLabel={pageSpec?.primaryCta.label ?? "Kennismaken"}
        secondaryHref={pageSpec?.secondaryCta.href ?? "/diensten"}
        secondaryLabel={pageSpec?.secondaryCta.label ?? "Bekijk diensten"}
        title="Nuchter in samenwerking, verfijnd in design en strikt in techniek"
      />
      <AboutSection />
      <ProcessSection compact />
      <TestimonialsSection />
      <ContactSection withHeading={false} />
    </div>
  );
}
