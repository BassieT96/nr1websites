"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { BarChart3, Star } from 'lucide-react';
import { usePerformanceProfile } from '@/lib/use-performance-profile';

export function CtaSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { allowHeavyMotion } = usePerformanceProfile();

    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const bgScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
    const glowOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0.3, 0.8]);

    return (
        <section
            ref={allowHeavyMotion ? sectionRef : undefined}
            className="py-40 px-6 md:px-12 lg:px-20 gradient-navy relative overflow-hidden grain"
        >
            {/* Volumetric glow orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {allowHeavyMotion ? (
                    <>
                        <motion.div style={{ opacity: glowOpacity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/8 rounded-full blur-[160px] animate-[pulse-glow_6s_ease-in-out_infinite]" />
                        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[120px] animate-[pulse-glow_8s_ease-in-out_infinite_1s]" />
                        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-blue-500/5 rounded-full blur-[100px] animate-[pulse-glow_7s_ease-in-out_infinite_2s]" />
                    </>
                ) : (
                    <>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/8 rounded-full blur-[160px] opacity-50" />
                        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[120px]" />
                        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-blue-500/5 rounded-full blur-[100px]" />
                    </>
                )}
            </div>

            {/* Glass accents */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
                {allowHeavyMotion ? (
                    <>
                        <motion.div
                            animate={{ y: [0, -15, 0], rotate: [12, 14, 12] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[15%] left-[10%] w-20 h-20 rounded-2xl glass-dark border border-accent/10 opacity-30"
                        />
                        <motion.div
                            animate={{ y: [0, 10, 0], rotate: [-6, -8, -6] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-[20%] right-[8%] w-16 h-16 rounded-xl glass-dark border border-border opacity-20"
                        />
                        <motion.div
                            animate={{ y: [0, -8, 0], rotate: [45, 47, 45] }}
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[60%] left-[5%] w-12 h-12 rounded-lg glass-dark border border-accent/10 opacity-20"
                        />
                    </>
                ) : (
                    <>
                        <div className="absolute top-[15%] left-[10%] w-20 h-20 rounded-2xl glass-dark border border-accent/10 opacity-20 rotate-12" />
                        <div className="absolute bottom-[20%] right-[8%] w-16 h-16 rounded-xl glass-dark border border-border opacity-15 -rotate-6" />
                        <div className="absolute top-[60%] left-[5%] w-12 h-12 rounded-lg glass-dark border border-accent/10 opacity-15 rotate-45" />
                    </>
                )}
            </div>

            {allowHeavyMotion ? (
                <motion.div style={{ scale: bgScale }} className="max-w-[1200px] mx-auto relative z-10 text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                    >
                        <span className="text-[11px] font-mono font-medium text-accent uppercase tracking-[0.12em] block mb-8 neon-text">
                            Contact
                        </span>
                        <h2 className="text-[48px] md:text-[72px] lg:text-[96px] font-display font-bold text-neon-white leading-[1.0] mb-10 tracking-[-0.03em]">
                            Klaar voor de<br /><span className="text-gradient-premium">volgende stap</span>?
                        </h2>
                        <p className="text-[18px] md:text-[21px] font-sans font-light text-ink-secondary leading-relaxed max-w-[560px] mb-14 mx-auto">
                            Laten we samen iets unieks bouwen dat jouw bedrijf naar het volgende niveau tilt.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
                            <Link
                                href="/contact"
                                className="px-12 py-5 bg-accent text-white rounded-full font-sans font-semibold text-[17px] shadow-neon flex items-center gap-3 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_0_40px_rgba(0,170,255,0.5)] active:translate-y-0 active:scale-[0.98] group shine-sweep"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Start je project
                                    <span className="transition-transform duration-300 group-hover:translate-x-2">&rarr;</span>
                                </span>
                            </Link>
                            <a
                                href="https://wa.me/31600000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-12 py-5 glass-dark neon-border rounded-full font-sans font-semibold text-[17px] text-ink-primary transition-all duration-300 hover:bg-accent/10 hover:scale-[1.03] active:scale-[0.98]"
                            >
                                WhatsApp ons direct
                            </a>
                        </div>

                        {/* Trust badges */}
                        <div className="flex flex-wrap items-center justify-center gap-8 text-[13px] font-mono text-ink-ghost uppercase tracking-wider">
                            {[
                                { label: "50+ projecten", icon: <BarChart3 className="w-4 h-4 text-accent" /> },
                                { label: "5.0 Google", icon: <Star className="w-4 h-4 text-amber-400 fill-amber-400/20" /> },
                                {
                                    label: "Made in NL", icon: (
                                        <div className="flex flex-col w-4 h-3 gap-[1px]">
                                            <div className="flex-1 bg-red-500 rounded-ss-[1px] rounded-se-[1px]" />
                                            <div className="flex-1 bg-white" />
                                            <div className="flex-1 bg-blue-600 rounded-es-[1px] rounded-ee-[1px]" />
                                        </div>
                                    )
                                },
                            ].map((badge, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="flex items-center gap-2.5"
                                >
                                    <span>{badge.icon}</span>
                                    <span>{badge.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Decorative line */}
                    <motion.div
                        initial={{ scaleY: 0, opacity: 0 }}
                        whileInView={{ scaleY: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-28 w-px h-28 bg-gradient-to-b from-accent to-transparent origin-top"
                    />
                </motion.div>
            ) : (
                <div className="max-w-[1200px] mx-auto relative z-10 text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                    >
                        <span className="text-[11px] font-mono font-medium text-accent uppercase tracking-[0.12em] block mb-8 neon-text">
                            Contact
                        </span>
                        <h2 className="text-[48px] md:text-[72px] lg:text-[96px] font-display font-bold text-neon-white leading-[1.0] mb-10 tracking-[-0.03em]">
                            Klaar voor de<br /><span className="text-gradient-premium">volgende stap</span>?
                        </h2>
                        <p className="text-[18px] md:text-[21px] font-sans font-light text-ink-secondary leading-relaxed max-w-[560px] mb-14 mx-auto">
                            Laten we samen iets unieks bouwen dat jouw bedrijf naar het volgende niveau tilt.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
                            <Link
                                href="/contact"
                                className="px-12 py-5 bg-accent text-white rounded-full font-sans font-semibold text-[17px] shadow-neon flex items-center gap-3 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_0_40px_rgba(0,170,255,0.5)] active:translate-y-0 active:scale-[0.98] group shine-sweep"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Start je project
                                    <span className="transition-transform duration-300 group-hover:translate-x-2">&rarr;</span>
                                </span>
                            </Link>
                            <a
                                href="https://wa.me/31600000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-12 py-5 glass-dark neon-border rounded-full font-sans font-semibold text-[17px] text-ink-primary transition-all duration-300 hover:bg-accent/10 hover:scale-[1.03] active:scale-[0.98]"
                            >
                                WhatsApp ons direct
                            </a>
                        </div>

                        {/* Trust badges */}
                        <div className="flex flex-wrap items-center justify-center gap-8 text-[13px] font-mono text-ink-ghost uppercase tracking-wider">
                            {[
                                { label: "50+ projecten", icon: <BarChart3 className="w-4 h-4 text-accent" /> },
                                { label: "5.0 Google", icon: <Star className="w-4 h-4 text-amber-400 fill-amber-400/20" /> },
                                {
                                    label: "Made in NL", icon: (
                                        <div className="flex flex-col w-4 h-3 gap-[1px]">
                                            <div className="flex-1 bg-red-500 rounded-ss-[1px] rounded-se-[1px]" />
                                            <div className="flex-1 bg-white" />
                                            <div className="flex-1 bg-blue-600 rounded-es-[1px] rounded-ee-[1px]" />
                                        </div>
                                    )
                                },
                            ].map((badge, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="flex items-center gap-2.5"
                                >
                                    <span>{badge.icon}</span>
                                    <span>{badge.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Decorative line */}
                    <motion.div
                        initial={{ scaleY: 0, opacity: 0 }}
                        whileInView={{ scaleY: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-28 w-px h-28 bg-gradient-to-b from-accent to-transparent origin-top"
                    />
                </div>
            )}
        </section>
    );
}
