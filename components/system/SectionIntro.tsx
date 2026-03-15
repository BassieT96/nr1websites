import { cn } from "@/lib/utils";

type SectionIntroProps = {
  align?: "left" | "center";
  description: string;
  eyebrow: string;
  title: string;
};

export function SectionIntro({
  align = "left",
  description,
  eyebrow,
  title,
}: SectionIntroProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-4",
        centered && "items-center text-center",
      )}
    >
      <span className="section-kicker">{eyebrow}</span>
      <div className={cn("max-w-3xl space-y-4", centered && "text-center")}>
        <h2 className="type-section-title text-balance font-semibold text-foreground">
          {title}
        </h2>
        <p className="type-body-lead text-pretty text-muted">{description}</p>
      </div>
    </div>
  );
}
