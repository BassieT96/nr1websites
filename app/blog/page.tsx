import { PageHero } from "@/components/marketing/PageHero";
import { PlaceholderPanel } from "@/components/marketing/PlaceholderPanel";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Basis voor toekomstige blogartikelen, inzichten en SEO-content van nr1websites.nl.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        description="Een logische volgende uitbreiding is een blog of kennisbank voor SEO, expertise-opbouw en contentmarketing."
        eyebrow="Blog"
        primaryHref="/contact"
        primaryLabel="Bespreek contentstrategie"
        title="Ruimte voor artikelen, inzichten en landingspagina’s"
      />
      <PlaceholderPanel
        description="De structuur staat klaar om later categoriepagina’s, losse artikelen en downloadbare kenniscontent toe te voegen. Daarmee groeit de site mee met SEO- en authority-doelen."
        title="Blog en kennisbank kunnen hier later op aansluiten"
      />
    </>
  );
}
