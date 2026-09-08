"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Python", icon: "/icons/python.svg" },
      { name: "PyTorch", icon: "/icons/pytorch.svg" },
      { name: "Scikit-learn", icon: "/icons/scikitlearn.svg" },
      { name: "OpenCV", icon: "/icons/opencv.svg" },
      { name: "Jupyter", icon: "/icons/jupyter.svg" },
      { name: "HuggingFace", icon: "/icons/huggingface.svg" },
    ]
  },
  {
    title: "Web & API",
    skills: [
      { name: "FastAPI", icon: "/icons/fastapi.svg" },
      { name: "Flask", icon: "/icons/flask.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/next.svg" },
    ]
  },
  {
    title: "Data & DevOps",
    skills: [
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "Git", icon: "/icons/git.svg" },
      { name: "GitHub", icon: "/icons/github.svg" },
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "Elasticsearch", icon: "/icons/elasticsearch.svg" },
    ]
  }
];

export default function SkillsNew() {
  const sectionRef = useRef<HTMLElement>(null);
  const categoryRefs = useRef<HTMLDivElement[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Header reveal
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Category pillars reveal
      categoryRefs.current.forEach((cat, i) => {
        if (!cat) return;
        const title = cat.querySelector<HTMLElement>(".skill-category-title");
        const iconGrid = cat.querySelector<HTMLElement>(".skill-icon-grid");

        gsap.fromTo(cat,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cat,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Title underline draw
        if (title) {
          gsap.fromTo(title,
            { backgroundSize: "0% 100%" },
            {
              backgroundSize: "100% 100%",
              transition: "background-size 0.8s ease",
              scrollTrigger: {
                trigger: cat,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Stagger icon grid
        if (iconGrid) {
          const icons = iconGrid.querySelectorAll<HTMLElement>(".skill-icon-item");
          gsap.fromTo(icons,
            { opacity: 0, y: 20, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              stagger: 0.05,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: cat,
                start: "top 70%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-[#0a0a0a] py-32 overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative w-full px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div ref={headerRef} className="mb-20">
            <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-6">
              CH. III — Toolkit
            </p>
            <h2 className="font-serif font-light text-white text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.03em]">
              Technical
              <span className="italic text-gold"> expertise</span>
            </h2>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                ref={(el) => { categoryRefs.current[catIndex] = el!; }}
                className="space-y-8"
              >
                <h3 className="skill-category-title text-sm tracking-[0.2em] uppercase text-white/60 border-b border-white/10 pb-4 bg-gradient-to-r from-gold/30 to-transparent bg-no-repeat bg-bottom bg-[length:0%_100%] transition-all">
                  {category.title}
                </h3>

                <div className="skill-icon-grid grid grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="skill-icon-item flex flex-col items-center gap-3 group cursor-pointer"
                    >
                      <div className="w-12 h-12 relative flex items-center justify-center p-3 bg-white/5 rounded-full group-hover:bg-gold/20 transition-all duration-300 border border-white/5 group-hover:border-gold/30">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={24}
                          height={24}
                          className="opacity-60 group-hover:opacity-100 transition-opacity duration-300 invert brightness-200"
                        />
                      </div>
                      <span className="text-[9px] tracking-wider uppercase text-white/40 group-hover:text-white/80 transition-colors duration-300 text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <p className="text-white/30 text-sm mb-8">
              And many more: TensorFlow, Jupyter, Firebase, Figma...
            </p>
            <a
              href="#contact"
              data-magnetic
              className="inline-block px-10 py-4 border border-white/20 text-white/60 text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-ink hover:border-gold transition-all duration-500"
            >
              View Full Stack
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
