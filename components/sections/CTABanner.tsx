"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BorderBeam } from '../ui/BorderBeam';
import { usePerformanceProfile } from '@/lib/use-performance-profile';

/**
 * Premium CTA Banner with organic mesh gradients and smooth border animations.
 */
export function CTABanner() {
    const { allowHeavyMotion } = usePerformanceProfile();

    return (
        <section className="py-20 px-6 bg-canvas relative overflow-hidden grain">
            <div className="max-w-[1400px] mx-auto relative z-20">
                {/* 
                    Container: 
                    Using a custom div instead of SpotlightCard to perfectly control 
                    radius and avoid border conflicts.
                */}
                <div className="relative w-full rounded-[40px] md:rounded-[64px] overflow-hidden glass-dark border border-white/[0.05] p-12 md:p-32 group backdrop-blur-[40px]">

                    {/* Subtle Border Beam - perfectly aligned to the container's radius */}
                    <BorderBeam
                        duration={15}
                        colorFrom="rgba(0, 170, 255, 0.4)"
                        colorTo="rgba(0, 102, 255, 0.1)"
                        className="opacity-60"
                    />

                    {/* Mesh Gradient Background */}
                    <div className="absolute inset-0 pointer-events-none select-none z-0">
                        {allowHeavyMotion ? (
                            <>
                                <motion.div
                                    className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-accent/15 rounded-full blur-[140px]"
                                    animate={{ x: [0, 100, -50, 0], y: [0, -50, 100, 0], scale: [1, 1.2, 0.9, 1] }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.div
                                    className="absolute bottom-[-15%] right-[-5%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[120px]"
                                    animate={{ x: [0, -80, 40, 0], y: [0, 120, -60, 0], scale: [1, 1.1, 1.2, 1] }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-accent/5 rounded-full blur-[100px] opacity-50"
                                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </>
                        ) : (
                            <>
                                <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-accent/15 rounded-full blur-[140px]" />
                                <div className="absolute bottom-[-15%] right-[-5%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[120px]" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-accent/5 rounded-full blur-[100px] opacity-50" />
                            </>
                        )}
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h2 className="text-[34px] md:text-[56px] lg:text-[76px] font-display font-medium text-ink-primary leading-[1.05] tracking-[-0.04em] mb-8 max-w-[900px]">
                                Klaar om je business naar het <span className="shimmer-text block sm:inline">volgende niveau</span> te tillen?
                            </h2>
                            <p className="max-w-[620px] mx-auto text-[17px] md:text-[21px] font-sans font-light text-ink-secondary leading-relaxed mb-14">
                                Sluit je aan bij de ambitieuze ondernemers die al voor de nr1 ervaring hebben gekozen.
                            </p>
                        </motion.div>

                        {/* CTA Actions */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl">
                            <motion.div
                                whileTap={{ scale: 0.97 }}
                                className="w-full sm:w-auto"
                            >
                                <Link
                                    href="/contact"
                                    className="group relative inline-flex items-center justify-center w-full sm:w-[280px] h-20 bg-accent text-white rounded-3xl font-sans font-bold text-[19px] shadow-accent overflow-hidden transition-all duration-300 hover:scale-[1.03]"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Start je project
                                        <span className="transition-transform duration-300 group-hover:translate-x-1.5 font-sans">→</span>
                                    </span>
                                    {/* Hover shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                </Link>
                            </motion.div>

                            <motion.div
                                whileTap={{ scale: 0.97 }}
                                className="w-full sm:w-auto"
                            >
                                <Link
                                    href="https://wa.me/31600000000"
                                    className="inline-flex items-center justify-center w-full sm:w-[220px] h-20 rounded-3xl glass-dark border border-white/10 text-ink-primary font-sans font-bold text-[19px] transition-all duration-300 hover:bg-white/[0.03] hover:border-white/20"
                                >
                                    WhatsApp
                                </Link>
                            </motion.div>
                        </div>

                        {/* Animated Social Proof */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="mt-24 pt-16 border-t border-white/5 w-full flex flex-wrap justify-center gap-12 md:gap-24"
                        >
                            {[
                                { label: "Dagen Live", value: "14" },
                                { label: "Projecten", value: "50+" },
                                { label: "Google Score", value: "5.0" },
                            ].map((stat, i) => (
                                <div key={i} className="text-center group">
                                    <span className="block text-[34px] md:text-[52px] font-display font-medium text-ink-primary leading-none mb-3 tabular-nums group-hover:text-accent transition-colors duration-500">
                                        {stat.value}
                                    </span>
                                    <span className="block text-[11px] font-mono font-semibold text-ink-tertiary uppercase tracking-[0.25em] opacity-60 group-hover:opacity-100 transition-opacity">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
