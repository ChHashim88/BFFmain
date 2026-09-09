import { TypewriterText } from "@/components/ui/TypewriterText";

export function ModelSection() {
  return (
    <section
      id="new-model"
      className="relative w-full scroll-mt-24 bg-background py-14 md:py-18 lg:py-20 px-6 md:px-12 xl:px-24 flex flex-col justify-center"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <TypewriterText
            text="THE BFF MODEL"
            className="text-h3 text-destructive uppercase tracking-widest font-semibold mb-2.5"
          />
          <h2 className="text-h2 text-foreground dark:text-white drop-shadow-sm mb-3.5">
            A New Model For{" "}
            <span className="text-destructive">Film Investing</span>
          </h2>
        </div>

        {/* Both cards in ONE row on desktop (grid-cols-2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-[1350px] text-left mt-8 lg:mt-10">
          {/* Card 01 */}
          <div className="relative p-[1.5px] rounded-2xl overflow-hidden shadow-lg group transition-all duration-300">
            {/* Ultra-smooth GPU Accelerated Continuous Rotating Red Glowing Border Beam */}
            <div className="absolute -inset-[200%] bg-[conic-gradient(from_0deg,transparent_0_270deg,rgba(192,0,0,0.6)_310deg,#C00000_360deg)] animate-border-spin pointer-events-none" />

            <div className="relative w-full h-full rounded-[14px] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md px-6 py-4 sm:px-7 sm:py-5 z-10 flex flex-row items-center gap-4 sm:gap-6 border border-border/40">
              <span className="text-destructive font-black text-2xl sm:text-3xl tracking-wider shrink-0 min-w-[36px]">
                01
              </span>
              <p className="text-foreground/90 dark:text-zinc-200 font-normal leading-relaxed text-sm sm:text-base">
                Big Film Fund is building a platform designed to make film
                investing more accessible, and fundamentally, more
                investor-focused.
              </p>
            </div>
          </div>

          {/* Card 02 */}
          <div className="relative p-[1.5px] rounded-2xl overflow-hidden shadow-lg group transition-all duration-300">
            {/* Ultra-smooth GPU Accelerated Continuous Rotating Red Glowing Border Beam */}
            <div className="absolute -inset-[200%] bg-[conic-gradient(from_0deg,transparent_0_270deg,rgba(192,0,0,0.6)_310deg,#C00000_360deg)] animate-border-spin pointer-events-none" />

            <div className="relative w-full h-full rounded-[14px] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md px-6 py-4 sm:px-7 sm:py-5 z-10 flex flex-row items-center gap-4 sm:gap-6 border border-border/40">
              <span className="text-destructive font-black text-2xl sm:text-3xl tracking-wider shrink-0 min-w-[36px]">
                02
              </span>
              <p className="text-foreground/90 dark:text-zinc-200 font-normal leading-relaxed text-sm sm:text-base">
                In addition to opening the door to film investment
                opportunities for everyday investors, BFF has designed a
                new model around a few clear principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

