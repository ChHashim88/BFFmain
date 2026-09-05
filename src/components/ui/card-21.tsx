"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { LiquidButton } from "./liquid-glass-button";

interface DestinationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  location: string;
  flag?: string;
  stats?: string;
  description?: React.ReactNode;
  readMoreContent?: {
    title: React.ReactNode;
    description: React.ReactNode;
  };
  href?: string;
  themeColor: string;
}

const DestinationCard = React.forwardRef<HTMLDivElement, DestinationCardProps>(
  (
    {
      className,
      imageUrl,
      location,
      flag,
      stats,
      description,
      readMoreContent,
      href,
      themeColor,
      ...props
    },
    ref,
  ) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const innerContent = (
      <>
        {/* Background Image with Parallax Zoom */}
        <img
          src={imageUrl}
          alt={location}
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 pointer-events-none"
        />

        {/* Themed Gradient Overlay - Reduced since we now use a glass container */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to top, hsl(var(--theme-color) / 0.7), transparent 100%)`,
          }}
        />

        {/* Content */}
        <div className="relative grid h-full w-full p-4 sm:p-6 text-white items-end">
          {/* Glass Container Wrapper */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col max-h-full col-start-1 row-start-1 w-full rounded-3xl overflow-y-auto overflow-x-hidden shadow-2xl border border-white/20 transition-all duration-300 transform-gpu bg-zinc-950/40 backdrop-blur-md group-hover:border-white/30 p-6 sm:p-8 custom-scrollbar"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

            {/* Front Content */}
            <div
              className={cn(
                "relative flex flex-col justify-end transition-all duration-500",
                isExpanded
                  ? "opacity-0 pointer-events-none absolute inset-x-6 inset-y-6 scale-[0.95] overflow-hidden"
                  : "opacity-100 scale-100",
              )}
            >
              <h3 className="text-subtitle min-h-[56px] mb-2 drop-shadow-md">
                {location} {flag && <span className="ml-1">{flag}</span>}
              </h3>
              {stats && (
                <p className="text-sm text-white/90 mt-1 font-medium drop-shadow-sm">{stats}</p>
              )}

              {description && (
                <div className="text-body-text text-white/95 mt-3 space-y-4">{description}</div>
              )}

              <div className="mt-8 flex justify-end">
                <button
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-btn text-white transition-all shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:scale-105"
                  onClick={(e) => {
                    if (readMoreContent) {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsExpanded(true);
                    }
                  }}
                >
                  {readMoreContent ? "Read More" : "Explore"} <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Back Content */}
            {readMoreContent && (
              <div
                className={cn(
                  "relative flex flex-col justify-center transition-all duration-500",
                  !isExpanded
                    ? "opacity-0 pointer-events-none absolute inset-x-6 inset-y-6 scale-[1.05] overflow-hidden"
                    : "opacity-100 scale-100",
                )}
              >
                <h3 className="text-subtitle min-h-[56px] mb-4 drop-shadow-md">
                  {readMoreContent.title}
                </h3>
                <div className="text-[12px] text-white/95 mt-3 space-y-3 leading-relaxed">
                  {readMoreContent.description}
                </div>

                <div className="mt-8 flex justify-start">
                  <button
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-btn text-white transition-all shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:scale-105"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsExpanded(false);
                    }}
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );

    const cardWrapperClass =
      "relative block w-full h-full rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out group-hover:scale-[1.01] group-hover:shadow-[0_0_80px_-15px_hsl(var(--theme-color)/0.5)]";
    const cardShadowStyle = { boxShadow: `0 0 40px -15px hsl(var(--theme-color) / 0.5)` };

    return (
      <div
        ref={ref}
        style={
          {
            // @ts-ignore - CSS custom properties are valid
            "--theme-color": themeColor,
          } as React.CSSProperties
        }
        className={cn("group w-full h-full", className)}
        {...props}
      >
        {readMoreContent ? (
          <div
            onClick={(e) => {
              e.preventDefault();
              if (isExpanded) {
                setIsExpanded(false);
              }
            }}
            className={cn(cardWrapperClass, "cursor-pointer")}
            style={cardShadowStyle}
          >
            {innerContent}
          </div>
        ) : (
          <a
            href={href}
            className={cardWrapperClass}
            aria-label={`Explore details for ${location}`}
            style={cardShadowStyle}
          >
            {innerContent}
          </a>
        )}
      </div>
    );
  },
);
DestinationCard.displayName = "DestinationCard";

export { DestinationCard };
