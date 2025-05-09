"use client";
import React, { useState } from "react";
import Image from "next/image";
import CursorTooltip from "./CursorTooltip";
import Link from "next/link";
import { FadeInView } from "./FadeInView";

export type TechTag = {
  name: string;
  icon: string; // Path to the icon image
};

export type ProjectCardProps = {
  title: string;
  logoSrc: string;
  webUrl: string;
  techTags: TechTag[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  logoSrc,
  techTags,
  webUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate colored logo path by adding -colored before the extension
  const coloredLogoSrc = logoSrc.replace(/(\.\w+)$/, "-colored$1");

  return (
    <CursorTooltip text={`View ${title}`}>
      <FadeInView delay={0.2}>
        <Link target="_blank" href={`${webUrl}`}>
          <div
            className="group flex cursor-pointer flex-col gap-4 transition-all duration-300 ease-in-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Project Card */}
            <div
              className={`rounded-4xl group-hover:border-highlight-green/50 flex aspect-square items-center justify-center border-2 border-white/10 p-8 transition-all duration-300 ease-in-out`}
              style={{
                background: isHovered
                  ? "linear-gradient(338deg, rgb(38, 38, 38) 0%, rgba(33, 33, 36, 0) 34%, rgba(23, 26, 37, 0) 100%)"
                  : "linear-gradient(338deg, rgb(28, 28, 28) 0%, rgba(23, 23, 26, 0) 34%, rgba(13, 16, 27, 0) 100%)",
              }}
            >
              {/* Logo Images Container */}
              <div className="relative h-auto w-full">
                {/* Regular Logo (always present) */}
                <Image
                  src={logoSrc}
                  alt={`${title} logo`}
                  width={200}
                  height={100}
                  className={`mx-auto max-h-[150px] w-full max-w-[300px] object-contain transition-all duration-300 ease-in-out ${
                    isHovered ? "opacity-0" : "opacity-100"
                  }`}
                  priority
                />

                {/* Colored Logo (fades in on hover) */}
                <Image
                  src={coloredLogoSrc}
                  alt={`${title} colored logo`}
                  width={200}
                  height={100}
                  className={`absolute inset-0 mx-auto max-h-[150px] w-full max-w-[300px] object-contain transition-all duration-300 ease-in-out ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                  priority
                />
              </div>
            </div>

            {/* Project Title */}
            <h3
              className={`text-xl font-semibold transition-colors duration-300 ease-in-out ${
                isHovered ? "text-highlight-green" : "text-neutral-300"
              }`}
            >
              {title}
            </h3>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {techTags.map((tag, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-1 rounded-full border px-3 py-1 transition-all duration-300 ease-in-out ${
                    isHovered
                      ? "border-neutral-700 bg-neutral-800"
                      : "bg-neutral-850 border-neutral-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={tag.icon}
                      alt={tag.name}
                      className="max-h-[16px] max-w-[16px]"
                      width={16}
                      height={16}
                    />
                    <span
                      className={`max-h- text-xs transition-colors duration-300 ease-in-out ${
                        isHovered ? "text-white" : "text-neutral-300"
                      }`}
                    >
                      {tag.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Link>
      </FadeInView>
    </CursorTooltip>
  );
};

export default ProjectCard;
