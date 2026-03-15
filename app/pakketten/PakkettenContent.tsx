"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { faqItems, pricingPlans } from "@/content";
import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";
import { PricingCard } from "@/components/ui/SectionBlocks";
import { AccordionItem } from "@/components/ui/AccordionItem";

export function PakkettenContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-surface-strong">
      <PageHero
        description="Deze pagina biedt alvast een nette basis voor pakket- of prijsinformatie. Later kun je hier eenvoudig scoped deliverables, FAQ's en vergelijkingstabellen aan toevoegen."
        eyebrow="Pakketten"
        primaryHref="/contact"
        primaryLabel="Vraag een voorstel aan"
        title="Indicatieve pakketten voor websiteprojecten"
      />
      <section className="pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          <Container className="grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } }
                }}
              >
                <PricingCard
                  tier={plan.title}
                  price={plan.price}
                  features={plan.features}
                  isPopular={plan.featured ?? false}
                />
              </motion.div>
            ))}
          </Container>
        </motion.div>
      </section>

      <section className="pb-32">
        <Container className="max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="type-section-title text-foreground tracking-tight">Veelgestelde vragen over pakketten</h2>
          </div>
          <div className="space-y-4">
            {faqItems.slice(0, 5).map((faq, index) => (
              <AccordionItem
                key={index}
                index={index}
                vraag={faq.question}
                antwoord={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
