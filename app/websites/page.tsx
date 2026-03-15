import { getCommercialPageBySlug } from "@/content";
import { createMetadata } from "@/lib/metadata";
import { WebsitesHero } from "@/components/marketing/WebsitesHero";
import { WebsitesServiceGrid } from "@/components/marketing/WebsitesServiceGrid";
import { FaqSection } from "@/components/marketing/FaqSection";
import { ContactCTABlock } from "@/components/ui/ProcessAndCTA";

const page = getCommercialPageBySlug("websites");

export const metadata = createMetadata({
  title: page?.title ?? "Websites",
  description: page?.description ?? "Websiteprojecten en commerciële websites.",
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
      <FaqSection />
      <div className="py-24">
        <ContactCTABlock />
      </div>
    </main>
  );
}
