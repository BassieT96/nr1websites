"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { TestimonialCard } from "@/components/ui/SectionBlocks";

export function TestimonialsSection() {
  return (
    <section className="page-section deferred-section bg-surface-strong/50">
      <SectionHeading
        align="center"
        description="Vertrouwen groeit sneller wanneer bezoekers zien dat design, strategie en techniek aantoonbaar samenkomen in het eindresultaat."
        eyebrow="Reviews"
        title="Wat klanten waarderen aan de samenwerking"
      />
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1, 
            transition: { staggerChildren: 0.15 } 
          }
        }}
      >
        <Container className="grid gap-8 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => (
            <motion.div 
              key={testimonial.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } }
              }}
            >
              <TestimonialCard 
                quote={testimonial.quote}
                author={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
              />
            </motion.div>
          ))}
        </Container>
      </motion.div>
    </section>
  );
}
