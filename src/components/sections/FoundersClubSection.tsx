"use client";

import { openWaitlistModal } from "@/components/ui/WaitlistModal";
import { Play } from "lucide-react";

export function FoundersClubSection() {
  return (
    <section
      id="founders-club"
      className="relative w-full scroll-mt-24 bg-background py-16 md:py-20 lg:py-24 px-6 md:px-12 xl:px-24 flex flex-col justify-center"
    >
      <div className="mx-auto w-full max-w-[1350px]">
        <div className="w-full text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-6 lg:pr-8 xl:pr-16 order-2 lg:order-1 mt-8 lg:mt-0 text-center lg:text-left">
              <h3 className="text-h3 text-destructive uppercase tracking-tight font-bold mb-3">
                FOUNDERS CLUB
              </h3>
              <h2 className="text-h2 text-foreground dark:text-white drop-shadow-sm">
                More Than an Investment. <br />
                <span className="text-destructive">Join the Story.</span>
              </h2>
              <div className="space-y-4 text-body-text text-muted-foreground mt-4">
                <p>
                  Film offers something few investments can: the opportunity to
                  see what your capital helps bring to life.
                </p>
                <p>
                  The Big Film Fund Founders Club is designed to bring early
                  supporters closer to the films, filmmakers, and experiences
                  at the heart of BFF—from development and production through
                  screenings and release.
                </p>
              </div>
              <button
                onClick={() => openWaitlistModal("founders")}
                className="mt-6 px-8 py-4 bg-[#C00000] text-white font-bold tracking-wide uppercase rounded-full hover:bg-[#990000] transition-all duration-300 hover:scale-105 shadow-lg active:scale-95 cursor-pointer"
              >
                Join Founders Club
              </button>
            </div>

            {/* Right Side - Stacked Video Player with Image 7.png Thumbnail */}
            <div className="relative w-full aspect-video lg:aspect-[4/3] xl:aspect-[16/10] lg:ml-4 sm:ml-8 order-1 lg:order-2">
              <div className="absolute inset-y-6 -left-6 w-full bg-zinc-200 dark:bg-zinc-900 border border-border/40 shadow-2xl z-0 hidden sm:block rounded-2xl" />
              <div className="absolute inset-y-3 -left-3 w-full bg-zinc-300 dark:bg-zinc-900 border border-border/50 shadow-2xl z-10 hidden sm:block rounded-2xl" />

              <div className="absolute inset-0 w-full h-full rounded-2xl bg-zinc-100 dark:bg-zinc-950 border border-border shadow-2xl overflow-hidden z-20 flex items-center justify-center group cursor-pointer transition-transform duration-500 hover:-translate-y-2 hover:translate-x-2">
                {/* Thumbnail Image 7.png */}
                <img
                  src="/7.png"
                  alt="Founders Club Overview"
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
                    Watch Founders Story
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
