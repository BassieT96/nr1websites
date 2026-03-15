import { StructuredData } from "@/components/seo/StructuredData";
import { AboutSection } from "@/components/marketing/AboutSection";
import { ContactSection } from "@/components/marketing/ContactSection";
import { PageHero } from "@/components/marketing/PageHero";
import { ProcessSection } from "@/components/marketing/ProcessSection";
import { TestimonialsSection } from "@/components/marketing/TestimonialsSection";
import { getPageSpecByPath } from "@/content";
import { createMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/seo/absolute-url";
import { getBreadcrumbJsonLd, getPageJsonLd } from "@/lib/seo/json-ld";

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
    <>
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
    </>
  );
}
