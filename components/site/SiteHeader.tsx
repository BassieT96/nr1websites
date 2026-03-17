"use client";

import { useState, useEffect } from "react";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";
import { navItems, siteConfig } from "@/content";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { usePerformanceProfile } from "@/lib/use-performance-profile";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { isSafari } = usePerformanceProfile();

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  const [isScrolled, setIsScrolled] = useState(false);

  // Check if current page has a dark hero section
  const isDarkHero = pathname.startsWith("/websites") || pathname.startsWith("/cases") || pathname.startsWith("/contact");
  const useLightText = isDarkHero && !isScrolled;

  // Handle scroll state for glassmorphism
  useEffect(() => {
    let ticking = false;

    const updateScrolled = () => {
      ticking = false;
      const nextScrolled = window.scrollY > 20;
      setIsScrolled((current) => (current === nextScrolled ? current : nextScrolled));
    };

    const handler = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateScrolled);
    };

    updateScrolled();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={cn(
      "fixed inset-x-0 top-0 z-50 transition-all duration-500",
      isScrolled ? "py-2" : "py-6"
    )}>
      <Container>
        <div className={cn(
          "flex items-center justify-between gap-4 px-4 py-3 md:px-6 rounded-full transition-all duration-500",
          isScrolled
            ? cn("border border-border/50 shadow-sm", isSafari ? "bg-white/95" : "bg-white/70 backdrop-blur-2xl")
            : "bg-transparent border border-transparent shadow-none"
        )}>
          <Link
            className={cn(
              "flex items-center gap-3 text-sm font-semibold tracking-[0.2em] transition-colors",
              useLightText ? "text-white" : "text-primary"
            )}
            href="/"
            onClick={() => setIsOpen(false)}
          >
            <span className={cn(
              "rounded-full px-3 py-2 text-xs transition-colors",
              useLightText ? "bg-white text-zinc-900" : "bg-primary text-white"
            )}>
              NR1
            </span>
            <span className="hidden sm:inline">{siteConfig.name}</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className={cn(
                  "text-sm font-medium transition",
                  useLightText ? "text-white/70 hover:text-white" : "text-muted hover:text-primary",
                  isActive(item.href) && (useLightText ? "text-white" : "text-primary"),
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <ButtonLink 
              href={siteConfig.ctaHref}
              className={cn(
                "transition-colors",
                useLightText ? "bg-white text-zinc-900 hover:bg-white/90" : ""
              )}
            >
              {siteConfig.ctaLabel}
            </ButtonLink>
          </div>

          <button
            aria-expanded={isOpen}
            aria-label="Open navigatie"
            className={cn(
              "inline-flex rounded-full border p-2 md:hidden transition-colors",
              useLightText ? "border-white/20 text-white" : "border-border text-foreground"
            )}
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={cn(
                "mt-3 origin-top grid gap-2 rounded-[2rem] border border-border/40 bg-white/95 p-4 shadow-[var(--shadow-pop)] md:hidden",
                isSafari ? "" : "backdrop-blur-2xl",
              )}
            >
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx }}
                >
                  <Link
                    className={cn(
                      "flex items-center rounded-2xl px-5 py-4 text-sm font-semibold transition-all duration-300",
                      isActive(item.href) 
                        ? "bg-accent/10 text-primary" 
                        : "text-foreground hover:bg-surface-strong"
                    )}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * navItems.length }}
              >
                <ButtonLink className="mt-4 w-full py-4 rounded-2xl" href={siteConfig.ctaHref} variant="primary">
                  {siteConfig.ctaLabel}
                </ButtonLink>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </header>
  );
}
