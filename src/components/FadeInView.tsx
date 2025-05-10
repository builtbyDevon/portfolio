"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef, useState, useEffect } from "react";

interface FadeInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number; // This will be the delay for desktop
  initialY?: number;
  initialScale?: number;
}

export const FadeInView = ({
  children,
  className = "",
  delay = 0, // Default delay for desktop
  initialY = 20,
  initialScale = 0.95,
}: FadeInViewProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const [isLikelyDesktop, setIsLikelyDesktop] = useState(false);

  useEffect(() => {
    setIsLikelyDesktop(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
    );
  }, []);

  const actualDelay = isLikelyDesktop ? delay : 0;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: initialY,
        scale: initialScale,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {}
      }
      transition={{ duration: 0.6, delay: actualDelay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
