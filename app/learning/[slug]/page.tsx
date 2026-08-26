// app/learning/[slug]/page.tsx

import {
  getLearningMaterialBySlug,
  getLearningMaterials,
} from "@/src/entities/portfolio/repository";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { renderMarkdown } from "@/src/shared/lib/markdown";
import { getLearningMarkdownContent } from "@/src/entities/portfolio/content.server";
import { buildFallbackMarkdown } from "@/src/shared/lib/content-fallback";

interface LearningParams {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getLearningMaterials().map((material) => ({ slug: material.slug }));
}

export async function generateMetadata({ params }: LearningParams): Promise<Metadata> {
  const { slug } = await params;
  const material = getLearningMaterialBySlug(slug);

  return {
    title: material ? `${material.title} — Journal` : "Material Not Found",
    description: material
      ? `Learn more about ${material.title} - ${material.description}`
      : "",
  };
}

export default async function LearningDetail({ params }: LearningParams) {
  const { slug } = await params;
  const material = getLearningMaterialBySlug(slug);

  if (!material) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center px-4">
          <h1 className="text-2xl sm:text-3xl font-serif text-ink mb-6">
            Material <span className="italic">Not Found</span>
          </h1>
          <Link
            href="/#learning"
            className="text-sm text-sage hover:text-ink transition-colors underline underline-offset-4 decoration-mist"
          >
            ← Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  const markdownFromFile = await getLearningMarkdownContent(material.slug);
  const htmlContent = renderMarkdown(
    markdownFromFile ?? material.content ?? buildFallbackMarkdown(material),
  );

  return (
    <div className="min-h-screen bg-cream">
      {/* Minimal sticky header */}
      <div className="sticky top-0 bg-cream/95 backdrop-blur-sm border-b border-mist z-40">
        <div className="px-6 md:px-12 lg:px-20 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link
              href="/#learning"
              className="text-xs tracking-[0.2em] uppercase text-sage hover:text-ink transition-colors"
            >
              ← Back
            </Link>

            <div className="flex items-center gap-4">
              <span className="text-[10px] tracking-wider uppercase text-mist">
                {material.duration}
              </span>
              {material.status && (
                <span className="text-[10px] tracking-wider uppercase text-mist">
                  {material.status}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Article */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 py-12 sm:py-16">

        {/* Article Header */}
        <article className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="section-divider" />
            <span className="section-label">{material.category}</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-serif text-ink leading-tight mb-6">
            {material.title}
          </h1>

          <p className="text-lg text-sage leading-relaxed mb-12 max-w-2xl">
            {material.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs tracking-wider uppercase text-mist mb-12">
            <span>{material.duration}</span>
            {material.level && (
              <>
                <span className="text-stone">·</span>
                <span>{material.level}</span>
              </>
            )}
          </div>

          {/* Feature Image */}
          <div className="relative w-full aspect-[21/9] mb-12 overflow-hidden">
            <Image
              src={material.bgImage}
              alt={material.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </article>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Main Content */}
          <div className="lg:col-span-8">
            {htmlContent && (
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-serif prose-headings:text-ink prose-headings:tracking-tight
                  prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                  prose-p:text-sage prose-p:leading-relaxed
                  prose-a:text-ink prose-a:underline prose-a:underline-offset-4 prose-a:decoration-mist hover:prose-a:decoration-ink
                  prose-strong:text-ink prose-strong:font-serif
                  prose-blockquote:border-l-4 prose-blockquote:border-mist prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-sage
                  prose-ul:list-none prose-ul:space-y-2
                  prose-li:flex prose-li:items-start prose-li:gap-3
                  prose-li:before:content-['—'] prose-li:before:text-ink prose-li:before:shrink-0
                  prose-code:text-sage prose-code:bg-cream-light prose-code:px-1.5 prose-code:py-0.5
                  prose-pre:bg-cream-light prose-pre:border prose-pre:border-mist prose-pre:rounded-none
                  prose-table:border prose-table:border-mist
                  prose-th:bg-cream-light prose-th:text-ink prose-th:font-serif
                  prose-td:border-t prose-td:border-mist prose-td:text-sage"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-10">

              {material.topics && material.topics.length > 0 && (
                <div>
                  <h3 className="section-label mb-4">Topics Covered</h3>
                  <ul className="space-y-3">
                    {material.topics.map((topic: string, index: number) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-sage">
                        <span className="text-mist mt-1 shrink-0">·</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {material.technologies && material.technologies.length > 0 && (
                <div>
                  <h3 className="section-label mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {material.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="text-[10px] tracking-wider uppercase text-mist border border-mist px-3 py-1.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {material.features && material.features.length > 0 && (
                <div>
                  <h3 className="section-label mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {material.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-sage">
                        <span className="text-ink mt-0.5 shrink-0">—</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-12 border-t border-mist text-center">
          <h3 className="text-lg font-serif text-ink mb-3">
            Finished reading?
          </h3>
          <p className="text-sm text-sage mb-8 max-w-md mx-auto">
            Continue exploring other learning materials to expand your knowledge.
          </p>
          <Link
            href="/#learning"
            className="btn-outline inline-flex items-center gap-2"
          >
            Explore More Materials
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}