"use client";

import GlassCard from "@/components/ui/glass-card";
import { Search, CheckCircle2, Clapperboard, Globe, ShieldCheck } from "lucide-react";

export function ExecuteSection() {
  return (
    <section
      id="execute"
      className="relative w-full scroll-mt-24 py-16 md:py-20 lg:py-24 px-6 md:px-12 xl:px-24 overflow-hidden flex flex-col justify-center bg-background"
    >
      <div className="mx-auto w-full max-w-[1350px] flex flex-col space-y-10 lg:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side - Text */}
          <div className="flex flex-col gap-6 order-2 lg:order-1 mt-8 lg:mt-0 lg:pr-8 xl:pr-16 text-center lg:text-left">
            <h3 className="text-h3 text-destructive uppercase tracking-tight font-bold mb-3">
              BUILT TO EXECUTE
            </h3>
            <h2 className="text-h2 text-foreground dark:text-white drop-shadow-sm">
              The Capabilities <span className="text-destructive">Behind the Model</span>
            </h2>
            <div className="space-y-4 text-body-text text-muted-foreground transition-colors duration-300">
              <p>
                A better film investment model only matters if it can be
                executed in the real world.
              </p>
              <p>
                Building a successful film investment platform requires more
                than technology. It requires access to investable projects,
                experienced commercial judgment, disciplined financial
                governance, professional production oversight, and the ability
                to bring films to audiences.
              </p>
              <p>
                Big Film Fund brings those capabilities together across the full
                film lifecycle.
              </p>
            </div>
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

        {/* 5 Execution Glass Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center items-stretch pt-4 pb-2">
          <GlassCard
            icon={Search}
            delay={0.1}
            title="Project Access"
            description="A growing pipeline sourced through filmmakers, producers, representatives, and development relationships."
          />
          <GlassCard
            icon={CheckCircle2}
            delay={0.2}
            title="Disciplined Greenlight"
            description="A rigorous evaluation methodology testing creative strength, audience thesis, commercial potential, and risk."
          />
          <GlassCard
            icon={Clapperboard}
            delay={0.3}
            title="Production Execution"
            description="Experienced producers, defined budgets, clear agreements, accountable milestones, and professional oversight."
          />
          <GlassCard
            icon={Globe}
            delay={0.4}
            title="Distribution"
            description="Global distribution experience and commercial relationships that inform positioning to reach audiences."
          />
          <GlassCard
            icon={ShieldCheck}
            delay={0.5}
            title="Platform Oversight"
            description="Standalone structures, disciplined capital management, consistent reporting, and ongoing visibility."
          />
        </div>
      </div>
    </section>
  );
}
