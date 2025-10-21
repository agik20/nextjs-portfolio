import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { assets, serviceData } from '@/assets/assets'

const Skills = () => {
  return (
    <motion.section 
      id="skills" 
      className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-24 scroll-mt-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="text-sm font-medium text-mid tracking-wider uppercase mb-3 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technical Abilities
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-normal text-darkest mb-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            My Expertise
          </motion.h2>
          <motion.div 
            className="w-16 h-0.5 bg-mid mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.header>

        <motion.p 
          className="text-center max-w-3xl mx-auto mt-5 mb-16 text-gray-700 leading-relaxed font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          I specialize in the complete data science pipeline, from meticulous data cleaning and exploratory analysis to building, tuning, and deploying machine learning models. My focus is on transforming raw data into actionable insights and production-ready solutions that address real-world challenges and enable data-driven decision-making.
        </motion.p>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {serviceData.map(({icon, title, description, link}, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                <div className="w-8 h-8 relative">
                  <Image src={icon} alt={title} fill className="object-contain" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-darkest mb-4">{title}</h3>
              
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{description}</p>
              
              <a 
                href={link} 
                className="flex items-center gap-2 text-mid font-medium text-sm mt-auto group"
              >
                Read more
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills