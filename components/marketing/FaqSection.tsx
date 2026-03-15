"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
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
  
  // Parallax Scroll for Background Text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const bgTextY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const bgTextOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.05, 0.05, 0]);

  // Mouse Glow Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section ref={containerRef} className="relative py-32 lg:py-64 bg-[#020202] overflow-hidden">
      {/* Immersive Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Parallax Background Text */}
        <motion.div 
          style={{ y: bgTextY, opacity: bgTextOpacity }}
          className="absolute inset-0 flex items-center justify-center select-none"
        >
          <span className="text-[35vw] font-black text-white transform-gpu leading-none tracking-tighter" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
            QUESTIONS
          </span>
        </motion.div>

        {/* Cinematic Grid with Mask Fade */}
        <div className="absolute inset-0 opacity-[0.1]" 
          style={{ 
            backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)", 
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)" 
          }} 
        />

        {/* Static ambient glow — no infinite animation for performance */}
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full opacity-20 pointer-events-none" />
        
        {/* Noise overlay */}
        <div className="absolute inset-0 bg-transparent opacity-[0.05] noise-bg mix-blend-overlay" />
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
        className="relative z-10 container-content mx-auto px-6"
      >
        <motion.div 
          variants={{ hidden: { opacity: 0, scale: 0.9, filter: "blur(20px)" }, visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1, ease: [0.215, 0.61, 0.355, 1.0] } } }}
          className="text-center mb-24"
        >
           <span className="section-kicker mb-8 inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 backdrop-blur-md">
             FAQ — Helderheid vooraf
           </span>
           <h2 className="text-5xl lg:text-[8rem] font-display font-medium text-white mb-10 tracking-[ -0.04em] leading-[0.9]">
             De antwoorden<span className="text-primary">.</span>
           </h2>
           <p className="text-xl lg:text-3xl text-white/30 max-w-2xl mx-auto font-extralight leading-relaxed tracking-tight">
             Alles wat je moet weten over proces, prijs en resultaat, verpakt in één transparant overzicht.
           </p>
        </motion.div>

        {/* High-End Glass Container with Interactive Glow */}
        <motion.div 
          onMouseMove={handleMouseMove}
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } } }}
          className="group relative max-w-4xl mx-auto rounded-[4rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl overflow-hidden shadow-[0_48px_160px_rgba(0,0,0,0.6)]"
        >
          {/* Interactive Mouse Highlight */}
          <motion.div 
            className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: useTransform(
                [springX, springY],
                ([x, y]) => `radial-gradient(1000px circle at ${x}px ${y}px, rgba(255,255,255,0.08), transparent 40%)`
              )
            }}
          />

          <div className="relative z-10 p-8 md:p-20 space-y-4">
             {faqData.map((faq, index) => (
               <motion.div 
                 key={index} 
                 variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
               >
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
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
