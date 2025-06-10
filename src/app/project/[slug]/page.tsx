// File: C:/Users/devie/OneDrive/Documents/Portfolio/my-app/src/app/project/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, type Project } from "@/lib/projectData";
import { notFound } from "next/navigation";
import { GradientText } from "@/components/GradientText";
import { Highlight } from "@/components/Header";
import { FadeInView } from "@/components/FadeInView";
import { Metadata, ResolvingMetadata } from "next";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Helper function to fetch data specifically for this page context
async function fetchProjectData(slug: string): Promise<Project | undefined> {
  // You could add more complex logic here if needed,
  // but for now, it just wraps getProjectBySlug
  return getProjectBySlug(slug);
}

export async function generateMetadata(
  { params }: ProjectPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const projectSlug = params.slug; // Assign to a new variable first
  const project = await fetchProjectData(projectSlug); // Use the new variable

  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `${project.title} | Portfolio`,
    description: `${project.subtitleBig} ${project.subtitleSmall}`,
  };
}

export async function generateStaticParams() {
  const { projects } = await import("@/lib/projectData");
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const projectSlug = params.slug; // Assign to a new variable first
  const project = await fetchProjectData(projectSlug); // Use the new variable

  if (!project) {
    notFound();
  }

  // ... rest of your component JSX
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
              Back to Portfolio
            </Link>
          </div>

          {/* Header Section */}
          <header className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              <GradientText>{project.title}</GradientText>
            </h1>
            <p className="text-[20px] text-neutral-300 md:text-[30px]">
              {project.subtitleBig}
            </p>
            <p className="text-base text-neutral-400 md:text-xl">
              {project.subtitleSmall}
            </p>
            {project.extraDetails && project.extraDetails.length > 0 && (
              <p className="mt-2 text-[14px] uppercase tracking-widest text-[var(--highlight-blue)]">
                {project.extraDetails.join(" • ")}
              </p>
            )}
            {project.detailTags && project.detailTags.length > 0 && (
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {project.detailTags.map((tag) => (
                  <div
                    key={tag.name}
                    className="flex items-center gap-2 rounded-full bg-neutral-700/50 px-4 py-2 text-sm font-medium text-neutral-300"
                  >
                    <Image
                      src={tag.icon}
                      alt={tag.name}
                      width={20}
                      height={20}
                    />
                    <span>{tag.name}</span>
                  </div>
                ))}
              </div>
            )}
          </header>

          {/* Content Area */}
          <section className="mb-16 space-y-8">{project.content}</section>

          {/* Content Sections (Goals, Tools Used, etc.) */}
          <section className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
            {project.sections.map((section, index) => (
              <div key={index} className="gap-4">
                <div className="mb-4 flex items-center gap-4">
                  <Image
                    src={section.icon}
                    alt="Section Icon"
                    width={48}
                    height={34}
                    quality={100}
                    className="mt-0 h-[48px] w-[48px]"
                  />
                  <h2 className="text-2xl font-semibold md:text-3xl">
                    {section.title}
                  </h2>
                </div>
                <div>
                  {Array.isArray(section.content) ? (
                    <ul className="text-highlight-green list-inside list-disc space-y-3 text-base leading-relaxed md:text-lg">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-highlight-green text-base leading-relaxed md:text-lg">
                      {section.content}
                    </p>
                  )}
                </div>
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
