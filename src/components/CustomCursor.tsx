"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
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
  delay = 0.05,
  hoverScale = 1.5,
  hoverElements = ["a", "button", ".clickable"],
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isLikelyDesktop, setIsLikelyDesktop] = useState(false);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const desktopCheck = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    setIsLikelyDesktop(desktopCheck);

    if (!desktopCheck) {
      setIsActive(false);
      document.body.style.cursor = "auto";
      return;
    }

    const timer = setTimeout(() => {
      setIsActive(true);
      document.body.style.cursor = "none";
    }, 500);

    return () => {
      clearTimeout(timer);
      if (desktopCheck) {
        // Only revert cursor if it was changed by this component
        document.body.style.cursor = "auto";
      }
    };
    // Removed isActive from dependency array to avoid loop with document.body.style.cursor
    // This effect should primarily run once on mount to set up based on desktop check.
  }, []);

  const checkHoverState = useCallback(
    (currentX: number, currentY: number) => {
      if (!isLikelyDesktop) return;

      const hoveredElement = document.elementFromPoint(currentX, currentY);
      if (hoveredElement) {
        const isCurrentlyHovering = hoverElements.some((selector) => {
          if (selector.startsWith(".")) {
            const className = selector.substring(1);
            return (
              hoveredElement.classList.contains(className) ||
              hoveredElement.closest(`.${className}`) !== null
            );
          } else {
            return (
              hoveredElement.tagName.toLowerCase() === selector ||
              hoveredElement.closest(selector) !== null
            );
          }
        });
        setIsHovering(isCurrentlyHovering);
      }
    },
    [hoverElements, isLikelyDesktop]
  );

  useEffect(() => {
    if (!isLikelyDesktop || !isActive) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      checkHoverState(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isLikelyDesktop, isActive, checkHoverState]);

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

  if (!isActive || !isLikelyDesktop) return null;

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[9999] h-full w-full overflow-hidden">
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
          mass: 0.1,
          stiffness: 1200,
          damping: 30,
        }}
      />

      <motion.div
        className="absolute rounded-full"
        style={{
          border: `1.5px solid ${ringColor}`,
          width: ringSize,
          height: ringSize,
          backgroundColor: isHovering ? `${ringColor}20` : "transparent",
        }}
        variants={ringVariants}
        animate="default"
        transition={{
          type: "spring",
          mass: 0.2,
          stiffness: 800,
          damping: 35,
          delay: delay,
        }}
      />
    </div>
  );
};

export default CustomCursor;
