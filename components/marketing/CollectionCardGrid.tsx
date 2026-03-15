import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/base/Button";
import { Container } from "@/components/base/Container";

type CollectionCard = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  badges?: string[];
};

type CollectionCardGridProps = {
  items: CollectionCard[];
};

export function CollectionCardGrid({ items }: CollectionCardGridProps) {
  return (
    <Container className="grid gap-6 lg:grid-cols-2">
      {items.map((item) => (
        <article key={item.href} className="surface-card p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            {item.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-foreground">
            {item.title}
          </h2>
          <p className="mt-4 leading-7 text-muted">{item.description}</p>
          {item.badges?.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {item.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.16em] text-muted"
                >
                  {badge}
                </span>
              ))}
            </div>
          ) : null}
          <div className="mt-8">
            <ButtonLink href={item.href} variant="secondary">
              Bekijk pagina
              <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
        </article>
      ))}
    </Container>
  );
}
