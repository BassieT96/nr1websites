"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const steps = [
    {
        nummer: "01",
        naam: "Kennismaking",
        omschrijving: "Gratis gesprek, wensen bespreken, offerte",
        week: "Week 1",
    },
    {
        nummer: "02",
        naam: "Design",
        omschrijving: "Wireframes, design mockup, jouw feedback",
        week: "Week 1–2",
    },
    {
        nummer: "03",
        naam: "Development",
        omschrijving: "Bouwen, testen op alle apparaten",
        week: "Week 2–4",
    },
    {
        nummer: "04",
        naam: "Live & Support",
        omschrijving: "Oplevering, training, 1 maand support",
        week: "Week 4+",
    },
];

export function ProcessTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const scaleProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <section
            ref={containerRef}
            aria-label="Onze werkwijze"
            className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-surface-2/50 relative"
        >
            <div className="max-w-[1200px] mx-auto">
                {/* Section header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        className="text-[11px] font-mono font-medium text-accent uppercase tracking-[0.08em] block mb-4"
                    >
                        Onze werkwijze
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[36px] md:text-[52px] font-display font-light italic text-ink-primary leading-[1.1]"
                    >
                        Van gesprek tot
                        <br />
                        opgeleverd.
                    </motion.h2>
                </div>

                {/* --- DESKTOP: horizontal zigzag --- */}
                <div className="hidden lg:block relative">
                    {/* Horizontal line */}
                    <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-border-strong -translate-y-1/2 z-0">
                        <motion.div
                            style={{ scaleX: scaleProgress, originX: 0 }}
                            className="absolute inset-0 bg-accent"
                        />
                    </div>

                    <div className="grid grid-cols-4 gap-0 relative z-10">
                        {steps.map((step, i) => {
                            const isAbove = i % 2 === 0;
                            return (
                                <motion.div
                                    key={step.nummer}
                                    initial={{ opacity: 0, y: isAbove ? -20 : 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                                    className={`flex flex-col items-center ${isAbove ? "pt-0 pb-32" : "pt-32 pb-0"}`}
                                >
                                    {/* Content */}
                                    <div className={`text-center ${isAbove ? "order-1 mb-6" : "order-3 mt-6"}`}>
                                        <h3 className="text-[18px] font-sans font-semibold text-ink-primary mb-1">
                                            {step.naam}
                                        </h3>
                                        <p className="text-[14px] font-sans font-light text-ink-secondary max-w-[180px] mx-auto mb-3">
                                            {step.omschrijving}
                                        </p>
                                        <span className="inline-block text-[11px] font-mono font-medium text-accent bg-accent-subtle px-3 py-1 rounded-full">
                                            {step.week}
                                        </span>
                                    </div>

                                    {/* Circle on the line */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 + i * 0.12 }}
                                        className="order-2 w-12 h-12 rounded-full bg-surface-1 border-2 border-border-strong flex items-center justify-center shadow-sm z-20"
                                    >
                                        <span className="text-[14px] font-mono font-semibold text-ink-primary">
                                            {step.nummer}
                                        </span>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* --- MOBILE: vertical timeline --- */}
                <div className="lg:hidden relative pl-14">
                    {/* Vertical line */}
                    <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-border-strong">
                        <motion.div
                            style={{ scaleY: scaleProgress, originY: 0 }}
                            className="absolute inset-0 bg-accent"
                        />
                    </div>

                    <div className="space-y-16">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.nummer}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="relative"
                            >
                                {/* Circle */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.15 + i * 0.1 }}
                                    className="absolute -left-14 top-0 w-10 h-10 rounded-full bg-surface-1 border-2 border-border-strong flex items-center justify-center shadow-sm z-20"
                                >
                                    <span className="text-[12px] font-mono font-semibold text-ink-primary">
                                        {step.nummer}
                                    </span>
                                </motion.div>

                                <div>
                                    <h3 className="text-[18px] font-sans font-semibold text-ink-primary mb-1">
                                        {step.naam}
                                    </h3>
                                    <p className="text-[14px] font-sans font-light text-ink-secondary mb-3">
                                        {step.omschrijving}
                                    </p>
                                    <span className="inline-block text-[11px] font-mono font-medium text-accent bg-accent-subtle px-3 py-1 rounded-full">
                                        {step.week}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
