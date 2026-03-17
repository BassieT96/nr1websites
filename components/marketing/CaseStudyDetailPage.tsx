"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
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

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full px-4 md:px-8 lg:px-16 pb-16"
      >
        <div className="relative w-full aspect-[16/7] rounded-[2rem] overflow-hidden shadow-2xl">
          <Image
            src={caseStudy.image}
            alt={caseStudy.client}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Overlay with meta info */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {caseStudy.services.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-white"
                >
                  {s}
                </span>
              ))}
            </div>
            <span className="text-white/60 font-mono text-sm">{caseStudy.year}</span>
          </div>
        </div>
      </motion.div>

      {/* Metrics strip */}
      <Container className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {caseStudy.metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-border bg-surface p-6 text-center shadow-sm"
            >
              <p className="text-3xl font-bold tracking-tight text-foreground mb-1">
                {metric.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-muted">{metric.label}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-border bg-surface p-6 text-center shadow-sm">
            <p className="text-3xl font-bold tracking-tight text-foreground mb-1">{caseStudy.year}</p>
            <p className="text-xs uppercase tracking-widest text-muted">Jaar</p>
          </div>
          <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center shadow-sm">
            <p className="text-sm font-medium text-accent leading-snug">{caseStudy.impact}</p>
          </div>
        </motion.div>
      </Container>

      {/* Content grid */}
      <section className="pb-24">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-8">
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

          <div className="flex flex-col gap-8">
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
              <p className="type-body-lead text-foreground mb-10">{caseStudy.resultSummary}</p>
              <div className="grid grid-cols-2 gap-4">
                {caseStudy.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
                  >
                    <p className="text-xs uppercase tracking-widest text-muted mb-1">{metric.label}</p>
                    <p className="text-2xl font-bold tracking-tight text-foreground">{metric.value}</p>
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
