import React from "react";
import Header, { Highlight } from "@/components/Header";
import ProjectCard, { TechTag } from "./ProjectCard";
import { FadeInView } from "./FadeInView";

export type Project = {
  id: number;
  title: string;
  logoSrc: string;
  techTags: TechTag[];
  webUrl: string;
};

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
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            logoSrc={project.logoSrc}
            techTags={project.techTags}
            webUrl={project.webUrl}
          />
        ))}
      </div>
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
    id: 7,
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
    id: 8,
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
    id: 9,
    title: "Mover | Cam",
    logoSrc: "/project-logos/cam.svg", // Using placeholder logo
    webUrl: "https://www.mover.net/",
    techTags: [
      { name: "Drupal", icon: "/icons/drupal.svg" },
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "SASS", icon: "/icons/sass.svg" },
    ],
  },
];

// Export both the component and the example data for easy use
export { exampleProjects };
export default Projects;
