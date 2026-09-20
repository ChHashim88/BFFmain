"use client";

import { useState, useRef } from "react";
import { ChevronDown, Play, Pause } from "lucide-react";

import { TypewriterText } from "@/components/ui/TypewriterText";



export function ProblemSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="problem"
      className="relative w-full scroll-mt-24 bg-[#C00000] text-white py-16 md:py-20 lg:py-24 px-6 md:px-12 xl:px-24 flex flex-col justify-center"
    >
      <div className="mx-auto w-full max-w-[1350px] flex flex-col space-y-10 lg:space-y-16">
        <div className="w-full text-center lg:text-left">
          <TypewriterText
            text="THE PROBLEM"
            className="text-h3 text-white/90 uppercase tracking-widest font-semibold mb-3"
          />
          <h2 className="text-h2 text-white drop-shadow-sm mb-4">
            Film investing has never been <span className="text-white/80"><br className="hidden sm:inline" /> built for investors.</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-8 lg:mt-12">
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-6 lg:pr-8 xl:pr-16 order-1 lg:order-1 mt-8 lg:mt-0 text-left">
              {/* General Introduction (Full sentence, no 01/02/03 numbering) */}
              <p className="text-body-text text-white/95 leading-relaxed">
                For most people, investing in Hollywood films has been out of reach. For those who are able to participate, it is too often opaque, complicated, and structured around everyone but the investor.
              </p>

              {/* Limited Access (Point 02) */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Limited Access
                </h3>
                <p className="text-body-text text-white/90 leading-relaxed">
                  For decades, opportunities have largely remained gate kept within studios, private networks, and a small circle of Hollywood insiders. Audiences may help make a movie successful, but they rarely have the opportunity to own a stake in it or share in its financial upside.
                </p>
              </div>

              {/* Complex Structures (Combined Points 03 and 04) */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-white/20">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Complex Structures
                </h3>
                <p className="text-body-text text-white/90 leading-relaxed">
                  At the same time, those who have been able to participate in film investing, face complicated ownership structures, incomplete capitalization, limited visibility, and recoupment waterfalls that leave them waiting to see what, if anything, reaches them.
                </p>
                <p className="text-body-text text-white/90 leading-relaxed">
                  Understanding what you own, where your money went, and how you participate in a film’s success shouldn’t be hidden from you.
                </p>
              </div>
            </div>

            {/* Right Side - Stacked Video Player */}
            <div className="relative w-full aspect-video lg:ml-4 sm:ml-8 order-2 lg:order-2">
              <div className="absolute inset-y-6 -left-6 w-full bg-white/10 dark:bg-black/20 border border-white/20 shadow-2xl z-0 hidden sm:block rounded-2xl backdrop-blur-sm" />
              <div className="absolute inset-y-3 -left-3 w-full bg-white/15 dark:bg-black/30 border border-white/20 shadow-2xl z-10 hidden sm:block rounded-2xl backdrop-blur-sm" />

              <div className="absolute inset-0 w-full h-full rounded-2xl bg-zinc-100 dark:bg-zinc-950 border border-border shadow-2xl overflow-hidden z-20 flex items-center justify-center group">
                {isPlaying ? (
                  <iframe
                    src="https://player.vimeo.com/video/1227838533?h=efbb39337c&autoplay=1&autopause=0&title=0&byline=0&portrait=0"
                    title="Film investing has never been built for investors"
                    className="w-full h-full border-0 rounded-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                ) : (
                  <div
                    onClick={() => setIsPlaying(true)}
                    className="relative w-full h-full flex items-center justify-center cursor-pointer"
                  >
                    {/* Thumbnail Image ts.png */}
                    <img
                      src="/ts.png"
                      alt="Film investing has never been built for investors"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40 dark:bg-black/55 group-hover:bg-black/30 transition-colors duration-500 z-10" />

                    {/* Centered Play Button & Label */}
                    <div className="relative z-20 flex flex-col items-center gap-3 text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C00000]/30 border border-white/40 text-white flex items-center justify-center shadow-[0_0_25px_rgba(192,0,0,0.4)] group-hover:scale-110 group-hover:bg-[#C00000]/50 transition-all duration-300">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white translate-x-0.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold tracking-widest text-white uppercase drop-shadow-md">
                        Watch Overview
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
