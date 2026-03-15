import { ArrowRight, CheckCircle2 } from "lucide-react";

import { ButtonLink } from "@/components/base/Button";
import { Badge } from "@/components/system/Badge";
import { Card } from "@/components/system/Card";

type ContactCtaBlockProps = {
  bullets: string[];
  description: string;
  eyebrow: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  title: string;
};

export function ContactCtaBlock({
  bullets,
  description,
  eyebrow,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  title,
}: ContactCtaBlockProps) {
  return (
    <Card className="premium-ring shine h-full" padding="xl" variant="strong">
      <Badge variant="accent">{eyebrow}</Badge>
      <h3 className="mt-6 type-section-title max-w-xl font-semibold text-foreground">
        {title}
      </h3>
      <p className="mt-4 max-w-2xl text-[1.05rem] leading-8 text-muted">
        {description}
      </p>
      <ul className="mt-8 grid gap-4">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" />
            <span className="leading-7 text-foreground/88">{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={primaryHref}>
          {primaryLabel}
          <ArrowRight className="size-4" />
        </ButtonLink>
        {secondaryHref && secondaryLabel ? (
          <ButtonLink href={secondaryHref} variant="tertiary">
            {secondaryLabel}
          </ButtonLink>
        ) : null}
      </div>
    </Card>
  );
}
