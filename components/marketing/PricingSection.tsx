"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Sparkles, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

// --- Internal Premium Card Component ---

function PremiumPricingCard({
  tier,
  price,
  features,
  isPopular = false,
  index,
}: {
  tier: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  index: number;
}) {
  const icons = [Zap, Sparkles, Rocket];
  const Icon = icons[index % icons.length];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 } 
        },
      }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border p-8 lg:p-10 transition-colors duration-700",
        isPopular 
          ? "bg-[#0A0A0A]/60 border-accent/30 shadow-[0_30px_100px_rgba(37,99,235,0.15)]" 
          : "bg-white/[0.02] border-white/10 hover:border-white/20 shadow-2xl"
      )}
    >
      {/* Internal Noise */}
      <div className="absolute inset-0 opacity-[0.03] noise-bg pointer-events-none mix-blend-overlay" />

      {/* Card Header & Icon */}
      <div className="relative z-10 flex items-start justify-between mb-8">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block">{tier}</span>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl lg:text-5xl font-display font-medium text-white tracking-tight">{price}</span>
            <span className="text-[10px] uppercase tracking-widest text-white/30 font-mono">eenmalig</span>
          </div>
        </div>
        <div className={cn(
          "size-12 lg:size-14 rounded-2xl flex items-center justify-center border transition-all duration-700 group-hover:scale-110",
          isPopular 
            ? "bg-accent/20 border-accent/40 text-accent" 
            : "bg-white/5 border-white/10 text-white/60"
        )}>
          <Icon className="size-6 lg:size-7" strokeWidth={1.5} />
        </div>
      </div>

      {isPopular && (
        <div className="relative z-10 mb-8">
          <Badge className="bg-accent border-none text-white px-4 py-1 text-[10px] font-bold tracking-widest uppercase">
            Aanbevolen
          </Badge>
        </div>
      )}

      {/* Feature List */}
      <ul className="relative z-10 space-y-4 mb-10 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-4 text-sm lg:text-base text-white/50 leading-relaxed font-light">
            <div className={cn(
              "mt-1 size-5 rounded-full flex items-center justify-center shrink-0 border transition-colors duration-500",
              isPopular ? "border-accent/40 bg-accent/10 text-accent" : "border-white/10 bg-white/5 text-white/30"
            )}>
              <Check className="size-3" strokeWidth={3} />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button className={cn(
        "relative z-10 w-full py-4 rounded-xl font-display text-sm font-medium tracking-tight overflow-hidden transition-all duration-500 group/btn transform-gpu",
        isPopular 
          ? "bg-accent text-white hover:bg-accent-strong" 
          : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
      )}>
        <span className="relative z-10 flex items-center justify-center gap-2">
          Plan strategiesessie
          <Rocket className="size-4 opacity-0 -translate-x-2 transition-all duration-500 group-hover/btn:opacity-100 group-hover/btn:translate-x-0" />
        </span>
        {/* Shine reflect effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />
      </button>
    </motion.div>
  );
}

// --- Main Section Component ---

export function PricingSection() {
  return (
    <section className="relative py-24 lg:py-40 bg-[#050505] overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Atmospheric Orbs */}
        <div className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw]" style={{ background: "radial-gradient(circle, rgba(54,98,227,0.1) 0%, transparent 60%)" }} />
        <div className="absolute top-[40%] -right-[15%] w-[60vw] h-[60vw]" style={{ background: "radial-gradient(circle, rgba(179,136,255,0.1) 0%, transparent 60%)" }} />
        
        {/* Subtle Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)", 
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
          }} 
        />
        
        {/* Grain overlay */}
        <div className="absolute inset-0 noise-bg opacity-[0.2] mix-blend-overlay" />
      </div>


      <div className="container-content relative z-10 mx-auto px-6 max-w-7xl">
        <header className="mb-16 lg:mb-24 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 font-mono text-[10px] uppercase tracking-widest mb-6">
              Helder & Transparant
            </span>
            <h2 className="text-5xl lg:text-8xl font-display font-medium text-white tracking-tight leading-[0.9] lg:-ml-1">
              Investering <br /> in jouw <span className="text-accent italic font-light">groei</span>
            </h2>
            <div className="flex flex-col lg:flex-row gap-6 mt-10 items-center lg:items-start">
              <p className="text-xl lg:text-2xl text-white/40 max-w-2xl font-light leading-relaxed">
                Drie heldere routes naar een website die sneller laadt, professioneler oogt en meer aanvragen oplevert.
              </p>
              <div className="shrink-0 space-y-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 border-l border-white/10 pl-6 hidden lg:block">
                <p>Geen verborgen kosten</p>
                <p>Oplevering volgens plan</p>
                <p>Voor starters &amp; ZZP&apos;ers</p>
              </div>
            </div>
          </motion.div>
        </header>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <PremiumPricingCard
            index={0}
            tier="Starter Site"
            price="€1.490"
            features={[
              "Professioneel responsive design",
              "Snelle Next.js architectuur",
              "SEO-basis setup",
              "Contact & offerte formulier",
              "Lokale Google koppeling"
            ]}
          />
          <PremiumPricingCard
            index={1}
            isPopular
            tier="Groei Site"
            price="€2.950"
            features={[
              "Premium Awwwards style animaties",
              "Uitgebreide SEO-optimalisatie",
              "Diensten & Projecten landingspagina's",
              "Basis conversie-copywriting",
              "Integratie web analytics"
            ]}
          />
          <PremiumPricingCard
            index={2}
            tier="Leadmachine Pro"
            price="€4.850"
            features={[
              "Volledige conversie copywriting",
              "Lokale SEO bestemmingsclusters",
              "Complexe funnel integraties",
              "Maatwerk componenten bibliotheek",
              "Prioriteit in support & iteraties"
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}
