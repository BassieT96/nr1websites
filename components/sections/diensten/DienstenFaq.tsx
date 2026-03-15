"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AccordionItem } from "@/components/ui/AccordionItem";

const faqData = [
    {
        vraag: "Hoe lang duurt het bouwen van een website?",
        antwoord:
            "Gemiddeld 3 tot 4 weken, afhankelijk van de complexiteit. Een eenvoudige landingspagina kan soms al binnen 2 weken live staan. Bij een uitgebreidere website met CMS of webshop functionalities rekenen we 4 tot 6 weken.",
    },
    {
        vraag: "Wat heb ik nodig om te beginnen?",
        antwoord:
            "Eigenlijk alleen een goed idee van wat je wilt bereiken. Wij helpen je met de rest: van contentstrategie tot visueel ontwerp. Heb je al een logo, huisstijl of teksten? Des te beter — dat versnelt het proces.",
    },
    {
        vraag: "Kan ik de website zelf aanpassen na oplevering?",
        antwoord:
            "Ja! Wij bouwen een gebruiksvriendelijk CMS in waar je zelf teksten, afbeeldingen en pagina&apos;s kunt beheren. Bij oplevering krijg je een korte training zodat je direct zelf aan de slag kunt.",
    },
    {
        vraag: "Maken jullie ook webshops?",
        antwoord:
            "Ja, we bouwen ook webshops. Dit valt onder ons Enterprise pakket. We gebruiken moderne e-commerce oplossingen die snel, veilig en makkelijk te beheren zijn.",
    },
    {
        vraag: "Wat als ik al een domeinnaam heb?",
        antwoord:
            "Geen probleem! We koppelen jouw bestaande domein aan de nieuwe website. Heb je nog geen domein? Dan helpen we je bij het kiezen en registreren van de perfecte domeinnaam.",
    },
    {
        vraag: "Is hosting inbegrepen?",
        antwoord:
            "Bij onze onderhoudspakketten is hosting inbegrepen. Kies je voor een website zonder onderhoudspakket, dan adviseren we je graag over de beste hosting-oplossing voor jouw situatie.",
    },
    {
        vraag: "Hoe werkt het onderhoudspakket?",
        antwoord:
            "Je betaalt een vast maandbedrag waarvoor wij je website up-to-date en veilig houden. Dit omvat updates, backups, monitoring en kleine content-aanpassingen. Opzegbaar per maand, geen verrassingen.",
    },
    {
        vraag: "Kunnen jullie mijn huidige website vernieuwen?",
        antwoord:
            "Absoluut. Een redesign is zelfs een van onze meest gevraagde diensten. We analyseren je huidige site, behouden wat werkt en bouwen een compleet nieuwe, snellere versie.",
    },
    {
        vraag: "Wat kost een website gemiddeld bij nr1websites?",
        antwoord:
            "Onze websites beginnen vanaf €799 voor het Starter pakket. Het Business pakket (meest gekozen) start bij €1499. Voor complexere projecten met e-commerce of API-koppelingen maken we een offerte op maat.",
    },
    {
        vraag: "Hoe neem ik contact op?",
        antwoord:
            "Je kunt een gratis kennismakingsgesprek plannen via onze contactpagina, of stuur ons direct een bericht via WhatsApp. We reageren altijd binnen 24 uur.",
    },
];

export function DienstenFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const half = Math.ceil(faqData.length / 2);
    const col1 = faqData.slice(0, half);
    const col2 = faqData.slice(half);

    return (
        <section aria-label="Veelgestelde vragen" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-canvas">
            <div className="max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            className="text-[11px] font-mono font-medium text-accent uppercase tracking-[0.08em] block mb-4"
                        >
                            Veelgestelde vragen
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[36px] md:text-[52px] font-display font-light italic text-ink-primary leading-[1.1]"
                        >
                            Alles wat je
                            <br />
                            wilt weten.
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-start md:items-end"
                    >
                        <span className="text-[14px] font-sans text-ink-tertiary mb-1">
                            Staat jouw vraag er niet bij?
                        </span>
                        <Link
                            href="/contact"
                            className="text-[14px] font-sans font-medium text-accent hover:text-accent-hover transition-colors"
                        >
                            Neem contact op →
                        </Link>
                    </motion.div>
                </div>

                {/* Two-column FAQ */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
                    <div>
                        {col1.map((item, i) => (
                            <AccordionItem
                                key={i}
                                vraag={item.vraag}
                                antwoord={item.antwoord}
                                isOpen={openIndex === i}
                                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                                index={i}
                            />
                        ))}
                    </div>
                    <div>
                        {col2.map((item, i) => {
                            const realIndex = half + i;
                            return (
                                <AccordionItem
                                    key={realIndex}
                                    vraag={item.vraag}
                                    antwoord={item.antwoord}
                                    isOpen={openIndex === realIndex}
                                    onToggle={() => setOpenIndex(openIndex === realIndex ? null : realIndex)}
                                    index={realIndex}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
