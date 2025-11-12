"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { assets, workData } from "@/assets/assets"

const Project = () => {
  return (
    <motion.section
      id="project"
      className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-24 scroll-mt-20 bg-white"
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
          <motion.span
            className="text-sm font-medium text-mid tracking-wider uppercase mb-3 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
          >
            Portfolio Showcase
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-normal text-darkest mb-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
          >
            My Latest Work
          </motion.h2>

          <motion.div
            className="w-16 h-0.5 bg-mid mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.header>

        {/* Description */}
        <motion.p
          className="text-center max-w-3xl mx-auto mt-5 mb-16 text-gray-700 leading-relaxed font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
        >
          Explore a selection of my recent projects, ranging from academic
          assignments and competition entries to independent initiatives. Each
          project demonstrates my approach to problem-solving, technical
          execution, and attention to detail.
        </motion.p>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {workData.map((project, index) => {
            // Buat slug otomatis dari title kalau belum ada
            const slug =
              project.slug ||
              project.title.toLowerCase().replace(/[^\w]+/g, "-")

            return (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-xl cursor-pointer"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/project/${slug}`}>
                  {/* Project Image */}
                  <div className="aspect-square relative overflow-hidden rounded-xl">
                    <Image
                      src={project.bgImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3
                          className="font-semibold text-lg mb-2"
                          style={{
                            fontFamily:
                              "Helvetica Neue, Helvetica, Arial, sans-serif",
                          }}
                        >
                          {project.title}
                        </h3>
                        <p
                          className="text-sm text-gray-200"
                          style={{
                            fontFamily:
                              "Helvetica Neue, Helvetica, Arial, sans-serif",
                          }}
                        >
                          {project.description}
                        </p>

                        <div className="flex items-center justify-between mt-4">
                          <span
                            className="text-xs text-white"
                            style={{
                              fontFamily:
                                "Helvetica Neue, Helvetica, Arial, sans-serif",
                            }}
                          >
                            {project.category || "Project"}
                          </span>
                          <motion.div
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center shadow-sm group-hover:bg-mid group-hover:border-mid transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Show More */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/agik20"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 border border-gray-300 rounded-full px-6 py-3 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
          >
            <span className="text-sm font-medium">View Full Portfolio</span>
            <motion.span
              animate={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Project
