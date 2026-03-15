"use client";

import { motion } from "framer-motion";
import { ContactCTABlock } from "@/components/ui/ProcessAndCTA";

export function ContactSection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="page-section deferred-section bg-background" id="contact">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="container-content mx-auto px-6 max-w-5xl"
      >
         {withHeading ? (
           <h2 className="sr-only">Plan een strategiesessie of websitescan</h2>
         ) : null}
         <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } } }}>
           <ContactCTABlock 
            title="Klaar om lokaal door te breken?"
            description="Of je nu begint of je bestaande website wil inwisselen voor een professionele leadmachine. Vraag een gratis strategiesessie aan en ontdek de kansen voor jouw merk in Lemmer of omgeving."
            primaryButtonText="Plan Strategiesessie"
            primaryButtonHref="/contact"
         />
         </motion.div>
      </motion.div>
    </section>
  );
}
