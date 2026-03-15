"use client";

import React from "react";
import { DienstDetail } from "./DienstDetail";

const diensten = [
    {
        id: "dienst-website",
        nummer: "01",
        naam: "Website op maat",
        tagline: "Een website die jouw verhaal vertelt.",
        omschrijving: [
            "Van een strakke landingspagina tot een complete bedrijfswebsite — wij bouwen alles op maat. Geen templates, geen compromissen.",
            "Jij bepaalt hoe het eruitziet en wij zorgen dat het razendsnel laadt, goed scoort in Google en er perfect uitziet op elk apparaat.",
        ],
        features: [
            "Volledig maatwerk design",
            "Mobielvriendelijk (responsief)",
            "Razendsnelle laadtijd",
            "CMS (zelf content beheren)",
            "Contactformulier",
            "Google Analytics koppeling",
            "SSL-certificaat",
            "1 maand gratis support na oplevering",
        ],
        prijs: "Vanaf €799",
        levertijd: "3–4 weken",
        href: "/diensten/website-laten-maken",
        visual: "website" as const,
        reversed: false,
    },
    {
        id: "dienst-seo",
        nummer: "02",
        naam: "SEO & Performance",
        tagline: "Gevonden worden waar het telt.",
        omschrijving: [
            "Een mooie website heeft pas waarde als mensen hem vinden. Wij optimaliseren jouw site technisch en inhoudelijk voor Google.",
            "Van snelheidstests tot structured data — wij zorgen dat jouw website de technische basis heeft om hoog te scoren.",
        ],
        features: [
            "Google-vriendelijke code",
            "Core Web Vitals optimalisatie",
            "Snelheid < 2 seconden laadtijd",
            "Technische SEO audit",
            "Meta tags & sitemap",
            "Afbeeldingen geoptimaliseerd",
            "Schema markup",
            "Maandelijkse rapportage",
        ],
        prijs: "Vanaf €299",
        prijsLabel: "Inbegrepen bij Business pakket",
        levertijd: "1–2 weken",
        href: "/diensten/seo",
        visual: "seo" as const,
        reversed: true,
    },
    {
        id: "dienst-onderhoud",
        nummer: "03",
        naam: "Onderhoud & Support",
        tagline: "Jij ondernemt, wij onderhouden.",
        omschrijving: [
            "Je website is live — en dan? Met ons onderhoudspakket hoef je je nergens zorgen over te maken. Wij houden alles draaiend.",
            "Van beveiligingsupdates tot content-wijzigingen: wij zitten erbovenop zodat jij kunt focussen op je business.",
        ],
        features: [
            "Maandelijkse WordPress/plugin updates",
            "Dagelijkse backups",
            "24/7 uptime monitoring",
            "Directe hulp bij problemen",
            "Content aanpassingen (2u/maand)",
            "Maandelijkse performance check",
            "Prioriteit support via WhatsApp",
            "Geen verrassingen — vast maandbedrag",
        ],
        prijs: "Vanaf €49/maand",
        levertijd: "Opzegbaar per maand",
        href: "/diensten/onderhoud",
        visual: "onderhoud" as const,
        reversed: false,
    },
];

export function DienstenGrid() {
    return (
        <section aria-label="Onze diensten" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-canvas">
            <div className="max-w-[1200px] mx-auto space-y-32">
                {diensten.map((dienst, i) => (
                    <React.Fragment key={dienst.id}>
                        {i > 0 && (
                            <div className="flex items-center justify-center">
                                <div className="flex-1 h-px bg-border" />
                                <span className="mx-4 text-ink-ghost text-[16px]">·</span>
                                <div className="flex-1 h-px bg-border" />
                            </div>
                        )}
                        <DienstDetail {...dienst} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
