"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { assets, serviceData } from '@/assets/assets'

const Skills = () => {
  const [selectedService, setSelectedService] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section 
      id="skills" 
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
            Expertise
          </span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16 md:mb-20">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-6 sm:mb-8 leading-tight"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              Technical
              <br />
              <span className="font-normal">Capabilities</span>
            </h2>
            
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.5 }}
              className='h-[0.5px] sm:h-[1px] bg-gradient-to-r from-black via-gray-400 to-transparent mb-6 sm:mb-8'
            />

            <p 
              className="max-w-3xl text-sm sm:text-base text-gray-700 leading-relaxed"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              I specialize in the complete data science pipeline — from data exploration and model training 
              to scalable deployment. My focus is on building reliable AI-driven systems that convert complex 
              data into meaningful, actionable outcomes.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            variants={containerVariants}
          >
            {serviceData.map(({icon, title, description, professionalDetails}, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white border border-gray-200 p-6 sm:p-8 flex flex-col h-full group cursor-pointer hover:border-black transition-colors duration-300"
                whileHover={{ y: -4 }}
                onClick={() => setSelectedService({ title, description, professionalDetails })}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-6 sm:mb-8">
                  <div className="w-full h-full relative grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Image src={icon} alt={title} fill className="object-contain" />
                  </div>
                </div>
                
                <h3 
                  className="text-base sm:text-lg font-normal text-black mb-3 sm:mb-4"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  {title}
                </h3>
                
                <p 
                  className="text-xs sm:text-sm text-gray-600 mb-6 flex-grow leading-relaxed"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  {description}
                </p>
                
                <div className="flex items-center gap-2 text-[10px] sm:text-xs text-black uppercase tracking-wider group-hover:gap-3 transition-all">
                  <span style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                    View Details
                  </span>
                  <motion.span 
                    className="transition-transform"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.2 }}
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div 
                className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 sm:p-8 flex justify-between items-start z-10">
                  <h3 
                    className="text-xl sm:text-2xl font-normal text-black"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                  >
                    {selectedService.title}
                  </h3>
                  <button 
                    onClick={() => setSelectedService(null)} 
                    className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Close modal"
                  >
                    <span className="text-2xl font-light">×</span>
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 space-y-8 sm:space-y-10">
                  <div>
                    <h4 
                      className="text-xs sm:text-sm tracking-[0.2em] text-gray-600 uppercase mb-4"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      Overview
                    </h4>
                    <p 
                      className="text-sm sm:text-base text-gray-700 leading-relaxed"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      {selectedService.description}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-8 sm:pt-10">
                    <h4 
                      className="text-xs sm:text-sm tracking-[0.2em] text-gray-600 uppercase mb-4"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      Business Value
                    </h4>
                    <p 
                      className="text-sm sm:text-base text-gray-700 leading-relaxed"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      {selectedService.professionalDetails.businessValue}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-8 sm:pt-10">
                    <h4 
                      className="text-xs sm:text-sm tracking-[0.2em] text-gray-600 uppercase mb-4"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      Collaboration & Teamwork
                    </h4>
                    <p 
                      className="text-sm sm:text-base text-gray-700 leading-relaxed"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      {selectedService.professionalDetails.collaboration}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-8 sm:pt-10">
                    <h4 
                      className="text-xs sm:text-sm tracking-[0.2em] text-gray-600 uppercase mb-6"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      Key Achievements
                    </h4>
                    <ul className="space-y-4">
                      {selectedService.professionalDetails.keyAchievements.map((achievement, i) => (
                        <li 
                          key={i} 
                          className="flex items-start gap-4 text-sm sm:text-base text-gray-700"
                          style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                        >
                          <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-8 sm:pt-10">
                    <h4 
                      className="text-xs sm:text-sm tracking-[0.2em] text-gray-600 uppercase mb-6"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      Core Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {selectedService.professionalDetails.toolsTechnologies.map((tool, i) => (
                        <span 
                          key={i} 
                          className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 text-gray-700 text-xs sm:text-sm font-light"
                          style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border border-gray-200 p-6 sm:p-8 bg-gray-50">
                    <h4 
                      className="text-xs sm:text-sm tracking-[0.2em] text-gray-600 uppercase mb-3"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      Professional Impact
                    </h4>
                    <p 
                      className="text-xs sm:text-sm text-gray-700 leading-relaxed"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      This expertise enables me to deliver robust, scalable solutions that align with business objectives 
                      and drive measurable results through effective collaboration and technical excellence.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Skills