import { ArrowUpRight } from "lucide-react";

import type { NavigationItem } from "@/content/types";

import { siteConfig } from "@/content/settings/site";

export const navItems: NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/seo-groei", label: "SEO & Groei" },
  { href: "/cases", label: "Cases" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/nr1websites" },
  { label: "Instagram", href: "https://www.instagram.com/nr1websites" },
  { label: "E-mail", href: `mailto:${siteConfig.email}` },
];

export const heroHighlights = [
  "Strategie, design en development onder een dak",
  "Schaalbare App Router setup met TypeScript",
  "Snelle websites gebouwd voor leadgeneratie",
];

export const stats = [
  { label: "Gemiddelde oplevering", value: "4-6 weken" },
  { label: "Core Web Vitals focus", value: "< 1.5s" },
  { label: "Gem. leadgroei na relaunch", value: "+38%" },
  { label: "Support & onderhoud", value: "Doorlopend" },
];

export const heroSnapshots = [
  { label: "Startstructuur", value: "Collectie-gedreven" },
  { label: "SEO-basis", value: "Metadata + JSON-LD" },
  { label: "Tech stack", value: "Next.js 16 + TS" },
  { label: "Visuele lijn", value: "Premium minimal" },
];

export const processSteps = [
  {
    title: "Richting bepalen",
    description:
      "We scherpen je doelgroep, positionering en belangrijkste conversiedoelen aan.",
  },
  {
    title: "Ontwerpen",
    description:
      "We bouwen een visuele lijn met wireframes, componenten en duidelijke contentblokken.",
  },
  {
    title: "Ontwikkelen",
    description:
      "De site wordt opgebouwd in Next.js met focus op performance, schaalbaarheid en SEO.",
  },
  {
    title: "Doorontwikkelen",
    description:
      "Na livegang blijven we optimaliseren op inhoud, conversie en technische kwaliteit.",
  },
];

export const values = [
  {
    title: "Strategisch ontwerp",
    description:
      "Elke sectie heeft een doel: overtuigen, uitleggen of converteren. Geen decoratie zonder functie.",
  },
  {
    title: "Technische degelijkheid",
    description:
      "Een nette codebasis zorgt voor snelheid, betrouwbaarheid en eenvoudig doorbouwen.",
  },
  {
    title: "Heldere samenwerking",
    description:
      "Korte lijnen, duidelijke feedbackmomenten en geen ingewikkelde overdrachtsdocumenten.",
  },
];

export const contactReasons = [
  "Nieuwe website of complete relaunch",
  "Snellere website met betere conversie",
  "SEO-basis of doorlopende optimalisatie",
  "Onderhoud, support of hostingadvies",
];

export const pricingPreview = [
  {
    title: "Starter",
    price: "Vanaf €1.950",
    description:
      "Voor ondernemers die snel een professionele basis live willen zetten.",
  },
  {
    title: "Growth",
    price: "Vanaf €3.950",
    description:
      "Voor bedrijven die meer pagina’s, cases en conversiegerichte inhoud nodig hebben.",
  },
  {
    title: "Custom",
    price: "Op aanvraag",
    description:
      "Voor maatwerktrajecten met complexe flows, contentmigratie of doorlopende samenwerking.",
  },
];

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/seo-groei", label: "SEO & Groei" },
  { href: "/cases", label: "Cases" },
  { href: "/voor-zzpers", label: "Voor ZZP’ers" },
  { href: "/voor-startende-bedrijven", label: "Voor Startende Bedrijven" },
  { href: "/voor-kleine-bedrijven", label: "Voor Kleine Bedrijven" },
  { href: "/locaties", label: "Locaties" },
  { href: "/branches", label: "Branches" },
  { href: "/oplossingen", label: "Oplossingen" },
  { href: "/contact", label: "Contact" },
];

export const legalLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/pakketten", label: "Pakketten" },
  { href: "/diensten/website-laten-maken", label: "Website laten maken" },
  { href: "/locaties", label: "Lokale landingspagina’s" },
];

export const secondaryCta = {
  label: "Bekijk recente cases",
  href: "/cases",
  icon: ArrowUpRight,
};
