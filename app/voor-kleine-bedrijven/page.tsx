import { CommercialPlaceholderPage } from "@/components/marketing/CommercialPlaceholderPage";
import { getCommercialPageBySlug } from "@/content";
import { createMetadata } from "@/lib/metadata";

const page = getCommercialPageBySlug("voor-kleine-bedrijven");

export const metadata = createMetadata({
  title: page?.title ?? "Voor Kleine Bedrijven",
  description:
    page?.description ?? "Website-oplossingen voor kleine bedrijven.",
  path: "/voor-kleine-bedrijven",
});

export default function VoorKleineBedrijvenPage() {
  if (!page) {
    return null;
  }

  return <CommercialPlaceholderPage page={page} />;
}
