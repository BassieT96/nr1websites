"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

// ─── 1. Waarom voor ons kiezen (Voordelen) ──────────────────────────────────

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
  return (
    <section className="bg-[#020202] px-6 py-24 lg:py-32 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/25 block mb-4">
            Onze werkwijze
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white tracking-tight leading-tight">
            Waarom voor <span className="text-[#3662e3]">ons kiezen?</span>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {voordelen.map((voordeel, i) => (
            <motion.div
              key={voordeel.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-[#020202] p-8 lg:p-9 hover:bg-white/[0.025] transition-colors duration-300"
            >
              <CheckCircle2 className="size-6 text-[#3662e3]/60 mb-8" strokeWidth={1.5} />
              <h3 className="text-[1.1rem] font-display font-semibold text-white/70 group-hover:text-white transition-colors duration-300 mb-3 tracking-tight">
                {voordeel.title}
              </h3>
              <p className="text-sm text-white/22 group-hover:text-white/38 transition-colors duration-300 leading-relaxed">
                {voordeel.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 2. Dark CTA ────────────────────────────────────────────────────────────

export function DienstenCTA() {
  return (
    <section className="bg-[#020202] px-6 py-24 lg:py-32 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-white/[0.025] border border-white/[0.07] px-8 py-16 lg:px-16 lg:py-20 text-center"
        >
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]" style={{ background: "radial-gradient(ellipse at center, rgba(54,98,227,0.14) 0%, transparent 65%)" }} />
          </div>

          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white tracking-tight leading-tight mb-5">
              Klaar om samen te werken?
            </h2>
            <p className="text-base text-white/60 leading-relaxed mb-10 text-balance">
              Neem contact met ons op en ontdek wat wij voor jouw bedrijf kunnen betekenen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href="/contact"
                className="h-13 px-9 text-[15px] rounded-full bg-[#3662e3] text-white hover:bg-[#2a52d4] hover:scale-[1.02] transition-all font-medium"
              >
                Vraag een offerte aan
              </ButtonLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
