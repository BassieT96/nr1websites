"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { usePerformanceProfile } from "@/lib/use-performance-profile";

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

const headerVariants = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(20px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.215, 0.61, 0.355, 1.0] as [number, number, number, number] }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export function FaqSection() {
  const { allowHeavyMotion } = usePerformanceProfile();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);

  // Parallax scroll — only computed when allowHeavyMotion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const bgTextY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const bgTextOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.06, 0.06, 0]);

  // Mouse glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!glassRef.current) return;
    const rect = glassRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-999);
    mouseY.set(-999);
  }, [mouseX, mouseY]);

  if (allowHeavyMotion) {
    return (
      <section ref={containerRef} className="relative py-32 lg:py-64 bg-[#020202] overflow-hidden">
        {/* Parallax Background "QUESTIONS" text */}
        <motion.div
          style={{ y: bgTextY, opacity: bgTextOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="text-[20vw] font-display font-bold uppercase whitespace-nowrap"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.8)",
              color: "transparent",
            }}
          >
            QUESTIONS
          </span>
        </motion.div>

        {/* Grid + orb background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
            }}
          />
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px]" style={{ background: "radial-gradient(circle, rgba(54,98,227,0.08) 0%, transparent 60%)" }} />
          {/* Animated ambient orb */}
          <motion.div
            className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(54,98,227,0.06) 0%, transparent 60%)" }}
            animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 container-content mx-auto px-6">
          {/* Header with blur-stagger */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={headerVariants}
          >
            <span className="section-kicker mb-6 inline-block px-5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-mono uppercase tracking-[0.2em]">
              FAQ — Helderheid vooraf
            </span>
            <h2 className="text-5xl lg:text-[8rem] font-display font-medium text-white mb-6 tracking-tight leading-[0.92]">
              De antwoorden<span className="text-[#3662e3]">.</span>
            </h2>
            <p className="text-lg text-white/30 max-w-xl mx-auto font-light leading-relaxed">
              Alles wat je moet weten over proces, prijs en resultaat, verpakt in één transparant overzicht.
            </p>
          </motion.div>

          {/* Glass container with mouse highlight */}
          <motion.div
            ref={glassRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="max-w-3xl mx-auto rounded-[4rem] overflow-hidden relative"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(48px)",
              WebkitBackdropFilter: "blur(48px)",
              boxShadow: "0 48px 160px rgba(0,0,0,0.6)",
            }}
          >
            {/* Mouse glow highlight */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: useMotionValue("none"),
                backgroundImage: `radial-gradient(400px circle at ${springX}px ${springY}px, rgba(54,98,227,0.08), transparent 60%)`,
              }}
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ staggerChildren: 0.07, delayChildren: 0.3 }}
              className="p-8 md:p-20 space-y-2 relative z-10"
            >
              {faqData.map((faq, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <AccordionItem
                    index={index}
                    vraag={faq.vraag}
                    antwoord={faq.antwoord}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                    dark={true}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Simplified version for Safari / reduced motion
  return (
    <section ref={containerRef} className="relative py-32 lg:py-48 bg-[#020202] overflow-hidden">
      {/* Static background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          }}
        />
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px]" style={{ background: "radial-gradient(circle, rgba(54,98,227,0.08) 0%, transparent 60%)" }} />
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
