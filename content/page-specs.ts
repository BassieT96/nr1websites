import type { PageSpec } from "@/content/types";

export const pageSpecs: PageSpec[] = [
  {
    path: "/",
    group: "core",
    title: "Home",
    description:
      "Merk- en categoriepagina voor ondernemers die een modern webbureau vergelijken op uitstraling, snelheid, lokale SEO en conversie.",
    searchIntent:
      "Brede commerciële intentie rond webdesign, website laten maken en online groei.",
    audience:
      "ZZP’ers, starters en kleine bedrijven die een professionele websitepartner zoeken.",
    mainMessage:
      "nr1websites.nl bouwt snelle, moderne websites die professioneel ogen, lokaal beter gevonden worden en meer aanvragen opleveren.",
    primaryCta: {
      href: "/contact",
      label: "Plan gratis strategiesessie",
    },
    secondaryCta: {
      href: "/cases",
      label: "Bekijk cases",
    },
    sections: [
      "Hero met sterke propositie en primaire CTA",
      "Social proof met resultaten, reviews en regiovertrouwen",
      "Segmenten voor zzp’ers, starters en kleine bedrijven",
      "Voordelen: snelheid, uitstraling, lokale vindbaarheid, meer aanvragen",
      "Pakketten of instaprichtingen",
      "Cases, werkwijze, FAQ en contact CTA",
    ],
    internalLinks: [
      { href: "/websites", label: "Websites" },
      { href: "/seo-groei", label: "SEO & Groei" },
      { href: "/voor-zzpers", label: "Voor ZZP’ers" },
      {
        href: "/voor-startende-bedrijven",
        label: "Voor Startende Bedrijven",
      },
      {
        href: "/voor-kleine-bedrijven",
        label: "Voor Kleine Bedrijven",
      },
      { href: "/cases", label: "Cases" },
      { href: "/contact", label: "Contact" },
    ],
    structuredData: ["Organization", "LocalBusiness", "WebSite"],
    contentType: "Cornerstone homepage",
    reusability:
      "Herbruikbaar als premium agency-homepage template met lokale trustlaag.",
  },
  {
    path: "/websites",
    group: "commercial",
    title: "Websites",
    description:
      "Commerciële hoofdpagina voor bedrijven die een moderne website willen laten bouwen of hun huidige website willen vervangen.",
    searchIntent:
      "Website laten maken of professionele website vernieuwen met focus op resultaat.",
    audience:
      "Ondernemers, zzp’ers en kleine bedrijven die een nieuwe commerciële website zoeken.",
    mainMessage:
      "Een goede website moet niet alleen mooi zijn, maar professioneel aanvoelen, snel laden en bezoekers richting contact sturen.",
    primaryCta: {
      href: "/contact",
      label: "Vraag een voorstel aan",
    },
    secondaryCta: {
      href: "/cases",
      label: "Bekijk cases",
    },
    sections: [
      "Hero met websitepropositie",
      "Waarom veel websites te weinig opleveren",
      "Aanpak: strategie, design, development",
      "Resultaatblokken en cases",
      "FAQ en sterke contact CTA",
    ],
    internalLinks: [
      { href: "/diensten/webdesign", label: "Webdesign" },
      { href: "/diensten/development", label: "Development" },
      {
        href: "/oplossingen/conversiegerichte-website",
        label: "Conversiegerichte website",
      },
      { href: "/cases", label: "Cases" },
      { href: "/contact", label: "Contact" },
    ],
    structuredData: ["Service", "FAQPage", "BreadcrumbList"],
    contentType: "Commercial service hub",
    reusability:
      "Herbruikbaar als brede servicehub voor websiteprojecten per klantsite.",
  },
  {
    path: "/seo-groei",
    group: "commercial",
    title: "SEO & Groei",
    description:
      "Commerciële groeipagina voor ondernemers die een website willen met vindbaarheid, lokale SEO en schaalbare content als fundament.",
    searchIntent:
      "Website laten maken met SEO-focus of online groeien via organisch verkeer.",
    audience:
      "Ondernemers die beter gevonden willen worden en meer aanvragen uit Google willen halen.",
    mainMessage:
      "SEO moet geen losse nagedachte zijn, maar onderdeel van de websitestructuur, contentopbouw en lokale groeistrategie.",
    primaryCta: {
      href: "/contact",
      label: "Bespreek SEO-kansen",
    },
    secondaryCta: {
      href: "/locaties",
      label: "Bekijk lokale pagina’s",
    },
    sections: [
      "Hero met SEO-first belofte",
      "Technische SEO en contentstructuur",
      "Lokale landingspagina’s en niches",
      "Organische case-resultaten",
      "Groeiscan en contact CTA",
    ],
    internalLinks: [
      { href: "/diensten/seo", label: "SEO" },
      { href: "/locaties", label: "Locaties" },
      {
        href: "/oplossingen/seo-website-laten-maken",
        label: "SEO website laten maken",
      },
      { href: "/cases", label: "Cases" },
      { href: "/contact", label: "Contact" },
    ],
    structuredData: ["Service", "FAQPage", "BreadcrumbList"],
    contentType: "Commercial growth hub",
    reusability:
      "Herbruikbaar als SEO/growth-hub voor agency-sites met lokale SEO-focus.",
  },
  {
    path: "/voor-zzpers",
    group: "audience",
    title: "Voor ZZP’ers",
    description:
      "Doelgroeppagina voor zelfstandigen die snel een professionele website nodig hebben die vertrouwen opbouwt en werk oplevert.",
    searchIntent:
      "Websiteoplossing voor zzp’ers en freelancers met duidelijke commerciële focus.",
    audience:
      "Zelfstandigen, freelancers, coaches en lokale dienstverleners.",
    mainMessage:
      "ZZP’ers hebben geen log traject nodig, maar een website die duidelijk maakt wat ze doen en sneller tot aanvragen leidt.",
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
      "Wat een ZZP-website moet doen",
      "Compacte aanpak en prijsrichting",
      "Cases en voorbeeldsituaties",
      "FAQ en contact CTA",
    ],
    internalLinks: [
      { href: "/branches/website-voor-zzp", label: "Website voor zzp" },
      { href: "/websites", label: "Websites" },
      { href: "/diensten/website-laten-maken", label: "Website laten maken" },
      { href: "/cases", label: "Cases" },
      { href: "/contact", label: "Contact" },
    ],
    structuredData: ["Service", "FAQPage", "BreadcrumbList"],
    contentType: "Audience landing page",
    reusability:
      "Herbruikbaar als doelgroeptemplate voor zzp, freelancers en solo-ondernemers.",
  },
  {
    path: "/voor-startende-bedrijven",
    group: "audience",
    title: "Voor Startende Bedrijven",
    description:
      "Doelgroeppagina voor startende bedrijven die een sterke eerste website nodig hebben om geloofwaardig de markt op te gaan.",
    searchIntent:
      "Website laten maken voor een startend bedrijf of nieuwe onderneming.",
    audience:
      "Startups, nieuwe dienstverleners en beginnende bedrijven die hun eerste serieuze website nodig hebben.",
    mainMessage:
      "Voor startende bedrijven moet een eerste website vooral vertrouwen versnellen, de propositie helder maken en snel de eerste aanvragen ondersteunen.",
    primaryCta: {
      href: "/contact",
      label: "Plan een strategiesessie",
    },
    secondaryCta: {
      href: "/websites",
      label: "Bekijk website-aanpak",
    },
    sections: [
      "Hero voor startende bedrijven",
      "Waarom je eerste website direct goed moet staan",
      "Wat starters nodig hebben: helder verhaal, trust en snelheid",
      "Pakketten of instaproute",
      "Cases, FAQ en contact CTA",
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
    structuredData: ["Service", "FAQPage", "BreadcrumbList"],
    contentType: "Audience landing page",
    reusability:
      "Herbruikbaar als template voor vroege-fase bedrijven of startup-achtige proposities.",
  },
  {
    path: "/voor-kleine-bedrijven",
    group: "audience",
    title: "Voor Kleine Bedrijven",
    description:
      "Doelgroeppagina voor kleine bedrijven die online professioneler willen overkomen en meer aanvragen willen genereren.",
    searchIntent:
      "Websiteoplossing voor kleine bedrijven met commerciële en lokale groeifocus.",
    audience:
      "Lokale bedrijven en kleine teams die hun bestaande website willen verbeteren of vervangen.",
    mainMessage:
      "Kleine bedrijven hebben baat bij een website die het bedrijf volwassener positioneert en tegelijk schaalbaar is voor nieuwe diensten en pagina’s.",
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
      "Waarom kleine bedrijven online kansen laten liggen",
      "Website-opbouw voor leadgeneratie",
      "Cases, onderhoud en groei",
      "FAQ en contact CTA",
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
    structuredData: ["Service", "FAQPage", "BreadcrumbList"],
    contentType: "Audience landing page",
    reusability:
      "Herbruikbaar als doelgroeptemplate voor lokale mkb- en small business-proposities.",
  },
  {
    path: "/cases",
    group: "proof",
    title: "Cases",
    description:
      "Bewijspagina voor bezoekers die voorbeelden en resultaten willen zien voordat ze contact opnemen.",
    searchIntent:
      "Portfolio, resultaten en bewijs van eerdere websiteprojecten bekijken.",
    audience:
      "Warme bezoekers die nog bewijs of context nodig hebben voordat ze contact opnemen.",
    mainMessage:
      "Cases laten zien dat de combinatie van design, techniek en commerciële structuur in de praktijk meer vertrouwen en betere aanvragen oplevert.",
    primaryCta: {
      href: "/contact",
      label: "Plan een projectgesprek",
    },
    secondaryCta: {
      href: "/websites",
      label: "Bekijk diensten",
    },
    sections: [
      "Hero met bewijspositie",
      "Case-overzicht",
      "Meetbare resultaten en context",
      "Testimonials",
      "Contact CTA",
    ],
    internalLinks: [
      { href: "/websites", label: "Websites" },
      { href: "/seo-groei", label: "SEO & Groei" },
      { href: "/contact", label: "Contact" },
    ],
    structuredData: ["CollectionPage", "ItemList", "BreadcrumbList"],
    contentType: "Proof hub",
    reusability:
      "Herbruikbaar als centrale bewijs- en portfoliohub voor iedere agency-site.",
  },
  {
    path: "/over-ons",
    group: "trust",
    title: "Over",
    description:
      "Vertrouwenspagina voor bezoekers die de partij, werkwijze en betrouwbaarheid achter het aanbod willen beoordelen.",
    searchIntent:
      "Meer weten over het bureau, de aanpak en de persoon of partij achter de website.",
    audience:
      "Bezoekers die inhoudelijk geïnteresseerd zijn, maar eerst de partij willen vertrouwen.",
    mainMessage:
      "Deze agency combineert een rustig premium gevoel met technische degelijkheid en een commerciële focus op aanvragen en lokale vindbaarheid.",
    primaryCta: {
      href: "/contact",
      label: "Kennismaken",
    },
    secondaryCta: {
      href: "/websites",
      label: "Bekijk diensten",
    },
    sections: [
      "Hero met positionering",
      "Waarom dit bureau anders werkt",
      "Werkwijze en waarden",
      "Bewijs, testimonials en regio",
      "Contact CTA",
    ],
    internalLinks: [
      { href: "/websites", label: "Websites" },
      { href: "/seo-groei", label: "SEO & Groei" },
      { href: "/cases", label: "Cases" },
      { href: "/contact", label: "Contact" },
    ],
    structuredData: ["AboutPage", "Organization", "BreadcrumbList"],
    contentType: "Trust page",
    reusability:
      "Herbruikbaar als over-ons template voor kleine agencies en boutique bureaus.",
  },
  {
    path: "/contact",
    group: "conversion",
    title: "Contact",
    description:
      "Conversiepagina voor bezoekers die klaar zijn om een strategiesessie, websitescan of offerte-aanvraag te starten.",
    searchIntent:
      "Direct contact opnemen met het bureau of een intake starten.",
    audience:
      "Warme bezoekers met concrete interesse in een website, scan of voorstel.",
    mainMessage:
      "Contact opnemen moet laagdrempelig voelen en direct duidelijk maken welke stap volgt na een strategiesessie, scan of aanvraag.",
    primaryCta: {
      href: "/contact",
      label: "Verstuur aanvraag",
    },
    secondaryCta: {
      href: "/cases",
      label: "Bekijk cases",
    },
    sections: [
      "Hero met heldere contactbelofte",
      "Waarom contact nu logisch is",
      "Formulier met lage frictie",
      "Contactgegevens en regiovertrouwen",
      "Case-links voor laatste bewijslaag",
    ],
    internalLinks: [
      { href: "/websites", label: "Websites" },
      { href: "/seo-groei", label: "SEO & Groei" },
      { href: "/cases", label: "Cases" },
    ],
    structuredData: ["ContactPage", "LocalBusiness", "BreadcrumbList"],
    contentType: "Conversion page",
    reusability:
      "Herbruikbaar als contacttemplate met intakefocus voor agency- en dienstensites.",
  },
  {
    path: "/locaties/website-laten-maken-lemmer",
    group: "location",
    title: "Website laten maken Lemmer",
    description:
      "Lokale landingspagina voor ondernemers in Lemmer die een moderne, snelle en conversiegerichte website willen laten bouwen.",
    searchIntent: "Website laten maken in Lemmer.",
    audience:
      "Ondernemers en kleine bedrijven in Lemmer die een lokale websitepartner zoeken.",
    mainMessage:
      "Deze pagina koppelt lokale herkenning aan een professionele websitepropositie met focus op snelheid, vindbaarheid en aanvragen.",
    primaryCta: {
      href: "/contact",
      label: "Plan een kennismaking",
    },
    secondaryCta: {
      href: "/locaties",
      label: "Terug naar locaties",
    },
    sections: [
      "Hero met lokale zoekterm",
      "Lokale context en vertrouwen",
      "Relevante diensten en cases",
      "Waarom deze aanpak werkt voor Lemmer",
      "Contact CTA",
    ],
    internalLinks: [
      { href: "/websites", label: "Websites" },
      { href: "/diensten/website-laten-maken", label: "Website laten maken" },
      { href: "/cases", label: "Cases" },
      { href: "/contact", label: "Contact" },
    ],
    structuredData: ["Service", "LocalBusiness", "FAQPage", "BreadcrumbList"],
    contentType: "Local SEO landing page",
    reusability:
      "Herbruikbaar als plaatstemplate voor nieuwe steden en dorpen in dezelfde regio.",
  },
  {
    path: "/locaties/webdesign-lemmer",
    group: "location",
    title: "Webdesign Lemmer",
    description:
      "Lokale pagina voor ondernemers in Lemmer die vooral zoeken naar een professionelere merkpresentatie en overtuigend webdesign.",
    searchIntent: "Webdesign in Lemmer.",
    audience:
      "Ondernemers in Lemmer die beter willen overkomen en hun merk online sterker willen neerzetten.",
    mainMessage:
      "Goed webdesign in Lemmer draait niet om decoratie, maar om een sterkere eerste indruk, meer vertrouwen en duidelijkere routes naar contact.",
    primaryCta: {
      href: "/contact",
      label: "Plan een kennismaking",
    },
    secondaryCta: {
      href: "/locaties",
      label: "Terug naar locaties",
    },
    sections: [
      "Hero met lokale designpropositie",
      "Eerste indruk en merkvertrouwen",
      "Cases en visuele bewijsvoering",
      "Relevante diensten",
      "Contact CTA",
    ],
    internalLinks: [
      { href: "/diensten/webdesign", label: "Webdesign" },
      {
        href: "/locaties/website-laten-maken-lemmer",
        label: "Website laten maken Lemmer",
      },
      { href: "/cases", label: "Cases" },
      { href: "/contact", label: "Contact" },
    ],
    structuredData: ["Service", "LocalBusiness", "FAQPage", "BreadcrumbList"],
    contentType: "Local SEO landing page",
    reusability:
      "Herbruikbaar als lokale designvariant naast bredere website-laten-maken pagina’s.",
  },
  {
    path: "/locaties/website-laten-maken-friesland",
    group: "location",
    title: "Website laten maken Friesland",
    description:
      "Regiopagina voor ondernemers in Friesland die een moderne websitepartner zoeken voor design, development en SEO.",
    searchIntent: "Website laten maken in Friesland.",
    audience:
      "Bedrijven en ondernemers in Friesland met regionale zoekintentie.",
    mainMessage:
      "De regionale pagina voor Friesland moet schaal, vertrouwen en bereik combineren met lokale relevantie en een duidelijke contactroute.",
    primaryCta: {
      href: "/contact",
      label: "Plan een kennismaking",
    },
    secondaryCta: {
      href: "/locaties",
      label: "Terug naar locaties",
    },
    sections: [
      "Hero met regiopositie",
      "Waarom deze propositie werkt in Friesland",
      "Diensten, cases en lokale proof",
      "Interne links naar Lemmer en SEO-pagina’s",
      "Contact CTA",
    ],
    internalLinks: [
      { href: "/websites", label: "Websites" },
      { href: "/seo-groei", label: "SEO & Groei" },
      {
        href: "/locaties/website-laten-maken-lemmer",
        label: "Website laten maken Lemmer",
      },
      { href: "/cases", label: "Cases" },
      { href: "/contact", label: "Contact" },
    ],
    structuredData: ["Service", "LocalBusiness", "FAQPage", "BreadcrumbList"],
    contentType: "Regional SEO landing page",
    reusability:
      "Herbruikbaar als regiotemplate voor provincies of grotere servicegebieden.",
  },
  {
    path: "/branches/website-voor-zzp",
    group: "niche",
    title: "Website voor zzp",
    description:
      "Transactionele nichepagina voor zelfstandigen die direct zoeken naar een website voor hun zzp-bedrijf.",
    searchIntent: "Website voor zzp.",
    audience:
      "Zelfstandigen die direct zoeken op een specifieke combinatie van doelgroep en websitebehoefte.",
    mainMessage:
      "Deze pagina vertaalt de brede ZZP-propositie naar directe koopintentie met heldere voordelen, relevante voorbeelden en weinig afleiding.",
    primaryCta: {
      href: "/contact",
      label: "Plan een kennismaking",
    },
    secondaryCta: {
      href: "/branches",
      label: "Terug naar branches",
    },
    sections: [
      "Hero met transactionele intentie",
      "Waarom ZZP’ers online kansen missen",
      "Diensten en bewijs",
      "Prijs- of routehelderheid",
      "Contact CTA",
    ],
    internalLinks: [
      { href: "/voor-zzpers", label: "Voor ZZP’ers" },
      { href: "/websites", label: "Websites" },
      { href: "/diensten/website-laten-maken", label: "Website laten maken" },
      { href: "/contact", label: "Contact" },
    ],
    structuredData: ["Service", "FAQPage", "BreadcrumbList"],
    contentType: "Niche SEO landing page",
    reusability:
      "Herbruikbaar als nichetemplate voor doelgroep + dienst-combinaties.",
  },
  {
    path: "/branches/website-voor-kleine-bedrijven",
    group: "niche",
    title: "Website voor kleine bedrijven",
    description:
      "Transactionele nichepagina voor kleine bedrijven die een professionele en conversiegerichte website willen laten maken.",
    searchIntent: "Website voor kleine bedrijven.",
    audience:
      "Kleine bedrijven die een bredere, overtuigendere en commercieel sterkere website nodig hebben.",
    mainMessage:
      "Deze pagina vertaalt de small business-propositie naar directe intentie met focus op vertrouwen, leadgeneratie en schaalbaarheid.",
    primaryCta: {
      href: "/contact",
      label: "Plan een kennismaking",
    },
    secondaryCta: {
      href: "/branches",
      label: "Terug naar branches",
    },
    sections: [
      "Hero met directe small business-intentie",
      "Waarom kleine bedrijven online omzet laten liggen",
      "Website-opbouw en bewijs",
      "Onderhoud en groei",
      "Contact CTA",
    ],
    internalLinks: [
      {
        href: "/voor-kleine-bedrijven",
        label: "Voor Kleine Bedrijven",
      },
      { href: "/websites", label: "Websites" },
      { href: "/seo-groei", label: "SEO & Groei" },
      { href: "/contact", label: "Contact" },
    ],
    structuredData: ["Service", "FAQPage", "BreadcrumbList"],
    contentType: "Niche SEO landing page",
    reusability:
      "Herbruikbaar als doelgroeptemplate voor bedrijfsgrootte- of branche-combinaties.",
  },
  {
    path: "/oplossingen/conversiegerichte-website",
    group: "solution",
    title: "Conversiegerichte website",
    description:
      "Oplossingspagina voor bezoekers die expliciet zoeken naar meer aanvragen, minder frictie en sterkere websiteconversie.",
    searchIntent: "Conversiegerichte website laten maken.",
    audience:
      "Bedrijven die hun website primair zien als leadkanaal en niet alleen als online visitekaartje.",
    mainMessage:
      "Een conversiegerichte website combineert heldere structuur, sterk bewijs en minder frictie in de route naar contact.",
    primaryCta: {
      href: "/contact",
      label: "Plan een kennismaking",
    },
    secondaryCta: {
      href: "/oplossingen",
      label: "Terug naar oplossingen",
    },
    sections: [
      "Hero met conversiebelofte",
      "Waar websites conversie verliezen",
      "Principes van een leadgerichte opzet",
      "Cases, bewijs en CTA’s",
      "Contact CTA",
    ],
    internalLinks: [
      { href: "/websites", label: "Websites" },
      { href: "/cases", label: "Cases" },
      { href: "/diensten/webdesign", label: "Webdesign" },
      { href: "/diensten/development", label: "Development" },
      { href: "/contact", label: "Contact" },
    ],
    structuredData: ["Service", "FAQPage", "BreadcrumbList"],
    contentType: "Commercial intent landing page",
    reusability:
      "Herbruikbaar als oplossingspagina voor performance- of resultaatgerichte proposities.",
  },
  {
    path: "/oplossingen/seo-website-laten-maken",
    group: "solution",
    title: "SEO website laten maken",
    description:
      "Oplossingspagina voor ondernemers die een nieuwe website willen met SEO, contentstructuur en lokale groeimogelijkheden vanaf de basis.",
    searchIntent: "SEO website laten maken.",
    audience:
      "Bedrijven die een nieuwe website willen zonder later alsnog de SEO-basis te moeten herstellen.",
    mainMessage:
      "Een SEO-first website begint bij techniek, contentopbouw en schaalbare paginaarchitectuur, niet pas na livegang.",
    primaryCta: {
      href: "/contact",
      label: "Plan een kennismaking",
    },
    secondaryCta: {
      href: "/oplossingen",
      label: "Terug naar oplossingen",
    },
    sections: [
      "Hero met SEO-first positionering",
      "Waarom SEO al in de websitebasis moet zitten",
      "Technische en inhoudelijke bouwblokken",
      "Lokale en nichegroei",
      "Contact CTA",
    ],
    internalLinks: [
      { href: "/seo-groei", label: "SEO & Groei" },
      { href: "/diensten/seo", label: "SEO" },
      { href: "/locaties", label: "Locaties" },
      { href: "/cases", label: "Cases" },
      { href: "/contact", label: "Contact" },
    ],
    structuredData: ["Service", "FAQPage", "BreadcrumbList"],
    contentType: "Commercial intent landing page",
    reusability:
      "Herbruikbaar als SEO-oplossingstemplate voor groeigerichte klantprojecten.",
  },
  {
    path: "/locaties/website-onderhoud-friesland",
    group: "location",
    title: "Website onderhoud Friesland",
    description:
      "Regiopagina voor bedrijven in Friesland die support, updates en doorontwikkeling zoeken voor hun bestaande website.",
    searchIntent: "Website onderhoud in Friesland.",
    audience:
      "Bedrijven met een bestaande website die een vaste technische partner zoeken.",
    mainMessage:
      "Onderhoud moet niet voelen als losse support, maar als een betrouwbare partner voor updates, snelheid en doorontwikkeling.",
    primaryCta: {
      href: "/contact",
      label: "Plan een kennismaking",
    },
    secondaryCta: {
      href: "/locaties",
      label: "Terug naar locaties",
    },
    sections: [
      "Hero met onderhoudspropositie",
      "Wat bedrijven nodig hebben na livegang",
      "Retainer, support en optimalisatie",
      "Relevante diensten en cases",
      "Contact CTA",
    ],
    internalLinks: [
      { href: "/diensten/onderhoud", label: "Onderhoud" },
      { href: "/diensten/hosting", label: "Hosting" },
      { href: "/cases", label: "Cases" },
      { href: "/contact", label: "Contact" },
    ],
    structuredData: ["Service", "LocalBusiness", "FAQPage", "BreadcrumbList"],
    contentType: "Regional SEO landing page",
    reusability:
      "Herbruikbaar als regiotemplate voor onderhoud, support en retainer-intenties.",
  },
];

export function getPageSpecByPath(path: string) {
  return pageSpecs.find((page) => page.path === path);
}
