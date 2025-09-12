import { assets, infoList, toolsData, tool } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, scale } from 'motion/react'

const About = () => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    >
      <motion.h4 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}      
      className='text-center mb-2 text-lg font-crimson text-charcoal'>Introduction</motion.h4>
      <motion.h2 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1, delay: 0.3}}            
      className='text-center text-5xl font-crimson text-rich-black'>About Me</motion.h2>

      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.8}}            
      className='flex w-full flex-col px-[12%] lg:flex-row items-center gap-20 my-20'>
        <motion.div 
        initial={{opacity: 0, scale: 0.9}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.6}}              
        className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'></Image>
        </motion.div>
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.8}}              
        className='flex-1'>
            <p className='mb-10 max-w-2xl font-crimson'>AI and Machine Learning enthusiast with strong expertise in computer vision, deep learning, automation, and intelligent systems. Skilled in system integration, optimization, and data-driven problem-solving, with a proven ability to translate advanced technical concepts into practical, real-world applications. Focused on developing scalable and trustworthy AI solutions that create meaningful impact.</p>

            <motion.ul 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay: 1}}                  
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon, title, description}, index)=>(
                    <motion.li 
                    whileInView={{scale: 1}}
                    className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-cadet-gray hover:-translate-y-1 duration-500' key={index}>
                        <Image src={icon} alt={title} className='w-7 mt-3'></Image>
                        <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                        <p className='text-gray-600 text-sm'>{description}</p>
                    </motion.li>
                ))}
            </motion.ul>

            <motion.h4 
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 1.3}}                  
            className='my-6 text-gray-700 font-crimson'>
              Tools i use
            </motion.h4>
            <motion.ul 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 1.5}}                  
            className='flex items-center gap-3 sm:gap-5'>
              {toolsData.map((tool, index)=>(
                <motion.li 
                whileHover={{scale: 1}}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                  <Image src={tool} alt='Tool' className='w-5 sm:w-7'></Image>
                </motion.li>
              ))}
            </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
