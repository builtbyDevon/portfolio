"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the cursor to avoid SSR issues
const AnimatedCursorComponent = dynamic(
  () => import("react-animated-cursor").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function AnimatedCursor() {
  return (
    <AnimatedCursorComponent
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={1.7}
      outerAlpha={0.2}
      innerStyle={{
        backgroundColor: "var(--highlight-blue)",
      }}
      outerStyle={{
        border: "3px solid var(--highlight-green)",
        mixBlendMode: "exclusion",
      }}
      clickables={[
        "a",
        "button",
        "input",
        "select",
        "textarea",
        ".clickable",
        ".link",
        "label",
      ]}
    />
  );
}
