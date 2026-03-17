import dynamic from "next/dynamic";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/marketing/PageHero";
import { DienstenServiceGrid } from "@/components/marketing/DienstenServiceGrid";

// Below-fold sections — code-split
const DienstenVoordelen = dynamic(
  () => import("@/components/marketing/DienstenSections").then((m) => m.DienstenVoordelen),
  { loading: () => <div className="deferred-section" /> }
);
const DienstenCTA = dynamic(
  () => import("@/components/marketing/DienstenSections").then((m) => m.DienstenCTA),
  { loading: () => <div className="deferred-section" /> }
);

export const metadata = createMetadata({
  title: "Diensten",
  description: "Wij helpen bedrijven met professionele digitale oplossingen die resultaat opleveren. Van strategie en design tot ontwikkeling en optimalisatie.",
  path: "/diensten",
});

export default function DienstenPage() {
  return (
    <div className="theme-dark">
      <PageHero
        eyebrow="Onze diensten"
        title="Onze diensten"
        description="Wij helpen bedrijven met professionele digitale oplossingen die resultaat opleveren. Van strategie en design tot ontwikkeling en optimalisatie."
      />
      <DienstenServiceGrid />
      <DienstenVoordelen />
      <DienstenCTA />
    </div>
  );
}
