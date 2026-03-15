"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, MapPin, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/content/cases";
import { ButtonLink } from "@/components/ui/Button";

// ─── 1. Bento trust grid ────────────────────────────────────────────────────

export function WebsitesBento() {
  return (
    <section className="bg-[#020202] px-6 py-24 lg:py-32 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/25 mb-14"
        >
          Waarom nr1websites
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[160px] lg:auto-rows-[170px]">

          {/* Main card — 2×2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 row-span-2 relative overflow-hidden rounded-3xl bg-[#3662e3]/[0.05] border border-[#3662e3]/12 p-8 lg:p-10 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3662e3]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(54,98,227,0.15) 0%, transparent 65%)" }} />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <TrendingUp className="size-6 text-[#3662e3]/40" strokeWidth={1.5} />
              <div>
                <h3 className="text-2xl lg:text-[1.7rem] font-display font-semibold text-white leading-tight mb-3 tracking-tight">
                  Uw website als{" "}
                  <span className="text-[#3662e3]">beste verkoper.</span>
                </h3>
                <p className="text-sm text-white/30 leading-relaxed max-w-xs">
                  We bouwen geen visitekaartje — we bouwen een commercieel
                  instrument dat 24/7 voor uw bedrijf werkt.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stat: aanvragen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="col-span-1 relative overflow-hidden rounded-3xl bg-white/[0.025] border border-white/[0.055] p-5 lg:p-6 flex flex-col justify-between hover:border-white/10 transition-colors duration-300"
          >
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/20">
              Resultaat
            </span>
            <div>
              <div className="text-3xl lg:text-4xl font-display font-semibold text-white tracking-tight">
                +38%
              </div>
              <div className="text-[11px] text-white/25 mt-0.5">
                meer aanvragen gem.
              </div>
            </div>
          </motion.div>

          {/* Stat: laadtijd */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.13 }}
            className="col-span-1 relative overflow-hidden rounded-3xl bg-white/[0.025] border border-white/[0.055] p-5 lg:p-6 flex flex-col justify-between hover:border-white/10 transition-colors duration-300"
          >
            <Zap className="size-4 text-white/15" strokeWidth={1.5} />
            <div>
              <div className="text-3xl lg:text-4xl font-display font-semibold text-white tracking-tight">
                0.9s
              </div>
              <div className="text-[11px] text-white/25 mt-0.5">gem. laadtijd</div>
            </div>
          </motion.div>

          {/* Delivery timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="col-span-2 relative overflow-hidden rounded-3xl bg-white/[0.025] border border-white/[0.055] p-5 lg:p-7 flex items-center gap-5 hover:border-white/10 transition-colors duration-300"
          >
            <Clock
              className="shrink-0 size-6 text-white/15"
              strokeWidth={1.5}
            />
            <div>
              <div className="text-base font-display font-medium text-white/75">
                Live in 2–4 weken
              </div>
              <div className="text-sm text-white/25 mt-0.5">
                Van eerste gesprek tot publicatie — snel en zonder
                verrassingen.
              </div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.23 }}
            className="col-span-2 relative overflow-hidden rounded-3xl bg-white/[0.025] border border-white/[0.055] p-5 lg:p-7 flex items-center gap-5 hover:border-white/10 transition-colors duration-300"
          >
            <MapPin
              className="shrink-0 size-6 text-white/15"
              strokeWidth={1.5}
            />
            <div>
              <div className="text-base font-display font-medium text-white/75">
                Gevestigd in Friesland
              </div>
              <div className="text-sm text-white/25 mt-0.5">
                Lokale kennis, bereikbaar voor heel Nederland.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. Process steps ───────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "Kennismaking",
    description:
      "30 minuten gratis gesprek. We luisteren naar uw doelen, analyseren uw situatie en leggen eerlijk uit wat we kunnen betekenen.",
  },
  {
    number: "02",
    title: "Design & iteratie",
    description:
      "U ziet het ontwerp voordat één regel code wordt geschreven. Twee feedbackrondes tot het precies klopt.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Next.js met volledige SEO-configuratie, snelheid en beveiliging. Live volgen via een stagingomgeving.",
  },
  {
    number: "04",
    title: "Live & doorgroeien",
    description:
      "Launch en domeinkoppeling. Optioneel: maandelijks beheer en SEO-rapport zodat uw positie blijft groeien.",
  },
];

export function WebsitesProcess() {
  return (
    <section className="bg-[#020202] px-6 py-24 lg:py-32 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 lg:mb-20 gap-4"
        >
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/25 block mb-4">
              Hoe het werkt
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white tracking-tight leading-tight">
              Van gesprek tot{" "}
              <span className="text-[#3662e3]">live website.</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-[11px] text-white/30 hover:text-white/60 transition-colors duration-200 font-mono uppercase tracking-[0.18em]"
          >
            Start hier
            <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
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
              <span className="font-mono text-[11px] text-[#3662e3]/40 tracking-[0.2em] block mb-8">
                {step.number}
              </span>
              <h3 className="text-[1.1rem] font-display font-semibold text-white/70 group-hover:text-white transition-colors duration-300 mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-white/22 group-hover:text-white/38 transition-colors duration-300 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. Cases strip ─────────────────────────────────────────────────────────

export function WebsitesCasesStrip() {
  return (
    <section className="bg-[#020202] px-6 py-24 lg:py-32 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4"
        >
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/25 block mb-4">
              Bewezen resultaten
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white tracking-tight">
              Wat het oplevert.
            </h2>
          </div>
          <Link
            href="/cases"
            className="group inline-flex items-center gap-2 text-[11px] text-white/30 hover:text-white/60 transition-colors duration-200 font-mono uppercase tracking-[0.18em]"
          >
            Alle cases
            <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          {caseStudies.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={`/cases/${c.slug}`}
                className="group flex flex-col h-full rounded-2xl bg-white/[0.025] border border-white/[0.055] p-7 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/22">
                    {c.sector}
                  </span>
                  <ArrowRight
                    className="size-3.5 text-white/15 group-hover:text-[#3662e3] group-hover:translate-x-0.5 transition-all duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Client */}
                <h3 className="text-lg font-display font-semibold text-white/70 group-hover:text-white transition-colors duration-300 mb-3 tracking-tight">
                  {c.client}
                </h3>

                {/* Summary */}
                <p className="text-sm text-white/22 leading-relaxed flex-1 mb-6">
                  {c.summary}
                </p>

                {/* Metrics */}
                <div className="flex items-center gap-5 pt-4 border-t border-white/[0.05]">
                  {c.metrics.slice(0, 2).map((m) => (
                    <div key={m.label}>
                      <div className="text-xl font-display font-semibold text-[#3662e3] tracking-tight">
                        {m.value}
                      </div>
                      <div className="text-[9px] text-white/22 font-mono uppercase tracking-[0.12em] mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. Dark CTA ────────────────────────────────────────────────────────────

export function WebsitesDarkCTA() {
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

          <div className="relative z-10 max-w-xl mx-auto">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/25 block mb-6">
              Klaar om te starten?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white tracking-tight leading-tight mb-5">
              Laten we iets{" "}
              <span className="text-[#3662e3]">goeds bouwen.</span>
            </h2>
            <p className="text-base text-white/35 leading-relaxed mb-10">
              Vrijblijvend gesprek van 30 minuten. We kijken naar uw situatie
              en geven eerlijk advies — ook als dat betekent dat we niet de
              beste match zijn.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href="/contact"
                className="h-13 px-9 text-[15px] rounded-full bg-[#3662e3] text-white hover:bg-[#2a52d4] hover:scale-[1.02] transition-all font-medium"
              >
                Plan een gesprek
              </ButtonLink>
              <ButtonLink
                href="/pakketten"
                className="h-13 px-9 text-[15px] rounded-full bg-transparent border border-white/12 text-white/55 hover:border-white/22 hover:text-white/80 transition-all"
              >
                Bekijk pakketten
              </ButtonLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
