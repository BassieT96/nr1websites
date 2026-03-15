"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { SpotlightCard } from '../ui/SpotlightCard';

const steps = [
    {
        number: "01",
        title: "Strategie & Kennismaking",
        description: "We duiken in jouw business. Wie is je doelgroep? Wat is het hoofddoel? We leggen de fundering voor conversie.",
        color: "#00AAFF"
    },
    {
        number: "02",
        title: "Premium Design & Content",
        description: "Geen standaard templates. We ontwerpen een interface die jouw merkidentiteit ademt en je doelgroep raakt.",
        color: "#33BBFF"
    },
    {
        number: "03",
        title: "High-End Ontwikkeling",
        description: "We bouwen je site met de modernste tech (Next.js). Razendsnel op elk apparaat en technisch perfect voor Google.",
        color: "#00AAFF"
    },
    {
        number: "04",
        title: "Livegang & Groei",
        description: "Na 14 dagen staat je site live. Maar we stoppen niet: we zorgen dat je site blijft presteren en meegroeit.",
        color: "#22C55E"
    }
];

export function HowItWorks() {
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
        <section ref={containerRef} className="py-48 bg-canvas relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
                <SectionHeader
                    title="Hoe we jouw visie realiseren"
                    subtitle="Van eerste kennismaking tot een resultaatgerichte livegang in 14 dagen."
                />

                <div className="relative">
                    {/* Sticky Progress Line */}
                    <div className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border-strong z-0">
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="absolute top-0 left-0 right-0 bottom-0 bg-accent origin-top shadow-[0_0_10px_rgba(0,170,255,0.4)]"
                        />
                    </div>

                    <div className="space-y-24 md:space-y-40 relative z-10">
                        {steps.map((step, idx) => (
                            <StepItem key={idx} step={step} idx={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function StepItem({ step, idx }: { step: { number: string; title: string; description: string; color: string }; idx: number }) {
    const isEven = idx % 2 === 0;

    return (
        <div className={`flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className={`flex-1 w-full ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                <SpotlightCard className="p-8 md:p-12 glass-dark border border-border group" beamDuration={12}>
                    <motion.div
                        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="text-[72px] md:text-[90px] font-display font-bold text-accent/10 leading-none block mb-6 select-none group-hover:text-accent/15 transition-opacity">
                            {step.number}
                        </span>
                        <h3 className="text-[32px] md:text-[40px] font-display font-bold text-ink-primary leading-[1] mb-6 tracking-[-0.04em]">
                            {step.title}
                        </h3>
                        <p className="text-[17px] md:text-[18px] font-sans text-ink-secondary leading-relaxed max-w-lg inline-block font-medium">
                            {step.description}
                        </p>
                    </motion.div>
                </SpotlightCard>
            </div>

            <div className="relative flex-shrink-0 z-20">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.2 }}
                    className="w-[56px] h-[56px] rounded-full bg-surface-1 border-4 border-surface-1 flex items-center justify-center shadow-lg"
                >
                    <div
                        className="w-3 h-3 rounded-full animate-pulse"
                        style={{ backgroundColor: step.color, boxShadow: `0 0 15px ${step.color}` }}
                    />
                </motion.div>
            </div>

            <div className="flex-1 w-full hidden md:block" />
        </div>
    );
}
