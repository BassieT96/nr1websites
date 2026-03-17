"use client";

import { ArrowRight } from "lucide-react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { Waves } from "@/components/ui/wave-background";
import { WordCycler } from "@/components/ui/word-cycler";
import { usePerformanceProfile } from "@/lib/use-performance-profile";

export function DienstenHero() {
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
          <span className="w-2 size-2 rounded-full bg-[#3662e3] shadow-[0_0_10px_rgba(54,98,227,0.3)]" />
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted-strong font-bold">Onze diensten</span>
        </motion.div>

        {/* Core Message */}
        <motion.h1 variants={iv} className="type-display-hero text-foreground mb-8 max-w-5xl mx-auto text-balance leading-[1.05]">
          Digitale oplossingen die <WordCycler words={["resultaat", "groei", "impact", "klanten", "voorsprong"]} className="mx-[0.2em]" /> opleveren.
        </motion.h1>

        <motion.p variants={iv} className="type-body-lead text-muted max-w-2xl mx-auto mb-14 text-pretty font-medium leading-relaxed">
          Wij helpen bedrijven met professionele en naadloze ervaringen. Van strategie en design tot ontwikkeling en doorlopende optimalisatie.
        </motion.p>

        {/* Dual Actions */}
        <motion.div variants={iv} className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 w-full sm:w-auto">
          <ButtonLink href="/contact" variant="primary" className="w-full sm:w-auto text-[16px] px-10 py-5 h-auto">
            Plan een strategiesessie
            <ArrowRight className="w-5 h-5 ml-2" />
          </ButtonLink>
          <ButtonLink href="#dienstenoverzicht" variant="ghost" className="w-full sm:w-auto text-[16px] px-10 py-5 h-auto">
            Bekijk de diensten
          </ButtonLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
