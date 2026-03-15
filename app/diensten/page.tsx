import { ContactSection } from "@/components/marketing/ContactSection";
import { PageHero } from "@/components/marketing/PageHero";
import { ProcessSection } from "@/components/marketing/ProcessSection";
import { ServicesSection } from "@/components/marketing/ServicesSection";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Diensten",
  description:
    "Overzicht van webdesign, development, SEO, onderhoud en aanvullende dienstverlening van nr1websites.nl.",
  path: "/diensten",
});

export default function DienstenPage() {
  return (
    <>
      <PageHero
        description="Gebruik deze pagina als centrale dienstenhub. Vanuit hier kun je eenvoudig uitbreiden naar losse servicepagina’s, sectorpagina’s of resultaatsgerichte landingspagina’s."
        eyebrow="Diensten"
        primaryHref="/contact"
        primaryLabel="Plan een kennismaking"
        secondaryHref="/cases"
        secondaryLabel="Bekijk cases"
        title="Een modulair dienstenoverzicht met ruimte om door te groeien"
      />
      <ServicesSection
        description="De homepage focust op de vier kernservices. Op deze pagina tonen we ook aanvullende propositiepagina’s die later verder kunnen worden verdiept."
        includeAll
        title="Alle diensten binnen dezelfde design- en contentstructuur"
      />
      <ProcessSection compact />
      <ContactSection />
    </>
  );
}
