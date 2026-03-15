"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { packages } from '@/lib/data/packages';
import { SectionHeader } from '../ui/SectionHeader';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Magnetic } from '../ui/Magnetic';
import { Check } from 'lucide-react';

export function PackagesPreview() {
    return (
        <section className="py-40 bg-canvas relative overflow-hidden">
            {/* Background Architecture */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 opacity-5" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-20">
                <SectionHeader
                    title="Transparant & Resultaatgericht"
                    subtitle="Kies het pakket dat bij jouw groei past. Geen verrassingen achteraf."
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, idx) => {
                        const isPopuler = pkg.naam === "Groei";

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                className="h-full"
                            >
                                <SpotlightCard
                                    className={`relative h-full flex flex-col p-10 md:p-12 transition-all duration-500
                                        ${isPopuler
                                            ? 'glass-dark neon-border shadow-neon'
                                            : 'glass-dark border border-border'
                                        }`}
                                    spotlightColor={isPopuler ? "rgba(0, 170, 255, 0.08)" : "rgba(0, 170, 255, 0.04)"}
                                    showBorderBeam={isPopuler}
                                    beamDuration={12}
                                >

                                    {/* Popular Badge */}
                                    {isPopuler && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full overflow-hidden">
                                            <div className="px-5 py-2 bg-accent text-white text-[11px] font-mono font-bold tracking-widest uppercase neon-glow">
                                                Populairst
                                            </div>
                                        </div>
                                    )}

                                    {/* Header */}
                                    <div className="mb-10">
                                        <h3 className="text-[32px] font-display font-bold text-ink-primary tracking-[-0.05em] mb-4">
                                            {pkg.naam}
                                        </h3>
                                        <p className="text-[16px] font-sans text-ink-secondary leading-relaxed font-medium">
                                            {pkg.tagline}
                                        </p>
                                    </div>

                                    {/* Pricing */}
                                    <div className="mb-12">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-[64px] font-display font-bold text-ink-primary tracking-tighter">€{pkg.prijs}</span>
                                            <span className="text-[13px] font-mono text-ink-tertiary uppercase font-extrabold tracking-widest">Excl. BTW</span>
                                        </div>
                                        <p className="text-[14px] font-mono text-accent mt-2 font-bold uppercase tracking-widest">+ €49 p/m service & hosting</p>
                                    </div>

                                    <div className="w-full h-px bg-gradient-to-r from-border-strong to-transparent mb-12" />

                                    {/* Features Checklist */}
                                    <ul className="space-y-4 mb-14 flex-grow">
                                        {pkg.features.slice(0, 8).map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-4 group/item">
                                                <div className="mt-1.5 w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center shrink-0 border border-accent/20 group-hover/item:bg-accent/25 transition-colors">
                                                    <Check className="w-2.5 h-2.5 text-accent" />
                                                </div>
                                                <span className="text-[16px] font-sans text-ink-secondary leading-relaxed font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <Magnetic strength={0.1}>
                                        <Link
                                            href="/contact"
                                            className={`relative w-full h-16 rounded-2xl font-sans font-bold text-[17px] transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden
                                                ${isPopuler
                                                    ? 'bg-accent text-white shadow-neon hover:brightness-110'
                                                    : 'glass-dark text-ink-primary border border-border hover:border-accent/30'
                                                }`}
                                        >
                                            Kies {pkg.naam} <span className="group-hover:translate-x-1 transition-transform">→</span>
                                            <div className="absolute inset-0 translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
                                        </Link>
                                    </Magnetic>
                                </SpotlightCard>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
