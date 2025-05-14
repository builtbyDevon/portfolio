"use client";

import { useEffect, useRef, useState } from "react";

interface FooterConsoleLogProps {
  message: string;
}

export const FooterConsoleLog: React.FC<FooterConsoleLogProps> = ({
  message,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hasLogged, setHasLogged] = useState(false);

  useEffect(() => {
    if (!ref.current || hasLogged) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLogged) {
          console.log(message);
          setHasLogged(true); // Ensure it only logs once
          observer.disconnect(); // Stop observing once logged
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [message, hasLogged]);

  // This div is just for the observer to track, it won't be visible.
  return <div ref={ref} style={{ height: "1px", width: "1px" }} />;
};
