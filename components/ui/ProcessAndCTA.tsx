"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ButtonLink } from "./Button";
import { cn } from "@/lib/utils";

// 1. ProcessSteps
export function ProcessStep({
  number,
  title,
  description,
  dark = false,
  isActive = false,
}: {
  number: string;
  title: string;
  description: string;
  dark?: boolean;
  isActive?: boolean;
}) {
  return (
    <div className={cn(
      "relative pb-32 group transition-all duration-1000",
      dark ? "border-l border-white/5" : "border-l border-black/[0.03]"
    )}>
      {/* Container specifically for the Glass Background & Content */}
      <div className="relative pl-12 md:pl-24">
        {/* Dynamic Glassmorphism Background Card */}
        <div className={cn(
          "absolute -inset-x-4 md:-inset-x-8 -inset-y-6 rounded-[2.5rem] transition-all duration-1000 group-hover:opacity-100 pointer-events-none z-0 overflow-hidden",
          dark ? "bg-white/[0.02] border border-white/10 backdrop-blur-3xl" : "bg-white/[0.85] border border-black/5 backdrop-blur-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)]",
          isActive ? "opacity-100" : "opacity-0"
        )}>
           {/* Internal Highlight / Glass Texture */}
           <div className={cn(
             "absolute inset-0 rounded-[2.5rem] border-[1px] border-white/40 transition-all duration-1000",
             !dark && "group-hover:border-white/60"
           )} />
           
           <div className={cn(
             "absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-50"
           )} />
        </div>

        {/* Number Node with 'Liquid Fill' and 'Organic Bloom' */}
        {/* Process Number Node - Perfectly Symmetrical Corner Alignment */}
        <div className="absolute left-6 top-6 z-20">
          {/* Bloom Glow */}
          <motion.div 
            animate={{ 
              opacity: isActive ? [0.1, 0.25, 0.1] : 0,
              scale: isActive ? [1, 1.3, 1] : 1
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={cn(
              "absolute inset-[-24px] rounded-full blur-3xl pointer-events-none transition-colors duration-1000",
              isActive ? (dark ? "bg-accent/40" : "bg-accent/20") : "bg-transparent"
            )}
          />
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn(
              "relative flex items-center justify-center size-14 md:size-16 rounded-full border border-black/[0.04] font-display text-[16px] md:text-[18px] font-bold transition-all duration-700 group-hover:scale-110 overflow-hidden",
              dark 
                ? "bg-[#050505] border-white/20 text-white shadow-[0_0_40px_rgba(0,0,0,0.5)]" 
                : "bg-[#fafafa] text-zinc-900 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
            )}
          >
            {/* Liquid Fill Animation */}
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: isActive ? "0%" : "100%" }}
              transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
              className="absolute inset-0 bg-accent/10 pointer-events-none z-[-1]"
            />
            {number}
          </motion.div>
        </div>

        <div className="relative z-10 transform transition-all duration-700 group-hover:translate-x-4">
          <motion.span 
             initial={{ opacity: 0, x: -10 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent/50 mb-3 block"
          >
             Fase {number}
          </motion.span>
          
          <h4 className={cn(
            "text-3xl lg:text-5xl font-display font-medium mb-6 transition-all duration-700 leading-tight",
            dark ? "text-white" : "text-foreground",
            "group-hover:tracking-tight text-balance"
          )}>
            {title.split(' ').map((word, i) => (
              <span key={i} className={cn(i === 1 && "text-accent/80 italic font-light")}>
                {word}{' '}
              </span>
            ))}
          </h4>
          
          <p className={cn(
            "text-lg lg:text-xl leading-relaxed font-light transition-all duration-700 max-w-xl text-pretty",
            dark ? "text-white/40" : "text-zinc-500",
            "group-hover:text-zinc-900"
          )}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

// 2. ContactCTABlock
export function ContactCTABlock({
  kicker = "Klaar voor de volgende stap?",
  title = "Laten We Iets Geweldigs Bouwen",
  description = "Boek een vrijblijvende kennismaking om te zien hoe we jouw online succes kunnen versnellen.",
  primaryButtonText = "Start Je Project",
  primaryButtonHref = "/contact",
}: {
  kicker?: string;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="surface-card-strong relative overflow-hidden rounded-[3rem] p-12 md:p-24 text-center border border-border"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[130px] rounded-full opacity-60" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 blur-[130px] rounded-full opacity-60" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <span className="section-kicker mb-8">{kicker}</span>
        <h2 className="type-section-title text-foreground mb-8 leading-[1.1]">{title}</h2>
        <p className="type-body-lead text-foreground/70 mb-12">{description}</p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <ButtonLink href={primaryButtonHref} variant="primary" className="px-10 py-5 text-[16px] h-auto">
            {primaryButtonText}
            <ArrowRight className="size-5 ml-2" />
          </ButtonLink>
          <a
             href="https://wa.me/31600000000"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-5 text-[15px] font-bold transition-all duration-500 border border-border bg-surface-strong/50 text-foreground hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-tinted hover:shadow-card active:scale-[0.98]"
          >
             Stuur een Appje
          </a>
        </div>
      </div>
    </motion.div>
  );
}
