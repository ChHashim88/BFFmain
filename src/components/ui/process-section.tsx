"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";

// Interface for individual process card props
export interface ProcessCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
  index?: number;
}

// Reusable Process Card Component
const ProcessCard: React.FC<ProcessCardProps> = ({ icon: Icon, title, description, className, index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
    className={cn(
      "group relative w-full overflow-hidden rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-card dark:bg-black p-6 transition-all cursor-pointer duration-500 hover:border-[#C00000] hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)] backdrop-blur-sm",
      className
    )}
  >
    {/* Sparkling Background for Dark Mode */}
    <div className="absolute inset-0 z-0 hidden dark:block opacity-40 transition-opacity duration-500 group-hover:opacity-100">
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={60}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
    </div>

    {/* Continuous Automatic Glass Shine Beam */}
    <motion.div
      className="absolute inset-0 z-10 pointer-events-none opacity-30 group-hover:opacity-100 transition-opacity duration-700"
      style={{
        background:
          "linear-gradient(115deg, transparent 20%, rgba(255, 255, 255, 0.35) 45%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.35) 55%, transparent 80%)",
      }}
      animate={{
        x: ["-150%", "200%"],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatDelay: 2,
        ease: [0.25, 1, 0.5, 1],
        delay: index * 0.3,
      }}
    />

    {/* Interactive Hover Light Sheen */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-10" />

    {/* Header Row: Icon + Title (Inline on Mobile < sm, Stacked on Desktop >= sm) */}
    <div className="relative z-20 flex flex-row sm:flex-col items-center sm:items-start gap-4 mb-3 sm:mb-4">
      {/* Icon Container */}
      <div className="relative z-20 shrink-0 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-destructive transition-all duration-300 group-hover:bg-destructive group-hover:border-destructive shadow-md group-hover:shadow-lg">
        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-destructive group-hover:text-white transition-colors duration-300" />
      </div>

      <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-destructive transition-colors duration-300">{title}</h3>
    </div>

    {/* Content */}
    <div className="relative z-20 flex flex-col">
      <p className="text-xs sm:text-sm text-muted-foreground">{description}</p>
    </div>
  </motion.div>
);

// Interface for the main section props
export interface ProcessSectionProps {
  id?: string;
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  items: ProcessCardProps[];
}

// Main Process Section Component
export const ProcessSection: React.FC<ProcessSectionProps> = ({
  id,
  subtitle,
  title,
  description,
  buttonText,
  items,
}) => {
  return (
    <section
      id={id}
      className="relative w-full scroll-mt-24 py-16 md:py-20 lg:py-24 px-6 md:px-12 xl:px-24 overflow-hidden flex flex-col justify-center bg-background"
    >
      <div className="mx-auto w-full max-w-[1350px] flex flex-col space-y-10 lg:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side - Text */}
          <div className="flex flex-col gap-6 order-2 lg:order-1 mt-8 lg:mt-0 lg:pr-8 xl:pr-16 text-center lg:text-left">
            <h3 className="text-h3 text-destructive uppercase tracking-tight font-bold mb-3">
              {subtitle}
            </h3>
            <h2 className="text-h2 text-foreground dark:text-white drop-shadow-sm">
              Market <span className="text-destructive">Execution</span>
            </h2>
            <div className="space-y-4 text-body-text text-muted-foreground transition-colors duration-300">
              <p>{description}</p>
            </div>
            <p className="text-lg font-medium text-destructive mt-2">
              {buttonText}
            </p>
          </div>

          {/* Right Side - Stacked Video Player */}
          <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] xl:aspect-[16/10] lg:ml-4 sm:ml-8 order-1 lg:order-2">
            <div className="absolute inset-y-6 -left-6 w-full bg-zinc-200 dark:bg-zinc-900 border border-border/40 shadow-2xl z-0 hidden sm:block" />
            <div className="absolute inset-y-3 -left-3 w-full bg-zinc-300 dark:bg-zinc-900 border border-border/50 shadow-2xl z-10 hidden sm:block" />

            <div className="absolute inset-0 w-full h-full bg-zinc-100 dark:bg-zinc-950 border border-border shadow-2xl overflow-hidden z-20 flex items-center justify-center group transition-transform duration-500 hover:-translate-y-2 hover:translate-x-2">
              <div className="absolute inset-0 bg-black/10 dark:bg-black/40 group-hover:bg-black/5 dark:group-hover:bg-black/10 transition-colors duration-500 z-10" />
              <span className="text-2xl sm:text-4xl font-black tracking-[0.2em] text-foreground/40 dark:text-white/30 uppercase z-20 transition-transform duration-500 group-hover:scale-105">
                Video Player
              </span>
            </div>
          </div>
        </div>

        {/* 6 Process Cards Grid (Matching BUILT TO EXECUTE layout) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-stretch pt-4 pb-2">
          {items.map((item, index) => (
            <ProcessCard key={index} index={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

