"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { AccordionItem } from "@/components/ui/AccordionItem";

const faqData = [
  {
    vraag: "Hoeveel kost een website bij nr1websites.nl?",
    antwoord: "Onze pakketten starten bij €1.490 voor een professionele Starter Site en lopen op tot €4.850 voor een Leadmachine Pro. We geloven in transparante prijzen zonder verborgen uren achteraf. Je weet exact wat de investering is voordat we beginnen."
  },
  {
    vraag: "Hoe snel kan mijn website live staan?",
    antwoord: "Dankzij ons efficiënte proces en Next.js architectuur kunnen we snel schakelen. Een Starter Site kan binnen 2 weken live. Voor een complexe Leadmachine Pro inclusief SEO-strategie rekenen we gemiddeld 4 tot 6 weken afhankelijk van jouw feedback."
  },
  {
    vraag: "Zit ik vast aan dure onderhoudscontracten?",
    antwoord: "Nee. Wij bieden technisch beheer en SEO-onderhoudspakketten aan omdat dit je site sneller en veiliger houdt, maar ze zijn niet verplicht. Je bent eigenaar van je eigen code en domein."
  },
  {
    vraag: "Zorgen jullie ook voor teksten en foto's?",
    antwoord: "In het Leadmachine Pro pakket zit het volledige copywriting traject inbegrepen. Voor andere pakketten kunnen we koppelen met lokale fotografen en copywriters in Friesland, of we plaatsen de content die jij aanlevert in ons design."
  },
  {
    vraag: "Bouwen jullie met WordPress?",
    antwoord: "We bouwen primair met Next.js en React voor ongekende SEO-prestaties en snelheid. WordPress is een optie voor specifieke blog-intensieve klanten, maar ons dev-team focust zich op moderne, veilige JavaScript landschappen die sneller scoren in Google."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative py-32 lg:py-48 bg-[#020202] overflow-hidden">
      {/* Static background elements — no scroll-driven transforms for performance */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          }}
        />
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/8 blur-[120px] rounded-full opacity-20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 container-content mx-auto px-6"
      >
        <div className="text-center mb-16">
          <span className="section-kicker mb-6 inline-block px-5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-mono uppercase tracking-[0.2em]">
            FAQ — Helderheid vooraf
          </span>
          <h2 className="text-4xl lg:text-7xl font-display font-semibold text-white mb-6 tracking-tight leading-[0.92]">
            De antwoorden<span className="text-[#3662e3]">.</span>
          </h2>
          <p className="text-lg text-white/30 max-w-xl mx-auto font-light leading-relaxed">
            Alles wat je moet weten over proces, prijs en resultaat.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-3xl bg-white/[0.04] border border-white/[0.08] overflow-hidden">
          <div className="p-6 md:p-12 space-y-2">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                index={index}
                vraag={faq.vraag}
                antwoord={faq.antwoord}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                dark={true}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
