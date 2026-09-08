"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import HeroCanvas from "./HeroCanvas";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Parallax circles
    gsap.to(".hero-circle-1", {
      y: -120,
      scale: 1.08,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.to(".hero-circle-2", {
      y: -60,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    // Title fade-out on scroll
    gsap.to(titleRef.current, {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "30% top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Scroll indicator bounce
    gsap.to(".hero-scroll-indicator", {
      y: 15,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <>
      <HeroCanvas />

      <section
        ref={containerRef}
        id="top"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream"
      >
        {/* Background dot pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-[1]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Decorative parallax circles */}
        <div className="hero-circle-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-mist/20 pointer-events-none z-[1]" />
        <div className="hero-circle-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-mist/15 pointer-events-none z-[1]" />

        {/* Main content — always visible, no scroll-triggered reveal */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="hero-chapter text-[10px] tracking-[0.5em] uppercase text-sage mb-10">
            CH. I &mdash; Portfolio &bull; Data Science &bull; AI Engineering
          </p>

          <h1 ref={titleRef} className="font-serif font-light text-ink leading-none mb-8">
            <span className="block hero-line">
              <span className="inline-block hero-char text-[clamp(3rem,8vw,7rem)] tracking-[-0.03em]">
                Ardutra
              </span>
            </span>
            <span className="block hero-line">
              <span className="inline-block hero-char text-[clamp(3rem,8vw,7rem)] tracking-[-0.03em]">
                Agi
              </span>
            </span>
            <span className="block hero-line">
              <span className="inline-block hero-char text-[clamp(3rem,8vw,7rem)] tracking-[-0.03em] italic text-gold">
                Ginting
              </span>
            </span>
          </h1>

          <div className="h-16 md:h-20 overflow-hidden mb-10 relative">
            <RotatingWords />
          </div>

          <p className="text-sm md:text-base text-sage max-w-xl mx-auto mb-12 leading-relaxed">
            Building intelligent systems that see, learn, and act in real-time.
            Based in Jakarta, crafting AI solutions from Indonesia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center hero-cta">
            <Link href="#work" className="btn-outline-large group">
              <span className="flex items-center gap-3">
                View Projects
                <motion.span
                  className="w-0 group-hover:w-6 h-px bg-gold transition-all duration-300"
                  whileHover={{ width: 24 }}
                />
              </span>
            </Link>
            <Link href="#contact" className="btn-primary group">
              <span className="flex items-center gap-3">
                Get in Touch
                <motion.span
                  className="w-0 group-hover:w-6 h-px bg-ink transition-all duration-300"
                  whileHover={{ width: 24 }}
                />
              </span>
            </Link>
          </div>
        </div>

        <div className="hero-scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
          <span className="text-[9px] tracking-[0.3em] uppercase text-mist">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-mist to-transparent" />
        </div>
      </section>
    </>
  );
};

function RotatingWords() {
  const words = ["Intelligent", "Visionary", "Architect"];
  return (
    <motion.div
      animate={{ y: [-288, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      className="flex flex-col gap-4"
    >
      {[...words, ...words, ...words].map((word, i) => (
        <motion.p
          key={i}
          className="text-display md:text-section font-serif font-light text-ink text-balance"
        >
          {word}
        </motion.p>
      ))}
    </motion.div>
  );
}

export default Hero;
