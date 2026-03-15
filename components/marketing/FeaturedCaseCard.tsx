"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { CarouselCard } from "@/components/ui/3d-carousel"

interface FeaturedCaseCardProps {
  activeCase: CarouselCard
}

export function FeaturedCaseCard({ activeCase }: FeaturedCaseCardProps) {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden border border-zinc-100 shadow-2xl flex flex-col md:flex-row relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCase.image}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex flex-col md:flex-row"
        >
          {/* Left: Image (55-60%) */}
          <div className="w-full md:w-[60%] h-[300px] md:h-full relative overflow-hidden bg-zinc-100">
             <Image 
                src={activeCase.image}
                alt={activeCase.title}
                fill
                className="object-cover"
                priority
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent md:hidden" />
          </div>

          {/* Right: Content (40-45%) */}
          <div className="w-full md:w-[40%] p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative z-10 font-sans">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                <div className="inline-block px-4 py-1.5 rounded-full bg-accent/5 border border-accent/10 text-accent font-mono text-[10px] uppercase tracking-[0.3em] mb-8">
                    {activeCase.category || "Featured Case Study"}
                </div>
                
                <h2 className="text-4xl lg:text-6xl font-display font-medium text-zinc-900 tracking-tight leading-[1.1] mb-6">
                    {activeCase.title}
                </h2>
                
                <p className="text-zinc-500 text-lg font-light leading-relaxed mb-10 max-w-sm">
                    {activeCase.description}
                </p>
                
                <Link 
                    href={activeCase.href}
                    className="group self-start flex items-center gap-4 px-8 py-4 rounded-full bg-zinc-900 text-white transition-all duration-500 hover:bg-accent hover:shadow-xl hover:shadow-accent/20 active:scale-95"
                >
                    <span className="font-medium">Bekijk uitgebreide case</span>
                    <div className="size-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                        <ArrowUpRight className="size-4" />
                    </div>
                </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Spacer for height constraint (since main content is absolute for AnimatePresence) */}
      <div className="invisible pointer-events-none flex flex-col md:flex-row w-full">
         <div className="w-full md:w-[60%] h-[300px] md:h-[600px]" />
         <div className="w-full md:w-[40%] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="h-8 mb-8" />
            <div className="h-24 lg:h-32 mb-6" />
            <div className="h-24 mb-10" />
            <div className="h-14 w-48 rounded-full" />
         </div>
      </div>
    </div>
  )
}
