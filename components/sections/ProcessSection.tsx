"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const steps = [
    {
        title: "Strategie & Blueprint",
        description: "We leggen het fundament. Geen gissingen, maar datagedreven keuzes voor een heldere digitale roadmap.",
        deliverables: ["Doelgroep analyse", "Competitie benchmark", "Project roadmap"],
        index: "01",
        duration: "2 dagen",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
            </svg>
        )
    },
    {
        title: "Premium UX/UI Design",
        description: "Jouw merk vertaald naar een high-end, conversiegerichte interface. Eerst de user flow, dan de visuele details.",
        deliverables: ["Visual identity check", "Wireframes & Flow", "Interactief prototype"],
        index: "02",
        duration: "1 week",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
        )
    },
    {
        title: "Development & Motion",
        description: "Pixel-perfecte codebouw. Razendsnel, schaalbaar en verrijkt met vloeiende (micro)animaties.",
        deliverables: ["Next.js & React", "Framer animaties", "Performance audit"],
        index: "03",
        duration: "1.5 week",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        )
    },
    {
        title: "Lancering & Groei",
        description: "De wereld in. Wij zorgen dat jouw platform stabiel blijft, razendsnel laadt en klaar is voor exponenti\u00eble groei.",
        deliverables: ["Managed cloud hosting", "SEO & Analytics setup", "24/7 Monitoring"],
        index: "04",
        duration: "doorlopend",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
        )
    }
];

export function ProcessSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="py-40 px-6 md:px-12 lg:px-20 bg-canvas relative overflow-hidden">
            {/* Background mesh */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[40%] left-[10%] w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[150px]" />
                <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-blue-600/[0.02] rounded-full blur-[130px]" />
            </div>

            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 relative">
                {/* Left Column: Sticky Label */}
                <div className="md:col-span-5 flex flex-col items-start pt-4">
                    <div className="sticky top-[120px]">
                        <motion.span
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-[11px] font-mono font-medium text-accent uppercase tracking-[0.12em] block mb-5"
                        >
                            Hoe we werken
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-[44px] md:text-[56px] font-display font-bold text-ink-primary leading-[1.05] mb-8 tracking-[-0.03em]"
                        >
                            Van visie naar<br /><span className="text-gradient-premium">high-end</span> platform.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[16px] font-sans font-light text-ink-secondary leading-relaxed max-w-[400px] mb-10"
                        >
                            Geen standaard templates, maar een op maat gemaakt traject, gefocust op maximale conversie en een premium merkbeleving.
                        </motion.p>

                        {/* Progress Bar Line */}
                        <div className="relative w-[3px] h-[320px] bg-surface-3 overflow-hidden rounded-full hidden md:block">
                            <motion.div
                                style={{ scaleY, originY: 0 }}
                                className="absolute top-0 left-0 w-full h-full bg-accent shadow-[0_0_16px_rgba(0,170,255,0.6)] rounded-full"
                            />
                            {steps.map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-surface-3 bg-surface-1"
                                    style={{ top: `${(i / (steps.length - 1)) * 100}%`, transform: 'translate(-50%, -50%)' }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Steps */}
                <div className="md:col-span-7 flex flex-col gap-28 md:gap-36">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 48 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                            className="relative group"
                        >
                            {/* Large step number */}
                            <span className="text-[80px] md:text-[100px] font-mono font-bold text-accent/[0.05] absolute -top-10 -left-4 select-none leading-none group-hover:text-accent/[0.12] transition-all duration-1000">
                                {step.index}
                            </span>

                            <div className="relative z-10">
                                {/* Step icon + title */}
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/15 group-hover:scale-110 transition-all duration-500">
                                        {step.icon}
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-[26px] md:text-[28px] font-display font-bold text-ink-primary tracking-[-0.02em]">
                                            {step.title}
                                        </h3>
                                        <span className="px-3 py-1 rounded-full bg-surface-2 border border-border text-[11px] font-mono text-ink-tertiary whitespace-nowrap">
                                            {step.duration}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-[16px] font-sans font-light text-ink-secondary leading-relaxed mb-8 max-w-[480px]">
                                    {step.description}
                                </p>

                                <div className="glass-dark border border-border rounded-[24px] p-7 lg:p-9 hover-lift group-hover:border-accent/15 transition-all duration-700">
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        {step.deliverables.map((item, j) => (
                                            <motion.li
                                                key={j}
                                                initial={{ opacity: 0, x: -12 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.1 + j * 0.08, duration: 0.5 }}
                                                className="flex items-center gap-3.5 text-[14px] font-sans text-ink-secondary group/item"
                                            >
                                                <div className="w-6 h-6 rounded-lg bg-accent/15 flex items-center justify-center text-accent flex-shrink-0 group-hover/item:bg-accent/25 transition-colors duration-300">
                                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="group-hover/item:text-ink-primary transition-colors duration-300">{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
