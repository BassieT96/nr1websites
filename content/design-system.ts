export type FaqItem = {
  answer: string;
  question: string;
};

export type PricingPlan = {
  ctaHref: string;
  ctaLabel: string;
  description: string;
  featured?: boolean;
  features: string[];
  price: string;
  title: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Voor wie is deze agency-site basis geschikt?",
    answer:
      "Voor webdesign- en developmentbureaus die snel een sterke commerciële website willen lanceren en daarna eenvoudig willen opschalen met cases, locatiepagina’s en doelgroepcontent.",
  },
  {
    question: "Kan dit design system worden hergebruikt voor klantprojecten?",
    answer:
      "Ja. De tokens, componenten en section layouts zijn opgezet als herbruikbare bouwstenen. Per klant kun je vooral de content, kleuren en accentdetails aanpassen zonder de structuur opnieuw uit te vinden.",
  },
  {
    question: "Is deze opzet goed voor lokale SEO en landingspagina’s?",
    answer:
      "Ja. De routestructuur en componenten zijn juist ingericht om steden, regio’s, niches en oplossingen gecontroleerd toe te voegen zonder een rommelige IA te creëren.",
  },
  {
    question: "Hoe houd je het premium zonder performance te verliezen?",
    answer:
      "Door te werken met sterke typografie, heldere contrasten, verfijnde schaduwen en lichte motion via CSS-transities in plaats van zware animatielibraries of complexe 3D-effecten.",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    title: "Starter",
    price: "Vanaf €1.950",
    description:
      "Voor zelfstandigen en kleine teams die snel een sterke basis live willen zetten.",
    features: [
      "Strategische one-page of compacte website",
      "Conversiegerichte sectie-opbouw",
      "SEO-basis en contactflow",
      "Klaar voor latere uitbreiding",
    ],
    ctaLabel: "Vraag startervoorstel aan",
    ctaHref: "/contact",
  },
  {
    title: "Growth",
    price: "Vanaf €3.950",
    description:
      "Voor bedrijven die meerdere pagina’s, cases en groeigerichte content nodig hebben.",
    features: [
      "Volledige marketingwebsite met meerdere pagina’s",
      "Cases, doelgroep- of landingspagina’s",
      "Interne linkstructuur en SEO-opbouw",
      "Design system componenten en contentblokken",
    ],
    featured: true,
    ctaLabel: "Bespreek een growth-traject",
    ctaHref: "/contact",
  },
  {
    title: "Retainer",
    price: "Vanaf €495 p/m",
    description:
      "Voor support, onderhoud en doorontwikkeling na livegang of voor bestaande websites.",
    features: [
      "Technisch onderhoud en updates",
      "Nieuwe secties, pagina’s en optimalisaties",
      "Sparring op conversie en SEO",
      "Vaste ondersteuning zonder los projectritme",
    ],
    ctaLabel: "Bespreek onderhoud",
    ctaHref: "/contact",
  },
];
