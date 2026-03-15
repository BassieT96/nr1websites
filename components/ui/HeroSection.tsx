"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-end pb-24 px-6 lg:px-12 bg-bg overflow-hidden pt-32"
        >
            {/* Grain Texture Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-dot-grid" />
            <div className="absolute inset-0 z-0 pointer-events-none glass-grain opacity-40" />

            {/* Top Right Badge */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-32 right-6 lg:right-12 z-20"
            >
                <div className="flex items-center gap-4">
                    <span className="text-[11px] font-mono font-bold tracking-[0.3em] text-ink-muted uppercase">Est. 2024</span>
                    <div className="w-12 h-px bg-accent/30" />
                </div>
            </motion.div>

            <div className="max-w-[1400px] mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                    <div className="lg:col-span-10">
                        <motion.div
                            style={{ y }}
                            className="space-y-8"
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[clamp(3.5rem,10vw,8.5rem)] font-display text-ink leading-[0.9] tracking-[-0.04em] font-light"
                            >
                                Websites die<br />
                                <span className="italic pl-[0.1em] text-accent">werken</span> voor jou.
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="max-w-xl"
                            >
                                <p className="text-[20px] lg:text-[24px] font-sans text-ink-muted leading-relaxed font-medium">
                                    Wij combineren technisch vernuft met editorial design om digitale ervaringen te creëren die blijven hangen.
                                </p>
                            </motion.div>
                        </motion.div>

                        <div className="mt-16 flex items-center gap-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                            >
                                <Link
                                    href="/portfolio"
                                    className="group relative inline-flex items-center justify-center px-10 py-5 bg-accent text-white font-sans font-bold text-[16px] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-ink shadow-lg shadow-accent/20"
                                >
                                    <span className="relative z-10 uppercase tracking-widest">Bekijk ons werk</span>
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1.5 }}
                                className="hidden md:block"
                            >
                                <div className="flex items-center gap-4 text-ink-muted/50 cursor-default">
                                    <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center text-[10px] animate-bounce">↓</div>
                                    <span className="text-[11px] font-mono font-bold tracking-widest uppercase">Scroll om te ontdekken</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Decorative horizontal line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-ink/5 w-full mt-24 origin-left"
                />
            </div>
        </section>
    );
}
