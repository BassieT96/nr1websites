"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Paintbrush, Code2, LineChart, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";

const services = [
  {
    icon: Paintbrush,
    title: "Webdesign",
    description: "Design dat niet alleen mooi is, maar psychologisch is ingericht om vertrouwen te wekken en actie te stimuleren.",
    color: "from-blue-600/20 to-cyan-500/5",
    accent: "text-blue-400"
  },
  {
    icon: Code2,
    title: "Development",
    description: "Supersnelle Next.js architectuur die zorgt for frictieloze laadtijden en een perfecte technische SEO-score.",
    color: "from-blue-600/20 to-blue-900/5",
    accent: "text-blue-400"
  },
  {
    icon: LineChart,
    title: "Conversie",
    description: "Strakke funnels en slimme CTA's die bezoekers moeiteloos transformeren in kwalitatieve aanvragen.",
    color: "from-emerald-500/20 to-teal-500/5",
    accent: "text-emerald-400"
  },
  {
    icon: Cpu,
    title: "Beheer & Tech",
    description: "Volledige technische ontzorging, beveiliging en razendsnelle hosting zodat jij je kunt focussen op je zaak.",
    color: "from-amber-500/20 to-orange-500/5",
    accent: "text-amber-400"
  }
];

export function WebsitesServiceGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgTextX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section ref={containerRef} className="relative py-24 lg:py-48 px-6 bg-[#020202] overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Parallax Background Text */}
        <motion.div 
          style={{ x: bgTextX }}
          className="absolute top-[20%] left-0 whitespace-nowrap opacity-[0.03] select-none"
        >
          <span className="text-[25vw] font-black text-white leading-none tracking-tighter">
            SOLUTIONS • EXPERTISE • QUALITY
          </span>
        </motion.div>

        {/* Ambient Glows */}
        <div className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] bg-primary/10 blur-[150px] rounded-full opacity-30" />
        <div className="absolute bottom-0 -left-[10%] w-[40vw] h-[40vw] bg-accent/5 blur-[120px] rounded-full opacity-20" />
      </div>

      <div className="container-content mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              {/* Card Container with Internal Parallax Effect */}
              <div className="relative h-full rounded-[4rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl p-10 lg:p-20 overflow-hidden transition-all duration-700 hover:border-white/20 hover:bg-white/[0.04] shadow-[0_48px_120px_-12px_rgba(0,0,0,0.6)] group-hover:-translate-y-2">
                
                {/* Background Accent Glow */}
                <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-br", service.color)} />
                <div className="absolute inset-0 opacity-[0.02] noise-bg mix-blend-overlay" />
                
                {/* Icon Box with Advanced Glow & Morphology */}
                <div className="relative mb-12">
                  <div className={cn("absolute inset-0 blur-3xl opacity-0 group-hover:opacity-60 transition-all duration-1000 scale-150 rounded-full", service.accent.replace('text-', 'bg-'))} />
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative size-24 rounded-3xl bg-black/40 border border-white/10 flex items-center justify-center backdrop-blur-xl shadow-2xl transition-all duration-700 group-hover:border-white/30"
                  >
                    <service.icon className={cn("size-12 transition-transform duration-700 group-hover:scale-110", service.accent)} strokeWidth={1} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative">
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/20 mb-4 block">
                    Focus 0{index + 1}
                  </span>
                  <h3 className="text-4xl lg:text-6xl font-display font-medium text-white mb-8 tracking-tight leading-none">
                    {service.title}
                  </h3>
                  <p className="text-xl lg:text-2xl text-white/30 leading-relaxed font-light font-sans max-w-xl group-hover:text-white/60 transition-colors duration-500 text-pretty">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Interactive Indicator - Sophisticated Morphology */}
                <div className="absolute bottom-12 right-12 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                  <div className={cn("size-14 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-xl transition-colors duration-500", service.accent.replace('text-', 'group-hover:border-'))}>
                    <div className={cn("size-2 rounded-full", service.accent.replace('text-', 'bg-'))} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
