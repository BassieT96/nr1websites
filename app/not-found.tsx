import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  description:
    "De pagina die je zoekt bestaat niet of is verplaatst. Ga terug naar de homepage of bekijk onze diensten.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center py-24 bg-surface-strong">
      <Container>
        <div className="surface-card max-w-2xl p-12 md:p-16 mx-auto text-center">
          <span className="section-kicker mb-6">404</span>
          <h1 className="type-display-page text-foreground mb-6">
            Pagina niet gevonden
          </h1>
          <p className="type-body-lead text-muted mb-10 max-w-xl mx-auto">
            De pagina die je zoekt bestaat niet of is verplaatst naar een nieuwe locatie binnen onze vernieuwde projectstructuur.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink href="/" variant="primary">Terug naar Home</ButtonLink>
            <ButtonLink href="/diensten" variant="secondary">
              Bekijk Diensten
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
