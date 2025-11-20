import React from 'react'
import Image from 'next/image'
import { assets, currentYear, socialLinks } from '@/assets/assets'
import { motion } from 'framer-motion'

const Footer = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold tracking-tight">Ardutra Agi</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
                I offer comprehensive development services to bring your ideas to life. 
                From concept to deployment, let's create something extraordinary together.
              </p>
              
              {/* Status Dots */}
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3, 4].map((dot) => (
                  <motion.div
                    key={dot}
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: dot * 0.2 }}
                  />
                ))}
                <span className="text-gray-400 text-sm ml-2">Available for work</span>
              </div>
            </motion.div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4 lg:col-start-9">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
                Contact
              </h3>
              <div className="space-y-3 text-sm">
                <p className="text-gray-400">Based in Indonesia</p>
                <div className="space-y-1">
                  <motion.a
                    href="mailto:ardutraa40@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors duration-300 block"
                    whileHover={{ x: 5 }}
                  >
                    ardutraa40@gmail.com
                  </motion.a>
                </div>
                
                {/* Social Links */}
                <div className="flex items-center gap-4 mt-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-xs font-medium text-white">
                        {link.name.charAt(0)}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Ardutra Agi Ginting. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Privacy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Terms
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer