import { assets, infoList, toolsData, tool } from '@/assets/assets'
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

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
            className="text-sm font-medium text-mid tracking-wider uppercase mb-3 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
          >
            Professional Profile
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-normal text-darkest mb-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-16 h-0.5 bg-mid mx-auto"
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
              className="text-2xl md:text-3xl text-darkest mb-12 relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-mid"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              Education
            </motion.h3>

            <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-lightest">
              {/* Education Item 1 */}
              <motion.div 
                className="relative mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-mid border-4 border-white shadow-md"></div>
                <time 
                  className="text-xs font-medium text-mid tracking-wide mb-2 block"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  2018 - 2021
                </time>
                <h4 
                  className="text-lg font-semibold text-darkest mb-1"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  State Senior High School 1 Berastagi
                </h4>
                <p 
                  className="text-gray-600 text-sm"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  Mathematics and Natural Science
                </p>
                <p 
                  className="text-gray-500 text-xs mt-2"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  High School Diploma
                </p>
              </motion.div>

              {/* Education Item 2 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-mid border-4 border-white shadow-md"></div>
                <time 
                  className="text-xs font-medium text-mid tracking-wide mb-2 block"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  2021 - 2025
                </time>
                <h4 
                  className="text-lg font-semibold text-darkest mb-1"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  Islamic University of Indonesia
                </h4>
                <p 
                  className="text-gray-600 text-sm"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  Electrical Engineering Technologies
                </p>
                <p 
                  className="text-gray-500 text-xs mt-2"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  Bachelor of Engineering – BE
                </p>
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
              <p 
                className="text-gray-700 leading-relaxed mb-10 font-light"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                Results-driven Electrical Engineering graduate (B.Eng.) with hands-on experience developing real-time intelligent automation systems using Deep Learning and Computer Vision. Engineered and deployed AI-based detection systems with up to 98% training accuracy and sub-3s latency, recognized through a Top 3 Favorite Thesis Award for innovation in real-time exam monitoring automation. Proficient in Python, TensorFlow, and PyTorch with strong foundations in data analysis, system modeling, and algorithm optimization. Committed to leveraging AI for scalable, data-driven decision systems that bridge research innovation with industrial implementation.
              </p>

              <motion.h4 
                className="text-xl text-darkest mb-8 mt-12 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-mid"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                Technical Toolkit
              </motion.h4>
              <motion.ul 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, delay: 1.5}}                  
                className='flex items-center gap-3 sm:gap-5'
              >
                {toolsData.map((tool, index)=>(
                  <motion.li 
                    whileHover={{scale: 1}}
                    className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' 
                    key={index}
                  >
                    <Image src={tool} alt='Tool' className='w-5 sm:w-7'></Image>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;