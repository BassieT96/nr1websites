import { Quote } from "lucide-react";

import type { Testimonial } from "@/content";
import { Badge } from "@/components/system/Badge";
import { Card } from "@/components/system/Card";

type TestimonialCardProps = {
  item: Testimonial;
};

export function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <Card className="premium-ring h-full" padding="lg" variant="default">
      <div className="flex items-start justify-between gap-4">
        <Badge variant="accent">Testimonial</Badge>
        <Quote className="size-5 text-accent" />
      </div>
      <p className="mt-6 text-[1.05rem] leading-8 text-foreground/90">
        “{item.quote}”
      </p>
      <div className="mt-8 border-t border-border pt-5">
        <p className="font-semibold text-foreground">{item.name}</p>
        <p className="text-sm text-muted">
          {item.role}, {item.company}
        </p>
      </div>
    </Card>
  );
}
