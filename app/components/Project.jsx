"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { assets, workData } from "@/assets/assets"

const Project = () => {
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
      id="project"
      className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16 sm:py-20 md:py-24 lg:py-32 scroll-mt-20 bg-gray-50"
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
            Selected Works
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
              Recent
              <br />
              <span className="font-normal">Projects</span>
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
              Explore a selection of my recent projects, ranging from academic assignments and competition 
              entries to independent initiatives. Each project demonstrates my approach to problem-solving, 
              technical execution, and attention to detail.
            </p>
          </motion.div>

          {/* Project Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={containerVariants}
          >
            {workData.map((project, index) => {
              const slug = project.slug || project.title.toLowerCase().replace(/[^\w]+/g, "-")

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group overflow-hidden bg-white border border-gray-200 cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  <Link href={`/project/${slug}`}>
                    {/* Project Image */}
                    <div className="aspect-square relative overflow-hidden">
                      <Image
                        src={project.bgImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500" />
                      
                      {/* Content */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <h3
                            className="font-normal text-base sm:text-lg mb-2"
                            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                          >
                            {project.title}
                          </h3>
                          <p
                            className="text-xs sm:text-sm text-gray-200 line-clamp-2"
                            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                          >
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="p-4 sm:p-5 flex items-center justify-between border-t border-gray-200">
                      <span
                        className="text-[10px] sm:text-xs tracking-wider text-gray-600 uppercase"
                        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                      >
                        {project.category || "Project"}
                      </span>
                      <motion.div
                        className="transition-transform group-hover:translate-x-1"
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-sm">→</span>
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-12 sm:mt-16 md:mt-20"
          >
            <motion.a
              href="https://github.com/agik20"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 sm:px-8 py-3 border border-black text-black flex items-center justify-between gap-4 hover:bg-black hover:text-white transition-colors duration-300"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              <span className="text-xs sm:text-sm tracking-wide uppercase">View Full Portfolio</span>
              <motion.span
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-16 border-t border-gray-300 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          <div className="space-y-1.5 sm:space-y-2">
            <div className="text-2xl sm:text-3xl font-light text-black"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
              {workData.length}+
            </div>
            <div className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wider"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
              Projects Completed
            </div>
          </div>
          
          <div className="space-y-1.5 sm:space-y-2">
            <div className="text-2xl sm:text-3xl font-light text-black"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
              100%
            </div>
            <div className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wider"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
              Client Satisfaction
            </div>
          </div>
          
          <div className="space-y-1.5 sm:space-y-2">
            <div className="text-2xl sm:text-3xl font-light text-black"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
              Open
            </div>
            <div className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wider"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
              Source Contributions
            </div>
          </div>
          
          <div className="space-y-1.5 sm:space-y-2">
            <div className="text-2xl sm:text-3xl font-light text-black"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
              2025
            </div>
            <div className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wider"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
              Active Since
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Project