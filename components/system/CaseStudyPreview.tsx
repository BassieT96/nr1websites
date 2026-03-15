import { ArrowRight } from "lucide-react";

import type { CaseStudy } from "@/content";
import { ButtonLink } from "@/components/base/Button";
import { Badge } from "@/components/system/Badge";
import { Card } from "@/components/system/Card";

type CaseStudyPreviewProps = {
  item: CaseStudy;
};

export function CaseStudyPreview({ item }: CaseStudyPreviewProps) {
  return (
    <Card className="overflow-hidden p-0" padding="md">
      <div className="relative overflow-hidden border-b border-border bg-primary px-6 py-8 text-white">
        <div className="grid-overlay absolute inset-0 opacity-25" />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-white/65">
              {item.sector}
            </p>
            <h3 className="mt-4 type-card-title font-semibold text-white">
              {item.client}
            </h3>
          </div>
          <Badge className="border-white/20 bg-white/10 text-white" variant="dark">
            {item.year}
          </Badge>
        </div>
      </div>

      <div className="space-y-6 p-6">
        <p className="leading-7 text-muted">{item.summary}</p>

        <div className="grid gap-3 sm:grid-cols-2">
          {item.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[var(--radius-md)] border border-border bg-surface px-4 py-4"
            >
              <p className="text-sm text-muted">{metric.label}</p>
              <p className="mt-2 text-xl font-semibold tracking-[-0.04em] text-foreground">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {item.services.map((service) => (
            <Badge key={service}>{service}</Badge>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="max-w-sm text-sm leading-6 text-muted">{item.impact}</p>
          <ButtonLink href={`/cases/${item.slug}`} variant="secondary">
            Bekijk case
            <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
      </div>
    </Card>
  );
}
