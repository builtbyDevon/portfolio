import React from "react";
import Image from "next/image";

export interface Project {
  slug: string; // This will be used in the URL, e.g., "pokedex"
  title: string;
  subtitle: string;
  conceptTags?: string[]; // e.g., ["UI/UX DESIGN", "FIGMA", "CONCEPT"]
  headerImage?: string; // Optional: A specific large image for the top
  content?: React.ReactNode; // Optional JSX content
  sections: Array<{
    title: string;
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
    subtitle:
      "3D-inspired Pokémon UI built in Figma. A modern, playful UI exploration of a classic – the Pokémon PokeDex.",
    conceptTags: ["UI/UX DESIGN", "FIGMA", "CONCEPT"],
    content: (
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-8">
          <div className="relative z-10">
            <h2 className="text-highlight-green mb-4 text-2xl font-bold">
              Project Overview
            </h2>
            <p className="text-lg leading-relaxed text-neutral-300">
              A modern reimagining of the classic Pokémon PokeDex, focusing on
              creating an engaging and intuitive user interface that captures
              the essence of the Pokémon universe while incorporating
              contemporary design principles.
            </p>
          </div>
          <div className="bg-highlight-green/10 absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl" />
        </div>

        <Image
          src="/dogo.svg"
          alt="PokeDex"
          width={50}
          height={50}
          className="w-full"
        />

        {/* Feature Highlights */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-neutral-800/30 p-6">
            <h3 className="text-highlight-green mb-3 text-xl font-semibold">
              Dark Mode
            </h3>
            <p className="text-neutral-300">
              Seamless dark mode implementation with carefully chosen color
              palettes that maintain readability and visual hierarchy.
            </p>
          </div>
          <div className="rounded-xl bg-neutral-800/30 p-6">
            <h3 className="text-highlight-green mb-3 text-xl font-semibold">
              3D Elements
            </h3>
            <p className="text-neutral-300">
              Subtle 3D effects and depth cues that enhance the user experience
              without compromising performance.
            </p>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="rounded-xl border border-neutral-700/50 bg-neutral-800/30 p-6">
          <h3 className="text-highlight-green mb-4 text-xl font-semibold">
            Interactive Elements
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-highlight-green/20 h-12 w-12 rounded-full p-2">
                <svg
                  className="text-highlight-green h-full w-full"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
              <p className="text-neutral-300">
                Hover states with smooth transitions
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-highlight-green/20 h-12 w-12 rounded-full p-2">
                <svg
                  className="text-highlight-green h-full w-full"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <p className="text-neutral-300">Animated type indicators</p>
            </div>
          </div>
        </div>
      </div>
    ),
    sections: [
      {
        title: "Goals",
        content: [
          "Build a responsive layout suitable for both desktop and mobile.",
          "Explore dark/light mode switching.",
          "Implement a 3D view toggle (concept).",
          "Design filters and search in a fun, intuitive way.",
        ],
      },
      {
        title: "Tools Used",
        content: [
          "Figma (Design & Prototyping)",
          "Imagination & Pokémon Nostalgia",
        ],
      },
      {
        title: "UX & Design Decisions",
        content: [
          "Card Design: Pokémon types are color-coded for quick visual filtering.",
          "Interaction Design: Used playful micro-interactions (e.g., toggle switch, hover states).",
          "Typography: Kept headers playful yet readable using retro fonts.",
          "Accessibility: Basic contrast checks performed; keyboard-friendly layout planned for any development stage.",
        ],
      },
      {
        title: "Results / What I Learned",
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
