import { siteConfig } from "@/content";
import { absoluteUrl } from "@/lib/seo/absolute-url";

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneHref,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lemmer",
      addressRegion: "Friesland",
      addressCountry: "NL",
    },
    email: siteConfig.email,
    priceRange: "€€",
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/logo.png"),
    description: siteConfig.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneHref,
      email: siteConfig.email,
      contactType: "customer service",
      availableLanguage: "Dutch",
    },
    sameAs: [
      "https://www.linkedin.com/company/nr1websites",
      "https://www.instagram.com/nr1websites",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lemmer",
      addressRegion: "Friesland",
      addressCountry: "NL",
    },
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "nl",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function getBreadcrumbJsonLd(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

type PageJsonLdInput = {
  description: string;
  name: string;
  path: string;
  type?: string;
};

export function getPageJsonLd({
  description,
  name,
  path,
  type = "WebPage",
}: PageJsonLdInput) {
  const url = absoluteUrl(path);
  const page = {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url,
    isPartOf: absoluteUrl("/"),
  } as Record<string, unknown>;

  if (type === "Service") {
    page.provider = {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
    };
    page.areaServed = ["Lemmer", "Friesland", "Nederland"];
  }

  return page;
}

type FaqItem = {
  question: string;
  answer: string;
};

export function getFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

type ReviewInput = {
  author: string;
  reviewBody: string;
  ratingValue?: number;
};

export function getAggregateRatingJsonLd(reviews: ReviewInput[]) {
  const avg = reviews.length
    ? (reviews.reduce((sum, r) => sum + (r.ratingValue ?? 5), 0) / reviews.length).toFixed(1)
    : null;

  if (!avg) return null;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avg,
      reviewCount: String(reviews.length),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.author,
      },
      reviewBody: r.reviewBody,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.ratingValue ?? 5),
        bestRating: "5",
      },
    })),
  };
}

type BlogPostInput = {
  title: string;
  publishedAt: string;
  updatedAt?: string;
  excerpt: string;
  author?: string;
  path: string;
};

export function getBlogArticleJsonLd(post: BlogPostInput) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    url: absoluteUrl(post.path),
    author: {
      "@type": "Person",
      name: post.author ?? siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

type PricingPlanInput = {
  title: string;
  price: string;
  description: string;
  features: string[];
};

export function getProductJsonLd(plans: PricingPlanInput[]) {
  return plans.map((plan) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${plan.title} - Website pakket`,
    description: plan.description,
    brand: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: plan.price.replace(/[^0-9]/g, "") || "0",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/pakketten"),
    },
  }));
}
