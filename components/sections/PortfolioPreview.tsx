"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { SectionHeader } from '../ui/SectionHeader';
import { SpotlightCard } from '../ui/SpotlightCard';

const portfolioItems = [
    {
        title: "Barbershop Amsterdam",
        description: "Een premium boekingservaring voor de modernste kapper van de stad.",
        color: "from-accent to-blue-800",
        tags: ["Next.js", "Booking", "Lokale SEO"],
        url: "/portfolio/barbershop-amsterdam"
    },
    {
        title: "FitFabriek Coaching",
        description: "Leadgeneratie platform dat sporters motiveert en resultaten maximaliseert.",
        color: "from-blue-500 to-blue-900",
        tags: ["Next.js", "Conversie", "Branding"],
        url: "/portfolio/fitfabriek-coaching"
    }
];

export function PortfolioPreview() {
    return (
        <section className="py-48 bg-canvas relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-20">
                <SectionHeader
                    title="Geselecteerd werk"
                    subtitle="Ontdek hoe wij visie vertalen naar technisch superieure resultaten."
                    align="left"
                />

                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12 -mt-16">
                    <div className="max-w-2xl" />

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <Link
                            href="/portfolio"
                            className="group inline-flex items-center gap-4 text-[13px] font-mono font-bold text-ink-tertiary hover:text-ink-primary transition-all duration-300 uppercase tracking-widest"
                        >
                            Projecten bekijken
                            <span className="w-12 h-12 rounded-2xl border border-border flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-500">
                                →
                            </span>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                    {portfolioItems.map((item, idx) => (
                        <PortfolioCard key={idx} item={item} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function PortfolioCard({ item, idx }: { item: { title: string; description: string; color: string; tags: string[]; url: string }; idx: number }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative"
        >
            <Link href={item.url} className="block">
                <SpotlightCard className="overflow-hidden glass-dark border border-border" spotlightColor="rgba(0, 170, 255, 0.08)">
                    {/* Image Container with Parallax & Masks */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-t-[24px]">
                        <motion.div
                            style={{ y }}
                            className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40 group-hover:opacity-60 transition-opacity duration-1000`}
                        />

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-xl">
                            <div className="text-center">
                                <span className="block text-white font-display font-black text-[22px] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 uppercase tracking-tighter">View project</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-10">
                        <div className="flex flex-wrap gap-2 mb-8">
                            {item.tags.map((tag: string, tIdx: number) => (
                                <span key={tIdx} className="text-[10px] font-mono font-bold uppercase tracking-widest text-ink-tertiary px-3 py-1 bg-surface-2 rounded-full border border-border">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h3 className="text-[32px] md:text-[36px] font-display font-bold text-ink-primary leading-[1] mb-6 tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                            {item.title}
                        </h3>

                        <p className="text-[17px] font-sans text-ink-secondary leading-relaxed font-medium">
                            {item.description}
                        </p>
                    </div>
                </SpotlightCard>
            </Link>
        </motion.div>
    );
}
