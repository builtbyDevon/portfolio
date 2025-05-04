"use client";

import React, { useEffect, useRef } from "react";

type InteractiveCirclesProps = {
  size?: string;
  color?: string;
  className?: string;
  animationDuration?: string;
  sensitivity?: number;
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    translateX?: string;
    translateY?: string;
  };
};

export const InteractiveCircles: React.FC<InteractiveCirclesProps> = ({
  size = "500px",
  color = "var(--highlight-green)",
  className = "",
  animationDuration = "4s",
  sensitivity = 1,
  position = {},
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { top, right, bottom, left, translateX, translateY } = position;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      // Calculate center point of the container
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from mouse to center of component
      const x = (event.clientX - centerX) * sensitivity;
      const y = (event.clientY - centerY) * sensitivity;

      // Apply the mouse position to the container
      containerRef.current.style.setProperty("--mouse-x", x.toString());
      containerRef.current.style.setProperty("--mouse-y", y.toString());
    };

    // Add event listener to the window
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [sensitivity]);

  return (
    <div
      ref={containerRef}
      className={`absolute flex items-center justify-center ${className}`}
      style={{
        height: size,
        width: size,
        animation: `grow ${animationDuration} ease-in-out infinite`,
        transform: `translate(calc(var(--mouse-x, 0) * -0.02px), calc(var(--mouse-y, 0) * -0.02px)) ${translateX ? `translateX(${translateX})` : ""} ${translateY ? `translateY(${translateY})` : ""}`,
        top,
        right,
        bottom,
        left,
      }}
    >
      <div
        className="absolute rounded-full opacity-5"
        style={{
          height: `calc(${size} * 1.2)`,
          width: `calc(${size} * 1.2)`,
          backgroundColor: color,
          transform: `translate(calc(var(--mouse-x, 0) * 0.01px), calc(var(--mouse-y, 0) * 0.01px))`,
        }}
      ></div>
      <div
        className="absolute rounded-full border opacity-10"
        style={{
          height: `calc(${size} * 1.2)`,
          width: `calc(${size} * 1.2)`,
          borderColor: color,
          transform: `translate(calc(var(--mouse-x, 0) * 0.015px), calc(var(--mouse-y, 0) * 0.015px))`,
        }}
      ></div>
      <div
        className="absolute rounded-full border opacity-10"
        style={{
          height: `calc(${size} * 1.4)`,
          width: `calc(${size} * 1.4)`,
          borderColor: color,
          transform: `translate(calc(var(--mouse-x, 0) * 0.02px), calc(var(--mouse-y, 0) * 0.02px))`,
        }}
      ></div>
    </div>
  );
};

export default InteractiveCircles;
