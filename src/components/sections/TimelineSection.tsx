"use client";

import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import MobileRadialCarousel from "@/components/ui/mobile-radial-carousel";
import {
  Search,
  FileText,
  Blocks,
  CircleDollarSign,
  Rocket,
  Users,
  Play,
} from "lucide-react";

export const opportunityTimelineData = [
  {
    id: 1,
    title: "Source",
    date: "Jan 2026",
    content: "High potential film projects.",
    description: "Curating studio-grade film projects with strong commercial potential and vetted talent.",
    category: "Sourcing & Curation",
    icon: Search,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Evaluate",
    date: "Feb 2026",
    content: "Disciplined commercial evaluation.",
    description: "Rigorous financial analysis, distribution modeling, and independent risk assessment.",
    category: "Commercial Discipline",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Structure",
    date: "Mar 2026",
    content: "Investor-aligned legal and financial structures.",
    description: "Creating clear, investor-first ownership models and transparent waterfall mechanics.",
    category: "Investor Alignment",
    icon: Blocks,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 75,
  },
  {
    id: 4,
    title: "Finance",
    date: "Apr 2026",
    content: "Access capital efficiently.",
    description: "Seamless fractional capital allocation allowing direct participation in vetted films.",
    category: "Efficient Capitalization",
    icon: CircleDollarSign,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 50,
  },
  {
    id: 5,
    title: "Bring To Market",
    date: "May 2026",
    content: "Strategic distribution and positioning.",
    description: "Executing global theatrical, digital, and streaming sales strategies for maximum reach.",
    category: "Strategic Distribution",
    icon: Rocket,
    relatedIds: [4, 6],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 6,
    title: "Investor Experience",
    date: "Jun 2026",
    content: "Transparent ongoing and informative.",
    description: "Real-time performance metrics, automated revenue updates, and complete transparency.",
    category: "Radical Transparency",
    icon: Users,
    relatedIds: [5],
    status: "pending" as const,
    energy: 10,
  },
];

export function TimelineSection() {
  return (
    <section className="relative w-full bg-background py-16 md:py-20 lg:py-24 px-6 md:px-12 xl:px-24 flex justify-center overflow-hidden">
      <div className="mx-auto w-full max-w-[1350px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left side text */}
        <div className="flex flex-col gap-6 lg:pr-8 xl:pr-16 z-10 text-foreground order-1 lg:order-1 text-center lg:text-left">
          <div>
            <h3 className="text-h3 text-destructive uppercase tracking-tight font-bold mb-3">
              FILM IS NEXT
            </h3>
            <h2 className="text-h2 text-foreground dark:text-white drop-shadow-sm">
              Building the System for <br />
              <span className="text-destructive">Modern Film Investing</span>
            </h2>
          </div>

          <div className="space-y-4 text-body-text text-muted-foreground transition-colors duration-300">
            <p>
              Bringing film investing into the modern era requires more than
              putting traditional film deals online. It requires
              investor-focused structures, disciplined commercial evaluation, a
              repeatable project pipeline, and a platform that brings the entire
              investment experience together.
            </p>
            <p className="font-semibold text-destructive">
              That is the system BFF is building.
            </p>
          </div>
        </div>

        {/* Right side Stacked Video Player Box with 4.jpeg Thumbnail */}
        <div className="relative w-full aspect-video lg:aspect-[4/3] xl:aspect-[16/10] order-2 lg:order-2">
          {/* Back layers for stack effect */}
          <div className="absolute inset-y-6 -left-6 w-full bg-zinc-200 dark:bg-zinc-900 border border-border/40 shadow-2xl z-0 hidden sm:block rounded-2xl" />
          <div className="absolute inset-y-3 -left-3 w-full bg-zinc-300 dark:bg-zinc-900 border border-border/50 shadow-2xl z-10 hidden sm:block rounded-2xl" />

          {/* Main Video frame */}
          <div className="absolute inset-0 w-full h-full rounded-2xl bg-zinc-100 dark:bg-zinc-950 border border-border shadow-2xl overflow-hidden z-20 flex items-center justify-center group cursor-pointer transition-transform duration-500 hover:-translate-y-2 hover:translate-x-2">
            {/* Thumbnail Image 4.jpeg */}
            <img
              src="/4.jpeg"
              alt="Film Is Next Overview"
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
                Watch Overview
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
