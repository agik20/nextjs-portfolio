"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { assets, serviceData } from '@/assets/assets'

const Skills = () => {
  const [selectedService, setSelectedService] = useState(null)

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
        {/* Header */}
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.span className="text-sm font-medium text-mid tracking-wider uppercase mb-3 block">
            Technical Abilities
          </motion.span>
          <motion.h2 className="text-4xl md:text-5xl font-normal text-darkest mb-5">
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
        >
          I specialize in the complete data science pipeline — from data exploration and model training to scalable deployment. My focus is on building reliable AI-driven systems that convert complex data into meaningful, actionable outcomes.
        </motion.p>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {serviceData.map(({icon, title, description, professionalDetails}, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              whileHover={{ y: -8 }}
            >
              <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                <div className="w-8 h-8 relative">
                  <Image src={icon} alt={title} fill className="object-contain" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-darkest mb-4">{title}</h3>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{description}</p>
              
              <button
                onClick={() => setSelectedService({ title, description, professionalDetails })}
                className="flex items-center gap-2 text-mid font-medium text-sm mt-auto group"
              >
                View Professional Details
                <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.span>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div 
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4 py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div 
                className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 30 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-semibold text-darkest">{selectedService.title}</h3>
                    <button onClick={() => setSelectedService(null)} className="text-gray-400 hover:text-gray-700 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-darkest mb-3">Overview</h4>
                      <p className="text-gray-700 leading-relaxed">{selectedService.description}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-darkest mb-3">Business Value</h4>
                      <p className="text-gray-700 leading-relaxed">{selectedService.professionalDetails.businessValue}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-darkest mb-3">Collaboration & Teamwork</h4>
                      <p className="text-gray-700 leading-relaxed">{selectedService.professionalDetails.collaboration}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-darkest mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {selectedService.professionalDetails.keyAchievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700">
                            <span className="w-2 h-2 bg-mid rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-darkest mb-3">Core Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.professionalDetails.toolsTechnologies.map((tool, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="text-lg font-medium text-darkest mb-2">Professional Impact</h4>
                      <p className="text-gray-700 text-sm">
                        This expertise enables me to deliver robust, scalable solutions that align with business objectives 
                        and drive measurable results through effective collaboration and technical excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

export default Skills
