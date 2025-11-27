import { assets, infoList, toolsData, tool } from '@/assets/assets'
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const education = [
    {
      period: '2018 — 2021',
      institution: 'State Senior High School 1 Berastagi',
      field: 'Mathematics and Natural Science',
      degree: 'High School Diploma'
    },
    {
      period: '2021 — 2025',
      institution: 'Islamic University of Indonesia',
      field: 'Electrical Engineering Technologies',
      degree: 'Bachelor of Engineering – BE'
    }
  ]

  return (
    <section
      id="about"
      className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16 sm:py-20 md:py-24 lg:py-32 scroll-mt-20 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 sm:gap-4 mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '3rem' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='h-[1.5px] sm:h-[2px] bg-black'
          />
          <span className='text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-gray-600 uppercase'
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
            About
          </span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
            {/* Left Column - Profile Text */}
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black mb-6 sm:mb-7 md:mb-8 leading-tight"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                Building intelligent
                <br />
                <span className="font-normal">solutions</span>
              </h2>
              
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className='h-[0.5px] sm:h-[1px] bg-gradient-to-r from-black via-gray-400 to-transparent mb-6 sm:mb-8 md:mb-10'
              />

              <p 
                className="text-sm sm:text-base leading-relaxed text-gray-700 mb-5 sm:mb-6 md:mb-8"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                Results-driven Electrical Engineering graduate (B.Eng.) with hands-on experience 
                developing real-time intelligent automation systems using Deep Learning and Computer Vision.
              </p>

              <p 
                className="text-sm sm:text-base leading-relaxed text-gray-700"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                Engineered and deployed AI-based detection systems with up to 98% training accuracy 
                and sub-3s latency, recognized through a Top 3 Favorite Thesis Award for innovation 
                in real-time exam monitoring automation. Proficient in Python, TensorFlow, and PyTorch 
                with strong foundations in data analysis, system modeling, and algorithm optimization.
              </p>
            </motion.div>

            {/* Right Column - Education */}
            <motion.div variants={itemVariants} className="lg:col-span-5 mt-8 lg:mt-0">
              <h3 
                className="text-xs sm:text-sm tracking-[0.2em] text-gray-600 uppercase mb-8 sm:mb-10"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                Education
              </h3>

              <div className="space-y-8 sm:space-y-10">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.15) }}
                    viewport={{ once: true }}
                    className="pb-8 sm:pb-10 border-b border-gray-200 last:border-0"
                  >
                    <div className="text-[10px] sm:text-xs tracking-wider text-gray-500 mb-2 sm:mb-3"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                      {edu.period}
                    </div>
                    <h4 
                      className="text-base sm:text-lg font-normal text-black mb-1.5 sm:mb-2"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      {edu.institution}
                    </h4>
                    <p 
                      className="text-xs sm:text-sm text-gray-600 mb-1"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      {edu.field}
                    </p>
                    <p 
                      className="text-[10px] sm:text-xs text-gray-500"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      {edu.degree}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Technical Toolkit Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-14 md:pt-16 border-t border-gray-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8 mb-8 sm:mb-10">
              <h3 
                className="text-xs sm:text-sm tracking-[0.2em] text-gray-600 uppercase"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                Technical Toolkit
              </h3>
              <p 
                className="text-xs sm:text-sm text-gray-500 max-w-md"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                Technologies and tools I work with to build intelligent solutions
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className='grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-10 xl:grid-cols-12 gap-2 sm:gap-3 md:gap-4'
            >
              {toolsData.map((tool, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 + (index * 0.05) }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                  className='flex items-center justify-center aspect-square border border-gray-300 hover:border-black transition-colors duration-300 cursor-pointer bg-white p-1.5 sm:p-2 md:p-3'
                >
                  <Image 
                    src={tool} 
                    alt='Tool' 
                    className='w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300' 
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Bottom Stats/Info */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            <div className="space-y-1.5 sm:space-y-2">
              <div className="text-2xl sm:text-3xl font-light text-black"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                98%
              </div>
              <div className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wider"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                Training Accuracy
              </div>
            </div>
            
            <div className="space-y-1.5 sm:space-y-2">
              <div className="text-2xl sm:text-3xl font-light text-black"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                &lt;3s
              </div>
              <div className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wider"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                System Latency
              </div>
            </div>
            
            <div className="space-y-1.5 sm:space-y-2">
              <div className="text-2xl sm:text-3xl font-light text-black"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                Top 3
              </div>
              <div className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wider"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                Thesis Award
              </div>
            </div>
            
            <div className="space-y-1.5 sm:space-y-2">
              <div className="text-2xl sm:text-3xl font-light text-black"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                2025
              </div>
              <div className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wider"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                Graduated
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;