"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";

import { getCaseStudyBySlug } from "@/content";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";

type CaseStudyDetailPageProps = {
  slug: string;
};

export function CaseStudyDetailPage({ slug }: CaseStudyDetailPageProps) {
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <PageHero
        description={caseStudy.summary}
        eyebrow={caseStudy.sector}
        primaryHref="/contact"
        primaryLabel="Vergelijkbaar traject starten"
        secondaryHref="/cases"
        secondaryLabel="Terug naar overzicht"
        title={caseStudy.client}
      />
      <section className="pb-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-10">
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", damping: 25, delay: 0.1 }}
              className="surface-card p-10"
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6 leading-none">
                De Uitdaging
              </h3>
              <p className="type-body-lead text-foreground/90">{caseStudy.challenge}</p>
            </motion.article>

            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", damping: 25, delay: 0.2 }}
              className="surface-card p-10"
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6 leading-none">
                De Oplossing
              </h3>
              <p className="text-muted leading-relaxed text-[16px]">{caseStudy.solution}</p>
            </motion.article>
          </div>

          <div className="flex flex-col gap-10">
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", damping: 25, delay: 0.3 }}
              className="surface-card p-10"
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-8 leading-none">
                Het Resultaat
              </h3>
              <p className="type-body-lead text-foreground mb-10">
                {caseStudy.resultSummary}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {caseStudy.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
                  >
                    <p className="text-xs uppercase tracking-widest text-muted mb-1">{metric.label}</p>
                    <p className="text-2xl font-bold tracking-tight text-foreground">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", damping: 25, delay: 0.4 }}
              className="surface-card p-10 bg-surface-tinted border-accent/20"
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6 leading-none">
                Ingezet
              </h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {caseStudy.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-border bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong shadow-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
              <ButtonLink href="/contact" className="w-full">
                Strategiesessie Plannen
              </ButtonLink>
            </motion.article>
          </div>
        </Container>
      </section>
    </>
  );
}
