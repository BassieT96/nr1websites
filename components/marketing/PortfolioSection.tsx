"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
// Safari note: useScroll+useSpring used for carousel rotationOverride only (scroll-sync feature)
import { ThreeDPhotoCarousel, CarouselCard, useMediaQuery } from "@/components/ui/3d-carousel";
import { usePerformanceProfile } from "@/lib/use-performance-profile";

const cases: CarouselCard[] = [
  {
    title: "FitFabriek Coaching Platform",
    description: "Een supersnelle Next.js website voor een fysio- en coachingpraktijk met focus op conversie.",
    category: "Webdesign & SEO",
    href: "/cases/fitfabriek",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2669&auto=format&fit=crop",
  },
  {
    title: "Studio Flux Architecten",
    description: "Een visueel rijke portfolio website met geavanceerde animaties voor een architectenbureau.",
    category: "Creative Portfolio",
    href: "/cases/studio-flux",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Atelier Noord Conceptstore",
    description: "Een moderne e-commerce ervaring met een focus op lokale vindbaarheid en merkbeleving.",
    category: "E-Commerce",
    href: "/cases/atelier-noord",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Noord-West Makelaardij",
    description: "Een krachtig platform voor makelaars met directe koppelingen en een moderne interface.",
    category: "Real Estate",
    href: "/cases/noord-west",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2673&auto=format&fit=crop",
  },
  {
    title: "Lemmer Watersport",
    description: "Beleving en techniek komen samen in deze snelle website voor een lokale watersport specialist.",
    category: "Hospitality & Leisure",
    href: "/cases/lemmer-watersport",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Vriesland Logistiek",
    description: "Een strakke, corporate website voor een toonaangevend transportbedrijf in de regio.",
    category: "Corporate Design",
    href: "/cases/vriesland-logistiek",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop",
  },
];

export function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { allowHeavyMotion } = usePerformanceProfile();
  // initializeWithValue:false avoids SSR hydration mismatch; corrects after mount
  const isMobile = useMediaQuery("(max-width: 768px)", { initializeWithValue: false });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth scroll sync: 0 progress = 0 deg, 1 progress = -180 deg (Focus on a selection)
  const rawRotation = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const rotation = useSpring(rawRotation, { stiffness: 400, damping: 90 });

  if (!allowHeavyMotion) {
    return (
      <section className="deferred-section relative border-y border-zinc-100 bg-white py-24 lg:py-32">
        <div className="container-content mx-auto px-6">
          <header className="mb-16 lg:mb-20">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-10 bg-accent" />
              <span className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
                Selected Works
              </span>
            </div>
            <h2 className="text-4xl font-display font-medium tracking-tight text-zinc-900 lg:text-7xl">
              Werk dat <span className="text-accent italic">impact</span> maakt.
            </h2>
          </header>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cases.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-950 text-white transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={900}
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <span className="block font-mono text-xs uppercase tracking-[0.25em] text-white/45">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-display font-medium text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/65">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    // Mobile: h-auto (normal flow). Desktop: h-[160vh] (sticky scroll, 60vh scroll space)
    <section ref={containerRef} className="deferred-section relative h-auto md:h-[110vh] bg-white border-y border-zinc-100 overflow-x-hidden">
      {/* Mobile: relative (normal flow). Desktop: sticky top, content from top */}
      <div className="relative md:sticky top-0 h-auto md:h-screen w-full flex flex-col items-center">
        {/* Cinematic Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] -right-[10%] w-[60vw] h-[60vw]" style={{ background: "radial-gradient(circle, rgba(54,98,227,0.07) 0%, transparent 60%)" }} />
          <div className="absolute inset-0 noise-bg opacity-[0.03] mix-blend-multiply" />
          <div className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: "linear-gradient(to right, #000000 2px, transparent 2px), linear-gradient(to bottom, #000000 2px, transparent 2px)",
              backgroundSize: "100px 100px"
            }}
          />
        </div>

        <div className="container-content relative z-10 mx-auto px-6 max-w-7xl w-full pt-12 md:pt-16 lg:pt-32">
          <header className="mb-10 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-4 md:mb-8">
                <div className="h-px w-10 bg-accent" />
                <span className="text-accent font-mono text-sm uppercase tracking-[0.3em]">
                  Selected Works
                </span>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <h2 className="text-4xl md:text-6xl lg:text-9xl font-display font-medium text-zinc-900 tracking-tight leading-[0.9]">
                  Werk dat <br /> <span className="text-accent italic">impact</span> maakt.
                </h2>
              </div>
            </motion.div>
          </header>

          {/* 3D Carousel — scroll-driven on desktop, draggable on mobile */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="w-screen -mx-6 md:w-full md:mx-0 md:-mx-16 lg:-mx-64 pb-0">
              <ThreeDPhotoCarousel
                cards={cases}
                onActiveIndexChange={setActiveIndex}
                activeIndex={activeIndex}
                rotationOverride={isMobile ? undefined : rotation}
              />
            </div>
          </div>

          {/* Active Title — inline on mobile, absolute on desktop */}
          <div className="relative z-20 mt-6 pb-12 md:pb-0 md:absolute md:bottom-8 lg:bottom-12 md:left-0 md:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={cases[activeIndex].title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-accent font-mono text-xs uppercase tracking-[0.3em] block mb-2">
                  {cases[activeIndex].category}
                </span>
                <h3 className="text-xl md:text-2xl lg:text-4xl font-display font-medium text-zinc-900">
                  {cases[activeIndex].title}
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
