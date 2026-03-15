"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { navItems, siteConfig } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="pt-4">
        <div className="surface-card flex items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link
            className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-primary"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            <span className="rounded-full bg-primary px-3 py-2 text-xs text-white">
              NR1
            </span>
            <span className="hidden sm:inline">{siteConfig.name}</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className={cn(
                  "text-sm font-medium text-muted transition hover:text-primary",
                  isActive(item.href) && "text-primary",
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <ButtonLink href={siteConfig.ctaHref}>{siteConfig.ctaLabel}</ButtonLink>
          </div>

          <button
            aria-expanded={isOpen}
            aria-label="Open navigatie"
            className="inline-flex rounded-full border border-border p-2 text-foreground md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {isOpen ? (
          <div className="surface-card mt-3 grid gap-3 p-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground hover:bg-surface"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink className="mt-2" href={siteConfig.ctaHref}>
              {siteConfig.ctaLabel}
            </ButtonLink>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
