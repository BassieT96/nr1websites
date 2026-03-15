import type { ButtonHTMLAttributes, ReactNode } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary:
    "shine bg-primary text-white shadow-[0_18px_50px_rgba(15,23,42,0.18)] hover:-translate-y-0.5 hover:bg-primary/95",
  accent:
    "shine bg-accent text-white shadow-[0_18px_50px_rgba(183,121,31,0.22)] hover:-translate-y-0.5 hover:bg-accent-strong",
  secondary:
    "border border-border bg-white/75 text-foreground hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white",
  tertiary:
    "border border-primary/10 bg-primary/[0.03] text-primary hover:-translate-y-0.5 hover:border-primary/20 hover:bg-primary/[0.06]",
  ghost: "text-foreground hover:text-primary",
  inline: "px-0 py-0 text-primary hover:text-accent",
};

type ButtonVariant = keyof typeof variants;

type ButtonLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
  variant?: ButtonVariant;
};

export function ButtonLink({
  children,
  className,
  href,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link className={cn(baseClasses, variants[variant], className)} href={href}>
      {children}
    </Link>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  className,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(baseClasses, variants[variant], className)}
      type={type}
      {...props}
    />
  );
}
