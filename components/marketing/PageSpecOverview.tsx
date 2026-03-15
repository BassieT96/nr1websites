"use client";

import { motion } from "framer-motion";
import type { PageSpec } from "@/content";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SpotlightCard } from "@/components/ui/Cards";
import { SectionIntro } from "@/components/system/SectionIntro";

type PageSpecOverviewProps = {
  spec: PageSpec;
};

export function PageSpecOverview({ spec }: PageSpecOverviewProps) {
  return (
    <section className="pb-32 bg-surface-strong/30">
      <Container>
        <div className="mb-16">
          <SectionIntro
            align="center"
            description="Deze opbouw combineert zoekintentie, positionering en conversie in één commerciële pagina. Daardoor wordt de pagina niet alleen beter vindbaar, maar ook overtuigender."
            eyebrow="Pagina-opbouw"
            title="Zo ondersteunt deze pagina online vindbaarheid en contact"
          />
        </div>

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
          className="grid gap-8"
        >
          <div className="grid gap-8 lg:grid-cols-3">
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <SpotlightCard className="h-full p-10">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6 leading-none">
                  Zoekintentie
                </h3>
                <p className="text-muted leading-relaxed">{spec.searchIntent}</p>
              </SpotlightCard>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <SpotlightCard className="h-full p-10">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6 leading-none">
                  Doelgroep
                </h3>
                <p className="text-muted leading-relaxed">{spec.audience}</p>
              </SpotlightCard>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <SpotlightCard className="h-full p-10 bg-surface-tinted border-accent/20">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6 leading-none">
                  Hoofdboodschap
                </h3>
                <p className="type-body-lead text-foreground/90">{spec.mainMessage}</p>
              </SpotlightCard>
            </motion.div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <SpotlightCard className="p-10">
                <h3 className="type-card-title text-foreground mb-10">
                  Benodigde secties voor deze pagina
                </h3>
                <ul className="grid gap-6">
                  {spec.sections.map((section) => (
                    <li key={section} className="flex items-start gap-4">
                      <span className="mt-2.5 size-1.5 rounded-full bg-accent/60 shrink-0" />
                      <span className="text-[16px] leading-relaxed text-foreground/85 font-medium">{section}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>

            <div className="flex flex-col gap-8">
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <SpotlightCard className="p-10">
                  <h3 className="type-card-title text-foreground mb-8">
                    Logische interne links
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {spec.internalLinks.map((link) => (
                      <ButtonLink key={link.href} href={link.href} variant="secondary" className="bg-white border-border">
                        {link.label}
                      </ButtonLink>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <SpotlightCard className="p-10 bg-surface-tinted/50 border-accent/10">
                  <h3 className="type-card-title text-foreground mb-8">
                    SEO-bouwstenen
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {spec.structuredData.map((item) => (
                      <Badge key={item} className="bg-white border-border text-muted-strong font-semibold">{item}</Badge>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/50">
                    <div>
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-3">
                        Contenttype
                      </h4>
                      <p className="text-sm font-medium text-muted-strong">{spec.contentType}</p>
                    </div>
                    <div>
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-3">
                        Herbruikbaarheid
                      </h4>
                      <p className="text-sm font-medium text-muted-strong">{spec.reusability}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
