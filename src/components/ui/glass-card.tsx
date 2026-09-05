"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ElementType;
  titleClassName?: string;
  delay?: number;
  step?: string | number;
  flipOnHover?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, title, description, icon: Icon = Sparkles, titleClassName, delay = 0, step, flipOnHover, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: 0.8,
          delay: delay * 0.12,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{
          y: -8,
          scale: 1.02,
          transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
        }}
        className={`group relative w-full h-full min-h-0 sm:min-h-[290px] rounded-3xl bg-card/95 dark:bg-zinc-950/90 border border-zinc-200/90 dark:border-zinc-800/90 p-5 sm:p-8 flex flex-col justify-between text-left transition-all duration-500 ease-out shadow-sm hover:border-destructive/60 hover:shadow-2xl dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] cursor-pointer overflow-hidden backdrop-blur-xl ${className || ""}`}
        {...props}
      >
        {/* Subtle Corner Glow */}
        <motion.div
          className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-zinc-400/10 dark:bg-zinc-800/20 group-hover:bg-zinc-400/20 dark:group-hover:bg-zinc-800/40 blur-3xl pointer-events-none transition-all duration-700"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.65, 0.3],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Continuous Automatic Glass Shine Beam (45-degree angle sweep) */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none opacity-30 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background:
              "linear-gradient(115deg, transparent 20%, rgba(255, 255, 255, 0.35) 45%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.35) 55%, transparent 80%)",
          }}
          animate={{
            x: ["-150%", "200%"],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            repeatDelay: 2.5,
            ease: [0.25, 1, 0.5, 1],
            delay: delay * 0.4,
          }}
        />

        {/* Interactive Hover Sheen Pass */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-10" />

        {/* TOP SECTION: Icon Badge & Title (Inline on Mobile < sm, Stacked on Desktop >= sm) */}
        <div className="relative w-full flex flex-row sm:flex-col items-center sm:items-start gap-4 mb-3 sm:mb-6 z-20">
          {/* Circular Icon Badge */}
          <div className="relative flex items-center justify-center shrink-0">
            {/* Outer Breathing Pulse Ring */}
            <motion.div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 group-hover:bg-zinc-200/80 dark:group-hover:bg-zinc-800/80 flex items-center justify-center pointer-events-none transition-colors duration-500"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: 3.6,
                repeat: Infinity,
                delay: delay * 0.2,
                ease: "easeInOut",
              }}
            />

            {/* Inner Circle Icon */}
            <motion.div
              className="absolute w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-center transition-all duration-500 group-hover:border-destructive group-hover:shadow-md group-hover:scale-105"
            >
              {Icon && (
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-destructive stroke-[2] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
              )}
            </motion.div>
          </div>

          {/* Card Title (Inline on Mobile < sm, Stacked below Icon on Desktop >= sm) */}
          <h3 className={`text-lg sm:text-xl font-bold tracking-tight text-foreground dark:text-white transition-colors duration-300 group-hover:text-destructive ${titleClassName || ""}`}>
            {title}
          </h3>
        </div>

        {/* MIDDLE / CONTENT SECTION: Description */}
        <div className="relative z-20 flex-1 flex flex-col justify-start">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal group-hover:text-foreground/90 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* BOTTOM METALLIC & RED ACCENT BARS */}
        {/* Top Metallic Border Highlight */}
        <div className="absolute top-0 inset-x-6 h-[1px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/20 to-transparent group-hover:via-destructive/80 transition-colors duration-500 pointer-events-none" />

        {/* Bottom Red Laser Accent Bar on Hover */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-transparent via-destructive to-transparent transition-all duration-500 ease-out pointer-events-none" />
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;



