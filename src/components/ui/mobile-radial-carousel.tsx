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

const AUTO_PLAY_INTERVAL = 5200; // 4.2 seconds per step

export default function MobileRadialCarousel({ timelineData }: MobileRadialCarouselProps) {
  const [stepCounter, setStepCounter] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 360-degree Intro Entrance Spin States
  const [isIntroSpinning, setIsIntroSpinning] = useState(false);
  const [introAngle, setIntroAngle] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const totalSteps = timelineData.length;

  // Run 360° Intro Spin once on component mount
  useEffect(() => {
    setIsIntroSpinning(true);
    const spinTimer = setTimeout(() => {
      setIntroAngle(-360);
    }, 100);

    const doneTimer = setTimeout(() => {
      setIsIntroSpinning(false);
      setIntroAngle(0);
    }, 1500);

    return () => {
      clearTimeout(spinTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  // Failsafe unconditional auto-play timer: advances every 2.3s
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setStepCounter((prev) => prev + 1);
      setProgress(0);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Smooth arc progress animation loop
  useEffect(() => {
    if (isPaused) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const start = performance.now();

    const updateProgress = (now: number) => {
      const elapsed = now - start;
      const currentProgress = Math.min((elapsed / AUTO_PLAY_INTERVAL) * 100, 100);

      setProgress(currentProgress);

      if (elapsed < AUTO_PLAY_INTERVAL) {
        animFrameRef.current = requestAnimationFrame(updateProgress);
      }
    };

    animFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [stepCounter, isPaused]);

  const goToNextStep = useCallback(() => {
    setStepCounter((prev) => prev + 1);
    setProgress(0);
  }, []);

  const goToPrevStep = useCallback(() => {
    setStepCounter((prev) => prev - 1);
    setProgress(0);
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

      setIsPaused(true);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = setTimeout(() => setIsPaused(false), 3000);
    },
    [totalSteps]
  );

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

  const activeIndex = ((stepCounter % totalSteps) + totalSteps) % totalSteps;
  const activeData = timelineData[activeIndex];
  const ActiveIcon = activeData.icon;

  // Rotation angles
  const normalWheelAngle = -stepCounter * (360 / totalSteps);
  const wheelRotationAngle = isIntroSpinning ? introAngle : normalWheelAngle;

  // SVG Geometry for Large Radial Orbit
  const size = 500;
  const center = size / 2; // 250
  const radius = 205;
  const strokeWidth = 1.5;
  const gapDegree = 8;
  const segmentDegree = 360 / totalSteps;
  const arcLength = ((segmentDegree - gapDegree) / 360) * (2 * Math.PI * radius);
  const totalCircumference = 2 * Math.PI * radius;

  const getStatusBadge = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":
        return { label: "COMPLETED", bg: "bg-destructive/10 text-destructive border-destructive/30" };
      case "in-progress":
        return { label: "IN PROGRESS", bg: "bg-destructive/10 text-destructive border-destructive/30" };
      default:
        return { label: "PENDING", bg: "bg-destructive/10 text-destructive border-destructive/30" };
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
          className="absolute inset-0 w-full h-full transform-gpu"
          style={{
            transform: `rotate(${wheelRotationAngle}deg)`,
            transition: isIntroSpinning
              ? "transform 1400ms cubic-bezier(0.16, 1, 0.3, 1)"
              : "transform 1100ms cubic-bezier(0.16, 1, 0.3, 1)",
            willChange: "transform",
          }}
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
                  {isActive && !isIntroSpinning && (
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
                className={`absolute -translate-x-1/2 -translate-y-1/2 group flex items-center justify-center transition-all duration-500 z-30 cursor-pointer ${isActive ? "scale-110 z-40" : "scale-95 opacity-70 hover:opacity-100"
                  }`}
              >
                {/* Counter-rotate inner content so icons remain upright during both intro spin and normal rotation */}
                <div
                  className="flex items-center justify-center transform-gpu"
                  style={{
                    transform: `rotate(${-wheelRotationAngle}deg)`,
                    transition: isIntroSpinning
                      ? "transform 1400ms cubic-bezier(0.16, 1, 0.3, 1)"
                      : "transform 1100ms cubic-bezier(0.16, 1, 0.3, 1)",
                    willChange: "transform",
                  }}
                >
                  <div
                    className={`w-9 h-9 sm:w-13 sm:h-13 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-300 ${isActive
                        ? "bg-[#C00000] text-white border-2 border-white shadow-lg scale-105"
                        : "bg-white dark:bg-zinc-900 text-foreground/75 dark:text-white/75 border border-border hover:border-destructive/50"
                      }`}
                  >
                    <ItemIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* PERFECT CIRCULAR CENTER SPHERE (rounded-full) */}
        <div className="absolute inset-0 m-auto w-[190px] h-[190px] sm:w-[270px] sm:h-[270px] lg:w-[340px] lg:h-[340px] rounded-full bg-background/95 dark:bg-zinc-950/95 border border-border/80 shadow-2xl flex flex-col items-center justify-center p-2.5 sm:p-5 text-center z-20 backdrop-blur-xl transition-all duration-500 overflow-hidden">

          {/* Top Icon */}
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-destructive/10 border border-destructive/20 flex items-center justify-center text-destructive shrink-0 mb-0.5">
            <ActiveIcon className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300" />
          </div>

          {/* Category */}
          <span className="text-[8px] sm:text-[10px] font-mono font-semibold text-destructive uppercase tracking-wider">
            {activeData.category}
          </span>

          {/* Title */}
          <h4 className="text-[11px] sm:text-sm lg:text-base font-bold text-foreground tracking-tight leading-tight line-clamp-1 my-0.5">
            {activeData.title}
          </h4>

          {/* Compact Description */}
          <p className="text-[8.5px] sm:text-xs text-muted-foreground leading-snug font-medium line-clamp-2 px-2 my-0.5 max-w-[92%]">
            {activeData.description || activeData.content}
          </p>

          {/* Compact Energy Level Bar */}
          <div className="w-[80%] flex flex-col gap-0.5 mt-0.5 pt-0.5 border-t border-border/40">
            <div className="flex justify-between items-center text-[8px] sm:text-[9px] font-mono text-muted-foreground px-1">
              <span className="flex items-center gap-0.5 font-semibold text-foreground/80">
                <Zap size={9} className="text-destructive" />
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
            <div className="flex items-center justify-center gap-1 mt-0.5">
              {activeData.relatedIds.map((relId) => {
                const targetIdx = timelineData.findIndex((i) => i.id === relId);
                const relItem = timelineData[targetIdx];
                if (!relItem) return null;
                return (
                  <button
                    key={relId}
                    onClick={() => selectStep(targetIdx)}
                    className="inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[7.5px] sm:text-[8px] font-medium rounded border border-border/60 bg-background/80 hover:bg-destructive/10 hover:text-destructive transition-colors cursor-pointer"
                  >
                    <span>{relItem.title}</span>
                    <ArrowRight size={8} />
                  </button>
                );
              })}
            </div>
          )}

          {/* Red Status Badge at the End/Bottom */}
          <span className={`mt-0.5 px-2 py-0.5 text-[7.5px] sm:text-[9px] font-mono font-bold rounded-full border ${statusBadge.bg}`}>
            {statusBadge.label}
          </span>
        </div>
      </div>

      {/* Modern Minimalist Dot Indicator */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {timelineData.map((_, index) => (
          <button
            key={index}
            onClick={() => selectStep(index)}
            aria-label={`Go to step ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${index === activeIndex
                ? "w-6 bg-[#C00000]"
                : "w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
