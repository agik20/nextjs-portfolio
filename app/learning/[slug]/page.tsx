// app/learning/[slug]/LearningContent.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

interface LearningMaterial {
  slug: string;
  title: string;
  description: string;
  bgImage: string;
  category?: string;
  status?: string;
  duration: string;
  level?: string;
  topics?: string[];
  technologies?: string[];
  features?: string[];
}

interface LearningContentProps {
  material: LearningMaterial;
  htmlContent: string;
}

export default function LearningContent({ material, htmlContent }: LearningContentProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div 
          className="h-full bg-black transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header Navigation */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-40">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <Link
              href="/#learning"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors group"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              <svg 
                className="w-4 h-4 transition-transform group-hover:-translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-light">Back to Learning</span>
            </Link>
            
            {material.status && (
              <span
                className={`px-4 py-1.5 text-xs font-light tracking-wider uppercase ${
                  material.status === 'Completed' 
                    ? 'bg-black text-white' 
                    : 'border border-black text-black'
                }`}
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                {material.status}
              </span>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        className={`max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="space-y-8">
          {/* Category Tag */}
          {material.category && (
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-black" />
              <span 
                className="text-xs font-light tracking-[0.3em] text-gray-500 uppercase"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                {material.category}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-extralight text-black leading-[1.1] tracking-tight max-w-4xl"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
          >
            {material.title}
          </h1>

          {/* Description */}
          <p 
            className="text-lg sm:text-xl font-light text-gray-600 leading-relaxed max-w-3xl"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
          >
            {material.description}
          </p>
        </div>
      </section>

      {/* Feature Image */}
      <div 
        className={`max-w-7xl mx-auto px-6 lg:px-8 mb-20 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="relative w-full aspect-[21/9] overflow-hidden group">
          <Image
            src={material.bgImage}
            alt={material.title}
            fill
            className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Article Content */}
          <article 
            className={`lg:col-span-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {htmlContent && (
              <div 
                className="prose prose-lg max-w-none prose-headings:font-light prose-headings:text-black prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:font-light prose-a:text-black prose-a:no-underline prose-a:border-b prose-a:border-gray-300 hover:prose-a:border-black prose-strong:text-black prose-strong:font-normal"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            )}
          </article>

          {/* Sidebar */}
          <aside 
            className={`lg:col-span-4 space-y-6 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Details Card */}
            <div className="bg-gray-50 p-8 space-y-6 hover:bg-gray-100 transition-colors duration-300">
              <h3 
                className="text-xs font-light tracking-[0.2em] text-gray-500 uppercase border-b border-gray-300 pb-3"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                Course Details
              </h3>
              
              <div className="space-y-5">
                <div>
                  <p 
                    className="text-xs text-gray-400 uppercase tracking-wider mb-2"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                  >
                    Duration
                  </p>
                  <p 
                    className="text-base text-black font-light"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                  >
                    {material.duration}
                  </p>
                </div>
                
                {material.level && (
                  <div>
                    <p 
                      className="text-xs text-gray-400 uppercase tracking-wider mb-2"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      Level
                    </p>
                    <p 
                      className="text-base text-black font-light"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      {material.level}
                    </p>
                  </div>
                )}
                
                {material.category && (
                  <div>
                    <p 
                      className="text-xs text-gray-400 uppercase tracking-wider mb-2"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      Category
                    </p>
                    <p 
                      className="text-base text-black font-light"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      {material.category}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Topics Covered */}
            {material.topics && material.topics.length > 0 && (
              <div className="bg-gray-50 p-8 space-y-6 hover:bg-gray-100 transition-colors duration-300">
                <h3 
                  className="text-xs font-light tracking-[0.2em] text-gray-500 uppercase border-b border-gray-300 pb-3"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  Topics Covered
                </h3>
                <ul className="space-y-4">
                  {material.topics.map((topic, index) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-3 group"
                    >
                      <span className="text-gray-300 mt-0.5 group-hover:text-black transition-colors">—</span>
                      <span 
                        className="text-sm text-gray-600 font-light leading-relaxed group-hover:text-black transition-colors"
                        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                      >
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {material.technologies && material.technologies.length > 0 && (
              <div className="bg-gray-50 p-8 space-y-6 hover:bg-gray-100 transition-colors duration-300">
                <h3 
                  className="text-xs font-light tracking-[0.2em] text-gray-500 uppercase border-b border-gray-300 pb-3"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {material.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white text-gray-700 text-xs font-light hover:bg-black hover:text-white transition-all duration-300 cursor-default"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {material.features && material.features.length > 0 && (
              <div className="bg-gray-50 p-8 space-y-6 hover:bg-gray-100 transition-colors duration-300">
                <h3 
                  className="text-xs font-light tracking-[0.2em] text-gray-500 uppercase border-b border-gray-300 pb-3"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  What&apos;s Included
                </h3>
                <ul className="space-y-4">
                  {material.features.map((feature, index) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-3 group"
                    >
                      <svg 
                        className="w-4 h-4 text-gray-300 mt-0.5 flex-shrink-0 group-hover:text-black transition-colors" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span 
                        className="text-sm text-gray-600 font-light leading-relaxed group-hover:text-black transition-colors"
                        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* Footer Navigation */}
      <footer className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <Link
              href="/#learning"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors group"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              <svg 
                className="w-4 h-4 transition-transform group-hover:-translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-light">All Learning Materials</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-black rounded-full" />
              <span 
                className="text-xs text-gray-400 uppercase tracking-[0.2em] font-light"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                Keep Learning
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}