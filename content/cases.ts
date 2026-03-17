import type { CaseStudy } from "@/content/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "fitfabriek",
    client: "FitFabriek Coaching Platform",
    sector: "Fitness & Coaching",
    summary:
      "Een supersnelle Next.js website voor een fysio- en coachingpraktijk met focus op conversie en lokale vindbaarheid.",
    impact: "Meer online boekingen en sterkere lokale zichtbaarheid in Google.",
    year: "2026",
    services: ["Webdesign", "Development", "SEO"],
    metrics: [
      { label: "Online boekingen", value: "+63%" },
      { label: "Laadtijd", value: "0.8s" },
    ],
    challenge:
      "FitFabriek had een verouderde site die slecht presteerde op mobiel en nauwelijks gevonden werd op lokale zoektermen als 'personal coach Lemmer'.",
    solution:
      "We bouwden een moderne Next.js site met snelle laadtijden, duidelijke CTA-structuur en gerichte lokale SEO-landingspagina's per dienst.",
    resultSummary:
      "Binnen drie maanden verdubbelde het aantal organische bezoekers en stegen de online boekingen met meer dan 60%.",
  },
  {
    slug: "studio-flux",
    client: "Studio Flux Architecten",
    sector: "Architectuur & Interieur",
    summary:
      "Een visueel rijke portfoliowebsite met geavanceerde animaties voor een toonaangevend architectenbureau.",
    impact: "Meer kwalitatieve aanvragen vanuit bedrijven met een hoger projectbudget.",
    year: "2026",
    services: ["Webdesign", "Development", "Onderhoud"],
    metrics: [
      { label: "Kwalitatieve leads", value: "+28%" },
      { label: "Beheertijd", value: "-40%" },
    ],
    challenge:
      "Het team wilde sneller nieuwe projecten publiceren zonder steeds layoutwerk of technische correcties nodig te hebben.",
    solution:
      "We zetten een collectie-gedreven case-architectuur neer met herbruikbare secties, vloeiende animaties en centrale contentdefinities.",
    resultSummary:
      "Nieuwe projecten kunnen nu veel sneller live, terwijl de site consistent, snel en technisch schoon blijft.",
  },
  {
    slug: "atelier-noord",
    client: "Atelier Noord Conceptstore",
    sector: "Retail & E-Commerce",
    summary:
      "Een moderne e-commerce ervaring met een focus op lokale vindbaarheid en merkbeleving voor een conceptstore in Noord-Holland.",
    impact: "Meer offerteaanvragen vanuit organisch verkeer en gerichtere leads.",
    year: "2026",
    services: ["Webdesign", "Development", "SEO"],
    metrics: [
      { label: "Webshopomzet", value: "+42%" },
      { label: "Laadtijd", value: "0.9s" },
    ],
    challenge:
      "De oude site toonde weinig autoriteit, gaf bezoekers geen duidelijke route naar een aankoop en werd slecht gevonden op lokale zoektermen.",
    solution:
      "We bouwden een heldere product- en categoriestructuur, een rustiger ontwerp en een snelle checkout met minder frictie.",
    resultSummary:
      "Meer kwalitatieve bezoekers, hogere conversie en een merkpresentatie die aansluit bij de premium positionering van de winkel.",
  },
  {
    slug: "noord-west",
    client: "Noord-West Makelaardij",
    sector: "Vastgoed & Makelaardij",
    summary:
      "Een krachtig platform voor makelaars met directe Funda-koppelingen, slimme filtersystemen en een moderne interface.",
    impact: "Meer directe aanvragen en kortere doorlooptijd van woningpresentaties.",
    year: "2026",
    services: ["Webdesign", "Development", "Hosting"],
    metrics: [
      { label: "Directe aanvragen", value: "+38%" },
      { label: "Tijd per presentatie", value: "-55%" },
    ],
    challenge:
      "Het kantoor beheerde aanbod handmatig op meerdere systemen, wat leidde tot fouten, vertragingen en een onprofessionele uitstraling online.",
    solution:
      "We bouwden een geautomatiseerde woningfeed met real-time synchronisatie, een intuïtief filterinterface en een strak contactformulier per object.",
    resultSummary:
      "Woningpresentaties gaan nu razendsnel live en potentiële kopers vinden en contacten makelaars directer dan ooit.",
  },
  {
    slug: "lemmer-watersport",
    client: "Lemmer Watersport",
    sector: "Watersport & Leisure",
    summary:
      "Beleving en techniek komen samen in deze snelle website voor een lokale watersportspecialist met verhuur, verkoop en service.",
    impact: "Meer verhuurboekingen via de website en betere zichtbaarheid in de regio.",
    year: "2026",
    services: ["Webdesign", "Development", "SEO"],
    metrics: [
      { label: "Verhuurboekingen", value: "+51%" },
      { label: "Organisch verkeer", value: "+44%" },
    ],
    challenge:
      "De bestaande site was traag, niet mobiel-vriendelijk en had geen online boekingsflow — terwijl de meeste klanten via hun telefoon zoeken.",
    solution:
      "We ontwierpen een sfeervolle, snelle site met een duidelijke scheiding tussen verhuur, verkoop en service, aangevuld met een eenvoudig boekingsformulier.",
    resultSummary:
      "Meer bezoekers boeken direct online, de merkbeleving sluit aan op de premium watersportervaring en de site presteert uitstekend op mobiel.",
  },
  {
    slug: "vriesland-logistiek",
    client: "Vriesland Logistiek",
    sector: "Transport & Logistiek",
    summary:
      "Een strakke, corporate website voor een toonaangevend transportbedrijf in de regio met focus op B2B-leadgeneratie.",
    impact: "Meer offerteaanvragen van zakelijke klanten en een professionelere uitstraling.",
    year: "2026",
    services: ["Webdesign", "Development", "SEO"],
    metrics: [
      { label: "B2B-offerteaanvragen", value: "+47%" },
      { label: "Bouncepercentage", value: "-33%" },
    ],
    challenge:
      "De oude site oogde verouderd, communiceerde diensten onduidelijk en converteerde nauwelijks zakelijke bezoekers naar daadwerkelijke aanvragen.",
    solution:
      "We bouwden een heldere dienstenarchitectuur, een professioneel ontwerp met sterk kleurgebruik en een directe offerte-CTA op elke dienstenpagina.",
    resultSummary:
      "Zakelijke klanten begrijpen het aanbod sneller, nemen eerder contact op en de site versterkt de marktpositie van Vriesland Logistiek in de regio.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
