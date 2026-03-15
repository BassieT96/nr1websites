"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon, ArrowUpRight } from 'lucide-react';
import { cn } from "@/lib/utils";

export type SelectorOption = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  href: string;
};

interface InteractiveSelectorProps {
  options: SelectorOption[];
  className?: string;
}

const InteractiveSelector = ({ options, className }: InteractiveSelectorProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 150 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [options]);

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <div className={cn("w-full max-w-6xl mx-auto px-4", className)}>
      <div className="flex w-full h-[500px] lg:h-[600px] items-stretch overflow-hidden relative gap-2 lg:gap-4">
        {options.map((option, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{
              flex: activeIndex === index ? 4 : 1,
              opacity: animatedOptions.includes(index) ? 1 : 0,
              x: animatedOptions.includes(index) ? 0 : -40,
            }}
            transition={{
              flex: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.5, delay: index * 0.1 },
              x: { duration: 0.5, delay: index * 0.1 }
            }}
            className={cn(
               "relative flex flex-col justify-end overflow-hidden cursor-pointer group rounded-[2.5rem] border transition-colors duration-500",
               activeIndex === index ? "border-accent/30 shadow-2xl" : "border-zinc-200/50 hover:border-zinc-300"
            )}
            onClick={() => handleOptionClick(index)}
          >
            {/* Background Image */}
            <motion.div 
               className="absolute inset-0 z-0"
               animate={{
                 scale: activeIndex === index ? 1.05 : 1.15,
                 filter: activeIndex === index ? "brightness(0.7) blur(0px)" : "brightness(0.5) blur(2px)"
               }}
               transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <img
                src={option.image}
                alt={option.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Overlay Gradient */}
            <div className={cn(
              "absolute inset-0 z-10 transition-opacity duration-700 pointer-events-none",
              activeIndex === index 
                ? "bg-gradient-to-t from-black/90 via-black/20 to-transparent" 
                : "bg-black/40"
            )} />

            {/* Label Content */}
            <div className="relative z-20 p-6 lg:p-10 flex items-center gap-4 w-full">
              {/* Icon Container */}
              <div className={cn(
                "size-12 lg:size-16 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shrink-0 transition-all duration-500",
                activeIndex === index ? "bg-accent text-white border-accent" : "bg-white/10 text-white/70 group-hover:bg-white/20"
              )}>
                <option.icon className="size-6 lg:size-8" strokeWidth={1.5} />
              </div>

              {/* Text Content */}
              <div className="overflow-hidden flex flex-col justify-center">
                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col"
                    >
                      <h3 className="text-xl lg:text-3xl font-display font-medium text-white mb-2 leading-tight">
                        {option.title}
                      </h3>
                      <p className="text-white/60 text-sm lg:text-lg font-light leading-relaxed max-w-sm">
                        {option.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-accent text-sm font-mono uppercase tracking-widest">
                        Case bekijken <ArrowUpRight className="size-4" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Minimized view title (invisible when active) */}
                {activeIndex !== index && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute left-20 hidden lg:block"
                  >
                    <span className="text-white text-sm font-medium uppercase tracking-[0.2em] whitespace-nowrap rotate-90 origin-left">
                       {option.title}
                    </span>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Border Glow for active item */}
            {activeIndex === index && (
              <div className="absolute inset-0 border-[2px] border-accent/20 rounded-[2.5rem] pointer-events-none z-30" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveSelector;
