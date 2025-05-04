"use client";

import React from "react";

type BlurDecorationProps = {
  color?: string;
  height?: string;
  width?: string;
  className?: string;
  centered?: boolean;
};

export const BlurDecoration: React.FC<BlurDecorationProps> = ({
  color = "var(--highlight-blue)",
  height = "400px",
  width = "100%",
  className = "",
  centered = true,
}) => {
  // Default to centered positioning, but allow overriding with className
  const positionClasses = centered
    ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    : "bottom-0 left-0";

  return (
    <div
      className={`absolute -z-10 opacity-15 blur-[150px] ${positionClasses} ${className}`}
      style={{
        backgroundColor: color,
        height,
        width,
      }}
    />
  );
};

export default BlurDecoration;
