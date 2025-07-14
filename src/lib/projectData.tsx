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
    title: "Pokedex",
    subtitleBig:
      "A lightning-fast, interactive Pokedex built with Next.js, TypeScript, and cutting-edge web technologies.",
    subtitleSmall:
      "From my Figma concept to fully functional app - complete with particle effects, sound design, and server-side rendering.",
    extraDetails: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "PokeAPI",
      "tsParticles",
      "Howler.js",
    ],
    detailTags: [
      { name: "NextJS", icon: "/icons/next.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Tailwind", icon: "/icons/tailwind.svg" },
    ],
    content: <div className="space-y-8"></div>,
    sections: [
      {
        title: "Goals",
        icon: "/project-icons/target.png",
        content: [
          "Transform a Figma design into a fully functional, production-ready web application.",
          "Implement smooth animations and particle effects for an immersive experience.",
          "Create a responsive, accessible interface that works flawlessly on all devices.",
          "Build with modern web technologies for optimal performance and developer experience.",
        ],
      },
      {
        title: "Tech Stack",
        icon: "/project-icons/wrench.png",
        content: [
          "Next.js 14 with App Router for blazing-fast server-side rendering",
          "TypeScript for type safety and better development experience",
          "Tailwind CSS for rapid, responsive UI development",
          "tsParticles for stunning particle animations and effects",
          "Howler.js for immersive sound design and audio feedback",
          "PokeAPI for comprehensive Pokémon data and statistics",
        ],
      },
      {
        title: "Key Features",
        icon: "/project-icons/brain.png",
        content: [
          "Interactive particle effects that respond to user interactions",
          "Sound design with Howler.js for authentic Pokémon experience",
          "Server-side rendering for optimal SEO and performance",
          "Responsive design that looks great on desktop, tablet, and mobile",
          "Type-safe API integration with comprehensive error handling",
          "Smooth animations and micro-interactions throughout the interface",
        ],
      },
      {
        title: "Results & Learnings",
        icon: "/project-icons/graph.png",
        content:
          "This project successfully bridged the gap between design and development, taking my Figma concept from wireframes to a fully functional application. I deepened my understanding of Next.js 14's App Router, mastered TypeScript integration, and learned how to create engaging user experiences with particles and sound. The combination of server-side rendering with client-side interactivity resulted in a fast, SEO-friendly application that maintains the playful spirit of the original Pokémon franchise.",
      },
    ],
    liveLink: "https://pokemon-dex-gilt.vercel.app/", // Update this with your actual live URL
    repoLink: "https://github.com/builtbyDevon/pokedex", // Optional
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
