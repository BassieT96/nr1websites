"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePerformanceProfile } from "@/lib/use-performance-profile";
import { cn } from "@/lib/utils";

export function CinematicBackground({ className }: { className?: string }) {
  const { allowHeavyMotion } = usePerformanceProfile();

  if (!allowHeavyMotion) {
    return (
      <div className={cn("fixed inset-0 -z-10 overflow-hidden pointer-events-none", className)}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, rgba(54,98,227,0.06) 0%, transparent 35%), radial-gradient(circle at 85% 25%, rgba(24,24,27,0.05) 0%, transparent 32%), radial-gradient(circle at 30% 85%, rgba(54,98,227,0.04) 0%, transparent 30%)",
          }}
        />
      </div>
    );
  }

  return (
    <div className={cn("fixed inset-0 -z-10 overflow-hidden pointer-events-none", className)}>
      {/* 1. Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none noise-bg" />

      {/* 2. Floating Orbs (Ambient Light Leaks) */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[40%] -right-[15%] w-[45%] h-[45%] rounded-full bg-primary/3 blur-[140px]"
        />
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -20, 50, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-accent/3 blur-[110px]"
        />
      </div>
    </div>
  );
}
