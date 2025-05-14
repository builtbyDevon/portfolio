import React from "react";
import Header, { Highlight } from "@/components/Header";
import ProjectCard from "./ProjectCard";
import { FadeInView } from "./FadeInView";

export type TechTag = {
  name: string;
  icon: string;
};

// Define the two possible structures for a project
type ProjectWithSlug = {
  id: number;
  title: string;
  logoSrc: string;
  techTags: TechTag[];
  slug: string; // Slug is present
  webUrl?: string; // webUrl can be optional or present
};

type ProjectWithWebUrl = {
  id: number;
  title: string;
  logoSrc: string;
  techTags: TechTag[];
  slug?: undefined; // Slug is explicitly not present or undefined
  webUrl: string; // webUrl must be present
};

// The Project type is a union of these two
export type Project = ProjectWithSlug | ProjectWithWebUrl;

type ProjectsProps = {
  projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="mx-auto w-full max-w-[1300px] space-y-8 px-[15px] py-12">
      {/* Projects Header with Highlight */}
      <div className="flex flex-col">
        <FadeInView delay={1.1}>
          <Header
            size="lg"
            mobileSize="sm"
            className="relative z-10 mb-1 text-center uppercase text-white md:text-left"
          >
            My <Highlight>projects</Highlight>
          </Header>
        </FadeInView>
      </div>

      {/* Projects Grid */}
      <FadeInView delay={1.2}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {projects.map((project) => {
            console.log(
              `Rendering card for: ${project.title}, slug: ${project.slug}, webUrl: ${project.webUrl}`
            );
            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                logoSrc={project.logoSrc}
                techTags={project.techTags}
                webUrl={project.webUrl}
                slug={project.slug}
              />
            );
          })}
        </div>
      </FadeInView>
    </div>
  );
};

// Example data for demonstration
const exampleProjects: Project[] = [
  {
    id: 1,
    title: "Bell Alliance",
    logoSrc: "/project-logos/bell-alliance.svg", // Using placeholder logo
    webUrl: "https://www.bellalliance.ca/",
    techTags: [
      { name: "WordPress", icon: "/icons/wordpress.svg" },
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "SASS", icon: "/icons/sass.svg" },
    ],
  },
  {
    id: 2,
    title: "APEX Granite",
    logoSrc: "/project-logos/apex.svg", // Using placeholder logo
    webUrl: "https://apexgranite.com",
    techTags: [
      { name: "WordPress", icon: "/icons/wordpress.svg" },
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "SASS", icon: "/icons/sass.svg" },
    ],
  },
  {
    id: 3,
    title: "Jags",
    logoSrc: "/project-logos/jags.svg", // Using placeholder logo
    webUrl: "https://stayatjags.com/",
    techTags: [
      { name: "Concrete", icon: "/icons/concrete.svg" },
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "SASS", icon: "/icons/sass.svg" },
    ],
  },
  {
    id: 5,
    title: "Mover | Cam",
    logoSrc: "/project-logos/cam.svg", // Using placeholder logo
    webUrl: "https://www.mover.net/",
    techTags: [
      { name: "Drupal", icon: "/icons/drupal.svg" },
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "SASS", icon: "/icons/sass.svg" },
    ],
  },
  {
    id: 6,
    title: "PokeDex",
    logoSrc: "/project-logos/pokedex.svg", // Using placeholder logo
    // webUrl: "https://www.bellalliance.ca/",
    techTags: [{ name: "Figma", icon: "/icons/figma.svg" }],
    slug: "pokedex",
  },
];

// Export both the component and the example data for easy use
export { exampleProjects };
export default Projects;
