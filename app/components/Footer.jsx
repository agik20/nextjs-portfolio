import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ar.giii',
      icon: assets.instagram_icon // Anda perlu menambahkan ini ke assets
    },
    {
      name: 'Github',
      url: 'https://github.com/agik20',
      icon: assets.github_icon // Anda perlu menambahkan ini ke assets
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ardutra-agi-ginting-56216b316',
      icon: assets.linkedin_icon // Anda perlu menambahkan ini ke assets
    }
  ]

  return (
    <footer className='mt-32 bg-gradient-to-b from-white to-gray-50 pt-16 pb-8 px-4'>
      <div className='max-w-6xl mx-auto'>
        {/* Main footer content */}
        <div className='text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image 
              src={assets.logo} 
              alt='Ardutra Agi Ginting Logo' 
              className='w-40 mx-auto mb-6 filter brightness-110'
            />
          </motion.div>

          <motion.div 
            className='inline-flex items-center gap-3 mx-auto p-3 px-5 rounded-full bg-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className='w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full'>
              <Image src={assets.mail_icon} alt='Email icon' className='w-4' />
            </div>
            <span className='text-gray-700 font-medium'>ardutraa40@gmail.com</span>
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className='mt-10'
          >
            <h3 className='text-xl font-light text-gray-600 mb-6'>
              Let's build something amazing together
            </h3>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300'
            >
              Get In Touch
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div 
          className='flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-8'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className='text-gray-500 text-sm mb-4 md:mb-0'>
            © {currentYear} Ardutra Agi Ginting. All rights reserved.
          </p>
          
          <div className='flex items-center space-x-8'>
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -3,
                  transition: { duration: 0.2 }
                }}
                className='text-gray-600 hover:text-gray-900 transition-colors duration-300 flex flex-col items-center'
              >
                <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-1'>
                  {/* Replace with actual icon if available */}
                  <span className='font-semibold text-sm'>
                    {link.name.charAt(0)}
                  </span>
                </div>
                <span className='text-xs'>{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className='absolute left-0 right-0 -z-10'>
        <div className='absolute bottom-0 left-10 w-32 h-32 bg-blue-100 rounded-full filter blur-3xl opacity-30'></div>
        <div className='absolute bottom-0 right-10 w-32 h-32 bg-purple-100 rounded-full filter blur-3xl opacity-30'></div>
      </div>
    </footer>
  )
}

export default Footer