import { stats } from "@/content";
import { Container } from "@/components/ui/Container";

export function StatsStrip() {
  return (
    <section className="pb-12">
      <Container>
        <div className="surface-card grid gap-6 p-6 md:grid-cols-4 md:p-8">
          {stats.map((item) => (
            <div
              key={item.label}
              className="border-b border-border/80 pb-4 last:border-b-0 md:border-b-0 md:border-r md:pb-0 md:last:border-r-0"
            >
              <p className="text-sm text-muted">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-foreground">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
