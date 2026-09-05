"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { LucideIcon, ArrowRight, Zap } from "lucide-react";

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

const AUTO_PLAY_INTERVAL = 4000; // 4 seconds per step

export default function MobileRadialCarousel({ timelineData }: MobileRadialCarouselProps) {
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
  const activeIndex = ((stepCounter % totalSteps) + totalSteps) % totalSteps;
  const activeData = timelineData[activeIndex];
  const ActiveIcon = activeData.icon;

  // IntersectionObserver to pause when off screen
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
        if (diff > totalSteps / 2) diff -= totalSteps;
        if (diff < -totalSteps / 2) diff += totalSteps;
        return prev + diff;
      });
      setProgress(0);
      startTimeRef.current = performance.now();

      setIsPaused(true);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = setTimeout(() => setIsPaused(false), 3500);
    },
    [totalSteps]
  );

  // Smooth arc progress animation loop
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
      pauseTimerRef.current = setTimeout(() => setIsPaused(false), 3500);
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Continuous wheel rotation angle
  const wheelRotationAngle = -stepCounter * (360 / totalSteps);

  // SVG Geometry for Large Radial Orbit
  const size = 500;
  const center = size / 2; // 250
  const radius = 185;
  const strokeWidth = 1.5;
  const gapDegree = 8;
  const segmentDegree = 360 / totalSteps;
  const arcLength = ((segmentDegree - gapDegree) / 360) * (2 * Math.PI * radius);
  const totalCircumference = 2 * Math.PI * radius;

  const getStatusBadge = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":
        return { label: "COMPLETED", bg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" };
      case "in-progress":
        return { label: "IN PROGRESS", bg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20" };
      default:
        return { label: "PENDING", bg: "bg-zinc-500/10 text-zinc-500 border-zinc-500/20" };
    }
  };

  const statusBadge = getStatusBadge(activeData.status);

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-full flex flex-col items-center justify-center py-4 px-2 select-none"
    >
      {/* Radial System Container */}
      <div className="relative w-full max-w-[420px] sm:max-w-[540px] lg:max-w-[620px] aspect-square flex items-center justify-center">
        
        {/* Rotating Wheel Group (SVG Track + Outer Nodes) */}
        <div
          className="absolute inset-0 w-full h-full transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
          style={{ transform: `rotate(${wheelRotationAngle}deg)` }}
        >
          {/* SVG Arcs - Thin Minimalist Lines */}
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
                  {/* Thin Base Track Segment */}
                  <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke={isActive ? "rgba(192, 0, 0, 0.4)" : "currentColor"}
                    strokeWidth={strokeWidth}
                    strokeDasharray={strokeDasharray}
                    strokeLinecap="round"
                    transform={`rotate(${rotationOffset} ${center} ${center})`}
                    className={isActive ? "" : "text-zinc-200 dark:text-zinc-800/80"}
                  />

                  {/* Active Segment Arc Fill */}
                  {isActive && (
                    <circle
                      cx={center}
                      cy={center}
                      r={radius}
                      fill="none"
                      stroke="#C00000"
                      strokeWidth={strokeWidth + 1.5}
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

          {/* 6 Outer Radial Nodes */}
          {timelineData.map((item, index) => {
            const angleDeg = index * segmentDegree - 90;
            const angleRad = (angleDeg * Math.PI) / 180;
            const x = center + radius * Math.cos(angleRad);
            const y = center + radius * Math.sin(angleRad);
            const isActive = index === activeIndex;
            const ItemIcon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => selectStep(index)}
                aria-label={`View step: ${item.title}`}
                style={{
                  left: `${(x / size) * 100}%`,
                  top: `${(y / size) * 100}%`,
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 group flex items-center justify-center transition-all duration-500 z-30 cursor-pointer ${
                  isActive ? "scale-110 z-40" : "scale-95 opacity-70 hover:opacity-100"
                }`}
              >
                {/* Counter-rotate inner content so icons remain upright */}
                <div
                  className="flex items-center justify-center transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
                  style={{ transform: `rotate(${-wheelRotationAngle}deg)` }}
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-[#C00000] text-white border-2 border-white shadow-lg scale-105"
                        : "bg-white dark:bg-zinc-900 text-foreground/75 dark:text-white/75 border border-border hover:border-destructive/50"
                    }`}
                  >
                    <ItemIcon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* PERFECT CIRCULAR CENTER SPHERE (rounded-full with compact scaled content & zero overflow) */}
        <div className="absolute inset-0 m-auto w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[340px] lg:h-[340px] rounded-full bg-background/95 dark:bg-zinc-950/95 border border-border/80 shadow-2xl flex flex-col items-center justify-center p-3 sm:p-5 text-center z-20 backdrop-blur-xl transition-all duration-500 overflow-hidden">
          
          {/* Status Badge */}
          <span className={`px-2 py-0.5 text-[8px] sm:text-[9px] font-mono font-bold rounded-full border mb-1 ${statusBadge.bg}`}>
            {statusBadge.label}
          </span>

          {/* Icon */}
          <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-destructive/10 border border-destructive/20 flex items-center justify-center text-destructive shrink-0 mb-0.5">
            <ActiveIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300" />
          </div>

          {/* Category */}
          <span className="text-[9px] sm:text-[10px] font-mono font-semibold text-destructive uppercase tracking-wider">
            {activeData.category}
          </span>

          {/* Title */}
          <h4 className="text-xs sm:text-sm lg:text-base font-bold text-foreground tracking-tight leading-tight line-clamp-1 my-0.5">
            {activeData.title}
          </h4>

          {/* Compact Description tailored for circular fit */}
          <p className="text-[10px] sm:text-xs text-muted-foreground leading-snug font-medium line-clamp-2 px-3 my-0.5 max-w-[92%]">
            {activeData.description || activeData.content}
          </p>

          {/* Compact Energy Level Bar */}
          <div className="w-[85%] flex flex-col gap-0.5 mt-1 pt-1 border-t border-border/40">
            <div className="flex justify-between items-center text-[9px] font-mono text-muted-foreground px-1">
              <span className="flex items-center gap-1 font-semibold text-foreground/80">
                <Zap size={10} className="text-destructive" />
                Energy
              </span>
              <span className="font-bold text-destructive">{activeData.energy}%</span>
            </div>
            <div className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#C00000] transition-all duration-500 rounded-full"
                style={{ width: `${activeData.energy}%` }}
              />
            </div>
          </div>

          {/* Connected Nodes */}
          {activeData.relatedIds.length > 0 && (
            <div className="flex items-center justify-center gap-1 mt-1">
              {activeData.relatedIds.map((relId) => {
                const targetIdx = timelineData.findIndex((i) => i.id === relId);
                const relItem = timelineData[targetIdx];
                if (!relItem) return null;
                return (
                  <button
                    key={relId}
                    onClick={() => selectStep(targetIdx)}
                    className="inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[8px] font-medium rounded border border-border/60 bg-background/80 hover:bg-destructive/10 hover:text-destructive transition-colors cursor-pointer"
                  >
                    <span>{relItem.title}</span>
                    <ArrowRight size={8} />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Modern Minimalist Dot Indicator */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {timelineData.map((_, index) => (
          <button
            key={index}
            onClick={() => selectStep(index)}
            aria-label={`Go to step ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === activeIndex
                ? "w-6 bg-[#C00000]"
                : "w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
