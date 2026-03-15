import type { CollectionLandingPage } from "@/content/types";

export const nichePages: CollectionLandingPage[] = [
  {
    slug: "website-voor-zzp",
    eyebrow: "Branchepagina",
    title: "Website voor zzp",
    description:
      "Gerichte landingspagina voor zelfstandigen die een website nodig hebben die vertrouwen wekt en werk oplevert.",
    intro:
      "Deze pagina is transactioneler dan de brede doelgroep-pagina voor ZZP’ers en focust direct op de zoekintentie rond een website voor een zelfstandige.",
    valuePoints: [
      "Herkenbare bezwaren en beperkte budgetten goed adresseren",
      "Duidelijke focus op leads en professionele uitstraling",
      "Makkelijk uit te breiden naar specifieke ZZP-branches",
    ],
    relatedServices: ["webdesign", "development", "seo"],
    seoTitle: "Website voor zzp",
    seoDescription:
      "Landingspagina voor zelfstandigen die een professionele website voor hun zzp-bedrijf willen laten maken.",
  },
  {
    slug: "website-voor-kleine-bedrijven",
    eyebrow: "Branchepagina",
    title: "Website voor kleine bedrijven",
    description:
      "Landingspagina voor kleine bedrijven die een sterkere online presentatie en meer aanvragen uit hun website willen halen.",
    intro:
      "Deze pagina ondersteunt commerciële zoekintentie rond websites voor kleine bedrijven en koppelt positionering, cases en leadgeneratie.",
    valuePoints: [
      "Geschikt voor teams met meerdere diensten of pagina’s",
      "Sterke trust-opbouw en bewijsvoering",
      "Koppeling naar onderhoud, SEO en groei",
    ],
    relatedServices: ["webdesign", "development", "onderhoud"],
    seoTitle: "Website voor kleine bedrijven",
    seoDescription:
      "Landingspagina voor kleine bedrijven die een professionele en conversiegerichte website willen laten maken.",
  },
];

export function getNichePageBySlug(slug: string) {
  return nichePages.find((item) => item.slug === slug);
}
