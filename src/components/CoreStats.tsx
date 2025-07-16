"use client";

import React /*useEffect, useState*/ from "react"; // Removed useState and useEffect if only used for 'mounted'
import Image from "next/image";
import SkillCategoryItem, { SkillCategoryData } from "./SkillCategoryItem";

interface CoreStatsProps {
  className?: string;
}

const skillCategories: SkillCategoryData[] = [
  {
    title: "Front-End Development",
    progress: 90,
    color: "var(--highlight-green)",
    skills: [
      "HTML",
      "CSS & SCSS",
      "Tailwind",
      "JavaScript",
      "React & NextJS",
      "PHP",
      "Git",
      "Github",
      "Expo",
      "Docker",
      "Cloudflare",
      "WordPress, Drupal, Concrete5",
    ],
  },
  {
    title: "UI/UX Design",
    progress: 80,
    color: "var(--highlight-blue)",
    skills: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe XD",
      "Affinity Photo",
      "Affinity Designer",
    ],
  },
  {
    title: "AI Tools",
    progress: 85,
    color: "rgb(182 137 255)",
    skills: ["ChatGPT", "Claude AI", "Google Gemini", "Cursor AI IDE"],
  },
  {
    title: "Back-End Development",
    progress: 45,
    color: "#ff7878",
    skills: ["PHP", "Pocketbase"],
  },
  {
    title: "Other Skills",
    progress: 75,
    color: "#ffbc5f",
    skills: [
      "Ubuntu Server",
      "NPM",
      "Command Line",
      "Windows",
      "MacOS",
      "Crypto", // Added Crypto back as it was in the original before last edit
    ],
  },
];

const CoreStats: React.FC<CoreStatsProps> = ({ className = "" }) => {
  // const [mounted, setMounted] = useState(false); // Removed 'mounted' state
  // useEffect(() => { // Removed useEffect for 'mounted'
  //   setMounted(true);
  // }, []);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Main content box - no longer transitions opacity based on 'mounted' */}
      <div
        className={`w-full rounded-3xl p-8 md:p-12`}
        style={{
          background:
            "linear-gradient(338deg, rgb(255 255 255 / 8%) 0%, rgba(23, 23, 26, 0) 34%, rgba(13, 16, 27, 0) 100%)",
        }}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {skillCategories.map((category, index) => (
            <SkillCategoryItem
              key={index}
              category={category}
              // delay={index * 100} // Removed delay prop from SkillCategoryItem
            />
          ))}
        </div>
      </div>

      {/* Absolute border layer - no longer transitions opacity based on 'mounted' */}
      <div
        className={`rounded-4xl pointer-events-none absolute inset-0 border-2 border-white/10`}
        style={{
          clipPath: "polygon(50% 0, 100% 0, 100% 90%, 0 100%, 0 10%)",
        }}
      />

      {/* Character graphic - no longer transitions opacity based on 'mounted' */}
      <div
        className={`absolute -bottom-[3.75rem] -right-[2.5rem] md:-bottom-16 md:-right-10`}
      >
        <Image
          src="/flying-man.png"
          alt="Flying Guy"
          width={225}
          height={189}
          quality={100}
          className="animate-[float_4s_ease-in-out_infinite]"
        />
      </div>
    </div>
  );
};

export default CoreStats;
