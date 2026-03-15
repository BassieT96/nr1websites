"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, ShieldCheck, MapPin, TrendingUp } from "lucide-react";
import { usePerformanceProfile } from "@/lib/use-performance-profile";
import { cn } from "@/lib/utils";

type ServicesSectionProps = {
  description?: string;
  eyebrow?: string;
  includeAll?: boolean;
  title?: string;
};

export function ServicesSection({
  description,
  eyebrow,
  includeAll = false,
  title,
}: ServicesSectionProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { allowHeavyMotion } = usePerformanceProfile();
  
  const resolvedEyebrow = eyebrow ?? (includeAll ? "Diensten & Resultaat" : "Bewijsbare Impact");
  const resolvedTitle =
    title ?? (includeAll ? "Diensten die zichtbaar bijdragen aan groei" : "Meer dan een visitekaartje");
  const resolvedDescription =
    description ??
    "Een website van nr1websites.nl is ontworpen om commercieel te presteren. Wij focussen op de vier technische pijlers die resultaat opleveren.";

  const services = [
    {
      icon: Zap,
      title: "Sneller Laden",
      description: "Next.js architectuur zorgt voor supersnelle laadtijden. Bezoekers haken niet af en Google beloont je site met een hogere ranking.",
      color: "bg-[#00E5FF]",
      accent: "text-[#00E5FF]",
      hex: "#00E5FF",
    },
    {
      icon: ShieldCheck,
      title: "Premium Merk",
      description: "Overtuig potentiële klanten direct met een design dat autoriteit en professionaliteit uitstraalt, waardoor ze sneller voor jou kiezen.",
      color: "bg-[#B388FF]",
      accent: "text-[#B388FF]",
      hex: "#B388FF",
    },
    {
      icon: MapPin,
      title: "Lokaal Gevonden",
      description: "Technische SEO specifiek ingericht voor lokale dominantie, zodat jij bovenaan de zoekresultaten in Lemmer en Friesland verschijnt.",
      color: "bg-[#00E676]",
      accent: "text-[#00E676]",
      hex: "#00E676",
    },
    {
      icon: TrendingUp,
      title: "Meer Aanvragen",
      description: "Strategische CTA's en frictieloze funnels zorgen ervoor dat bezoekers soepeler veranderen in kwalitatieve warme leads.",
      color: "bg-[#FFAB00]",
      accent: "text-[#FFAB00]",
      hex: "#FFAB00",
    }
  ];

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Moves the horizontal track leftwards based on scroll depth (5 slides total now)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  if (!allowHeavyMotion) {
    return (
      <section className="deferred-section bg-[#050505] px-6 py-24 lg:py-32">
        <div className="container-content mx-auto">
          <div className="mb-14 max-w-3xl">
            <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 font-mono text-xs uppercase tracking-widest text-white/50">
              {resolvedEyebrow}
            </span>
            <h2 className="mb-6 text-4xl font-display font-medium tracking-tight text-white lg:text-6xl">
              {resolvedTitle}
            </h2>
            <p className="text-lg leading-relaxed text-white/55">{resolvedDescription}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/40">
                    <service.icon className={cn("h-7 w-7", service.accent)} strokeWidth={1.8} />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/35">
                    Pijler 0{index + 1}
                  </span>
                </div>
                <h3 className="mb-4 text-3xl font-display font-semibold text-white">{service.title}</h3>
                <p className="text-base leading-relaxed text-white/60">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section ref={targetRef} className="deferred-section relative h-[500vh] bg-[#050505]">
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden bg-[#050505]">
        
        {/* Ambient Dark Tech Background (Static Grain + Grid) */}
        <div className="absolute inset-0 pointer-events-none z-0">
           {/* Dark Grid Background */}
           <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)" }} />
           {/* Noise overlay */}
           <div className="absolute inset-0 bg-[#050505] opacity-80 noise-bg mix-blend-overlay" />
        </div>

        {/* Horizontal Scroll Track */}
        <motion.div 
          style={{ x }} 
          className="flex h-full w-[500vw] relative z-10"
        >
          {/* Slide 0: Intro Header now integrated into the flow */}
          <div className="w-screen h-full flex flex-col justify-center px-6 lg:px-24">
            <div className="container-content mx-auto max-w-7xl w-full">
               <span className="inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 font-mono text-xs uppercase tracking-widest mb-6">
                 {resolvedEyebrow}
               </span>
               <h2 className="font-display font-medium text-5xl lg:text-7xl lg:text-[5.5rem] text-white max-w-5xl tracking-tight leading-[1.05] drop-shadow-lg">
                 {resolvedTitle}
               </h2>
               <p className="text-white/50 mt-8 text-xl lg:text-2xl max-w-3xl leading-relaxed font-light">
                 {resolvedDescription}
               </p>
            </div>
          </div>

          {services.map((service, index) => {
            return (
              <div 
                key={service.title} 
                className="w-screen h-full flex items-center justify-center relative p-6 lg:p-24"
              >
                {/* Glowing Abstract Orb — radial-gradient, no blur filter */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] pointer-events-none z-0"
                  style={{ background: `radial-gradient(circle at center, ${service.hex}26 0%, transparent 60%)` }} />

                {/* Service Card */}
                <div className="relative z-10 w-full max-w-5xl rounded-[2.5rem] bg-black/40 border border-white/10 p-10 lg:p-20 shadow-[0_40px_80px_rgba(0,0,0,0.8)] flex flex-col md:flex-row gap-10 lg:gap-16 items-center lg:items-center group hover:border-white/20 transition-all duration-700 overflow-hidden h-[60vh] lg:h-auto min-h-[400px]">
                   
                   {/* Card Internal Noise */}
                   <div className="absolute inset-0 opacity-[0.02] noise-bg pointer-events-none mix-blend-overlay" />
                   
                   {/* Tech Icon Box */}
                   <div className="shrink-0 relative">
                     {/* The icon container */}
                     <div className="relative size-28 lg:size-40 rounded-[2rem] bg-black/50 border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden transition-transform duration-700 group-hover:scale-105">
                       {/* Top gleam */}
                       <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] to-transparent pointer-events-none" />
                       <service.icon className={cn("size-12 lg:size-16 drop-shadow-lg", service.accent)} strokeWidth={1.5} />
                     </div>
                   </div>

                   {/* Content */}
                   <div className="flex-1 text-center md:text-left flex flex-col justify-center h-full">
                     <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/30 mb-4 block">
                       Pijler 0{index + 1} — Succesfactor
                     </span>
                     <h3 className="text-4xl lg:text-6xl font-display font-semibold text-white tracking-tight mb-6 leading-tight drop-shadow-sm">
                       {service.title}
                     </h3>
                     <p className="text-lg lg:text-2xl text-white/50 leading-relaxed font-light max-w-2xl text-pretty">
                       {service.description}
                     </p>
                   </div>
                </div>

              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
