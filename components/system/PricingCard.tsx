import { CheckCircle2 } from "lucide-react";

import type { PricingPlan } from "@/content";
import { ButtonLink } from "@/components/base/Button";
import { Badge } from "@/components/system/Badge";
import { Card } from "@/components/system/Card";

type PricingCardProps = {
  plan: PricingPlan;
};

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <Card
      className="h-full"
      padding="xl"
      variant={plan.featured ? "strong" : "default"}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            {plan.title}
          </p>
          <h3 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-foreground">
            {plan.price}
          </h3>
        </div>
        {plan.featured ? <Badge variant="accent">Aanbevolen</Badge> : null}
      </div>
      <p className="mt-5 leading-7 text-muted">{plan.description}</p>
      <ul className="mt-8 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" />
            <span className="leading-7 text-foreground/85">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <ButtonLink href={plan.ctaHref} variant={plan.featured ? "accent" : "secondary"}>
          {plan.ctaLabel}
        </ButtonLink>
      </div>
    </Card>
  );
}
