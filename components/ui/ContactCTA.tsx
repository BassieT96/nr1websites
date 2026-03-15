"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function ContactCTA() {
    return (
        <section className="py-48 px-6 lg:px-12 gradient-navy relative overflow-hidden">
            {/* Grain Texture Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] noise-overlay" />

            {/* Volumetric glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[120px] animate-[pulse-glow_6s_ease-in-out_infinite]" />
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-[11px] font-mono font-bold tracking-[0.4em] text-accent uppercase mb-8 block neon-text">Project Starten</span>
                    <h2 className="text-[clamp(3rem,8vw,6.5rem)] font-display text-neon-white leading-[0.9] tracking-tighter font-bold mb-16 max-w-5xl mx-auto">
                        Klaar om je visie naar het <span className="italic shimmer-text">volgende</span> niveau te tillen?
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center justify-center px-12 py-6 bg-accent text-white font-sans font-bold text-[18px] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 shadow-neon"
                        >
                            <span className="relative z-10 uppercase tracking-widest">Neem contact op</span>
                        </Link>

                        <Link
                            href="/pakketten"
                            className="group relative inline-flex items-center justify-center px-12 py-6 glass-dark neon-border text-ink-primary font-sans font-bold text-[18px] rounded-full overflow-hidden transition-all duration-500 hover:bg-accent/10"
                        >
                            <span className="relative z-10 uppercase tracking-widest">Bekijk tarieven</span>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-32 pt-16 border-t border-border flex justify-between items-center text-ink-ghost font-mono text-[10px] uppercase tracking-[0.3em]"
                >
                    <span>© 2024 nr1websites</span>
                    <span>High-End Digital Agency</span>
                </motion.div>
            </div>
        </section>
    );
}
