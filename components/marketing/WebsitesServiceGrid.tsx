"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Webdesign",
    description:
      "Design dat niet alleen mooi is — maar psychologisch is ingericht om vertrouwen te wekken en bezoekers naar actie te sturen.",
    href: "/diensten/webdesign",
  },
  {
    number: "02",
    title: "Development",
    description:
      "Supersnelle Next.js architectuur met frictieloze laadtijden en een perfecte technische SEO-score. Gebouwd om te schalen.",
    href: "/diensten/development",
  },
  {
    number: "03",
    title: "Conversie-optimalisatie",
    description:
      "Strakke funnels en slimme CTA's die bezoekers moeiteloos transformeren in kwalitatieve aanvragen en concrete leads.",
    href: "/oplossingen/conversiegerichte-website",
  },
  {
    number: "04",
    title: "Beheer & hosting",
    description:
      "Volledige technische ontzorging — beveiliging, updates en razendsnelle Vercel-hosting. Zodat jij je kunt focussen op je zaak.",
    href: "/diensten/webdesign",
  },
];

export function WebsitesServiceGrid() {
  return (
    <section className="bg-[#020202] px-6 py-24 lg:py-32">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/25">
            Wat we bouwen
          </span>
        </motion.div>

        {/* Service rows */}
        <div>
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={service.href}
                className="group flex items-start gap-8 sm:gap-16 py-10 lg:py-12 border-t border-white/[0.06] hover:border-white/[0.12] transition-colors duration-300"
              >
                {/* Number */}
                <span className="shrink-0 font-mono text-[11px] text-white/20 tracking-[0.15em] pt-1.5 w-8">
                  {service.number}
                </span>

                {/* Title + description */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-white/80 group-hover:text-white tracking-tight leading-tight mb-3 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg text-white/25 group-hover:text-white/45 font-light leading-relaxed transition-colors duration-300 max-w-2xl">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="shrink-0 flex items-center pt-1">
                  <ArrowRight
                    className="size-5 text-white/15 group-hover:text-[#3662e3] group-hover:translate-x-1 transition-all duration-300"
                    strokeWidth={1.5}
                  />
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Bottom border */}
          <div className="border-t border-white/[0.06]" />
        </div>

      </div>
    </section>
  );
}
