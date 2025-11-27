import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
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

  return (
    <div className='w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 mx-auto min-h-screen flex items-center justify-center py-20 sm:py-24 md:py-0 relative'>
      {/* Subtle grid background */}
      <div className='absolute inset-0 -z-10 opacity-[0.03]'
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className='w-full max-w-7xl'
      >
        {/* Decorative line element */}
        <motion.div 
          variants={itemVariants}
          className='flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12'
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '3rem' }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='h-[1.5px] sm:h-[2px] bg-black'
          />
          <span className='text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-gray-600 uppercase'
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
            Portfolio 2025
          </span>
        </motion.div>

        {/* Main content grid */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start'>
          {/* Left column - Name & Title */}
          <motion.div variants={itemVariants} className='lg:col-span-7 space-y-4 sm:space-y-5 md:space-y-6'>
            <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] 2xl:text-[8rem] font-light text-black leading-[0.9] tracking-tight'
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
              Ardutra
              <br />
              <span className='font-normal'>Agi Ginting</span>
            </h1>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.8 }}
              className='h-[0.5px] sm:h-[1px] bg-gradient-to-r from-black via-gray-400 to-transparent'
            />
            
            <div className='space-y-2 sm:space-y-3 pt-2'>
              <p className='text-lg sm:text-xl md:text-2xl lg:text-2xl font-light text-gray-800'
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                Machine Learning & AI Enthusiast
              </p>
              <p className='text-sm sm:text-base text-gray-600'
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                Data Scientist — Jakarta, Indonesia
              </p>
            </div>
          </motion.div>

          {/* Right column - Description & CTA */}
          <motion.div variants={itemVariants} className='lg:col-span-5 space-y-6 sm:space-y-7 md:space-y-8 lg:pt-4'>
            <p className='text-sm sm:text-base leading-relaxed text-gray-700'
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
              Specializing in data science, machine learning, and intelligent automation. 
              Focused on delivering practical solutions to complex problems through 
              innovative approaches and cutting-edge technology.
            </p>
            
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
              <motion.a 
                href="#contact"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className='group px-5 sm:px-6 py-2.5 sm:py-3 bg-black text-white flex items-center justify-between gap-3 font-normal text-xs sm:text-sm tracking-wide'
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                <span>GET IN TOUCH</span>
                <motion.span
                  className='transition-transform group-hover:translate-x-1'>
                  <Image src={assets.right_arrow_white} alt='' className='w-3 sm:w-4 h-3 sm:h-4'/>
                </motion.span>
              </motion.a>
              
              <motion.a 
                href="/sample_resume.pdf" 
                download
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className='group px-5 sm:px-6 py-2.5 sm:py-3 border border-black text-black flex items-center justify-between gap-3 font-normal text-xs sm:text-sm tracking-wide hover:bg-black hover:text-white transition-colors duration-300'
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                <span>VIEW RESUME</span>
                <motion.span
                  className='transition-transform group-hover:translate-y-0.5'>
                  <Image src={assets.download_icon} alt='' className='w-3 sm:w-4 h-3 sm:h-4'/>
                </motion.span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom info bar */}
        <motion.div 
          variants={itemVariants}
          className='mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-gray-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-gray-600 tracking-wider'
          style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
          <div className='flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8'>
            <span>DATA SCIENCE</span>
            <span className='hidden sm:inline text-gray-400'>•</span>
            <span>MACHINE LEARNING</span>
            <span className='hidden sm:inline text-gray-400'>•</span>
            <span>AUTOMATION</span>
          </div>
          <div className='flex items-center gap-2'>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className='w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-black'
            />
            <span className='text-[10px] sm:text-xs'>AVAILABLE FOR OPPORTUNITIES</span>
          </div>
        </motion.div>

        {/* Scroll indicator - hidden on mobile */}
        <motion.div 
          className='hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2'
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
          <div className='flex flex-col items-center gap-2 text-gray-400'>
            <span className='text-xs tracking-widest rotate-90 origin-center mb-8'
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
              SCROLL
            </span>
            <div className='w-[1px] h-12 bg-gray-400'/>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Header