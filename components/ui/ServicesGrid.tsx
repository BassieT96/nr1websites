"use client";

import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        id: "01",
        title: "Website op maat",
        desc: "Ontworpen met een scherp oog voor detail en technische perfectie.",
        span: "lg:col-span-8"
    },
    {
        id: "02",
        title: "SEO & Performance",
        desc: "Razendsnelle laadtijden die crawlers en klanten blij maken.",
        span: "lg:col-span-4"
    },
    {
        id: "03",
        title: "Onderhoud & Support",
        desc: "Wij zorgen voor de techniek, zodat jij je kunt focussen op je groei.",
        span: "lg:col-span-12"
    }
];

export function ServicesGrid() {
    return (
        <section className="py-32 px-6 lg:px-12 bg-canvas">
            <div className="max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <span className="text-[11px] font-mono font-bold tracking-[0.3em] text-accent uppercase mb-4 block">Onze Expertises</span>
                    <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display text-ink-primary leading-[1] font-bold max-w-3xl">
                        Diensten die jouw merk <span className="italic">versterken</span>.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`${service.span} group`}
                        >
                            <div className="h-full p-12 glass-dark rounded-[40px] border border-border transition-all duration-700 hover:border-accent/20 hover:shadow-lg relative overflow-hidden">
                                <span className="text-[48px] font-display font-bold text-accent/15 mb-8 block group-hover:text-accent/30 transition-colors duration-500">
                                    {service.id}
                                </span>
                                <h3 className="text-[32px] font-display font-bold text-ink-primary mb-6">{service.title}</h3>
                                <p className="text-[18px] font-sans text-ink-secondary leading-relaxed font-medium">
                                    {service.desc}
                                </p>

                                {/* Hover line effect */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
