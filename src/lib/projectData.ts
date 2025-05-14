export interface Project {
  slug: string; // This will be used in the URL, e.g., "pokedex"
  title: string;
  subtitle: string;
  conceptTags?: string[]; // e.g., ["UI/UX DESIGN", "FIGMA", "CONCEPT"]
  headerImage?: string; // Optional: A specific large image for the top
  images: Array<{
    src: string;
    alt: string;
    caption?: string; // Optional caption for each image
  }>;
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
    // Assuming your images are in public/images/projects/pokedex/
    images: [
      //   {
      //     src: "/images/projects/pokedex/pokedex-dark-desktop.png", // Replace with your actual image paths
      //     alt: "PokeDex Dark Mode Desktop View",
      //     caption: "HOME DARK MODE",
      //   },
      //   {
      //     src: "/images/projects/pokedex/pokedex-light-desktop.png",
      //     alt: "PokeDex Light Mode Desktop View",
      //     caption: "HOME LIGHT MODE",
      //   },
      //   {
      //     src: "/images/projects/pokedex/pokedex-light-mobile.png",
      //     alt: "PokeDex Light Mode Mobile View",
      //     caption: "POKEMON LIGHT MODE",
      //   },
    ],
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
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};
