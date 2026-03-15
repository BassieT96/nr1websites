"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { usePerformanceProfile } from "@/lib/use-performance-profile";

const steps = [
  {
    number: "01",
    title: "Kennismaking & Strategie",
    description:
      "We starten met een gesprek om jouw bedrijfsdoelen te begrijpen. We bepalen direct de juiste SEO-structuur en de commerciële boodschap voor de hoogste conversie.",
  },
  {
    number: "02",
    title: "Design & Prototype",
    description:
      "We vertalen de strategie naar een premium ontwerp dat rust, vertrouwen en duidelijkheid uitstraalt voordat de developmentfase begint.",
  },
  {
    number: "03",
    title: "Next.js Development",
    description:
      "We bouwen het ontwerp technisch strak uit met focus op laadsnelheid, semantiek en een soepele ervaring op mobiel en desktop.",
  },
  {
    number: "04",
    title: "Livegang & Groei",
    description:
      "Na tests en feedback gaat de site live. Daarna kan de structuur verder meegroeien met extra diensten, cases en lokale SEO-pagina's.",
  },
];

export function ProcessSection({ compact }: { compact?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { allowHeavyMotion } = usePerformanceProfile();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollYDelayed = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001
  });

  // Full lifecycle transforms for sticky content (Entrance -> Stay -> Exit)
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [60, 0, 0, -60]);
  const headerBlur = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], ["blur(15px)", "blur(0px)", "blur(0px)", "blur(15px)"]);
  
  // Dynamic path length mapping
  useTransform(scrollYDelayed, [0, 1], [0, 1.2]);

  if (!allowHeavyMotion) {
    return (
      <section
        className={compact ? "deferred-section relative bg-[#fafafa] pb-20 pt-12" : "deferred-section relative overflow-hidden border-y border-black/[0.03] bg-[#fafafa] py-24 lg:py-32"}
      >
        <div className="container-content relative z-10 mx-auto px-6">
          <div className="mb-14 max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-10 bg-accent/30" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-400">Werkwijze</span>
            </div>
            <h2 className="mb-6 text-4xl font-display font-medium leading-[0.95] tracking-tight text-zinc-900 lg:text-7xl">
              De weg naar <span className="text-accent italic font-light">succes</span>.
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600 lg:text-2xl">
              Geen vaag bureaujargon, maar een helder proces dat snelheid, kwaliteit en conversie tegelijk bewaakt.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {steps.map((step) => (
              <article key={step.number} className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
                <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-accent/70">
                  Fase {step.number}
                </span>
                <h3 className="mb-4 text-2xl font-display font-medium text-zinc-900 lg:text-3xl">{step.title}</h3>
                <p className="text-base leading-relaxed text-zinc-600 lg:text-lg">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={containerRef} 
      className={compact ? "deferred-section relative bg-[#fafafa] pb-20 pt-12" : "deferred-section relative page-section bg-[#fafafa] py-32 lg:py-64 border-y border-black/[0.03] overflow-hidden"}
    >
      {/* ... backgrounds unchanged ... */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Fluid Mesh Ambience */}
        <div className="absolute inset-0 overflow-hidden">
          {allowHeavyMotion ? (
            <>
              <motion.div
                animate={{ x: [0, 40, 0], y: [0, -20, 0], rotate: [0, 45, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-primary/[0.03] blur-[120px] rounded-full mix-blend-multiply"
              />
              <motion.div
                animate={{ x: [0, -30, 0], y: [0, 40, 0], rotate: [0, -30, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-accent/[0.03] blur-[100px] rounded-full mix-blend-multiply"
              />
            </>
          ) : (
            <>
              <div className="absolute top-[10%] left-[5%] w-[50vw] h-[50vw]" style={{ background: "radial-gradient(circle, rgba(24,24,27,0.04) 0%, transparent 60%)" }} />
              <div className="absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw]" style={{ background: "radial-gradient(circle, rgba(54,98,227,0.04) 0%, transparent 60%)" }} />
            </>
          )}
        </div>

        {/* Blueprint Markers */}
        <div className="absolute inset-0 opacity-[0.08]">
           <div className="absolute top-20 left-20 size-8 border-l border-t border-black/20" />
           <div className="absolute top-20 right-20 size-8 border-r border-t border-black/20" />
           <div className="absolute bottom-20 left-20 size-8 border-l border-b border-black/20" />
           <div className="absolute bottom-20 right-20 size-8 border-r border-b border-black/20" />
        </div>
        
        {/* Grain Texture */}
        <div className="absolute inset-0 noise-bg opacity-[0.08] mix-blend-multiply" />
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="container-content relative z-10 mx-auto px-6"
      >
        <div className="flex flex-col lg:flex-row gap-20">
          <motion.div 
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { type: "spring", damping: 25 } } }}
            className="lg:w-1/3"
          >
             <motion.div style={{ opacity: headerOpacity, y: headerY, ...(allowHeavyMotion ? { filter: headerBlur } : {}) }} className="sticky top-40">
               <div className="flex items-center gap-3 mb-10 translate-x-[-4px]">
                   <div className="h-px w-10 bg-accent/30" />
                   <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-[0.4em]">
                       Werkwijze
                   </span>
               </div>
                <motion.h2 
                  initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 1.5, ease: [0.215, 0.61, 0.355, 1.0] }}
                  className="text-6xl lg:text-[7.5rem] font-display font-medium text-zinc-900 tracking-tighter leading-[0.85] mb-12 flex flex-col items-start translate-x-[-4px]"
                >
                  <span className="block">
                    De weg naar
                  </span>
                  <span className="text-accent italic font-light flex items-baseline gap-2 translate-y-[-5%]">
                    succes
                    <span className="text-zinc-900 not-italic font-medium">.</span>
                  </span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "0px" }}
                  transition={{ duration: 1.5, ease: [0.215, 0.61, 0.355, 1.0] }}
                  className="text-xl lg:text-3xl text-zinc-500 mb-8 text-balance max-w-sm font-extralight leading-relaxed tracking-tight group"
                >
                  Geen vaag bureau <span className="group-hover:text-accent transition-colors duration-500">jargon</span>, maar een efficiënt proces dat focust op <span className="italic text-zinc-400">resultaat</span>.
                </motion.p>
             </motion.div>
          </motion.div>
          
          <div className="lg:w-2/3">
             <div className="space-y-5 relative">
               <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } } }}>
                 <article className="rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_24px_48px_rgba(0,0,0,0.04)] lg:p-10">
                   <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.4em] text-accent/50">Fase 01</span>
                   <h3 className="mb-4 text-3xl font-display font-medium text-zinc-900 lg:text-4xl">Kennismaking & Strategie</h3>
                   <p className="text-lg leading-relaxed text-zinc-500">We starten met een (vaak lokaal) gesprek om jouw bedrijfsdoelen te begrijpen. We bepalen direct de juiste SEO structuur en de commerciële boodschap voor de hoogste conversie.</p>
                 </article>
               </motion.div>
               <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } } }}>
                 <article className="rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_24px_48px_rgba(0,0,0,0.04)] lg:p-10">
                   <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.4em] text-accent/50">Fase 02</span>
                   <h3 className="mb-4 text-3xl font-display font-medium text-zinc-900 lg:text-4xl">Design & Prototype</h3>
                   <p className="text-lg leading-relaxed text-zinc-500">Onze experts sleutelen aan een high-end prototype. Dit is de fase waar we het design zo finetunen dat je merk er premium, betrouwbaarder en strakker uitziet dan je beste concurrent.</p>
                 </article>
               </motion.div>
               <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } } }}>
                 <article className="rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_24px_48px_rgba(0,0,0,0.04)] lg:p-10">
                   <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.4em] text-accent/50">Fase 03</span>
                   <h3 className="mb-4 text-3xl font-display font-medium text-zinc-900 lg:text-4xl">Next.js Development</h3>
                   <p className="text-lg leading-relaxed text-zinc-500">We realiseren het design pixel-perfect in code. Door de krachtige Next.js fundamenten garanderen we laadtijden onder een seconde: cruciaal om bezoekers vast te houden.</p>
                 </article>
               </motion.div>
               <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } } }}>
                 <article className="rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_24px_48px_rgba(0,0,0,0.04)] lg:p-10">
                   <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.4em] text-accent/50">Fase 04</span>
                   <h3 className="mb-4 text-3xl font-display font-medium text-zinc-900 lg:text-4xl">Livegang & Groei</h3>
                   <p className="text-lg leading-relaxed text-zinc-500">Na iteratie en tests drukken we vol vertrouwen op lanceren. Vanaf dat moment is de website een lead-genererende machine en beheren wij het technisch beheer.</p>
                 </article>
               </motion.div>
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
