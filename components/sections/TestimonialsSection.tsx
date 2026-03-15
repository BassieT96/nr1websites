"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
    {
        quote: "Onze website was verouderd en verloor klanten. nr1websites heeft alles omgegooid en nu krijgen we wekelijks nieuwe aanvragen. Top service.",
        author: "Marco Visser",
        role: "Studio Visser Architectuur",
        seed: 10,
        featured: true
    },
    {
        quote: "Binnen 3 weken hadden we een website waar we echt trots op zijn. Snelle communicatie, alles precies zoals we het wilden.",
        author: "Lisa Bakker",
        role: "Bakker Coaching",
        seed: 11,
        featured: false
    },
    {
        quote: "De technische SEO is waanzinnig. We staan nu binnen een maand bovenaan op al onze belangrijkste zoektermen.",
        author: "David de Groot",
        role: "TechStart Hub",
        seed: 12,
        featured: false
    },
    {
        quote: "Professioneel, creatief en razendsnel. Geen template-zooi, maar echt een uniek product dat onze conversie direct heeft verhoogd.",
        author: "Sarah van den Berg",
        role: "Bloom Floral Studio",
        seed: 13,
        featured: false
    },
    {
        quote: "Ik had nooit gedacht dat een nieuwe website zo'n impact zou hebben op mijn business. De investering dubbel en dwars waard.",
        author: "Jasper de Jong",
        role: "De Jong Juristen",
        seed: 14,
        featured: false
    },
    {
        quote: "De samenwerking voelde als een partnership. Ze denken echt met je mee over hoe je jouw doelen online kunt bereiken.",
        author: "Emma Post",
        role: "Post Marketing",
        seed: 15,
        featured: false
    }
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 32, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        ,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
    }
};

export function TestimonialsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

    return (
        <section ref={sectionRef} className="py-40 px-6 md:px-12 lg:px-20 bg-canvas relative overflow-hidden">
            {/* Background */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[140px]" />
                <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] bg-blue-600/[0.02] rounded-full blur-[120px]" />
            </motion.div>

            <div className="max-w-[1200px] mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={containerVariants}
                    className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div>
                        <motion.span variants={itemVariants} className="text-[11px] font-mono font-medium text-accent uppercase tracking-[0.12em] block mb-5">
                            Reviews
                        </motion.span>
                        <motion.h2 variants={itemVariants} className="text-[48px] md:text-[64px] font-display font-bold text-ink-primary leading-[1.05] max-w-[600px] tracking-[-0.03em]">
                            Wat klanten over ons <span className="text-gradient-premium">zeggen</span>.
                        </motion.h2>
                    </div>

                    <motion.div variants={itemVariants} className="glass-dark border border-border rounded-2xl px-6 py-4 flex items-center gap-4 self-start md:self-auto hover-lift">
                        <div className="flex flex-col items-center">
                            <span className="text-[20px] font-display font-bold text-ink-primary">4.9</span>
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-accent text-[10px]">&#9733;</span>)}
                            </div>
                        </div>
                        <div className="w-[1px] h-8 bg-border-strong" />
                        <div className="flex flex-col">
                            <span className="text-[12px] font-sans font-semibold text-ink-primary">Google Reviews</span>
                            <span className="text-[11px] font-sans text-ink-tertiary">Geverifieerd</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={containerVariants}
                    className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className={`break-inside-avoid glass-dark border border-border rounded-[28px] hover:border-accent/20 transition-all duration-700 relative group hover-lift ${t.featured ? 'p-10 md:p-12' : 'p-8'}`}
                        >
                            {/* Subtle spotlight on hover */}
                            <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-b from-accent/[0.03] to-transparent" />

                            <span className="absolute top-4 right-8 text-[56px] font-display font-bold text-accent/[0.06] select-none leading-none">
                                &rdquo;
                            </span>

                            <div className="flex gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <svg key={s} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className={`font-sans font-light text-ink-primary leading-[1.6] mb-8 relative z-10 ${t.featured ? 'text-[19px] md:text-[22px]' : 'text-[17px]'}`}>
                                &quot;{t.quote}&quot;
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-border">
                                <div className="w-11 h-11 rounded-full overflow-hidden bg-surface-2 relative border-2 border-border group-hover:border-accent/30 transition-colors duration-500">
                                    <Image
                                        src={`https://picsum.photos/seed/${t.seed}/44/44`}
                                        alt={t.author}
                                        width={44}
                                        height={44}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[15px] font-sans font-semibold text-ink-primary">{t.author}</span>
                                    <span className="text-[13px] font-sans text-ink-tertiary">{t.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
