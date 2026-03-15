import { getCommercialPageBySlug } from "@/content";
import { createMetadata } from "@/lib/metadata";
import { WebsitesHero } from "@/components/marketing/WebsitesHero";
import { WebsitesServiceGrid } from "@/components/marketing/WebsitesServiceGrid";
import {
  WebsitesBento,
  WebsitesProcess,
  WebsitesCasesStrip,
  WebsitesDarkCTA,
} from "@/components/marketing/WebsitesSections";
import { FaqSection } from "@/components/marketing/FaqSection";

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
      <WebsitesHero page={page} />
      <WebsitesServiceGrid />
      <WebsitesBento />
      <WebsitesProcess />
      <WebsitesCasesStrip />
      <FaqSection />
      <WebsitesDarkCTA />
    </main>
  );
}
