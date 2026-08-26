"use client";

import { getLearningMaterials } from "@/src/entities/portfolio/repository";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Learning = () => {
  const learningData = getLearningMaterials();

  return (
    <section id="learning" className="bg-cream py-24 md:py-32 lg:py-40 scroll-mt-20">
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
            <span className="section-divider" />
            <span className="section-label">Journal</span>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-ink leading-tight mb-6">
              Learning
              <br />
              <span className="italic">Materials</span>
            </h2>
            <div className="section-divider h-px w-24 mb-8" />
            <p className="text-sm md:text-base text-sage leading-relaxed max-w-2xl">
              Curated study notes and knowledge modules compiled across IT infrastructure,
              service management, and professional development.
            </p>
          </motion.div>

          {/* Learning List */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-px bg-mist"
          >
            {learningData.map((material, index) => (
              <Link
                key={material.slug}
                href={`/learning/${material.slug}`}
                className="block bg-cream group"
              >
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 md:p-10 hover:bg-cream-light transition-colors duration-300"
                >
                  {/* Thumbnail */}
                  <div className="w-full sm:w-48 h-32 relative shrink-0 overflow-hidden">
                    <Image
                      src={material.bgImage}
                      alt={material.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 640px) 100vw, 192px"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-mist mb-2">
                      {material.category}
                    </p>
                    <h3 className="text-xl font-serif text-ink group-hover:text-sage transition-colors duration-300 mb-2">
                      {material.title}
                    </h3>
                    <p className="text-sm text-sage leading-relaxed line-clamp-2">
                      {material.description}
                    </p>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-6 text-[10px] tracking-wider uppercase text-mist shrink-0">
                    <span>{material.duration}</span>
                    <span className="hidden sm:inline text-stone">·</span>
                    <span className="hidden sm:inline">{material.level}</span>
                    <span className="text-ink text-lg group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <a href="#contact" className="btn-outline">
              Suggest a Topic
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
