"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePerformanceProfile } from '@/lib/use-performance-profile';

/* ─── Animated Counter Hook ─── */
function useAnimatedCounter(end: number, duration = 2000) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const startTime = Date.now();
        const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress >= 1) clearInterval(timer);
        }, 16);
        return () => clearInterval(timer);
    }, [inView, end, duration]);

    return { count, ref };
}

/* ─── Background Video ─── */
const BackgroundVideo = React.memo(() => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        video.play().catch(() => {});
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
            <video
                ref={videoRef}
                src="/Moving_with_electric_currents_2510f99650.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover scale-[1.1] pointer-events-none mix-blend-screen opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-canvas/70 via-canvas/30 to-canvas z-0 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,8,0.85)_100%)] z-0 pointer-events-none" />
        </div>
    );
});
BackgroundVideo.displayName = 'BackgroundVideo';

/* ─── Floating Orb Decoration ─── */
function FloatingOrbs({ allowHeavyMotion }: { allowHeavyMotion: boolean }) {
    if (allowHeavyMotion) {
        return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-[20%] right-[15%] w-[400px] h-[400px] bg-accent/[0.06] rounded-full blur-[150px]"
                    animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-[30%] left-[10%] w-[300px] h-[300px] bg-blue-600/[0.04] rounded-full blur-[130px]"
                    animate={{ y: [0, 20, 0], x: [0, -20, 0], scale: [1, 1.15, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-[60%] right-[30%] w-[200px] h-[200px] bg-accent/[0.04] rounded-full blur-[100px]"
                    animate={{ y: [0, -15, 0], scale: [1, 1.08, 1] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                />
            </div>
        );
    }
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] bg-accent/[0.06] rounded-full blur-[150px]" />
            <div className="absolute bottom-[30%] left-[10%] w-[300px] h-[300px] bg-blue-600/[0.04] rounded-full blur-[130px]" />
            <div className="absolute top-[60%] right-[30%] w-[200px] h-[200px] bg-accent/[0.04] rounded-full blur-[100px]" />
        </div>
    );
}

/* ─── Grid Lines Background ─── */
function GridBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
            <div className="absolute inset-0" style={{
                backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '100px 100px',
            }} />
        </div>
    );
}

/* ─── Magnetic Button ─── */
function MagneticButton({ children, className, href }: { children: React.ReactNode; className?: string; href: string }) {
    const ref = useRef<HTMLAnchorElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { damping: 15, stiffness: 150, mass: 0.1 });
    const springY = useSpring(y, { damping: 15, stiffness: 150, mass: 0.1 });

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * 0.3);
        y.set((e.clientY - centerY) * 0.3);
    }, [x, y]);

    const handleMouseLeave = useCallback(() => {
        x.set(0);
        y.set(0);
    }, [x, y]);

    return (
        <motion.a
            ref={ref}
            href={href}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={className}
        >
            {children}
        </motion.a>
    );
}

