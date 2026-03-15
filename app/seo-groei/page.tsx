import { CommercialPlaceholderPage } from "@/components/marketing/CommercialPlaceholderPage";
import { getCommercialPageBySlug } from "@/content";
import { createMetadata } from "@/lib/metadata";

const page = getCommercialPageBySlug("seo-groei");

export const metadata = createMetadata({
  title: page?.title ?? "SEO & Groei",
  description: page?.description ?? "SEO en groeidiensten.",
  path: "/seo-groei",
});

export default function SeoGroeiPage() {
  if (!page) {
    return null;
  }

  return <CommercialPlaceholderPage page={page} />;
}
