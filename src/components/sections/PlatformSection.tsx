"use client";

import { useState } from "react";
import { ChevronDown, Play } from "lucide-react";

interface PlatformPointProps {
  shortText?: string;
  fullText: string;
  highlight?: boolean;
}

function PlatformPointItem({ shortText, fullText, highlight }: PlatformPointProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!shortText) {
    return (
      <div className="flex flex-col space-y-2 group bg-muted/40 dark:bg-muted/10 border border-border/50 p-5 sm:p-6 rounded-2xl lg:bg-transparent lg:border-transparent lg:p-0 lg:rounded-none transition-colors hover:bg-muted/60 dark:hover:bg-muted/20">
        <p
          className={`text-body-text transition-colors duration-300 ${highlight
            ? "font-medium text-destructive"
            : "text-muted-foreground group-hover:text-foreground"
            }`}
        >
          {fullText}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-2 group bg-muted/40 dark:bg-muted/10 border border-border/50 p-5 sm:p-6 rounded-2xl lg:bg-transparent lg:border-transparent lg:p-0 lg:rounded-none transition-colors hover:bg-muted/60 dark:hover:bg-muted/20">
      <p className="text-body-text text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
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
            className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
              }`}
          />
        </button>
      </p>
    </div>
  );
}

export function PlatformSection() {
  return (
    <section
      id="platform"
      className="relative w-full scroll-mt-24 bg-background py-16 md:py-20 lg:py-24 px-6 md:px-12 xl:px-24 flex flex-col justify-center"
    >
      <div className="mx-auto w-full max-w-[1350px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side - Text & Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1 mt-8 lg:mt-0 lg:pr-8 xl:pr-16 text-center lg:text-left">
            <div>
              <h3 className="text-h3 text-destructive uppercase tracking-tight font-bold mb-3">
                THE PLATFORM
              </h3>
              <h2 className="text-h2 text-foreground dark:text-white drop-shadow-sm">
                Discover.
                <span className="text-destructive"> Invest.</span>
                <br />
                Follow the Story.
              </h2>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 mt-2">
              <PlatformPointItem fullText="Big Film Fund brings the film investment experience together in one place." />
              <PlatformPointItem
                shortText="Through the BFF platform, investors can discover a curated selection of films, explore the creative case..."
                fullText="Through the BFF platform, investors can discover a curated selection of films, explore the creative and commercial case behind each project, and choose the opportunities they believe in."
              />
              <PlatformPointItem
                shortText="When investors participate in a film offering, their capital is pooled specifically for that project..."
                fullText="When investors participate in a film offering, their capital is pooled specifically for that project. They can invest in one film or build a personal portfolio across multiple standalone opportunities over time."
              />
              <PlatformPointItem
                shortText="And the experience doesn’t end when the investment is made. Through the BFF dashboard..."
                fullText="And the experience doesn’t end when the investment is made. Through the BFF dashboard, investors can follow each film’s progress from financing through production, release, and revenue—with access to project milestones, investor updates, financial reporting, and distributions."
              />
              <PlatformPointItem
                highlight
                fullText="Choose the films. Follow the journey. See how your investment performs."
              />
            </div>
          </div>

          {/* Right Side - Stacked Video Player with Image 2.png Thumbnail */}
          <div className="relative w-full aspect-video lg:aspect-[4/3] xl:aspect-[16/10] lg:ml-4 sm:ml-8 order-1 lg:order-2">
            <div className="absolute inset-y-6 -left-6 w-full bg-zinc-200 dark:bg-zinc-900 border border-border/40 shadow-2xl z-0 hidden sm:block rounded-2xl" />
            <div className="absolute inset-y-3 -left-3 w-full bg-zinc-300 dark:bg-zinc-900 border border-border/50 shadow-2xl z-10 hidden sm:block rounded-2xl" />

            <div className="absolute inset-0 w-full h-full rounded-2xl bg-zinc-100 dark:bg-zinc-950 border border-border shadow-2xl overflow-hidden z-20 flex items-center justify-center group cursor-pointer transition-transform duration-500 hover:-translate-y-2 hover:translate-x-2">
              {/* Thumbnail Image 2.png */}
              <img
                src="/3.png"
                alt="BFF Platform Video Overview"
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
                  Watch Platform Overview
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
