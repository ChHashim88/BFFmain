"use client";

import { useState, useRef } from "react";
import { ChevronDown, Play, Pause } from "lucide-react";

interface ProblemPointProps {
  number: string;
  shortText: string;
  fullText: string;
}

function ProblemPointItem({ number, shortText, fullText }: ProblemPointProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col space-y-2 group bg-muted/40 dark:bg-muted/10 border border-border/50 p-5 sm:p-6 rounded-2xl lg:bg-transparent lg:border-transparent lg:p-0 lg:rounded-none transition-colors hover:bg-muted/60 dark:hover:bg-muted/20">
      <span className="text-destructive text-label transition-transform duration-300 lg:group-hover:-translate-x-2">
        {number}
      </span>
      <p className="text-body-text text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
        {isExpanded ? fullText : shortText}{" "}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          title={isExpanded ? "Show Less" : "Show More"}
          aria-label={isExpanded ? "Show Less" : "Show More"}
          className="inline-flex items-center justify-center h-6 w-6 rounded-full text-destructive hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all cursor-pointer ml-1 align-middle border border-border"
        >
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
              }`}
          />
        </button>
      </p>
    </div>
  );
}

export function ProblemSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section
      id="problem"
      className="relative w-full scroll-mt-24 bg-background py-16 md:py-20 lg:py-24 px-6 md:px-12 xl:px-24 flex flex-col justify-center"
    >
      <div className="mx-auto w-full max-w-[1350px] flex flex-col space-y-10 lg:space-y-16">
        <div className="w-full text-center lg:text-left">
          <h3 className="text-h3 text-destructive uppercase tracking-tight font-bold mb-3">
            THE Solution
          </h3>
          <h2 className="text-h2 text-foreground dark:text-white drop-shadow-sm">
            Film investing has never been <span className="text-destructive"><br />built for investors.</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-8 lg:mt-12">
            {/* Left Side - Points */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:pr-8 xl:pr-16 order-2 lg:order-1 mt-8 lg:mt-0">
              <ProblemPointItem
                number="01"
                shortText="For most people, investing in Hollywood films has been out of reach. For those who participate..."
                fullText="For most people, investing in Hollywood films has been out of reach. For those who are able to participate, it is too often opaque, complicated, and structured around everyone but the investor."
              />
              <ProblemPointItem
                number="02"
                shortText="For decades, opportunities have largely remained gate kept within studios, private networks, and insiders..."
                fullText="For decades, opportunities have largely remained gate kept within studios, private networks, and a small circle of Hollywood insiders. Audiences may help make a movie successful, but they rarely have the opportunity to own a stake in it or share in its financial upside."
              />
              <ProblemPointItem
                number="03"
                shortText="At the same time, those who have been able to participate in film investing, face complicated structures..."
                fullText="At the same time, those who have been able to participate in film investing, face complicated ownership structures, incomplete capitalization, limited visibility, and recoupment waterfalls that leave them waiting to see what, if anything, reaches them."
              />
              <ProblemPointItem
                number="04"
                shortText="Understanding what you own, where your money went, and how you participate in a film’s success..."
                fullText="Understanding what you own, where your money went, and how you participate in a film’s success shouldn’t be hidden from you."
              />
            </div>

            {/* Right Side - Stacked Video Player */}
            <div className="relative w-full aspect-video lg:aspect-[4/3] xl:aspect-[16/10] lg:ml-4 sm:ml-8 order-1 lg:order-2">
              <div className="absolute inset-y-6 -left-6 w-full bg-zinc-200 dark:bg-zinc-900 border border-border/40 shadow-2xl z-0 hidden sm:block" />
              <div className="absolute inset-y-3 -left-3 w-full bg-zinc-300 dark:bg-zinc-900 border border-border/50 shadow-2xl z-10 hidden sm:block" />

              <div className="absolute inset-0 w-full h-full bg-zinc-100 dark:bg-zinc-950 border border-border shadow-2xl overflow-hidden z-20 group transition-transform duration-500 hover:-translate-y-2 hover:translate-x-2">
                <video
                  ref={videoRef}
                  src="https://www.dropbox.com/scl/fo/fr0i9s0r31wvmmwctfvf3/ACgQM7ywKfShxxLvdVhG4sw?dl=1&e=1&preview=bff_promo_1_introduction_alt_disco_song_v1.mp4&rlkey=d1069gkyon7op9goc3htz7340&st=jocnlbtx"
                  poster="/ts.png"
                  controls={isPlaying}
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  className="w-full h-full object-cover"
                />

                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center cursor-pointer z-30"
                  >
                    {/* Circle Play Button */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-300 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 border-2 border-white/20">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white translate-x-0.5" />
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


