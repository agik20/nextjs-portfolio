"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    slug: string;
    title: string;
    description: string;
    bgImage: string;
    technologies?: string[];
    index: number;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rotateX: -y * 8, rotateY: x * 8 });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const isRight = project.index % 2 === 1;

  return (
    <div
      ref={cardRef}
      className={`project-row grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start ${
        isRight ? "lg:flex-row-reverse" : ""
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={`/project/${project.slug}`} className="block group">
        <div
          className="project-image relative aspect-[4/3] overflow-hidden bg-[#1a1a1a] transition-all duration-300"
          style={{
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            src={project.bgImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 rounded-sm transition-colors duration-300" />
        </div>
      </Link>

      <div
        className="project-content lg:max-w-lg"
        style={{ transform: "translateZ(20px)" }}
      >
        <p className="project-number text-[10px] tracking-[0.4em] uppercase text-white/30 mb-6">
          0{project.index + 1}
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
  );
}
