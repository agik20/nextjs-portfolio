import { workData } from "@/assets/assets";
import Link from "next/link";
import Image from "next/image";
import { marked } from "marked";

type ProjectParams = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return workData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectParams) {
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Project Not Found
          </h1>
          <Link
            href="/#project"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const htmlContent = project.content ? marked.parse(project.content) : "";

  const statusColors: Record<string, string> = {
    Completed: "bg-green-100 text-green-800",
    "In Progress": "bg-yellow-100 text-yellow-800",
    Planning: "bg-blue-100 text-blue-800",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="px-6 md:px-12 lg:px-24 py-8">
        <Link
          href="/#project"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all duration-300 group mb-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Portfolio
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.category && (
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              )}
              {project.status && (
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    statusColors[project.status] || "bg-gray-100 text-gray-800"
                  }`}
                >
                  {project.status}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600">{project.description}</p>
          </div>

          <div className="relative w-full h-80 md:h-96 mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={project.bgImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="prose prose-lg max-w-none">
                <div
                  className="prose-headings:text-gray-900 prose-p:text-gray-600"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              </div>

              {project.features && (
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.achievements && (
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Key Achievements
                  </h3>
                  <ul className="space-y-3">
                    {project.achievements.map(
                      (achievement: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Timeline</p>
                    <p className="font-medium text-gray-900">
                      {project.description}
                    </p>
                  </div>
                  {project.category && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Category</p>
                      <p className="font-medium text-gray-900">
                        {project.category}
                      </p>
                    </div>
                  )}
                  {project.status && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Status</p>
                      <p className="font-medium text-gray-900">
                        {project.status}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {project.technologies && (
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(
                      (tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}

              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
