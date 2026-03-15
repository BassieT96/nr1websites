"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type PlaceholderPanelProps = {
  title: string;
  description: string;
};

export function PlaceholderPanel({
  title,
  description,
}: PlaceholderPanelProps) {
  return (
    <section className="pb-24 bg-surface-strong">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 25 }}
          className="surface-card max-w-2xl p-12 md:p-16 mx-auto text-center"
        >
          <h2 className="type-section-title text-foreground mb-6">
            {title}
          </h2>
          <p className="type-body-lead text-muted mb-10 mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink href="/contact" variant="primary">Bespreek de invulling</ButtonLink>
            <ButtonLink href="/cases" variant="secondary">
              Eerst cases bekijken
            </ButtonLink>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
