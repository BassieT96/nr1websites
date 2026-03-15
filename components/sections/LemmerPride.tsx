"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BarChart3, Star, Zap } from 'lucide-react';

export function LemmerPride() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

    const stats = [
        { value: "50+", label: "Projecten", icon: BarChart3, iconColor: "text-accent" },
        { value: "4.9", label: "Gem. score", icon: Star, iconColor: "text-amber-400" },
        { value: "3wk", label: "Levertijd", icon: Zap, iconColor: "text-blue-400" },
    ];

    return (
        <section ref={sectionRef} className="py-40 px-6 md:px-12 lg:px-20 gradient-navy relative overflow-hidden grain">
            {/* Background effects */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-accent/4 to-transparent" />
                <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-accent/4 rounded-full blur-[140px]" />
                <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-blue-500/3 rounded-full blur-[120px]" />
            </motion.div>

            <div className="max-w-[1000px] mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Decorative line */}
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-accent/50" />
                        <Zap className="w-5 h-5 text-accent animate-pulse" />
                        <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-accent/50" />
                    </div>

                    <h2 className="text-[40px] md:text-[56px] lg:text-[72px] font-display font-bold text-neon-white leading-[1.05] mb-8 tracking-[-0.03em]">
                        Vakmanschap uit{' '}
                        <span className="shimmer-text">Lemmer</span>
                    </h2>
                    <p className="text-[20px] md:text-[24px] font-sans font-light text-ink-secondary leading-[1.5] mb-5">
                        Digitale impact in heel Nederland.
                    </p>
                    <p className="text-[16px] font-sans font-light text-ink-tertiary leading-[1.7] max-w-[620px] mx-auto mb-16">
                        Vanuit het hart van Friesland bouwen wij websites die de lat hoger leggen.
                        Onze Friese nuchterheid gecombineerd met state-of-the-art technologie levert
                        resultaten die spreken.
                    </p>

                    {/* Stats cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="glass-dark border border-border rounded-[24px] p-8 flex flex-col items-center hover-lift group"
                            >
                                <div className={`w-12 h-12 rounded-2xl bg-surface-2 border border-border flex items-center justify-center mb-6 group-hover:border-accent/30 group-hover:scale-110 transition-all duration-500 ${stat.iconColor}`}>
                                    <stat.icon size={24} />
                                </div>
                                <span className="text-[40px] md:text-[48px] font-display font-bold text-accent tracking-[-0.02em] neon-text leading-none mb-2">
                                    {stat.value}
                                </span>
                                <span className="text-[12px] font-mono text-ink-tertiary uppercase tracking-widest">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
