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
  mobileSize = "sm",
  mobileBreakpoint = 768,
}: HeaderProps) => {
  // Initialize isMobile to a sensible default or null if you want to explicitly handle the "unknown" state.
  // For this fix, we'll assume non-mobile initially to avoid a large text flash on desktop during SSR.
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };
    checkMobile(); // Initial check on client mount
    setHasMounted(true); // Indicate client-side has mounted and checked

    window.addEventListener("resize", checkMobile);
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

  let currentSizeClass;
  if (!hasMounted) {
    // During SSR or before client-side mount and check, use the default desktop size.
    // Or, you could render nothing or a placeholder to avoid any flash, but that adds complexity.
    currentSizeClass = sizeClasses[size];
  } else {
    currentSizeClass = isMobile ? sizeClasses[mobileSize] : sizeClasses[size];
  }

  return (
    <div
      className={`${kronaOne.variable} ${currentSizeClass} ${trackingClass} ${className}`}
      style={{ fontFamily: "var(--font-krona-one)" }}
    >
      {children}
      <Image
        className="pointer-events-none relative inline align-middle"
        src="/header-deco.svg"
        alt="Logo"
        width={isMobile && hasMounted ? 35 : 55} // Only use isMobile for width if hasMounted
        height={37}
        style={{ top: "-10px" }}
      />
    </div>
  );
};

// Attach Highlight as a static property
Header.Highlight = Highlight;

export default Header;
