"use client";

import React from "react";
import { Sun, Moon, ArrowUp, Mail, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

const ThemeToogle = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center rounded-full border border-dotted">
        <button
          onClick={() => setTheme("light")}
          className="bg-black mr-3 rounded-full p-2 text-white dark:bg-background dark:text-white"
        >
          <Sun className="h-5 w-5" strokeWidth={1} />
          <span className="sr-only">T</span>
        </button>

        <button type="button" onClick={handleScrollTop}>
          <ArrowUp className="h-3 w-3" />
          <span className="sr-only">Top</span>
        </button>

        <button
          onClick={() => setTheme("dark")}
          className="dark:bg-black ml-3 rounded-full p-2 text-black dark:text-white"
        >
          <Moon className="h-5 w-5" strokeWidth={1} />
          <span className="sr-only">T</span>
        </button>
      </div>
    </div>
  );
};

const navigation = {
  categories: [
    {
      id: "main",
      name: "Main",
      sections: [
        {
          id: "navigation",
          name: "NAVIGATION",
          items: [
            { name: "Home", href: "/" },
            { name: "Why BFF", href: "#why-bff" },
            { name: "The Solution", href: "#problem" },
            { name: "Our Solution", href: "#solution" },
            { name: "The Platform", href: "#platform" },
          ],
        },
        {
          id: "platform",
          name: "PLATFORM",
          items: [
            { name: "The Opportunity", href: "#opportunity" },
            { name: "How It Works", href: "#how-it-works" },
            { name: "Selection & Execution", href: "#execution" },
            { name: "The Investment", href: "#investment" },
            { name: "Founders Club", href: "#founders-club" },
          ],
        },
        {
          id: "connect",
          name: "CONNECT",
          items: [
            { name: "Contact Us", href: "#contact" },
          ],
        },
      ],
    },
  ],
};

const Underline = `hover:-translate-y-1 border border-dotted rounded-xl p-2.5 transition-transform `;

export default function Footer() {
  return (
    <footer className="border-ali/20 :px-4 mx-auto w-full border-b border-t px-2 text-foreground">
      <div className="relative mx-auto grid max-w-7xl items-center justify-center gap-6 p-10 pb-0 md:flex">
        <a href="/">
          <p className="flex items-center justify-center rounded-full">
            <span className="font-black text-xl tracking-tighter text-[#C00000]">BFF</span>
          </p>
        </a>

      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="border-b border-dotted"> </div>
        <div className="py-10">
          {navigation.categories.map((category) => (
            <div
              key={category.name}
              className="grid grid-cols-3 flex-row justify-between gap-6 leading-6 md:flex"
            >
              {category.sections.map((section) => (
                <div key={section.name}>
                  <h3 className="text-sm font-semibold text-foreground mb-4">{section.name}</h3>
                  <ul
                    role="list"
                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                    className="flex flex-col space-y-2"
                  >
                    {section.items.map((item) => (
                      <li key={item.name} className="flow-root">
                        <a
                          href={item.href}
                          className="text-sm text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white md:text-xs"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="border-b border-dotted"> </div>
      </div>

      <div className="flex flex-wrap justify-center gap-y-6">
        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
          <a
            aria-label="Email"
            href=""
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Mail strokeWidth={1.5} className="h-5 w-5" />
          </a>
          <a
            aria-label="X"
            href=""
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </a>
          <a
            aria-label="Instagram"
            href=""
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            aria-label="Facebook"
            href=""
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            aria-label="LinkedIn"
            href=""
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            aria-label="YouTube"
            href=""
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Youtube className="h-5 w-5" />
          </a>
        </div>
        <ThemeToogle />
      </div>

      <div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-xs md:max-w-7xl">
        <div className="flex flex-row items-center justify-center gap-1 text-slate-600 dark:text-slate-400">
          <p className="text-sm">

          </p>
        </div>
      </div>
    </footer>
  );
}
