"use client";

import { motion } from "framer-motion";
import { values } from "@/content";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/marketing/SectionHeading";

export function AboutSection() {
  return (
    <section className="page-section" id="over-ons">
      <SectionHeading
        description="nr1websites.nl positioneert zich als een moderne webpartner voor bedrijven die kwaliteit willen zonder ruis. De basis is premium, maar bewust nuchter: snel, helder en gebouwd om door te groeien."
        eyebrow="Over ons"
        title="Een webpartner die design en development niet los van elkaar ziet"
      />
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
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { type: "spring", damping: 25 } }
            }}
            className="surface-card p-10 md:p-12 flex flex-col justify-center"
          >
            <p className="type-body-lead text-foreground mb-8">
              We bouwen geen websites die alleen indruk maken in een designreview.
              De focus ligt op een slimme structuur, verfijnde presentatie en code
              waar later nog goed op door te ontwikkelen is.
            </p>
            <p className="text-muted leading-relaxed text-[16px] mb-12">
              Daardoor ontstaat een marketingwebsite die niet alleen vandaag
              sterk oogt, maar ook klaar is voor nieuwe pagina’s, contentexpansie
              en toekomstige campagnes.
            </p>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/contact" variant="primary">Start een projectgesprek</ButtonLink>
              <ButtonLink href="/over-ons" variant="secondary">
                Meer over ons
              </ButtonLink>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            {values.map((value) => (
              <motion.article 
                key={value.title}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0, transition: { type: "spring", damping: 25 } }
                }}
                className="surface-card p-8 group hover:bg-surface-tinted transition-colors duration-500"
              >
                <h3 className="text-xl font-bold tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted leading-relaxed text-[15px]">{value.description}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
