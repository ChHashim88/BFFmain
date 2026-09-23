"use client";

import { useState, useRef, useEffect } from "react";
import { openWaitlistModal } from "@/components/ui/WaitlistModal";
import { Play } from "lucide-react";
import { TypewriterText } from "@/components/ui/TypewriterText";

function getEmbedUrl(url: string): string {
  if (url.includes("vimeo.com")) {
    if (url.includes("player.vimeo.com/video/")) {
      return url.includes("autoplay") ? url : `${url}${url.includes("?") ? "&" : "?"}autoplay=1&autopause=0`;
    }
    const matches = url.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/([a-zA-Z0-9]+))?/);
    if (matches && matches[1]) {
      const videoId = matches[1];
      const hash = matches[2];
      const hashParam = hash ? `?h=${hash}&` : "?";
      return `https://player.vimeo.com/video/${videoId}${hashParam}autoplay=1&autopause=0&title=0&byline=0&portrait=0`;
    }
  }
  return url;
}

export function FoundersClubSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSrc = "https://vimeo.com/1227838405/39d22cacbb?fl=ip&fe=ec&share=copy";
  const embedUrl = getEmbedUrl(videoSrc);
  const isEmbed = videoSrc.includes("vimeo.com") || videoSrc.includes("youtube.com") || videoSrc.includes("youtu.be");

  useEffect(() => {
    if (!isPlaying) return;

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            if (iframeRef.current?.contentWindow) {
              iframeRef.current.contentWindow.postMessage(
                JSON.stringify({ method: "pause" }),
                "*"
              );
            }
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isPlaying]);

  return (
    <section
      id="founders-club"
      className="relative w-full scroll-mt-24 bg-[#C00000] text-white py-16 md:py-20 lg:py-24 px-6 md:px-12 xl:px-24 flex flex-col justify-center"
    >
      <div className="mx-auto w-full max-w-[1350px]">
        <div className="w-full text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="flex flex-col items-center lg:items-start lg:pr-8 xl:pr-16 order-1 lg:order-1 mt-8 lg:mt-0 text-center lg:text-left">
              <TypewriterText
                text="FOUNDERS CLUB"
                className="text-h3 text-white/90 uppercase tracking-widest font-semibold mb-2.5"
              />
              <h2 className="text-h2 text-white drop-shadow-sm mb-3.5">
                More Than an Investment. <br className="hidden sm:inline" />
                <span className="text-white/80">Join the Story.</span>
              </h2>
              <div className="space-y-4 text-subtitle text-white/90 max-w-md mx-auto lg:max-w-none lg:mx-0">
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
                className="mt-6 px-8 py-4 bg-white text-[#C00000] font-bold tracking-wide uppercase rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg active:scale-95 cursor-pointer mx-auto lg:mx-0"
              >
                Join Founders Club
              </button>
            </div>

            {/* Right Side - Stacked Video Player with Image 7.png Thumbnail */}
            <div className="relative w-full aspect-video lg:ml-4 sm:ml-8 order-2 lg:order-2">
              <div className="absolute inset-y-6 -left-6 w-full bg-white/10 dark:bg-black/20 border border-white/20 shadow-2xl z-0 hidden sm:block rounded-2xl backdrop-blur-sm" />
              <div className="absolute inset-y-3 -left-3 w-full bg-white/15 dark:bg-black/30 border border-white/20 shadow-2xl z-10 hidden sm:block rounded-2xl backdrop-blur-sm" />

              <div ref={containerRef} className="absolute inset-0 w-full h-full rounded-2xl bg-zinc-100 dark:bg-zinc-950 border border-border shadow-2xl overflow-hidden z-20 flex items-center justify-center group">
                {isPlaying ? (
                  isEmbed ? (
                    <iframe
                      ref={iframeRef}
                      src={embedUrl}
                      title="Founders Club Overview"
                      className="w-full h-full border-0 rounded-2xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  ) : (
                    <video
                      ref={videoRef}
                      src={videoSrc}
                      controls
                      autoPlay
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  )
                ) : (
                  <div
                    onClick={() => setIsPlaying(true)}
                    className="relative w-full h-full flex items-center justify-center cursor-pointer"
                  >
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
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C00000] border border-white/40 text-white flex items-center justify-center shadow-[0_0_25px_rgba(192,0,0,0.6)] group-hover:scale-110 group-hover:bg-[#a00000] transition-all duration-300">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white translate-x-0.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold tracking-widest text-white uppercase drop-shadow-md">
                        Watch Founders Story
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
