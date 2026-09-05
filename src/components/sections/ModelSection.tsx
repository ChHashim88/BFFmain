export function ModelSection() {
  return (
    <section
      id="new-model"
      className="relative w-full scroll-mt-24 bg-background py-14 md:py-18 lg:py-20 px-6 md:px-12 xl:px-24 flex flex-col justify-center"
    >
      <div className="mx-auto w-full max-w-[1400px] text-center flex flex-col items-center gap-8">
        <div>
          <h3 className="text-h3 text-destructive uppercase tracking-tight font-bold mb-3">
            THE BFF MODEL
          </h3>
          <h2 className="text-h2 text-foreground dark:text-white drop-shadow-sm">
            A New Model For{" "}
            <span className="text-destructive">Film Investing</span>
          </h2>
        </div>

        {/* Both cards in ONE row on desktop (grid-cols-2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-[1350px] mx-auto text-left mt-2">
          {/* Card 01 */}
          <div className="relative w-full rounded-2xl bg-card/40 dark:bg-zinc-950/40 backdrop-blur-md px-6 py-4 sm:px-7 sm:py-5 border border-border/80 dark:border-zinc-800/80 shadow-md group overflow-hidden transition-all duration-300">
            {/* Pixel-perfect Animated SVG Moving Red Border Beam */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl z-20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                rx="15"
                ry="15"
                fill="none"
                stroke="#C00000"
                strokeWidth="2"
                strokeDasharray="160 700"
                className="animate-svg-dash drop-shadow-[0_0_6px_rgba(192,0,0,0.8)]"
                style={{
                  width: "calc(100% - 2px)",
                  height: "calc(100% - 2px)",
                }}
              />
            </svg>

            <div className="relative z-10 flex flex-row items-center gap-4 sm:gap-6 h-full">
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
          <div className="relative w-full rounded-2xl bg-card/40 dark:bg-zinc-950/40 backdrop-blur-md px-6 py-4 sm:px-7 sm:py-5 border border-border/80 dark:border-zinc-800/80 shadow-md group overflow-hidden transition-all duration-300">
            {/* Pixel-perfect Animated SVG Moving Red Border Beam */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl z-20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                rx="15"
                ry="15"
                fill="none"
                stroke="#C00000"
                strokeWidth="2"
                strokeDasharray="160 700"
                className="animate-svg-dash drop-shadow-[0_0_6px_rgba(192,0,0,0.8)]"
                style={{
                  width: "calc(100% - 2px)",
                  height: "calc(100% - 2px)",
                }}
              />
            </svg>

            <div className="relative z-10 flex flex-row items-center gap-4 sm:gap-6 h-full">
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
