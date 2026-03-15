"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
    { title: "Maison l'Art", seed: "art", span: "aspect-[4/5] lg:col-span-4" },
    { title: "Echo Design", seed: "design", span: "aspect-[16/9] lg:col-span-8" },
    { title: "Studio K", seed: "studio", span: "aspect-[16/9] lg:col-span-12" }
];

export function PortfolioStrip() {
    return (
        <section className="py-32 px-6 lg:px-12 bg-bg overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[11px] font-mono font-bold tracking-[0.3em] text-accent uppercase mb-4 block">Geselecteerd Werk</span>
                        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-display text-ink leading-[1] font-light">
                            Recente <span className="italic">Projecten</span>.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="h-px bg-ink/5 flex-grow hidden md:block mb-6 ml-12"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.seed}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`${project.span} relative group overflow-hidden rounded-[40px]`}
                        >
                            <Image
                                src={`https://picsum.photos/seed/${project.seed}/1200/800`}
                                alt={`Website project ${project.title} door nr1websites`}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-700 flex flex-col justify-end p-12">
                                <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                                    <h3 className="text-[32px] font-display font-light text-white">{project.title}</h3>
                                    <div className="w-12 h-px bg-accent mt-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
