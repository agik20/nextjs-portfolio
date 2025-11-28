// app/learning/[slug]/page.tsx

import { learningData } from "@/assets/assets";
import Link from "next/link";
import Image from "next/image";
import { marked } from "marked";
import { Metadata } from "next";

interface LearningParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return learningData.map((material) => ({ slug: material.slug }));
}

export async function generateMetadata({ params }: LearningParams): Promise<Metadata> {
  const material = learningData.find((m) => m.slug === params.slug);

  return {
    title: material ? `${material.title} - Learning Materials` : "Material Not Found",
    description: material
      ? `Learn more about ${material.title} - ${material.description}`
      : "",
  };
}

export default function LearningDetail({ params }: LearningParams) {
  const material = learningData.find((m) => m.slug === params.slug);

  if (!material) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-4">
          <h1 
            className="text-2xl sm:text-3xl font-light text-black mb-6"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
          >
            Material <span className="font-normal">Not Found</span>
          </h1>
          <Link
            href="/#learning"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors border-b border-gray-300 hover:border-black pb-1"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
          >
            ← Back to Learning
          </Link>
        </div>
      </div>
    );
  }

  const htmlContent = material.content ? marked.parse(material.content) : "";

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Minimal Header */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-40 transition-all duration-300">
        <div className="px-6 lg:px-8 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link
              href="/#learning"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-all duration-300 group"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
              Back
            </Link>
            
            <div className="flex items-center gap-3">
              <span 
                className="text-xs text-gray-400 uppercase tracking-wider"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                {material.duration}
              </span>
              {material.status && (
                <span
                  className={`px-2 py-1 text-xs tracking-wider uppercase border ${
                    material.status === 'Completed' 
                      ? 'bg-gray-50 text-gray-700 border-gray-200' 
                      : 'bg-blue-50 text-blue-700 border-blue-200'
                  }`}
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  {material.status}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        
        {/* Article Header */}
        <article className="mb-16">
          {/* Category */}
          <div className="flex items-center gap-3 mb-8">
            <div className='h-px w-8 bg-gray-300' />
            <span 
              className='text-xs tracking-[0.2em] text-gray-500 uppercase'
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              {material.category}
            </span>
          </div>

          {/* Title */}
          <h1 
            className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-6 tracking-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {material.title}
          </h1>

          {/* Description */}
          <p 
            className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
          >
            {material.description}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-12">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                {material.duration}
              </span>
            </div>
            {material.level && (
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                  {material.level}
                </span>
              </div>
            )}
          </div>

          {/* Feature Image */}
          <div className="relative w-full aspect-[21/9] mb-12 overflow-hidden rounded-lg border border-gray-100 group">
            <Image
              src={material.bgImage}
              alt={material.title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
              priority
            />
          </div>
        </article>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            {htmlContent && (
              <div 
                className="prose prose-lg max-w-none 
                  prose-headings:font-normal prose-headings:text-black prose-headings:tracking-tight
                  prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg
                  prose-a:text-black prose-a:border-b prose-a:border-gray-300 hover:prose-a:border-black prose-a:no-underline
                  prose-strong:text-black prose-strong:font-normal
                  prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
                  prose-ul:list-none prose-ul:space-y-2
                  prose-li:flex prose-li:items-start prose-li:gap-3
                  prose-li:before:content-[''] prose-li:before:w-1.5 prose-li:before:h-1.5 prose-li:before:bg-gray-400 prose-li:before:rounded-full prose-li:before:mt-3
                  prose-code:text-gray-700 prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                  prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-200 prose-pre:rounded-lg
                  prose-table:border prose-table:border-gray-200
                  prose-th:bg-gray-50 prose-th:text-gray-700 prose-th:font-normal
                  prose-td:border-t prose-td:border-gray-200"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            )}
          </div>

          {/* Sidebar - Sticky on scroll */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              
              {/* Quick Facts */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 
                  className="text-sm font-medium text-black mb-4 uppercase tracking-wider"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div>
                    <p 
                      className="text-xs text-gray-500 uppercase tracking-wider mb-1"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      Duration
                    </p>
                    <p 
                      className="text-sm text-black font-medium"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      {material.duration}
                    </p>
                  </div>
                  {material.level && (
                    <div>
                      <p 
                        className="text-xs text-gray-500 uppercase tracking-wider mb-1"
                        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                      >
                        Level
                      </p>
                      <p 
                        className="text-sm text-black font-medium"
                        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                      >
                        {material.level}
                      </p>
                    </div>
                  )}
                  {material.category && (
                    <div>
                      <p 
                        className="text-xs text-gray-500 uppercase tracking-wider mb-1"
                        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                      >
                        Category
                      </p>
                      <p 
                        className="text-sm text-black font-medium"
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
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 
                    className="text-sm font-medium text-black mb-4 uppercase tracking-wider"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                  >
                    Topics Covered
                  </h3>
                  <div className="space-y-3">
                    {material.topics.map((topic: string, index: number) => (
                      <div key={index} className="flex items-start gap-3 group cursor-pointer">
                        <span className="text-gray-400 mt-1.5 text-xs group-hover:text-black transition-colors">•</span>
                        <span 
                          className="text-sm text-gray-600 group-hover:text-black transition-colors leading-relaxed"
                          style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                        >
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              {material.technologies && material.technologies.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 
                    className="text-sm font-medium text-black mb-4 uppercase tracking-wider"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                  >
                    Technologies & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {material.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs rounded-lg hover:border-gray-400 transition-all duration-300 hover:shadow-sm"
                        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              {material.features && material.features.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 
                    className="text-sm font-medium text-black mb-4 uppercase tracking-wider"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                  >
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {material.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-3 group">
                        <svg className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span 
                          className="text-sm text-gray-600 leading-relaxed"
                          style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Reading Completion */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 
              className="text-lg font-medium text-black mb-2"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              You've completed this material
            </h3>
            <p 
              className="text-gray-600 mb-6 max-w-md"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              Continue exploring other learning materials to expand your knowledge.
            </p>
            <Link
              href="/#learning"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-black hover:text-black transition-all duration-300 group"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              <span>Explore More Materials</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}