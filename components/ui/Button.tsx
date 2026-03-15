import type { ButtonHTMLAttributes, ReactNode } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 active:scale-[0.98]";

const variants = {
  primary:
    "bg-accent text-white shadow-[0_4px_14px_0_rgba(37,99,235,0.25)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.2)] hover:-translate-y-0.5 hover:bg-accent-strong",
  secondary:
    "bg-surface border border-border text-foreground hover:bg-surface-strong hover:border-border-strong hover:-translate-y-0.5 shadow-sm",
  outline:
    "border border-border text-foreground hover:bg-surface-strong",
  ghost: "text-muted hover:text-foreground hover:bg-surface-strong",
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
