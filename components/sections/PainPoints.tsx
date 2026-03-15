"use client";

import React from 'react';
import { AlertCircle, Clock, TrendingDown } from 'lucide-react';
import { BentoGrid, BentoCard } from '../ui/BentoLayout';
import { SectionHeader } from '../ui/SectionHeader';
import { SpotlightCard } from '../ui/SpotlightCard';

const painPoints = [
    {
        icon: AlertCircle,
        title: "Wix of WordPress website zonder resultaat",
        description: "Een mooie site is stap één. Maar zonder de juiste conversie-psychologie en SEO-techniek blijft het stil.",
        colSpan: "md:col-span-2",
        rowSpan: "md:row-span-1"
    },
    {
        icon: TrendingDown,
        title: "Niet vindbaar waar je klanten zoeken",
        description: "Je concurrenten pakken de leads in Google. Wij zorgen dat jij bovenaan komt te staan.",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-2"
    },
    {
        icon: Clock,
        title: "Focus op je bedrijf, niet op techniek",
        description: "Als ondernemer wil je ondernemen. Wij nemen de volledige technische realisatie en onderhoud uit handen.",
        colSpan: "md:col-span-2",
        rowSpan: "md:row-span-1"
    }
];

export function PainPoints() {
    return (
        <section className="py-40 bg-surface-1 relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-20">
                <SectionHeader
                    title="Herken je dit als ondernemer?"
                    subtitle="Veel bedrijven hebben een website, maar weinig bedrijven hebben een verkoopmachine. Wij overbruggen dat gat."
                    align="left"
                    className="mb-24"
                />

                <BentoGrid>
                    {painPoints.map((point, idx) => (
                        <BentoCard
                            key={idx}
                            colSpan={point.colSpan}
                            rowSpan={point.rowSpan}
                            delay={idx * 0.1}
                        >
                            <SpotlightCard className="p-10 h-full glass-dark border border-border group relative flex flex-col justify-center" beamDuration={12}>
                                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 border border-accent/15 group-hover:bg-accent/20 transition-colors duration-500">
                                    <point.icon className="w-6 h-6 text-accent" />
                                </div>

                                <h3 className="text-[28px] lg:text-[34px] font-display font-bold text-ink-primary leading-[1] mb-6 tracking-[-0.04em]">
                                    {point.title}
                                </h3>

                                <p className="text-[17px] font-sans text-ink-secondary leading-relaxed max-w-lg">
                                    {point.description}
                                </p>
                            </SpotlightCard>
                        </BentoCard>
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}
