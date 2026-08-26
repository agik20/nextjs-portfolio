"use client";

import { getCurrentYear, getSocialLinks } from '@/src/entities/portfolio/repository';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = getSocialLinks();
  const currentYear = getCurrentYear();

  const navigation = [
    { name: 'Home', href: '#top' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#project' },
    { name: 'Journal', href: '#learning' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-dark-bg text-paper">
      <div className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          {/* Top — Name + Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-4xl md:text-5xl font-serif font-light text-paper mb-6">
              Ardutra
              <span className="text-stone"> Agi Ginting</span>
            </h3>
            <p className="text-sm text-stone max-w-md leading-relaxed mb-8">
              Data Scientist & AI Engineer specializing in computer vision, ML pipelines,
              and RAG systems. Building intelligent solutions that solve real-world problems.
            </p>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-paper animate-pulse" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-stone">
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Middle — Navigation + Social */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <p className="section-label text-stone mb-6">Navigate</p>
              <nav className="space-y-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-sm text-stone hover:text-paper transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <p className="section-label text-stone mb-6">Contact</p>
              <div className="space-y-3">
                <a href="mailto:ardutraa40@gmail.com" className="block text-sm text-stone hover:text-paper transition-colors">
                  ardutraa40@gmail.com
                </a>
                <p className="text-sm text-stone">Jakarta, Indonesia</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <p className="section-label text-stone mb-6">Social</p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-wider uppercase text-stone hover:text-paper transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="h-px bg-stone/40 mb-12"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          />

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-xs text-stone/60">
              © {currentYear} Ardutra Agi Ginting. All rights reserved.
            </p>
            <a
              href="#top"
              className="text-xs text-stone/60 hover:text-paper transition-colors tracking-wider uppercase"
            >
              Back to top ↑
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
