"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = (isOpen: boolean) => {
    setIsMobileMenuOpen(isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  };

  const openMobileMenu = () => toggleMobileMenu(true);
  const closeMobileMenu = () => toggleMobileMenu(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#f5f0e8]/95 backdrop-blur-sm border-b border-[#b8b0a5]/20"
            : "bg-transparent"
        }`}
      >
        <div className="px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg tracking-widest text-[#0a0a0a] font-light hover:opacity-70 transition-opacity"
          >
            A.A.
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 relative group ${
                  isActive(item.href)
                    ? "text-ink"
                    : "text-sage hover:text-ink"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute -bottom-0.5 left-0 w-full h-px bg-gold opacity-70" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="text-[10px] tracking-[0.2em] uppercase text-sage hover:text-ink transition-colors duration-300 border border-[#b8b0a5] px-4 py-2 hover:border-ink"
            >
              Get in touch
            </Link>
          </div>

          <motion.button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={openMobileMenu}
            aria-label="Open menu"
          >
            <span className="w-5 h-px bg-[#0a0a0a]" />
            <span className="w-5 h-px bg-[#0a0a0a]" />
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#f5f0e8] z-40 md:hidden"
            />
            <motion.div
              ref={mobileMenuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#f5f0e8] z-50 md:hidden"
            >
              <div className="flex flex-col h-full p-8">
                <div className="flex justify-between items-center mb-16">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#5a5548]">
                    Menu
                  </span>
                  <motion.button
                    onClick={closeMobileMenu}
                    aria-label="Close menu"
                    className="text-2xl text-[#5a5548] hover:text-[#0a0a0a] transition-colors"
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
                        <Link
                          href={item.href}
                          className={`text-3xl font-serif font-light hover:text-[#5a5548] transition-colors ${
                            isActive(item.href) ? "text-[#0a0a0a]" : "text-[#5a5548]"
                          }`}
                          onClick={closeMobileMenu}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-auto pt-8 border-t border-[#b8b0a5] space-y-6">
                  <Link
                    href="/contact"
                    className="block text-center text-xs tracking-[0.2em] uppercase text-[#5a5548] hover:text-[#0a0a0a] transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Get in touch
                  </Link>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#5a5548] text-center">
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
