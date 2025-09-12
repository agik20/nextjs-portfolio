import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className='w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6 relative'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-50'></div>
        <div className='absolute -bottom-24 -left-24 w-64 h-64 rounded-full blur-3xl opacity-50'></div>
      </div>
      
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          duration: 0.8, 
          type: 'spring', 
          stiffness: 100,
          damping: 10
        }}
        whileHover={{ 
          scale: 1.05,
          rotate: 5,
          transition: { duration: 0.3 }
        }}
        className='relative'
      >
        <div className='absolute inset-0 rounded-full from-blue-200 to-cyan-200 animate-pulse -z-10'></div>
        <Image 
          src={assets.profile_img} 
          alt='Profile picture of Ardutra Agi Ginting' 
          className='rounded-full w-36 h-36 object-cover border-4 border-white shadow-lg'
        />
      </motion.div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-center justify-center gap-2 text-xl md:text-2xl mb-2 font-crimson text-gray-600'
      >
        <motion.span
          animate={{ rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 1 }}
        >
        </motion.span>
        Hi, I'm Ardutra Agi Ginting
      </motion.div>
      
      <motion.h1 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}      
        className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'
      >
        Machine Learning & AI{' '}
        <motion.span
          initial={{ backgroundPositionX: '100%' }}
          animate={{ backgroundPositionX: '0%' }}
          transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
          className='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-[length:200%_auto]'
        >
          Enthusiast
        </motion.span>
        <br />
        <span className='text-2xl sm:text-3xl lg:text-4xl font-light text-gray-700 mt-2 block'>
          Data Scientist based in Yogyakarta
        </span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}      
        className='max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed'
      >
        Specializing in <span className='font-semibold text-gray-800'>data science</span>,{' '}
        <span className='font-semibold text-gray-800'>machine learning</span>, and{' '}
        <span className='font-semibold text-gray-800'>intelligent automation</span>, 
        with a focus on delivering practical solutions to complex problems.
      </motion.p>
      
      <motion.div 
        className='flex flex-col sm:flex-row items-center gap-5 mt-8'
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <motion.a 
          href="#contact"
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className='px-8 py-4 rounded-full bg-gradient-to-r from-gray-900 to-black text-white flex items-center gap-3 font-medium shadow-lg'
        >
          Contact Me 
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}
          >
            <Image src={assets.right_arrow_white} alt='' className='w-4'/>
          </motion.span>
        </motion.a>
        
        <motion.a 
          href="/sample_resume.pdf" 
          download
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className='px-8 py-4 rounded-full bg-white border border-gray-200 flex items-center gap-3 font-medium shadow-lg hover:bg-gray-50'
        >
          My Resume
          <motion.span
            animate={{ y: [0, 2, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 1.2 }}
          >
            <Image src={assets.download_icon} alt='' className='w-4'/>
          </motion.span>
        </motion.a>
      </motion.div>
      
      <motion.div 
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className='w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center'>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className='w-1 h-3 bg-gray-400 rounded-full mt-2'
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Header