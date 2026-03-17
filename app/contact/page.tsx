import { Mail, MapPin, Phone } from "lucide-react";

import { ContactSection } from "@/components/marketing/ContactSection";
import { PageHero } from "@/components/marketing/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { StructuredData } from "@/components/seo/StructuredData";
import { Container } from "@/components/ui/Container";
import { getPageSpecByPath, siteConfig } from "@/content";
import { createMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/seo/absolute-url";
import { getBreadcrumbJsonLd, getPageJsonLd } from "@/lib/seo/json-ld";

const pageSpec = getPageSpecByPath("/contact");

export const metadata = createMetadata({
  title: pageSpec?.title ?? "Contact",
  description:
    pageSpec?.description ??
    "Neem contact op met nr1websites.nl voor een nieuwe website, SEO-basis, onderhoud of een relaunch.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="theme-dark">
      {pageSpec ? (
        <>
          <StructuredData
            data={getPageJsonLd({
              description: pageSpec.description,
              name: pageSpec.title,
              path: pageSpec.path,
              type: "ContactPage",
            })}
          />
          <StructuredData
            data={getBreadcrumbJsonLd([
              { name: "Home", url: absoluteUrl("/") },
              { name: pageSpec.title, url: absoluteUrl(pageSpec.path) },
            ])}
          />
        </>
      ) : null}
      <PageHero
        description={
          pageSpec?.mainMessage ??
          "Contact opnemen moet laagdrempelig voelen en direct duidelijk maken welke stap volgt na een strategiesessie, scan of aanvraag."
        }
        eyebrow="Contact"
        primaryHref={pageSpec?.secondaryCta.href ?? "/cases"}
        primaryLabel={pageSpec?.secondaryCta.label ?? "Bekijk cases"}
        title="Vertel kort waar je naartoe wilt met je website"
      />

      <section className="py-16 lg:py-24 bg-surface-strong">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="type-card-title text-foreground mb-6">Stuur een bericht</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="type-card-title text-foreground mb-6">Direct contact</h2>
              <div className="space-y-6">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="surface-card flex items-start gap-4 p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="flex-shrink-0 size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Mail className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted mb-1">E-mail</p>
                    <p className="text-foreground font-semibold">{siteConfig.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="surface-card flex items-start gap-4 p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="flex-shrink-0 size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Phone className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted mb-1">Telefoon</p>
                    <p className="text-foreground font-semibold">{siteConfig.phone}</p>
                  </div>
                </a>

                <div className="surface-card flex items-start gap-4 p-6">
                  <div className="flex-shrink-0 size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted mb-1">Locatie</p>
                    <p className="text-foreground font-semibold">{siteConfig.location}</p>
                    <p className="text-sm text-muted mt-1">Beschikbaar voor projecten in heel Nederland</p>
                  </div>
                </div>

                <div className="surface-card p-6">
                  <p className="text-sm text-muted">
                    Reactie meestal binnen 1 werkdag. Liever direct sparren? Bel of app gerust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ContactSection withHeading={false} />
    </div>
  );
}
