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
}

interface MobileRadialCarouselProps {
  timelineData: TimelineItem[];
}

const AUTO_PLAY_INTERVAL = 4000; // 4 seconds per step

export default function MobileRadialCarousel({ timelineData }: MobileRadialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const totalSteps = timelineData.length;

  // IntersectionObserver to pause when off-screen
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

  // Handle step progression
  const goToNextStep = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSteps);
    setProgress(0);
    startTimeRef.current = performance.now();
  }, [totalSteps]);

  const goToPrevStep = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSteps) % totalSteps);
    setProgress(0);
    startTimeRef.current = performance.now();
  }, [totalSteps]);

  const selectStep = useCallback((index: number) => {
    setActiveIndex(index);
    setProgress(0);
    startTimeRef.current = performance.now();
    // Brief pause on user interaction
    setIsPaused(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setIsPaused(false), 2000);
  }, []);

  // Smooth arc progress timer loop
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
  }, [isInView, isPaused, activeIndex, goToNextStep, progress]);

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

    // Horizontal swipe threshold
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        goToNextStep();
      } else {
        goToPrevStep();
      }
      setIsPaused(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setIsPaused(false), 2000);
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  const activeData = timelineData[activeIndex];
  const ActiveIcon = activeData.icon;

  // Arc calculation for SVG
  const size = 300; // SVG viewBox size
  const center = size / 2; // 150
  const radius = 110;
  const strokeWidth = 5;
  const gapDegree = 6;
  const segmentDegree = 360 / totalSteps; // 60 deg
  const arcLength = ((segmentDegree - gapDegree) / 360) * (2 * Math.PI * radius);
  const totalCircumference = 2 * Math.PI * radius;

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-full flex flex-col items-center justify-center py-6 px-2 select-none"
    >
      {/* Step Counter Badge */}
      <div className="mb-3 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-[11px] font-bold tracking-wider uppercase">
        Step 0{activeData.id} / 0{totalSteps}
      </div>

      {/* Main Radial System Container */}
      <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] aspect-square flex items-center justify-center">
        {/* SVG Track & Arcs */}
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0 w-full h-full transform -rotate-90 transition-transform duration-700 ease-in-out"
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
                {/* Inactive Segment Arc */}
                <circle
                  cx={center}
                  cy={center}
                  r={radius}
                  fill="none"
                  stroke={isActive ? "rgba(192, 0, 0, 0.25)" : "currentColor"}
                  strokeWidth={strokeWidth}
                  strokeDasharray={strokeDasharray}
                  strokeLinecap="round"
                  transform={`rotate(${rotationOffset} ${center} ${center})`}
                  className={isActive ? "" : "text-zinc-200 dark:text-zinc-800"}
                />

                {/* Active Progress Arc Fill */}
                {isActive && (
                  <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke="#C00000"
                    strokeWidth={strokeWidth + 1}
                    strokeDasharray={activeDasharray}
                    strokeLinecap="round"
                    transform={`rotate(${rotationOffset} ${center} ${center})`}
                    className="transition-all duration-75"
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Center Active Content Card */}
        <div className="absolute inset-0 m-auto w-[170px] h-[170px] sm:w-[210px] sm:h-[210px] lg:w-[230px] lg:h-[230px] rounded-full bg-background/95 dark:bg-zinc-950/95 border border-border/80 shadow-2xl flex flex-col items-center justify-center p-3 sm:p-5 text-center z-20 backdrop-blur-md transition-all duration-500">
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-destructive/10 border border-destructive/20 flex items-center justify-center mb-1 text-destructive">
            <ActiveIcon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 animate-pulse" />
          </div>

          <h4 className="text-sm sm:text-base lg:text-lg font-bold text-foreground leading-snug line-clamp-2 px-1">
            {activeData.title}
          </h4>

          <span className="text-[10px] sm:text-xs font-mono font-semibold text-destructive mt-1 uppercase tracking-wider">
            {activeData.category}
          </span>
        </div>

        {/* 6 Outer Radial Nodes */}
        {timelineData.map((item, index) => {
          const angleDeg = index * segmentDegree - 90; // Start at top
          const angleRad = (angleDeg * Math.PI) / 180;
          const nodeRadius = radius;
          const x = center + nodeRadius * Math.cos(angleRad);
          const y = center + nodeRadius * Math.sin(angleRad);
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
                isActive ? "scale-110 z-40" : "scale-100 opacity-80 hover:opacity-100"
              }`}
            >
              {/* Node Outer Circle */}
              <div
                className={`w-11 h-11 sm:w-13 sm:h-13 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                  isActive
                    ? "bg-[#C00000] text-white shadow-[0_0_22px_rgba(192,0,0,0.6)] border-2 border-white/40 ring-4 ring-[#C00000]/20"
                    : "bg-white dark:bg-zinc-900 text-foreground/80 dark:text-white/80 border border-border hover:border-destructive/50"
                }`}
              >
                <ItemIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </div>

              {/* Step Number Tag */}
              <span
                className={`absolute -bottom-4 sm:-bottom-5 text-[10px] sm:text-xs font-mono font-bold tracking-tight px-1 rounded ${
                  isActive
                    ? "text-destructive font-extrabold scale-110"
                    : "text-muted-foreground"
                }`}
              >
                0{item.id}
              </span>
            </button>
          );
        })}
      </div>

      {/* Description text right below radial system */}
      <div className="mt-8 text-center max-w-[280px] sm:max-w-[380px] lg:max-w-[420px] px-2 min-h-[54px] flex items-center justify-center">
        <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed transition-opacity duration-300">
          {activeData.content}
        </p>
      </div>

      {/* 6 Step Dot Indicator */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {timelineData.map((_, index) => (
          <button
            key={index}
            onClick={() => selectStep(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-6 sm:w-8 bg-[#C00000]"
                : "w-2 sm:w-2.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
