import Image from "next/image";
import Link from "next/link"; // Next.js Link
import { getProjectBySlug, Project } from "@/lib/projectData"; // Adjust path if needed
import { notFound } from "next/navigation";
import { GradientText } from "@/components/GradientText"; // Assuming you want to use this
import { Highlight } from "@/components/Header"; // Assuming you want to use this
import { FadeInView } from "@/components/FadeInView"; // For smooth loading

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound(); // Triggers the Next.js 404 page
  }

  return (
    <FadeInView>
      <main className="min-h-screen bg-[#0D0D0D] px-4 py-12 text-neutral-200 md:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Back Link */}
          <div className="mb-12">
            <Link
              href="/portfolio"
              className="text-highlight-green group inline-flex items-center transition-colors hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 transition-transform group-hover:-translate-x-1"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Header Section */}
          <header className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              <GradientText>{project.title}</GradientText>
            </h1>
            <p className="mb-2 text-lg text-neutral-400 md:text-xl">
              {project.subtitle}
            </p>
            {project.conceptTags && project.conceptTags.length > 0 && (
              <div className="mt-4 flex justify-center gap-2">
                {project.conceptTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-highlight-green rounded-full bg-neutral-700/50 px-3 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Image Gallery/Showcase */}
          <section className="mb-16 space-y-8">
            {/* {project.images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-2xl">
                {image.caption && (
                  <p className="text-center text-neutral-400 py-3 bg-neutral-800/50 text-sm tracking-widest uppercase">
                    {image.caption}
                  </p>
                )}
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200} // Provide appropriate base width
                  height={800} // Provide appropriate base height
                  className="w-full h-auto object-contain"
                  priority={index < 2} // Prioritize loading for first couple of images
                />
              </div>
            ))} */}
          </section>

          {/* Content Sections (Goals, Tools Used, etc.) */}
          <section className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
            {project.sections.map((section, index) => (
              <div key={index}>
                <h2 className="border-highlight-green mb-6 border-l-4 pl-4 text-2xl font-semibold md:text-3xl">
                  {section.title}
                </h2>
                {Array.isArray(section.content) ? (
                  <ul className="list-inside list-disc space-y-3 text-base leading-relaxed text-neutral-300 md:text-lg">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
                    {section.content}
                  </p>
                )}
              </div>
            ))}
          </section>

          {/* Optional Links (Live Site, Repo) */}
          {(project.liveLink || project.repoLink) && (
            <section className="mb-8 mt-16 text-center">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-highlight-green mx-2 inline-block rounded-lg px-8 py-3 text-lg font-semibold text-neutral-900 transition-all hover:bg-opacity-80"
                >
                  View Live Site
                </a>
              )}
              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 inline-block rounded-lg bg-neutral-700 px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-neutral-600"
                >
                  View Code
                </a>
              )}
            </section>
          )}
        </div>
      </main>
    </FadeInView>
  );
}

// Optional: Generate static paths if you know all project slugs at build time
// This improves performance.
// export async function generateStaticParams() {
//   const { projects } = await import("@/lib/projectData"); // Or however you fetch all projects
//   return projects.map((project) => ({
//     slug: project.slug,
//   }));
// }
