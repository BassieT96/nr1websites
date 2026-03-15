import type { Metadata } from "next";

import { Plus_Jakarta_Sans, Sora } from "next/font/google";

import "./globals.css";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { StructuredData } from "@/components/seo/StructuredData";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { ClientDecorations } from "@/components/layout/ClientDecorations";
import { siteConfig } from "@/content";
import {
  getLocalBusinessJsonLd,
  getOrganizationJsonLd,
  getWebSiteJsonLd,
} from "@/lib/seo/json-ld";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Webdesign en development voor ambitieuze merken`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  category: "business",
  creator: siteConfig.shortName,
  keywords: [
    "webdesign",
    "webdevelopment",
    "Next.js bureau",
    "SEO basis",
    "website laten maken",
    "Lemmer",
    "Friesland",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Webdesign en development voor ambitieuze merken`,
    description: siteConfig.description,
    type: "website",
    locale: "nl_NL",
    siteName: siteConfig.name,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Webdesign en development voor ambitieuze merken`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`scroll-smooth ${sora.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-background text-foreground antialiased font-sans">
        <a
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
          href="#content"
        >
          Ga direct naar de inhoud
        </a>
        <div className="relative isolate min-h-screen">
          <SiteHeader />
          <main id="content" className="relative z-10 pb-20 md:pb-0">
            {children}
          </main>
          <SiteFooter />
        </div>
        <ClientDecorations />
        <StructuredData data={getLocalBusinessJsonLd()} />
        <StructuredData data={getOrganizationJsonLd()} />
        <StructuredData data={getWebSiteJsonLd()} />
        <AnalyticsProvider />
      </body>
    </html>
  );
}
