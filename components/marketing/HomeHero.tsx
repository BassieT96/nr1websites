"use client";

import { ArrowRight } from "lucide-react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { Waves } from "@/components/ui/wave-background";
import { WordCycler } from "@/components/ui/word-cycler";
import { siteConfig } from "@/content";
import { usePerformanceProfile } from "@/lib/use-performance-profile";

export function HomeHero() {
  const { allowHeavyMotion } = usePerformanceProfile();
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 }
    },
  };

  const animationProps = allowHeavyMotion
    ? { variants: containerVariants, initial: "hidden" as const, animate: "show" as const }
    : {};
  // On Safari (allowHeavyMotion=false), don't pass variants to children so they're always visible
  const iv = allowHeavyMotion ? itemVariants : undefined;

  const { scrollY } = useScroll();
  const kickerYRaw = useTransform(scrollY, [0, 500], [0, -40]);
  const heroYRaw = useTransform(scrollY, [0, 500], [0, -20]);
  const kickerY = allowHeavyMotion ? kickerYRaw : undefined;
  const heroY = allowHeavyMotion ? heroYRaw : undefined;

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center py-[var(--space-5xl)] lg:py-[var(--space-6xl, 12rem)]">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Waves
          className="h-full w-full"
          strokeColor="rgba(0, 191, 166, 0.2)"
          strokeWidth={2.2}
          lineColors={["#E9C86D", "#F59F56", "#F7716A", "#C75ACC", "#7A58E8", "#3F57F2"]}
          backgroundColor="transparent"
        />
      </div>

      {/* Light Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-[1]" />

      <motion.div
        {...animationProps}
        style={{ y: heroY }}
        className="container-content mx-auto px-6 relative z-10 text-center flex flex-col items-center"
      >
        {/* Trust Kicker */}
        <motion.div
          variants={iv}
          style={{ y: kickerY }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-border bg-surface/80 backdrop-blur-md shadow-sm mb-10 transition-colors hover:border-primary/30"
        >
          <span className="w-2 size-2 rounded-full bg-success shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted-strong font-bold">Web Agency Lemmer</span>
        </motion.div>

        {/* Core Message */}
        <motion.h1 variants={iv} className="type-display-hero text-foreground mb-8 max-w-5xl mx-auto text-balance leading-[1.05]">
          De <WordCycler words={["premium", "strakke", "slimste", "snelste", "mooiste"]} className="mx-[0.2em]" /> website die voor je verkoopt.
        </motion.h1>

        <motion.p variants={iv} className="type-body-lead text-muted max-w-2xl mx-auto mb-14 text-pretty font-medium leading-relaxed">
          Wij ontwerpen en bouwen snelle, moderne websites voor ondernemers die klaar zijn voor de volgende stap. Geen ruis, alleen resultaat.
        </motion.p>

        {/* Dual Actions */}
        <motion.div variants={iv} className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 mb-14 w-full sm:w-auto">
          <ButtonLink href="/contact" variant="primary" className="w-full sm:w-auto text-[16px] px-10 py-5 h-auto">
            Plan een strategiesessie
            <ArrowRight className="w-5 h-5 ml-2" />
          </ButtonLink>
          <ButtonLink href="/cases" variant="ghost" className="w-full sm:w-auto text-[16px] px-10 py-5 h-auto">
            Bekijk onze werkwijze
          </ButtonLink>
        </motion.div>

        {/* Availability Badge */}
        {siteConfig.availabilityMessage && (
          <motion.div variants={iv} className="flex items-center gap-2 text-sm text-emerald-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className={allowHeavyMotion ? "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" : "absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"} />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {siteConfig.availabilityMessage}
          </motion.div>
        )}

        {/* Trust Microcopy */}
        <motion.p variants={iv} className="text-[13px] text-muted-strong font-semibold flex items-center gap-3 bg-surface-strong/30 px-6 py-2 rounded-full backdrop-blur-sm border border-border/40">
          <span className="flex size-5 items-center justify-center rounded-full bg-success/10 text-success">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Vandaag al duidelijkheid over je online koers
        </motion.p>
      </motion.div>
    </section>
  );
}
