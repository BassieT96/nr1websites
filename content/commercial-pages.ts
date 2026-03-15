import type { CommercialPage } from "@/content/types";

export const commercialPages: CommercialPage[] = [
  {
    slug: "websites",
    path: "/websites",
    title: "Websites",
    eyebrow: "Commerciële hoofdpagina",
    description:
      "Hoofdpagina voor websiteprojecten, gericht op ondernemers die een professionele site willen laten bouwen met focus op vertrouwen, snelheid en conversie.",
    intro:
      "Deze pagina functioneert als commerciële servicehub voor design, development, conversie en onderhoud. Vanuit hier stuur je bezoekers door naar specifieke intentie- of doelgroep-pagina’s.",
    searchIntent:
      "Bezoekers vergelijken aanbieders voor het laten maken of vernieuwen van een website.",
    audience:
      "ZZP’ers, kleine bedrijven en lokale ondernemers die een websitepartner zoeken.",
    primaryCta: {
      href: "/contact",
      label: "Vraag een voorstel aan",
    },
    secondaryCta: {
      href: "/cases",
      label: "Bekijk cases",
    },
    sections: [
      "Hero met propositie en trust indicators",
      "Waarom een nieuwe website nu rendement oplevert",
      "Dienstenblok: webdesign, development, conversie, onderhoud",
      "Uitgelichte cases",
      "FAQ en contact CTA",
    ],
    internalLinks: [
      { href: "/cases", label: "Cases" },
      { href: "/diensten/webdesign", label: "Webdesign" },
      { href: "/diensten/development", label: "Development" },
      { href: "/oplossingen/conversiegerichte-website", label: "Conversiegerichte website" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    slug: "seo-groei",
    path: "/seo-groei",
    title: "SEO & Groei",
    eyebrow: "Commerciële hoofdpagina",
    description:
      "Servicehub voor SEO, organische groei, lokale landingspagina’s en websites die vindbaarheid vanaf de basis meenemen.",
    intro:
      "Deze pagina verbindt technische SEO, contentstructuur en lokale schaalpagina’s. Ideaal als ingang voor bezoekers met groei- en leaddoelen.",
    searchIntent:
      "Bezoekers zoeken een partij die websites bouwt met SEO als groeikanaal, niet als losse afterthought.",
    audience:
      "Ondernemers die beter gevonden willen worden en meer aanvragen uit organisch verkeer willen halen.",
    primaryCta: {
      href: "/contact",
      label: "Bespreek SEO-kansen",
    },
    secondaryCta: {
      href: "/locaties",
      label: "Bekijk lokale pagina’s",
    },
    sections: [
      "Hero met groei- en zichtbaarheidshoek",
      "Uitleg SEO-basis in websiteprojecten",
      "Lokale SEO en nichepagina’s",
      "Cases met organische resultaten",
      "CTA naar intake of groeiscan",
    ],
    internalLinks: [
      { href: "/diensten/seo", label: "SEO" },
      { href: "/locaties", label: "Locaties" },
      { href: "/oplossingen/seo-website-laten-maken", label: "SEO website laten maken" },
      { href: "/cases", label: "Cases" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    slug: "voor-zzpers",
    path: "/voor-zzpers",
    title: "Voor ZZP’ers",
    eyebrow: "Doelgroeppagina",
    description:
      "Doelgroeppagina voor zelfstandigen die een professionele website nodig hebben zonder log proces of overbodige complexiteit.",
    intro:
      "Deze pagina adresseert snelheid, duidelijkheid en betaalbare groei. De focus ligt op geloofwaardigheid, vindbaarheid en een website die direct werk oplevert.",
    searchIntent:
      "ZZP’ers zoeken een websitepartner die hun situatie begrijpt en snel resultaat levert.",
    audience: "Zelfstandigen en solo-ondernemers in diensten, coaching, creatief en lokaal werk.",
    primaryCta: {
      href: "/contact",
      label: "Plan een kennismaking",
    },
    secondaryCta: {
      href: "/branches/website-voor-zzp",
      label: "Bekijk ZZP-landingspagina",
    },
    sections: [
      "Hero met herkenbare ZZP-pijnpunten",
      "Wat een goede website voor een ZZP’er moet doen",
      "Compact proces en prijsrichting",
      "Cases of voorbeelden",
      "CTA naar intakeformulier",
    ],
    internalLinks: [
      { href: "/branches/website-voor-zzp", label: "Website voor zzp" },
      { href: "/websites", label: "Websites" },
      { href: "/diensten/website-laten-maken", label: "Website laten maken" },
      { href: "/cases", label: "Cases" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    slug: "voor-kleine-bedrijven",
    path: "/voor-kleine-bedrijven",
    title: "Voor Kleine Bedrijven",
    eyebrow: "Doelgroeppagina",
    description:
      "Doelgroeppagina voor kleine bedrijven die online professioneler willen overkomen en meer leads uit hun website willen halen.",
    intro:
      "Deze pagina adresseert schaalbaarheid, teamvertrouwen en een website die meegroeit met nieuwe diensten, pagina’s en campagnes.",
    searchIntent:
      "Kleine bedrijven zoeken een professionele websiteoplossing die zowel commercieel als technisch volwassen voelt.",
    audience:
      "Lokale bedrijven en kleine teams die hun bestaande website willen verbeteren of vervangen.",
    primaryCta: {
      href: "/contact",
      label: "Bespreek jullie website",
    },
    secondaryCta: {
      href: "/branches/website-voor-kleine-bedrijven",
      label: "Bekijk bedrijfspagina",
    },
    sections: [
      "Hero met bedrijfsmatige positionering",
      "Waarom veel kleine bedrijven online kansen laten liggen",
      "Website-opbouw voor leadgeneratie",
      "Cases en bewijs",
      "CTA naar gesprek of offerte",
    ],
    internalLinks: [
      {
        href: "/branches/website-voor-kleine-bedrijven",
        label: "Website voor kleine bedrijven",
      },
      { href: "/websites", label: "Websites" },
      { href: "/seo-groei", label: "SEO & Groei" },
      { href: "/cases", label: "Cases" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    slug: "voor-startende-bedrijven",
    path: "/voor-startende-bedrijven",
    title: "Voor Startende Bedrijven",
    eyebrow: "Doelgroeppagina",
    description:
      "Doelgroeppagina voor startende bedrijven die met hun eerste serieuze website direct professioneel en geloofwaardig voor de dag willen komen.",
    intro:
      "Deze pagina adresseert de behoefte aan een sterke eerste indruk, heldere propositie en een website die niet alleen netjes oogt, maar ook de eerste aanvragen ondersteunt.",
    searchIntent:
      "Startende bedrijven zoeken een websitepartner die helpt om snel professioneel online te staan en een geloofwaardige basis neer te zetten.",
    audience:
      "Startende bedrijven, startups en nieuwe ondernemers die hun eerste commerciële website nodig hebben.",
    primaryCta: {
      href: "/contact",
      label: "Plan een strategiesessie",
    },
    secondaryCta: {
      href: "/websites",
      label: "Bekijk website-aanpak",
    },
    sections: [
      "Hero met starterspropositie",
      "Waarom een eerste website direct vertrouwen moet opbouwen",
      "Wat startende bedrijven nodig hebben in structuur en copy",
      "Cases of voorbeeldsituaties",
      "CTA naar gesprek of voorstel",
    ],
    internalLinks: [
      { href: "/websites", label: "Websites" },
      {
        href: "/oplossingen/conversiegerichte-website",
        label: "Conversiegerichte website",
      },
      { href: "/cases", label: "Cases" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function getCommercialPageBySlug(slug: string) {
  return commercialPages.find((page) => page.slug === slug);
}
