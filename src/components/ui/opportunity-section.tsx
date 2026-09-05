"use client";

import React, { useState } from "react";
import { Globe, Share2, Target, Clapperboard, Star, TrendingUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function ExpandablePoint({
  icon: Icon,
  shortText,
  fullText,
  isBordered = true,
}: {
  icon: React.ElementType;
  shortText: string;
  fullText: string;
  isBordered?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={cn("flex gap-5 items-start pb-5", isBordered && "border-b border-border/50")}>
      <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center shrink-0 mt-0.5">
        <Icon className="w-[18px] h-[18px] text-destructive" strokeWidth={2.5} />
      </div>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-1">
        {isExpanded ? fullText : shortText}{" "}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          title={isExpanded ? "Show Less" : "Show More"}
          aria-label={isExpanded ? "Show Less" : "Show More"}
          className="inline-flex items-center justify-center h-6 w-6 rounded-full text-destructive hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all cursor-pointer ml-1 align-middle border border-border"
        >
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </p>
    </div>
  );
}

export default function OpportunitySection() {
  return (
    <section
      id="opportunity"
      className="relative scroll-mt-24 w-full bg-background py-16 md:py-20 lg:py-24 px-6 md:px-12 xl:px-24 flex justify-center"
    >
      <div className="mx-auto w-full max-w-[1350px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h3 className="text-h3 text-destructive uppercase tracking-tight font-bold mb-3">
                THE OPPORTUNITY
              </h3>
              <h2 className="text-h2 text-foreground dark:text-white drop-shadow-sm">
                Film is Ready for <br />
                <span className="text-destructive">Modern Investment Infrastructure.</span>
              </h2>
            </div>

            <div className="flex flex-col space-y-6 pt-6">
              {/* Point 1 */}
              <div className="flex gap-5 items-start pb-5 border-b border-border/50">
                <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center shrink-0 mt-0.5">
                  <Globe className="w-[18px] h-[18px] text-destructive" strokeWidth={2.5} />
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-1">
                  Film is a global business—financed, produced, distributed, and consumed in markets
                  around the world.
                </p>
              </div>

              {/* Point 2 */}
              <ExpandablePoint
                icon={Share2}
                shortText="Yet film investing remains largely fragmented: built around private networks, one-off deals..."
                fullText="Yet film investing remains largely fragmented: built around private networks, one-off deals, inconsistent structures, and investor experiences that begin and end with each individual project."
              />

              {/* Point 3 */}
              <ExpandablePoint
                icon={Target}
                shortText="The opportunity is not simply to give more people access to film investments. It is to transform how..."
                fullText="The opportunity is not simply to give more people access to film investments. It is to transform how those opportunities are sourced, evaluated, structured, financed, brought to market, and experienced by investors."
              />

              {/* Point 4 */}
              <div className="flex gap-5 items-start pb-5 border-b border-border/50">
                <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center shrink-0 mt-0.5">
                  <Clapperboard className="w-[18px] h-[18px] text-destructive" strokeWidth={2.5} />
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-1">
                  <span className="font-bold text-destructive">Big Film Fund</span> is building the
                  model and platform to make that transformation possible.
                </p>
              </div>

              {/* Point 5 */}
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center shrink-0 mt-0.5">
                  <Star className="w-[18px] h-[18px] text-destructive" strokeWidth={2.5} />
                </div>
                <p className="text-sm md:text-base text-destructive font-bold leading-relaxed pt-1">
                  Film is ready for that transformation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 w-full h-full lg:pl-6 my-auto justify-center">
            {/* Stacked Video Player */}
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] xl:aspect-[16/10] lg:ml-4 sm:ml-8">
              {/* Back layers for stack effect */}
              <div className="absolute inset-y-6 -left-6 w-full bg-zinc-200 dark:bg-zinc-900 border border-border/40 shadow-2xl z-0 hidden sm:block" />
              <div className="absolute inset-y-3 -left-3 w-full bg-zinc-300 dark:bg-zinc-900 border border-border/50 shadow-2xl z-10 hidden sm:block" />

              {/* Main Video frame */}
              <div className="absolute inset-0 w-full h-full bg-zinc-100 dark:bg-zinc-950 border border-border shadow-2xl overflow-hidden z-20 flex items-center justify-center group transition-transform duration-500 hover:-translate-y-2 hover:translate-x-2">
                <div className="absolute inset-0 bg-black/10 dark:bg-black/40 group-hover:bg-black/5 dark:group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <span className="text-2xl sm:text-4xl font-black tracking-[0.2em] text-foreground/40 dark:text-white/30 uppercase z-20 transition-transform duration-500 group-hover:scale-105">
                  Video Player
                </span>
              </div>
            </div>

            {/* Dark Liquid Glass Container */}
            <div className="relative w-full rounded-3xl bg-zinc-950 border border-white/10 p-8 md:p-10 shadow-2xl overflow-hidden lg:ml-4 sm:ml-8">
              {/* Subtle glass reflection effect */}
              <div className="relative z-10 flex flex-col sm:flex-row gap-6 sm:items-start">
                <div className="w-14 h-14 shrink-0 rounded-xl border border-white/20 bg-white/10 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
                    Investing itself has undergone a structural shift.
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                    Platforms did more than open access to startups, real estate, and alternative
                    assets. They created the infrastructure that made those opportunities easier to
                    discover, evaluate, transact, manage, and understand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
