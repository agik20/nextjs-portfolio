"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = (isOpen: boolean) => {
    setIsMobileMenuOpen(isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  };

  const openMobileMenu = () => toggleMobileMenu(true);
  const closeMobileMenu = () => toggleMobileMenu(false);

  const navItems = [
    { name: 'Home', href: '#top' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#project' },
    { name: 'Journal', href: '#learning' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-sm border-b border-mist'
            : 'bg-transparent'
        }`}
      >
        <div className="px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#top"
            whileHover={{ opacity: 0.7 }}
            className="text-lg tracking-widest text-ink font-light"
          >
            A.A.
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-[11px] tracking-[0.2em] uppercase text-sage hover:text-ink transition-colors duration-300 relative group"
                whileHover={{ y: -1 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-ink group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="hidden md:block">
            <motion.a
              href="#contact"
              className="btn-outline text-[10px]"
              whileHover={{ x: 3 }}
            >
              Get in touch
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={openMobileMenu}
            aria-label="Open menu"
          >
            <span className="w-5 h-px bg-ink" />
            <span className="w-5 h-px bg-ink" />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-cream z-40 md:hidden"
            />
            <motion.div
              ref={mobileMenuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-cream z-50 md:hidden"
            >
              <div className="flex flex-col h-full p-8">
                <div className="flex justify-between items-center mb-16">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-sage">
                    Menu
                  </span>
                  <motion.button
                    onClick={closeMobileMenu}
                    aria-label="Close menu"
                    className="text-2xl text-sage hover:text-ink transition-colors"
                  >
                    x
                  </motion.button>
                </div>

                <nav className="flex-1">
                  <ul className="space-y-6">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.06 + 0.1 }}
                      >
                        <a
                          href={item.href}
                          className="text-3xl font-serif font-light text-ink hover:text-sage transition-colors"
                          onClick={closeMobileMenu}
                        >
                          {item.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-auto pt-8 border-t border-mist space-y-6">
                  <motion.a
                    href="#contact"
                    className="btn-outline w-full text-center block"
                    onClick={closeMobileMenu}
                  >
                    Get in touch
                  </motion.a>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-sage text-center">
                    Available for opportunities
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
