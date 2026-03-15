"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Rocket, Zap, Building2 } from 'lucide-react';

const tiers = [
    {
        name: "Starter",
        price: "\u20AC799",
        description: "Perfect voor starters en kleine ZZP'ers die online willen starten.",
        features: ["Uniek Webdesign", "Next.js Performance", "Mobiel geoptimaliseerd", "Standaard SEO", "3 Pagina's", "Contactformulier"],
        cta: "Meer info",
        highlight: false,
        icon: Rocket
    },
    {
        name: "Business",
        price: "\u20AC1499",
        description: "De meest gekozen optie voor serieuze groei.",
        features: ["Alles uit Starter", "Custom Animaties", "Advanced SEO Setup", "CMS Integratie", "10 Pagina's", "Google Analytics", "Premium Support"],
        cta: "Kies Business",
        highlight: true,
        icon: Zap
    },
    {
        name: "Enterprise",
        price: "Op maat",
        description: "Voor complexe projecten en webshops.",
        features: ["Alles uit Business", "E-commerce functionaliteit", "API Integraties", "Custom Dashboards", "Priority Support", "Conversie optimalisatie"],
        cta: "Plan gesprek",
        highlight: false,
        icon: Building2
    }
];

export function PricingPreview() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

    return (
        <section ref={sectionRef} className="py-40 px-6 md:px-12 lg:px-20 bg-canvas relative overflow-hidden">
            {/* Background effects */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[150px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-blue-600/[0.02] rounded-full blur-[130px]" />
            </motion.div>

            <div className="max-w-[1200px] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20"
                >
                    <span className="text-[11px] font-mono font-medium text-accent uppercase tracking-[0.12em] block mb-5">Prijzen</span>
                    <h2 className="text-[48px] md:text-[64px] font-display font-bold text-ink-primary leading-[1.05] tracking-[-0.03em] mb-5">
                        Eerlijke <span className="text-gradient-premium">tarieven</span>.
                    </h2>
                    <p className="text-[17px] font-sans font-light text-ink-secondary max-w-[500px] mx-auto">
                        Geen verborgen kosten. Kies het pakket dat bij je past.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                            className={`w-full max-w-sm rounded-[32px] transition-all duration-700 relative flex flex-col ${tier.highlight
                                ? 'lg:scale-[1.05] z-20'
                                : 'z-10'
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white font-mono text-[10px] font-bold px-5 py-2 rounded-full uppercase tracking-widest whitespace-nowrap neon-glow z-30">
                                    Meest gekozen
                                </div>
                            )}

                            <div className={`flex flex-col flex-1 p-9 md:p-11 rounded-[32px] relative overflow-hidden group ${tier.highlight
                                ? 'bg-gradient-to-b from-accent/10 via-surface-1 to-surface-1 border border-accent/30 shadow-neon'
                                : 'glass-dark border border-border hover-lift'
                                }`}
                            >
                                {/* Spotlight hover effect */}
                                <div className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-b from-accent/[0.04] to-transparent" />

                                <div className="mb-8 pt-2">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 ${tier.highlight ? 'bg-accent/20 text-accent shadow-[0_0_20px_rgba(0,170,255,0.3)]' : 'bg-surface-2 border border-border text-ink-secondary group-hover:border-accent/20 group-hover:text-accent'}`}>
                                        <tier.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-[20px] font-display font-bold mb-2 text-ink-primary">
                                        {tier.name}
                                    </h3>
                                    <p className="text-[14px] font-sans font-light text-ink-secondary leading-relaxed">
                                        {tier.description}
                                    </p>
                                </div>

                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className="text-[52px] font-display font-bold leading-none text-ink-primary tracking-[-0.03em]">{tier.price}</span>
                                    {tier.price !== "Op maat" && <span className="text-[14px] font-sans font-light text-ink-tertiary">/eenmalig</span>}
                                </div>

                                {tier.price !== "Op maat" && (
                                    <div className="mb-8 px-4 py-2.5 rounded-xl bg-surface-2 border border-border inline-flex items-center gap-2 w-fit">
                                        <span className="text-[13px] font-mono font-medium text-accent">+ \u20AC49</span>
                                        <span className="text-[12px] font-sans text-ink-tertiary">/maand hosting & support</span>
                                    </div>
                                )}

                                <ul className="space-y-4 mb-10 flex-1 border-t border-border pt-8">
                                    {tier.features.map((feature, j) => (
                                        <motion.li
                                            key={j}
                                            initial={{ opacity: 0, x: -8 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 + j * 0.05, duration: 0.4 }}
                                            className="flex items-start gap-3.5 group/feat"
                                        >
                                            <div className={`w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300 ${tier.highlight ? 'bg-accent/20 text-accent group-hover/feat:bg-accent/30' : 'bg-accent/10 text-accent group-hover/feat:bg-accent/20'}`}>
                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-[14px] font-sans text-ink-secondary group-hover/feat:text-ink-primary transition-colors duration-300">
                                                {feature}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <Link
                                    href="/contact"
                                    className={`w-full py-4 rounded-full font-sans font-semibold text-[15px] flex items-center justify-center transition-all duration-300 active:scale-[0.98] group/btn ${tier.highlight
                                        ? 'bg-accent text-white hover:brightness-110 hover:shadow-neon shadow-accent shine-sweep'
                                        : 'glass-dark text-ink-secondary hover:text-ink-primary border border-border hover:border-accent/30'
                                        }`}
                                >
                                    {tier.cta}
                                    <span className="ml-2 transition-transform group-hover/btn:translate-x-1">&rarr;</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-6 mt-14 text-[13px] font-sans text-ink-ghost"
                >
                    {["Alle prijzen excl. BTW", "Hosting inclusief", "Geen verborgen kosten", "14 dagen live-garantie"].map((item, i) => (
                        <span key={i} className="flex items-center gap-2">
                            <svg className="w-3.5 h-3.5 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
