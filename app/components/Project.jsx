import React from 'react'
import Image from 'next/image'
import { assets, workData } from '@/assets/assets'
import { motion, scale } from 'motion/react'

const Project = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}     
    id="project" className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.3, duration: 0.5}}                  
        className='text-center mb-2 text-lg font-crimson'>My Portfolio</motion.h4>
        <motion.h2 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.5, duration: 0.5}}          
        className='text-center text-5xl font-crimson'>My Latest Work</motion.h2>
        <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.7, duration: 0.5}}          
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-crimson'>Below are some of the projects I've worked on. These projects include both individual and group projects. Some were for competitions, college assignments, and independent projects.</motion.p>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.9, duration: 0.6}}          
        className='grid grid-cols-auto my-10 gap-5'>
            {workData.map((project, index)=>(
                <motion.div 
                whileInView={{scale: 1}}
                transition={{duration: 0.3}}                  
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' key={index} style={{backgroundImage: `url(${project.bgImage})`}}>
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>
                        <div className='border rounded-full border-black w-7 aspect-square items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        </div>                        
                    </div>
                </motion.div>
            ))}
        </motion.div>
        <motion.a 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 1.1, duration: 0.5}}          
        href="" className='w-max flex items-center jusrify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full mx-auto py-3 px-10  my-20 hover:bg-light-hover duration-500'>
            show more <Image src={assets.right_arrow_bold} alt='right arrow' className='w-4'></Image>
        </motion.a>
    </motion.div>
  )
}

export default Project
