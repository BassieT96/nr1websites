"use client";

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Magnetic } from '../ui/Magnetic';
import { CharacterReveal } from '../ui/CharacterReveal';
import { MouseParallax } from '../ui/MouseParallax';

export function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-[100dvh] w-full flex flex-col justify-center overflow-hidden bg-canvas pt-32 pb-20">
            {/* Background Architecture */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Light Leaks & Cinematic Blobs */}
                <MouseParallax strength={30} className="absolute inset-0">
                    <div className="absolute top-[10%] right-[5%] w-[800px] h-[800px] rounded-full bg-accent opacity-[0.04] blur-[120px]" />
                    <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-blue-500 opacity-[0.03] blur-[120px]" />
                </MouseParallax>

                {/* Floating Abstract "Glass" Elements */}
                <MouseParallax strength={60} className="absolute inset-0 z-10">
                    <div className="absolute top-[30%] right-[15%] w-32 h-32 rounded-3xl glass-dark border border-border rotate-12 animate-float shadow-lg" />
                    <div className="absolute bottom-[20%] left-[10%] w-24 h-24 rounded-full glass-dark border border-border -rotate-12 animate-float shadow-lg" style={{ animationDelay: '-4s' }} />
                </MouseParallax>

                {/* Section Blending Mask */}
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-canvas to-transparent z-20" />
            </div>

            <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 relative z-30 flex flex-col lg:flex-row items-center gap-20">
                <motion.div
                    style={{ y: y1, opacity }}
                    className="flex-1 text-left"
                >
                    {/* Top Pill Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center px-3 py-1 rounded-full border border-border-strong glass-dark mb-8 overflow-hidden group"
                    >
                        <div className="w-2 h-2 rounded-full bg-accent mr-3 animate-pulse" />
                        <span className="text-[11px] font-mono font-bold text-ink-tertiary tracking-wider uppercase">
                            Agency of the Year 2026
                        </span>
                    </motion.div>

                    <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-display text-ink-primary font-bold leading-[0.9] tracking-[-0.06em] mb-10">
                        <CharacterReveal
                            text="High-End Design."
                            className="block text-ink-primary"
                            stagger={0.02}
                        />
                        <span className="text-ink-tertiary">
                            <CharacterReveal
                                text="Built specifically for your business."
                                delay={0.4}
                                stagger={0.02}
                            />
                        </span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[18px] md:text-[20px] font-sans text-ink-secondary leading-relaxed max-w-[580px] mb-12"
                    >
                        Wij transformeren ambitieuze ZZP&apos;ers en MKB&apos;ers naar marktleiders met <span className="text-ink-primary font-semibold italic">onvergetelijk design</span> en technische perfectie. Live in 14 dagen.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row gap-5"
                    >
                        <Magnetic strength={0.1}>
                            <Link
                                href="/contact"
                                className="group relative px-8 h-16 flex justify-center items-center rounded-2xl bg-accent text-white font-sans font-bold text-[17px] hover:brightness-110 transition-all duration-300 shadow-neon"
                            >
                                Start je project
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </Magnetic>

                        <Magnetic strength={0.1}>
                            <Link
                                href="/portfolio"
                                className="px-8 h-16 flex justify-center items-center rounded-2xl glass-dark neon-border text-ink-primary font-sans font-bold text-[17px] hover:bg-accent/10 transition-all duration-300"
                            >
                                Bekijk Portfolio
                            </Link>
                        </Magnetic>
                    </motion.div>
                </motion.div>

                {/* Hero Visual Scene */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 relative hidden lg:block"
                >
                    <MouseParallax strength={40} className="relative aspect-square">
                        {/* Abstract Main Layer */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-blue-500/10 rounded-[4rem] border border-border-strong backdrop-blur-3xl shadow-lg animate-float">
                            {/* Inner Mockup UI Bits */}
                            <div className="absolute inset-10 flex flex-col gap-6">
                                <div className="h-4 w-1/3 bg-ink-primary/10 rounded-full" />
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-32 bg-accent/10 rounded-3xl border border-accent/15" />
                                    <div className="h-32 bg-surface-3 rounded-3xl" />
                                </div>
                                <div className="h-48 bg-surface-2 rounded-[2rem] border border-border" />
                            </div>
                        </div>

                        {/* Floating Accents */}
                        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-[2rem] glass-dark border border-border shadow-lg animate-float flex items-center justify-center" style={{ animationDelay: '-2s' }}>
                            <div className="text-4xl font-display font-black text-accent tracking-tighter italic">nr1</div>
                        </div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-32 rounded-[2rem] bg-surface-2 border border-border shadow-lg animate-float flex items-center justify-center px-6" style={{ animationDelay: '-5s' }}>
                            <div className="flex flex-col gap-2 w-full">
                                <div className="h-1.5 w-1/2 bg-ink-primary/20 rounded-full" />
                                <div className="h-1.5 w-full bg-ink-primary/10 rounded-full" />
                            </div>
                        </div>
                    </MouseParallax>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-ink-tertiary z-30"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-border-strong to-transparent" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em]">Scroll</span>
            </motion.div>
        </section>
    );
}
