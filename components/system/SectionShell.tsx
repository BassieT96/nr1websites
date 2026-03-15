import type { HTMLAttributes } from "react";

import { Container } from "@/components/base/Container";
import { cn } from "@/lib/utils";

const tones = {
  default: "",
  muted: "bg-white/35",
  contrast: "bg-primary text-white",
};

type SectionShellProps = HTMLAttributes<HTMLElement> & {
  containerSize?: "content" | "reading" | "wide" | "full";
  tone?: keyof typeof tones;
};

export function SectionShell({
  children,
  className,
  containerSize = "content",
  tone = "default",
  ...props
}: SectionShellProps) {
  return (
    <section className={cn("page-section", tones[tone], className)} {...props}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
