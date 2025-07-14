"use client";

import { useEffect, useRef, ReactNode } from "react";

export default function GradientBorder({ children }: { children: ReactNode }) {
  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const border = borderRef.current;
    if (!border) return;

    let rotation = 0;
    const animate = () => {
      rotation += 1;
      border.style.setProperty("--rotation", `${rotation}deg`);
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div
        ref={borderRef}
        className="pointer-events-none absolute inset-0 z-10 rounded-lg"
        style={{
          borderRadius: "inherit",
          border: "2px solid transparent",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          background:
            "conic-gradient(from var(--rotation, 0deg), transparent 0deg, var(--highlight-green) 60deg, var(--highlight-blue) 120deg, transparent 180deg, transparent 360deg)",
        }}
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
}
