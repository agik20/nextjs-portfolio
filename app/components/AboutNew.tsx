"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function AboutNew() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const paragraphRefs = useRef<HTMLParagraphElement[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Title character reveal
      const titleChars = titleRef.current?.querySelectorAll<HTMLElement>(".about-char") ?? [];
      if (titleChars.length) {
        gsap.set(titleChars, { opacity: 0, y: 80, rotateX: -90 });
        gsap.to(titleChars, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.025,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Divider line draw
      gsap.fromTo(dividerRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          delay: 0.4,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Paragraphs stagger reveal
      paragraphRefs.current.forEach((p, i) => {
        gsap.fromTo(p,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.15 + 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Image parallax
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: -40,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
        gsap.fromTo(imageRef.current,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.4,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "top 25%",
              scrub: 1,
            },
          }
        );
      }

      // Stats counter
      if (statsRef.current) {
        gsap.fromTo(statsRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden py-32"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative w-full px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Chapter marker */}
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-16">
            CH. II — About
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left — Cinematic portrait */}
            <div ref={imageRef} className="relative order-2 lg:order-1">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Ardutra Agi Ginting"
                  fill
                  className="object-cover filter brightness-[0.75] contrast-[1.1] saturate-[0.7]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
              </div>
              {/* Corner accent */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-gold/40" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-gold/40" />
              {/* Location badge */}
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3">
                <p className="text-[9px] tracking-[0.3em] uppercase text-white/50 mb-1">Based in</p>
                <p className="text-sm font-serif text-white italic">Jakarta, Indonesia</p>
              </div>
            </div>

            {/* Right — Typography */}
            <div className="order-1 lg:order-2">
              <h2 ref={titleRef} className="font-serif font-light text-white leading-[0.9] mb-10">
                <span className="block about-char text-[clamp(2.5rem,5vw,5rem)] tracking-[-0.03em]">
                  Building AI
                </span>
                <span className="block about-char text-[clamp(2.5rem,5vw,5rem)] tracking-[-0.03em] italic text-gold">
                  that understands
                </span>
                <span className="block about-char text-[clamp(2.5rem,5vw,5rem)] tracking-[-0.03em]">
                  the world
                </span>
              </h2>

              <div ref={dividerRef} className="h-px bg-white/20 w-24 mb-10" style={{ transformOrigin: "left" }} />

              <p ref={(el) => { paragraphRefs.current[0] = el!; }} className="text-base text-white/70 leading-[1.8] mb-6 max-w-lg font-light">
                Electrical Engineering graduate with hands-on experience building
                end-to-end AI systems — from data pipelines and model training to
                production deployment. Specialized in computer vision, NLP, and
                full-stack web development.
              </p>

              <p ref={(el) => { paragraphRefs.current[1] = el!; }} className="text-base text-white/70 leading-[1.8] mb-14 max-w-lg font-light">
                Recognized with Top 3 Favorite Thesis Award for a real-time exam
                cheating detection system using YOLOv8 on edge hardware.
              </p>

              <div ref={statsRef} className="flex flex-wrap gap-x-12 gap-y-8 mb-14">
                {[
                  { value: "98%", label: "Model Accuracy" },
                  { value: "&lt;3s", label: "Inference Time" },
                  { value: "Top 3", label: "Thesis Award" },
                  { value: "6+", label: "Projects" },
                ].map((stat, i) => (
                  <div key={i} className="stat-item">
                    <p className="text-3xl md:text-4xl font-serif font-light text-white mb-1">{stat.value}</p>
                    <p className="text-[9px] tracking-[0.3em] uppercase text-white/40">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/work"
                data-magnetic
                className="group inline-flex items-center gap-4 text-xs tracking-[0.25em] uppercase text-white/50 hover:text-white transition-colors duration-300"
              >
                <span>View Projects</span>
                <span className="w-8 h-px bg-white/30 group-hover:bg-gold transition-colors duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
