"use client";

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function TrustStrip() {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
        }
      }}
      className="w-full border-y border-border bg-surface-strong/40 py-12 relative overflow-hidden backdrop-blur-md"
    >
      <div className="container-content mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="flex items-center gap-10 flex-wrap justify-center md:justify-start">
          <motion.div 
            variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
            className="flex items-center gap-5"
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="size-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-muted-strong border-l border-border pl-5 font-bold">5.0 Google Score</span>
          </motion.div>

          <div className="h-8 w-px bg-border/60 hidden md:block" />

          <motion.p 
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="text-[15px] font-medium text-muted-strong text-center md:text-left leading-relaxed"
          >
            Trotse partner van <strong className="text-foreground">50+ ondernemers</strong> in Friesland.
          </motion.p>
        </div>

        {/* Secondary Trust Track */}
        <motion.div 
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="hidden lg:flex items-center gap-10"
        >
          {["Lokale Helden", "Friesland Groeit", "ZZP Succes"].map((label, idx) => (
            <motion.div 
              key={label}
              initial={{ opacity: 0.3 }}
              whileInView={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                delay: idx * 1.2,
                ease: "easeInOut"
              }}
              className="text-[12px] font-mono tracking-[0.3em] uppercase text-foreground font-bold"
            >
              {label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
