import type { CollectionLandingPage } from "@/content/types";

export const solutionPages: CollectionLandingPage[] = [
  {
    slug: "conversiegerichte-website",
    eyebrow: "Oplossingspagina",
    title: "Conversiegerichte website",
    description:
      "Landingspagina voor bezoekers die niet alleen een mooie website willen, maar vooral meer aanvragen en betere conversie.",
    intro:
      "Deze pagina draait om commerciële performance: duidelijke CTA’s, slimme sectievolgorde, trust en minder frictie in het aanvraagproces.",
    valuePoints: [
      "Hero en aanbod direct afgestemd op intentie",
      "Sectievolgorde die bezwaren wegneemt",
      "Sterke CTA’s en duidelijker contactflows",
    ],
    relatedServices: ["webdesign", "development", "seo"],
    seoTitle: "Conversiegerichte website laten maken",
    seoDescription:
      "SEO-landingspagina voor bedrijven die een conversiegerichte website willen laten maken met focus op leads en aanvragen.",
  },
  {
    slug: "seo-website-laten-maken",
    eyebrow: "Oplossingspagina",
    title: "SEO website laten maken",
    description:
      "Landingspagina voor ondernemers die een website willen laten bouwen met SEO als fundamenteel onderdeel van de opzet.",
    intro:
      "Deze pagina koppelt websitebouw aan vindbaarheid vanaf de basis: technische SEO, contentstructuur en schaalbare landingspagina’s.",
    valuePoints: [
      "SEO-basis in structuur, copy en techniek",
      "Betere startpositie voor lokale en nichepagina’s",
      "Minder herstelwerk achteraf",
    ],
    relatedServices: ["seo", "development", "webdesign"],
    seoTitle: "SEO website laten maken",
    seoDescription:
      "SEO-landingspagina voor bedrijven die een website laten maken met techniek, contentstructuur en vindbaarheid vanaf de basis.",
  },
];

export function getSolutionPageBySlug(slug: string) {
  return solutionPages.find((item) => item.slug === slug);
}
