import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const badgeVariants = {
  neutral: "border-border bg-white/78 text-muted-strong",
  accent: "border-accent/15 bg-accent-soft/80 text-accent-strong",
  dark: "border-primary/10 bg-primary text-white",
};

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: keyof typeof badgeVariants;
};

export function Badge({
  className,
  variant = "neutral",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em]",
        badgeVariants[variant],
        className,
      )}
      {...props}
    />
  );
}
