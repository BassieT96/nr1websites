import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const cardVariants = {
  default: "surface-card",
  strong: "surface-card-strong premium-ring",
  tinted: "surface-card-tinted",
};

const cardPadding = {
  md: "p-6",
  lg: "p-8",
  xl: "p-10",
};

type CardProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
  padding?: keyof typeof cardPadding;
  variant?: keyof typeof cardVariants;
};

export function Card({
  className,
  interactive = true,
  padding = "lg",
  variant = "default",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        cardVariants[variant],
        cardPadding[padding],
        interactive && "interactive-lift",
        className,
      )}
      {...props}
    />
  );
}
