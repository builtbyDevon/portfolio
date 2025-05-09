"use client";

import React, { useEffect, useRef, useState } from "react";

type InteractiveCirclesProps = {
  size?: string;
  mobileSize?: string;
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
  mobileBreakpoint?: number;
};

export const InteractiveCircles: React.FC<InteractiveCirclesProps> = ({
  size = "500px",
  mobileSize = "300px",
  color = "var(--highlight-green)",
  className = "",
  animationDuration = "4s",
  sensitivity = 1,
  position = {},
  mobileBreakpoint = 768,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { top, right, bottom, left, translateX, translateY } = position;
  const [isMobileView, setIsMobileView] = useState(false);
  const [isLikelyDesktop, setIsLikelyDesktop] = useState(false);

  const currentSize = isMobileView ? mobileSize : size;

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < mobileBreakpoint);
    };
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, [mobileBreakpoint]);

  useEffect(() => {
    setIsLikelyDesktop(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
    );
  }, []);

  useEffect(() => {
    if (!isLikelyDesktop || !containerRef.current) {
      if (containerRef.current) {
        containerRef.current.style.setProperty("--mouse-x", "0");
        containerRef.current.style.setProperty("--mouse-y", "0");
      }
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (event.clientX - centerX) * sensitivity;
      const y = (event.clientY - centerY) * sensitivity;
      containerRef.current.style.setProperty("--mouse-x", x.toString());
      containerRef.current.style.setProperty("--mouse-y", y.toString());
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isLikelyDesktop, sensitivity]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute -z-50 flex items-center justify-center ${className}`}
      style={{
        height: currentSize,
        width: currentSize,
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
          height: `calc(${currentSize} * 1.2)`,
          width: `calc(${currentSize} * 1.2)`,
          backgroundColor: color,
          transform: `translate(calc(var(--mouse-x, 0) * 0.01px), calc(var(--mouse-y, 0) * 0.01px))`,
        }}
      ></div>
      <div
        className="absolute rounded-full border opacity-10"
        style={{
          height: `calc(${currentSize} * 1.2)`,
          width: `calc(${currentSize} * 1.2)`,
          borderColor: color,
          transform: `translate(calc(var(--mouse-x, 0) * 0.015px), calc(var(--mouse-y, 0) * 0.015px))`,
        }}
      ></div>
      <div
        className="absolute rounded-full border opacity-10"
        style={{
          height: `calc(${currentSize} * 1.4)`,
          width: `calc(${currentSize} * 1.4)`,
          borderColor: color,
          transform: `translate(calc(var(--mouse-x, 0) * 0.02px), calc(var(--mouse-y, 0) * 0.02px))`,
        }}
      ></div>
    </div>
  );
};

export default InteractiveCircles;
