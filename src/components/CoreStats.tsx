"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type SkillCategory = {
  title: string;
  skills: string[];
  progress: number; // Value between 0 and 100
  color?: string; // Optional custom color
};

interface CoreStatsProps {
  className?: string;
}

const CoreStats: React.FC<CoreStatsProps> = ({ className = "" }) => {
  const [animated, setAnimated] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState<number[]>([]);

  // Handle mounting with smooth transitions
  useEffect(() => {
    // Mark as mounted to trigger CSS transitions
    setMounted(true);

    // Small delay before starting progress animations
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 600); // Delay animation until after initial fade-in

    // Add staggered reveal for each category
    const revealCategories = () => {
      skillCategories.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCategories((prev) => [...prev, index]);
        }, 400 * index); // 400ms delay between each category
      });
    };

    const revealTimer = setTimeout(revealCategories, 800);

    return () => {
      clearTimeout(timer);
      clearTimeout(revealTimer);
    };
  }, []);

  const skillCategories: SkillCategory[] = [
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
      title: "AI Skills",
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
        "Pocketbase",
        "Windows",
        "MacOS",
        "Crypto",
      ],
    },
  ];

  // Custom checkmark SVG component with thinner outline
  const CheckMark = ({ color }: { color: string }) => (
    <div
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[1.5px]"
      style={{ borderColor: color, backgroundColor: "transparent" }}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
          fill={color}
        />
      </svg>
    </div>
  );

  return (
    <div className={`relative w-full ${className}`}>
      {/* Pre-render a "placeholder" version with simpler styling that won't pop in */}
      {!mounted && (
        <div className="w-full rounded-2xl bg-black/40 p-8 md:p-12">
          {/* This is just a simple placeholder with minimal styling */}
        </div>
      )}

      {/* Main content box with smooth opacity transition */}
      <div
        className={`w-full rounded-2xl p-8 backdrop-blur-md transition-all duration-500 md:p-12 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(338deg, rgb(28 28 28) 0%, rgba(23, 23, 26, 0) 34%, rgba(13, 16, 27, 0) 100%)",
          position: mounted ? "relative" : "absolute",
          top: 0,
          left: 0,
        }}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${
                visibleCategories.includes(index)
                  ? "scale-100 opacity-100 blur-none"
                  : "scale-95 opacity-50 blur-md"
              }`}
            >
              <h3 className="P-2 mb-0 border-white/20 pb-2 text-center text-sm text-neutral-300 lg:text-base">
                {category.title}
              </h3>

              <div className="relative">
                {/* Simple progress bar container */}
                <div className="mb-4 h-8 w-full overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800/80 p-1">
                  {/* Progress bar with border styling */}
                  <div
                    className="h-6 transition-all duration-1000 ease-out"
                    style={{
                      width:
                        animated && visibleCategories.includes(index)
                          ? `${category.progress}%`
                          : "0%",
                      border: `1.5px solid ${category.color || "var(--highlight-green)"}`,
                      borderRadius: "9999px",
                      backgroundColor: "transparent",
                      transition: "width 1.5s ease-in-out",
                    }}
                  />
                </div>

                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2">
                      <CheckMark
                        color={category.color || "var(--highlight-green)"}
                      />
                      <span className="text-xs text-neutral-300 lg:text-sm">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Absolute border layer with cut-off effect and transition */}
      <div
        className={`rounded-4xl pointer-events-none absolute inset-0 border-2 border-white/10 transition-opacity duration-500 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{
          clipPath: "polygon(50% 0, 100% 0, 100% 90%, 0 100%, 0 10%)",
        }}
      />

      {/* Character graphic shown in the screenshot */}
      <div
        className={`-bottom-15 absolute -right-10 transition-opacity duration-700 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
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
