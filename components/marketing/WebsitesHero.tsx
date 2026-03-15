"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import type { CommercialPage } from "@/content/types";
import React, { useRef } from "react";
import { Waves } from "@/components/ui/wave-background";

const stats = [
  { value: "40+", label: "Websites gebouwd" },
  { value: "0.9s", label: "Gem. laadtijd" },
  { value: "100%", label: "Next.js & Vercel" },
];

export function WebsitesHero({ page }: { page: CommercialPage }) {
  const containerRef = useRef<HTMLDivElement>(null);

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
    offset: ["start start", "end start"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden bg-[#020202] group"
    >
      {/* Wave background */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <Waves
          className="h-full w-full"
          strokeColor="rgba(255, 255, 255, 0.45)"
          strokeWidth={2.2}
          lineColors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
          backgroundColor="transparent"
        />
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#020202] via-[#020202]/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,2,2,0.7)_0%,transparent_70%)] z-10" />
      </div>

      {/* Mouse glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          style={{
            background: useTransform(
              [springX, springY],
              ([x, y]) =>
                `radial-gradient(700px circle at ${x}px ${y}px, rgba(54,98,227,0.07), transparent 40%)`
            ),
          }}
        />
      </div>

      <div className="relative z-20 px-6 w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/40 text-[11px] font-mono uppercase tracking-[0.25em] mb-10">
              <span className="size-1.5 rounded-full bg-[#3662e3]" />
              {page.eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            style={{ opacity: titleOpacity, y: titleY }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-[clamp(2.75rem,8vw,7.5rem)] font-display font-semibold text-white tracking-[-0.04em] leading-[0.88] mb-8"
          >
            Websites die{" "}
            <em className="not-italic text-[#3662e3]">klanten werven.</em>
            <br className="hidden sm:block" />
            {" "}Niet alleen indruk maken.
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-white/45 max-w-xl font-light leading-relaxed mb-12"
          >
            {page.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-3 items-center mb-16"
          >
            <ButtonLink
              href={page.primaryCta.href}
              className="h-13 px-9 text-[15px] rounded-full bg-[#3662e3] text-white hover:bg-[#2a52d4] hover:scale-[1.02] transition-all font-medium"
            >
              {page.primaryCta.label}
            </ButtonLink>
            <ButtonLink
              href={page.secondaryCta.href}
              className="h-13 px-9 text-[15px] rounded-full bg-transparent border border-white/12 text-white/60 hover:border-white/25 hover:text-white/90 transition-all"
            >
              Bekijk cases
            </ButtonLink>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex items-center gap-8 sm:gap-14"
          >
            {stats.map((stat, i) => (
              <React.Fragment key={stat.label}>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-display font-semibold text-white/90 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-white/25 font-mono uppercase tracking-[0.18em] mt-0.5">
                    {stat.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div className="h-7 w-px bg-white/[0.08]" />
                )}
              </React.Fragment>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
