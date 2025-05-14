"use client";
import React, { useState } from "react";
import Image from "next/image";
import CursorTooltip from "./CursorTooltip";
import Link from "next/link";
import { FadeInView } from "./FadeInView";
import { TechTag } from "./Projects";

export type ProjectCardProps = {
  title: string;
  logoSrc: string;
  techTags: TechTag[];
  webUrl?: string;
  slug?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  logoSrc,
  techTags,
  webUrl,
  slug,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const linkHref = slug ? `/project/${slug}` : webUrl;
  const isInternalLink = !!slug;
  const linkTarget = isInternalLink ? undefined : "_blank";
  const tooltipText = isInternalLink
    ? `View details for ${title}`
    : `Visit ${title}`;

  const cardContent = (
    <div
      className="group flex cursor-pointer flex-col gap-4 transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FadeInView delay={0}>
        <div
          className={`rounded-4xl group-hover:border-highlight-green/50 flex aspect-square items-center justify-center border-2 border-white/10 p-8 transition-all duration-300 ease-in-out`}
          style={{
            background: isHovered
              ? "linear-gradient(338deg, rgb(255 255 255 / 16%) 0%, rgba(23, 23, 26, 0) 66%, rgba(13, 16, 27, 0) 100%)"
              : "linear-gradient(338deg, rgb(255 255 255 / 8%) 0%, rgba(23, 23, 26, 0) 34%, rgba(13, 16, 27, 0) 100%)",
          }}
        >
          <div className="relative h-auto w-full">
            <Image
              src={logoSrc}
              alt={`${title} logo`}
              width={200}
              height={100}
              className={`mx-auto max-h-[150px] w-full max-w-[300px] object-contain transition-all duration-300 ease-in-out`}
              priority
            />
          </div>
        </div>
        <h3
          className={`transition-color3 ml-2 py-3 text-xl font-semibold duration-300 ease-in-out ${
            isHovered ? "text-highlight-green" : "text-neutral-300"
          }`}
        >
          {title}
        </h3>
        <div className="flex flex-wrap gap-1 md:gap-2">
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
                  className={`text-xs transition-colors duration-300 ease-in-out ${
                    isHovered ? "text-white" : "text-neutral-300"
                  }`}
                >
                  {tag.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </FadeInView>
    </div>
  );

  return (
    <CursorTooltip text={tooltipText}>
      {linkHref ? (
        <Link
          href={linkHref}
          target={linkTarget}
          {...(linkTarget === "_blank" && { rel: "noopener noreferrer" })}
        >
          {cardContent}
        </Link>
      ) : (
        <div>{cardContent}</div>
      )}
    </CursorTooltip>
  );
};

export default ProjectCard;
