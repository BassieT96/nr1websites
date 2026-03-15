import { faqItems, pricingPlans } from "@/content";
import { createMetadata } from "@/lib/metadata";
import { StructuredData } from "@/components/seo/StructuredData";
import { getFaqJsonLd, getProductJsonLd } from "@/lib/seo/json-ld";

import { PakkettenContent } from "./PakkettenContent";

export const metadata = createMetadata({
  title: "Pakketten",
  description:
    "Indicatieve projectpakketten als basis voor pricing, scopes en offertegesprekken.",
  path: "/pakketten",
});

export default function PakkettenPage() {
  const faqSchema = getFaqJsonLd(faqItems.slice(0, 5));
  const productSchemas = getProductJsonLd(pricingPlans);

  return (
    <>
      <PakkettenContent />
      <StructuredData data={faqSchema} />
      {productSchemas.map((schema, i) => (
        <StructuredData key={i} data={schema} />
      ))}
    </>
  );
}
