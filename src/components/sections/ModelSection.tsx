export function ModelSection() {
  return (
    <section
      id="new-model"
      className="relative w-full scroll-mt-24 bg-background py-16 md:py-20 lg:py-24 px-6 md:px-12 xl:px-24 flex flex-col justify-center"
    >
      <div className="mx-auto w-full max-w-[1350px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side - Text & Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1 mt-8 lg:mt-0 lg:pr-8 xl:pr-16 text-center lg:text-left">
            <div>
              <h3 className="text-h3 text-destructive uppercase tracking-tight font-bold mb-3">
                THE BFF MODEL
              </h3>
              <h2 className="text-h2 text-foreground dark:text-white drop-shadow-sm">
                A New Model For
                <br />
                <span className="text-destructive">Film Investing</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 mt-2">
              <div className="flex flex-col space-y-2 group bg-muted/40 dark:bg-muted/10 border border-border/50 p-5 sm:p-6 rounded-2xl lg:bg-transparent lg:border-transparent lg:p-0 lg:rounded-none transition-colors hover:bg-muted/60 dark:hover:bg-muted/20">
                <span className="text-destructive text-label transition-transform duration-300 lg:group-hover:-translate-x-2">
                  01
                </span>
                <p className="text-body-text text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  Big Film Fund is building a platform designed to make film
                  investing more accessible, and fundamentally, more
                  investor-focused.
                </p>
              </div>
              <div className="flex flex-col space-y-2 group bg-muted/40 dark:bg-muted/10 border border-border/50 p-5 sm:p-6 rounded-2xl lg:bg-transparent lg:border-transparent lg:p-0 lg:rounded-none transition-colors hover:bg-muted/60 dark:hover:bg-muted/20">
                <span className="text-destructive text-label transition-transform duration-300 lg:group-hover:-translate-x-2">
                  02
                </span>
                <p className="text-body-text text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  In addition to opening the door to film investment
                  opportunities for every day investors, BFF has designed a
                  new model around a few clear principles.
                </p>
              </div>
            </div>
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
      </div>
    </section>
  );
}
