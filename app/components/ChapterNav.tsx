"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ChapterDot {
  id: string;
  label: string;
  chapter: string;
}

const CHAPTERS: ChapterDot[] = [
  { id: "top", label: "Home", chapter: "CH. I" },
  { id: "about", label: "About", chapter: "CH. II" },
  { id: "skills", label: "Skills", chapter: "CH. III" },
  { id: "work", label: "Work", chapter: "CH. IV" },
  { id: "contact", label: "Contact", chapter: "CH. V" },
];

export default function ChapterNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    CHAPTERS.forEach((ch, i) => {
      const el = document.getElementById(ch.id);
      if (!el) return;

      ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveIndex(i),
        onEnterBack: () => setActiveIndex(i),
      });
    });

    return () => CHAPTERS.forEach(() => ScrollTrigger.refresh());
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      {CHAPTERS.map((ch, i) => (
        <a
          key={ch.id}
          href={`#${ch.id}`}
          className="group flex items-center gap-3"
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById(ch.id);
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span
            className={`text-[9px] tracking-[0.15em] uppercase text-paper opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap ${
              i === activeIndex ? "opacity-60" : ""
            }`}
          >
            {ch.chapter}
          </span>
          <div
            className={`w-2 h-2 rounded-full transition-all duration-400 ${
              i === activeIndex
                ? "bg-gold scale-125"
                : "bg-mist/40 hover:bg-gold/60"
            }`}
          />
        </a>
      ))}
    </div>
  );
}
