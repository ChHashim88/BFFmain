export function RevenueSection() {
  return (
    <section
      id="revenue"
      className="relative w-full scroll-mt-24 bg-background pt-16 md:pt-20 lg:pt-24 pb-4 px-6 md:px-12 xl:px-24 flex flex-col justify-center"
    >
      <div className="mx-auto w-full max-w-[1350px] flex flex-col space-y-10 lg:space-y-16">
        <div className="w-full text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:pr-8 xl:pr-16 order-2 lg:order-1 mt-8 lg:mt-0 text-center lg:text-left">
              <h3 className="text-h3 text-destructive uppercase tracking-tight font-bold mb-3">
                HOW WE MAKE MONEY
              </h3>
              <h2 className="text-h2 text-foreground dark:text-white drop-shadow-sm">
                Multiple <span className="text-destructive">Revenue Streams.</span>
              </h2>
              <p className="text-body-text text-muted-foreground mt-4">
                Big Film Fund is building a platform business, with multiple
                complementary revenue streams not dependent on the success of
                any one movie.
              </p>
            </div>

            {/* Right Side - Stacked Video Player */}
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] xl:aspect-[16/10] lg:ml-4 sm:ml-8 order-1 lg:order-2">
              <div className="absolute inset-y-6 -left-6 w-full bg-zinc-200 dark:bg-zinc-900 border border-border/40 shadow-2xl z-0 hidden sm:block" />
              <div className="absolute inset-y-3 -left-3 w-full bg-zinc-300 dark:bg-zinc-900 border border-border/50 shadow-2xl z-10 hidden sm:block" />

              <div className="absolute inset-0 w-full h-full bg-zinc-100 dark:bg-zinc-950 border border-border shadow-2xl overflow-hidden z-20 flex items-center justify-center group transition-transform duration-500 hover:-translate-y-2 hover:translate-x-2">
                <div className="absolute inset-0 bg-black/10 dark:bg-black/40 group-hover:bg-black/5 dark:group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <span className="text-2xl sm:text-4xl font-black tracking-[0.2em] text-foreground/40 dark:text-white/30 uppercase z-20 transition-transform duration-500 group-hover:scale-105">
                  Video Player
                </span>
              </div>
            </div>
          </div>

          {/* Center Line Below */}
          <div className="mt-8 lg:mt-12 w-full flex justify-center text-center">
            <p className="text-lg md:text-xl font-medium text-destructive max-w-3xl leading-relaxed">
              Rather than depending on one movie or one source of income, BFF’s
              business model combines four complementary revenue streams:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
