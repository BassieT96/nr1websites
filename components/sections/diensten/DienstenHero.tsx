"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const anchors = [
    { label: "Website op maat", href: "/diensten/website-laten-maken" },
    { label: "SEO & Performance", href: "/diensten/seo" },
    { label: "Onderhoud & Support", href: "/diensten/onderhoud" },
];

export function DienstenHero() {
    return (
        <section
            aria-label="Diensten introductie"
            className="relative min-h-[60vh] pt-[140px] pb-20 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center text-center grain"
            style={{
                backgroundImage:
                    "radial-gradient(ellipse 900px 500px at 60% 0%, var(--color-accent-subtle) 0%, transparent 65%)",
            }}
        >
            <div className="max-w-[800px] w-full mx-auto relative z-10">
                {/* Breadcrumb */}
                <motion.nav
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    aria-label="Breadcrumb"
                    className="mb-6"
                >
                    <ol className="flex items-center justify-center gap-2 text-[13px] font-sans">
                        <li>
                            <Link href="/" className="text-ink-tertiary hover:text-ink-primary transition-colors">
                                Home
                            </Link>
                        </li>
                        <li className="text-border-strong">/</li>
                        <li className="text-ink-primary font-medium">Diensten</li>
                    </ol>
                </motion.nav>

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative group mb-8 inline-block"
                >
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-border-strong via-accent-glow to-border-strong rounded-full animate-[shimmer_3s_linear_infinite] bg-[length:200%_auto]" />
                    <div className="relative px-4 py-1.5 bg-surface-1 rounded-full border border-border-strong flex items-center gap-2">
                        <span className="text-accent text-[11px]">✦</span>
                        <span className="text-ink-tertiary font-mono text-[11px] uppercase tracking-[0.06em]">
                            Wat wij voor je bouwen
                        </span>
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[38px] sm:text-[48px] lg:text-[72px] font-display font-light italic leading-[0.95] tracking-[-0.04em] text-ink-primary mb-8"
                >
                    Van idee tot
                    <br />
                    <span className="relative inline-block">
                        live
                        <svg
                            className="absolute -bottom-2 left-0 w-full h-auto overflow-visible"
                            viewBox="0 0 200 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <motion.path
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                                d="M6 14C30 8 110 4 194 8"
                                stroke="var(--color-accent)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>{" "}
                    website.
                </motion.h1>

                {/* Subline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-[560px] mx-auto text-[17px] md:text-[19px] font-sans font-light text-ink-secondary leading-[1.6] mb-12"
                >
                    Wij bieden alles wat je nodig hebt om online te groeien. Geen losse onderdelen — een
                    compleet pakket van strategie tot support.
                </motion.p>

                {/* Anchor Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap items-center justify-center gap-3"
                >
                    {anchors.map((anchor, i) => (
                        <motion.a
                            key={anchor.href}
                            href={anchor.href}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.9 + i * 0.08 }}
                            className="px-5 py-2.5 bg-surface-1 border border-border-strong rounded-full font-sans text-[14px] text-ink-secondary transition-all duration-300 hover:text-ink-primary hover:border-ink-tertiary hover:scale-[1.02] active:scale-[0.98]"
                        >
                            {anchor.label} ↓
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
