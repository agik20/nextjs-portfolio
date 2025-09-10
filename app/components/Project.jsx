import React from 'react'
import Image from 'next/image'
import { assets, workData } from '@/assets/assets'

const Project = () => {
  return (
    <div id="project" className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-crimson'>My Portfolio</h4>
        <h2 className='text-center text-5xl font-crimson'>My Latest Work</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-crimson'>I specialize in data science, from cleaning and analyzing data to building and tuning machine learning models. I focus on turning raw data into clear insights and deployable solutions that solve real problems and support intelligent decision-making.</p>

        <div className='grid grid-cols-auto my-10 gap-5'>
            {workData.map((project, index)=>(
                <div className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' key={index} style={{backgroundImage: `url(${project.bgImage})`}}>
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>
                        <div className='border rounded-full border-black w-7 aspect-square items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                            <Image src={assets.send_icon} alt='send icon' className='w-5'></Image>
                        </div>                        
                    </div>
                </div>
            ))}
        </div>
        <a href="" className='w-max flex items-center jusrify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full mx-auto py-3 px-10  my-20 hover:bg-light-hover duration-500'>
            show more <Image src={assets.right_arrow_bold} alt='right arrow' className='w-4'></Image>
        </a>
    </div>
  )
}

export default Project
