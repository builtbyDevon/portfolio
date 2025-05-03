'use client';

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
}

export const FadeInView = ({ children, delay = 0 }: FadeInViewProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}; 2