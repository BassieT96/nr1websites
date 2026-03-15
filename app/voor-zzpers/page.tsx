import { CommercialPlaceholderPage } from "@/components/marketing/CommercialPlaceholderPage";
import { getCommercialPageBySlug } from "@/content";
import { createMetadata } from "@/lib/metadata";

const page = getCommercialPageBySlug("voor-zzpers");

export const metadata = createMetadata({
  title: page?.title ?? "Voor ZZP’ers",
  description: page?.description ?? "Website-oplossingen voor zzp’ers.",
  path: "/voor-zzpers",
});

export default function VoorZzpersPage() {
  if (!page) {
    return null;
  }

  return <CommercialPlaceholderPage page={page} />;
}
