"use client";

import { getToolIcons } from '@/src/entities/portfolio/repository';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const toolsData = getToolIcons();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  const education = [
    {
      period: '2021 — 2025',
      institution: 'Islamic University of Indonesia',
      field: 'Electrical Engineering Technologies',
      degree: 'Bachelor of Engineering',
    },
    {
      period: '2018 — 2021',
      institution: 'State Senior High School 1 Berastagi',
      field: 'Mathematics and Natural Science',
      degree: 'High School Diploma',
    },
  ];

  return (
    <section id="about" className="bg-cream-light py-24 md:py-32 lg:py-40 scroll-mt-20">
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
            <span className="section-label">About</span>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Main Two-Column */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20 md:mb-28">
              {/* Left — Editorial statement */}
              <motion.div variants={itemVariants} className="lg:col-span-7">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-ink leading-tight mb-8">
                  Building intelligent
                  <br />
                  <span className="italic">solutions</span>
                </h2>

                <div className="section-divider h-px w-24 mb-8" />

                <p className="text-sm md:text-base text-sage leading-relaxed max-w-xl mb-6">
                  Electrical Engineering graduate with hands-on experience building end-to-end
                  AI systems — from data pipelines and model training to production deployment.
                  Specialized in computer vision, NLP, and full-stack web development.
                </p>

                <p className="text-sm md:text-base text-sage leading-relaxed max-w-xl">
                  Recognized with Top 3 Favorite Thesis Award for a real-time exam cheating
                  detection system using YOLOv8 on edge hardware. Currently building intelligent
                  automation tools and data-driven solutions.
                </p>
              </motion.div>

              {/* Right — Education */}
              <motion.div variants={itemVariants} className="lg:col-span-5">
                <h3 className="section-label mb-8">Education</h3>

                <div className="space-y-10">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="pb-8 border-b border-mist last:border-0"
                    >
                      <p className="text-[10px] tracking-[0.2em] uppercase text-mist mb-2">
                        {edu.period}
                      </p>
                      <h4 className="text-base font-serif text-ink mb-1">{edu.institution}</h4>
                      <p className="text-sm text-sage mb-1">{edu.field}</p>
                      <p className="text-[10px] tracking-wider uppercase text-mist">{edu.degree}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Technical Toolkit */}
            <motion.div variants={itemVariants} className="mb-20 md:mb-28">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                <h3 className="section-label">Technical Toolkit</h3>
                <p className="text-xs text-sage max-w-sm">
                  Technologies and tools used to build intelligent solutions
                </p>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-px bg-mist">
                {toolsData.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.03 }}
                    viewport={{ once: true }}
                    className="bg-cream-light aspect-square flex items-center justify-center p-2 hover:bg-cream transition-colors duration-300"
                  >
                    <Image
                      src={tool}
                      alt="Tool"
                      className="w-full h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      width={32}
                      height={32}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: '98%', label: 'Training Accuracy' },
                { value: '<3s', label: 'System Latency' },
                { value: 'Top 3', label: 'Favorite Thesis Award' },
                { value: '2025', label: 'Graduated' },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl md:text-4xl font-serif text-ink mb-2">{stat.value}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-sage">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
