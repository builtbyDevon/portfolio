"use client";

import React from "react"; // Removed useEffect, useState, useRef
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
  // All states and effects related to in-view animations are removed
  // const [isInView, setIsInView] = useState(false);
  // const itemRef = useRef<HTMLDivElement>(null);
  // useEffect(() => { ... observer logic ... }, []);

  return (
    <div
      // ref no longer needed
      className={`relative scale-100 opacity-100`} // Static classes: always visible, full scale, no blur
    >
      <h3 className="P-2 mb-0 border-white/20 pb-2 text-center text-sm text-neutral-300 lg:text-base">
        {category.title}
      </h3>

      <div className="relative">
        <div className="mb-4 h-8 w-full overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800/80 p-1">
          <div
            className="h-6"
            style={{
              width: `${category.progress}%`, // Progress bar width is now static
              border: `1.5px solid ${category.color || "var(--highlight-green)"}`,
              borderRadius: "9999px",
              backgroundColor: "transparent",
              // Transition styles removed
            }}
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
