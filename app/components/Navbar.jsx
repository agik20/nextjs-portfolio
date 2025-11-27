import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('button[aria-label="Open menu"]')) {
        closeMobileMenu()
      }
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = (isOpen) => {
    setIsMobileMenuOpen(isOpen)
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }

  const openMobileMenu = () => toggleMobileMenu(true)
  const closeMobileMenu = () => toggleMobileMenu(false)

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
        className={`fixed top-0 left-0 right-0 px-5 lg:px-8 xl:px-[8%] py-6 flex items-center justify-between z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200" 
            : "bg-transparent"
        }`}
      >
        {/* Logo/Name */}
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
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="relative text-sm tracking-wide text-gray-700 hover:text-black transition-colors uppercase"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              {item.name}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black"
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
            className="px-6 py-2 bg-black text-white text-sm tracking-wide uppercase border border-black"
            whileHover={{ 
              backgroundColor: '#fff',
              color: '#000'
            }}
            transition={{ duration: 0.3 }}
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
          >
            Contact
          </motion.a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={openMobileMenu}
          whileTap={{ scale: 0.95 }}
          aria-label="Open menu"
        >
          <span className="w-6 h-[1px] bg-black"/>
          <span className="w-6 h-[1px] bg-black"/>
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={closeMobileMenu}
            />
            
            <motion.div 
              ref={mobileMenuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm tracking-widest text-gray-500 uppercase"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                      Menu
                    </span>
                    <motion.button 
                      onClick={closeMobileMenu}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 flex items-center justify-center"
                      aria-label="Close menu"
                    >
                      <span className="text-2xl font-light">×</span>
                    </motion.button>
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-8">
                  <ul className="space-y-8">
                    {navItems.map((item, index) => (
                      <motion.li 
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        <a 
                          href={item.href} 
                          className="block text-2xl font-light text-black hover:translate-x-2 transition-transform"
                          onClick={closeMobileMenu}
                          style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                        >
                          {item.name}
                          <motion.div 
                            initial={{ width: 0 }}
                            whileHover={{ width: '3rem' }}
                            className="h-[1px] bg-black mt-2"
                          />
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 space-y-4">
                  <motion.a 
                    href="#contact"
                    className="flex items-center justify-center w-full py-3 bg-black text-white text-sm tracking-wide uppercase"
                    whileTap={{ scale: 0.98 }}
                    onClick={closeMobileMenu}
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                  >
                    Get in touch
                  </motion.a>
                  
                  <div className="text-xs text-center text-gray-500 tracking-wider"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                    AVAILABLE FOR OPPORTUNITIES
                  </div>
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