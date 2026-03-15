"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Minus, Plus } from 'lucide-react';
import { faq as faqData } from '@/lib/data/faq';

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-48 bg-canvas relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-[1000px] mx-auto px-6 relative z-20">
                <SectionHeader
                    title="Alles wat je moet weten"
                    subtitle="Vragen over onze werkwijze, techniek of planning? Hier vind je de antwoorden."
                />

                <div className="space-y-6 relative z-10">
                    {faqData.map((faq, idx) => {
                        const isOpen = openIndex === idx;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                            >
                                <SpotlightCard
                                    className={`transition-all duration-500 overflow-hidden border border-border ${isOpen ? 'glass-dark' : 'bg-surface-1'}`}
                                    spotlightColor="rgba(0, 170, 255, 0.05)"
                                >
                                    <button
                                        onClick={() => toggleOpen(idx)}
                                        className="w-full p-8 md:p-10 flex items-center justify-between text-left outline-none cursor-pointer"
                                    >
                                        <h3 className={`text-[20px] md:text-[22px] font-display font-bold tracking-tight transition-colors duration-500 pr-8
                                            ${isOpen ? 'text-ink-primary' : 'text-ink-secondary'}
                                        `}>
                                            {faq.vraag}
                                        </h3>
                                        <div className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-500
                                            ${isOpen
                                                ? 'border-accent bg-accent text-white rotate-0'
                                                : 'border-border-strong text-ink-tertiary rotate-90'
                                            }`}
                                        >
                                            {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                        </div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            >
                                                <div className="px-8 md:px-10 pb-10 text-[17px] md:text-[18px] font-sans text-ink-secondary leading-relaxed max-w-4xl font-medium">
                                                    <div className="h-px bg-border-strong w-12 mb-8" />
                                                    {faq.antwoord}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </SpotlightCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
