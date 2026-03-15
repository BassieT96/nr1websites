import {
  Blocks,
  ChartNoAxesCombined,
  Code2,
  Globe,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import type { ServiceItem } from "@/content/types";

export const services: ServiceItem[] = [
  {
    slug: "webdesign",
    title: "Webdesign",
    shortTitle: "Webdesign",
    summary:
      "Doordachte interfaces met sterke hiërarchie, duidelijke call-to-actions en een premium uitstraling.",
    description:
      "We vertalen je merk naar een visuele richting die rust uitstraalt, vertrouwen wint en bezoekers naar een volgende stap beweegt.",
    outcome: "Meer vertrouwen in de eerste seconden van een bezoek.",
    idealFor:
      "Merken die sterker willen positioneren en visueel volwassener willen overkomen.",
    featured: true,
    icon: Sparkles,
    deliverables: [
      "Positionering en wireframes",
      "UI design en component library",
      "Designregels voor toekomstige pagina’s",
    ],
    stats: [
      { label: "Sprint", value: "1-2 weken" },
      { label: "Focus", value: "UX + merk" },
    ],
  },
  {
    slug: "development",
    title: "Development",
    shortTitle: "Development",
    summary:
      "Supersnelle websites in Next.js, technisch netjes opgebouwd en klaar voor groei.",
    description:
      "Van interactieve landingspagina’s tot complete marketingwebsites: de codebasis blijft schoon, uitbreidbaar en onderhoudbaar.",
    outcome: "Een robuuste website die snel laadt en prettig beheerd kan worden.",
    idealFor:
      "Bedrijven die kwaliteit willen zonder technische schuld op te bouwen.",
    featured: true,
    icon: Code2,
    deliverables: [
      "Next.js App Router implementatie",
      "TypeScript, componentarchitectuur en SEO-basis",
      "Performance-optimalisatie en QA",
    ],
    stats: [
      { label: "Stack", value: "Next.js 16" },
      { label: "Focus", value: "Snelheid" },
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    shortTitle: "SEO",
    summary:
      "Technische en on-page SEO om beter vindbaar te worden zonder een logge website te bouwen.",
    description:
      "We leggen een sterke basis met metadata, contentstructuur, interne links en pagina’s die zoekintentie ondersteunen.",
    outcome: "Meer relevant verkeer vanuit zoekmachines en lokaal beter zichtbaar.",
    idealFor:
      "Ondernemers die structureel gevonden willen worden op de juiste zoektermen.",
    featured: true,
    icon: ChartNoAxesCombined,
    deliverables: [
      "Metadata, sitemap en structured data",
      "Content- en pagina-advies",
      "Technische SEO checks en doorlopende verbeteringen",
    ],
    stats: [
      { label: "Resultaat", value: "Meer organisch bereik" },
      { label: "Scope", value: "Technisch + content" },
    ],
  },
  {
    slug: "onderhoud",
    title: "Onderhoud",
    shortTitle: "Onderhoud",
    summary:
      "Doorlopend onderhoud, kleine verbeteringen en snelle support zodat je website betrouwbaar blijft.",
    description:
      "Wij monitoren updates, lossen issues op en zorgen dat de site doorlopend veilig, snel en actueel blijft.",
    outcome: "Rust, continuiteit en een website die niet stilvalt na livegang.",
    idealFor:
      "Teams die een vast aanspreekpunt willen voor support en technische doorontwikkeling.",
    featured: true,
    icon: ShieldCheck,
    deliverables: [
      "Updates, backups en technische monitoring",
      "Performance- en contentverbeteringen",
      "Vaste supportlijn voor vragen of nieuwe wensen",
    ],
    stats: [
      { label: "Reactietijd", value: "< 1 werkdag" },
      { label: "Model", value: "Retainer" },
    ],
  },
  {
    slug: "hosting",
    title: "Hosting & performance",
    shortTitle: "Hosting",
    summary:
      "Betrouwbare deployment, uptime en caching-inrichting voor een snelle productieomgeving.",
    description:
      "We adviseren of beheren de hostinglaag, richten deployment slim in en bewaken performance in productie.",
    outcome: "Een site die ook na piekverkeer snel en stabiel blijft.",
    idealFor:
      "Bedrijven die zekerheid willen rondom livegang en schaalbaarheid.",
    featured: false,
    icon: Globe,
    deliverables: [
      "Deployment-inrichting",
      "Caching en performance monitoring",
      "Beheeradvies of volledig technisch beheer",
    ],
    stats: [
      { label: "Uptime", value: "99.9%" },
      { label: "Focus", value: "Stabiliteit" },
    ],
  },
  {
    slug: "website-laten-maken",
    title: "Website laten maken",
    shortTitle: "Nieuwe website",
    summary:
      "Een complete website-aanpak van strategie en ontwerp tot livegang en support.",
    description:
      "Voor ondernemers die het hele traject willen uitbesteden met een heldere planning, vaste contactmomenten en één partner.",
    outcome:
      "Een professionele website zonder losse schakels of onduidelijke overdrachten.",
    idealFor:
      "Ondernemers die een nieuwe website willen laten bouwen zonder ruis in het proces.",
    featured: false,
    icon: Blocks,
    deliverables: [
      "Strategie, copyrichting en structuur",
      "Design, development en livegang",
      "Ondersteuning na oplevering",
    ],
    stats: [
      { label: "Traject", value: "Van A tot Z" },
      { label: "Samenwerking", value: "1 aanspreekpunt" },
    ],
  },
];

export const featuredServices = services.filter((service) => service.featured);

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
