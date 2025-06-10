import React from "react";
import Image from "next/image";
import Header, { Highlight } from "@/components/Header";
import { GradientText } from "@/components/GradientText";

export interface Project {
  slug: string; // This will be used in the URL, e.g., "pokedex"
  title: string;
  subtitleBig: string;
  subtitleSmall: string;
  extraDetails?: string[];
  detailTags?: { name: string; icon: string }[];
  headerImage?: string; // Optional: A specific large image for the top
  content?: React.ReactNode; // Optional JSX content
  sections: Array<{
    title: string;
    icon: string;
    // Content can be a single string (paragraph) or an array (list items/multiple paragraphs)
    content: string | string[];
  }>;
  liveLink?: string; // Optional link to live project
  repoLink?: string; // Optional link to GitHub repo
}

export const projects: Project[] = [
  {
    slug: "pokedex",
    title: "PokeDex",
    subtitleBig: "3D-inspired Pokémon UI built in Figma.",
    subtitleSmall:
      "A modern, playful UI exploration of a classic – the Pokémon PokeDex.",
    extraDetails: ["UI Design", "Figma", "Concept"],
    detailTags: [{ name: "Figma", icon: "/icons/figma.svg" }],
    content: (
      <div className="space-y-8">
        <Header
          size="lg"
          mobileSize="sm"
          className="relative z-10 mb-1 text-center uppercase text-white"
        >
          HOME <Highlight>DARK MODE</Highlight>
        </Header>

        <Image
          src="/project-images/pokedex/pokedex-1.png"
          alt="PokeDex"
          width={1000}
          height={1000}
          quality={100}
          className="h-auto w-full"
        />

        <Header
          size="lg"
          mobileSize="sm"
          className="relative z-10 mb-1 text-center uppercase text-white"
        >
          HOME <Highlight>LIGHT MODE</Highlight>
        </Header>

        <Image
          src="/project-images/pokedex/pokedex-2.png"
          alt="PokeDex"
          width={1000}
          height={1000}
          quality={100}
          className="h-auto w-full"
        />

        <Header
          size="lg"
          mobileSize="sm"
          className="relative z-10 mb-1 text-center uppercase text-white"
        >
          MORE <Highlight>LIGHT MODE</Highlight>
        </Header>

        <div className="flex justify-between gap-4">
          <Image
            src="/project-images/pokedex/pokedex-3.png"
            alt="PokeDex"
            width={288}
            height={695}
            quality={100}
            className="h-auto w-full max-w-[288px]"
          />

          <Image
            src="/project-images/pokedex/pokedex-4.png"
            alt="PokeDex"
            width={695}
            height={697}
            quality={100}
            className="h-auto w-full max-w-[695px]"
          />
        </div>
      </div>
    ),
    sections: [
      {
        title: "Goals",
        icon: "/project-icons/target.png",
        content: [
          "Build a responsive layout suitable for both desktop and mobile.",
          "Explore dark/light mode switching.",
          "Implement a 3D view toggle (concept).",
          "Design filters and search in a fun, intuitive way.",
        ],
      },
      {
        title: "Tools Used",
        icon: "/project-icons/wrench.png",
        content: [
          "Figma (Design & Prototyping)",
          "Imagination & Pokémon Nostalgia",
        ],
      },
      {
        title: "UX & Design Decisions",
        icon: "/project-icons/brain.png",
        content: [
          "Card Design: Pokémon types are color-coded for quick visual filtering.",
          "Interaction Design: Used playful micro-interactions (e.g., toggle switch, hover states).",
          "Typography: Kept headers playful yet readable using retro fonts.",
          "Accessibility: Basic contrast checks performed; keyboard-friendly layout planned for any development stage.",
        ],
      },
      {
        title: "Results / What I Learned",
        icon: "/project-icons/graph.png",
        content:
          "This project was a deep dive into UI presentation for a beloved franchise, focusing on creating an engaging and visually rich experience. It reinforced the importance of thematic consistency and how small interactive elements can significantly enhance user engagement. I also experimented with creating a pseudo-3D feel within a 2D design tool.",
      },
    ],
    // liveLink: "https://example.com/pokedex-live", // Optional
    // repoLink: "https://github.com/yourusername/pokedex-figma-concept", // Optional
  },
  // You can add more project objects here following the same structure
];

// Helper function to find a project by its slug
export const getProjectBySlug = async (
  slug: string
): Promise<Project | undefined> => {
  // Simulate async operation if needed, or simply wrap the sync operation
  return projects.find((project) => project.slug === slug);
};
