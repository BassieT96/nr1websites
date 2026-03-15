"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";

import { getServiceBySlug } from "@/content";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { ProcessSection } from "@/components/marketing/ProcessSection";

type ServiceDetailPageProps = {
  slug: string;
};

export function ServiceDetailPage({ slug }: ServiceDetailPageProps) {
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      <PageHero
        description={service.description}
        eyebrow="Onze Diensten"
        primaryHref="/contact"
        primaryLabel="Project bespreken"
        secondaryHref="/diensten"
        secondaryLabel="Alle diensten"
        title={service.title}
      />

      <section className="pb-24">
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 25, delay: 0.1 }}
            className="surface-card p-10 md:p-14"
          >
            <div className="rounded-2xl bg-accent/10 p-4 text-accent w-fit mb-8 shadow-sm">
              <Icon className="size-6" />
            </div>
            <h2 className="type-section-title text-foreground mb-6">
              Wat je mag verwachten
            </h2>
            <p className="type-body-lead text-muted mb-10">
              {service.summary}
            </p>
            <ul className="space-y-5">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-2.5 size-1.5 rounded-full bg-accent shrink-0 shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
                  <span className="text-[16px] leading-relaxed text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <div className="flex flex-col gap-8">
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", damping: 25, delay: 0.2 }}
              className="surface-card p-10"
            >
              <h3 className="type-card-title text-foreground mb-4">
                Voor wie dit past
              </h3>
              <p className="text-muted leading-relaxed">{service.idealFor}</p>
            </motion.article>

            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", damping: 25, delay: 0.3 }}
              className="surface-card p-10"
            >
              <h3 className="type-card-title text-foreground mb-6">
                Impact & Resultaat
              </h3>
              <p className="text-muted leading-relaxed mb-8">{service.outcome}</p>
              <div className="grid grid-cols-2 gap-4">
                {service.stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
                  >
                    <p className="text-xs uppercase tracking-widest text-muted mb-1">{item.label}</p>
                    <p className="text-2xl font-bold tracking-tight text-foreground">
                      {item.value}
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
              <h3 className="type-card-title text-foreground mb-4">
                Zet de eerste stap
              </h3>
              <p className="text-muted leading-relaxed mb-8">
                In een gratis strategiesessie bepalen we samen de beste aanpak voor jouw project.
              </p>
              <ButtonLink href="/contact" className="w-full" variant="primary">
                Strategiesessie Plannen
              </ButtonLink>
            </motion.article>
          </div>
        </Container>
      </section>

      <ProcessSection compact />
    </>
  );
}
