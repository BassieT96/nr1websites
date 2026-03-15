"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Briefcase, Building2, Rocket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Magnetic } from "@/components/ui/Magnetic";
import { cn } from "@/lib/utils";

export function TargetAudienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const bgTextX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const audiences = [
    {
      title: "Startende Bedrijven",
      lead: "Leg direct een professionele basis die je onderneming geloofwaardig neerzet vanaf dag één.",
      points: [
        "Snelle livegang zonder technische ruis.",
        "Heldere structuur waarmee bezoekers direct begrijpen wat je doet.",
        "Een uitstraling die vertrouwen opbouwt vanaf het eerste bezoek.",
      ],
      href: "/voor-startende-bedrijven",
      icon: Rocket,
      color: "rgba(244, 114, 55, 0.08)",
      accent: "text-orange-400 bg-orange-500/20 border-orange-500/30",
      dot: "bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.6)]",
      image: "/images/startup_bg.png"
    },
    {
      title: "Ervaren ZZP'ers",
      lead: "Vervang je online visitekaartje door een website die actief nieuwe aanvragen oplevert.",
      points: [
        "Sterke positionering voor jouw specialisme.",
        "Strakke pagina-opbouw die bezoekers richting contact stuurt.",
        "Minder losse vragen, meer aanvragen met serieuze intentie.",
      ],
      href: "/voor-zzpers",
      icon: Briefcase,
      color: "rgba(37, 99, 235, 0.08)",
      accent: "text-blue-400 bg-blue-500/20 border-blue-500/30",
      dot: "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]",
      image: "/images/freelancer_bg.png"
    },
    {
      title: "Kleine MKB'ers",
      lead: "Maak je website een stabiel verkoopkanaal voor lokale groei in Lemmer en Friesland.",
      points: [
        "Lokale vindbaarheid voor commerciële zoekopdrachten.",
        "Schaalbare structuur voor diensten, cases en landingspagina's.",
        "Duidelijke CTA's zodat prospects sneller een gesprek plannen.",
      ],
      href: "/voor-kleine-bedrijven",
      icon: Building2,
      color: "rgba(16, 185, 129, 0.08)",
      accent: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
      dot: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]",
      image: "/images/sme_bg.png"
    },
  ];

  return (
    <section ref={sectionRef} className="page-section bg-background overflow-hidden relative">
      {/* Background Parallax Typography */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
         <motion.div 
           style={{ x: bgTextX }}
           className="absolute -top-10 left-0 text-[18rem] font-display font-bold text-foreground/[0.015] leading-none whitespace-nowrap select-none"
         >
           TARGET AUDIENCE
         </motion.div>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="container-content gap-8 mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-24 max-w-3xl mx-auto relative flex flex-col items-center">
          {/* Ambient Glow behind header */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2" style={{ background: "radial-gradient(circle, rgba(54,98,227,0.06) 0%, transparent 65%)" }} />
          
          <div className="overflow-hidden pb-2 mb-4">
            <motion.span variants={{ hidden: { y: "120%" }, visible: { y: "0%", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }} className="section-kicker italic text-muted-strong block mb-0">
              Jouw Digitale Partner
            </motion.span>
          </div>
          <div className="overflow-hidden pb-4">
            <motion.h2 variants={{ hidden: { y: "120%", rotateZ: 3 }, visible: { y: "0%", rotateZ: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="type-section-title text-foreground tracking-tight origin-top-left">
              Wij bouwen voor <span className="text-gradient-primary">doeners</span>
            </motion.h2>
          </div>
          <div className="overflow-hidden pt-2">
            <motion.p variants={{ hidden: { y: "120%" }, visible: { y: "0%", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="type-body-lead text-muted mt-2 mb-6 text-balance leading-relaxed">
              Onze websites zijn geen standaard sjablonen, maar maatwerk machines ontworpen voor ondernemers die vooruit willen in Lemmer en overig Friesland.
            </motion.p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row h-auto lg:h-[70vh] min-h-[600px] w-full gap-4 lg:gap-6 mt-12">
            {audiences.map((item, i) => {
              const isActive = activeIdx === i;

              return (
                <motion.div 
                  key={item.title}
                  layout
                  onHoverStart={() => setActiveIdx(i)}
                  onFocus={() => setActiveIdx(i)}
                  onClick={() => setActiveIdx(i)}
                  transition={{ type: "spring", stiffness: 250, damping: 30, mass: 1 }}
                  className={cn(
                    "relative overflow-hidden cursor-pointer rounded-[2rem] border border-white/[0.08] transition-colors duration-500 flex flex-col group",
                    isActive ? "lg:flex-[3.5] bg-[#121212] shadow-[0_20px_40px_rgba(0,0,0,0.4)] border-white/[0.2]" : "lg:flex-1 bg-[#1a1a1a] hover:bg-[#222]"
                  )}
                  style={{ minHeight: isActive ? "450px" : "120px" }}
                >
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem]">
                    {/* Overlay gradient only covering the bottom so text is readable */}
                    <div className={cn(
                      "absolute inset-0 z-10 transition-all duration-700 pointer-events-none",
                      isActive 
                        ? "bg-gradient-to-t from-black via-black/30 to-transparent" 
                        : "bg-black/60"
                    )} />
                    <Image 
                      src={item.image!} 
                      alt={item.title} 
                      fill
                      className={cn(
                        "object-cover transition-all duration-1000 ease-out",
                        isActive ? "scale-105 opacity-100" : "scale-100 opacity-30"
                      )}
                    />
                  </div>
                  
                  {/* Subtle Noise Texture */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none noise-bg z-20" />

                  {/* Content Container */}
                  <div className="relative z-30 h-full w-full p-6 lg:p-10 flex flex-col justify-end">
                    
                    {/* Collapsed State (Desktop Only) */}
                    <div className={cn(
                      "absolute inset-0 flex-col items-center justify-between py-10 transition-opacity duration-300 hidden lg:flex",
                      isActive ? "opacity-0 pointer-events-none" : "opacity-100 delay-100"
                    )}>
                      <span className="font-mono text-xs uppercase tracking-widest text-white/40">0{i + 1}</span>
                      
                      <h3 className="text-white/60 font-display text-2xl tracking-[0.2em] font-medium -rotate-180 transition-colors duration-300 group-hover:text-white/90" style={{ writingMode: "vertical-rl" }}>
                        {item.title}
                      </h3>
                      
                      <div className={cn("size-12 rounded-2xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110", item.accent)}>
                         <item.icon className="size-5" />
                      </div>
                    </div>

                    {/* Collapsed State (Mobile Only) */}
                    <div className={cn(
                      "flex items-center gap-4 transition-opacity duration-300 lg:hidden",
                      isActive ? "opacity-0 absolute pointer-events-none" : "opacity-100"
                    )}>
                      <div className={cn("size-12 rounded-xl border flex items-center justify-center shrink-0", item.accent)}>
                         <item.icon className="size-5" />
                      </div>
                      <h3 className="text-white/80 font-display text-xl font-medium tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    {/* Expanded State */}
                    <div className={cn(
                      "flex flex-col h-full justify-between transition-all duration-[600ms] w-full lg:w-[480px] max-w-full",
                      isActive ? "opacity-100 translate-y-0 visible delay-100" : "opacity-0 translate-y-8 invisible absolute pointer-events-none"
                    )}>
                       <div className="flex justify-between items-start">
                         <div className={cn("size-14 rounded-2xl border flex items-center justify-center shadow-lg", item.accent)}>
                           <item.icon className="size-6" />
                         </div>
                         <span className="font-mono text-[0.67rem] uppercase tracking-[0.2em] text-white/60 bg-black/60 px-4 py-2 rounded-full border border-white/10">
                           Doelgroep 0{i + 1}
                         </span>
                       </div>

                       <div className="mt-auto pt-8">
                         <h3 className="font-display text-white font-bold tracking-tight text-3xl lg:text-5xl">
                           {item.title}
                         </h3>
                         <p className="mt-4 leading-relaxed text-white/70 text-lg">
                           {item.lead}
                         </p>

                         <ul className="mt-8 space-y-4">
                           {item.points.map((point) => (
                             <li key={point} className="flex items-start gap-4">
                               <span className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", item.dot)} />
                               <span className="text-[0.95rem] leading-relaxed text-white/80">{point}</span>
                             </li>
                           ))}
                         </ul>

                         <div className="mt-10 lg:mt-12 inline-flex">
                           <Magnetic strength={0.3}>
                             <Link
                               href={item.href}
                               className="inline-flex items-center gap-2 font-semibold bg-white text-black px-7 py-3.5 rounded-full hover:scale-105 hover:bg-white/90 transition-all duration-300 text-sm shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                             >
                               Bekijk doelgroeppagina
                               <ArrowRight className="size-4" />
                             </Link>
                           </Magnetic>
                         </div>
                       </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
        </div>
      </motion.div>
    </section>
  );
}
