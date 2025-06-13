"use client";

import { useState, type ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ClipboardTooltipProps {
  children: ReactNode;
  tooltipText: string;
  copyText: string;
  offsetX?: number;
  offsetY?: number;
  className?: string;
}

export const ClipboardTooltip = ({
  children,
  tooltipText,
  copyText,
  offsetX = 15,
  offsetY = 15,
  className = "",
}: ClipboardTooltipProps) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [currentTooltipText, setCurrentTooltipText] = useState(tooltipText);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLikelyDesktop, setIsLikelyDesktop] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsLikelyDesktop(
      typeof window !== "undefined" &&
        window.matchMedia("(hover: hover) and (pointer: fine)").matches
    );
  }, []);

  useEffect(() => {
    if (!isLikelyDesktop || !isTooltipVisible) return;
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isTooltipVisible, isLikelyDesktop]);

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!isLikelyDesktop || isClicked) return;
    setMousePosition({ x: event.clientX, y: event.clientY });
    setCurrentTooltipText(tooltipText);
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    if (isLikelyDesktop && !isClicked) {
      setIsTooltipVisible(false);
    }
  };

  const handleClick = () => {
    if (!isLikelyDesktop) {
      // On mobile, open mailto link
      window.location.href = `mailto:${copyText}`;
      return;
    }
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(copyText);
      setCurrentTooltipText("Email copied to clipboard");
    } else {
      setCurrentTooltipText("Clipboard not supported");
    }
    setIsClicked(true);
    setIsTooltipVisible(true);
    setTimeout(() => {
      setIsClicked(false);
      setIsTooltipVisible(false);
      setCurrentTooltipText(tooltipText);
    }, 2000);
  };

  // Tooltip style: follow cursor on desktop, pop above on mobile
  const tooltipStyle =
    isLikelyDesktop && isTooltipVisible
      ? {
          position: "fixed" as const,
          left: mousePosition.x + offsetX,
          top: mousePosition.y + offsetY,
          pointerEvents: "none" as const,
          whiteSpace: "nowrap" as const,
        }
      : {
          position: "absolute" as const,
          bottom: "125%",
          left: "50%",
          transform: "translateX(-50%)",
          whiteSpace: "nowrap" as const,
        };

  return (
    <div
      onMouseEnter={isLikelyDesktop ? handleMouseEnter : undefined}
      onMouseLeave={isLikelyDesktop ? handleMouseLeave : undefined}
      onClick={handleClick}
      className="relative inline-block cursor-pointer"
    >
      {children}
      <AnimatePresence>
        {isTooltipVisible && isLikelyDesktop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={tooltipStyle}
            className={`z-50 flex items-center gap-1.5 rounded-full bg-neutral-900 px-3 py-1.5 text-xs text-neutral-200 shadow-xl ring-1 ring-neutral-800 ${className}`}
          >
            <span>{currentTooltipText}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
