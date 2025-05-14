"use client";

import React, { useEffect, useRef, useState } from "react";

type PositionProps = {
  top?: string | undefined | null;
  right?: string | undefined | null;
  bottom?: string | undefined | null;
  left?: string | undefined | null;
  translateX?: string | undefined | null;
  translateY?: string | undefined | null;
};

type InteractiveCirclesProps = {
  size?: string;
  mobileSize?: string;
  color?: string;
  className?: string;
  animationDuration?: string;
  sensitivity?: number;
  position?: PositionProps;
  mobilePosition?: PositionProps;
  mobileBreakpoint?: number;
  initialY?: number;
  initialScale?: number;
  animationDelay?: number;
  children?: React.ReactNode;
};

export const InteractiveCircles: React.FC<InteractiveCirclesProps> = ({
  size = "500px",
  mobileSize = "300px",
  color = "var(--highlight-green)",
  className = "",
  animationDuration = "4s",
  sensitivity = 1,
  position = {},
  mobilePosition = {},
  mobileBreakpoint = 768,
  initialY = 20,
  initialScale = 0.95,
  animationDelay = 0,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isLikelyDesktop, setIsLikelyDesktop] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);
  const [applyEntranceTransition, setApplyEntranceTransition] = useState(true);

  const currentSize = isMobileView ? mobileSize : size;
  const entranceAnimationDuration = 0.6;

  useEffect(() => {
    const checkMobileView = () =>
      setIsMobileView(window.innerWidth < mobileBreakpoint);
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, [mobileBreakpoint]);

  const activePosition = isMobileView
    ? { ...position, ...mobilePosition }
    : position;

  const {
    top: activeTop,
    right: activeRight,
    bottom: activeBottom,
    left: activeLeft,
    translateX: activeTranslateX,
    translateY: activeTranslateY,
  } = activePosition;

  const finalTop = activeTop;
  const finalRight = activeRight;
  const finalBottom = activeBottom;
  const finalLeft = activeLeft;
  const baseTranslateX = activeTranslateX || "0px";
  const baseTranslateY = activeTranslateY || "0px";

  useEffect(() => {
    setIsLikelyDesktop(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
    );
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (!hasAnimatedIn) {
            setTimeout(() => {
              setHasAnimatedIn(true);
              setTimeout(() => {
                setApplyEntranceTransition(false);
              }, entranceAnimationDuration * 1000);
            }, animationDelay * 1000);
          }
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [hasAnimatedIn, animationDelay, entranceAnimationDuration]);

  useEffect(() => {
    if (isLikelyDesktop && isInView && containerRef.current) {
      let ticking = false;

      const handleMouseMove = (event: MouseEvent) => {
        const { clientX, clientY } = event;

        if (!ticking) {
          window.requestAnimationFrame(() => {
            if (!containerRef.current) {
              ticking = false;
              return;
            }
            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const x = (clientX - centerX) * sensitivity;
            const y = (clientY - centerY) * sensitivity;
            containerRef.current.style.setProperty("--mouse-x", x.toString());
            containerRef.current.style.setProperty("--mouse-y", y.toString());
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        if (containerRef.current) {
          containerRef.current.style.setProperty("--mouse-x", "0");
          containerRef.current.style.setProperty("--mouse-y", "0");
        }
      };
    } else if (containerRef.current) {
      containerRef.current.style.setProperty("--mouse-x", "0");
      containerRef.current.style.setProperty("--mouse-y", "0");
    }
  }, [isLikelyDesktop, isInView, sensitivity]);

  const entranceTransformY = hasAnimatedIn ? 0 : initialY;
  const entranceScale = hasAnimatedIn ? 1 : initialScale;

  const finalTransform = `
    translateX(calc(${baseTranslateX} + var(--mouse-x, 0) * -0.02px))
    translateY(calc(${baseTranslateY} + ${entranceTransformY}px + var(--mouse-y, 0) * -0.02px))
    scale(${entranceScale})
  `;

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute -z-50 flex items-center justify-center ${className}`}
      style={{
        height: currentSize,
        width: currentSize,
        animation: isInView
          ? `grow ${animationDuration} ease-in-out infinite`
          : "none",
        opacity: hasAnimatedIn ? 1 : 0,
        transform: finalTransform,
        transition: applyEntranceTransition
          ? `opacity ${entranceAnimationDuration}s ease-out, transform ${entranceAnimationDuration}s ease-out`
          : "none",
        willChange: "transform, opacity",
        top: finalTop === null ? undefined : finalTop,
        right: finalRight === null ? undefined : finalRight,
        bottom: finalBottom === null ? undefined : finalBottom,
        left: finalLeft === null ? undefined : finalLeft,
      }}
    >
      {children}

      {/* Spot for embedded div with absolute properites */}
      <div
        className="absolute rounded-full opacity-5"
        style={{
          height: `calc(${currentSize} * 1.2)`,
          width: `calc(${currentSize} * 1.2)`,
          backgroundColor: color,
          transform: `translate(calc(var(--mouse-x, 0) * 0.01px), calc(var(--mouse-y, 0) * 0.01px + var(--scroll-parallax-y, 0px) * -0.05))`,
        }}
      ></div>
      <div
        className="absolute rounded-full border opacity-10"
        style={{
          height: `calc(${currentSize} * 1.2)`,
          width: `calc(${currentSize} * 1.2)`,
          borderColor: color,
          transform: `translate(calc(var(--mouse-x, 0) * 0.015px), calc(var(--mouse-y, 0) * 0.015px + var(--scroll-parallax-y, 0px) * -0.1))`,
        }}
      ></div>
      <div
        className="absolute rounded-full border opacity-10"
        style={{
          height: `calc(${currentSize} * 1.4)`,
          width: `calc(${currentSize} * 1.4)`,
          borderColor: color,
          transform: `translate(calc(var(--mouse-x, 0) * 0.02px), calc(var(--mouse-y, 0) * 0.02px + var(--scroll-parallax-y, 0px) * -0.15))`,
        }}
      ></div>
    </div>
  );
};

export default InteractiveCircles;
