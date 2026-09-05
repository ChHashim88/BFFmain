"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { LucideIcon } from "lucide-react";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: LucideIcon;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
  description?: string;
}

interface MobileRadialCarouselProps {
  timelineData: TimelineItem[];
}

const AUTO_PLAY_INTERVAL = 4000; // 4 seconds

export default function MobileRadialCarousel({ timelineData }: MobileRadialCarouselProps) {
  // continuous step counter so wheel rotates continuously forward without unwinding
  const [stepCounter, setStepCounter] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const totalSteps = timelineData.length;
  // Calculate current active index (0 to 5)
  const activeIndex = ((stepCounter % totalSteps) + totalSteps) % totalSteps;
  const activeData = timelineData[activeIndex];
  const ActiveIcon = activeData.icon;

  // IntersectionObserver to run autoplay only when visible
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry?.isIntersecting ?? false);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goToNextStep = useCallback(() => {
    setStepCounter((prev) => prev + 1);
    setProgress(0);
    startTimeRef.current = performance.now();
  }, []);

  const goToPrevStep = useCallback(() => {
    setStepCounter((prev) => prev - 1);
    setProgress(0);
    startTimeRef.current = performance.now();
  }, []);

  const selectStep = useCallback(
    (targetIndex: number) => {
      setStepCounter((prev) => {
        const currentIdx = ((prev % totalSteps) + totalSteps) % totalSteps;
        let diff = targetIndex - currentIdx;
        // Take shortest rotational direction
        if (diff > totalSteps / 2) diff -= totalSteps;
        if (diff < -totalSteps / 2) diff += totalSteps;
        return prev + diff;
      });
      setProgress(0);
      startTimeRef.current = performance.now();

      // Pause briefly on manual tap
      setIsPaused(true);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = setTimeout(() => setIsPaused(false), 3000);
    },
    [totalSteps]
  );

  // Smooth arc progress fill timer loop
  useEffect(() => {
    if (!isInView || isPaused) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    startTimeRef.current = performance.now() - (progress / 100) * AUTO_PLAY_INTERVAL;

    const updateProgress = (now: number) => {
      if (!startTimeRef.current) startTimeRef.current = now;
      const elapsed = now - startTimeRef.current;
      const currentProgress = Math.min((elapsed / AUTO_PLAY_INTERVAL) * 100, 100);

      setProgress(currentProgress);

      if (elapsed >= AUTO_PLAY_INTERVAL) {
        goToNextStep();
      } else {
        animFrameRef.current = requestAnimationFrame(updateProgress);
      }
    };

    animFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isInView, isPaused, stepCounter, goToNextStep, progress]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const diffX = touchEndX - touchStartX.current;
    const diffY = touchEndY - touchStartY.current;

    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        goToNextStep();
      } else {
        goToPrevStep();
      }
      setIsPaused(true);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = setTimeout(() => setIsPaused(false), 3000);
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Wheel rotation angle: rotate wheel so active step stays at top (0 deg)
  const wheelRotationAngle = -stepCounter * (360 / totalSteps);

  // SVG Geometry
  const size = 320;
  const center = size / 2;
  const radius = 115;
  const strokeWidth = 5;
  const gapDegree = 6;
  const segmentDegree = 360 / totalSteps;
  const arcLength = ((segmentDegree - gapDegree) / 360) * (2 * Math.PI * radius);
  const totalCircumference = 2 * Math.PI * radius;

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-full flex flex-col items-center justify-center py-4 px-2 select-none"
    >
      {/* Top Header Badge */}
      <div className="mb-4 flex items-center gap-2 px-3.5 py-1 rounded-full bg-destructive/10 border border-destructive/25 text-destructive text-xs font-bold tracking-wider uppercase shadow-sm">
        <span className="w-2 h-2 rounded-full bg-destructive animate-ping" />
        <span>Step 0{activeData.id} of 0{totalSteps}</span>
      </div>

      {/* Main Radial System Container */}
      <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] aspect-square flex items-center justify-center">
        
        {/* Rotating Wheel Group (SVG Track + Outer Nodes) */}
        <div
          className="absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `rotate(${wheelRotationAngle}deg)` }}
        >
          {/* SVG Arcs */}
          <svg
            viewBox={`0 0 ${size} ${size}`}
            className="w-full h-full transform -rotate-90"
          >
            {timelineData.map((_, index) => {
              const startAngle = index * segmentDegree + gapDegree / 2;
              const strokeDasharray = `${arcLength} ${totalCircumference - arcLength}`;
              const rotationOffset = startAngle;
              const isActive = index === activeIndex;

              const activeArcLength = (progress / 100) * arcLength;
              const activeDasharray = `${activeArcLength} ${totalCircumference - activeArcLength}`;

              return (
                <g key={index}>
                  {/* Base Track Segment */}
                  <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke={isActive ? "rgba(192, 0, 0, 0.3)" : "currentColor"}
                    strokeWidth={strokeWidth}
                    strokeDasharray={strokeDasharray}
                    strokeLinecap="round"
                    transform={`rotate(${rotationOffset} ${center} ${center})`}
                    className={isActive ? "" : "text-zinc-200 dark:text-zinc-800"}
                  />

                  {/* Active Segment Arc Fill */}
                  {isActive && (
                    <circle
                      cx={center}
                      cy={center}
                      r={radius}
                      fill="none"
                      stroke="#C00000"
                      strokeWidth={strokeWidth + 2}
                      strokeDasharray={activeDasharray}
                      strokeLinecap="round"
                      transform={`rotate(${rotationOffset} ${center} ${center})`}
                      className="transition-all duration-75 drop-shadow-[0_0_8px_rgba(192,0,0,0.8)]"
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* 6 Outer Radial Nodes */}
          {timelineData.map((item, index) => {
            const angleDeg = index * segmentDegree - 90; // Top position is 0 index
            const angleRad = (angleDeg * Math.PI) / 180;
            const x = center + radius * Math.cos(angleRad);
            const y = center + radius * Math.sin(angleRad);
            const isActive = index === activeIndex;
            const ItemIcon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => selectStep(index)}
                aria-label={`View step ${item.id}: ${item.title}`}
                style={{
                  left: `${(x / size) * 100}%`,
                  top: `${(y / size) * 100}%`,
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 group flex items-center justify-center transition-all duration-500 z-30 cursor-pointer ${
                  isActive ? "scale-115 z-40" : "scale-95 opacity-75 hover:opacity-100"
                }`}
              >
                {/* Counter-rotate inner content so icons & text stay perfectly upright! */}
                <div
                  className="flex flex-col items-center justify-center transition-transform duration-700 ease-in-out"
                  style={{ transform: `rotate(${-wheelRotationAngle}deg)` }}
                >
                  <div
                    className={`w-11 h-11 sm:w-13 sm:h-13 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                      isActive
                        ? "bg-[#C00000] text-white shadow-[0_0_24px_rgba(192,0,0,0.7)] border-2 border-white ring-4 ring-[#C00000]/25 scale-110"
                        : "bg-white dark:bg-zinc-900 text-foreground/80 dark:text-white/80 border border-border hover:border-destructive/50"
                    }`}
                  >
                    <ItemIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <span
                    className={`mt-1 text-[10px] sm:text-xs font-mono font-bold tracking-tight px-1.5 py-0.5 rounded-full transition-colors ${
                      isActive
                        ? "bg-destructive text-white font-extrabold shadow-sm"
                        : "text-muted-foreground bg-background/80 dark:bg-zinc-900/80 border border-border/50"
                    }`}
                  >
                    0{item.id}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Center Active Content Display Card */}
        <div className="absolute inset-0 m-auto w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[240px] lg:h-[240px] rounded-full bg-background/95 dark:bg-zinc-950/95 border-2 border-destructive/40 shadow-[0_0_30px_rgba(192,0,0,0.15)] flex flex-col items-center justify-center p-4 sm:p-6 text-center z-20 backdrop-blur-xl transition-all duration-500">
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-destructive/10 border border-destructive/30 flex items-center justify-center mb-1.5 text-destructive shadow-inner">
            <ActiveIcon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 animate-pulse" />
          </div>

          <h4 className="text-base sm:text-lg lg:text-xl font-black text-foreground tracking-tight leading-snug line-clamp-1">
            {activeData.title}
          </h4>

          <span className="text-[10px] sm:text-xs font-mono font-bold text-destructive mt-1 uppercase tracking-widest bg-destructive/10 px-2 py-0.5 rounded-full border border-destructive/20">
            {activeData.category}
          </span>
        </div>
      </div>

      {/* Rich Description Box below Radial Wheel */}
      <div className="mt-8 text-center max-w-[320px] sm:max-w-[400px] lg:max-w-[460px] px-4 min-h-[64px] flex items-center justify-center bg-muted/30 dark:bg-muted/10 border border-border/60 p-4 rounded-2xl shadow-sm transition-all duration-500">
        <p className="text-xs sm:text-sm lg:text-base text-foreground/90 leading-relaxed transition-opacity duration-300 font-medium">
          {activeData.description || activeData.content}
        </p>
      </div>

      {/* 6 Step Dot Navigation Indicator */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {timelineData.map((_, index) => (
          <button
            key={index}
            onClick={() => selectStep(index)}
            aria-label={`Go to step ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              index === activeIndex
                ? "w-7 sm:w-9 bg-[#C00000] shadow-[0_0_10px_rgba(192,0,0,0.5)]"
                : "w-2.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
