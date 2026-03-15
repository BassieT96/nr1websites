import dynamic from "next/dynamic";

import { HomeHero } from "@/components/marketing/HomeHero";
import { TrustStrip } from "@/components/marketing/TrustStrip";

// Below-fold: code-split into separate chunks to reduce initial JS payload
const TargetAudienceSection = dynamic(
  () => import("@/components/marketing/TargetAudienceSection").then((m) => m.TargetAudienceSection),
  { loading: () => <div className="deferred-section" /> }
);
const ServicesSection = dynamic(
  () => import("@/components/marketing/ServicesSection").then((m) => m.ServicesSection),
  { loading: () => <div className="deferred-section" /> }
);
const PricingSection = dynamic(
  () => import("@/components/marketing/PricingSection").then((m) => m.PricingSection),
  { loading: () => <div className="deferred-section" /> }
);
const ProcessSection = dynamic(
  () => import("@/components/marketing/ProcessSection").then((m) => m.ProcessSection),
  { loading: () => <div className="deferred-section" /> }
);
const PortfolioSection = dynamic(
  () => import("@/components/marketing/PortfolioSection").then((m) => m.PortfolioSection),
  { loading: () => <div className="deferred-section" /> }
);
const FaqSection = dynamic(
  () => import("@/components/marketing/FaqSection").then((m) => m.FaqSection),
  { loading: () => <div className="deferred-section" /> }
);
const ContactSection = dynamic(
  () => import("@/components/marketing/ContactSection").then((m) => m.ContactSection),
  { loading: () => <div className="deferred-section" /> }
);
import { StructuredData } from "@/components/seo/StructuredData";
import { getPageSpecByPath } from "@/content";
import { createMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/seo/absolute-url";
import { testimonials } from "@/content";
import {
  getAggregateRatingJsonLd,
  getBreadcrumbJsonLd,
  getPageJsonLd,
} from "@/lib/seo/json-ld";

const pageSpec = getPageSpecByPath("/");

export const metadata = createMetadata({
  title: pageSpec?.title ?? "Website laten maken in Lemmer? | nr1websites.nl",
  description:
    pageSpec?.description ??
    "Jouw digitale partner in Friesland voor snelle, conversiegerichte en professionele websites. Meer aanvragen uit je website zonder ingewikkelde trajecten.",
});

export default function HomePage() {
  return (
    <>
      {pageSpec ? (
        <>
          <StructuredData
            data={getPageJsonLd({
              description: pageSpec.description,
              name: pageSpec.title,
              path: pageSpec.path,
              type: "WebPage",
            })}
          />
          <StructuredData
            data={getBreadcrumbJsonLd([
              { name: "Home", url: absoluteUrl("/") },
            ])}
          />
        </>
      ) : null}
      {(() => {
        const aggregateRating = getAggregateRatingJsonLd(
          testimonials.map((t) => ({
            author: t.name,
            reviewBody: t.quote,
            ratingValue: 5,
          })),
        );
        return aggregateRating ? <StructuredData data={aggregateRating} /> : null;
      })()}
      <HomeHero />
      <TrustStrip />
      <TargetAudienceSection />
      <ServicesSection />
      <PricingSection />
      <PortfolioSection />
      <ProcessSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
