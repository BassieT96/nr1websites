import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  href: string;
  label: string;
};

export type PageLink = {
  href: string;
  label: string;
};

export type Metric = {
  label: string;
  value: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  outcome: string;
  idealFor: string;
  featured: boolean;
  icon: LucideIcon;
  deliverables: string[];
  stats: Metric[];
};

export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  summary: string;
  impact: string;
  year: string;
  services: string[];
  metrics: Metric[];
  challenge: string;
  solution: string;
  resultSummary: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type CollectionLandingPage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  intro: string;
  valuePoints: string[];
  relatedServices: string[];
  seoTitle: string;
  seoDescription: string;
};

export type CommercialPage = {
  slug: string;
  path: string;
  title: string;
  eyebrow: string;
  description: string;
  intro: string;
  searchIntent: string;
  audience: string;
  primaryCta: PageLink;
  secondaryCta: PageLink;
  sections: string[];
  internalLinks: PageLink[];
};

export type PageSpec = {
  path: string;
  group: string;
  title: string;
  description: string;
  searchIntent: string;
  audience: string;
  mainMessage: string;
  primaryCta: PageLink;
  secondaryCta: PageLink;
  sections: string[];
  internalLinks: PageLink[];
  structuredData: string[];
  contentType: string;
  reusability: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  url: string;
  description: string;
  title: string;
  email: string;
  phone: string;
  phoneHref: string;
  location: string;
  ctaLabel: string;
  ctaHref: string;
  availabilityMessage?: string;
};
