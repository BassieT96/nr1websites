"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
    { title: "FitFabriek Coaching", category: "E-commerce", seed: 1, stat: "+180% conversie", speed: "0.8s load", color: "from-emerald-500/20 to-emerald-900/40" },
    { title: "Studio Visser", category: "Architectuur", seed: 2, stat: "+240% traffic", speed: "0.6s load", color: "from-accent/20 to-blue-900/40" },
    { title: "Bakkerij De Zon", category: "Zakelijk", seed: 3, stat: "+95% leads", speed: "1.1s load", color: "from-amber-500/20 to-amber-900/40" },
    { title: "GreenRoot Garden", category: "Webshop", seed: 4, stat: "+320% omzet", speed: "0.7s load", color: "from-lime-500/20 to-green-900/40" },
    { title: "TechStart Hub", category: "SaaS", seed: 5, stat: "+150% signups", speed: "0.5s load", color: "from-purple-500/20 to-purple-900/40" },
];

export function PortfolioSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [40, -40]);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;
        const handleScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            setScrollProgress(scrollLeft / (scrollWidth - clientWidth));
        };
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -440 : 440,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section ref={sectionRef} className="py-40 bg-canvas overflow-hidden relative">
            {/* Subtle parallax background */}
            <motion.div style={{ y: backgroundY }} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[30%] right-[5%] w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[140px]" />
            </motion.div>

            <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-[11px] font-mono font-medium text-accent uppercase tracking-[0.12em] block mb-5">
                        Recent werk
                    </span>
                    <h2 className="text-[48px] md:text-[64px] font-display font-bold text-ink-primary leading-[1.05] tracking-[-0.03em]">
                        Projecten die<br /><span className="text-gradient-premium">impact</span> maken.
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex items-center gap-6"
                >
                    <Link href="/portfolio" className="text-[14px] font-sans font-medium text-accent hover:text-accent-hover transition-colors group flex items-center gap-2 animated-underline">
                        Alle projecten
                        <span className="transition-transform group-hover:translate-x-1.5">&rarr;</span>
                    </Link>
                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-border-strong flex items-center justify-center glass-dark text-ink-primary transition-all duration-300 hover:neon-border hover:text-accent hover:scale-110 active:scale-95"
                            aria-label="Scroll left"
                        >
                            &larr;
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-border-strong flex items-center justify-center glass-dark text-ink-primary transition-all duration-300 hover:neon-border hover:text-accent hover:scale-110 active:scale-95"
                            aria-label="Scroll right"
                        >
                            &rarr;
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Film Strip */}
            <div
                ref={scrollContainerRef}
                className="flex gap-7 overflow-x-auto overflow-y-hidden px-[max(24px,calc((100%-1200px)/2+48px))] pb-12 no-scrollbar scroll-smooth snap-x snap-mandatory"
            >
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 80, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                        className="flex-shrink-0 w-[300px] sm:w-[380px] md:w-[420px] h-[520px] md:h-[560px] rounded-[32px] overflow-hidden relative group/card snap-start bg-surface-1 border border-border hover:border-accent/30 transition-all duration-700"
                    >
                        <Image
                            src={`https://picsum.photos/seed/${project.seed + 100}/840/1120`}
                            alt={`Website project ${project.title} door nr1websites`}
                            fill
                            sizes="(max-width: 768px) 100vw, 420px"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/card:scale-110"
                        />
                        {/* Gradient overlay with project-specific color */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${project.color} via-canvas/50 to-transparent transition-all duration-700 group-hover/card:via-canvas/70`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/30 to-transparent" />

                        {/* Content */}
                        <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                            <motion.div className="transform transition-all duration-700 group-hover/card:-translate-y-4">
                                <span className="inline-block px-3 py-1.5 rounded-full border border-accent/30 backdrop-blur-md text-[10px] font-mono text-accent uppercase tracking-widest mb-4 neon-border">
                                    {project.category}
                                </span>
                                <h3 className="text-[24px] md:text-[28px] font-display font-bold text-white leading-tight mb-3 tracking-[-0.01em]">
                                    {project.title}
                                </h3>

                                {/* Stats panel — slides up on hover */}
                                <div className="flex gap-3 opacity-0 translate-y-6 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-600 delay-75">
                                    <div className="glass-dark rounded-xl px-4 py-2.5 border border-border">
                                        <span className="text-[11px] font-mono text-accent font-bold">{project.stat}</span>
                                    </div>
                                    <div className="glass-dark rounded-xl px-4 py-2.5 border border-border">
                                        <span className="text-[11px] font-mono text-emerald-400 font-bold">{project.speed}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Arrow Button */}
                        <div className="absolute top-8 right-8 w-12 h-12 rounded-full glass-dark neon-border flex items-center justify-center text-accent transition-all duration-500 scale-0 opacity-0 group-hover/card:scale-100 group-hover/card:opacity-100 group-hover/card:rotate-[-45deg]">
                            <span className="text-[18px]">&rarr;</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Scroll Progress Bar */}
            <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 mt-4">
                <div className="h-[2px] bg-surface-3 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-accent rounded-full shadow-[0_0_8px_rgba(0,170,255,0.4)]"
                        style={{ width: `${Math.max(scrollProgress * 100, 5)}%` }}
                        transition={{ type: "spring", stiffness: 200, damping: 30 }}
                    />
                </div>
            </div>
        </section>
    );
}
