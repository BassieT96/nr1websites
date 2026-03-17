"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MonitorSmartphone, Code2, SearchCheck, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";
import { usePerformanceProfile } from "@/lib/use-performance-profile";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Webdesign",
    lead: "Unieke en professionele ontwerpen die passen bij jouw merk en doelgroep.",
    points: [
      "Visueel sterk en op maat gemaakt.",
      "Focus op conversie en gebruiksvriendelijkheid.",
      "Onderscheidend van de concurrentie.",
    ],
    href: "/diensten/webdesign",
    icon: MonitorSmartphone,
    accent: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    dot: "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.3)]",
  },
  {
    title: "Webdevelopment",
    lead: "Snelle, moderne en gebruiksvriendelijke websites die technisch sterk zijn opgebouwd.",
    points: [
      "Gebouwd met Next.js voor maximale prestaties.",
      "Volledig schaalbaar en veilig.",
      "Naadloze weergave op elk apparaat.",
    ],
    href: "/diensten/development",
    icon: Code2,
    accent: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    dot: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]",
  },
  {
    title: "SEO optimalisatie",
    lead: "Verbeter je online vindbaarheid en trek meer relevante bezoekers aan.",
    points: [
      "Technische perfectie voor Google.",
      "Focus op lokale vindbaarheid.",
      "Data-gedreven en meetbare resultaten.",
    ],
    href: "/diensten/seo",
    icon: SearchCheck,
    accent: "text-orange-500 bg-orange-500/10 border-orange-500/20",
    dot: "bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  },
  {
    title: "Onderhoud & support",
    lead: "Doorlopende ondersteuning, updates en optimalisaties om alles soepel te laten draaien.",
    points: [
      "Altijd veilige, up-to-date systemen.",
      "Snelle responstijd bij vragen.",
      "Proactief meedenken over verbeteringen.",
    ],
    href: "/contact", // updated since no '/diensten/onderhoud' page is defined initially
    icon: HeartHandshake,
    accent: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    dot: "bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  },
];

export function DienstenServiceGrid() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const { allowPointerEffects, allowHeavyMotion } = usePerformanceProfile();

  const animationProps = allowHeavyMotion ? {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-100px" },
    variants: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    }
  } : {};

  return (
    <section className="page-section deferred-section bg-background overflow-hidden relative" id="dienstenoverzicht">
      <motion.div
        {...animationProps}
        className="container-content gap-8 mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-16 lg:mb-24 max-w-3xl mx-auto relative flex flex-col items-center">
          <div
            className="absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(54,98,227,0.06) 0%, transparent 65%)" }}
          />
          <div className="overflow-hidden pb-2 mb-4">
            <motion.span
              variants={{ hidden: { y: "120%" }, visible: { y: "0%", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
              className="section-kicker italic text-muted-strong block mb-0"
            >
              Wat wij doen
            </motion.span>
          </div>
          <div className="overflow-hidden pb-4">
            <motion.h2
              variants={{ hidden: { y: "120%", rotateZ: 3 }, visible: { y: "0%", rotateZ: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
              className="type-section-title text-foreground tracking-tight origin-top-left"
            >
              Uitgebreide <span className="text-gradient-primary">expertise</span>
            </motion.h2>
          </div>
          <div className="overflow-hidden pt-2">
            <motion.p
              variants={{ hidden: { y: "120%" }, visible: { y: "0%", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
              className="type-body-lead text-muted mt-2 mb-6 text-balance leading-relaxed"
            >
              Van de eerste schets tot een supersnelle lancering en ver daarbuiten. Wij nemen de volledige technische realisatie voor onze rekening.
            </motion.p>
          </div>
        </div>

        {/* Dynamic Horizontal Cards (Similar to TargetAudienceSection style but in surface theme) */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[650px] min-h-[600px] w-full gap-4 lg:gap-6 mt-12">
          {services.map((item, i) => {
            const isActive = activeIdx === i;

            return (
              <div
                key={item.title}
                onMouseEnter={() => setActiveIdx(i)}
                onFocus={() => setActiveIdx(i)}
                onClick={() => setActiveIdx(i)}
                className={cn(
                  "relative overflow-hidden cursor-pointer rounded-[2rem] border flex flex-col group",
                  isActive
                    ? "lg:flex-[3.5] bg-surface border-border shadow-[0_20px_40px_rgba(0,0,0,0.05)]"
                    : "lg:flex-1 bg-surface-strong/50 border-transparent hover:bg-surface/80"
                )}
                style={{
                  minHeight: isActive ? "450px" : "110px",
                  transition:
                    "flex 500ms cubic-bezier(0.3,0,0.1,1), min-height 500ms cubic-bezier(0.3,0,0.1,1), background-color 500ms ease, border-color 500ms ease, box-shadow 500ms ease",
                }}
              >
                {/* Background Subtle Gradient overlay */}
                <div className={cn(
                  "absolute inset-0 z-0 transition-opacity duration-700",
                  isActive ? "opacity-100 pointer-events-none" : "opacity-0"
                )}>
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[var(--surface-strong)] to-transparent opacity-40" />
                </div>

                <div className="relative z-30 h-full w-full p-6 lg:p-10 flex flex-col justify-end">

                  {/* Collapsed — desktop */}
                  <div className={cn(
                    "absolute inset-0 flex-col items-center justify-between py-10 transition-opacity duration-300 hidden lg:flex",
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100 delay-100"
                  )}>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-strong font-semibold block">0{i + 1}</span>
                    <h3
                      className="text-foreground font-display text-2xl tracking-[0.2em] font-medium -rotate-180 transition-colors duration-300 group-hover:text-primary"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      {item.title}
                    </h3>
                    <div className={cn("size-12 rounded-2xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110", item.accent)}>
                      <item.icon className="size-5" />
                    </div>
                  </div>

                  {/* Collapsed — mobile */}
                  <div className={cn(
                    "flex items-center gap-4 transition-opacity duration-300 lg:hidden",
                    isActive ? "opacity-0 absolute pointer-events-none" : "opacity-100"
                  )}>
                    <div className={cn("size-12 rounded-xl border flex items-center justify-center shrink-0", item.accent)}>
                      <item.icon className="size-5" />
                    </div>
                    <h3 className="text-foreground font-display text-xl font-medium tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Expanded */}
                  <div className={cn(
                    "flex flex-col h-full justify-between transition-all duration-500 w-full lg:w-[480px] max-w-full",
                    isActive
                      ? "opacity-100 translate-y-0 visible delay-100"
                      : "opacity-0 translate-y-8 invisible absolute pointer-events-none"
                  )}>
                    <div className="flex justify-between items-start">
                       <div className={cn("size-14 rounded-2xl border flex items-center justify-center shadow-sm", item.accent)}>
                         <item.icon className="size-6" />
                       </div>
                       <span className="font-mono text-[0.67rem] uppercase tracking-[0.2em] text-foreground font-semibold bg-surface-strong px-4 py-2 rounded-full border border-border">
                         Dienst 0{i + 1}
                       </span>
                    </div>

                    <div className="mt-auto pt-8">
                       <h3 className="font-display text-foreground font-bold tracking-tight text-3xl lg:text-5xl">
                         {item.title}
                       </h3>
                       <p className="mt-4 leading-relaxed text-muted text-lg font-medium">{item.lead}</p>

                       <ul className="mt-8 space-y-4">
                         {item.points.map((point) => (
                           <li key={point} className="flex items-start gap-4">
                             <span className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", item.dot)} />
                             <span className="text-[0.95rem] leading-relaxed text-foreground font-medium">{point}</span>
                           </li>
                         ))}
                       </ul>

                       <div className="mt-10 lg:mt-12 inline-flex">
                         <Magnetic strength={0.3} disabled={!allowPointerEffects}>
                            <Link
                               href={item.href}
                               className="inline-flex items-center gap-2 font-semibold bg-foreground text-background px-7 py-3.5 rounded-full hover:scale-105 hover:bg-foreground/90 transition-all duration-300 text-sm shadow-[0_4px_14px_rgba(0,0,0,0.1)]"
                            >
                               Meer informatie
                               <ArrowRight className="size-4" />
                            </Link>
                         </Magnetic>
                       </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
