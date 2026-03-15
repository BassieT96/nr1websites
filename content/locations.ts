import type { CollectionLandingPage } from "@/content/types";

export const locationPages: CollectionLandingPage[] = [
  {
    slug: "website-laten-maken-lemmer",
    eyebrow: "Locatiepagina",
    title: "Website laten maken Lemmer",
    description:
      "Lokale landingspagina voor ondernemers in Lemmer die een professionele website willen laten maken met focus op vindbaarheid en aanvragen.",
    intro:
      "Deze pagina combineert lokale relevantie met een duidelijke commerciële propositie. Het doel is laagdrempelige herkenning voor ondernemers in Lemmer.",
    valuePoints: [
      "Lokale trust en herkenbare context",
      "Directe koppeling naar websiteprojecten en cases",
      "Geschikt als template voor andere plaatsen",
    ],
    relatedServices: ["webdesign", "development", "seo"],
    seoTitle: "Website laten maken Lemmer",
    seoDescription:
      "Lokale landingspagina voor ondernemers in Lemmer die een website willen laten maken.",
  },
  {
    slug: "webdesign-lemmer",
    eyebrow: "Locatiepagina",
    title: "Webdesign Lemmer",
    description:
      "Lokale webdesign-pagina voor ondernemers in Lemmer die hun merk professioneler en overtuigender online willen presenteren.",
    intro:
      "Deze pagina focust op visuele kwaliteit, merkuitstraling en vertrouwen voor bedrijven die lokaal willen opvallen.",
    valuePoints: [
      "Sterkere eerste indruk en merkpresentatie",
      "Lokale relevantie zonder dunne content",
      "Goede combinatie met cases en contact CTA",
    ],
    relatedServices: ["webdesign", "development"],
    seoTitle: "Webdesign Lemmer",
    seoDescription:
      "Lokale landingspagina voor webdesign in Lemmer binnen dezelfde agency-basis.",
  },
  {
    slug: "website-laten-maken-friesland",
    eyebrow: "Regiopagina",
    title: "Website laten maken Friesland",
    description:
      "Regiopagina voor ondernemers in Friesland die een moderne websitepartner zoeken voor design, development en SEO.",
    intro:
      "Deze pagina werkt op regionaal niveau en maakt de stap van lokale vindbaarheid naar bredere naamsbekendheid in Friesland.",
    valuePoints: [
      "Brede regionale intentie afvangen",
      "Doorlinken naar plaats- en branchepagina’s",
      "Sterke combinatie met cases en SEO-aanpak",
    ],
    relatedServices: ["development", "webdesign", "seo"],
    seoTitle: "Website laten maken Friesland",
    seoDescription:
      "Regiopagina voor bedrijven die een website willen laten maken in Friesland.",
  },
  {
    slug: "website-onderhoud-friesland",
    eyebrow: "Regiopagina",
    title: "Website onderhoud Friesland",
    description:
      "Regiopagina voor onderhoud, support en doorontwikkeling van websites in Friesland.",
    intro:
      "Deze pagina ondersteunt retainer- en onderhoudsvraagstukken voor bedrijven die een vaste technische partner zoeken.",
    valuePoints: [
      "Retainer-intentie apart adresseren",
      "Goed voor bestaande websites en supportvragen",
      "Handige upsell vanuit websiteprojecten",
    ],
    relatedServices: ["onderhoud", "hosting", "seo"],
    seoTitle: "Website onderhoud Friesland",
    seoDescription:
      "Regiopagina voor website onderhoud, support en doorontwikkeling in Friesland.",
  },
];

export function getLocationPageBySlug(slug: string) {
  return locationPages.find((item) => item.slug === slug);
}
