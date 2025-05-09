"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react"; // Changed from Heroicons to Lucide React

interface CursorTooltipProps {
  children: React.ReactNode;
  text?: string;
  icon?: React.ReactNode;
  className?: string;
  offsetX?: number;
  offsetY?: number;
}

const CursorTooltip: React.FC<CursorTooltipProps> = ({
  children,
  text = "Visit",
  icon = <ArrowRight className="h-4 w-4" />, // Using Lucide React icon
  className = "",
  offsetX = 15, // Default offset from cursor
  offsetY = -15, // Default offset from cursor
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLikelyDesktop, setIsLikelyDesktop] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for desktop-like capabilities on mount
    setIsLikelyDesktop(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
    );
  }, []);

  useEffect(() => {
    if (!isLikelyDesktop) return; // Don't attach listeners if not desktop

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // We need to listen to mousemove on the window to track the cursor
    // even if it moves outside the wrapped element quickly.
    if (isVisible) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      // Clear position when not visible to avoid stale position if re-hovered quickly
      // before mouse moves again.
      setMousePosition({ x: 0, y: 0 });
    }

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isVisible, isLikelyDesktop]);

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!isLikelyDesktop) return;
    // Set initial position on enter to avoid jump if mouse hasn't moved yet
    setMousePosition({ x: event.clientX, y: event.clientY });
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    if (!isLikelyDesktop) return;
    setIsVisible(false);
  };

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block" // Or 'block' if you prefer
    >
      {children}
      <AnimatePresence>
        {isLikelyDesktop &&
          isVisible &&
          mousePosition.x !== 0 && ( // Only render if visible and position is tracked
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{
                position: "fixed",
                left: mousePosition.x + offsetX,
                top: mousePosition.y + offsetY,
                pointerEvents: "none",
                whiteSpace: "nowrap", // Prevent text wrapping
              }}
              className={`z-50 flex items-center gap-1.5 rounded-full bg-neutral-900 px-3 py-1.5 text-xs text-neutral-200 shadow-xl ring-1 ring-neutral-800 ${className}`}
            >
              {text && <span>{text}</span>}
              {icon}
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
};

export default CursorTooltip;
