"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface DienstDetailProps {
    id: string;
    nummer: string;
    naam: string;
    tagline: string;
    omschrijving: string[];
    features: string[];
    prijs: string;
    prijsLabel?: string;
    levertijd: string;
    href?: string;
    visual: "website" | "seo" | "onderhoud";
    reversed?: boolean;
}

/* ---------- Decorative visuals ---------- */

function BrowserMockup() {
    return (
        <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity }}
            className="w-full aspect-[4/3] bg-surface-1 rounded-xl border border-border shadow-lg overflow-hidden"
        >
            {/* Chrome */}
            <div className="h-10 bg-surface-2 flex items-center gap-1.5 px-4 border-b border-border">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <div className="flex-1 ml-4 h-5 bg-surface-3 rounded-md max-w-[180px]" />
            </div>
            {/* Content skeleton */}
            <div className="p-6 space-y-4">
                <div className="h-8 bg-accent-subtle rounded-lg w-full" />
                <div className="space-y-2">
                    <div className="h-3 bg-surface-3 rounded-full w-3/4" />
                    <div className="h-3 bg-surface-3 rounded-full w-1/2" />
                </div>
                <div className="h-32 bg-surface-2 rounded-xl" />
                <div className="space-y-2">
                    <div className="h-3 bg-surface-3 rounded-full w-5/6" />
                    <div className="h-3 bg-surface-3 rounded-full w-2/3" />
                </div>
                <div className="h-9 bg-accent/60 rounded-lg w-32" />
            </div>
        </motion.div>
    );
}

function LighthouseCard() {
    const scores = [
        { label: "Performance", value: 98 },
        { label: "SEO", value: 100 },
        { label: "Accessibility", value: 95 },
        { label: "Best Practices", value: 100 },
    ];
    const circumference = 2 * Math.PI * 28;

    return (
        <div className="w-full bg-surface-1 rounded-xl border border-border shadow-lg p-8">
            <p className="text-[14px] font-sans font-medium text-ink-secondary mb-8">Performance score</p>
            <div className="grid grid-cols-2 gap-8 justify-items-center">
                {scores.map((s, i) => {
                    const offset = circumference - (s.value / 100) * circumference;
                    return (
                        <div key={s.label} className="flex flex-col items-center gap-2">
                            <div className="relative w-[72px] h-[72px]">
                                <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                                    <circle cx="32" cy="32" r="28" fill="none" stroke="var(--color-surface-3)" strokeWidth="4" />
                                    <motion.circle
                                        cx="32"
                                        cy="32"
                                        r="28"
                                        fill="none"
                                        stroke="#22C55E"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeDasharray={circumference}
                                        initial={{ strokeDashoffset: circumference }}
                                        whileInView={{ strokeDashoffset: offset }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                    />
                                </svg>
                                <span className="absolute inset-0 flex items-center justify-center text-[20px] font-mono font-semibold text-ink-primary">
                                    {s.value}
                                </span>
                            </div>
                            <span className="text-[11px] font-mono font-medium text-ink-tertiary uppercase tracking-wider text-center">
                                {s.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function UptimeDashboard() {
    const logs = [
        { time: "09:42", action: "SSL certificaat vernieuwd ✓" },
        { time: "Gisteren", action: "WordPress update uitgevoerd ✓" },
        { time: "3 dagen geleden", action: "Backup gemaakt ✓" },
        { time: "1 week geleden", action: "Uptime check geslaagd ✓" },
    ];

    return (
        <div className="w-full bg-surface-1 rounded-xl border border-border shadow-lg p-8">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[28px] font-mono font-semibold text-ink-primary">99.9% uptime</span>
            </div>
            <div className="space-y-3">
                {logs.map((log, i) => (
                    <div key={i} className="flex items-start gap-3 text-[12px] font-mono text-ink-tertiary">
                        <span className="text-ink-ghost whitespace-nowrap w-28 flex-shrink-0">{log.time}</span>
                        <span className="text-ink-secondary">{log.action}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ---------- Main component ---------- */

export function DienstDetail({
    id,
    nummer,
    naam,
    tagline,
    omschrijving,
    features,
    prijs,
    prijsLabel,
    levertijd,
    visual,
    href,
    reversed = false,
}: DienstDetailProps) {
    const VisualComponent = visual === "website" ? BrowserMockup : visual === "seo" ? LighthouseCard : UptimeDashboard;

    return (
        <section id={id} aria-label={naam} className="scroll-mt-24">
            <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${reversed ? "lg:[direction:rtl]" : ""
                    }`}
            >
                {/* Text Column */}
                <div className={`lg:col-span-7 relative ${reversed ? "lg:[direction:ltr]" : ""}`}>
                    {/* Watermark number */}
                    <span className="absolute -top-4 -left-2 text-[88px] font-mono font-semibold text-ink-ghost/20 select-none pointer-events-none leading-none">
                        {nummer}
                    </span>

                    <div className="relative z-10">
                        {/* Label */}
                        <motion.span
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5 }}
                            className="text-[11px] font-mono font-medium text-accent uppercase tracking-[0.08em] block mb-4"
                        >
                            {naam}
                        </motion.span>

                        {/* Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[32px] md:text-[44px] font-display font-light italic text-ink-primary leading-[1.05] tracking-[-0.03em] mb-8"
                        >
                            {tagline}
                        </motion.h2>

                        {/* Description */}
                        {omschrijving.map((p, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                                className="text-[17px] font-sans font-light text-ink-secondary leading-[1.65] mb-4 max-w-[520px]"
                            >
                                {p}
                            </motion.p>
                        ))}

                        {/* Features */}
                        <motion.ul
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 mb-10"
                        >
                            {features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-[14px] font-sans text-ink-secondary">
                                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </motion.ul>

                        {/* Badges + CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-wrap items-center gap-3"
                        >
                            <span className="px-4 py-2 bg-accent text-white rounded-full font-sans font-medium text-[15px]">
                                {prijs}
                            </span>
                            <span className="px-4 py-2 bg-surface-2 border border-border-strong rounded-full font-sans text-[14px] text-ink-secondary">
                                {levertijd}
                            </span>
                            {prijsLabel && (
                                <span className="text-[13px] font-sans text-ink-tertiary italic">{prijsLabel}</span>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="mt-6 flex flex-wrap items-center gap-4"
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white rounded-full font-sans font-medium text-[15px] shadow-accent transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0 active:scale-[0.98] group"
                            >
                                Start jouw project
                                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                            </Link>

                            {href && (
                                <Link
                                    href={href}
                                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-surface-2 border border-border-strong text-ink-primary rounded-full font-sans font-medium text-[15px] transition-all duration-300 hover:translate-y-[-2px] hover:bg-surface-3 active:translate-y-0 active:scale-[0.98] group"
                                >
                                    Meer over {naam.toLowerCase()}
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </Link>
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* Visual Column */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={`lg:col-span-5 ${reversed ? "lg:[direction:ltr]" : ""}`}
                >
                    <VisualComponent />
                </motion.div>
            </div>
        </section>
    );
}
