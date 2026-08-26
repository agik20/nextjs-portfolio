"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
  };

  return (
    <section
      id="top"
      className="min-h-screen flex items-center bg-cream pt-20 pb-12 md:pb-0"
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
          >
            {/* Left — Typography */}
            <div className="lg:col-span-7 space-y-6">
              <motion.p variants={itemVariants} className="section-label">
                Hey, I&apos;m Ardutra
              </motion.p>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-serif font-light text-ink leading-[0.9] tracking-tight">
                Crafting digital
                <br />
                <span className="italic font-serif font-light">experiences</span>
                <br />
                that inspire.
              </h1>

              <motion.div variants={itemVariants} className="section-divider h-px w-24" />

              <motion.p variants={itemVariants} className="text-base text-sage max-w-md leading-relaxed">
                Data Scientist & AI Engineer specializing in computer vision,
                ML pipelines, and RAG systems — building intelligent solutions from Jakarta, Indonesia.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                <a href="#project" className="btn-filled">
                  View My Work
                </a>
                <a href="/sample_resume.pdf" download className="btn-outline">
                  Resume
                </a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-x-6 gap-y-2 pt-8 text-[10px] tracking-[0.2em] uppercase text-mist"
              >
                <span>Computer Vision</span>
                <span className="text-stone">•</span>
                <span>ML Pipelines</span>
                <span className="text-stone">•</span>
                <span>RAG Systems</span>
                <span className="text-stone">•</span>
                <span>Full-stack Dev</span>
              </motion.div>
            </div>

            {/* Right — Photo */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/profile.jpeg"
                  alt="Ardutra Agi Ginting"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-sage mt-4 text-right">
                Based in Jakarta
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;
