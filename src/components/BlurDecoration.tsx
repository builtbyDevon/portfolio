"use client";

import React from "react";

type BlurDecorationProps = {
  color?: string; // The central color of the gradient
  size?: string; // Defines the diameter of the circular gradient
  opacity?: number; // Opacity of the gradient itself (0 to 1)
  className?: string; // For additional Tailwind classes or custom positioning
  centered?: boolean; // If true, centers the decoration in its parent
};

export const BlurDecoration: React.FC<BlurDecorationProps> = ({
  color = "var(--highlight-blue)",
  opacity = 0.15, // Default opacity
  className = "",
  centered = true,
}) => {
  // Determine positioning classes
  // If centered, it will try to center. If a custom className provides positioning (e.g. top-0, left-0),
  // that will override the default centering from `positionClasses`.

  return (
    <div
      className={`pointer-events-none absolute -z-10 ${className}`}
      style={{
        // The radial gradient:
        // - Starts with the given color at the center.
        // - Fades to transparent. The transparency starts effectively around 70.7% (sqrt(0.5)) for a smooth circular edge.
        //   You can adjust the percentage (e.g., 50%, 60%) to control how quickly it fades.
        // - `circle at center` ensures it's a perfect circle originating from the center.
        background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
        opacity: opacity,
        // No CSS blur filter needed anymore
      }}
    />
  );
};

export default BlurDecoration;
