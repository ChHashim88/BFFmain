"use client";

import GlassCard from "@/components/ui/glass-card";
import { Search, CheckCircle2, Clapperboard, Globe, ShieldCheck, Play } from "lucide-react";

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

          {/* Right Side - Stacked Video Player with Image 6.png Thumbnail */}
          <div className="relative w-full aspect-video lg:aspect-[4/3] xl:aspect-[16/10] lg:ml-4 sm:ml-8 order-1 lg:order-2">
            <div className="absolute inset-y-6 -left-6 w-full bg-zinc-200 dark:bg-zinc-900 border border-border/40 shadow-2xl z-0 hidden sm:block rounded-2xl" />
            <div className="absolute inset-y-3 -left-3 w-full bg-zinc-300 dark:bg-zinc-900 border border-border/50 shadow-2xl z-10 hidden sm:block rounded-2xl" />

            <div className="absolute inset-0 w-full h-full rounded-2xl bg-zinc-100 dark:bg-zinc-950 border border-border shadow-2xl overflow-hidden z-20 flex items-center justify-center group cursor-pointer transition-transform duration-500 hover:-translate-y-2 hover:translate-x-2">
              {/* Thumbnail Image 6.png */}
              <img
                src="/6.png"
                alt="Built To Execute Overview"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 dark:bg-black/55 group-hover:bg-black/30 transition-colors duration-500 z-10" />

              {/* Centered Play Button & Label */}
              <div className="relative z-20 flex flex-col items-center gap-3 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C00000] text-white flex items-center justify-center shadow-[0_0_30px_rgba(192,0,0,0.6)] backdrop-blur-md group-hover:scale-110 transition-all duration-300 border border-white/20">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white translate-x-0.5" />
                </div>
                <span className="text-xs sm:text-sm font-bold tracking-widest text-white uppercase drop-shadow-md">
                  Watch Capabilities
                </span>
              </div>
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
