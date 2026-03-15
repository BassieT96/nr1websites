"use client";

import { motion } from "framer-motion";
import { StructuredData } from "@/components/seo/StructuredData";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { PageSpecOverview } from "@/components/marketing/PageSpecOverview";
import { getPageSpecByPath } from "@/content";
import type { CommercialPage } from "@/content";
import { absoluteUrl } from "@/lib/seo/absolute-url";
import { getBreadcrumbJsonLd, getPageJsonLd } from "@/lib/seo/json-ld";

type CommercialPlaceholderPageProps = {
  page: CommercialPage;
};

export function CommercialPlaceholderPage({
  page,
}: CommercialPlaceholderPageProps) {
  const spec = getPageSpecByPath(page.path);
  const pageType = spec?.structuredData.includes("Service")
    ? "Service"
    : "WebPage";

  return (
    <>
      {spec ? (
        <>
          <StructuredData
            data={getPageJsonLd({
              description: spec.description,
              name: spec.title,
              path: spec.path,
              type: pageType,
            })}
          />
          <StructuredData
            data={getBreadcrumbJsonLd([
              { name: "Home", url: absoluteUrl("/") },
              { name: spec.title, url: absoluteUrl(spec.path) },
            ])}
          />
        </>
      ) : null}
      <PageHero
        description={spec?.mainMessage ?? page.description}
        eyebrow={page.eyebrow}
        primaryHref={page.primaryCta.href}
        primaryLabel={page.primaryCta.label}
        secondaryHref={page.secondaryCta.href}
        secondaryLabel={page.secondaryCta.label}
        title={page.title}
      />
      {spec ? <PageSpecOverview spec={spec} /> : null}
      {!spec ? (
        <section className="pb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { staggerChildren: 0.1 } 
              }
            }}
          >
            <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col gap-8">
                <motion.article 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } }
                  }}
                  className="surface-card p-10"
                >
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6 leading-none">
                    Primaire Zoekintentie
                  </h3>
                  <p className="type-body-lead text-foreground/90">{page.searchIntent}</p>
                </motion.article>

                <motion.article 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } }
                  }}
                  className="surface-card p-10"
                >
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6 leading-none">
                    Doelgroep
                  </h3>
                  <p className="text-muted leading-relaxed text-[16px]">{page.audience}</p>
                </motion.article>

                <motion.article 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } }
                  }}
                  className="surface-card p-10"
                >
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6 leading-none">
                    Positionering
                  </h3>
                  <p className="text-muted leading-relaxed text-[16px]">{page.intro}</p>
                </motion.article>
              </div>

              <div className="flex flex-col gap-8">
                <motion.article 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } }
                  }}
                  className="surface-card p-10 h-full"
                >
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-10 leading-none">
                    Belangrijkste Secties
                  </h3>
                  <ul className="space-y-6">
                    {page.sections.map((section) => (
                      <li key={section} className="flex items-start gap-4">
                        <span className="mt-2.5 size-1.5 rounded-full bg-accent/60 shrink-0" />
                        <span className="text-[16px] leading-relaxed text-foreground/80 font-medium">
                          {section}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.article>

                <motion.article 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } }
                  }}
                  className="surface-card p-10 bg-surface-tinted border-accent/20"
                >
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6 leading-none">
                    Belangrijke Interne Links
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {page.internalLinks.map((link) => (
                      <ButtonLink
                        key={link.href}
                        href={link.href}
                        variant="secondary"
                        className="bg-white border-border"
                      >
                        {link.label}
                      </ButtonLink>
                    ))}
                  </div>
                </motion.article>
              </div>
            </Container>
          </motion.div>
        </section>
      ) : null}
    </>
  );
}
