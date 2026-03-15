"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import type { CommercialPage } from "@/content/types";
import React, { useRef } from "react";
import { Waves } from "@/components/ui/wave-background";

export function WebsitesHero({ page }: { page: CommercialPage }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for interactive glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const lightStreakX = useTransform(scrollYProgress, [0, 1], ["-100%", "200%"]);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#020202] group"
    >
      {/* Animated Wave Background - Maximized Visibility */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <Waves
          className="h-full w-full opacity-100"
          strokeColor="rgba(255, 255, 255, 0.6)"
          strokeWidth={2.8}
          lineColors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
          backgroundColor="transparent"
        />
        {/* Contrast Enhancers: Dark gradients to keep text and navbar readable against bright waves */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#020202]/90 via-[#020202]/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,2,2,0.6)_0%,transparent_65%)] z-10 opacity-80 lg:opacity-100" />
      </div>

      {/* Background Decorative Elements - Moved deeper */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Scrolling Light Streak */}
        <motion.div 
          style={{ x: lightStreakX }}
          className="absolute top-1/4 left-0 w-[50vw] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 blur-sm"
        />

        {/* Static Background Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-primary/10 blur-[150px] rounded-full opacity-40" 
        />
        
        {/* Interactive Mouse Highlight */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          style={{
            background: useTransform(
              [springX, springY],
              ([x, y]) => `radial-gradient(800px circle at ${x}px ${y}px, rgba(37,99,235,0.1), transparent 40%)`
            )
          }}
        />
      </div>

      <div className="container-content relative z-20 px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-black/40 border border-white/10 text-white/80 text-xs font-mono uppercase tracking-[0.2em] mb-8 backdrop-blur-md shadow-lg">
              {page.eyebrow}
            </span>
          </motion.div>
          
          <motion.h1 
            style={{ opacity: titleOpacity, scale: titleScale }}
            initial={{ opacity: 0, scale: 0.9, filter: "blur(30px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl lg:text-[8.5rem] font-display font-medium text-white tracking-[-0.05em] leading-[0.85] mb-12 max-w-6xl drop-shadow-xl"
          >
            Websites die de standaard <span className="text-accent italic">verleggen.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl lg:text-3xl text-white/80 max-w-3xl font-light leading-relaxed tracking-tight mb-16 text-pretty drop-shadow-lg"
          >
            {page.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <ButtonLink 
              href={page.primaryCta.href}
              className="h-16 px-12 text-lg rounded-full bg-primary text-white hover:scale-105 transition-transform border border-white/5 drop-shadow-xl"
            >
              {page.primaryCta.label}
            </ButtonLink>
            <ButtonLink 
              href={page.secondaryCta.href}
              className="h-16 px-12 text-lg rounded-full bg-black/40 border border-white/20 text-white backdrop-blur-xl hover:bg-black/60 hover:border-white/30 transition-all shadow-2xl drop-shadow-xl"
            >
              Bekijk cases
            </ButtonLink>
          </motion.div>
        </div>
      </div>

      {/* Trust Indicator Floating Stats */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-12 text-white/20 font-mono text-[10px] uppercase tracking-[0.4em]">
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          Fast as Light
        </motion.div>
        <span className="size-1 rounded-full bg-white/10" />
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          SEO Dominant
        </motion.div>
        <span className="size-1 rounded-full bg-white/10" />
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Awwwards Ready
        </motion.div>
      </div>
    </section>
  );
}
