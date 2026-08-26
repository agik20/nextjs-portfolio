import {
  getProjectBySlug,
  getProjects,
} from "@/src/entities/portfolio/repository";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { renderMarkdown } from "@/src/shared/lib/markdown";
import { getProjectMarkdownContent } from "@/src/entities/portfolio/content.server";
import { buildFallbackMarkdown } from "@/src/shared/lib/content-fallback";

interface ProjectParams {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectParams): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return {
    title: project ? `${project.title} — Portfolio` : "Project Not Found",
    description: project
      ? `Learn more about ${project.title} - ${project.description}`
      : "",
  };
}

export default async function ProjectDetail({ params }: ProjectParams) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center px-4">
          <h1 className="text-2xl sm:text-3xl font-serif text-ink mb-6">
            Project <span className="italic">Not Found</span>
          </h1>
          <Link
            href="/#project"
            className="text-sm text-sage hover:text-ink transition-colors underline underline-offset-4 decoration-mist"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const markdownFromFile = await getProjectMarkdownContent(project.slug);
  const htmlContent = renderMarkdown(
    markdownFromFile ?? project.content ?? buildFallbackMarkdown(project),
  );

  return (
    <div className="min-h-screen bg-cream">
      {/* Minimal Header */}
      <div className="sticky top-0 bg-cream/95 backdrop-blur-sm border-b border-mist z-40">
        <div className="px-6 md:px-12 lg:px-20 py-5">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link
              href="/#project"
              className="text-xs tracking-[0.2em] uppercase text-sage hover:text-ink transition-colors"
            >
              ← Back to Projects
            </Link>

            {project.status && (
              <span
                className={`text-[10px] tracking-wider uppercase ${
                  project.status === 'Completed'
                    ? 'text-ink'
                    : 'text-sage'
                }`}
              >
                {project.status}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">

          {/* Hero */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center gap-4 mb-8">
              <span className="section-divider" />
              <span className="section-label">{project.category || 'Project'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-ink leading-tight mb-8">
              {project.title}
            </h1>

            <div className="section-divider h-px w-24 mb-8" />

            <p className="text-base sm:text-lg text-sage max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full aspect-[21/9] mb-12 sm:mb-16 md:mb-20 overflow-hidden">
            <Image
              src={project.bgImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {htmlContent && (
                <div>
                  <h2 className="section-label mb-6">Overview</h2>
                  <div
                    className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-sage prose-p:leading-relaxed prose-a:text-ink prose-a:underline prose-a:underline-offset-4 prose-a:decoration-mist hover:prose-a:decoration-ink prose-strong:text-ink prose-strong:font-serif prose-li:text-sage"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                  />
                </div>
              )}

              {project.features && project.features.length > 0 && (
                <div className="border-t border-mist pt-10">
                  <h2 className="section-label mb-6">Key Features</h2>
                  <ul className="space-y-3">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-sage">
                        <span className="text-ink mt-1 shrink-0">—</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.achievements && project.achievements.length > 0 && (
                <div className="border-t border-mist pt-10">
                  <h2 className="section-label mb-6">Key Achievements</h2>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement: string, index: number) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-sage">
                        <span className="text-ink mt-1 shrink-0">—</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-10">
              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h3 className="section-label mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="text-[10px] tracking-wider uppercase text-sage border border-mist px-3 py-1.5 hover:border-ink hover:text-ink transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline block text-center"
                >
                  View on GitHub
                </Link>
              )}
            </div>
          </div>

          {/* Footer nav */}
          <div className="mt-16 sm:mt-20 md:mt-24 pt-12 border-t border-mist">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link
                href="/#project"
                className="text-xs tracking-wider uppercase text-sage hover:text-ink transition-colors"
              >
                ← All Projects
              </Link>
              <span className="text-[10px] tracking-wider uppercase text-mist">
                View More Work
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}