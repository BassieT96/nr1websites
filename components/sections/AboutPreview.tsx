"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Magnetic } from '../ui/Magnetic';
import Link from 'next/link';

export function AboutPreview() {
    const points = [
        {
            title: "Directe communicatie",
            desc: "Geen tussenpersonen. Je schakelt direct met de makers.",
            icon: MessageCircle,
            color: "#00AAFF"
        },
        {
            title: "Eerlijke prijzen",
            desc: "High-end design hoeft geen fortuin te kosten.",
            icon: HeartHandshake,
            color: "#33BBFF"
        },
        {
            title: "Altijd bereikbaar",
            desc: "Snel schakelen via WhatsApp, wanneer jij dat wilt.",
            icon: ShieldCheck,
            color: "#22C55E"
        }
    ];

    return (
        <section className="py-48 bg-canvas relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    <div className="space-y-16">
                        <div>
                            <SectionHeader
                                title="Persoonlijk, scherp & betrokken"
                                subtitle="Geen corporate bureau, maar partners in jouw succes."
                                align="left"
                            />

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-[19px] md:text-[21px] font-sans text-ink-secondary leading-relaxed max-w-xl font-medium -mt-12"
                            >
                                Wij geloven dat de beste websites ontstaan uit <span className="text-ink-primary font-bold italic">vriendschap en vakmanschap</span>. We werken voor ondernemers die de lat hoger leggen.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {points.map((pt, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                                >
                                    <SpotlightCard className="p-8 glass-dark border border-border flex items-center gap-8 group transition-all duration-500 rounded-3xl">
                                        <div className="w-16 h-16 rounded-2xl bg-surface-2 border border-border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                                            <pt.icon className="w-7 h-7" style={{ color: pt.color }} />
                                        </div>
                                        <div>
                                            <h4 className="text-[20px] font-display font-bold text-ink-primary mb-1">{pt.title}</h4>
                                            <p className="text-[15px] font-sans text-ink-secondary font-medium">{pt.desc}</p>
                                        </div>
                                    </SpotlightCard>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <Magnetic strength={0.2}>
                                <Link
                                    href="/over-ons"
                                    className="group inline-flex items-center gap-6 text-[13px] font-mono font-bold text-ink-tertiary hover:text-ink-primary transition-all duration-300 uppercase tracking-widest"
                                >
                                    Leer ons team kennen
                                    <span className="w-14 h-14 rounded-2xl border border-border flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-500">
                                        <ArrowRight className="w-6 h-6" />
                                    </span>
                                </Link>
                            </Magnetic>
                        </motion.div>
                    </div>

                    {/* Creative Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        <SpotlightCard className="aspect-[4/5] rounded-[60px] glass-dark border border-border p-0 overflow-hidden relative group" beamDuration={20}>
                            <div className="absolute inset-0 flex items-center justify-center p-16">
                                <div className="text-center">
                                    <div className="w-32 h-32 rounded-3xl bg-accent/10 blur-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                    <p className="relative z-10 text-[22px] font-display font-bold text-ink-primary leading-tight">
                                        &quot;Wij bouwen geen sites, we bouwen <span className="text-accent">digitale assets</span> die voor jouw business werken.&quot;
                                    </p>
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
