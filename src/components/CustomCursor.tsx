"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

type CustomCursorProps = {
  color?: string;
  size?: number;
  ringSize?: number;
  ringColor?: string;
  delay?: number;
  hoverScale?: number;
  hoverElements?: string[];
};

const CustomCursor: React.FC<CustomCursorProps> = ({
  color = "var(--highlight-blue)",
  size = 8,
  ringSize = 36,
  ringColor = "var(--highlight-green)",
  delay = 0.08,
  hoverScale = 1.5,
  hoverElements = ["a", "button", ".clickable"],
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Memoize the checkHover function to use the latest mousePosition without dependency
  const checkHover = useCallback(() => {
    const hoveredElement = document.elementFromPoint(
      mousePosition.x,
      mousePosition.y
    );
    if (hoveredElement) {
      // Check if the hovered element or any of its parents match our hover selectors
      const isHovering = hoverElements.some((selector) => {
        if (selector.startsWith(".")) {
          // Class selector
          const className = selector.substring(1);
          return (
            hoveredElement.classList.contains(className) ||
            hoveredElement.closest(`.${className}`) !== null
          );
        } else {
          // Tag selector
          return (
            hoveredElement.tagName.toLowerCase() === selector ||
            hoveredElement.closest(selector) !== null
          );
        }
      });

      setIsHovering(isHovering);
    }
  }, [hoverElements, mousePosition]);

  useEffect(() => {
    // Initial delay to ensure everything is loaded before showing cursor
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 500);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listeners
    window.addEventListener("mousemove", updateMousePosition);

    // Hide default cursor
    document.body.style.cursor = "none";

    // Set up interval for checking hover state
    const hoverInterval = setInterval(checkHover, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(hoverInterval);
      window.removeEventListener("mousemove", updateMousePosition);
      // Restore default cursor when component unmounts
      document.body.style.cursor = "auto";
    };
  }, [checkHover]); // Only depend on the memoized checkHover

  // Set up framer-motion transitions
  const cursorVariants = {
    default: {
      x: mousePosition.x - size / 2,
      y: mousePosition.y - size / 2,
      scale: isHovering ? 0 : 1,
    },
  };

  const ringVariants = {
    default: {
      x: mousePosition.x - ringSize / 2,
      y: mousePosition.y - ringSize / 2,
      scale: isHovering ? hoverScale : 1,
      opacity: isHovering ? 0.8 : 0.6,
    },
  };

  // Don't render cursor if it's not active yet
  if (!isActive) return null;

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-50 h-full w-full overflow-hidden">
      {/* Main cursor dot */}
      <motion.div
        className="absolute rounded-full"
        style={{
          backgroundColor: color,
          width: size,
          height: size,
        }}
        variants={cursorVariants}
        animate="default"
        transition={{
          type: "spring",
          mass: 0.3,
          stiffness: 800,
          damping: 40,
        }}
      />

      {/* Cursor outer ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          border: `1.5px solid ${ringColor}`,
          width: ringSize,
          height: ringSize,
          backgroundColor: isHovering ? `${ringColor}20` : "transparent", // Add slight background on hover
        }}
        variants={ringVariants}
        animate="default"
        transition={{
          type: "spring",
          mass: 0.5,
          stiffness: 300,
          damping: 28,
          delay: delay,
        }}
      />
    </div>
  );
};

export default CustomCursor;
