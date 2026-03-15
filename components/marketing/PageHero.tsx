"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Waves } from "@/components/ui/wave-background";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
      {/* Same interactive hero background as home */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Waves
          className="h-full w-full"
          strokeColor="rgba(0, 191, 166, 0.12)"
          strokeWidth={1.35}
          lineColors={["#E9C86D", "#F59F56", "#F7716A", "#C75ACC", "#7A58E8", "#3F57F2"]}
          backgroundColor="transparent"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[340px] bg-primary/5 blur-[110px] rounded-full pointer-events-none z-[1]" />

      <Container>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 }
            }
          }}
          className="relative z-10 max-w-4xl"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } }
            }}
            className="mb-8"
          >
            <Badge>{eyebrow}</Badge>
          </motion.div>

          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } }
            }}
            className="type-display-page text-foreground mb-8 text-balance font-medium tracking-tight"
          >
            {title}
          </motion.h1>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } }
            }}
            className="type-body-lead text-muted mb-12 max-w-2xl text-pretty"
          >
            {description}
          </motion.p>

          {(primaryHref || secondaryHref) && (
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } }
              }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              {primaryHref && primaryLabel ? (
                <ButtonLink href={primaryHref} variant="primary">
                  {primaryLabel}
                </ButtonLink>
              ) : null}
              {secondaryHref && secondaryLabel ? (
                <ButtonLink href={secondaryHref} variant="secondary">
                  {secondaryLabel}
                </ButtonLink>
              ) : null}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
