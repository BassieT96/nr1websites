import type { CaseStudy } from "@/content/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "atelier-noord",
    client: "Atelier Noord",
    sector: "Interieurstudio",
    summary:
      "Nieuwe merkpresentatie met portfolioflow en slimme intake voor designaanvragen.",
    impact: "Meer offerteaanvragen vanuit organisch verkeer en gerichtere leads.",
    year: "2026",
    services: ["Webdesign", "Development", "SEO"],
    metrics: [
      { label: "Offerteaanvragen", value: "+42%" },
      { label: "Laadtijd", value: "0.9s" },
    ],
    challenge:
      "De oude site toonde weinig autoriteit en gaf bezoekers geen duidelijke route naar een intake.",
    solution:
      "We bouwden een heldere case- en dienstenarchitectuur, een rustiger ontwerp en een intakeflow met minder frictie.",
    resultSummary:
      "Meer kwalitatieve aanvragen en een betere koppeling tussen merkpresentatie en leadgeneratie.",
  },
  {
    slug: "fysiopraktijk-lemmer",
    client: "Fysiopraktijk Lemmer",
    sector: "Zorg & lokaal",
    summary:
      "Rustige informatiestructuur en lokale SEO-landingspagina’s voor nieuwe intakegesprekken.",
    impact: "Sterkere lokale zichtbaarheid en minder afhakers op mobiel.",
    year: "2026",
    services: ["Webdesign", "SEO", "Onderhoud"],
    metrics: [
      { label: "Organisch verkeer", value: "+57%" },
      { label: "Mobiele conversie", value: "+31%" },
    ],
    challenge:
      "Belangrijke behandelingen waren lastig vindbaar en lokale zoektermen sloten slecht aan op de site-opbouw.",
    solution:
      "We voegden lokale servicepagina’s, een betere contenthiërarchie en snellere mobiele flows toe.",
    resultSummary:
      "De praktijk werd lokaal beter zichtbaar en bezoekers vonden sneller de juiste behandeling.",
  },
  {
    slug: "studio-flux",
    client: "Studio Flux",
    sector: "Creatieve dienstverlening",
    summary:
      "Strakke agency-site met modulaire cases, CTA-gestuurde pagina’s en schaalbare componenten.",
    impact:
      "Meer kwalitatieve aanvragen vanuit bedrijven met een hoger projectbudget.",
    year: "2026",
    services: ["Development", "Onderhoud", "Hosting"],
    metrics: [
      { label: "Kwalitatieve leads", value: "+28%" },
      { label: "Beheertijd", value: "-40%" },
    ],
    challenge:
      "Het team wilde sneller nieuwe cases publiceren zonder steeds layoutwerk of technische correcties nodig te hebben.",
    solution:
      "We zetten een collectie-gedreven case-architectuur neer met herbruikbare secties en centrale contentdefinities.",
    resultSummary:
      "Nieuwe cases kunnen nu veel sneller live, terwijl de site consistent en technisch schoon blijft.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
