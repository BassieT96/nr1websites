import type { SiteConfig } from "@/content/types";

export const siteConfig: SiteConfig = {
  name: "nr1websites.nl",
  shortName: "nr1websites",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nr1websites.nl",
  description:
    "Professionele websites voor ambitieuze merken. nr1websites.nl combineert strategie, design en development in een snelle, schaalbare Next.js basis.",
  title: "Websites die professioneel ogen en daadwerkelijk converteren",
  email: "hallo@nr1websites.nl",
  phone: "+31 (0)6 12 34 56 78",
  phoneHref: "+31612345678",
  location: "Lemmer, Friesland",
  ctaLabel: "Plan een kennismaking",
  ctaHref: "/contact",
  availabilityMessage: "Momenteel beschikbaar voor nieuwe projecten in april",
};
