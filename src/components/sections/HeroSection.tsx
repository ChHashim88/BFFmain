"use client";

import { useState, useEffect } from "react";
import { Check, ArrowRight, ChevronDown } from "lucide-react";
import { openWaitlistModal } from "@/components/ui/WaitlistModal";
import { cn } from "@/lib/utils";

const LINE_1 = "Film Investing.";
const LINE_2 = "Reimagined";
const LINE_3 = "for Investors.";

export function HeroSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [typedCount, setTypedCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setTypedCount(39);
      setShowCursor(false);
      return;
    }

    let timeoutId: NodeJS.Timeout;

    const initialDelay = 120;

    const scheduleNextChar = (currentCount: number) => {
      if (currentCount >= 39) {
        setShowCursor(false);
        return;
      }

      let delay = 60;

      if (currentCount === 0) {
        delay = initialDelay;
      } else if (currentCount === 15) {
        delay = 380;
      } else if (currentCount === 25) {
        delay = 280;
      }

      timeoutId = setTimeout(() => {
        const nextCount = currentCount + 1;
        setTypedCount(nextCount);
        if (nextCount >= 39) {
          // Immediately hide cursor when the last character finishes
          setShowCursor(false);
        }
        scheduleNextChar(nextCount);
      }, delay);
    };

    scheduleNextChar(0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const line1Count = Math.min(typedCount, 15);
  const line2Count = Math.max(0, Math.min(typedCount - 15, 10));
  const line3Count = Math.max(0, Math.min(typedCount - 25, 14));

  const CursorIndicator = () => (
    <span
      className={cn(
        "inline-block w-[3px] sm:w-[4px] md:w-[5px] h-[0.82em] bg-destructive ml-0.5 sm:ml-1 align-middle -translate-y-[0.04em] rounded-full transition-opacity duration-300 animate-typewriter-cursor shrink-0",
        showCursor ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      aria-hidden="true"
    />
  );

  return (
    <section className="relative w-full min-h-[100svh] h-[100svh] lg:h-auto lg:min-h-0 pt-24 pb-12 lg:pt-40 lg:pb-24 px-6 md:px-12 xl:px-24 flex flex-col justify-center items-center overflow-hidden bg-white dark:bg-background">
      {/* Hero Background Image - Mobile Light Mode (< lg) */}
      <img
        src="/mobhero.jpeg"
        alt="Hero Background Mobile Light"
        loading="eager"
        decoding="sync"
        className="block dark:hidden lg:hidden absolute inset-0 w-full h-full object-cover object-center opacity-45 pointer-events-none z-0 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
      />

      {/* Hero Background Image - Mobile Dark Mode (< lg) */}
      <img
        src="/mobherodark.jpeg"
        alt="Hero Background Mobile Dark"
        loading="eager"
        decoding="sync"
        className="hidden dark:block dark:lg:hidden absolute inset-0 w-full h-full object-cover object-center opacity-50 pointer-events-none z-0 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
      />

      {/* Mobile Subtle Contrast Overlay for Crisp Text Readability */}
      <div className="block lg:hidden absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white dark:from-background/80 dark:via-background/50 dark:to-background pointer-events-none z-[1]" />

      {/* Hero Background Image - Desktop Light Mode (>= lg) */}
      <img
        src="/herooo.png"
        alt="Hero Background Desktop Light"
        loading="eager"
        decoding="sync"
        className="hidden lg:block dark:hidden absolute inset-0 w-full h-full object-cover object-right pointer-events-none z-0 opacity-90 [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
      />

      {/* Hero Background Image - Desktop Dark Mode (>= lg) */}
      <img
        src="/darkhe.PNG"
        alt="Hero Background Desktop Dark"
        loading="eager"
        decoding="sync"
        className="hidden dark:lg:block absolute inset-0 w-full h-full object-cover object-right pointer-events-none z-0 opacity-85 [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
      />

      {/* Subtle Bottom Gradient Fade */}
      <div className="absolute inset-x-0 bottom-0 h-16 lg:h-28 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-background dark:via-background/80 pointer-events-none z-[2]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1350px] items-center gap-8 lg:gap-12 lg:grid-cols-2">
        <div className="z-10 flex flex-col items-center justify-center space-y-5 sm:space-y-6 text-center max-w-2xl mx-auto lg:mx-0 lg:items-start lg:text-left opacity-100">

          {/* Main Heading with Zero Layout Shift & Smooth Self-Reserving Typewriter Animation */}
          <div className="relative max-w-[340px] sm:max-w-[420px] lg:max-w-none mx-auto lg:mx-0">
            <h1
              className="text-[clamp(2.35rem,10.5vw,3rem)] lg:text-h1 text-foreground leading-[1.0] lg:leading-[1.05] font-semibold text-center lg:text-left"
              aria-label="Film Investing. Reimagined for Investors."
            >
              {/* Line 1 */}
              <span className="block whitespace-pre-wrap" aria-hidden="true">
                <span>{LINE_1.slice(0, line1Count)}</span>
                {showCursor && typedCount <= 15 && <CursorIndicator />}
                <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
                  {LINE_1.slice(line1Count)}
                </span>
              </span>

              {/* Line 2 */}
              <span className="block text-destructive whitespace-pre-wrap" aria-hidden="true">
                <span>{LINE_2.slice(0, line2Count)}</span>
                {showCursor && typedCount > 15 && typedCount <= 25 && <CursorIndicator />}
                <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
                  {LINE_2.slice(line2Count)}
                </span>
              </span>

              {/* Line 3 */}
              <span className="block whitespace-pre-wrap" aria-hidden="true">
                <span>{LINE_3.slice(0, line3Count)}</span>
                {showCursor && typedCount > 25 && <CursorIndicator />}
                <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
                  {LINE_3.slice(line3Count)}
                </span>
              </span>
            </h1>
          </div>

          <div className="flex flex-col items-center lg:items-start space-y-4">
            {/* Subtitle text */}
            <p className="text-[clamp(1rem,4.2vw,1.125rem)] lg:text-subtitle text-foreground/90 leading-[1.5] lg:leading-[1.25] font-normal max-w-[340px] sm:max-w-md lg:max-w-none text-center lg:text-left">
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
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-2 lg:pt-1 w-full">
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


