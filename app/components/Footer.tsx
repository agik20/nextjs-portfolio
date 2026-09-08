"use client";

import { getCurrentYear, getSocialLinks } from '@/src/entities/portfolio/repository';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const socialLinks = getSocialLinks();
  const currentYear = getCurrentYear();
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <footer className="bg-[#f5f0e8] border-t border-[#b8b0a5]/30">
      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-2xl font-serif font-light text-[#0a0a0a] mb-4">
                A<span className="text-[#5a5548]">.</span>A<span className="text-[#5a5548]">.</span>
              </h3>
              <p className="text-sm text-[#5a5548] leading-relaxed mb-6">
                Data Scientist & AI Engineer specializing in computer vision, ML pipelines,
                and RAG systems.
              </p>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a962]" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#b8b0a5]">
                  Available for opportunities
                </span>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8b0a5] mb-6">Navigate</p>
              <nav className="space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block text-sm transition-colors duration-300 ${
                      isActive(item.href)
                        ? 'text-[#0a0a0a]'
                        : 'text-[#5a5548] hover:text-[#0a0a0a]'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8b0a5] mb-6">Contact</p>
              <div className="space-y-3">
                <Link
                  href="mailto:ardutraa40@gmail.com"
                  className="block text-sm text-[#5a5548] hover:text-[#0a0a0a] transition-colors"
                >
                  ardutraa40@gmail.com
                </Link>
                <p className="text-sm text-[#5a5548]">Jakarta, Indonesia</p>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8b0a5] mb-6">Social</p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-wider uppercase text-[#5a5548] hover:text-[#0a0a0a] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#b8b0a5]/30 mb-8" />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#b8b0a5]">
              © {currentYear} Ardutra Agi Ginting. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
