import { workData } from "@/assets/assets";
import Link from "next/link";
import Image from "next/image";
import { marked } from "marked";
import { Metadata } from "next";

interface ProjectParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return workData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectParams): Promise<Metadata> {
  const project = workData.find((p) => p.slug === params.slug);

  return {
    title: project ? `${project.title} - Portfolio` : "Project Not Found",
    description: project
      ? `Learn more about ${project.title} - ${project.description}`
      : "",
  };
}

export default function ProjectDetail({ params }: ProjectParams) {
  const project = workData.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-4">
          <h1 
            className="text-2xl sm:text-3xl font-light text-black mb-6"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
          >
            Project <span className="font-normal">Not Found</span>
          </h1>
          <Link
            href="/#project"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors border-b border-gray-300 hover:border-black pb-1"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const htmlContent = project.content ? marked.parse(project.content) : "";

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-40">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link
              href="/#project"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-600 hover:text-black transition-colors group"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Back to Projects
            </Link>
            
            <div className="flex items-center gap-3">
              {project.status && (
                <span
                  className={`px-3 py-1 text-[10px] sm:text-xs tracking-wider uppercase ${
                    project.status === 'Completed' 
                      ? 'bg-black text-white' 
                      : 'border border-black text-black'
                  }`}
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  {project.status}
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
                {project.category || 'Project'}
              </span>
            </div>

            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black leading-tight mb-6 sm:mb-8"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              {project.title}
            </h1>

            <div className='h-[0.5px] sm:h-[1px] bg-gradient-to-r from-black via-gray-400 to-transparent mb-6 sm:mb-8' />

            <p 
              className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              {project.description}
            </p>
          </div>

          {/* Feature Image */}
          <div className="relative w-full aspect-[21/9] mb-12 sm:mb-16 md:mb-20 overflow-hidden border border-gray-200">
            <Image
              src={project.bgImage}
              alt={project.title}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Content */}
            <div className="lg:col-span-8 space-y-10 sm:space-y-12">
              {/* Overview */}
              {htmlContent && (
                <div>
                  <h2 
                    className="text-xs tracking-wider text-gray-600 uppercase mb-6"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                  >
                    Overview
                  </h2>
                  <div 
                    className="prose prose-lg max-w-none prose-headings:font-normal prose-headings:text-black prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-black prose-a:border-b prose-a:border-gray-300 hover:prose-a:border-black prose-strong:text-black prose-strong:font-normal"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                  />
                </div>
              )}

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="border-t border-gray-200 pt-10 sm:pt-12">
                  <h2 
                    className="text-xs tracking-wider text-gray-600 uppercase mb-6"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                  >
                    Key Features
                  </h2>
                  <ul className="space-y-4">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="text-black mt-1">✓</span>
                        <span 
                          className="text-sm sm:text-base text-gray-700"
                          style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Achievements */}
              {project.achievements && project.achievements.length > 0 && (
                <div className="border-t border-gray-200 pt-10 sm:pt-12">
                  <h2 
                    className="text-xs tracking-wider text-gray-600 uppercase mb-6"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                  >
                    Key Achievements
                  </h2>
                  <ul className="space-y-4">
                    {project.achievements.map((achievement: string, index: number) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="text-black mt-1">•</span>
                        <span 
                          className="text-sm sm:text-base text-gray-700"
                          style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                        >
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                  Project Info
                </h3>
                <div className="space-y-4">
                  {project.category && (
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
                        {project.category}
                      </p>
                    </div>
                  )}
                  {project.status && (
                    <div>
                      <p 
                        className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-1"
                        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                      >
                        Status
                      </p>
                      <p 
                        className="text-sm sm:text-base text-black"
                        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                      >
                        {project.status}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="border border-gray-200 p-6">
                  <h3 
                    className="text-xs tracking-wider text-gray-600 uppercase mb-6"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                  >
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, index: number) => (
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

              {/* GitHub Link */}
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group px-6 py-4 bg-black text-white flex items-center justify-center gap-3 hover:bg-gray-900 transition-colors border border-black"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  <span className="text-xs sm:text-sm tracking-wide uppercase">View on GitHub</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              )}
            </div>
          </div>

          {/* Navigation Footer */}
          <div className="mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-16 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <Link
                href="/#project"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-600 hover:text-black transition-colors group"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                All Projects
              </Link>
              
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-black rounded-full" />
                <span 
                  className="text-xs text-gray-500 uppercase tracking-wider"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  View More Work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}