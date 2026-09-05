"use client";

import React, { useState } from "react";
import { Globe, Share2, Target, Clapperboard, Star, TrendingUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import MobileRadialCarousel from "@/components/ui/mobile-radial-carousel";
import { opportunityTimelineData } from "@/components/sections/TimelineSection";

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
      <div className="mx-auto w-full max-w-[1350px] flex flex-col gap-12 lg:gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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

          {/* Right Column: 6-Step Radial Carousel */}
          <div className="flex flex-col w-full h-full my-auto justify-center items-center">
            <MobileRadialCarousel timelineData={opportunityTimelineData} />
          </div>
        </div>

        {/* Full-Width Structural Shift Card */}
        <div className="relative w-full rounded-3xl bg-gradient-to-r from-[#090909] via-[#121212] to-[#171717] border border-zinc-800/80 p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col md:flex-row items-center gap-6 sm:gap-10 overflow-hidden text-left">
          {/* Ambient Red Radial Glow */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#C00000]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Red Glowing Icon Circle */}
          <div className="relative z-10 flex h-16 w-16 md:h-20 md:w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C00000] via-[#470003] to-[#101010] border border-red-500/70 text-white shadow-[0_0_25px_rgba(192,0,0,0.4)]">
            <TrendingUp size={32} strokeWidth={1.7} />
          </div>

          {/* Content Text */}
          <div className="relative z-10 max-w-4xl space-y-2.5">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Investing itself has undergone a <span className="text-[#C00000]">structural shift.</span>
            </h3>
            <p className="text-zinc-300 leading-relaxed text-sm md:text-base font-normal">
              Platforms did more than open access to startups, real estate, and alternative assets. They created the infrastructure that made those opportunities easier to discover, evaluate, transact, manage, and understand.
            </p>
          </div>

          {/* Subtle Decorative Light Trails */}
          <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none opacity-30 hidden sm:flex flex-col justify-around overflow-hidden">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C00000]/50 to-transparent transform -rotate-12 translate-x-10" />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C00000]/70 to-transparent transform -rotate-12 translate-x-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
