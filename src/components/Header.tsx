"use client";

import React, { useEffect, useState } from "react";
import { Krona_One } from "next/font/google";
import Image from "next/image";
import HeaderSparkles from "@/components/HeaderSparkles";

const kronaOne = Krona_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-krona-one",
});

// Define the Highlight component separately - with green sparkles and dark stroke
export const Highlight = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <HeaderSparkles color="var(--highlight-green)">
    <span className={`uppercase text-[var(--highlight-green)] ${className}`}>
      {children}
    </span>
  </HeaderSparkles>
);

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  mobileSize?: "sm" | "md" | "lg" | "xl";
  mobileBreakpoint?: number;
};

// Create the Header component
const Header = ({
  children,
  className = "text-white uppercase",
  size = "md",
  mobileSize = "sm", // Default to smaller size on mobile
  mobileBreakpoint = 768, // Default mobile breakpoint
}: HeaderProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Check if we're on mobile and handle client-side rendering
  useEffect(() => {
    setMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [mobileBreakpoint]);

  // Size mapping to Tailwind classes
  const sizeClasses = {
    sm: "text-sm", // Small
    md: "text-lg", // 18px default
    lg: "text-xl", // Large
    xl: "text-2xl", // Extra large
  };

  // Always apply tracking
  const trackingClass = className.includes("tracking")
    ? ""
    : "tracking-[0.87em]";

  // Handle size classes - use a temporary default for server rendering
  // and then update when client-side renders
  const sizeClass = !mounted
    ? sizeClasses[size]
    : isMobile
      ? sizeClasses[mobileSize]
      : sizeClasses[size];

  return (
    <div
      className={`${kronaOne.variable} ${sizeClass} ${trackingClass} ${className}`}
      style={{ fontFamily: "var(--font-krona-one)" }}
    >
      {children}
      <Image
        className="pointer-events-none relative inline align-middle"
        src="/header-deco.svg"
        alt="Logo"
        width={isMobile ? 35 : 55}
        height={isMobile ? 37 : 37}
        style={{ top: "-10px" }}
      />
    </div>
  );
};

// Attach Highlight as a static property
Header.Highlight = Highlight;

export default Header;
