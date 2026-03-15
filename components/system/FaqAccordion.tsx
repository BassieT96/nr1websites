"use client";

import { useState } from "react";

import { Minus, Plus } from "lucide-react";

import type { FaqItem } from "@/content";
import { Card } from "@/components/system/Card";
import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <Card key={item.question} className="p-0" padding="md">
            <button
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
              type="button"
            >
              <span className="type-card-title pr-6 font-semibold text-foreground">
                {item.question}
              </span>
              <span className="mt-1 rounded-full bg-primary/[0.04] p-2 text-primary">
                {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-[var(--ease-emphasis)]",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 leading-7 text-muted">{item.answer}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
