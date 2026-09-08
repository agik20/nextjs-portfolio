"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/src/entities/portfolio/repository";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projects = getProjects();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Chapter marker fade in
      gsap.fromTo(".projects-chapter",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-chapter",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Title reveal — line by line
      const titleLines = gsap.utils.toArray<HTMLElement>(".project-title-line");
      gsap.fromTo(titleLines,
        { opacity: 0, y: 50, clipPath: "inset(0 0 100% 0)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".projects-title",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Description line
      gsap.fromTo(".projects-desc",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-desc",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Project rows — staggered reveal
      const rows = gsap.utils.toArray<HTMLElement>(".project-row");

      rows.forEach((row, i) => {
        const image = row.querySelector<HTMLElement>(".project-image");
        const content = row.querySelector<HTMLElement>(".project-content");
        const number = row.querySelector<HTMLElement>(".project-number");
        const title = row.querySelector<HTMLElement>(".project-title");
        const desc = row.querySelector<HTMLElement>(".project-desc");

        // Image mask reveal
        if (image) {
          gsap.fromTo(image,
            { clipPath: "inset(0 100% 0 0)" },
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 1.4,
              ease: "power4.inOut",
              scrollTrigger: {
                trigger: row,
                start: "top 80%",
                end: "top 20%",
                scrub: 1,
              },
            }
          );
        }

        // Content stagger
        if (content) {
          const children = Array.from(content.children);
          gsap.fromTo(children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
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
      id="work"
      ref={sectionRef}
      className="bg-[#0a0a0a] py-32 overflow-hidden"
    >
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Chapter marker */}
          <p className="projects-chapter text-[10px] tracking-[0.4em] uppercase text-white/30 mb-8">
            CH. IV — Selected Works
          </p>

          {/* Title */}
          <h1 className="projects-title font-serif font-light text-white leading-[0.9] max-w-4xl mb-10">
            <span className="block project-title-line text-[clamp(2.5rem,5vw,5.5rem)] tracking-[-0.03em]">
              A body of work
            </span>
            <span className="block project-title-line text-[clamp(2.5rem,5vw,5.5rem)] tracking-[-0.03em] italic text-gold">
              built at the intersection
            </span>
            <span className="block project-title-line text-[clamp(2.5rem,5vw,5.5rem)] tracking-[-0.03em] italic text-gold">
              of intelligence and craft
            </span>
          </h1>

          <p className="projects-desc text-white/50 leading-relaxed text-sm max-w-md font-light mb-20">
            Each project represents a distinct challenge — from real-time computer vision
            systems to enterprise AI assistants. The common thread is a commitment to
            robust engineering and thoughtful design.
          </p>
        </div>

        {/* Projects */}
        <div className="max-w-7xl mx-auto space-y-48 md:space-y-64">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="project-row grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start"
            >
              {/* Image */}
              <Link href={`/project/${project.slug}`} className="block group">
                <div
                  className={`project-image relative aspect-[4/3] overflow-hidden bg-[#1a1a1a] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={project.bgImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
                </div>
              </Link>

              {/* Content */}
              <div
                className={`project-content lg:order-1 ${index % 2 === 1 ? "lg:ml-auto lg:max-w-lg" : ""}`}
              >
                <p className="project-number text-[10px] tracking-[0.4em] uppercase text-white/30 mb-6">
                  0{index + 1}
                </p>

                <h2 className="project-title text-3xl md:text-4xl lg:text-5xl font-serif font-light text-white leading-[1.1] mb-6">
                  {project.title}
                </h2>

                <p className="project-desc text-white/60 leading-relaxed text-sm mb-8 font-light">
                  {project.description}
                </p>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.slice(0, 5).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[9px] tracking-wider uppercase text-white/40 border border-white/15 px-3 py-1.5 hover:border-gold/50 hover:text-gold transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <Link
                  href={`/project/${project.slug}`}
                  data-magnetic
                  className="inline-flex items-center gap-4 text-xs tracking-widest uppercase text-white/50 hover:text-gold transition-colors duration-300"
                >
                  <span>View Case Study</span>
                  <span className="w-8 h-px bg-white/30 group-hover:bg-gold transition-colors duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
