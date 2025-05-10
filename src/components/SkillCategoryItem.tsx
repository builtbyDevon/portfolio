"use client";

import React, { useEffect, useState, useRef } from "react";
// Image import is not used in this component

// Type definition (can be shared or re-defined if kept separate)
export type SkillCategoryData = {
  title: string;
  skills: string[];
  progress: number;
  color?: string;
};

interface SkillCategoryItemProps {
  category: SkillCategoryData;
}

// Re-usable CheckMark component (could also be imported from a shared location)
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

const SkillCategoryItem: React.FC<SkillCategoryItemProps> = ({ category }) => {
  const [isInView, setIsInView] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // Animate once when it comes into view
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the item is visible
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div ref={itemRef} className={`relative scale-100 opacity-100`}>
      <h3 className="P-2 mb-0 border-white/20 pb-2 text-center text-sm font-bold tracking-wider text-neutral-300 lg:text-base">
        {category.title}
      </h3>

      <div className="relative">
        <div className="progress-bar-container mb-4 h-8 w-full overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800/80 p-1">
          <div
            className={`progress-bar-inner h-6 rounded-full ${isInView ? "progress-bar-animate" : ""}`}
            style={
              {
                "--progress-width": `${category.progress}%`,
                background: `linear-gradient(270deg, ${category.color || "var(--highlight-green)"} -90%, rgba(23, 23, 26, 0) 41%, rgba(13, 16, 27, 0) 180%)`,
                borderColor: category.color || "var(--highlight-green)",
              } as React.CSSProperties
            }
          />
        </div>
        <ul className="space-y-2">
          {category.skills.map((skill, skillIndex) => (
            <li key={skillIndex} className="flex items-center gap-2">
              <CheckMark color={category.color || "var(--highlight-green)"} />
              <span className="text-xs text-neutral-300 lg:text-sm">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillCategoryItem;
