"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
          className={`text-body-text transition-colors duration-300 ${
            highlight
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
            className={`transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
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
      </div>
    </section>
  );
}