/* ─── Split Text Animation ─── */
function SplitText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
    return (
        <span className={className} aria-label={text}>
            {text.split('').map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 60, rotateX: -40 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: delay + i * 0.03,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block"
                    style={{ transformOrigin: 'bottom' }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </span>
    );
}

/* ─── Main Hero Section ─── */
export function HeroSection() {
    const { allowHeavyMotion } = usePerformanceProfile();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Cinematic parallax layers
    const videoY = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);
    const badgeOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    const clients = useAnimatedCounter(50, 2000);
    const rating = useAnimatedCounter(49, 2200);

    return (
        <section ref={containerRef} className="relative min-h-[110vh] flex flex-col items-center justify-center overflow-hidden bg-canvas grain">
            {/* Background Layers */}
            <motion.div style={{ y: videoY }} className="absolute inset-0 z-0">
                <BackgroundVideo />
            </motion.div>

            <GridBackground />
            <FloatingOrbs allowHeavyMotion={allowHeavyMotion} />

            {/* Gradient overlays */}
            <div className="absolute inset-0 z-[1] pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-canvas/60 via-transparent to-canvas" />
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(5,5,8,0.7) 100%)' }} />
                <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-canvas to-transparent" />
            </div>

            {/* Content */}
            <motion.div
                style={{ opacity: contentOpacity, y: contentY, scale: contentScale }}
                className="relative z-10 max-w-[1200px] w-full mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center text-center pt-32 pb-40"
            >
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20, ...(allowHeavyMotion && { filter: 'blur(8px)' }) }}
                    animate={{ opacity: 1, y: 0, ...(allowHeavyMotion && { filter: 'blur(0px)' }) }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12"
                >
                    <div className="relative group">
                        <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                        <div className="relative px-6 py-2.5 glass-dark rounded-full flex items-center gap-3">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                            </span>
                            <span className="text-ink-tertiary font-mono text-[11px] uppercase tracking-[0.12em]">
                                Premium webdevelopment  &middot;  Lemmer
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Headline — Character Reveal */}
                <div className="mb-8 overflow-hidden">
                    <h1 className="text-[52px] sm:text-[72px] lg:text-[104px] xl:text-[128px] font-display font-bold leading-[0.9] tracking-[-0.04em]">
                        <span className="block overflow-hidden">
                            <SplitText text="WEBSITES DIE" className="text-neon-white" delay={0.4} />
                        </span>
                        <span className="block overflow-hidden mt-1">
                            <motion.span
                                initial={{ opacity: 0, y: 80 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                className="inline-block shimmer-text"
                            >
                                GROEIEN
                            </motion.span>
                        </span>
                    </h1>
                </div>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 24, ...(allowHeavyMotion && { filter: 'blur(6px)' }) }}
                    animate={{ opacity: 1, y: 0, ...(allowHeavyMotion && { filter: 'blur(0px)' }) }}
                    transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-[560px] text-[17px] md:text-[20px] font-sans font-light text-ink-secondary leading-[1.7] mb-14"
                >
                    Wij bouwen snelle, mooie websites voor ZZP&apos;ers en kleine bedrijven die willen opvallen.
                </motion.p>

                {/* CTA Group with Magnetic Effect */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap items-center justify-center gap-5"
                >
                    <MagneticButton
                        href="/portfolio"
                        className="relative px-10 py-5 bg-accent text-white rounded-full font-sans font-semibold text-[16px] shadow-accent flex items-center gap-3 transition-all duration-300 hover:shadow-neon active:scale-[0.98] group overflow-hidden shine-sweep"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Bekijk ons werk
                            <motion.span
                                className="inline-block"
                                whileHover={{ x: 4 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                &rarr;
                            </motion.span>
                        </span>
                    </MagneticButton>

                    <MagneticButton
                        href="/contact"
                        className="px-10 py-5 glass-dark neon-border rounded-full font-sans font-semibold text-[16px] text-ink-primary transition-all duration-300 hover:bg-accent/10 active:scale-[0.98]"
                    >
                        Gratis gesprek plannen
                    </MagneticButton>
                </motion.div>

                {/* Trust Line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.7 }}
                    className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[13px] font-sans text-ink-ghost"
                >
                    {["Geen starttarief", "Live in 3 weken", "100% tevredenheidsgarantie"].map((item, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8 + i * 0.1, duration: 0.6 }}
                            className="flex items-center gap-2"
                        >
                            <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                        </motion.span>
                    ))}
                </motion.div>

                {/* Social Proof */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="mt-16 flex flex-col sm:flex-row items-center gap-8"
                >
                    {/* Avatars */}
                    <div className="flex items-center gap-5">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 2.1 + i * 0.08, type: "spring", stiffness: 300, damping: 20 }}
                                    className="w-10 h-10 rounded-full border-2 border-canvas overflow-hidden relative bg-surface-2 hover:scale-110 hover:z-10 transition-transform duration-300"
                                >
                                    <Image
                                        src={`https://picsum.photos/seed/${i + 10}/40/40`}
                                        alt={`Tevreden klant van nr1websites ${i}`}
                                        width={40}
                                        height={40}
                                        className="object-cover w-full h-full"
                                    />
                                </motion.div>
                            ))}
                        </div>
                        <div className="w-[1px] h-10 bg-border-strong hidden sm:block" />
                    </div>

                    {/* Animated Stats */}
                    <div className="flex items-center gap-8">
                        <div className="flex flex-col items-center sm:items-start">
                            <span ref={clients.ref} className="text-[28px] font-display font-bold text-ink-primary leading-tight tracking-tight">
                                {clients.count}+
                            </span>
                            <span className="text-[12px] font-mono text-ink-ghost uppercase tracking-widest">klanten</span>
                        </div>
                        <div className="w-[1px] h-10 bg-border-strong" />
                        <div className="flex flex-col items-center sm:items-start">
                            <span ref={rating.ref} className="text-[28px] font-display font-bold text-ink-primary leading-tight tracking-tight flex items-center gap-1.5">
                                {(rating.count / 10).toFixed(1)} <span className="text-accent text-[20px]">&#9733;</span>
                            </span>
                            <span className="text-[12px] font-mono text-ink-ghost uppercase tracking-widest">score</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity: badgeOpacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-6 h-10 rounded-full border border-ink-ghost/30 flex items-start justify-center p-1.5">
                        <motion.div
                            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-2.5 bg-accent rounded-full"
                        />
                    </div>
                </motion.div>
                <span className="text-[10px] font-mono text-ink-ghost uppercase tracking-widest">scroll</span>
            </motion.div>
        </section>
    );
}
