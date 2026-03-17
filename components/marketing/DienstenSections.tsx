"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ContactCTABlock } from "@/components/ui/ProcessAndCTA";
import { usePerformanceProfile } from "@/lib/use-performance-profile";

// ─── 1. Waarom voor ons kiezen (Voordelen = Donker) ─────────────────────────

const voordelen = [
  {
    number: "01",
    title: "Persoonlijke aanpak",
    description: "Wij luisteren naar jouw wensen en denken actief mee voor het beste resultaat. Korte lijnen en direct contact.",
  },
  {
    number: "02",
    title: "Maatwerk oplossingen",
    description: "Geen standaard templates, maar oplossingen die specifiek zijn afgestemd op de doelen van jouw onderneming.",
  },
  {
    number: "03",
    title: "Snelle communicatie",
    description: "Geen lange wachttijden. We communiceren helder, reageren vlot en houden je stap voor stap op de hoogte.",
  },
  {
    number: "04",
    title: "Focus op resultaat",
    description: "We bouwen niet zomaar iets moois. De nadruk ligt op conversie, vindbaarheid en het behalen van meetbare doelen.",
  },
];

export function DienstenVoordelen() {
  const { allowHeavyMotion } = usePerformanceProfile();

  const animationProps = allowHeavyMotion ? {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  } : {};

  return (
    <section className="bg-[#050505] px-6 py-24 lg:py-32 relative overflow-hidden">
      {/* Background ambient noise */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)" }} />
         <div className="absolute inset-0 bg-[#050505] opacity-80 noise-bg mix-blend-overlay" />
      </div>

      <div className="container-content mx-auto relative z-10">
        {/* Header */}
        <motion.div
          {...animationProps}
          className="mb-16 lg:mb-20"
        >
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/25 block mb-4">
            Onze werkwijze
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl lg:text-[4rem] font-display font-medium text-white tracking-tight leading-tight">
            Waarom voor <span className="text-[#3662e3] font-semibold">ons kiezen?</span>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {voordelen.map((voordeel, i) => (
            <motion.div
              key={voordeel.number}
              initial={allowHeavyMotion ? { opacity: 0, y: 16 } : undefined}
              whileInView={allowHeavyMotion ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.35)] hover:border-white/20 transition-all duration-500 relative overflow-hidden"
            >
              {/* Internal abstract glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3662e3]/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="flex h-14 w-14 mb-8 items-center justify-center rounded-2xl bg-black/40 border border-white/5">
                 <CheckCircle2 className="size-6 text-[#3662e3]" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-display font-semibold text-white/80 group-hover:text-white transition-colors duration-300 mb-4 tracking-tight">
                {voordeel.title}
              </h3>
              <p className="text-base text-white/50 group-hover:text-white/70 transition-colors duration-300 leading-relaxed font-light">
                {voordeel.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 2. Diensten CTA (Light) ───────────────────────────────────────────────────

export function DienstenCTA() {
  const { allowHeavyMotion } = usePerformanceProfile();
  
  const animationProps = allowHeavyMotion ? {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-100px" },
    variants: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    }
  } : {};

  const iv = allowHeavyMotion ? {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 25 } }
  } : undefined;

  return (
    <section className="page-section deferred-section bg-background" id="contact">
      <motion.div 
        {...animationProps}
        className="container-content mx-auto px-6 max-w-5xl"
      >
         <h2 className="sr-only">Vaste prijs, heldere afspraken</h2>
         
         <motion.div variants={iv}>
           <ContactCTABlock 
            title="Klaar om samen te werken?"
            description="Neem contact met ons op en ontdek wat wij voor jouw bedrijf kunnen betekenen."
            primaryButtonText="Vraag een offerte aan"
            primaryButtonHref="/contact"
         />
         </motion.div>
      </motion.div>
    </section>
  );
}
