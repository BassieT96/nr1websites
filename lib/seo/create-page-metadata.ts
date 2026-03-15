import type { Metadata } from "next";

import { siteConfig } from "@/content";
import { absoluteUrl } from "@/lib/seo/absolute-url";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "/",
}: MetadataInput): Metadata {
  const canonicalPath = path === "/" ? "/" : `/${path.replace(/^\/+/, "")}`;
  const canonicalUrl = absoluteUrl(canonicalPath);

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "nl_NL",
      url: canonicalUrl,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
