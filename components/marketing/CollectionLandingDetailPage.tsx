"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";

import { getPageSpecByPath, siteConfig, services } from "@/content";
import type { CollectionLandingPage } from "@/content";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { PageSpecOverview } from "@/components/marketing/PageSpecOverview";
import { StructuredData } from "@/components/seo/StructuredData";
import { absoluteUrl } from "@/lib/seo/absolute-url";
import { getBreadcrumbJsonLd, getPageJsonLd } from "@/lib/seo/json-ld";

type CollectionLandingDetailPageProps = {
  item?: CollectionLandingPage;
  collectionLabel: string;
  collectionHref: string;
  path: string;
};

export function CollectionLandingDetailPage({
  item,
  collectionLabel,
  collectionHref,
  path,
}: CollectionLandingDetailPageProps) {
  if (!item) {
    notFound();
  }

  const spec = getPageSpecByPath(path);
  const relatedServices = item.relatedServices
    .map((slug) => services.find((service) => service.slug === slug))
    .filter(Boolean);

  return (
    <>
      {spec ? (
        <>
          <StructuredData
            data={getPageJsonLd({
              description: spec.description,
              name: spec.title,
              path: spec.path,
              type: spec.structuredData.includes("Service") ? "Service" : "WebPage",
            })}
          />
          <StructuredData
            data={getBreadcrumbJsonLd([
              { name: "Home", url: absoluteUrl("/") },
              { name: collectionLabel, url: absoluteUrl(collectionHref) },
              { name: spec.title, url: absoluteUrl(spec.path) },
            ])}
          />
        </>
      ) : null}
      <PageHero
        description={spec?.mainMessage ?? item.description}
        eyebrow={item.eyebrow}
        primaryHref={siteConfig.ctaHref}
        primaryLabel={siteConfig.ctaLabel}
        secondaryHref={collectionHref}
        secondaryLabel={`Terug naar ${collectionLabel.toLowerCase()}`}
        title={item.title}
      />
      <section className="pb-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1, 
              transition: { staggerChildren: 0.15 } 
            }
          }}
        >
          <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <motion.article 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } }
              }}
              className="surface-card p-10 md:p-12"
            >
              <h2 className="type-section-title text-foreground mb-8">
                Waarom deze paginaopzet werkt
              </h2>
              <p className="type-body-lead text-muted mb-10">{item.intro}</p>
              <ul className="space-y-6">
                {item.valuePoints.map((point) => (
                  <li key={point} className="flex items-start gap-4">
                    <span className="mt-2.5 size-1.5 rounded-full bg-accent/60 shrink-0" />
                    <span className="text-[16px] leading-relaxed text-foreground/85 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            <div className="flex flex-col gap-8">
              <motion.article 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } }
                }}
                className="surface-card p-10"
              >
                <h3 className="type-card-title text-foreground mb-8">
                  Relevante Diensten
                </h3>
                <div className="flex flex-wrap gap-3">
                  {relatedServices.map((service) =>
                    service ? (
                      <ButtonLink
                        key={service.slug}
                        href={`/diensten/${service.slug}`}
                        variant="secondary"
                        className="bg-white border-border"
                      >
                        {service.shortTitle}
                      </ButtonLink>
                    ) : null,
                  )}
                </div>
              </motion.article>

              <motion.article 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } }
                }}
                className="surface-card p-10 bg-surface-tinted border-accent/20"
              >
                <h3 className="type-card-title text-foreground mb-6">
                  Volgende Stap
                </h3>
                <p className="text-muted leading-relaxed text-[15px] mb-10">
                  Vanuit deze basis kun je snel extra steden, branches of
                  combinaties toevoegen met dezelfde componenten en SEO-helpers.
                </p>
                <ButtonLink href="/contact" className="w-full">
                  Bespreek deze opzet
                </ButtonLink>
              </motion.article>
            </div>
          </Container>
        </motion.div>
      </section>
      {spec ? <PageSpecOverview spec={spec} /> : null}
    </>
  );
}
