"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function DienstenCta() {
    return (
        <section aria-label="Contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 gradient-navy relative overflow-hidden grain">
            {/* Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-canvas via-transparent to-canvas" />
            </div>

            <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                {/* Left: Message */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-[40px] md:text-[56px] font-display font-light italic text-white leading-[1.1] mb-6">
                        Klaar om te starten?
                    </h2>
                    <p className="text-[17px] font-sans font-light text-white/75 leading-[1.65] max-w-[460px] mb-8">
                        Plan een gratis kennismaking van 30 minuten. Geen verkooppraatjes — gewoon eerlijk advies over wat jouw website nodig heeft.
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] font-sans text-white/70">
                        <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-accent-on-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            Gratis eerste gesprek
                        </span>
                        <span className="text-accent-on-dark">·</span>
                        <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-accent-on-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            Geen verplichtingen
                        </span>
                        <span className="text-accent-on-dark">·</span>
                        <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-accent-on-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            Reactie binnen 24u
                        </span>
                    </div>
                </motion.div>

                {/* Right: Mini Contact Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-surface-1 rounded-xl p-9 shadow-lg max-w-[400px] lg:ml-auto w-full"
                >
                    {/* Avatar + Name */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden relative bg-surface-2 flex-shrink-0">
                            <Image
                                src="https://picsum.photos/seed/42/96/96"
                                alt="Bas - Oprichter nr1websites"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-[16px] font-sans font-semibold text-ink-primary">Bas</p>
                            <p className="text-[13px] font-sans text-ink-tertiary">Oprichter nr1websites</p>
                        </div>
                    </div>

                    {/* Availability */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[13px] font-sans text-ink-secondary">
                            Beschikbaar voor nieuwe projecten
                        </span>
                    </div>

                    <div className="h-px bg-border mb-6" />

                    {/* CTA */}
                    <Link
                        href="/contact"
                        className="w-full py-3.5 bg-accent text-white rounded-lg font-sans font-medium text-[15px] flex items-center justify-center transition-all duration-300 hover:translate-y-[-2px] hover:shadow-accent active:scale-[0.98]"
                    >
                        Plan gratis gesprek
                    </Link>

                    <Link
                        href="mailto:info@nr1websites.nl"
                        className="block text-center mt-4 text-[13px] font-sans text-ink-tertiary hover:text-ink-primary transition-colors"
                    >
                        Of stuur een e-mail →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
