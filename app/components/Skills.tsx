"use client";

import { getServiceCapabilities } from '@/src/entities/portfolio/repository';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Skills = () => {
  const serviceData = getServiceCapabilities();

  return (
    <section id="skills" className="bg-cream py-24 md:py-32 lg:py-40 scroll-mt-20">
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
            <span className="section-label">Expertise</span>
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
              Technical
              <br />
              <span className="italic">Capabilities</span>
            </h2>
            <div className="section-divider h-px w-24 mb-8" />
            <p className="text-sm md:text-base text-sage leading-relaxed max-w-2xl">
              I specialize in the complete data science pipeline — from data exploration and
              model training to scalable deployment. Focused on building reliable AI-driven
              systems that convert complex data into meaningful outcomes.
            </p>
          </motion.div>

          {/* Skills Grid — 2x2, no borders */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-mist"
          >
            {serviceData.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream p-10 md:p-14 flex flex-col gap-6 group"
              >
                <div className="w-10 h-10 relative grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  <Image src={service.icon as string} alt={service.title} fill className="object-contain" />
                </div>

                <h3 className="text-xl md:text-2xl font-serif text-ink">
                  {service.title}
                </h3>

                <p className="text-sm text-sage leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-6">
                  {service.professionalDetails.toolsTechnologies.slice(0, 4).map((tool, i) => (
                    <span
                      key={i}
                      className="text-[10px] tracking-wider uppercase text-mist border border-mist px-3 py-1.5 hover:border-ink hover:text-ink transition-colors duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
