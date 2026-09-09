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
  variant?: "default" | "red" | "pulse";
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, title, description, icon: Icon = Sparkles, titleClassName, delay = 0, step, flipOnHover, variant = "default", ...props }, ref) => {
    const isRedVariant = variant === "red" || variant === "pulse";

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
        className={`group relative w-full h-full min-h-0 sm:min-h-[290px] rounded-3xl p-5 sm:p-8 flex flex-col justify-between text-left transition-all duration-500 ease-out shadow-sm cursor-pointer overflow-hidden backdrop-blur-xl ${
          isRedVariant
            ? "bg-gradient-to-b from-white via-red-50/40 to-white dark:from-zinc-950 dark:via-[#160104]/90 dark:to-zinc-950 border border-red-500/25 dark:border-red-600/35 hover:border-[#C00000] hover:shadow-[0_15px_40px_rgba(192,0,0,0.28)] dark:hover:shadow-[0_20px_50px_rgba(192,0,0,0.4)]"
            : "bg-card/95 dark:bg-zinc-950/90 border border-zinc-200/90 dark:border-zinc-800/90 hover:border-destructive/60 hover:shadow-2xl dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        } ${className || ""}`}
        {...props}
      >
        {/* Subtle Corner Glow */}
        <motion.div
          className={`absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-all duration-700 ${
            isRedVariant
              ? "bg-[#C00000]/20 dark:bg-[#C00000]/30 group-hover:bg-[#C00000]/40"
              : "bg-zinc-400/10 dark:bg-zinc-800/20 group-hover:bg-zinc-400/20 dark:group-hover:bg-zinc-800/40"
          }`}
          animate={{
            scale: isRedVariant ? [1, 1.3, 1] : [1, 1.25, 1],
            opacity: isRedVariant ? [0.4, 0.8, 0.4] : [0.3, 0.65, 0.3],
          }}
          transition={{
            duration: 3.8,
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
            {/* Outer Red Heartbeat / Pulse Beat Ring */}
            <motion.div
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center pointer-events-none transition-colors duration-500 ${
                isRedVariant
                  ? "bg-[#C00000]/15 dark:bg-[#C00000]/30 border border-[#C00000]/30 group-hover:bg-[#C00000]/30"
                  : "bg-zinc-200/50 dark:bg-zinc-800/50 group-hover:bg-zinc-200/80 dark:group-hover:bg-zinc-800/80"
              }`}
              animate={{
                scale: isRedVariant ? [1, 1.25, 1.08, 1.32, 1] : [1, 1.15, 1],
                opacity: isRedVariant ? [0.4, 0.9, 0.6, 1, 0.4] : [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: isRedVariant ? 2.6 : 3.6,
                repeat: Infinity,
                delay: delay * 0.2,
                ease: "easeInOut",
              }}
            />

            {/* Inner Circle Icon */}
            <motion.div
              className={`absolute w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                isRedVariant
                  ? "bg-gradient-to-br from-[#C00000] via-[#B00000] to-[#800000] text-white shadow-[0_0_20px_rgba(192,0,0,0.65)] border border-red-400/40"
                  : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm group-hover:border-destructive group-hover:shadow-md"
              }`}
            >
              {Icon && (
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 ${
                  isRedVariant ? "text-white fill-white/10" : "text-destructive"
                }`} />
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
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full transition-all duration-500 ease-out pointer-events-none ${
          isRedVariant ? "h-[3px] bg-gradient-to-r from-transparent via-[#C00000] to-transparent shadow-[0_0_10px_#C00000]" : "h-[2px] bg-gradient-to-r from-transparent via-destructive to-transparent"
        }`} />
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;



