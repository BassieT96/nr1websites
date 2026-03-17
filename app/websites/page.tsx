import dynamic from "next/dynamic";

import { getCommercialPageBySlug } from "@/content";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/marketing/PageHero";
import { WebsitesServiceGrid } from "@/components/marketing/WebsitesServiceGrid";

// Below-fold sections — code-split
const WebsitesBento = dynamic(
  () => import("@/components/marketing/WebsitesSections").then((m) => m.WebsitesBento),
  { loading: () => <div className="deferred-section" /> }
);
const WebsitesProcess = dynamic(
  () => import("@/components/marketing/WebsitesSections").then((m) => m.WebsitesProcess),
  { loading: () => <div className="deferred-section" /> }
);
const WebsitesCasesStrip = dynamic(
  () => import("@/components/marketing/WebsitesSections").then((m) => m.WebsitesCasesStrip),
  { loading: () => <div className="deferred-section" /> }
);
const WebsitesDarkCTA = dynamic(
  () => import("@/components/marketing/WebsitesSections").then((m) => m.WebsitesDarkCTA),
  { loading: () => <div className="deferred-section" /> }
);
const FaqSection = dynamic(
  () => import("@/components/marketing/FaqSection").then((m) => m.FaqSection),
  { loading: () => <div className="deferred-section" /> }
);

const page = getCommercialPageBySlug("websites");

export const metadata = createMetadata({
  title: page?.title ?? "Websites",
  description: page?.description ?? "Professionele websites die klanten werven.",
  path: "/websites",
});

export default function WebsitesPage() {
  if (!page) {
    return null;
  }

  return (
    <main className="bg-[#020202]">
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        primaryHref={page.primaryCta.href}
        primaryLabel={page.primaryCta.label}
        secondaryHref={page.secondaryCta.href}
        secondaryLabel={page.secondaryCta.label}
      />
      <WebsitesServiceGrid />
      <WebsitesBento />
      <WebsitesProcess />
      <WebsitesCasesStrip />
      <FaqSection />
      <WebsitesDarkCTA />
    </main>
  );
}
