"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        ,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
};

/* ─── Spotlight Bento Card ─── */
function BentoCard({ children, className, href, spotlightColor = "rgba(0, 170, 255, 0.12)" }: { children: React.ReactNode; className: string; href?: string; spotlightColor?: string }) {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = React.useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            variants={itemVariants}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className={`relative overflow-hidden group ${className} ${href ? 'cursor-pointer' : ''}`}
        >
            {href && (
                <Link href={href} className="absolute inset-0 z-50">
                    <span className="sr-only">Bekijk detail</span>
                </Link>
            )}
            {/* Spotlight gradient */}
            <div
                className="pointer-events-none absolute -inset-px transition-opacity duration-500 z-30"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 40%)`,
                    opacity,
                }}
            />
            {/* Top border glow on hover */}
            <div className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20">
                <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-accent/[0.06] to-transparent" />
            </div>
            {children}
        </motion.div>
    );
}

/* ─── Mini Browser Mockup ─── */
function BrowserMockup() {
    return (
        <div className="absolute top-4 right-4 w-[260px] md:w-[340px] opacity-40 group-hover:opacity-90 transition-all duration-700 group-hover:translate-y-[-8px] group-hover:rotate-[-1deg] group-hover:scale-[1.02] pointer-events-none">
            <div className="rounded-[14px] bg-[#0a0a14]/90 border border-accent/15 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(0,170,255,0.08)] backdrop-blur-md">
                <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#121225]/90 border-b border-white/[0.08]">
                    <div className="flex gap-1.5 mr-2">
                        <div className="w-[8px] h-[8px] rounded-full bg-[#ff5f57]" />
                        <div className="w-[8px] h-[8px] rounded-full bg-[#febc2e]" />
                        <div className="w-[8px] h-[8px] rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex-1 h-6 rounded-md bg-white/[0.03] border border-white/[0.08] flex items-center px-3 gap-2">
                        <svg className="w-2.5 h-2.5 text-emerald-400/60" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                        <span className="text-[8px] font-mono text-white/25 lowercase tracking-tight">nr1websites.nl</span>
                    </div>
                </div>
                <div className="px-3 pt-2.5">
                    <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded bg-accent/30" />
                            <div className="w-10 h-1.5 rounded bg-white/15" />
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-1 rounded bg-white/10" />
                            <div className="w-6 h-1 rounded bg-white/10" />
                            <div className="w-10 h-3 rounded-full bg-accent/40" />
                        </div>
                    </div>
                    <div className="rounded-lg bg-gradient-to-br from-accent/12 via-accent/5 to-transparent border border-accent/10 p-3 mb-2.5">
                        <div className="w-[50%] h-2 rounded bg-white/20 mb-1.5" />
                        <div className="w-[75%] h-3 rounded bg-white/12 mb-1" />
                        <div className="w-[60%] h-3 rounded bg-white/12 mb-2.5" />
                        <div className="flex gap-1.5">
                            <div className="w-14 h-4 rounded-full bg-accent/50" />
                            <div className="w-12 h-4 rounded-full border border-white/10" />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 mb-2.5">
                        {[
                            { color: 'bg-accent/30' },
                            { color: 'bg-purple-500/20' },
                            { color: 'bg-emerald-500/20' },
                        ].map((card, idx) => (
                            <div key={idx} className="rounded-md bg-white/[0.03] border border-white/[0.05] p-2">
                                <div className={`w-4 h-4 rounded ${card.color} mb-1.5`} />
                                <div className="w-[80%] h-1 rounded bg-white/12 mb-1" />
                                <div className="w-[60%] h-1 rounded bg-white/8" />
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-white/[0.04] py-2 flex justify-between items-center">
                        <div className="w-10 h-1 rounded bg-white/8" />
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-white/8" />
                            <div className="w-2.5 h-2.5 rounded-full bg-white/8" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─── Speed Gauge ─── */
function SpeedGauge() {
    return (
        <div className="relative flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border border-accent/10 flex items-center justify-center relative bg-accent/[0.02]">
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/10" />
                </svg>
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <motion.circle
                        cx="50" cy="50" r="46"
                        fill="none"
                        stroke="var(--color-accent)"
                        strokeWidth="3"
                        strokeDasharray="290"
                        initial={{ strokeDashoffset: 290 }}
                        whileInView={{ strokeDashoffset: 10 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_8px_rgba(0,170,255,0.6)]"
                    />
                </svg>
                <div className="flex flex-col items-center relative z-10">
                    <span className="text-[28px] font-mono font-bold text-accent leading-none tracking-tighter">99</span>
                    <span className="text-[9px] font-mono text-ink-ghost uppercase mt-1 tracking-widest opacity-60">score</span>
                </div>
            </div>
        </div>
    );
}

/* ─── Uptime Bar ─── */
function UptimeBar() {
    const [heights, setHeights] = React.useState<number[]>([]);

    React.useEffect(() => {
        setHeights(Array.from({ length: 24 }).map((_, i) => i === 15 ? 40 : 80 + Math.random() * 20));
    }, []);

    return (
        <div className="mt-auto">
            <div className="flex items-end gap-[3px] h-8 mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                {Array.from({ length: 24 }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: heights[i] ? `${heights[i]}%` : '0%' }}
                        transition={{ delay: i * 0.03, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="flex-1 rounded-t-sm"
                        style={{
                            background: i === 15 ? 'rgba(250,204,21,0.5)' : 'rgba(52,211,153,0.4)',
                        }}
                    />
                ))}
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-white/[0.03] backdrop-blur-md rounded-full px-5 py-2.5 border border-white/[0.08]">
                    <div className="relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute inset-0 animate-ping opacity-40 scale-150" />
                    </div>
                    <span className="text-[13px] font-mono font-medium text-ink-primary">99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2 bg-white/[0.03] backdrop-blur-md rounded-full px-4 py-2.5 border border-white/[0.08]">
                    <span className="text-[13px] font-mono font-medium text-ink-tertiary">24/7</span>
                </div>
            </div>
        </div>
    );
}

/* ─── Main Services Section ─── */
export function ServicesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -60]);

    return (
        <section ref={sectionRef} className="py-40 px-6 md:px-12 lg:px-20 bg-canvas overflow-hidden relative">
            {/* Parallax background gradient */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute top-[20%] left-[15%] w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[150px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-blue-600/[0.03] rounded-full blur-[130px]" />
            </motion.div>

            <div className="max-w-[1200px] mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={containerVariants}
                    className="mb-20"
                >
                    <motion.span variants={itemVariants} className="text-[11px] font-mono font-medium text-accent uppercase tracking-[0.12em] block mb-5">
                        Diensten
                    </motion.span>
                    <motion.h2 variants={itemVariants} className="text-[48px] md:text-[64px] font-display font-bold text-ink-primary leading-[1.05] max-w-[650px] tracking-[-0.03em]">
                        Alles voor jouw{' '}
                        <br />
                        <span className="text-gradient-premium">online</span> succes.
                    </motion.h2>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-12 gap-5"
                >
                    {/* Card A: Website op maat */}
                    <BentoCard
                        href="/diensten/website-laten-maken"
                        className="md:col-span-12 lg:col-span-7 glass-dark neon-border rounded-[32px] p-10 md:p-14 min-h-[440px] flex flex-col justify-end transition-all duration-700 hover:scale-[1.005] grain"
                    >
                        <span className="absolute top-8 right-12 text-[140px] font-mono font-bold text-accent/[0.04] select-none leading-none pointer-events-none">
                            01
                        </span>
                        <BrowserMockup />
                        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none group-hover:bg-accent/[0.1] transition-all duration-1000" />

                        <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center neon-glow transition-all duration-500 group-hover:scale-110 group-hover:bg-accent/15 mb-6 relative z-10">
                            <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-[28px] font-display font-bold text-ink-primary mb-4 tracking-[-0.02em]">Website op maat</h3>
                            <p className="text-[16px] font-sans font-light text-ink-secondary leading-relaxed max-w-[380px] mb-6">
                                Van concept tot live website in 3&ndash;4 weken. Volledig maatwerk, geen templates. Pixel-perfect design dat converteert.
                            </p>
                            <div className="inline-flex items-center gap-2 text-[13px] font-sans font-semibold text-accent hover:text-accent-hover transition-colors group/link">
                                Meer over maatwerk
                                <span className="transition-transform group-hover/link:translate-x-1.5">&rarr;</span>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Card B: SEO & Performance */}
                    <BentoCard
                        href="/diensten/seo"
                        spotlightColor="rgba(0, 170, 255, 0.1)"
                        className="md:col-span-6 lg:col-span-5 glass-dark rounded-[32px] p-10 md:p-12 border border-border flex flex-col transition-all duration-700 hover-lift"
                    >
                        <div className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-accent/15 group-hover:rotate-6">
                            <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
                        </div>

                        <div className="mb-auto">
                            <h3 className="text-[22px] font-display font-bold text-ink-primary mb-3 tracking-[-0.01em]">SEO & Performance</h3>
                            <p className="text-[15px] font-sans font-light text-ink-secondary leading-relaxed max-w-[300px]">
                                Extreem snelle laadtijden die zorgen voor hogere posities in Google.
                            </p>
                        </div>

                        <div className="mt-8 flex items-center gap-6">
                            <SpeedGauge />
                            <div className="flex flex-col gap-3.5">
                                {[
                                    { label: 'Performance', color: 'bg-accent', width: 'w-10' },
                                    { label: 'Accessibility', color: 'bg-emerald-400', width: 'w-8' },
                                    { label: 'Best Practices', color: 'bg-purple-400', width: 'w-7' },
                                ].map((stat, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: 'auto' }}
                                            transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                                            viewport={{ once: true }}
                                            className={`h-1.5 rounded-full ${stat.color} ${stat.width} transition-all duration-700 group-hover:w-12`}
                                        />
                                        <span className="text-[11px] font-mono text-ink-tertiary uppercase tracking-wider">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </BentoCard>

                    {/* Card C: Onderhoud & Support */}
                    <BentoCard
                        href="/diensten/onderhoud"
                        spotlightColor="rgba(52, 211, 211, 0.1)"
                        className="md:col-span-6 lg:col-span-5 glass-dark rounded-[32px] p-10 md:p-12 border border-border flex flex-col transition-all duration-700 hover-lift"
                    >
                        <div className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-emerald-500/15 group-hover:rotate-6">
                            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-[22px] font-display font-bold text-ink-primary mb-3 tracking-[-0.01em]">Onderhoud & Support</h3>
                            <p className="text-[15px] font-sans font-light text-ink-secondary leading-relaxed max-w-[300px]">
                                Wij zorgen dat jouw website altijd veilig, up-to-date en online is.
                            </p>
                        </div>

                        <UptimeBar />
                    </BentoCard>

                    {/* Card D: Starter Pricing */}
                    <BentoCard
                        href="/pakketten"
                        spotlightColor="rgba(255, 255, 255, 0.08)"
                        className="md:col-span-12 lg:col-span-7 rounded-[32px] min-h-[320px] transition-all duration-700 hover:scale-[1.005]"
                    >
                        <div className="absolute inset-0 bg-[#004488] z-0 overflow-hidden rounded-[32px]">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent via-[#0066CC] to-[#004488]" />
                            <motion.div
                                animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-sky-400/20 rounded-full blur-[100px]"
                            />
                            <motion.div
                                animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-300/10 rounded-full blur-[80px]"
                            />
                        </div>

                        <div className="relative z-10 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 h-full">
                            <div>
                                <span className="text-[12px] font-mono font-bold text-white/50 uppercase tracking-[0.2em] block mb-3">
                                    Starter Pakket
                                </span>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-[24px] font-display font-medium text-white/40 leading-none">v.a.</span>
                                    <h3 className="text-[64px] md:text-[84px] font-display font-bold leading-none text-white tracking-[-0.04em]">&euro;799</h3>
                                </div>
                                <p className="text-[16px] font-sans font-medium text-white/70 max-w-[340px] leading-relaxed">
                                    Eenmalige investering, alles inbegrepen.{' '}
                                    <br className="hidden md:block" />
                                    Geen verborgen kosten, volledige eigendom.
                                </p>
                            </div>

                            <div className="flex flex-col items-start md:items-end gap-6">
                                <div className="group/btn relative inline-flex items-center gap-4 bg-white text-[#004488] rounded-full px-8 py-5 font-sans font-bold text-[16px] transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:pr-12">
                                    Bekijk alle tarieven
                                    <span className="absolute right-6 opacity-0 -translate-x-2 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 text-xl">&rarr;</span>
                                </div>

                                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                                    {['Cloud Hosting', 'SSL Beveiliging', 'CMS Beheer', 'SEO Basis'].map((label, i) => (
                                        <div key={i} className="flex items-center gap-2 text-[11px] font-mono font-bold text-white/40 uppercase tracking-tighter">
                                            <svg className="w-3.5 h-3.5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                            {label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </BentoCard>
                </motion.div>
            </div>
        </section>
    );
}
