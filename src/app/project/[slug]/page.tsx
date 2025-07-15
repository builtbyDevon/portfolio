// File: C:/Users/devie/OneDrive/Documents/Portfolio/my-app/src/app/project/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, type Project } from "@/lib/projectData";
import { notFound } from "next/navigation";
import { GradientText } from "@/components/GradientText";
import { FadeInView } from "@/components/FadeInView";
import { Metadata, ResolvingMetadata } from "next";
import { InteractiveCircles } from "@/components/InteractiveCircles";
import BlurDecoration from "@/components/BlurDecoration";
import Footer from "@/components/Footer";

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
    <main className="relative min-h-screen overflow-hidden bg-[#0D0D0D] px-4 py-12 text-neutral-200 md:px-8">
      <InteractiveCircles
        mobileSize="200px"
        tabletSize="400px"
        size="600px"
        mobileBreakpoint={850}
        tabletBreakpoint={2000}
        className="z-10"
        mobilePosition={{ top: "0", left: "-15%" }}
        tabletPosition={{ top: "0", left: "-20%" }}
        position={{ top: "0", left: "15%" }}
      />

      <InteractiveCircles
        mobileSize="180px"
        size="800px"
        mobileBreakpoint={850}
        tabletBreakpoint={2000}
        color="var(--highlight-blue)"
        position={{ top: "-400px", right: "0" }}
        mobilePosition={{ top: "-50px", right: "0" }}
        tabletPosition={{ top: "-100px", right: "0" }}
        className="z-10"
        sensitivity={3}
      />

      <div className="relative z-50 mx-auto max-w-5xl">
        {/* Back Link and Social Icons */}
        <div className="mb-12 flex items-center justify-between">
          <FadeInView>
            <Link
              href="/"
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
          </FadeInView>

          {/* Social Icons */}
          <FadeInView>
            <div className="flex items-center gap-4">
              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/devon-welch/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-highlight-green text-neutral-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="transition-transform hover:scale-110"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* GitHub Icon */}
              <a
                href="https://github.com/builtbyDevon"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-highlight-green text-neutral-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="transition-transform hover:scale-110"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </FadeInView>
        </div>

        {/* Header Section */}
        <FadeInView>
          <header className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              <GradientText>{project.title}</GradientText>
            </h1>
            <p className="text-[20px] text-neutral-300 md:text-[30px]">
              {project.subtitleBig}
            </p>
            {/* <p className="text-base text-neutral-400 md:text-xl">
              {project.subtitleSmall}
            </p> */}
            {project.extraDetails && project.extraDetails.length > 0 && (
              <p className="mt-8 text-[12px] uppercase tracking-widest text-[var(--highlight-blue)]">
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
        </FadeInView>

        {/* Content Area */}
        <FadeInView delay={0.5}>
          <section className="mb-16 space-y-8">{project.content}</section>
        </FadeInView>

        {/* Content Sections (Goals, Tools Used, etc.) */}
        <FadeInView delay={0}>
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
                    <ul className="text-highlight-green list-inside list-disc space-y-3 text-sm leading-relaxed md:text-lg">
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
        </FadeInView>

        {/* Optional Links (Live Site, Repo) */}
        <FadeInView>
          {(project.liveLink || project.repoLink) && (
            <section className="mb-8 mt-16 text-center">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-highlight-green mx-2 inline-block rounded-lg px-8 py-3 text-lg font-semibold text-neutral-900 transition-all hover:scale-105 hover:bg-opacity-80"
                >
                  View Live Site
                </a>
              )}
              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:border-highlight-green hover:text-highlight-green mx-2 inline-block rounded-lg border-2 border-neutral-600 bg-transparent px-8 py-3 text-lg font-semibold text-neutral-200 transition-all hover:scale-105"
                >
                  View Code
                </a>
              )}
            </section>
          )}
        </FadeInView>
      </div>

      <FadeInView>
        <h2 className="mb-12 mt-20 text-center text-2xl font-semibold md:text-3xl">
          <p>
            Back to
            <Link
              href="/"
              className="text-highlight-green ml-3 underline hover:text-white"
            >
              ← Portfolio
            </Link>
          </p>
        </h2>
      </FadeInView>

      <Footer />

      <BlurDecoration
        className="left-1/6 md:-top-1/6 top-0 z-10 h-[200vw] w-[200vw] -translate-x-1/2 md:h-[90vw] md:w-[90vw]"
        color="var(--highlight-blue)"
        opacity={0.1}
        centered={true}
      />

      <BlurDecoration
        className="bottom-1/2 right-[-450px] z-10 h-[900px] w-[900px] md:bottom-0 md:right-[-30vw] md:h-[60vw] md:w-[60vw]"
        color="var(--highlight-green)"
        opacity={0.1}
        centered={true}
      />
    </main>
  );
}
