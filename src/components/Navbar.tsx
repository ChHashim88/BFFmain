"use client";

import { ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { openWaitlistModal } from "@/components/ui/WaitlistModal";

const navLinks = [
  { label: "Solution", href: "#problem" },
  {
    label: "BFF Model",
    href: "#new-model",
    dropdown: [
      { label: "Each Film. One Clean Economic Picture", href: "#clean-picture" },
      { label: "No Back of the Line", href: "#no-back" },
      { label: "Commercial Discipline, Built In", href: "#discipline" },
    ],
  },
  { label: "Platform", href: "#platform" },
  { label: "Opportunity", href: "#opportunity" },
  { label: "How We Make Money", href: "#revenue" },
  { label: "Built to Execute", href: "#execute" },
  { label: "Founders Club", href: "#founders-club" },
  { label: "Investment", href: "#investment" },
];

export function Navbar() {
  return (
    <header className="fixed left-1/2 top-6 z-50 w-[96%] lg:w-[98%] xl:w-[92%] max-w-[1400px] -translate-x-1/2 rounded-full">
      {/* Liquid Glass Background Layers */}
      <div className="absolute inset-0 z-0 h-full w-full rounded-full shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]" />
      <div
        className="absolute inset-0 isolate -z-10 h-full w-full overflow-hidden rounded-full bg-white/10"
        style={{ backdropFilter: 'url("#navbar-glass")' }}
      />

      <div className="relative z-10 mx-auto flex h-14 items-center justify-between pl-2 pr-3 lg:pl-2 lg:pr-4">
        <div className="shrink-0">
          <a href="#" className="flex items-center">
            <img
              src="/images/1212.png"
              alt="BFF Logo"
              className="h-16 w-auto lg:h-20 scale-[1.45] lg:scale-[1.75] origin-left transition-transform duration-300 pointer-events-auto"
            />
          </a>
        </div>

        {/* Links */}
        <nav className="hidden lg:flex flex-1 items-center justify-center overflow-visible mx-2">
          <ul className="flex items-center justify-center gap-1.5 xl:gap-2.5 2xl:gap-4 whitespace-nowrap px-1 text-[12px] font-normal leading-[1.20] text-foreground/85 transition-all duration-300">
            {navLinks.map((link) => (
              <li key={link.label} className="group relative">
                {link.dropdown ? (
                  <div className="flex cursor-pointer items-center gap-1 py-4 transition-colors duration-150 hover:text-destructive group-hover:text-destructive">
                    <a
                      href={link.href}
                      className="block transition-colors duration-150 hover:text-destructive"
                    >
                      {link.label}
                    </a>

                    {/* Dropdown Menu */}
                    <div className="absolute left-0 top-full hidden min-w-[260px] flex-col rounded-none border border-border bg-background p-1.5 shadow-xl group-hover:flex">
                      {link.dropdown.map((sublink) => (
                        <a
                          key={sublink.label}
                          href={sublink.href}
                          className="px-3 py-2.5 text-nav text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-destructive"
                        >
                          {sublink.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="block py-4 transition-colors duration-150 hover:text-destructive"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className="shrink-0 flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => openWaitlistModal("waitlist")}
            className="cursor-pointer rounded-full bg-destructive px-3 py-1.5 lg:px-4 lg:py-1.5 text-[9px] lg:text-xs font-semibold text-destructive-foreground shadow-sm transition-all duration-200 hover:scale-105 hover:bg-destructive/95 hover:shadow-md active:scale-95 whitespace-nowrap"
          >
            Join Waitlist
          </button>
        </div>
      </div>

      {/* SVG Filter for Navbar */}
      <svg className="hidden">
        <defs>
          <filter
            id="navbar-glass"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05 0.05"
              numOctaves="1"
              seed="2"
              result="turbulence"
            />
            <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurredNoise"
              scale="70"
              xChannelSelector="R"
              yChannelSelector="B"
              result="displaced"
            />
            <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
            <feComposite in="finalBlur" in2="finalBlur" operator="over" />
          </filter>
        </defs>
      </svg>
    </header>
  );
}
