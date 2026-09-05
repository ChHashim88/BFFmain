"use client";

import { useState } from "react";
import { Check, ArrowRight, ChevronDown } from "lucide-react";
import { openWaitlistModal } from "@/components/ui/WaitlistModal";

export function HeroSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-24 px-6 md:px-12 xl:px-24 flex items-center justify-center overflow-hidden bg-white dark:bg-background">
      {/* Hero Background Image - Desktop Only (Hidden on Mobile) */}
      <img
        src="/herooo.png"
        alt="Hero Background"
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[82%] max-h-[640px] w-auto object-contain pointer-events-none z-0 [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]"
      />

      {/* Subtle Bottom Gradient Fade */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-[1]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1350px] items-center gap-12 lg:grid-cols-2">
        <div className="z-10 flex flex-col items-center justify-center space-y-6 text-center max-w-2xl mx-auto lg:mx-0 lg:items-start lg:text-left opacity-100">
          <h1 className="text-h1 text-foreground">
            Film Investing.
            <br />
            <span className="text-destructive">Reimagined</span>
            <br />
            for Investors.
          </h1>

          <div className="flex flex-col items-center lg:items-start space-y-4">
            {/* Subtitle text */}
            <p className="text-subtitle text-foreground/90 max-w-[280px] sm:max-w-md lg:max-w-none">
              Big Film Fund is creating a new way to finance movies – powered by
              a technology platform that connects investors, filmmakers, and
              audiences.
            </p>

            {/* Body copy */}
            <div className="hidden lg:block space-y-3.5 text-body-text text-muted-foreground">
              <p>
                For everyday investors, that opens the door once largely
                reserved for Hollywood studios and industry insiders, to an
                opportunity to own a stake in the movies they believe in, and
                share in their success.
              </p>

              {/* See More / See Less Toggle Button */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-destructive hover:text-destructive/80 transition-all cursor-pointer group py-1"
                >
                  <span>{isExpanded ? "See Less" : "See More"}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : "animate-bounce"
                      }`}
                  />
                </button>
              </div>

              {/* Expandable Content */}
              {isExpanded && (
                <div className="space-y-3.5 pt-1 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="font-semibold text-destructive">
                    But opening access to film investing is the beginning.
                  </p>
                  <p>
                    Our model is designed for investors from the ground up – with
                    clean ownership structures that align incentives with filmmakers
                    and producers (without complex Hollywood recoupment
                    waterfalls), rigorous commercial discipline from start to
                    finish, all delivered with radical transparency.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Callout box / Feature point with slow moving red minimalistic border */}
          <div className="hidden lg:flex relative p-[1px] rounded-xl overflow-hidden shadow-lg group">
            {/* Rotating red gradient border accent */}
            <div className="absolute -inset-[200%] bg-[conic-gradient(from_0deg,transparent_0_280deg,rgba(192,0,0,0.6)_320deg,#C00000_360deg)] animate-border-spin pointer-events-none" />

            {/* Inner content box */}
            <div className="relative w-full flex items-start gap-3.5 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md p-4 rounded-[11px] z-10 border border-border/40">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-destructive rounded-md">
                <Check size={12} strokeWidth={3.5} />
              </div>
              <div>
                <p className="text-base font-bold text-foreground">
                  No more opaque Hollywood economics.
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  This is an opportunity to own part of the company building that
                  future.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-1 w-full">
            <button
              onClick={() => openWaitlistModal("waitlist")}
              className="relative group overflow-hidden cursor-pointer rounded-full bg-[#C00000] px-8 py-4 text-base font-bold text-white shadow-xl border border-red-400/30 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#990000] hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2.5"
            >
              <span className="relative z-10 tracking-wide uppercase text-sm font-black">
                Join Waitlist
              </span>
              <ArrowRight
                size={18}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
              {/* Glass Shimmer Reflection */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


