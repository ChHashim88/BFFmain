"use client";

import GlassCard from "@/components/ui/glass-card";
import { Film, Cpu, TrendingUp, Sparkles } from "lucide-react";

export function RevenueCardsSection() {
  return (
    <section className="relative w-full bg-background pt-4 pb-16 md:pb-20 lg:pb-24 px-6 md:px-12 xl:px-24 flex items-center justify-center">
      <div className="mx-auto w-full max-w-[1350px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          <GlassCard
            variant="red"
            icon={Film}
            delay={0.1}
            title="Platform Fees"
            description="Fees associated with bringing film offerings to market and supporting them through the BFF platform."
          />
          <GlassCard
            variant="red"
            icon={Cpu}
            delay={0.2}
            title="Project Participation"
            description="Revenue and defined economic participation associated with BFF’s role in financing, developing, and producing individual films."
          />
          <GlassCard
            variant="red"
            icon={TrendingUp}
            delay={0.3}
            title="Performance Upside"
            description="BFF participates in distributable revenue from successful films—aligning the company’s financial upside with performance."
          />
          <GlassCard
            variant="red"
            icon={Sparkles}
            delay={0.4}
            title="Partnerships"
            description="Revenue associated with distribution, licensing, content partnerships, and other commercial relationships."
          />
        </div>
      </div>
    </section>
  );
}
