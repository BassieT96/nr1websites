"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpotlightCard } from '../ui/SpotlightCard';
import { SectionHeader } from '../ui/SectionHeader';
import { testimonials } from '@/lib/data/testimonials';
import { CheckCircle2, Star } from 'lucide-react';

export function Testimonials() {
    const [page, setPage] = useState(0);
    const testimonialsPerPage = 4;
    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

    useEffect(() => {
        const timer = setInterval(() => {
            setPage((prev) => (prev + 1) % totalPages);
        }, 8000);
        return () => clearInterval(timer);
    }, [totalPages]);

    const currentTestimonials = testimonials.slice(
        page * testimonialsPerPage,
        (page + 1) * testimonialsPerPage
    );

    return (
        <section className="py-48 bg-canvas relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-accent/3 blur-[120px] rounded-full opacity-30" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-20">
                <SectionHeader
                    title="Verhalen van groei & visie"
                    subtitle="Ontdek hoe wij ambitieuze ondernemers helpen hun digitale dromen te realiseren."
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 min-h-[700px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={page}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="contents"
                        >
                            {currentTestimonials.map((testimonial, idx) => {
                                const spans = [
                                    "md:col-span-12 lg:col-span-7",
                                    "md:col-span-6 lg:col-span-5",
                                    "md:col-span-6 lg:col-span-5",
                                    "md:col-span-12 lg:col-span-7",
                                ];

                                const currentSpan = spans[idx % spans.length];

                                return (
                                    <div key={`${page}-${idx}`} className={currentSpan}>
                                        <SpotlightCard
                                            className="h-full p-10 md:p-14 glass-dark border border-border relative group"
                                            spotlightColor={idx % 2 === 0 ? "rgba(0, 170, 255, 0.08)" : "rgba(0, 170, 255, 0.05)"}
                                            beamDuration={15 + (idx * 2)}
                                        >
                                            <div className="relative z-10 flex flex-col justify-between h-full">
                                                <div>
                                                    <div className="flex items-center justify-between mb-10">
                                                        <div className="flex gap-1.5">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                                                            ))}
                                                        </div>
                                                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-border">
                                                            <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                                                            <span className="text-[10px] font-mono font-bold uppercase text-ink-tertiary tracking-widest">Geverifieerd</span>
                                                        </div>
                                                    </div>

                                                    <p className={`font-display text-ink-primary leading-[1.3] mb-12 tracking-tight ${testimonial.featured ? 'text-[24px] md:text-[32px] lg:text-[38px] font-bold' : 'text-[20px] md:text-[22px] font-bold'}`}>
                                                        &quot;{testimonial.quote}&quot;
                                                    </p>
                                                </div>

                                                <div className="flex items-center justify-between mt-auto pt-8 border-t border-border">
                                                    <div className="flex items-center gap-5">
                                                        <div className="w-14 h-14 rounded-2xl bg-surface-2 border border-border flex items-center justify-center text-ink-primary font-display font-bold text-[20px] italic">
                                                            {testimonial.logo}
                                                        </div>
                                                        <div>
                                                            <h4 className="text-[18px] font-display font-bold text-ink-primary tracking-tight">
                                                                {testimonial.author}
                                                            </h4>
                                                            <p className="text-[12px] font-mono text-ink-tertiary mt-1 uppercase tracking-widest font-bold">
                                                                {testimonial.company}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Decorative background logo */}
                                                    <div className="text-[100px] font-display font-black text-ink-primary/[0.03] absolute bottom-2 right-6 pointer-events-none select-none italic group-hover:scale-110 transition-transform duration-1000">
                                                        {testimonial.logo}
                                                    </div>
                                                </div>
                                            </div>
                                        </SpotlightCard>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-16">
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-700 ${page === i ? 'bg-accent w-10 neon-glow' : 'bg-surface-3 hover:bg-ink-tertiary'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
