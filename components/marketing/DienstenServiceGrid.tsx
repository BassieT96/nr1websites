"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Webdesign",
    description: "Unieke en professionele ontwerpen die passen bij jouw merk en doelgroep.",
    href: "/diensten/webdesign",
  },
  {
    number: "02",
    title: "Webdevelopment",
    description: "Snelle, moderne en gebruiksvriendelijke websites die technisch sterk zijn opgebouwd.",
    href: "/diensten/development",
  },
  {
    number: "03",
    title: "SEO optimalisatie",
    description: "Verbeter je online vindbaarheid en trek meer relevante bezoekers aan.",
    href: "/diensten/seo",
  },
  {
    number: "04",
    title: "Onderhoud & support",
    description: "Doorlopende ondersteuning, updates en optimalisaties om alles soepel te laten draaien.",
    href: "/diensten/onderhoud",
  },
];

export function DienstenServiceGrid() {
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
            Dienstenoverzicht
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
                className="group flex flex-col sm:flex-row items-start gap-6 sm:gap-16 py-10 lg:py-12 border-t border-white/[0.06] hover:border-white/[0.12] transition-colors duration-300"
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
                <div className="shrink-0 flex items-center self-end sm:self-auto pt-1 mt-4 sm:mt-0">
                  <span className="text-sm font-medium text-white/40 group-hover:text-[#3662e3] transition-colors mr-4">Meer informatie</span>
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
