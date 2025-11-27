import React from 'react'
import Image from 'next/image'
import { assets, currentYear, socialLinks } from '@/assets/assets'
import { motion } from 'framer-motion'

const Footer = () => {
  const navigation = [
    { name: 'Home', href: '#top' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#project' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16 sm:py-20 md:py-24">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 sm:mb-20">
          
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 
                className="text-2xl sm:text-3xl font-light mb-6"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                <span className="font-normal">Ardutra</span> Agi Ginting
              </h3>
              
              <p 
                className="text-sm sm:text-base text-gray-400 leading-relaxed mb-8 max-w-md"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                Data Scientist specializing in machine learning and intelligent automation. 
                Building practical AI solutions that drive real business value.
              </p>
              
              {/* Availability Status */}
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span 
                  className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  Available for opportunities
                </span>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:col-start-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 
                className="text-xs sm:text-sm tracking-wider text-gray-500 uppercase mb-6"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                Navigate
              </h4>
              <nav className="space-y-3">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    whileHover={{ x: 4 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) }}
                    viewport={{ once: true }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 
                className="text-xs sm:text-sm tracking-wider text-gray-500 uppercase mb-6"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                Contact
              </h4>
              <div className="space-y-4">
                <div>
                  <p 
                    className="text-xs text-gray-500 uppercase tracking-wider mb-1"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                  >
                    Email
                  </p>
                  <motion.a
                    href="mailto:ardutraa40@gmail.com"
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    whileHover={{ x: 4 }}
                  >
                    ardutraa40@gmail.com
                  </motion.a>
                </div>
                
                <div>
                  <p 
                    className="text-xs text-gray-500 uppercase tracking-wider mb-1"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                  >
                    Location
                  </p>
                  <p 
                    className="text-sm sm:text-base text-gray-400"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                  >
                    Jakarta, Indonesia
                  </p>
                </div>
                
                {/* Social Links */}
                <div>
                  <p 
                    className="text-xs text-gray-500 uppercase tracking-wider mb-3"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                  >
                    Social
                  </p>
                  <div className="flex items-center gap-3">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-300 uppercase tracking-wide"
                        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
                        viewport={{ once: true }}
                        whileHover={{ y: -2 }}
                      >
                        {link.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider Line */}
        <motion.div 
          className="h-[1px] bg-gray-800 mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        />

        {/* Bottom Bar */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p 
            className="text-xs sm:text-sm text-gray-500 order-2 sm:order-1"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
          >
            © {currentYear} Ardutra Agi Ginting. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 order-1 sm:order-2">
            <a 
              href="/privacy" 
              className="text-xs sm:text-sm text-gray-500 hover:text-white transition-colors duration-300 uppercase tracking-wider"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              Privacy
            </a>
            <a 
              href="/terms" 
              className="text-xs sm:text-sm text-gray-500 hover:text-white transition-colors duration-300 uppercase tracking-wider"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              Terms
            </a>
          </div>
        </motion.div>

        {/* Back to Top */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#top"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-500 hover:text-white transition-colors duration-300 uppercase tracking-wider"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            whileHover={{ y: -4 }}
          >
            <span>Back to top</span>
            <span className="text-base">↑</span>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer