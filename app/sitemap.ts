import type { MetadataRoute } from "next";

import {
  caseStudies,
  commercialPages,
  footerLinks,
  locationPages,
  nichePages,
  services,
  siteConfig,
  solutionPages,
} from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = new Set(
    [
      "/",
      "/contact",
      "/diensten",
      "/cases",
      "/locaties",
      "/branches",
      "/oplossingen",
      "/blog",
      "/over-ons",
      "/pakketten",
      ...commercialPages.map((page) => page.path),
      ...footerLinks.map((item) => item.href),
      ...services.map((service) => `/diensten/${service.slug}`),
      ...caseStudies.map((item) => `/cases/${item.slug}`),
      ...locationPages.map((item) => `/locaties/${item.slug}`),
      ...nichePages.map((item) => `/branches/${item.slug}`),
      ...solutionPages.map((item) => `/oplossingen/${item.slug}`),
    ].map((route) => new URL(route, siteConfig.url).toString()),
  );

  const homepage = `${siteConfig.url}/`;

  return Array.from(urls).map((url) => ({
    url,
    lastModified: url === homepage ? "2026-03-01" : "2026-02-01",
    changeFrequency: "weekly",
    priority: url === homepage ? 1 : 0.7,
  }));
}
