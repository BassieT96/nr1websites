import { Badge } from "@/components/system/Badge";
import { Card } from "@/components/system/Card";

type ProcessStep = {
  description: string;
  title: string;
};

type ProcessStepsProps = {
  items: ProcessStep[];
};

export function ProcessSteps({ items }: ProcessStepsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items.map((step, index) => (
        <Card key={step.title} className="h-full" padding="lg">
          <Badge variant="accent">0{index + 1}</Badge>
          <h3 className="mt-5 type-card-title font-semibold text-foreground">
            {step.title}
          </h3>
          <p className="mt-3 leading-7 text-muted">{step.description}</p>
        </Card>
      ))}
    </div>
  );
}
