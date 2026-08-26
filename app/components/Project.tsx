"use client";

import { getProjects } from "@/src/entities/portfolio/repository";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  const workData = getProjects();

  return (
    <section id="project" className="bg-dark-bg py-24 md:py-32 lg:py-40 scroll-mt-20">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16 md:mb-24"
          >
            <span className="section-divider bg-stone" />
            <span className="section-label text-stone">Selected Works</span>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-paper leading-tight mb-6">
              Recent
              <br />
              <span className="italic">Projects</span>
            </h2>
            <div className="section-divider h-px w-24 bg-stone mb-8" />
            <p className="text-sm md:text-base text-stone leading-relaxed max-w-2xl">
              A selection of recent projects spanning computer vision, machine learning,
              NLP, and data engineering — each demonstrating a practical approach to
              complex problems.
            </p>
          </motion.div>

          {/* Project Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/30"
          >
            {workData.map((project, index) => {
              const slug = project.slug || project.title.toLowerCase().replace(/[^\w]+/g, "-");

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <Link href={`/project/${slug}`}>
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone/20">
                      <Image
                        src={project.bgImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-all duration-500" />
                    </div>

                    {/* Caption */}
                    <div className="p-5 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-stone mb-2">
                          {project.category}
                        </p>
                        <h3 className="text-base font-serif text-paper group-hover:text-mist transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                      <span className="text-stone group-hover:text-paper transition-colors duration-300 text-lg shrink-0 mt-1">
                        →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16 md:mt-24"
          >
            <a
              href="https://github.com/agik20"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-stone text-stone hover:bg-paper hover:text-ink hover:border-paper transition-all duration-300"
            >
              View Full Portfolio
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;
