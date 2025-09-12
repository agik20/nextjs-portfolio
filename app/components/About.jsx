import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

// Data tools (gantilah dengan data aktual Anda)
const toolsData = [
  { name: 'Python', icon: '/python-icon.svg' },
  { name: 'TensorFlow', icon: '/tensorflow-icon.svg' },
  { name: 'PyTorch', icon: '/pytorch-icon.svg' },
  { name: 'OpenCV', icon: '/opencv-icon.svg' },
  { name: 'React', icon: '/react-icon.svg' },
  { name: 'NextJS', icon: '/nextjs-icon.svg' },
];

const About = () => {
  return (
    <motion.section
      id="about"
      className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-24 scroll-mt-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="text-sm font-medium text-blue-600 tracking-wider uppercase mb-3 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional Profile
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-normal text-gray-900 mb-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-16 h-0.5 bg-blue-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="font-serif text-2xl md:text-3xl text-gray-900 mb-12 relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-blue-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Education
            </motion.h3>

            <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-gray-200">
              {/* Education Item 1 */}
              <motion.div 
                className="relative mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md"></div>
                <time className="text-xs font-medium text-blue-600 tracking-wide mb-2 block">2018 - 2021</time>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">State Senior High School 1 Berastagi</h4>
                <p className="text-gray-600 text-sm">Mathematics and Natural Science</p>
                <p className="text-gray-500 text-xs mt-2">High School Diploma</p>
              </motion.div>

              {/* Education Item 2 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md"></div>
                <time className="text-xs font-medium text-blue-600 tracking-wide mb-2 block">2021 - 2025</time>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Islamic University of Indonesia</h4>
                <p className="text-gray-600 text-sm">Electrical Engineering Technologies</p>
                <p className="text-gray-500 text-xs mt-2">Bachelor of Engineering – BE</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Description & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 leading-relaxed mb-10 font-light">
                I am an AI and Machine Learning specialist with extensive expertise in computer vision, 
                deep learning architectures, and intelligent system design. My approach combines technical 
                excellence with practical implementation, focusing on developing scalable AI solutions 
                that address real-world challenges. I excel at optimizing complex systems and transforming 
                theoretical concepts into high-impact applications with measurable results.
              </p>

              <motion.h4 
                className="font-serif text-xl text-gray-900 mb-8 mt-12 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-blue-600"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Technical Toolkit
              </motion.h4>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-4 sm:grid-cols-6 gap-4"
              >
                {toolsData.map((tool, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors duration-300 group"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 relative mb-2 flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium text-gray-700">
                        {tool.name.charAt(0)}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors duration-300 text-center">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;