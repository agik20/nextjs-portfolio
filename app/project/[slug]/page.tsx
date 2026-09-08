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

function ProjectMetaCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="group">
      <p className="text-[9px] tracking-[0.25em] uppercase text-stone mb-2 group-hover:text-sage transition-colors duration-300">
        {label}
      </p>
      <p className="text-sm font-serif text-ink leading-snug">{value}</p>
    </div>
  );
}

function TechPill({ tech }: { tech: string }) {
  return (
    <span className="relative inline-flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase text-sage border border-stone/50 px-3 py-2 hover:border-ink hover:text-ink hover:bg-ink/5 transition-all duration-300 cursor-default">
      <span className="w-1 h-1 rounded-full bg-stone group-hover:bg-ink transition-colors duration-300" />
      {tech}
    </span>
  );
}

function FeatureItem({ text, index }: { text: string; index: number }) {
  return (
    <div className="flex items-start gap-4 py-4 border-t border-mist group">
      <span className="text-xs font-serif text-stone shrink-0 mt-0.5 group-hover:text-gold transition-colors duration-300">
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="text-sm text-sage leading-relaxed group-hover:text-ink transition-colors duration-300">
        {text}
      </p>
    </div>
  );
}

function AchievementItem({ text, index }: { text: string; index: number }) {
  return (
    <div className="flex items-start gap-4 py-4 border-t border-mist group">
      <span className="w-5 h-5 rounded-full border border-gold/40 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
        <span className="text-[8px] text-gold group-hover:text-ink transition-colors duration-300 font-serif">
          ✓
        </span>
      </span>
      <p className="text-sm text-sage leading-relaxed group-hover:text-ink transition-colors duration-300">
        {text}
      </p>
    </div>
  );
}

function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-12 border-t border-mist">
      <h2 className="text-[10px] tracking-[0.3em] uppercase text-stone mb-8 flex items-center gap-4">
        <span className="w-8 h-px bg-stone" />
        {title}
      </h2>
      {children}
    </section>
  );
}

function NumberedSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-12 border-t border-mist">
      <div className="flex items-baseline gap-4 mb-8">
        <span className="text-5xl font-serif text-stone/30 leading-none">
          {number}
        </span>
        <h2 className="text-xl font-serif text-ink leading-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
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
            href="/work"
            className="text-xs tracking-[0.2em] uppercase text-sage hover:text-ink transition-colors underline underline-offset-4 decoration-mist"
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

  const otherProjects = getProjects().filter((p) => p.slug !== project.slug);
  const nextProject = otherProjects[0];
  const prevProject = otherProjects[otherProjects.length - 1];

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="relative min-h-[70vh] md:min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.bgImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 mb-8">
              <Link
                href="/work"
                className="text-xs tracking-[0.2em] uppercase text-paper/70 hover:text-paper transition-colors duration-300"
              >
                ← All Works
              </Link>
              <span className="text-paper/40">/</span>
              <span className="text-xs tracking-[0.2em] uppercase text-paper/70">
                {project.category}
              </span>
            </div>

            {/* Title block */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-paper leading-[0.95] tracking-tight max-w-5xl mb-10">
              {project.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-xs tracking-[0.2em] uppercase text-paper/70">
                  {project.description}
                </span>
              </div>
              <span
                className={`text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 border ${
                  project.status === "Completed"
                    ? "border-paper/30 text-paper"
                    : "border-gold/50 text-gold"
                }`}
              >
                {project.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Intro + Meta Grid */}
      <div className="px-6 md:px-12 lg:px-20 -mt-8 md:-mt-12 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-paper border border-mist/60 p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Intro text */}
              <div className="lg:col-span-7">
                <p className="text-base md:text-lg text-sage leading-relaxed font-serif italic">
                  {project.content || project.description}
                </p>
              </div>

              {/* Meta cards */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-x-6 gap-y-8">
                <ProjectMetaCard label="Category" value={project.category || "—"} />
                <ProjectMetaCard label="Status" value={project.status || "—"} />
                <ProjectMetaCard label="Timeline" value={project.description || "—"} />
                <ProjectMetaCard
                  label="Technologies"
                  value={`${project.technologies?.length || 0} tools`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Content column */}
          <div className="lg:col-span-8">
            {htmlContent ? (
              <>
                <NumberedSection number="01" title="Overview">
                  <div
                    className="prose prose-lg max-w-none font-sans"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                  />
                </NumberedSection>
              </>
            ) : null}

            {project.features && project.features.length > 0 && (
              <ContentSection title="Key Features">
                <div className="space-y-0">
                  {project.features.map((feature: string, index: number) => (
                    <FeatureItem key={index} text={feature} index={index} />
                  ))}
                </div>
              </ContentSection>
            )}

            {project.achievements && project.achievements.length > 0 && (
              <ContentSection title="Achievements">
                <div className="space-y-0">
                  {project.achievements.map(
                    (achievement: string, index: number) => (
                      <AchievementItem
                        key={index}
                        text={achievement}
                        index={index}
                      />
                    ),
                  )}
                </div>
              </ContentSection>
            )}

            {/* Full-width project image */}
            <div className="py-12 border-t border-mist">
              <div className="relative aspect-[21/9] overflow-hidden bg-stone/20">
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  fill
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-0">
            {/* Tech stack */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="py-12 border-t border-mist">
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-stone mb-6 flex items-center gap-3">
                  <span className="w-6 h-px bg-stone" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, index: number) => (
                    <TechPill key={index} tech={tech} />
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div className="py-12 border-t border-mist space-y-3">
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-stone mb-6 flex items-center gap-3">
                <span className="w-6 h-px bg-stone" />
                Links
              </h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-sage hover:text-ink transition-colors duration-300 py-2"
                >
                  <span className="w-8 h-8 border border-stone/40 flex items-center justify-center group-hover:border-ink group-hover:bg-ink group-hover:text-paper transition-all duration-300">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </span>
                  <span className="group-hover:underline underline-offset-4 decoration-stone/50 group-hover:decoration-ink transition-all duration-300">
                    View on GitHub
                  </span>
                </a>
              )}
            </div>

            {/* Category link */}
            <div className="py-12 border-t border-mist">
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-stone mb-4 flex items-center gap-3">
                <span className="w-6 h-px bg-stone" />
                Category
              </h3>
              <Link
                href="/work"
                className="text-sm font-serif text-ink hover:text-gold transition-colors duration-300"
              >
                → {project.category}
              </Link>
            </div>

            {/* Quick nav to other projects */}
            <div className="py-12 border-t border-mist">
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-stone mb-6 flex items-center gap-3">
                <span className="w-6 h-px bg-stone" />
                More Work
              </h3>
              <div className="space-y-0">
                {otherProjects.slice(0, 3).map((p) => (
                  <Link
                    key={p.slug}
                    href={`/project/${p.slug}`}
                    className="group block py-4 border-t border-mist"
                  >
                    <p className="text-xs tracking-[0.15em] uppercase text-stone group-hover:text-gold transition-colors duration-300 mb-1">
                      {p.category}
                    </p>
                    <p className="text-sm font-serif text-ink group-hover:italic transition-all duration-300">
                      {p.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer nav */}
      <div className="border-t border-mist">
        <div className="px-6 md:px-12 lg:px-20 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {prevProject && (
              <Link
                href={`/project/${prevProject.slug}`}
                className="group text-left"
              >
                <p className="text-[10px] tracking-[0.25em] uppercase text-stone mb-3 group-hover:text-gold transition-colors duration-300">
                  ← Previous
                </p>
                <p className="text-base font-serif text-ink group-hover:italic transition-all duration-300">
                  {prevProject.title}
                </p>
              </Link>
            )}

            <div className="md:text-center flex items-center justify-center">
              <Link
                href="/work"
                className="text-xs tracking-[0.2em] uppercase text-sage hover:text-ink transition-colors duration-300 border border-stone/40 px-6 py-3 hover:border-ink hover:bg-ink hover:text-paper"
              >
                All Projects
              </Link>
            </div>

            {nextProject && (
              <Link
                href={`/project/${nextProject.slug}`}
                className="group text-right"
              >
                <p className="text-[10px] tracking-[0.25em] uppercase text-stone mb-3 group-hover:text-gold transition-colors duration-300">
                  Next →
                </p>
                <p className="text-base font-serif text-ink group-hover:italic transition-all duration-300">
                  {nextProject.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
