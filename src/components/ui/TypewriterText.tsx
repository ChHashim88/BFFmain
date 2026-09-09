"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number; // ms per character (default: 78ms, target 70-90ms)
  initialDelay?: number; // ms delay before typing starts (default: 150ms)
  completionHoldDelay?: number; // ms hold full text + blinking cursor before hiding (default: 1000ms)
  cursorColor?: string;
  hideCursorOnComplete?: boolean;
  as?: React.ElementType;
}

export function TypewriterText({
  text,
  className = "",
  speed = 78,
  initialDelay = 150,
  completionHoldDelay = 1000,
  cursorColor = "bg-destructive",
  hideCursorOnComplete = true,
  as: Component = "h3",
}: TypewriterTextProps) {
  const [typedCount, setTypedCount] = useState(0);
  const [cursorState, setCursorState] = useState<"hidden" | "typing" | "holding" | "finished">("hidden");
  
  const containerRef = useRef<HTMLDivElement>(null);
  const hasStartedRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || hasStartedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStartedRef.current) {
          hasStartedRef.current = true;

          // Respect prefers-reduced-motion
          const prefersReduced =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

          if (prefersReduced) {
            setTypedCount(text.length);
            setCursorState("finished");
            return;
          }

          setCursorState("typing");
          setTypedCount(0);

          let charIndex = 0;
          let lastTime = performance.now();
          let nextDelay = initialDelay;

          const tick = (now: number) => {
            const elapsed = now - lastTime;

            if (elapsed >= nextDelay) {
              if (charIndex < text.length) {
                charIndex += 1;
                setTypedCount(charIndex);
                lastTime = now;

                // Subtle natural human tactile rhythm (78ms ± 4ms) without noticeable speed jumps
                const jitter = (Math.random() - 0.5) * 8;
                nextDelay = Math.max(68, Math.min(88, speed + jitter));
              }

              if (charIndex >= text.length) {
                // Completed typing all characters: hold state with blinking cursor
                setCursorState("holding");

                // Hold visible text + cursor for ~1000ms before fading cursor out
                timerIdRef.current = setTimeout(() => {
                  if (hideCursorOnComplete) {
                    setCursorState("finished");
                  }
                }, completionHoldDelay);

                return;
              }
            }

            rafIdRef.current = requestAnimationFrame(tick);
          };

          rafIdRef.current = requestAnimationFrame((now) => {
            lastTime = now;
            rafIdRef.current = requestAnimationFrame(tick);
          });
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      if (timerIdRef.current) clearTimeout(timerIdRef.current);
    };
  }, [text, speed, initialDelay, completionHoldDelay, hideCursorOnComplete]);

  const displayedText = text.slice(0, typedCount);
  const isCursorVisible = cursorState === "typing" || cursorState === "holding";

  return (
    <div ref={containerRef} className="relative inline-block max-w-full">
      {/* Ghost element for 100% zero layout shift & stable dimensions */}
      <Component className={cn("invisible select-none pointer-events-none whitespace-nowrap", className)} aria-hidden="true">
        {text}
      </Component>

      {/* Visible typewriter text container */}
      <Component className={cn("absolute inset-0 left-0 top-0 whitespace-nowrap flex items-center justify-center lg:justify-start", className)}>
        <span className="inline-flex items-center align-baseline">
          <span>{displayedText}</span>
          {isCursorVisible && (
            <span
              className={cn(
                "inline-block w-[2.5px] sm:w-[3.5px] h-[0.8em] ml-1 align-baseline rounded-full transition-opacity duration-300 animate-typewriter-cursor shrink-0",
                cursorColor
              )}
              aria-hidden="true"
            />
          )}
        </span>
      </Component>
    </div>
  );
}
