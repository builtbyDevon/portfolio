"use client";

// import { motion, useInView } from "framer-motion"; // Temporarily comment out
import { ReactNode, useRef } from "react";

interface FadeInViewProps {
  children: ReactNode;
  delay?: number; // delay prop will be unused in this test version
}

export const FadeInView = ({ children, delay = 0 }: FadeInViewProps) => {
  // const ref = useRef(null); // Temporarily comment out
  // const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" }); // Temporarily comment out

  // --- TEST VERSION: Render children directly ---
  return <>{children}</>;
  // --- END TEST VERSION ---

  /* --- ORIGINAL CODE TO RESTORE LATER ---
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
  */
};
