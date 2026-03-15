import { CommercialPlaceholderPage } from "@/components/marketing/CommercialPlaceholderPage";
import { getCommercialPageBySlug } from "@/content";
import { createMetadata } from "@/lib/metadata";

const page = getCommercialPageBySlug("voor-startende-bedrijven");

export const metadata = createMetadata({
  title: page?.title ?? "Voor Startende Bedrijven",
  description:
    page?.description ?? "Website-oplossingen voor startende bedrijven.",
  path: "/voor-startende-bedrijven",
});

export default function VoorStartendeBedrijvenPage() {
  if (!page) {
    return null;
  }

  return <CommercialPlaceholderPage page={page} />;
}
