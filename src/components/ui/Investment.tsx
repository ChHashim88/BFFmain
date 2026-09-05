"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Building2,
  Clapperboard,
  Users,
  TrendingUp,
  Star,
  Target,
  Zap,
  Network,
  DollarSign,
  Rocket,
  ClipboardList,
  ShieldCheck,
  Clock3,
  Info,
  ArrowRight,
  BarChart3,
} from "lucide-react";
import "./Investment.css";

export default function Investment() {
  const progressRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = progressRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setProgress(96);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="investment"
      className="relative w-full scroll-mt-24 bg-background py-16 md:py-20 lg:py-24 px-6 md:px-12 xl:px-24 flex flex-col justify-center"
    >
      <div className="mx-auto w-full max-w-[1350px] flex flex-col space-y-12 lg:space-y-16">
        {/* =====================================================
            HERO / INVESTMENT INTRO GRID
        ===================================================== */}
        <div className="flex flex-col gap-8">
          {/* Section Heading Header */}
          <div className="w-full text-left">
            <h3 className="text-h3 text-destructive uppercase tracking-tight font-bold mb-3">
              THE INVESTMENT
            </h3>
            <h2 className="text-h2 text-foreground dark:text-white drop-shadow-sm">
              Own Part of the Company
              <br />
              Building <span className="text-destructive">What Comes Next.</span>
            </h2>
          </div>

          {/* 2-Column Grid: Cards 1-5 (Left) and Selection Framework (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left Column: Info Cards List */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {/* Card 1 - Primary Starting Statement */}
              <div className="relative group flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-card dark:bg-zinc-950 border border-destructive/60 shadow-sm transition-all duration-300 hover:border-destructive hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-destructive/40 bg-destructive/10 text-destructive mt-0.5">
                  <Building2 size={22} strokeWidth={2} />
                </div>
                <p className="text-body-text font-semibold text-foreground leading-relaxed pt-1">
                  This offering is an opportunity to purchase shares in Big
                  Film Fund, Inc. – the company building the model, platform,
                  and operating system described on this page.
                </p>
              </div>

              {/* Card 2 - Bold Highlight */}
              <div className="relative group flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-card dark:bg-zinc-950 border-2 border-destructive/80 shadow-sm transition-all duration-300">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-destructive text-white mt-0.5">
                  <Clapperboard size={22} strokeWidth={2} />
                </div>
                <p className="text-body-text font-bold text-destructive leading-relaxed pt-1">
                  You are not investing in a single movie.
                </p>
              </div>

              {/* Card 3 */}
              <div className="relative group flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-card/90 dark:bg-zinc-950/90 border border-border/80 shadow-sm transition-all duration-300 hover:border-destructive/40 hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-destructive mt-0.5">
                  <Users size={22} strokeWidth={2} />
                </div>
                <p className="text-body-text text-foreground/90 font-normal leading-relaxed pt-1">
                  You are investing in the company designed to source,
                  evaluate, structure, finance, support, and participate in a
                  growing pipeline of standalone films.
                </p>
              </div>

              {/* Card 4 */}
              <div className="relative group flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-card/90 dark:bg-zinc-950/90 border border-border/80 shadow-sm transition-all duration-300 hover:border-destructive/40 hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-destructive mt-0.5">
                  <TrendingUp size={22} strokeWidth={2} />
                </div>
                <p className="text-body-text text-muted-foreground leading-relaxed pt-1">
                  Future film investment opportunities are expected to be
                  offered separately through individual film entities. Each
                  will have its own investors, capitalization, economics,
                  reporting, revenue, and performance.
                </p>
              </div>

              {/* Card 5 - Ending Statement */}
              <div className="relative group flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-card/90 dark:bg-zinc-950/90 border border-border/80 shadow-sm transition-all duration-300 hover:border-destructive/40 hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-destructive mt-0.5">
                  <Star size={22} strokeWidth={2} />
                </div>
                <p className="text-body-text font-semibold text-foreground leading-relaxed pt-1">
                  Big Film Fund, Inc. is the company bringing those
                  opportunities together through one platform.
                </p>
              </div>
            </div>

            {/* Right Column: Selection Framework (Starts at Card 1, Ends at Card 5) */}
            <div className="lg:col-span-5 flex flex-col h-full">
              <div className="relative w-full h-full rounded-3xl bg-card dark:bg-zinc-950 border border-border/80 p-6 sm:p-8 lg:p-8 shadow-md flex flex-col justify-between gap-6 text-left">
                {/* Card Header */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-destructive">
                      <Target size={22} strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Selection Framework
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-md bg-destructive text-white text-xs font-bold uppercase tracking-wider">
                    Complete
                  </span>
                </div>

                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Phase 2 Implementation
                  </span>
                  <p className="text-body-text text-muted-foreground leading-relaxed mt-2">
                    BFF has developed a structured methodology for evaluating
                    projects across creative, audience, commercial, financial,
                    production, and distribution criteria.
                  </p>
                </div>

                <div className="w-full h-px bg-border/60" />

                {/* Progress Bar */}
                <div className="flex flex-col gap-2.5" ref={progressRef}>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 font-bold text-foreground">
                      <Zap size={16} className="text-destructive fill-destructive" />
                      <span>Evaluation Readiness</span>
                    </div>
                    <span className="font-extrabold text-destructive">{progress}%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full bg-destructive rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="w-full h-px bg-border/60" />

                {/* Connected Nodes */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    <Network size={14} className="text-destructive" />
                    <span>Connected Core Modules</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-muted/40 dark:bg-zinc-900 border border-border/50 text-xs font-bold text-foreground">
                      <span>Pipeline Development</span>
                      <ArrowRight size={14} className="text-destructive" />
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-muted/40 dark:bg-zinc-900 border border-border/50 text-xs font-bold text-foreground">
                      <span>Platform Design</span>
                      <ArrowRight size={14} className="text-destructive" />
                    </div>
                  </div>
                </div>

                {/* 4 Framework Pillars */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-muted/30 border border-border/40 gap-2">
                    <Target size={18} className="text-destructive" />
                    <span className="text-xs font-semibold text-foreground leading-tight">
                      Pipeline<br />Dev
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-muted/30 border border-border/40 gap-2">
                    <Clapperboard size={18} className="text-destructive" />
                    <span className="text-xs font-semibold text-foreground leading-tight">
                      Platform<br />Design
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-muted/30 border border-border/40 gap-2">
                    <Users size={18} className="text-destructive" />
                    <span className="text-xs font-semibold text-foreground leading-tight">
                      Industry<br />Network
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-muted/30 border border-border/40 gap-2">
                    <DollarSign size={18} className="text-destructive" />
                    <span className="text-xs font-semibold text-foreground leading-tight">
                      Financial<br />Model
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            WHAT THIS ROUND ENABLES & WHY NOW GRID
        ===================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Enables Card */}
          <div className="relative rounded-3xl bg-[#C00000] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-red-400/30 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 border border-white/30 text-white">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  What This Round Enables
                </h3>
              </div>
              <p className="text-body-text text-white/90 leading-relaxed font-normal">
                Capital raised through this offering will support BFF's
                transition from development toward live operation, including:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold text-white">
                <Rocket size={18} className="shrink-0 mt-0.5 text-white/90" />
                <span>Advancing the platform and initial investor experience toward launch</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold text-white">
                <ClipboardList size={18} className="shrink-0 mt-0.5 text-white/90" />
                <span>Structuring and preparing the first film investment opportunities</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold text-white">
                <Clapperboard size={18} className="shrink-0 mt-0.5 text-white/90" />
                <span>Expanding and progressing the initial project pipeline</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold text-white">
                <Users size={18} className="shrink-0 mt-0.5 text-white/90" />
                <span>Building operational capacity to evaluate and support films</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold text-white">
                <Users size={18} className="shrink-0 mt-0.5 text-white/90" />
                <span>Growing the founding investor community</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold text-white">
                <ShieldCheck size={18} className="shrink-0 mt-0.5 text-white/90" />
                <span>Establishing foundation for recurring platform activity and revenue</span>
              </div>
            </div>
          </div>

          {/* Why Now Card */}
          <div className="relative rounded-3xl bg-card dark:bg-zinc-950 border border-border/80 p-6 sm:p-8 lg:p-10 shadow-md flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-destructive">
                  <Clock3 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-foreground tracking-tight">
                  Why Now?
                </h3>
              </div>
              <p className="text-body-text text-muted-foreground leading-relaxed">
                BFF has established its investor-focused model, developed its
                proprietary evaluation methodology, assembled industry leadership
                and relationships, identified an initial project pipeline, and defined
                the platform experience.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card dark:bg-zinc-900 border-2 border-destructive/60 space-y-2">
              <p className="text-xl font-bold text-destructive">
                The next step is execution.
              </p>
              <p className="text-body-text text-foreground/90 leading-relaxed font-medium">
                This round is intended to help bring the platform to market, prepare
                the first film offerings, and begin the first operating cycle of Big Film Fund.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BFF VS FILM DIFFERENCE CARD
        ===================================================== */}
        <div className="relative rounded-3xl bg-card dark:bg-zinc-950 border border-border/80 p-6 sm:p-8 lg:p-10 shadow-md flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-destructive">
              <Info size={24} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              What is the difference between investing in BFF and investing in a film?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-muted/30 dark:bg-zinc-900 border border-border/60">
              <Building2 size={22} className="text-destructive shrink-0 mt-0.5" />
              <p className="text-body-text text-foreground/90 leading-relaxed font-medium">
                Investors in this offering are purchasing shares in Big Film Fund, Inc. They do not
                automatically receive a direct ownership interest in any individual film.
              </p>
            </div>

            <div className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-muted/30 dark:bg-zinc-900 border border-border/60">
              <Clapperboard size={22} className="text-destructive shrink-0 mt-0.5" />
              <p className="text-body-text text-foreground/90 leading-relaxed font-medium">
                Future film offerings are expected to provide separate opportunities to invest
                in specific film entities through the BFF platform.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            FINAL SECTION CTA (Black & Red Structure)
        ===================================================== */}
        <div className="relative w-full rounded-2xl bg-gradient-to-r from-[#090909] via-[#121212] to-[#171717] border border-zinc-800/80 p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col md:flex-row items-center gap-6 sm:gap-10 overflow-hidden text-left">
          {/* Ambient Red Radial Glow */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#C00000]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Red Glowing Icon Circle */}
          <div className="relative z-10 flex h-16 w-16 md:h-20 md:w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C00000] via-[#470003] to-[#101010] border border-red-500/70 text-white shadow-[0_0_25px_rgba(192,0,0,0.4)]">
            <Clapperboard size={32} strokeWidth={1.7} />
          </div>

          {/* Content Text */}
          <div className="relative z-10 max-w-2xl space-y-2">
            <p className="text-body-text text-white/90 leading-relaxed font-normal">
              Today, you can own part of the company building a future where more people can own part of the movies they believe in.
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              <span className="text-[#C00000]">Join Us</span> at the Beginning.
            </h2>
          </div>

          {/* Decorative Subtle Light Trails on Right */}
          <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none opacity-40 hidden sm:flex flex-col justify-around overflow-hidden">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C00000]/50 to-transparent transform -rotate-12 translate-x-10" />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C00000]/70 to-transparent transform -rotate-12 translate-x-4" />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C00000]/40 to-transparent transform -rotate-12 translate-x-16" />
          </div>
        </div>
      </div>
    </section>
  );
}

