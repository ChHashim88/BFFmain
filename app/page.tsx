"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ModelSection } from "@/components/sections/ModelSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { Zap, Compass, Layers, Key, Users, Building2 } from "lucide-react";

// Below-the-fold dynamic imports for optimized code-splitting and faster initial page load
const FUIBentoGridDark = dynamic(() => import("@/components/ui/bento-grid"));
const VerticalTabs = dynamic(() => import("@/components/ui/vertical-tabs"));
const GallerySection = dynamic(() => import("@/components/sections/GallerySection").then((m) => m.GallerySection));
const OpportunitySection = dynamic(() => import("@/components/ui/opportunity-section"));
const TimelineSection = dynamic(() => import("@/components/sections/TimelineSection").then((m) => m.TimelineSection));
const RevenueSection = dynamic(() => import("@/components/sections/RevenueSection").then((m) => m.RevenueSection));
const RevenueCardsSection = dynamic(() => import("@/components/sections/RevenueCardsSection").then((m) => m.RevenueCardsSection));
const ExecuteSection = dynamic(() => import("@/components/sections/ExecuteSection").then((m) => m.ExecuteSection));
const FoundersClubSection = dynamic(() => import("@/components/sections/FoundersClubSection").then((m) => m.FoundersClubSection));
const ProgressSection = dynamic(() => import("@/components/sections/ProgressSection").then((m) => m.ProgressSection));
const ProcessSection = dynamic(() => import("@/components/ui/process-section").then((m) => m.ProcessSection));
const Investment = dynamic(() => import("@/components/ui/Investment"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection").then((m) => m.ContactSection));
const Footer = dynamic(() => import("@/components/ui/footer"));
const WaitlistModal = dynamic(() => import("@/components/ui/WaitlistModal").then((m) => m.WaitlistModal));
const StickyFooterCTA = dynamic(() => import("@/components/ui/StickyFooterCTA").then((m) => m.StickyFooterCTA));

const processItems = [
  {
    icon: Zap,
    title: "Activation",
    description: "Advancing the BFF platform toward launch",
  },
  {
    icon: Compass,
    title: "Origination",
    description: "Expanding and progressing the initial project pipeline",
  },
  {
    icon: Layers,
    title: "Structuring",
    description: "Structuring and preparing the first film offerings",
  },
  {
    icon: Key,
    title: "Access",
    description: "Developing the initial investor experience",
  },
  {
    icon: Users,
    title: "Formation",
    description: "Growing the founding investor community",
  },
  {
    icon: Building2,
    title: "Infrastructure",
    description: "Building the foundation for recurring platform revenue",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative w-full overflow-x-hidden bg-background">
        <HeroSection />
        <ProblemSection />
        <ModelSection />
        <PrinciplesSection />
        <PlatformSection />
        <FUIBentoGridDark />
        <VerticalTabs />
        <GallerySection />
        <OpportunitySection />
        <TimelineSection />
        <RevenueSection />
        <RevenueCardsSection />
        <ExecuteSection />
        <FoundersClubSection />
        <ProgressSection />
        <ProcessSection
          id="next"
          subtitle="WHAT COMES NEXT"
          title="Market Execution"
          description="BFF is now preparing to move from foundation-building into market execution."
          buttonText="Capital raised in this round will support:"
          items={processItems}
        />
        <Investment />
        <ContactSection />
        <Footer />
      </main>
      <WaitlistModal />
      <StickyFooterCTA />
    </>
  );
}
