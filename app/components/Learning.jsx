"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { learningData } from "@/assets/assets"

const Learning = () => {
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
      id="learning"
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
            Knowledge Base
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
              Learning
              <br />
              <span className="font-normal">Materials</span>
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
              Explore my curated learning materials and knowledge repository. Each module represents 
              comprehensive study materials I've compiled from various learning platforms, covering 
              fundamental to advanced topics in technology and computer science.
            </p>
          </motion.div>

          {/* Learning Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
          >
            {learningData.map((material, index) => (
              <LearningCard key={material.slug} material={material} index={index} />
            ))}
          </motion.div>

          {/* Coming Soon Notice */}
          <motion.div
            variants={itemVariants}
            className="mt-12 sm:mt-16 text-center"
          >
            <p
              className="text-xs sm:text-sm text-gray-500 italic"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              More learning materials coming soon as I continue my studies across various platforms...
            </p>
          </motion.div>

          {/* Suggest Topics Button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-12 sm:mt-16"
          >
            <motion.a
              href="#contact"
              className="group px-6 sm:px-8 py-3 border border-black text-black flex items-center justify-between gap-4 hover:bg-black hover:text-white transition-colors duration-300"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              <span className="text-xs sm:text-sm tracking-wide uppercase">Suggest Learning Topics</span>
              <motion.span className="transition-transform group-hover:translate-x-1">
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Komponen terpisah untuk card learning
const LearningCard = ({ material, index }) => {
  return (
    <motion.div
      className="relative group overflow-hidden bg-white border border-gray-200 cursor-pointer"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <Link href={`/learning/${material.slug}`}>
        {/* Material Image */}
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={material.bgImage}
            alt={material.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
          />
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 text-[10px] sm:text-xs font-normal tracking-wider uppercase ${
              material.status === 'Completed' 
                ? 'bg-black text-white' 
                : 'bg-white text-black border border-black'
            }`}
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
              {material.status}
            </span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500" />
          
          {/* Hover Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3
                className="font-normal text-base sm:text-lg mb-2"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                {material.title}
              </h3>
              <p
                className="text-xs sm:text-sm text-gray-200 line-clamp-2"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                {material.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content Below Image */}
        <div className="p-5 sm:p-6">
          <h3
            className="font-normal text-base sm:text-lg text-black mb-2"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
          >
            {material.title}
          </h3>
          <p
            className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-2"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
          >
            {material.description}
          </p>
          
          {/* Topics Preview */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {material.topics.slice(0, 3).map((topic, topicIndex) => (
                <span
                  key={topicIndex}
                  className="px-2 py-1 border border-gray-300 text-gray-700 text-[10px] sm:text-xs"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  {topic}
                </span>
              ))}
              {material.topics.length > 3 && (
                <span
                  className="px-2 py-1 border border-gray-300 text-gray-700 text-[10px] sm:text-xs"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  +{material.topics.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Meta Information */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <span
              className="text-[10px] sm:text-xs text-gray-500 tracking-wider uppercase"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              {material.duration}
            </span>
            <span
              className="text-[10px] sm:text-xs text-gray-500 tracking-wider uppercase"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              {material.level}
            </span>
          </div>
        </div>

        {/* Bottom Arrow Indicator */}
        <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-lg">→</span>
        </div>
      </Link>
    </motion.div>
  )
}

export default Learning