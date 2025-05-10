"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef, useState, useEffect } from "react";

interface FadeInViewProps {
  children: ReactNode;
  delay?: number; // This will be the delay for desktop
  initialY?: number;
  initialScale?: number;
  desktopInitialBlur?: string;
}

export const FadeInView = ({
  children,
  delay = 0, // Default delay for desktop
  initialY = 20,
  initialScale = 0.95,
  desktopInitialBlur = "blur(2px)",
}: FadeInViewProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const [isLikelyDesktop, setIsLikelyDesktop] = useState(false);

  useEffect(() => {
    setIsLikelyDesktop(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
    );
  }, []);

  const currentInitialBlur = isLikelyDesktop ? desktopInitialBlur : "blur(0px)";
  const animateFilterTo = "blur(0px)";

  // Determine the actual delay based on device type
  // On mobile, we often want animations to be quicker or have no delay after scrolling into view.
  const actualDelay = isLikelyDesktop ? delay : 0; // No delay on mobile

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: initialY,
        scale: initialScale,
        filter: currentInitialBlur,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: animateFilterTo,
            }
          : {
              // Keep initial state if not in view yet, Framer Motion handles this implicitly
              // but being explicit about the non-triggered state if needed for variants.
              // For this setup, an empty {} or re-stating initial is fine if isInView is false.
            }
      }
      transition={{ duration: 0.6, delay: actualDelay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
