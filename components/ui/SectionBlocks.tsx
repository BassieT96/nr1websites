import React from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

export function TestimonialCard({
  quote,
  author,
  role,
  company,
}: {
  quote: string;
  author: string;
  role: string;
  company: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-border/80 bg-surface p-8 md:p-10">
      <div className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-accent/10 blur-2xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-32 w-64 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col gap-8">
        <div className="flex items-center justify-between">
          <div className="flex gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
            Klantreview
          </span>
        </div>

        <blockquote className="text-[clamp(1.2rem,2vw,1.65rem)] font-display leading-[1.35] tracking-[-0.02em] text-foreground">
          "{quote}"
        </blockquote>

        <div className="mt-auto flex items-center gap-4 border-t border-border/70 pt-6">
          <div className="flex size-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-mono text-sm font-semibold text-accent">
            {author.charAt(0)}
          </div>
          <p className="text-sm leading-tight text-muted-strong">
            <span className="block text-base font-semibold text-foreground">{author}</span>
            {role}, {company}
          </p>
        </div>
      </div>
    </article>
  );
}

export function CaseStudyPreview({
  title,
  category,
  imageSrc,
  href,
}: {
  title: string;
  category: string;
  imageSrc: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group relative flex h-full min-h-[28rem] overflow-hidden rounded-[2rem] border border-border/70 bg-primary text-white"
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
        className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/45 to-transparent" />

      <div className="relative z-10 flex w-full flex-col justify-between p-6 md:p-8">
        <div className="flex items-center justify-between gap-4">
          <Badge className="border-white/30 bg-white/10 text-[10px] uppercase tracking-[0.24em] text-white">
            {category}
          </Badge>
          <span className="rounded-full border border-white/30 bg-white/10 p-2 backdrop-blur-sm transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight className="size-4" />
          </span>
        </div>

        <div className="space-y-4">
          <h3 className="max-w-[26ch] text-[clamp(1.7rem,3vw,2.4rem)] font-display leading-[1.06] tracking-[-0.03em] text-white">
            {title}
          </h3>
          <p className="max-w-[44ch] text-sm leading-relaxed text-white/80">
            Snelle, moderne website met focus op lokale vindbaarheid en een duidelijke route naar meer aanvragen.
          </p>
          <div className="inline-flex items-center gap-2 border-b border-white/35 pb-1 text-sm font-medium text-white">
            Bekijk case
            <ArrowUpRight className="size-4" />
          </div>
        </div>
      </div>
    </a>
  );
}

export function PricingCard({
  tier,
  price,
  features,
  isPopular = false,
}: {
  tier: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border bg-white p-7 md:p-9",
        isPopular
          ? "border-accent/35 shadow-[0_18px_60px_rgba(37,99,235,0.18)]"
          : "border-border/80 shadow-[0_14px_34px_rgba(9,9,11,0.07)]",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-24",
          isPopular
            ? "bg-gradient-to-b from-accent/12 to-transparent"
            : "bg-gradient-to-b from-zinc-100 to-transparent",
        )}
      />

      {isPopular ? (
        <div className="absolute right-6 top-6">
          <Badge className="border-none bg-accent px-4 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white">
            Meest gekozen
          </Badge>
        </div>
      ) : null}

      <div className="relative z-10 mb-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">{tier}</p>
        <div className="mt-5 flex items-end gap-2">
          <span className="font-display text-[3rem] leading-none tracking-[-0.03em] text-foreground">{price}</span>
          <span className="pb-2 text-[11px] uppercase tracking-[0.14em] text-muted">eenmalig</span>
        </div>
      </div>

      <ul className="relative z-10 mb-10 space-y-4">
        {features.map((feature, index) => (
          <li key={`${feature}-${index}`} className="flex items-start gap-3 text-sm leading-relaxed text-muted-strong">
            <span
              className={cn(
                "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                isPopular ? "bg-accent text-white" : "bg-surface-strong text-foreground",
              )}
            >
              <Check className="size-3.5" strokeWidth={2.5} />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={cn(
          "relative z-10 mt-auto rounded-xl px-5 py-4 text-sm font-semibold transition-all duration-500",
          isPopular
            ? "bg-accent text-white hover:bg-accent-strong"
            : "border border-border bg-white text-foreground hover:border-foreground/20 hover:bg-surface-strong",
        )}
      >
        Plan strategiesessie
      </button>
    </article>
  );
}
