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
  dark?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  dark = false,
}: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24"
      style={dark ? { backgroundColor: '#0c0c0e' } : undefined}
    >
      {/* Wave background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Waves
          className="h-full w-full"
          strokeColor={dark ? "rgba(255,255,255,0.45)" : "rgba(0, 191, 166, 0.12)"}
          strokeWidth={dark ? 2.2 : 1.35}
          lineColors={dark
            ? ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]
            : ["#E9C86D", "#F59F56", "#F7716A", "#C75ACC", "#7A58E8", "#3F57F2"]}
          backgroundColor="transparent"
        />
        {dark && (
          <>
            <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#0c0c0e] via-[#0c0c0e]/60 to-transparent z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(12,12,14,0.7)_0%,transparent_70%)] z-10" />
          </>
        )}
      </div>
      {!dark && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none z-[1]" style={{ background: "radial-gradient(ellipse at center, rgba(54,98,227,0.07) 0%, transparent 65%)" }} />}

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
            className={`type-display-page mb-8 text-balance font-medium tracking-tight ${dark ? "text-white" : "text-foreground"}`}
          >
            {title}
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } }
            }}
            className={`type-body-lead mb-12 max-w-2xl text-pretty ${dark ? "text-white/50" : "text-muted"}`}
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
