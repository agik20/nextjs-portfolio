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
      {/* Header Navigation */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-40">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link
              href="/#learning"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-600 hover:text-black transition-colors group"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Back to Learning
            </Link>
            
            <div className="flex items-center gap-3">
              {material.status && (
                <span
                  className={`px-3 py-1 text-[10px] sm:text-xs tracking-wider uppercase ${
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
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <div className='h-[1.5px] sm:h-[2px] w-12 bg-black' />
              <span 
                className='text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-gray-600 uppercase'
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                {material.category || 'Learning Material'}
              </span>
            </div>

            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black leading-tight mb-6 sm:mb-8"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              {material.title}
            </h1>

            <div className='h-[0.5px] sm:h-[1px] bg-gradient-to-r from-black via-gray-400 to-transparent mb-6 sm:mb-8' />

            <p 
              className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              {material.description}
            </p>
          </div>

          {/* Feature Image */}
          <div className="relative w-full aspect-[21/9] mb-12 sm:mb-16 md:mb-20 overflow-hidden border border-gray-200">
            <Image
              src={material.bgImage}
              alt={material.title}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Content */}
            <div className="lg:col-span-8">
              {htmlContent && (
                <div 
                  className="prose prose-lg max-w-none prose-headings:font-normal prose-headings:text-black prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-black prose-a:border-b prose-a:border-gray-300 hover:prose-a:border-black prose-strong:text-black prose-strong:font-normal"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Details */}
              <div className="border border-gray-200 p-6">
                <h3 
                  className="text-xs tracking-wider text-gray-600 uppercase mb-6"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <p 
                      className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-1"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      Duration
                    </p>
                    <p 
                      className="text-sm sm:text-base text-black"
                      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                      {material.duration}
                    </p>
                  </div>
                  {material.level && (
                    <div>
                      <p 
                        className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-1"
                        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                      >
                        Level
                      </p>
                      <p 
                        className="text-sm sm:text-base text-black"
                        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                      >
                        {material.level}
                      </p>
                    </div>
                  )}
                  {material.category && (
                    <div>
                      <p 
                        className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-1"
                        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                      >
                        Category
                      </p>
                      <p 
                        className="text-sm sm:text-base text-black"
                        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                      >
                        {material.category}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Topics */}
              {material.topics && material.topics.length > 0 && (
                <div className="border border-gray-200 p-6">
                  <h3 
                    className="text-xs tracking-wider text-gray-600 uppercase mb-6"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                  >
                    Topics Covered
                  </h3>
                  <div className="space-y-3">
                    {material.topics.map((topic: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-gray-400 mt-1">—</span>
                        <span 
                          className="text-sm text-gray-700"
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
                <div className="border border-gray-200 p-6">
                  <h3 
                    className="text-xs tracking-wider text-gray-600 uppercase mb-6"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                  >
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {material.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 border border-gray-300 text-gray-700 text-xs hover:border-black transition-colors"
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
                <div className="border border-gray-200 p-6">
                  <h3 
                    className="text-xs tracking-wider text-gray-600 uppercase mb-6"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                  >
                    Features
                  </h3>
                  <ul className="space-y-3">
                    {material.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-black mt-1">✓</span>
                        <span 
                          className="text-sm text-gray-700"
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

          {/* Navigation Footer */}
          <div className="mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-16 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <Link
                href="/#learning"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-600 hover:text-black transition-colors group"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                All Learning Materials
              </Link>
              
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-black rounded-full" />
                <span 
                  className="text-xs text-gray-500 uppercase tracking-wider"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  Keep Learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}