import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef()

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('button[aria-label="Open menu"]')) {
        closeMobileMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    document.body.style.overflow = 'auto'
  }

  const navItems = [
    { name: 'Home', href: '#top' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#project' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 px-5 lg:px-8 xl:px-[8%] py-3 flex items-center justify-between z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-md shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <motion.a 
          href="#top"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image 
            src={assets.logo} 
            alt="Ardutra Agi Ginting Logo" 
            className="w-32 cursor-pointer"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex items-center gap-1 rounded-full px-8 py-2 ${
          isScrolled ? "" : "bg-white/20 backdrop-blur-sm"
        }`}>
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 font-medium text-gray-700 hover:text-gray-900 transition-colors"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              {item.name}
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Contact Button - Desktop */}
        <motion.div className="hidden lg:flex">
          <motion.a 
            href="#contact"
            className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-full font-medium shadow-md"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.98 }}
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
          >
            Contact
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}
            >
              <Image src={assets.arrow_icon} alt="Arrow icon" className="w-3" />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden p-2 rounded-lg"
          onClick={openMobileMenu}
          whileTap={{ scale: 0.95 }}
          aria-label="Open menu"
        >
          <Image src={assets.menu_black} alt="Menu" className="w-6" />
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMobileMenu}
            />
            
            <motion.div 
              ref={mobileMenuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <motion.button 
                      onClick={closeMobileMenu}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full hover:bg-gray-100"
                      aria-label="Close menu"
                    >
                      <Image src={assets.close_black} alt="Close" className="w-5" />
                    </motion.button>
                  </div>
                </div>

                <nav className="flex-1 p-6">
                  <ul className="space-y-6">
                    {navItems.map((item, index) => (
                      <motion.li 
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <a 
                          href={item.href} 
                          className="block py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                          onClick={closeMobileMenu}
                          style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                        >
                          {item.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <div className="p-6 border-t border-gray-100">
                  <motion.a 
                    href="#contact"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 text-white rounded-lg font-medium shadow-md"
                    whileTap={{ scale: 0.98 }}
                    onClick={closeMobileMenu}
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                  >
                    Contact Me
                    <Image src={assets.arrow_icon} alt="Arrow icon" className="w-3 filter invert" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar