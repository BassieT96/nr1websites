"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

// 1. SpotlightCard (glow follows cursor)
export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(37, 99, 235, 0.08)",
  as: Component = "div",
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  as?: React.ElementType;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Component
      className={cn(
        "group relative overflow-hidden rounded-[2.5rem] bg-surface border border-border-strong p-8 shadow-soft transition-all duration-500 hover:shadow-card hover:-translate-y-1",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </Component>
  );
}

// 2. Standard Glass Card
export function GlassCard({
  children,
  className = "",
  as: Component = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Component
      className={cn(
        "rounded-[2.25rem] border border-white/40 bg-white/70 p-8 shadow-sm backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/90 hover:border-white/60 hover:shadow-soft",
        className
      )}
    >
      {children}
    </Component>
  );
}

// 3. HoverTiltCard (subtle 3D rotation)
export function HoverTiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const xParams = useMotionValue(0);
  const yParams = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    // Tilt strength
    xParams.set(xPct * 10);
    yParams.set(yPct * -10);
  };

  const handleMouseLeave = () => {
    xParams.set(0);
    yParams.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY: xParams,
        rotateX: yParams,
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: 0,
        rotateY: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
      className={cn(
        "relative rounded-[2rem] bg-surface border border-border p-8 shadow-soft hover:shadow-card transition-shadow duration-300",
        className
      )}
    >
      <div 
        style={{ transform: "translateZ(30px)" }} 
        className="w-full h-full"
      >
        {children}
      </div>
    </motion.div>
  );
}

// 4. PremiumTargetCard (Awwwards style 3D + Glow)
export function PremiumTargetCard({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.05)",
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Cursor position for spotlight
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    mouseX.set(clientX);
    mouseY.set(clientY);

    // Rotation calculation
    const xPct = clientX / width - 0.5;
    const yPct = clientY / height - 0.5;
    rotateX.set(yPct * -12); // Max tilt up/down
    rotateY.set(xPct * 12);  // Max tilt left/right
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: 0,
        rotateY: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      }}
      className={cn(
        "group relative h-full w-full rounded-[1.8rem] border border-border bg-surface p-8 shadow-[0_8px_30px_rgba(9,9,11,0.04)] transition-all duration-300 hover:border-border-strong/80 hover:shadow-[0_20px_40px_rgba(9,9,11,0.08)]",
        className
      )}
    >
      {/* Dynamic Background Glow Layer */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 rounded-[1.8rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 70%
            )
          `,
        }}
      />
      
      {/* Content wrapper with floating effect on hover */}
      <div 
        style={{ transform: "translateZ(40px)" }} 
        className="relative z-10 flex h-full flex-col backface-hidden"
      >
        {children}
      </div>
    </motion.div>
  );
}
